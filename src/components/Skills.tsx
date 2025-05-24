
import { Code, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
          Skills & Expertise
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-medium text-slate-900 mb-4">
              {category.title}
            </h3>
            
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-slate-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
