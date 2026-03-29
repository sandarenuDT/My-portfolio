"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Cloud, Shield, Brain, Cpu, ChevronDown, Menu, X, ArrowUpRight, Play, Lock, Zap, Globe, Star, ChevronRight, Smartphone } from 'lucide-react';
import Image from 'next/image';

// ─── Types ───────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  period: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  demoVideo?: string;
  previewImage?: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "LifeDrop Mobile App",
    period: "Jan 2026 – Present",
    shortDesc: "Blood donation management app with real-time booking and tracking.",
    fullDesc: "A full-stack mobile application designed to streamline blood donation processes by enabling users to book appointments, track donation history, and receive real-time updates. Built with a modern React Native frontend and backed by a Node.js/Express API, the system integrates secure authentication, donation center management, and appointment scheduling features to enhance donor engagement and operational efficiency.",
    highlights: [
      "Appointment booking system with real-time availability",
      "User authentication and profile management",
      "Donation history tracking and notifications",
      "RESTful API integration with Express.js backend",
      "Responsive and user-friendly mobile UI with React Native"
    ],
    tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    github: "https://github.com/sandarenuDT/life-drop",
    category: "Mobile Application",
    icon: <Smartphone className="w-5 h-5" />,
    color: "#ef4444"

  },
  {
    title: "Blockchain-Based Supply Chain Tracker",
    period: "Jun 2025 – Dec 2025",
    shortDesc: "Cold chain IoT + Blockchain for tamper-proof shipment tracking.",
    fullDesc: "A full-stack blockchain-based cold supply chain management system that leverages Raspberry Pi sensors to capture real-time environmental data (temperature, humidity, location) and writes it immutably onto the Sepolia testnet via Infura. Built a responsive web dashboard and mobile app for live shipment monitoring, plus QR-code asset tracking for seamless scan-and-verify workflows.",
    highlights: [
      "Real-time IoT sensor data recorded on Sepolia blockchain via Infura",
      "QR code generation for per-asset tamper-proof audit trail",
      "Web + mobile frontend with live shipment status dashboard",
      "PostgreSQL for off-chain relational data, Express.js REST API"
    ],
    tech: ["React.js", "Express.js", "Sepolia Blockchain", "Infura", "PostgreSQL", "IoT", "Raspberry Pi"],
    demo: "https://drive.google.com/file/d/1pk-aZdgKSfD6eSDlIDrI0uDH1jnOpyVz/view",
    category: "Blockchain / IoT",
    icon: <Database className="w-5 h-5" />,
    color: "#6366f1"
  },
  {
    title: "Colombo International Bookfair Reservation System",
    period: "Oct 2025 – Dec 2025",
    shortDesc: "Microservices reservation platform with async messaging.",
    fullDesc: "A cloud-native microservices reservation system designed for large-scale event management. Contributed as a backend engineer implementing RESTful APIs, complex business logic for seat/stall allocation, and inter-service communication via RabbitMQ. Deployed on AWS EC2 behind Nginx with RDS for managed PostgreSQL.",
    highlights: [
      "Microservices architecture with RabbitMQ async event bus",
      "Docker-containerized services, deployed on AWS EC2 + RDS",
      "Nginx reverse proxy with load balancing",
      "REST API design for booking, payment, and notification services"
    ],
    tech: ["Spring Boot", "Microservices", "RabbitMQ", "Docker", "AWS EC2", "AWS RDS", "Nginx"],
    // github: "https://github.com/sandarenuDT",
    category: "Cloud / Backend",
    icon: <Cloud className="w-5 h-5" />,
    color: "#0ea5e9"
  },
  {
    title: "High Performance Image Processing Suite",
    period: "Jun 2025 – Sep 2025",
    shortDesc: "Parallel image filters using OpenMP, MPI and hybrid C.",
    fullDesc: "Implemented and benchmarked image processing filters (Gaussian blur, edge detection, histogram equalization) across four execution models: serial, OpenMP shared-memory, MPI distributed-memory, and an OpenMP+MPI hybrid. Analysed speedup, efficiency, and scalability on a Linux HPC cluster, producing comparative performance reports.",
    highlights: [
      "4 implementations: serial → OpenMP → MPI → hybrid",
      "Speedup analysis across shared & distributed memory models",
      "Ran on Linux HPC cluster with multi-node MPI jobs",
      "Strong & weak scaling evaluation with performance plots"
    ],
    tech: ["C", "OpenMP", "MPI", "Linux", "HPC", "Image Processing"],
    github: "https://github.com/sandarenuDT/HPC-Image-Filtering",
    category: "HPC / Systems",
    icon: <Cpu className="w-5 h-5" />,
    color: "#f59e0b"
  },
  {
    title: "Secure Chat Application",
    period: "Sep 2024 – Apr 2025",
    shortDesc: "End-to-end encrypted chat with DH key exchange & AES.",
    fullDesc: "A client–server chat system built from scratch in C/Python with authenticated user access and strong cryptographic guarantees. Implements Diffie–Hellman key exchange to establish shared session keys, AES-256 for message encryption, HMAC-SHA256 for message integrity, and salted bcrypt password hashing. All communication flows over raw TCP sockets.",
    highlights: [
      "Diffie–Hellman key exchange for perfect forward secrecy",
      "AES-256 encryption + HMAC-SHA256 integrity on every message",
      "Salted bcrypt password storage; no plaintext credentials",
      "Custom TCP socket protocol with multi-client support"
    ],
    tech: ["C", "Python", "Socket Programming", "AES-256", "HMAC-SHA256", "Diffie–Hellman", "bcrypt"],
    // github: "https://github.com/sandarenuDT",
    category: "Cybersecurity",
    icon: <Shield className="w-5 h-5" />,
    color: "#10b981"
  },
  {
    title: "Event Ticket Booking System",
    period: "Jun 2024 – Sep 2024",
    shortDesc: "Cloud-native booking platform on AWS ECS with Terraform IaC.",
    fullDesc: "A production-grade, cloud-native event booking platform built with FastAPI microservices and React.js, containerized with Docker, and deployed to AWS ECS via Terraform for infrastructure-as-code automation. Features include JWT auth, Redis caching, RabbitMQ async notifications, and full observability with Prometheus, Grafana, and AWS CloudWatch.",
    highlights: [
      "FastAPI microservices orchestrated on AWS ECS with Terraform",
      "Redis caching layer; RabbitMQ for async email/SMS notifications",
      "Full observability: Prometheus + Grafana + CloudWatch dashboards",
      "JWT authentication with role-based access control"
    ],
    tech: ["FastAPI", "React.js", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS ECS", "Terraform", "Prometheus", "Grafana"],
    // github: "https://github.com/sandarenuDT",
    category: "Cloud / DevOps",
    icon: <Globe className="w-5 h-5" />,
    color: "#8b5cf6"
  },
  {
    title: "HDL Gen Hub",
    period: "Sep 2023 – Apr 2024",
    shortDesc: "E-learning platform with in-browser Verilog compiler.",
    fullDesc: "An e-learning web platform built for undergraduate hardware engineers to learn HDL (Hardware Description Language). Features include structured course management, interactive quizzes, an in-browser Verilog compiler powered by a backend execution engine, and an admin console for content management. Fully dockerized and tested with Jest.",
    highlights: [
      "In-browser Verilog compiler with real-time synthesis feedback",
      "Course + quiz management with progress tracking",
      "Admin console for content CRUD and user management",
      "Jest unit & integration test suite; Docker deployment"
    ],
    tech: ["MongoDB", "Node.js", "Express", "React", "Jest", "Docker"],
    // github: "https://github.com/sandarenuDT",
    category: "Full Stack",
    icon: <Code className="w-5 h-5" />,
    color: "#ec4899"
  },
  {
    title: "Automatic Tag Generator for Stack Overflow",
    period: "Oct 2025 – Dec 2025",
    shortDesc: "Fine-tuned T5 transformer for NLP multi-label tag prediction.",
    fullDesc: "An NLP pipeline that fine-tunes a T5-Small transformer on a curated Stack Overflow dataset to automatically predict relevant tags for new questions. The model is served via a Flask API, enabling real-time tag suggestions to improve post discoverability. Leveraged Hugging Face Transformers library with custom training loops in PyTorch.",
    highlights: [
      "Fine-tuned T5-Small on 100k+ Stack Overflow Q&A pairs",
      "Multi-label classification for up to 5 predicted tags per question",
      "Flask REST API for real-time inference",
      "Evaluated with F1 / Hamming loss metrics"
    ],
    tech: ["Python", "T5-Small", "PyTorch", "Flask", "Hugging Face", "NLP"],
    // github: "https://github.com/sandarenuDT",
    category: "AI / ML",
    icon: <Brain className="w-5 h-5" />,
    color: "#f97316"
  },
  // {
  //   title: "Blood Link Mobile App",
  //   period: "2024",
  //   shortDesc: "Flutter app connecting blood donors with patients in real time.",
  //   fullDesc: "A cross-platform mobile application that bridges the gap between blood donors and patients requiring urgent transfusions. Donors register with blood type and location; patients post urgent requests visible to nearby matched donors. Real-time matching and push notifications powered by Firebase. Contributed as UI/UX and frontend developer using Flutter & Dart.",
  //   highlights: [
  //     "Real-time donor–patient matching by blood type + geolocation",
  //     "Firebase push notifications for urgent request alerts",
  //     "Clean, accessible UI/UX designed for emergency use scenarios",
  //     "Cross-platform: iOS & Android from a single Flutter codebase"
  //   ],
  //   tech: ["Flutter", "Dart", "Firebase", "Geolocation", "Push Notifications"],
  //   github: "https://github.com/sandarenuDT",
  //   category: "Mobile",
  //   icon: <Zap className="w-5 h-5" />,
  //   color: "#ef4444"
  // }
];

