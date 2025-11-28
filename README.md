# 🧠 Student Mental Health Platform - Gantt Chart

An interactive Gantt chart visualizing a 10-week learning plan for developing a student mental health platform. Built with React, Vite, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: `https://isnakolah.github.io/GanttChart`

## ✨ Features

- **Interactive Gantt Chart**: Visual timeline of all learning tasks across 10 weeks
- **Task Details**: Click any task to view milestones, activities, assessments, and resources
- **Resource Cards**: Branded resource cards with links to educational materials
- **Weekly Statistics**: Overview of knowledge areas, skills, and total hours
- **Hours Distribution Chart**: Visual breakdown of weekly time commitments
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Dark theme with glassmorphism effects and smooth animations

## 📋 Learning Plan Overview

- **Duration**: 10 weeks
- **Total Hours**: 123 hours
- **Categories**:
  - 📚 Knowledge (3 tasks)
  - ⚙️ Hard Skills (5 tasks)
  - 💡 Soft Skills (1 task)
  - 🔗 Integration (1 task)

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting platform

## 📦 Installation & Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/GanttChart.git
   cd GanttChart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚢 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The project includes GitHub Actions workflow for automatic deployment.

1. **Update configuration**

   Edit `package.json` and replace `YOUR_USERNAME`:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/GanttChart"
   ```

   Edit `vite.config.js` if your repository name is different:

   ```js
   base: "/GanttChart/"; // Change to your repo name
   ```

2. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/GanttChart.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will deploy automatically on every push to `main`

### Option 2: Manual Deployment

```bash
npm run deploy
```

This will build and deploy to the `gh-pages` branch.

## 📁 Project Structure

```
GanttChart/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   └── GanttChart.jsx      # Main Gantt chart component
│   ├── App.jsx                 # App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎨 Customization

### Modify Task Data

Edit the `tasks` array in `src/components/GanttChart.jsx`:

```jsx
const tasks = [
  {
    id: 1,
    name: "Your Task Name",
    category: "knowledge", // or hardSkill, softSkill, integration
    week: 1,
    duration: 1,
    hours: 10,
    milestone: "Your milestone",
    activities: ["Activity 1", "Activity 2"],
    assessment: "Assessment description",
    resources: [{ name: "Resource Name", url: "https://..." }],
  },
  // Add more tasks...
];
```

### Change Color Scheme

Update the `categories` object in `src/components/GanttChart.jsx` to customize colors:

```jsx
const categories = {
  knowledge: {
    color: "#60A5FA",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    // ...
  },
};
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for the Student Mental Health Platform learning initiative
- Designed with mental health awareness and support in mind

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for student mental health awareness
