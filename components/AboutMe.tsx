export default function AboutMe() {
  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 font-serif">
        About Me
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">

          I&apos;m a senior Software Engineering student graduating on December 18, 2025, with experience in QA engineering, 
          data analysis, and building real-world projects. I&apos;m driven and motivated by progression, always pushing myself 
          to learn new things and expand my skillset. My natural curiosity helps me adapt quickly in fast-moving environments 
          and take on challenges with confidence. I&apos;m excited to build a future in tech and I&apos;m open to a wide range of roles 
          where I can contribute, grow, and make a meaningful impact.
          
        </p>
        <p className="text-slate-300 leading-relaxed">
          {/* could add more here if I wanted to */}
        </p>    
      </div>
    </div>
  );
}

