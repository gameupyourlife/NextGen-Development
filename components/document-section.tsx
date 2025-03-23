"use client";;
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FileIcon, FileTextIcon, ImageIcon, SearchIcon, XIcon, DownloadIcon, FolderIcon } from "lucide-react";
import { getDocuments } from "@/lib/actions";
import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export type Document = {
  id: string
  title: string
  type: string
  url: string
}

export default function DocumentSection() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Get unique document types for filtering
  const documentTypes = ["all", ...new Set(documents.map(doc => doc.type))];

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || doc.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileTextIcon className="h-8 w-8 text-red-500/90" />;
      case "image":
        return <ImageIcon className="h-8 w-8 text-blue-500/90" />;
      default:
        return <FileIcon className="h-8 w-8 text-emerald-500/90" />;
    }
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await getDocuments();
        setDocuments(res);
      }
      catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Search and filter bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="relative flex-1 w-full sm:max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Suche nach Dokumenten..."
            className="pl-10 pr-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-full h-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setSearchQuery("")}
            >
              <XIcon className="h-4 w-4 text-slate-500" />
            </button>
          )}
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full sm:w-auto"
        >
          <TabsList className="w-full grid grid-cols-3 sm:w-auto sm:inline-flex">
            {documentTypes.map((type) => (
              <TabsTrigger key={type} value={type} className="capitalize">
                {type === "all" ? "Alle" : type}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Document grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card
              key={doc.id}
              className="group transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden pt-0 gap-0"
            >
              <div className="relative p-6 pb-4 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      {getDocumentIcon(doc.type)}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {doc.type.toUpperCase()}
                      </p>
                      <h3 className="text-base font-semibold line-clamp-1">{doc.title}</h3>
                    </div>
                  </div>
                  {/* <Badge variant="outline" className="uppercase">
                    {getFileExtension(doc.title)}
                  </Badge> */}
                </div>
              </div>
              {/* <CardContent className="p-6 pt-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {doc.title}
                </p>
              </CardContent> */}
              <CardFooter className=" bg-white dark:bg-transparent border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = doc.url;
                    link.download = doc.title;
                    link.rel = "noopener noreferrer";
                    link.style.display = "none";
                    link.setAttribute("download", doc.title);
                    link.setAttribute("aria-label", `Download ${doc.title}`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <DownloadIcon className="h-4 w-4" />
                  <span>Herunterladen</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-slate-50 dark:bg-slate-900/20 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-full mb-4">
            <FolderIcon className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium mb-2">Keine Dokumente gefunden</h3>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-6">
            Es wurden keine Dokumente gefunden, die Ihren Suchkriterien entsprechen.
          </p>
          {searchQuery && (
            <Button onClick={() => setSearchQuery("")} variant="outline">
              Suche zurücksetzen
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

