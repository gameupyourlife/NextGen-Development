import { CheckIcon, RocketIcon, UsersIcon, SettingsIcon, BuildingIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function ProjectSection() {
    const features = [
        {
            icon: <RocketIcon className="h-5 w-5" />,
            title: "Event-Erstellung & Verwaltung",
            description: "Organisationen können Events erstellen und konfigurieren."
        },
        {
            icon: <UsersIcon className="h-5 w-5" />,
            title: "Teilnehmermanagement",
            description: "Benutzer können sich registrieren und an Events ihrer Organisation teilnehmen."
        },
        {
            icon: <SettingsIcon className="h-5 w-5" />,
            title: "Automatisierte Prozesse",
            description: "Organisatoren erhalten Werkzeuge zur Kommunikation und Verwaltung von Event-Abläufen."
        },
        {
            icon: <BuildingIcon className="h-5 w-5" />,
            title: "Multi-Organisation Support",
            description: "Mehrere Organisationen können unabhängig voneinander Events anbieten."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="space-y-6 text-center mb-12">
                <div className="inline-block px-6 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Unser Projekt</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">
                    Online Event Management System
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                    Unser Projekt zielt darauf ab, eine umfassende Lösung für Event Management zu entwickeln, 
                    die den Anforderungen moderner Organisationen gerecht wird.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <Card className="col-span-1 lg:col-span-2 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-900/30">
                    <CardContent className="p-8">
                        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Projektbeschreibung</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Im Rahmen des Software Engineering I Praktikums entwickeln wir ein Online Event Management System – 
                            eine webbasierte Plattform zur Planung und Verwaltung von Veranstaltungen. Unser System ermöglicht es 
                            Organisationen, eigene Events anzulegen, Teilnehmer zu verwalten und den Event-Prozess effizient zu steuern.
                        </p>
                        <h3 className="text-lg font-medium mb-3 text-slate-800 dark:text-slate-200">Ziel des Projekts</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Unser Ziel ist es, eine intuitive und leistungsfähige Plattform zu entwickeln, 
                            die Organisationen dabei unterstützt, Veranstaltungen effizient zu managen. 
                            Dabei setzen wir auf moderne Softwareentwicklungsmethoden und eine strukturierte Projektorganisation.
                        </p>
                    </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/30">
                    <CardContent className="p-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                <CheckIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </span>
                            Technologien
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-slate-700 dark:text-slate-300">Next.js & React</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-slate-700 dark:text-slate-300">TypeScript</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-slate-700 dark:text-slate-300">Tailwind CSS</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-slate-700 dark:text-slate-300">PostgreSQL</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-slate-700 dark:text-slate-300">C# & ASP.net</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                <div className="text-blue-600 dark:text-blue-400">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">{feature.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}