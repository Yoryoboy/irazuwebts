import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import carlos from "@/assets/images/team/carlos.webp";
import cecilia from "@/assets/images/team/ceci.webp";
import jorge from "@/assets/images/team/jorge.webp";
import efrain from "@/assets/images/team/efra.webp";
import lautaro from "@/assets/images/team/lautaro.webp";
const teamMembers = [
  {
    name: "Carlos Salazar",
    position: "CEO",
    bio: "Founder of Irazu Technology with 40+ years in telecommunications, specializing in HFC and FTTH network design across North America. Delivers innovative, cost-effective solutions.",
    image: carlos,
    linkedin: "#",
    email: "carlos@irazu.tech",
  },
  {
    name: "Cecilia Barbosa",
    position: "Accounting",
    bio: "Cecilia Barbosa is a seasoned accountant with over xx years of experience in the industry. She is responsible for ensuring the accuracy and integrity of our financial records and reporting.",
    image: cecilia,
    linkedin: "#",
    email: "cecilia@irazu.tech",
  },
  {
    name: "Jorge Diaz",
    position: "Project Manager",
    bio: "Jorge Diaz is a seasoned project manager with over 7 years of experience in the industry. He is responsible for ensuring the accuracy and integrity of our financial records and reporting.",
    image: jorge,
    linkedin: "#",
    email: "jorge@irazu.tech",
  },
  {
    name: "Efrain Camacho",
    position: "Project Manager",
    bio: "Efrain Camacho is a seasoned project manager with over 7 years of experience in the industry. He is responsible for ensuring the accuracy and integrity of our financial records and reporting.",
    image: efrain,
    linkedin: "#",
    email: "efrain@irazu.tech",
  },
  {
    name: "Lautaro Rodriguez",
    position: "Project Manager",
    bio: "Lautaro Rodriguez is a seasoned project manager with over 5 years of experience in the industry. He is responsible for ensuring the accuracy and integrity of our financial records and reporting.",
    image: lautaro,
    linkedin: "#",
    email: "lautaro@irazu.tech",
  },
];

function TeamGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="h-full flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                className="h-60 w-full object-cover rounded-t-xl"
              />
              <CardContent className="flex flex-col flex-1 justify-between p-4">
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-5 h-5 hover:text-blue-500" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-blue-500" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamGrid;
