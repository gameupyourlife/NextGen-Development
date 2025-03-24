"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

// Example team data - you would typically fetch this from an API or database
const teamMembers = [
  {
    id: 1,
    name: "Julian Lachenmaier",
    role: "Projektleitung",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Projektmanagement", "Frontend"],
  },
  {
    id: 2,
    name: "Ayo Adeniyi",
    role: "Verantwortlicher für Tests",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Testing", "QA", "Backend"],
  },
  {
    id: 3,
    name: "Din Alomerovic",
    role: "Verantwortlicher für Modellierung",
    subtitle: "und Recherche",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["UML", "Recherche", "Backend"],
  },
  {
    id: 4,
    name: "Cedric Balzer",
    role: "Verantwortlicher für Implementierung",
    email: "i23003@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Frontend", "Backend", "DevOps"],
    subtitle: "Technischer Assistent",
  },
  {
    id: 5,
    name: "Rebecca Niklaus",
    role: "Verantwortliche für Qualitätssicherung",
    email: "i23XXX@hb.dhbw-stuttgart.de",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Dokumentation", "QA", "Backend"],
    subtitle: "und Dokumentation",
  },
]

export default function TeamProfiles() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card 
            key={member.id} 
            className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 pt-0"
          >
            <CardHeader className="bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 py-6">
              <div className="flex items-center justify-center mb-4">
                <Avatar className="h-24 w-24 ring-4 ring-white dark:ring-slate-800 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center">
                <CardTitle className="text-xl mb-1">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium">
                  {member.role}
                  {member.subtitle && <span className="block text-xs mt-0.5">{member.subtitle}</span>}
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="pt-5 pb-2">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-50 dark:bg-slate-900/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-center gap-4 py-4 border-t border-slate-100 dark:border-slate-800">
              <a 
                href={`mailto:${member.email}`} 
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <MailIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`${member.name}'s GitHub`}
              >
                <GithubIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <LinkedinIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

