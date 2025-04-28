import TeamProfiles from "@/components/team-profiles"
import DocumentSection from "@/components/document-section"
import ProjectSection from "@/components/project-section"
import ProjectPlan from "@/components/project-plan"
import Logo from "@/components/logo"
import { CollapsibleSection } from "@/components/collapsible-section"
import DocumentDisplaySection from "@/components/current-document-section"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50/40 dark:to-slate-950/40">
      {/* Hero section with logo */}
      <section className="container pt-16 pb-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-40 md:w-56 transition-all duration-300 hover:scale-105">
            <Logo />
          </div>
        </div>
      </section>

      {/* Project overview section */}
      <section className="container py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-purple-50/10 to-blue-50/10 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-blue-950/10 rounded-xl -z-10"></div>
        <ProjectSection />
      </section>

      {/* Prototype section */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-blue-50/20 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-blue-950/20 rounded-xl -z-10"></div>
        <div className="space-y-6 text-center">
          <div className="inline-block px-6 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Prototyp</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-100 dark:to-slate-300">
            Event Management System
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Testen Sie unseren funktionierenden Prototypen mit den untenstehenden Anmeldedaten.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">Zugangsdaten:</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                <span className="font-medium">URL:</span>
                <a href="https://ems.gameup.dev/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 dark:text-blue-400 hover:underline truncate">
                  https://ems.gameup.dev/
                </a>
                <span className="font-medium">E-Mail:</span>
                <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">test@mail.de</span>
                <span className="font-medium">Passwort:</span>
                <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">Test123!</span>
              </div>
            </div>
            <a 
              href="https://ems.gameup.dev/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
            >
              Prototyp öffnen
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400 max-w-md text-center">
            Der Prototyp demonstriert die grundlegenden Funktionen unseres Event Management Systems.
            Bitte beachten Sie, dass sich das System noch in der Entwicklung befindet.
          </div>
        </div>
      </section>

      <DocumentDisplaySection path={"public/documents/Aktuell"} />

      {/* Team section */}
      <section className="container py-16 relative overflow-hidden">
        <div className="space-y-6 text-center">
          <div className="inline-block px-6 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Das Team</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-100 dark:to-slate-300">
            Unser Team
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Die Gruppe besteht aus fünf Mitgliedern, die sich auf verschiedene Bereiche spezialisiert haben.
            Jeder bringt seine eigenen Fähigkeiten und Erfahrungen ein, um das Projekt erfolgreich umzusetzen.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/10 dark:bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/10 dark:bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>

        <div className="mt-12">
          <TeamProfiles />
        </div>
      </section>

      {/* Project plan section with subtle background */}
      <section className="container py-16  rounded-xl my-8">
        <ProjectPlan />
      </section>

      {/* Document section */}
      
        <section className="container py-16  border-slate-200 dark:border-slate-800">
          <div className="mb-10 text-center">
            <div className="inline-block px-6 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Dokumente</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Projektdokumente</h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
              Hier finden Sie alle wichtigen Dokumente zum Projekt.
            </p>
          </div>
          <div className="flex flex-col gap-8"> 
            <CollapsibleSection title="Allgemein">
              <DocumentSection path="public/documents/Allgemein" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 1">
              <DocumentSection path="public/documents/Aufgabenblatt 1" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 2">
              <DocumentSection path="public/documents/Aufgabenblatt 2" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 3">
              <DocumentSection path="public/documents/Aufgabenblatt 3" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 4">
              <DocumentSection path="public/documents/Aufgabenblatt 4" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 5">
              <DocumentSection path="public/documents/Aufgabenblatt 5" />
            </CollapsibleSection>
            <CollapsibleSection title="Aufgabenblatt 6">
              <DocumentSection path="public/documents/Aufgabenblatt 6" />
            </CollapsibleSection>
          </div>
        </section>
      

      {/* Footer */}
      <footer className="container py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} NextGen Development. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  )
}

