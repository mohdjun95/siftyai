import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Projects - Sifty AI",
  description: "Explore other AI-powered projects built by the Sifty AI team.",
};

const projects = [
  {
    slug: "optisolve",
    name: "OptiSolve AI",
    tagline: "AI-powered LP/MILP optimization solver",
    description:
      "Upload any document with a Linear Programming problem. Gemini AI extracts the mathematical formulation. Google OR-Tools finds the optimal solution with sensitivity analysis.",
    tech: ["Google Gemini", "OR-Tools", "FastAPI", "Python"],
    status: "Live",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Other <span className="text-teal-600">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered tools and applications built alongside Sifty AI.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
                    {project.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.tagline}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}

            {/* Coming soon placeholder */}
            <div className="rounded-2xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center min-h-[280px]">
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-400">More projects coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
