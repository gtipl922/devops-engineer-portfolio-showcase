
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
    },
    {
      category: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "OpenShift", "Docker Swarm"]
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
    },
    {
      category: "CI/CD Tools",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"]
    },
    {
      category: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"]
    },
    {
      category: "Programming & Scripting",
      skills: ["Python", "Bash", "Go", "JavaScript", "PowerShell"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      category: "Security & Compliance",
      skills: ["Vault", "OWASP", "SAST/DAST", "Compliance Frameworks"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
