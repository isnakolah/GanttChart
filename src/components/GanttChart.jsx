import React, { useState } from "react";

export default function GanttChart() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [hoveredWeek, setHoveredWeek] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const categories = {
    knowledge: {
      color: "#60A5FA",
      bg: "rgba(96, 165, 250, 0.15)",
      label: "Knowledge",
      icon: "📚",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    },
    hardSkill: {
      color: "#34D399",
      bg: "rgba(52, 211, 153, 0.15)",
      label: "Hard Skill",
      icon: "⚙️",
      gradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
    },
    softSkill: {
      color: "#A78BFA",
      bg: "rgba(167, 139, 250, 0.15)",
      label: "Soft Skill",
      icon: "💡",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    },
    integration: {
      color: "#FBBF24",
      bg: "rgba(251, 191, 36, 0.15)",
      label: "Integration",
      icon: "🔗",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    },
  };

  const getBrandInfo = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return {
        name: "YouTube",
        icon: "▶",
        gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
        color: "#FF0000",
      };
    }
    if (url.includes("coursera.org")) {
      return {
        name: "Coursera",
        icon: "🎓",
        gradient: "linear-gradient(135deg, #0056D2 0%, #003d99 100%)",
        color: "#0056D2",
      };
    }
    if (url.includes("figma.com")) {
      return {
        name: "Figma",
        icon: "◈",
        gradient: "linear-gradient(135deg, #F24E1E 0%, #A259FF 50%, #1ABCFE 100%)",
        color: "#F24E1E",
      };
    }
    if (url.includes("google.com") || url.includes("docs.google")) {
      return {
        name: "Google",
        icon: "G",
        gradient: "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #EA4335 100%)",
        color: "#4285F4",
      };
    }
    if (url.includes("miro.com")) {
      return {
        name: "Miro",
        icon: "▢",
        gradient: "linear-gradient(135deg, #FFD02F 0%, #F7C325 100%)",
        color: "#FFD02F",
      };
    }
    if (url.includes("zoom.us")) {
      return {
        name: "Zoom",
        icon: "📹",
        gradient: "linear-gradient(135deg, #2D8CFF 0%, #0B5CFF 100%)",
        color: "#2D8CFF",
      };
    }
    if (url.includes("springer.com")) {
      return {
        name: "Springer",
        icon: "📚",
        gradient: "linear-gradient(135deg, #0C4DA2 0%, #083776 100%)",
        color: "#60A5FA",
      };
    }
    if (url.includes("sciencedirect.com")) {
      return {
        name: "ScienceDirect",
        icon: "🔬",
        gradient: "linear-gradient(135deg, #EE7623 0%, #D35400 100%)",
        color: "#EE7623",
      };
    }
    if (url.includes("frontiersin.org")) {
      return {
        name: "Frontiers",
        icon: "📰",
        gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
        color: "#6366F1",
      };
    }
    if (url.includes("eric.ed.gov")) {
      return {
        name: "ERIC",
        icon: "📑",
        gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        color: "#10B981",
      };
    }
    if (url.includes("nngroup.com")) {
      return {
        name: "NN/g",
        icon: "🎯",
        gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
        color: "#EF4444",
      };
    }
    if (url.includes("microsoft.com")) {
      return {
        name: "Microsoft",
        icon: "⊞",
        gradient: "linear-gradient(135deg, #00A4EF 0%, #7FBA00 50%, #F25022 100%)",
        color: "#00A4EF",
      };
    }
    if (url.includes("marvelapp.com")) {
      return {
        name: "Marvel",
        icon: "M",
        gradient: "linear-gradient(135deg, #1FB6FF 0%, #0D96D9 100%)",
        color: "#1FB6FF",
      };
    }
    if (url.includes("freeprivacypolicy.com")) {
      return {
        name: "Privacy",
        icon: "🔒",
        gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)",
        color: "#9CA3AF",
      };
    }
    return {
      name: "Link",
      icon: "🔗",
      gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
      color: "#6366F1",
    };
  };

  const tasks = [
    {
      id: 1,
      name: "Understanding Student Mental Health & Stress",
      category: "knowledge",
      week: 1,
      duration: 1,
      hours: 10,
      milestone: "Understand foundations of student mental health",
      activities: ["Watch YouTube instructional videos on mental health", "Read 4 research articles on student stress"],
      assessment:
        "2-page summary document covering types of student stress, common triggers, warning signs, healthy vs unhealthy coping.",
      resources: [
        {
          name: "Teens Under Pressure: Mental Health & Social Media",
          url: "https://www.youtube.com/watch?v=0dNso6QabPI",
        },
        { name: "TEDxWUSTL: College Student Mental Health Crisis", url: "https://www.youtube.com/watch?v=IzFiGCx-mQw" },
        {
          name: "University students mental health in sub-Saharan Africa",
          url: "https://files.eric.ed.gov/fulltext/EJ1435580.pdf",
        },
        {
          name: "Mental disorder symptoms among university students",
          url: "https://www.sciencedirect.com/science/article/pii/S0149763425002453",
        },
        {
          name: "The youth mental health crisis: analysis and solutions",
          url: "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1517533/full",
        },
        {
          name: "Mental health of UK university students",
          url: "https://link.springer.com/article/10.1186/s12889-022-13943-x",
        },
      ],
    },
    {
      id: 2,
      name: "Privacy, Safety & Platform Management",
      category: "knowledge",
      week: 2,
      duration: 1,
      hours: 7,
      milestone: "Learn privacy, data protection & crisis protocol basics",
      activities: ["Read privacy guides", "Draft safety protocols", "Watch ethics videos"],
      assessment:
        "Create comprehensive safety protocol document including: privacy policy summary, community guidelines, crisis response plan.",
      resources: [
        { name: "Ethics, Privacy, and Data in UX Design", url: "https://www.youtube.com/watch?v=yrHaEaLZzbg" },
        { name: "Telehealth Services Ethics - Dr. Charles Jacob", url: "https://www.youtube.com/watch?v=m5lMnnXqrMs" },
        {
          name: "Sample Privacy Policy Template",
          url: "https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/",
        },
        {
          name: "Digital technology for mental health ethics",
          url: "https://link.springer.com/article/10.1186/s40345-017-0073-9",
        },
      ],
    },
    {
      id: 3,
      name: "Empathy - Conduct Interviews",
      category: "softSkill",
      week: 3,
      duration: 1,
      hours: 17,
      milestone: "Conduct empathy interviews with students",
      activities: [
        "Prepare interview guide questions",
        "Run 6 interviews (20 min each)",
        "Transcribe and analyze responses",
        "Extract key insights",
      ],
      assessment: "Interview transcript + insight matrix documenting student pain points and needs",
      resources: [
        { name: "User Research Course", url: "https://www.coursera.org/learn/user-research" },
        { name: "Google Forms", url: "https://docs.google.com/forms" },
        { name: "Miro - Affinity Mapping", url: "https://miro.com/" },
        { name: "Zoom", url: "https://zoom.us/" },
      ],
    },
    {
      id: 4,
      name: "Data Analysis",
      category: "hardSkill",
      week: 4,
      duration: 1,
      hours: 7,
      milestone: "Analyze data from surveys, usage, and feedback",
      activities: [
        "Watch YouTube data analysis tutorial",
        "Clean and organize survey data",
        "Identify patterns",
        "Interpret findings",
      ],
      assessment: "Data summary document + peer feedback session",
      resources: [
        { name: "Data Analysis Tutorial", url: "https://www.youtube.com/watch?v=lgCNTuLBMK4" },
        { name: "Google Sheets", url: "https://docs.google.com/spreadsheets" },
        { name: "Microsoft Excel", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
      ],
    },
    {
      id: 5,
      name: "User-Centered Design Principles",
      category: "knowledge",
      week: 5,
      duration: 1,
      hours: 13,
      milestone: "Learn User-Centered Design principles",
      activities: [
        "Watch educational videos",
        "Learn mental health app design",
        "Complete UX course",
        "Survey 20 students",
      ],
      assessment: "Complete Coursera course, create visual prototypes of key features.",
      resources: [
        { name: "How to Interview Anyone | TEDxHumboldtBay", url: "https://www.youtube.com/watch?v=n9h8fG1DKhA" },
        { name: "Build a Mental Health App like Headspace", url: "https://www.youtube.com/watch?v=VlMsXVRkfF4" },
        { name: "Foundations of UX Design", url: "https://www.coursera.org/learn/foundations-user-experience-design" },
        {
          name: "Google UX Design Certificate",
          url: "https://www.coursera.org/professional-certificates/google-ux-design",
        },
        { name: "Figma", url: "https://www.figma.com/" },
        { name: "Google Forms", url: "https://docs.google.com/forms" },
      ],
    },
    {
      id: 6,
      name: "UI/App Design Tools (Figma)",
      category: "hardSkill",
      week: 6,
      duration: 1,
      hours: 5,
      milestone: "Create UI mockups (high-fidelity)",
      activities: [
        "Build low-fidelity wireframes",
        "Watch Figma Tutorial",
        "Create layouts and icons",
        "Apply visual design",
      ],
      assessment: "Upload wireframes + team critique session",
      resources: [
        { name: "Figma Wireframe Kits", url: "https://www.figma.com/community/wireframes?editor_type=figma" },
        { name: "Figma UI Design Tutorial (24 mins)", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
        { name: "Figma", url: "https://www.figma.com/" },
      ],
    },
    {
      id: 7,
      name: "Wireframing / Prototyping",
      category: "hardSkill",
      week: 7,
      duration: 1,
      hours: 27,
      milestone: "Build wireframes for all main screens",
      activities: [
        "Complete Coursera prototyping course",
        "Create mood tracker wireframe",
        "Create peer circles wireframe",
        "Create guided coping wireframe",
      ],
      assessment: "UI review + consistency checklist, peer-reviewed prototype",
      resources: [
        { name: "UX Design: Concept to Wireframe", url: "https://www.coursera.org/learn/ux-design-concept-wireframe" },
        { name: "Figma", url: "https://www.figma.com/" },
      ],
    },
    {
      id: 8,
      name: "Interactive Prototyping",
      category: "hardSkill",
      week: 8,
      duration: 1,
      hours: 14,
      milestone: "Add prototype interactions",
      activities: ["Create clickable flows", "Build interactive prototype", "Test navigation flows"],
      assessment: "Prototype demo + navigation test",
      resources: [
        {
          name: "Figma Prototype Mode Guide",
          url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
        },
        { name: "Marvel POP", url: "https://marvelapp.com/pop" },
        { name: "High-Fidelity Designs Course", url: "https://www.coursera.org/learn/high-fidelity-designs-prototype" },
      ],
    },
    {
      id: 9,
      name: "Usability Testing",
      category: "hardSkill",
      week: 9,
      duration: 1,
      hours: 11,
      milestone: "Conduct usability testing with real users",
      activities: ["Prepare test scenarios", "Test with 8 users", "Collect feedback", "Analyze results"],
      assessment: "Usability report with 3 major issues and suggestions.",
      resources: [
        { name: "Google Forms", url: "https://docs.google.com/forms" },
        { name: "Usability Testing 101 - NN/g", url: "https://www.nngroup.com/articles/usability-testing-101/" },
      ],
    },
    {
      id: 10,
      name: "Final Integration & Review",
      category: "integration",
      week: 10,
      duration: 1,
      hours: 12,
      milestone: "Final integration & review",
      activities: ["Combine all insights", "Final prototype assembly", "Testing and corrections", "Group reflection"],
      assessment: "Final prototype checklist + group reflection document",
      resources: [
        { name: "Figma", url: "https://www.figma.com/" },
        { name: "Google Docs", url: "https://docs.google.com/" },
        { name: "Miro", url: "https://miro.com/" },
      ],
    },
  ];

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);
  const maxHours = Math.max(...tasks.map((t) => t.hours));
  const chartHeight = 120;

  const stats = [
    {
      v: 3,
      l: "Knowledge",
      icon: "📚",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      glow: "#3B82F6",
    },
    {
      v: 5,
      l: "Hard Skills",
      icon: "⚙️",
      gradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
      glow: "#10B981",
    },
    {
      v: 1,
      l: "Soft Skills",
      icon: "💡",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      glow: "#8B5CF6",
    },
    {
      v: 1,
      l: "Integration",
      icon: "🔗",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
      glow: "#F59E0B",
    },
  ];

  const darkGlass = {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
  };

  const ResourceCard = ({ resource }) => {
    const brand = getBrandInfo(resource.url);

    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
        style={{
          background: "rgba(30, 41, 59, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}>
        <div className="h-1" style={{ background: brand.gradient }} />

        <div className="p-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-2"
            style={{ background: brand.gradient, boxShadow: `0 4px 15px ${brand.color}40` }}>
            {brand.icon}
          </div>

          <p className="text-[11px] font-medium text-slate-300 leading-tight mb-2 line-clamp-2 group-hover:text-white min-h-[28px]">
            {resource.name}
          </p>

          <div className="flex items-center justify-between">
            <span
              className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
              style={{ background: brand.gradient }}>
              {brand.name}
            </span>
            <span className="text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all text-xs">
              →
            </span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div
      className="min-h-screen p-4 font-sans"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
      <style>{`
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px currentColor); }
          50% { filter: drop-shadow(0 0 20px currentColor); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 40px var(--glow-color), 0 0 60px var(--glow-color); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .stat-card:hover .stat-icon {
          animation: float 2s ease-in-out infinite;
        }
        .glow-text {
          text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="rounded-2xl p-6 mb-6" style={darkGlass}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left: Title */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">🧠</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-white">Student Mental Health Platform</h1>
                <p className="text-slate-400 text-sm">Learning Plan Gantt Chart</p>
              </div>
            </div>

            {/* Right: Legend and Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Category Legend */}
              <div className="flex gap-4 flex-wrap">
                {Object.entries(categories).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: v.gradient, boxShadow: `0 0 8px ${v.color}` }}
                    />
                    <span className="text-xs font-medium text-slate-400">{v.label}</span>
                  </div>
                ))}
              </div>

              {/* Duration Badge */}
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                }}>
                10 Weeks • {totalHours} Hours
              </span>
            </div>
          </div>
        </div>

        {/* Gantt Chart */}
        <div className="rounded-2xl p-5 mb-6" style={darkGlass}>
          {/* Week Headers */}
          <div className="flex mb-4 ml-48">
            {weeks.map((w) => (
              <div
                key={w}
                className="flex-1 text-center py-2 rounded-lg mx-0.5 cursor-pointer transition-all duration-300"
                style={{
                  background:
                    hoveredWeek === w ? "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)" : "rgba(51, 65, 85, 0.5)",
                  boxShadow: hoveredWeek === w ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
                  transform: hoveredWeek === w ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setHoveredWeek(w)}
                onMouseLeave={() => setHoveredWeek(null)}>
                <span className="text-[10px] text-slate-500 block">Week</span>
                <span className={`font-bold text-sm ${hoveredWeek === w ? "text-white" : "text-slate-300"}`}>{w}</span>
              </div>
            ))}
          </div>

          {/* Task Rows */}
          <div className="space-y-2">
            {tasks.map((task) => {
              const cat = categories[task.category];
              const isSelected = selectedTask?.id === task.id;
              return (
                <div key={task.id} className="flex items-center">
                  <div className="w-48 pr-3 flex-shrink-0">
                    <p
                      className="text-xs font-medium truncate cursor-pointer transition-all duration-300"
                      style={{
                        color: isSelected ? cat.color : "#94a3b8",
                        textShadow: isSelected ? `0 0 10px ${cat.color}` : "none",
                      }}
                      onClick={() => setSelectedTask(isSelected ? null : task)}
                      title={task.name}>
                      {task.name}
                    </p>
                  </div>
                  <div className="flex-1 relative h-10">
                    <div className="absolute inset-0 flex">
                      {weeks.map((w) => (
                        <div
                          key={w}
                          className="flex-1 border-l transition-colors duration-300"
                          style={{
                            borderColor: "rgba(71, 85, 105, 0.3)",
                            background: hoveredWeek === w ? "rgba(59, 130, 246, 0.05)" : "transparent",
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-y-1 left-0 right-0">
                      <div
                        className="absolute h-full rounded-lg cursor-pointer flex items-center px-3 transition-all duration-300"
                        style={{
                          left: `${(task.week - 1) * 10}%`,
                          width: `${task.duration * 10 - 1}%`,
                          background: isSelected ? cat.gradient : cat.bg,
                          border: `1px solid ${cat.color}50`,
                          color: isSelected ? "white" : cat.color,
                          transform: isSelected ? "scale(1.05)" : "scale(1)",
                          boxShadow: isSelected ? `0 0 25px ${cat.color}60` : `0 0 10px ${cat.color}20`,
                          zIndex: isSelected ? 10 : 1,
                        }}
                        onClick={() => setSelectedTask(isSelected ? null : task)}>
                        <span className="text-xs font-bold">{task.hours}h</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedTask && (
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              ...darkGlass,
              background: "rgba(15, 23, 42, 0.8)",
              boxShadow: `0 0 40px ${categories[selectedTask.category].color}30`,
            }}>
            <div className="flex justify-between items-start mb-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-sm font-bold text-white"
                    style={{
                      background: categories[selectedTask.category].gradient,
                      boxShadow: `0 0 15px ${categories[selectedTask.category].color}60`,
                    }}>
                    {categories[selectedTask.category].icon} {categories[selectedTask.category].label}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Week {selectedTask.week}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)" }}>
                    {selectedTask.hours}h
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{selectedTask.name}</h3>
              </div>
              <button
                onClick={() => setSelectedTask(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-red-500/20 border border-slate-700 hover:border-red-500 transition-all duration-300 text-lg">
                ×
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div
                  className="p-4 rounded-xl border"
                  style={{ background: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.2)" }}>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    🎯 Milestone
                  </h4>
                  <p className="text-sm text-slate-300">{selectedTask.milestone}</p>
                </div>

                <div
                  className="p-4 rounded-xl border"
                  style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    📋 Activities
                  </h4>
                  <ul className="space-y-2">
                    {selectedTask.activities.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs"
                          style={{ background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)" }}>
                          ✓
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-4 rounded-xl border-l-4"
                  style={{
                    background: "rgba(245, 158, 11, 0.1)",
                    borderColor: "#F59E0B",
                    borderTopColor: "rgba(245, 158, 11, 0.2)",
                    borderRightColor: "rgba(245, 158, 11, 0.2)",
                    borderBottomColor: "rgba(245, 158, 11, 0.2)",
                  }}>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    ✅ Assessment
                  </h4>
                  <p className="text-sm text-slate-300">{selectedTask.assessment}</p>
                </div>
              </div>

              {/* Right Column - Resources Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  🔗 Resources
                  <span
                    className="px-2 py-0.5 rounded-full text-white text-[10px]"
                    style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)" }}>
                    {selectedTask.resources.length}
                  </span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
                  {selectedTask.resources.map((r, i) => (
                    <ResourceCard key={i} resource={r} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-card relative rounded-2xl p-5 cursor-pointer transition-all duration-500 overflow-hidden group"
              style={{
                ...darkGlass,
                "--glow-color": s.glow,
                transform: hoveredStat === i ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hoveredStat === i
                    ? `0 0 40px ${s.glow}50, 0 20px 40px rgba(0,0,0,0.4)`
                    : "0 8px 32px rgba(0, 0, 0, 0.4)",
              }}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}>
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                style={{ background: s.gradient }}
              />

              {/* Icon */}
              <div className="stat-icon text-3xl mb-3 inline-block">{s.icon}</div>

              {/* Number */}
              <div
                className="text-5xl font-black mb-1 bg-clip-text text-transparent transition-all duration-300"
                style={{
                  backgroundImage: s.gradient,
                  filter: hoveredStat === i ? `drop-shadow(0 0 15px ${s.glow})` : "none",
                }}>
                {s.v}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-slate-400">{s.l}</div>

              {/* Corner decoration */}
              <div
                className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"
                style={{ background: s.gradient }}
              />
            </div>
          ))}
        </div>

        {/* Hours Chart */}
        <div className="rounded-2xl p-5" style={darkGlass}>
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">📈 Weekly Hours Distribution</h3>

          <div className="flex">
            <div className="w-8 flex flex-col justify-between pr-2 text-right" style={{ height: chartHeight }}>
              <span className="text-[10px] text-slate-500 font-medium">{maxHours}h</span>
              <span className="text-[10px] text-slate-500 font-medium">{Math.round(maxHours * 0.5)}h</span>
              <span className="text-[10px] text-slate-500 font-medium">0h</span>
            </div>

            <div className="flex-1">
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ height: chartHeight, background: "rgba(30, 41, 59, 0.5)" }}>
                <div className="absolute w-full border-t border-slate-700/50" style={{ top: "0%" }}></div>
                <div
                  className="absolute w-full border-t border-dashed border-slate-700/30"
                  style={{ top: "50%" }}></div>

                <div className="absolute inset-0 flex items-end gap-1.5 px-2 pb-1">
                  {tasks.map((t) => {
                    const barHeightPx = (t.hours / maxHours) * (chartHeight - 8);
                    const cat = categories[t.category];
                    return (
                      <div key={t.id} className="flex-1 flex flex-col items-center justify-end h-full group">
                        <div
                          className="w-full rounded-t cursor-pointer transition-all duration-300 relative overflow-hidden"
                          style={{
                            height: barHeightPx,
                            background: cat.gradient,
                            boxShadow: `0 0 15px ${cat.color}40`,
                          }}
                          onClick={() => setSelectedTask(t)}>
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-1.5 px-2 mt-2">
                {tasks.map((t) => (
                  <div key={t.id} className="flex-1 text-center">
                    <div className="text-[10px] text-slate-500">W{t.week}</div>
                    <div className="text-[11px] font-bold text-slate-300">{t.hours}h</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-4 pt-3 flex justify-center gap-6 text-[11px] rounded-lg p-2"
            style={{ background: "rgba(30, 41, 59, 0.5)" }}>
            <span className="text-slate-400">
              Avg: <strong className="text-white">{(totalHours / 10).toFixed(1)}h</strong>/week
            </span>
            <span className="text-slate-400">
              Peak: <strong className="text-emerald-400">W7 (27h)</strong>
            </span>
            <span className="text-slate-400">
              Lowest: <strong className="text-amber-400">W6 (5h)</strong>
            </span>
          </div>
        </div>

        <p className="text-center mt-6 text-slate-500 text-sm">✨ Click any task to explore details and resources</p>
      </div>
    </div>
  );
}
