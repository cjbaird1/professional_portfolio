import ProjectCard from "./ProjectCard";

// Project data - customize this with your actual projects
const projects = [
  {
    id: 1,
    title: "InsightReplay",
    description: "A web application that enables users to automate backtesting and scrub through candlestick charts to form and test trading strategies. The platform provides an intuitive interface to analyze historic market data and validate trading ideas.",
    image: "/insight_replay_orders.PNG",
    githubUrl: "",
    liveUrl: "https://www.youtube.com/watch?v=DpShEg_xThQ",
    technologies: ["React", "RESTful APIs", "Tailwind CSS", "Python", "Flask", "SQLite"],
    date: "Apr. 2025 - Current",
  },
  {
    id: 2,
    title: "Dungeon Crawler Pygame",
    description: "A simple dungeon crawler with rooms and interactable elements. The player wins the game by completing rooms and earning trophies.",
    image: "/dungeon_game.PNG",
    githubUrl: "https://github.com/alexanderdombroski/cse310pygame",
    liveUrl: "https://www.youtube.com/watch?v=wtdjSdKffdc",
    technologies: ["Python", "Pygame", "OOP", "Agile Methodology", "Git", "Teamwork"],
    date: "April 2024",
  },
  {
    id: 4,
    title: "yFinance Backtesting Trading Bot",
    description: "Backtests my old technical analysis trading strategy that utilizes gaps in price and time of day to frame entries and exits.",
    image: "/yfinance_charts.PNG",
    githubUrl: "https://github.com/cjbaird1/yFinance_Project",
    liveUrl: "https://www.youtube.com/watch?v=aHUDivHOufc",
    technologies: ["Python", "Pandas", "Time Series", "Financial Data", "ETL", "Data Visualization"],
    date: "Aug. 2024",
  },
  {
    id: 5,
    title: "AI Adoption & Unemployment Rate Analysis",
    description: "A research study examining the relationship between AI adoption (measured through ChatGPT usage metrics and national search interest) and changes in the U.S. unemployment rate from 2023 to 2025.",
    image: "/ai_adoption.PNG",
    githubUrl: "",
    liveUrl: "/semester_project.html",
    technologies: ["R", "Data Wrangling", "EDA", "Time Series Analysis", "Regression Analysis"],
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

