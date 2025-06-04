
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led migration of legacy infrastructure to AWS, reducing costs by 40%",
        "Implemented GitOps workflows with ArgoCD, improving deployment reliability",
        "Designed and built monitoring stack serving 10M+ daily requests",
        "Mentored team of 5 junior engineers in DevOps best practices"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      achievements: [
        "Built CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        "Automated infrastructure provisioning using Terraform and Ansible",
        "Implemented container orchestration with Kubernetes",
        "Established security scanning in deployment pipelines"
      ]
    },
    {
      title: "System Administrator",
      company: "DataFlow Inc",
      location: "Denver, CO",
      period: "2019 - 2020",
      achievements: [
        "Managed Linux server infrastructure supporting 1000+ users",
        "Implemented backup and disaster recovery procedures",
        "Automated routine maintenance tasks with Python scripts",
        "Maintained 99.9% uptime across production environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-300">
            5 years of progressive experience in DevOps and infrastructure automation
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-blue-400 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:text-right text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
