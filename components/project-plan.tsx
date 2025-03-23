"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon, LoaderIcon } from "lucide-react";

export default function ProjectPlan() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add a timer to detect when the iframe might be loaded
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <div className="inline-block px-6 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Zeitplan</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Projektplan</h2>
                <p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                    Unser detaillierter Zeitplan und Meilensteine für die Projektdurchführung.
                </p>
            </div>

            <Card className="shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 flex flex-row items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <CalendarIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>ClickUp Projektplan</CardTitle>
                </CardHeader>
                <CardContent className="p-0 relative min-h-[700px]">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 z-10">
                            <div className="flex flex-col items-center">
                                <LoaderIcon className="h-8 w-8 text-blue-500 animate-spin mb-2" />
                                <p className="text-sm text-slate-600 dark:text-slate-400">Projektplan wird geladen...</p>
                            </div>
                        </div>
                    )}
                    <iframe 
                        className="clickup-embed" 
                        src="https://sharing.clickup.com/9015979091/g/h/8cp9v2k-135/3c347f92760d575" 
                        width="100%" 
                        height="700px"
                        style={{ 
                            background: "transparent", 
                            border: "none"
                        }}
                        onLoad={() => setIsLoading(false)}
                        title="ClickUp Projektplan"
                    />
                </CardContent>
            </Card>
        </div>
    );
}