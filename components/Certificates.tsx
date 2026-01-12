import Link from "next/link";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "IBM Machine Learning Professional Certificate",
      issuer: "Coursera",
      date: "June 2025",
      hours: "120 hours",
      link: "https://coursera.org/share/104b818ee5d800c7775552fe7670837a",
    },
    {
      id: 2,
      name: "Software Quality Assurance Certificate",
      issuer: "Brigham Young University-Idaho",
      date: "December 2025",
      credits: "12 credits",
    },
    {
      id: 3,
      name: "Data Science Certificate",
      issuer: "Brigham Young University-Idaho",
      date: "December 2025",
      credits: "9 credits",
    },
  ];

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 font-serif">
        Certificates
      </h2>
      <div className="space-y-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="border-l-4 border-indigo-500 pl-6 relative"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div className="flex-1">
                {certificate.link ? (
                  <Link
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 group-hover:text-indigo-300 transition-colors inline-block">
                      {certificate.name}
                      {certificate.hours && (
                        <span className="text-base md:text-lg font-normal text-slate-400 ml-2">
                          ({certificate.hours})
                        </span>
                      )}
                      <svg
                        className="w-4 h-4 inline-block ml-2 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                    {certificate.name}
                    {certificate.credits && (
                      <span className="text-base md:text-lg font-normal text-slate-400 ml-2">
                        ({certificate.credits})
                      </span>
                    )}
                  </h3>
                )}
                <p className="text-base md:text-lg font-semibold text-slate-300">
                  {certificate.issuer}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1.5 bg-indigo-600/30 text-indigo-300 rounded-lg text-sm md:text-base font-medium whitespace-nowrap border border-indigo-500/30">
                  {certificate.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

