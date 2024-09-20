import React, { useState } from 'react';
import { Sun, Moon, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const cssVariables = `
  :root {
    --bg-color: #f0f4f8;
    --text-color: #2d3748;
    --accent-color: #4a5568;
    --card-bg: #ffffff;
    --curious-color-1: #6b46c1;
    --curious-color-2: #38b2ac;
  }

  [data-theme="dark"] {
    --bg-color: #1a202c;
    --text-color: #e2e8f0;
    --accent-color: #718096;
    --card-bg: #2d3748;
    --curious-color-1: #9f7aea;
    --curious-color-2: #4fd1c5;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const projects = [
  {
    title: "EmailGenie",
    shortDescription: "An efficient email generation and management tool.",
    fullDescription: "EmailGenie is a powerful tool designed to streamline email communication. It uses advanced AI algorithms to generate contextually appropriate emails, manage your inbox, and organize your correspondence efficiently. With features like smart categorization, automated responses, and personalized templates, EmailGenie significantly reduces the time spent on email management.",
    link: "https://rahydv-email-genie-capstone-2.hf.space"
  },
  {
    title: "GROQ-based Website Content Diagram Generator",
    shortDescription: "Visualize website content structure using GROQ.",
    fullDescription: "This innovative tool leverages the power of GROQ (Graph-Relational Object Queries) to analyze and visualize the content structure of websites. It provides developers and content strategists with intuitive, interactive diagrams that represent the hierarchical and relational aspects of web content. This tool is particularly useful for complex content management systems, helping to optimize information architecture and improve overall user experience.",
    link: "https://rahydv-daigrams.hf.space"
  }
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const toggleProjectDescription = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <style>{cssVariables}</style>
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300 flex flex-col relative overflow-hidden">
        <header className="container mx-auto px-4 py-6 flex justify-end items-center">
          <nav className="flex gap-6 items-center">
            <button onClick={() => setCurrentPage('home')} className="text-[var(--curious-color-1)] font-medium hover:underline">Home</button>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-[var(--curious-color-2)] text-white">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16 flex-grow">
          {currentPage === 'home' ? (
            <section className="max-w-2xl mx-auto space-y-8">
              <h1 className="text-4xl font-bold mb-4 text-[var(--curious-color-1)]">Rahul Yadav</h1>
              <p className="text-xl mb-8 text-[var(--curious-color-2)]">Software Engineer</p>
              <p className="mb-8">I'm a software engineer passionate about crafting efficient solutions to complex challenges. With a focus on innovative technologies, I strive to create impactful software that drives progress.</p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setCurrentPage('projects')} className="px-6 py-2 border border-[var(--curious-color-1)] text-[var(--curious-color-1)] rounded-md font-medium hover:bg-[var(--curious-color-1)] hover:text-white transition-colors">View Projects</button>
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-[var(--curious-color-1)] text-[var(--curious-color-1)] rounded-md font-medium hover:bg-[var(--curious-color-1)] hover:text-white transition-colors">GitHub</a>
              </div>
            </section>
          ) : (
            <section className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold mb-8 text-[var(--curious-color-1)]">Projects</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <div key={index} className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm border-l-4 border-[var(--curious-color-2)]">
                    <h3 className="text-xl font-bold mb-2 text-[var(--curious-color-1)]">{project.title}</h3>
                    <p className="mb-4 text-[var(--accent-color)]">{project.shortDescription}</p>
                    <button 
                      onClick={() => toggleProjectDescription(index)}
                      className="flex items-center text-[var(--curious-color-2)] font-medium hover:underline mb-2"
                    >
                      {expandedProjects[index] ? 'Hide' : 'Show'} Details
                      {expandedProjects[index] ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                    {expandedProjects[index] && (
                      <p className="mb-4 text-[var(--text-color)] text-sm">{project.fullDescription}</p>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[var(--curious-color-2)] font-medium hover:underline">View Project</a>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <footer className="container mx-auto px-4 py-6 text-center mt-auto text-[var(--curious-color-2)]">
          <p>&copy; 2024 Rahul Yadav. All rights reserved.</p>
        </footer>

        {/* Quirky element */}
        <div className="absolute bottom-4 right-4 animate-[float_3s_ease-in-out_infinite]">
          <Zap size={48} className="text-[var(--curious-color-1)] rotate-12" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;