import { CheckIcon } from "lucide-react";

export default function ProjectSection() {
    return (

        <div className="container py-10 space-y-12 ">

            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Online Event Management System</h1>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Unser Projekt zielt darauf ab, eine umfassende Lösung zu entwickeln, die den Anforderungen unserer Benutzer gerecht wird.
                </p>
            </div>

            <div className="pt-8  flex flex-col items-center justify-center">
                <div className="max-w-6xl w-[90vw] mx-auto">
                    Im Rahmen des Software Engineering I Praktikums entwickeln wir ein Online Event Management System – eine webbasierte Plattform zur Planung und Verwaltung von Veranstaltungen. Unser System ermöglicht es Organisationen, eigene Events anzulegen, Teilnehmer zu verwalten und den Event-Prozess effizient zu steuern.
                    <p className=" flex gap-1 pt-2">
                        <CheckIcon /> Event-Erstellung & Verwaltung – Organisationen können Events erstellen und konfigurieren.
                    </p>
                    <p className="flex gap-1">
                        <CheckIcon /> Teilnehmermanagement – Benutzer können sich registrieren und an Events ihrer Organisation teilnehmen.
                    </p>
                    <p className="flex gap-1">
                        <CheckIcon /> Automatisierte Prozesse – Organisatoren erhalten Werkzeuge zur Kommunikation und Verwaltung von Event-Abläufen.
                    </p>
                    <p className="flex gap-1 pb-2">
                        <CheckIcon /> Multi-Organisation Support – Mehrere Organisationen können unabhängig voneinander Events anbieten.
                    </p>
                    Ziel des Projekts
                    Unser Ziel ist es, eine intuitive und leistungsfähige Plattform zu entwickeln, die Organisationen dabei unterstützt, Veranstaltungen effizient zu managen. Dabei setzen wir auf moderne Softwareentwicklungsmethoden und eine strukturierte Projektorganisation.
                </div>
            </div>
        </div>
    )
}