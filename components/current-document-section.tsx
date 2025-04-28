"use client";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { getDocuments } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";

// Gemeinsamer Typ für Dokumente
export type Document = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: string;
};

type DocumentDisplaySectionProps = {
  path: string;
};

function DocumentDisplay({ title, description, url }: Omit<Document, 'id' | 'type'>) {
  // Download-Funktion für Produktions-URL
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.rel = "noopener noreferrer";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="flex flex-col justify-between h-full transition-all hover:shadow-md">
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
          <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        {description && <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">{description}</p>}
      </div>
      <CardFooter className="bg-white dark:bg-transparent border-t border-slate-100 dark:border-slate-800">
        <Button onClick={handleDownload} variant="outline" className="w-full">
          Herunterladen
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function DocumentDisplaySection({ path }: DocumentDisplaySectionProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDocuments(path)
      .then((res) => {
        setDocuments(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching documents:", err);
        setError("Dokumente konnten nicht geladen werden.");
        setLoading(false);
      });
  }, [path]);

  return (
    <section className="container py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-purple-50/10 to-blue-50/10 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-blue-950/10 rounded-xl -z-10" />

      <div className="space-y-6 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-100 dark:to-slate-300">
          Aktuelle Dokumente
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          Hier finden Sie die aktuell wichtigsten Dokumente zum Projekt.
        </p>
      </div>

      {loading && <p className="text-center">Lade Dokumente…</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {documents.map((doc) => (
            <DocumentDisplay
              key={doc.id}
              title={doc.title}
              description={doc.description}
              url={doc.url}
            />
          ))}
        </div>
      )}
    </section>
  );
}
