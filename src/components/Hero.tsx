
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
            alt="DevOps Engineer"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            DevOps Engineer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Automating infrastructure, optimizing deployments, and building scalable systems 
          with <span className="text-blue-400 font-semibold">5 years of experience</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Github size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Linkedin size={28} />
          </a>
          <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Mail size={28} />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-blue-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