const skills: Record<string, string[]> = {
  "Languages": ["Python", "Java", "PHP", "C/C++", "JavaScript", "TypeScript"],
  "Web & Frontend": ["React", "Next.js", "Flutter", "Tailwind CSS", "HTML/CSS"],
  "Backend & APIs": ["Node.js", "Express.js", "Spring Boot", "Laravel"],
  "Cloud & DevOps": ["Docker", "AWS EC2/ECS/RDS", "Terraform", "Nginx", "Git", "CI/CD"],
  "Cybersecurity": ["Cryptography", "AES/HMAC", "Secure Design", "Network Security"],
  "AI & Data": ["Machine Learning", "NLP", "PyTorch", "Hugging Face", "Neural Networks"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  "Specialised": ["Blockchain", "IoT / Raspberry Pi", "HPC / MPI / OpenMP", "RabbitMQ"]
};

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
        style={{ background: 'linear-gradient(145deg,#0f172a,#1e293b)' }}
      >
        {/* Header band */}
        <div
          className="relative px-8 pt-8 pb-6 rounded-t-3xl overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
        >
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{ background: project.color }}
          />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="flex items-center justify-center w-11 h-11 rounded-2xl text-white shadow-lg"
              style={{ background: project.color }}
            >
              {project.icon}
            </span>
            <span
              className="text-xs font-mono px-3 py-1 rounded-full border"
              style={{ color: project.color, borderColor: `${project.color}55`, background: `${project.color}15` }}
            >
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight pr-10">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-white/50 mt-2">{project.period}</p>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Overview</h3>
            <p className="text-slate-300 leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: project.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                  style={{ color: project.color, borderColor: `${project.color}44`, background: `${project.color}12` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="rounded-xl px-4 py-3 border border-white/10 bg-white/5 flex items-start gap-3">
            <Lock className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-white/40 leading-relaxed">
              Source code is available on GitHub. Some repositories may be private or under review — reach out directly for access or a live demo walkthrough.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 shadow-lg"
                style={{ background: project.color }}
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-white/20 text-white bg-white/10 hover:bg-white/20 transition-all"
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filterCategory === 'All' ? projects : projects.filter(p => p.category === filterCategory);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const prog = (window.scrollY / totalScroll) * 100;
      setScrollProgress(prog);
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#050914] text-white" style={{ fontFamily: 'vAar(--font-dm-sans, system-ui, sans-serif)' }}>
      <style>{`
        .font-display {   font-family: Arial, sans-serif;}
        .font-mono-custom { font-family: var(--font-jetbrains, ui-monospace, monospace); }
        .glow-blue { box-shadow: 0 0 40px rgba(99,102,241,0.3); }
        .card-hover { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.5); }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent); background-size: 200%; animation: shimmer 2s infinite; }
        @keyframes shimmer { 0%{background-position:200%} 100%{background-position:-200%} }
        .float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .pulse-dot::before { content:''; position:absolute; inset:-4px; border-radius:50%; background:inherit; opacity:0.4; animation:pulse-ring 2s ease-out infinite; }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(2);opacity:0} }
        .grid-bg { background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px); background-size: 64px 64px; }
        .noise::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; }
        .tag-active { background: rgba(99,102,241,0.2); border-color: rgba(99,102,241,0.6); color: #a5b4fc; }
        .skill-bar { height: 3px; border-radius: 99px; background: linear-gradient(90deg, #6366f1, #8b5cf6); animation: grow 1s ease-out forwards; transform-origin: left; }
        @keyframes grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0f1e; } ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 99px; }
      `}</style>

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/5 z-[60]">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050914]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="font-display text-lg font-black tracking-tight">
            TD<span className="text-indigo-400">.</span>
          </span>

          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl px-2 py-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-mono-custom px-4 py-2 rounded-xl transition-all ${activeSection === item.id
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a href="mailto:dehiwalagetharuka99@gmail.com"
            className="hidden md:flex items-center gap-2 text-xs font-mono-custom px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition-colors">
            Hire Me <ArrowUpRight className="w-3 h-3" />
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white/60">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-6 rounded-2xl bg-[#0f172a] border border-white/10 p-4 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-mono-custom text-white/60 hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg noise">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20" style={{ background: '#6366f1' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-15" style={{ background: '#8b5cf6' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[96px] opacity-10" style={{ background: '#ec4899' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot" />
                </div>
                <span className="font-mono-custom text-xs text-emerald-400 tracking-widest uppercase">Available for opportunities</span>
              </div>

              <div>
                <p className="font-mono-custom text-indigo-400 text-sm tracking-[0.3em] uppercase mb-4">Computer Engineer</p>
                <h1 className="font-display text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  Tharuka<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Dehi</span><span className="text-indigo-400">walage</span>
                </h1>
              </div>

              <p className="text-white/50 text-lg leading-relaxed max-w-lg">
                Computer Engineering undergraduate and ambitious Full-Stack Developer passionate about building **scalable, high-performance, and user-centric digital solutions**.
                Focused on crafting seamless user experiences, clean system architecture, and reliable software that delivers meaningful real-world impact.

              </p>

              <div className="flex flex-wrap gap-2">
                {['Frontend Dev', 'Backend Dev', 'Cloud / DevOps', 'Blockchain', 'Cybersecurity', 'AI / ML'].map(tag => (
                  <span key={tag} className="font-mono-custom text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://github.com/sandarenuDT" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#050914] rounded-2xl font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/tharuka-sandarenu-7668b1290/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 bg-indigo-500 text-white rounded-2xl font-semibold text-sm hover:bg-indigo-400 transition-all hover:scale-105">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <button onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2.5 px-6 py-3.5 border border-white/10 text-white/70 rounded-2xl font-semibold text-sm hover:bg-white/5 transition-all">
                  <Mail className="w-4 h-4" /> Contact
                </button>
              </div>

              <button onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors">
                <ChevronDown className="w-4 h-4 animate-bounce" /> Scroll to explore
              </button>
            </div>

            {/* Right – Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative float">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-[2.5rem] glow-blue" style={{ background: 'linear-gradient(135deg,#6366f133,#8b5cf633)' }} />
                  {/* Photo */}
                  <div className="absolute inset-2 rounded-[2rem] overflow-hidden border border-white/10">
                    <Image
                      src="/profile.jpg"
                      alt="Tharuka Dehiwalage"
                      fill className="object-cover"
                      priority sizes="(max-width:768px) 320px, 384px"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050914 0%, transparent 60%)' }} />
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0f172a] border border-white/10 shadow-xl">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-mono-custom text-xs text-white/70">BSc. Computer Engineering · Ruhuna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-3">01 — About</p>
            <h2 className="font-display text-5xl font-black">About Me</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 rounded-3xl p-8 border border-white/8 bg-white/[0.03]">
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Results-driven Software Engineer and Computer Engineering undergraduate with hands-on experience building production-ready software solutions and scalable digital systems. Passionate about transforming complex ideas into efficient, user-focused applications that solve real-world problems.

                Experienced in developing responsive platforms, secure backend services, and streamlined system workflows, with a strong focus on performance, maintainability, and clean architecture. Adept at contributing across the full software development lifecycle, from planning and design to implementation, testing, and deployment.
              </p>
              {/* <p className="text-white/50 leading-relaxed">
                During my internship at <span className="text-indigo-400 font-medium">PayMedia</span>, I worked on the live
                DhiraaguPay fintech platform — developing React/Next.js frontends, integrating REST APIs,
                and contributing to PHP/Laravel backend services.
              </p> */}

              <div className="mt-8 pt-8 border-t border-white/8 grid sm:grid-cols-2 gap-4">
                <a href="mailto:dehiwalagetharuka99@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-indigo-400" /> dehiwalagetharuka99@gmail.com
                </a>
                <span className="flex items-center gap-3 text-sm text-white/50">
                  <Phone className="w-4 h-4 text-indigo-400" /> 071 255 7625
                </span>
              </div>
            </div>

            <div className="rounded-3xl p-8 border border-indigo-500/20 bg-indigo-500/5">
              <h3 className="font-display text-xl font-bold mb-6 text-indigo-300">Soft Skills</h3>
              <div className="space-y-3">
                {['Teamwork', 'Leadership', 'Time Management', 'Effective Communication', 'Critical Thinking', 'Problem Solving'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────── */}
      <section id="education" className="py-28 px-6 border-y border-white/5" style={{ background: 'linear-gradient(180deg,#050914,#080d1a,#050914)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-3">02 — Education</p>
            <h2 className="font-display text-5xl font-black">Education</h2>
          </div>

          <div className="max-w-4xl space-y-6">
            {[
              { degree: "BSc. Hons Computer Engineering", school: "University of Ruhuna", period: "Mar 2021 – Jan 2026", detail: "Second Class Lower Division" },
              { degree: "Advanced Level — Maths Stream", school: "Ch/Ananda National College", period: "2016 – 2018", detail: "District Rank: 13" }
            ].map((edu) => (
              <div key={edu.degree} className="group relative rounded-3xl p-8 border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                <div className="flex items-start justify-between flex-wrap gap-4 pl-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-indigo-400 font-medium mt-1">{edu.school}</p>
                    <p className="text-white/40 text-sm mt-1">{edu.detail}</p>
                  </div>
                  <span className="font-mono-custom text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                { title: "Red Cyber Competition", desc: "Practical cybersecurity challenge exposure" },
                { title: "Final Year Project Demo", desc: "Presented at Rextro Exhibition 2025" },
                { title: "Inter Faculty Dance", desc: "Teamwork & performance skills" }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-5 border border-white/8 bg-white/[0.02] hover:border-indigo-500/20 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                    <Star className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────── */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-3">03 — Experience</p>
            <h2 className="font-display text-5xl font-black">Work Experience</h2>
          </div>

          <div className="max-w-4xl">
            <div className="relative rounded-3xl p-8 md:p-10 border border-white/8 bg-white/[0.02] overflow-hidden group hover:border-indigo-500/20 transition-all">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: '#6366f1' }} />

              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="font-display text-3xl font-black text-white">Software Engineer</h3>
                  <p className="text-indigo-400 text-xl font-semibold mt-1">PayMedia</p>
                </div>
                <span className="font-mono-custom text-xs px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                  Aug 2024 – Feb 2025
                </span>
              </div>
              <ul className="text-white/60 leading-relaxed text-base mb-8 list-disc list-inside">
                <li>Contributed to two fintech and banking-related company projects with a primary focus on frontend development</li>
                <li>Developed and enhanced admin portal user interfaces for a PHP-based banking application</li>
                <li>Fixed UI bugs and improved existing frontend components to enhance usability and workflow efficiency</li>
                <li>Supported backend integrations to ensure seamless communication between frontend interfaces and server-side services</li>
                <li>Contributed to a Next.js-based admin portal project, developing responsive dashboard interfaces and frontend features</li>
                <li>Collaborated with team members to deliver maintainable, business-aligned interface solutions</li>
              </ul>


            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6 border-y border-white/5" style={{ background: 'linear-gradient(180deg,#050914,#07101f,#050914)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-3">04 — Projects</p>
            <h2 className="font-display text-5xl font-black mb-8">Featured Projects</h2>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`font-mono-custom text-xs px-4 py-2 rounded-full border transition-all ${filterCategory === cat
                    ? 'tag-active'
                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="card-hover group text-left relative rounded-3xl p-6 border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/15"
              >
                {/* Colour accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity"
                  style={{ background: project.color }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}
                  >
                    <span style={{ color: project.color }}>{project.icon}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono-custom text-[10px] px-2.5 py-1 rounded-full border"
                      style={{ color: project.color, borderColor: `${project.color}44`, background: `${project.color}10` }}
                    >
                      {project.category}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors"
                    />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 leading-tight group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-mono-custom text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/40">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-mono-custom text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/30">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono-custom text-[10px] text-white/25">{project.period}</span>
                  <span className="font-mono-custom text-xs text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors">
                    View details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-3">05 — Skills</p>
            <h2 className="font-display text-5xl font-black">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}
                className="group rounded-2xl p-6 border border-white/8 bg-white/[0.02] hover:border-indigo-500/20 hover:bg-indigo-500/[0.04] transition-all">
                <h3 className="font-display text-sm font-bold text-indigo-400 mb-4 uppercase tracking-wide">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-white/50 text-sm flex items-center gap-2 group-hover:text-white/60 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-indigo-500/50 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15" style={{ background: '#6366f1' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-mono-custom text-indigo-400 text-xs tracking-widest uppercase mb-4">06 — Contact</p>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight">
            Let&apos;s Build<br />Something Together
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Open to full-time roles in software engineering, cloud, and AI.
            Let&apos;s connect and create something remarkable.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a href="mailto:dehiwalagetharuka99@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#050914] rounded-2xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              <Mail className="w-5 h-5" />
              dehiwalagetharuka99@gmail.com
            </a>
            <a href="tel:0712557625"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold border border-white/15 text-white hover:bg-white/5 transition-all">
              <Phone className="w-5 h-5" />
              071 255 7625
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/sandarenuDT" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/tharukasandarenu-7668b1290" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-custom text-xs text-white/20">© 2026 Tharuka Dehiwalage. All rights reserved.</p>
          <p className="font-mono-custom text-xs text-white/20">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      {/* ── PROJECT MODAL ──────────────────────────────────── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}