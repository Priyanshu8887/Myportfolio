"use client";

import { useState, useMemo } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Menu,
  X,
  Mail,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  FileText,
} from "lucide-react";

/* =============================================================
   CONFIG — EDIT HERE ONLY
============================================================= */

const profile = {
  name: "Priyanshu Dubey",
  role:
    "Full-Stack Developer specializing in MERN, scalable backend systems and cloud-native deployments.",
  github: "https://github.com/Priyanshu8887",
  linkedin: "https://www.linkedin.com/in/priyanshu-dubey-85245b228",
  twitter: "https://x.com/bt20mme07751030",
  email: "priyanshudubey8887@gmail.com",
  photo: "/profile.png",
};

const educationList = [
  { degree: "B.Tech", school: "VNIT Nagpur", year: "2024 • CGPA: 7.0" },
  { degree: "Class XII", school: "Sun Valley Public School", year: "2019" },
  { degree: "Class X", school: "SS Public School", year: "2017" },
];

const experienceList = [
  {
    role: "Data Analyst",
    company: "Evonith, Nagpur",
    period: "Oct 2024 — Sept 2025",
    description:
      "Designed automated reporting pipelines using Python & SQL, built dashboards, and performed statistical analysis on large datasets to drive business decisions.",
  },
  {
    role: "Software Developer",
    company: "Foodvez, Pune",
    period: "Sept 2025 — Present",
    description:
      "Building scalable MERN applications, REST APIs, authentication systems, Dockerized deployments, CI/CD pipelines and cloud-ready backend infrastructure.",
  },
];

/* ================= PREMIUM GROUPED TECH STACK ================= */

const techGroups = {
  frontend: [
    { name: "Next.js", level: 85, icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "React", level: 90, icon: "https://cdn.simpleicons.org/react" },
    { name: "JavaScript", level: 92, icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", level: 80, icon: "https://cdn.simpleicons.org/typescript" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", level: 88, icon: "https://cdn.simpleicons.org/express" },
    { name: "Prisma", level: 75, icon: "https://cdn.simpleicons.org/prisma" },
  ],
  database: [
    { name: "MongoDB", level: 88, icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "PostgreSQL", level: 80, icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MySQL", level: 78, icon: "https://cdn.simpleicons.org/mysql" },
    { name: "Redis", level: 70, icon: "https://cdn.simpleicons.org/redis" },
  ],
  devops: [
    { name: "Docker", level: 85, icon: "https://cdn.simpleicons.org/docker" },
    { name: "Kubernetes", level: 65, icon: "https://cdn.simpleicons.org/kubernetes" },
    { name: "Kafka", level: 70, icon: "https://cdn.simpleicons.org/apachekafka" },
    { name: "AWS", level: 75, icon: "https://cdn.simpleicons.org/amazonaws" },
    { name: "CI/CD", level: 80, icon: "https://cdn.simpleicons.org/githubactions" },
    { name: "Python", level: 82, icon: "https://cdn.simpleicons.org/python" },
    { name: "C++", level: 68, icon: "https://cdn.simpleicons.org/cplusplus" },
  ],
};

const projects = [
  {
    title: "Payment App",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Full-stack payment application with authentication, transfers and protected routes.",
    github: "https://github.com/Priyanshu8887/payment_client",
    live: "https://payment-client-tawny.vercel.app/",
  },
];

// keep blank until you add your resume
const resumeLink = "";

/* ============================================================= */

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tech.includes(filter));
  }, [filter]);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Priyanshu Dubey | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Priyanshu Dubey — MERN Stack Developer building scalable web applications."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar open={open} setOpen={setOpen} dark={dark} setDark={setDark} />
        <Hero />
        <Education />
        <Experience />
        <TechStack />
        <Projects
          filter={filter}
          setFilter={setFilter}
          filteredProjects={filteredProjects}
        />
        {resumeLink && <Resume />}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar({ open, setOpen, dark, setDark }) {
  const links = ["Home", "Education", "Experience", "Tech", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold">Priyanshu</h1>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-cyan-500">
              {l}
            </a>
          ))}
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button onClick={() => setDark(!dark)}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I'm <span className="text-cyan-500">Priyanshu</span>
          </h2>
          <p className="mt-4 text-lg">
            Building scalable web applications with modern technologies.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <SocialButton icon={<Github size={18} />} link={profile.github} />
            <SocialButton icon={<Linkedin size={18} />} link={profile.linkedin} />
            <SocialButton icon={<Twitter size={18} />} link={profile.twitter} />
            <SocialButton icon={<Mail size={18} />} link={`mailto:${profile.email}`} />
          </div>
        </motion.div>

        <motion.img
          src={profile.photo}
          alt="profile"
          className="w-72 h-72 object-cover rounded-3xl mx-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

function SocialButton({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="p-3 rounded-xl bg-black/10 dark:bg-white/10 hover:scale-110 transition"
    >
      {icon}
    </a>
  );
}

/* ================= EDUCATION & EXPERIENCE ================= */

function Education() {
  return (
    <Section id="education" title="Education">
      {educationList.map((e, i) => (
        <Card key={i}>
          <h3 className="font-semibold">{e.degree}</h3>
          <p>{e.school}</p>
          <p className="text-sm opacity-70">{e.year}</p>
        </Card>
      ))}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experienceList.map((e, i) => (
        <Card key={i}>
          <h3 className="font-semibold">{e.role}</h3>
          <p>{e.company}</p>
          <p className="text-sm opacity-70">{e.period}</p>
          <p className="mt-2">{e.description}</p>
        </Card>
      ))}
    </Section>
  );
}

/* ================= PREMIUM TECH STACK ================= */

function TechStack() {
  return (
    <Section id="tech" title="Tech Stack">
      <div className="space-y-14">
        {Object.entries(techGroups).map(([group, items]) => (
          <div key={group}>
            <h3 className="text-xl font-semibold mb-6 capitalize text-center md:text-left">
              {group}
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {items.map((t) => (
                <div
                  key={t.name}
                  className="p-4 rounded-2xl border bg-white/5 backdrop-blur hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-lg transition"
                >
                  <div className="flex flex-col items-center gap-3">
                    <img src={t.icon} alt={t.name} className="w-10 h-10" />
                    <span className="text-sm font-medium">{t.name}</span>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500"
                        style={{ width: `${t.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================= PROJECTS ================= */

function Projects({ filter, setFilter, filteredProjects }) {
  const techFilters = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {techFilters.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full border ${
              filter === t ? "bg-cyan-500 text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <Card key={p.title}>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2">{p.description}</p>
            <div className="flex gap-4 mt-4">
              <a href={p.github} target="_blank">
                <Github size={18} />
              </a>
              <a href={p.live} target="_blank">
                <ExternalLink size={18} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ================= RESUME ================= */

function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="text-center">
        <a
          href={resumeLink}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white"
        >
          <FileText size={18} /> View Resume
        </a>
      </div>
    </Section>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <form
        action={`https://formsubmit.co/${profile.email}`}
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-xl border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-xl border"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-xl border"
        />
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl">
          Send Message
        </button>
      </form>
    </Section>
  );
}

/* ================= REUSABLE ================= */

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur">
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Priyanshu Dubey
    </footer>
  );
}
