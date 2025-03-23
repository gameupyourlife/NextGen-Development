import TeamProfiles from "@/components/team-profiles"
import DocumentSection from "@/components/document-section"
import ProjectSection from "@/components/project-section"
import ProjectPlan from "@/components/project-plan"

export default function TeamPage() {
  return (
    <div className="container  py-10 space-y-12 ">
      <ProjectSection />


      <div className="space-y-4 text-center ">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Das Team</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Die Gruppe besteht aus fünf Mitgliedern, die sich auf verschiedene Bereiche spezialisiert haben. Jeder bringt seine eigenen Fähigkeiten und Erfahrungen ein, um das Projekt erfolgreich umzusetzen.
        </p>
      </div>

      <TeamProfiles />

      <ProjectPlan />

      <div className="pt-8 border-t">
        <DocumentSection />
      </div>
    </div>
  )
}

