"use server";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
})

export async function getDocuments() {
    // Octokit.js
    // https://github.com/octokit/core.js#readme

    const res = await octokit.request('GET /repos/gameupyourlife/software-project-team-website/contents/public/documents/', {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    interface GithubContentFile {
        name: string;
        path: string;
        download_url: string;
    }

    const documents = res.data.map((doc: GithubContentFile) => {
        const fileName = doc.name.split(".")[0]
        const fileType = doc.name.split(".")[1]
        return {
            id: doc.path,
            title: fileName,
            type: fileType,
            url: doc.download_url,
        }
    })


    return documents;
}