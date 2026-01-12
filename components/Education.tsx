export default function Education() {
  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 font-serif">
        Education
      </h2>
      <div className="space-y-6">
        {/* Bachelor's Degree */}
        <div className="border-l-4 border-indigo-500 pl-6 relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                Brigham Young University - Idaho
              </h3>
              <p className="text-lg font-semibold text-slate-300 mb-2">
                Bachelor's of Science: Software Engineering
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1.5 bg-indigo-600/30 text-indigo-300 rounded-lg text-sm md:text-base font-medium whitespace-nowrap border border-indigo-500/30">
                Sep. 2022 - Dec. 2025
              </span>
            </div>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <p className="text-base md:text-lg">
              <span className="font-medium">Minor:</span> Statistics
            </p>
            <p className="text-base md:text-lg">
              <span className="font-medium">GPA:</span> 3.93 / 4.0
            </p>
          </div>
        </div>

        {/* Associates Degree */}
        <div className="border-l-4 border-slate-500 pl-6 relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                North Idaho College
              </h3>
              <p className="text-lg font-semibold text-slate-300 mb-2">
                Associates of Arts
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-sm md:text-base font-medium whitespace-nowrap border border-slate-600/50">
                Sep. 2020 - Jun. 2022
              </span>
            </div>
          </div>
          <div className="text-slate-300">
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-medium">Dual Credit:</span> Completed college-level classes while in high school, fulfilling credit requirements for both my high school diploma and Associates degree simultaneously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

