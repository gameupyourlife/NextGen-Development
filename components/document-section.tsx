"use client";;
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FileIcon, FileTextIcon, ImageIcon, SearchIcon, XIcon } from "lucide-react";
import { getDocuments } from "@/lib/actions";
import { Button } from "./ui/button";

export type Document = {
  id: string
  title: string
  type: string
  url: string
}

export default function DocumentSection() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })




  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileTextIcon className="h-5 w-5 text-red-500" />
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-500" />
      default:
        return <FileIcon className="h-5 w-5 text-green-500" />
    }
  }

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await getDocuments()
        setDocuments(res)
      }
      catch (error) {
        console.error("Error fetching documents:", error)
      }
    }

    fetchDocuments()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-y-6 w-[90vw] max-w-6xl ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dokumente</h2>
            <p className="text-muted-foreground">Von unserem Team veröffentlichte Dokumente</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8 w-full sm:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="absolute right-2 top-2.5" onClick={() => setSearchQuery("")}>
                  <XIcon className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center p-4 border rounded-md shadow-sm">
                {getDocumentIcon(doc.type)}
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">{doc.title}</h3>
                </div>
                <Button
                  className="ml-auto"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = doc.url
                    link.download = doc.title
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  Download
                </Button>
              </div>
            ))
          ) : (
            <div className="p-4 border rounded-md shadow-sm text-center">
              <p className="text-sm text-muted-foreground">No documents found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

