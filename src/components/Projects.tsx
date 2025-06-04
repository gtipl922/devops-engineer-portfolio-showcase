
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Built a unified infrastructure management platform supporting AWS, Azure, and GCP with Terraform modules and automated compliance checking.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS", "Azure", "Python", "GitLab CI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Implemented comprehensive monitoring solution for Kubernetes clusters with Prometheus, Grafana, and custom dashboards for application metrics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Kubernetes", "Prometheus", "Grafana", "Helm", "Go"],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented GitOps-based CI/CD pipelines with automated testing, security scanning, and deployment to multiple environments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Jenkins", "Docker", "ArgoCD", "SonarQube", "Ansible"],
      github: "#",
      demo: "#"
    },
    {
      title: "Infrastructure Cost Optimization",
      description: "Developed automated cost optimization tools that reduced cloud infrastructure costs by 45% through right-sizing and resource scheduling.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      technologies: ["Python", "AWS Lambda", "CloudWatch", "Boto3", "Slack API"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of infrastructure automation, monitoring solutions, and DevOps tooling
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
