"use server";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

export async function getDocuments(path: string) {
    try {
        // GitHub API Request
        const res = await octokit.request('GET /repos/gameupyourlife/software-project-team-website/contents/{path}', {
            owner: 'gameupyourlife',
            repo: 'software-project-team-website',
            path: path, // Dynamischer Pfad
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        interface GithubContentFile {
            name: string;
            path: string;
            sha: string;
            size: number;
            url: string;
            html_url: string;
            git_url: string;
            download_url: string;
            type: string;
            _links: {
                self: string;
                git: string;
                html: string;
            };
        }

        // Dokumente aus der API-Antwort extrahieren
        const documents = res.data.map((doc: GithubContentFile) => {
            const dockNameSplit = doc.name.split(".");
            const fileName = dockNameSplit.slice(0, dockNameSplit.length - 1).join(".");
            const fileType = dockNameSplit[dockNameSplit.length - 1];
            return {
                id: doc.path,
                title: fileName,
                type: fileType,
                url: doc.download_url,
            };
        });

        return documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
}