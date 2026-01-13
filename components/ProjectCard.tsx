"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Analysis {
  title: string;
  description: string;
  conclusion: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  analyses?: Analysis[];
  date?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 shadow-2xl flex flex-col h-full">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-slate-100 flex-1">
            {project.title}
          </h3>
          {project.date && (
            <span className="px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-medium whitespace-nowrap flex-shrink-0 border border-slate-600/50">
              {project.date}
            </span>
          )}
        </div>
        <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed text-sm min-h-[4.5rem]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-indigo-600/30 text-indigo-300 rounded-lg text-xs font-medium border border-indigo-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Analyses Section - Expandable */}
        {project.analyses && project.analyses.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 rounded-lg transition-colors font-medium text-sm border border-indigo-500/30"
            >
              <span>View Analyses ({project.analyses.length})</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isExpanded && (
              <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                {project.analyses.map((analysis, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"
                  >
                    <h4 className="font-bold text-slate-100 mb-2 text-sm">
                      {analysis.title}
                    </h4>
                    <p className="text-slate-300 text-xs mb-2 leading-relaxed">
                      {analysis.description}
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-600/50">
                      <p className="text-slate-400 text-xs">
                        <span className="font-semibold">Conclusion:</span>{" "}
                        {analysis.conclusion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={`flex gap-2 mt-auto ${project.liveUrl || !project.githubUrl ? '' : 'justify-center'}`}>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.liveUrl ? 'flex-1' : 'flex-1 max-w-xs'} text-center px-3 py-2 bg-slate-700 text-slate-100 rounded-lg hover:bg-slate-600 transition-colors font-medium text-sm`}
            >
              GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
            >
              {project.liveUrl.endsWith('.html') ? 'View Report' : 'Live Demo'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

