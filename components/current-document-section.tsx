"use client";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { getDocuments} from "@/lib/actions";

interface DocType {
  id: string;
  title: string;
  type: string;
  url: string;
}
import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";

type Props = {
  path: string;
};

export default function DocumentDisplaySection({ path }: Props) {
  const [documents, setDocuments] = useState<DocType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDocuments(path)
      .then((docs) => {
        setDocuments(docs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Dokumente konnten nicht geladen werden.");
        setLoading(false);
      });
  }, [path]);

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p className="text-center">Lade Dokumente…</p>;
  if (error)   return <p className="text-center text-red-500">{error}</p>;

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {documents.map((doc) => (
          <Card key={doc.id} className="flex flex-col justify-between h-full transition-all hover:shadow-md">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">{doc.title}</h3>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
                Typ: {doc.type.toUpperCase()}
              </p>
            </div>
            <CardFooter className="bg-white dark:bg-transparent border-t border-slate-100 dark:border-slate-800">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleDownload(doc.url, doc.title)}
              >
                Herunterladen
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}