"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Cloud, Shield, Brain, Cpu, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { title } from 'process';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { id: 'home', label: 'ONLINE PORTOFOLIO' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const projects = [
    {
      title: "Blockchain-Based Supply Chain Tracker",
      period: "JUNE 2025 - DEC 2025",
      description: "Blockchain-based cold supply chain system leveraging Raspberry Pi sensor data for secure shipment tracking. Developed web and mobile frontend, implemented QR code generation for asset tracking.",
      tech: ["React.js", "Express.js", "Sepolia Blockchain", "Infura", "PostgreSQL", "IoT", "Raspberry Pi"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Colombo International Bookfair Reservation System",
      period: "OCT 2025 - DEC 2025",
      description: "Backend contributor on microservices-based reservation system, implementing REST APIs, business logic, and resolving backend issues to improve system reliability.",
      tech: ["Spring Boot", "Microservices", "RabbitMQ", "Docker", "AWS EC2", "AWS RDS", "Nginx"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "HPC Image Processing",
      period: "JUNE 2025 - SEP 2025",
      description: "Implemented and optimized image processing filters using serial, OpenMP, MPI, and hybrid C programs, evaluating performance and scalability across shared and distributed memory.",
      tech: ["OpenMP", "MPI", "C", "Linux", "Image Processing"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Secure Chat Application",
      period: "SEP 2024 - APRIL 2025",
      description: "Developed a secure client–server chat system with authenticated user access, implementing Diffie–Hellman key exchange, AES encryption, HMAC validation, and salted password hashing to ensure confidential and integrity-protected messaging.",
      tech: ["C/Python", "Socket Programming", "AES", "HMAC", "Diffie–Hellman", "Cryptography"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Event Ticket Booking System",
      period: "JUNE 2024 - SEP 2024",
      description: "Designed and developed a cloud-native, microservices-based event booking system using FastAPI and React.js, deployed on AWS ECS with Docker and Terraform for scalability and automation. Implemented secure authentication, event management, and monitoring with Prometheus, Grafana, and CloudWatch to ensure high availability and reliability.",
      tech: ["FastAPI", "React.js", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS ECS", "Terraform", "Prometheus", "Grafana"],
      icon: <ExternalLink className="w-6 h-6" />
    },
    {
      title: "HDL Gen Hub",
      period: "SEP 2023 - APRIL 2024",
      description: "E-learning platform for undergraduates to learn HDL, featuring course & quiz management, Verilog compiler, and admin console.",
      tech: ["MongoDB", "Node.js", "Express", "React", "Jest", "Docker"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Automatic Tag Generator for Stack Overflow",
      period: "OCT 2025 - DEC 2025",
      description: "NLP system using fine-tuned transformer to auto-generate tags for Stack Overflow questions, improving discoverability.",
      tech: ["Python", "T5-Small", "PyTorch", "Flask", "Hugging Face"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Blood Link Mobile App",
      period: "2024",
      description: "Blood donation app connecting patients with nearby donors for timely transfusions. Role: UI/UX frontend developer.",
      tech: ["Flutter", "Dart", "Firebase"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const skills = {
    "Programming": ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    "Web Technologies": ["React", "Next.js", "Node.js", "Express.js"],
    "Backend & APIs": ["RESTful APIs", "Microservices Architecture", "Spring Boot", "Laravel"],
    "Cloud & DevOps": ["Docker", "AWS EC2", "AWS RDS", "Git", "Nginx"],
    "Cybersecurity": ["Security Fundamentals", "Secure System Design", "Network Security"],
    "AI & Data": ["Machine Learning", "Neural Networks", "NLP", "PyTorch"],
    "Specialized": ["Blockchain", "IoT", "HPC", "Big Data"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-mono tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Year Tag */}
            <div className="text-sm font-mono text-slate-500">PORTFOLIO 2026</div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-mono text-slate-600 hover:text-blue-600 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block">
                <span className="text-sm font-mono text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                  Hello !!!
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tharuka</span>
                <br />
                Dehiwalage
              </h1>

              <div className="inline-block">
                <span className="text-lg font-mono bg-blue-600 text-white px-4 py-2 rounded">
                  COMPUTER ENGINEER
                </span>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Engineering graduate from University of Ruhuna with hands-on experience in designing, 
                developing, and deploying modern software systems. Skilled in backend development, 
                containerized environments, cloud platforms, and secure application practices.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://github.com/sandarenuDT" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/tharukasandarenu-7668b1290" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </button>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center gap-4 pt-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Scroll to explore
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>
            </div>

            {/* Right - Your Professional Photo */}
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                {/* Your Photo - Replace /profile.jpg with your actual image */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/profile.jpg"
                    alt="Tharuka Dehiwalage - Computer Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Optional gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Profile</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Possesses a strong interest in software engineering, cybersecurity, artificial 
                intelligence, and cloud computing, with a solid understanding of scalable system 
                design and real-world distributed applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">dehiwalagetharuka99@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">071 255 7625</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Teamwork', 'Time Management', 'Leadership', 'Effective Communication', 'Critical Thinking', 'Problem Solving'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Advanced Level Examination
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">Ch/Ananda National College</p>
                  <p className="text-slate-600 mt-2">Maths Stream</p>
                  <p className="text-slate-600 mt-1">District Rank: 13</p>
                </div>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-mono text-slate-700 shadow-sm">
                  2016  – 2018 
                </span>
              </div>
            </div>

             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    BSc.Hons Computer Engineering
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">University of Ruhuna</p>
                  <p className="text-slate-600 mt-2">Second Class Lower Division</p>
                </div>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-mono text-slate-700 shadow-sm">
                  2021 March – 2026 January
                </span>
              </div>
            </div>


            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Red Cyber Competition</h3>
                </div>
                <p className="text-slate-600">
                  Participated in cybersecurity competition, gaining practical exposure to security challenges
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Inter Faculty Dancing Competition</h3>
                </div>
                <p className="text-slate-600">
                  Participated in inter faculty dancing competition, showcasing teamwork and performance skills
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Final Year Project Demonstrator</h3>
                </div>
                <p className="text-slate-600">
                  Presented at Rextro Exhibition 2025 to academic and industry audiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Software Engineer Intern</h3>
                  <p className="text-2xl text-blue-600 font-semibold">PayMedia</p>
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-mono text-sm shadow-md">
                  Aug 2024 - Feb 2025
                </span>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Software Engineer Intern on the live DhiraaguPay fintech platform, developing frontend features 
                with React.js and Next.js, integrating authentication and REST APIs, and contributing to PHP/Laravel 
                backend services and PostgreSQL-based systems.
              </p>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-sm font-semibold text-slate-500 mb-3">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'TanStack Table', 'AG Grid', 'Recharts', 'NextAuth', 'JWT', 'REST APIs', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'Git'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-slate-500 text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Let&apos;s Build Something Together</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="text-xl mb-12 text-blue-100">
            Open to opportunities in software engineering, cloud computing, and AI. 
            Let&apos;s connect and create something amazing!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:dehiwalagetharuka99@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold shadow-lg">
              <Mail className="w-5 h-5" />
              dehiwalagetharuka99@gmail.com
            </a>
            <a href="tel:0712557625"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl hover:bg-white/20 transition-all font-semibold">
              <Phone className="w-5 h-5" />
              071 255 7625
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/sandarenuDT" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tharukasandarenu-7668b1290" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-slate-600">
              © 2026 Tharuka Dehiwalage. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}