import ProjectCard from "./ProjectCard";

// Project data - customize this with your actual projects
const projects = [
  {
    id: 1,
    title: "InsightReplay",
    description: "A web application that enables users to automate backtesting and scrub through candlestick charts to form and test trading strategies. The platform provides an intuitive interface for analyzing historical market data and validating trading ideas through interactive chart navigation and automated strategy testing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    githubUrl: "",
    liveUrl: "https://www.youtube.com/watch?v=DpShEg_xThQ",
    technologies: ["React", "APIs", "Tailwind CSS", "Python", "Flask", "SQLite"],
    date: "Apr. 2025 - Current",
  },
  {
    id: 2,
    title: "Dungeon Crawler Pygame",
    description: "A simple dungeon crawler with rooms and interactable elements. The player wins the game by completing rooms and earning trophies. We chose this project because all of us wanted to get better at creating and implementing Python classes. We are also learning to collaborate through Git. (Group Project)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/alexanderdombroski/cse310pygame",
    liveUrl: "https://www.youtube.com/watch?v=wtdjSdKffdc",
    technologies: ["Python", "Pygame", "OOP"],
    date: "April 2024",
  },
  {
    id: 4,
    title: "yFinance Backtesting Trading Bot",
    description: "Backtests trading strategy that utilizes technical analysis to calculate historical market returns",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/cjbaird1/yFinance_Project",
    liveUrl: "https://www.youtube.com/watch?v=aHUDivHOufc",
    technologies: ["Time Series Analysis", "Financial Data Analysis", "ETL (Extract, Transform, Load)", "Data Visualization"],
    date: "Aug. 2024",
  },
  {
    id: 5,
    title: "AI Adoption & Unemployment Rate Analysis",
    description: "A research study examining the relationship between AI adoption (measured through ChatGPT usage metrics and national search interest) and changes in the U.S. unemployment rate from 2023 to 2025. The analysis includes exploratory data analysis, data wrangling, data visualization, and statistical conclusions using R.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "",
    liveUrl: "/semester_project.html",
    technologies: ["R", "ETL", "EDA", "Time Series Analysis"],
    date: "Oct. 2025",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 text-center font-serif">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

