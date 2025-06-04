
import { Server, Shield, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Infrastructure Automation",
      description: "Expert in Infrastructure as Code using Terraform, Ansible, and CloudFormation"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Security & Compliance",
      description: "Implementing security best practices and compliance frameworks in CI/CD pipelines"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance Optimization",
      description: "Optimizing system performance and reducing deployment times by up to 70%"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Collaboration",
      description: "Leading cross-functional teams and mentoring junior engineers"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Passionate DevOps Engineer with 5 years of experience in automating infrastructure, 
            implementing CI/CD pipelines, and optimizing cloud environments. I specialize in 
            bridging the gap between development and operations teams to deliver robust, 
            scalable solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
