"use client";;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

// Example team data - you would typically fetch this from an API or database
const teamMembers = [
  {
    id: 1,
    name: "Julian Lachenmaier",
    role: "Projektleitung",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Ayo A",
    role: "Verantwortlicher für Tests",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Din",
    role: "Verantwortlicher für Modellierung & Verantwortlicher für Recherche",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Cedric Balzer",
    role: "Verantwortlicher für Implementierung & Technischer Assistent",
    email: "i23003@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Rebecca",
    role: "Verantwortliche für Qualitätssicherung und Dokumentation",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
  },

]


export default function TeamProfiles() {


  return (
    <div className="space-y-8 flex flex-col items-center justify-center">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-[90vw] max-w-6xl">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardContent>
              <div className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                      {member.name}
                    </a>
                  </CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

