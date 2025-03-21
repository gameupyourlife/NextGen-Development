"use server"
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { Document } from "@/components/document-section";

export async function getDocuments() {
    const documents: Document[] = []
    const documentsPath = join(process.cwd(), "public", "documents")

    readdirSync(documentsPath).forEach((file) => {
        const filePath = join(documentsPath, file)
        const stats = statSync(filePath)
        const fileType = file.split(".").pop()
        const fileDate = stats.mtime.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
        const document: Document = {
            id: file,
            title: file,
            date: fileDate,
            type: fileType || "unknown",
        }
        documents.push(document)
    })

    return documents
}