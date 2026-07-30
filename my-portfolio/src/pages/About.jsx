import React from "react";
import { User, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Projects Completed", value: "10+" },
    { icon: User, label: "Happy Clients", value: "7+" },
    { icon: MapPin, label: "Based In", value: "Germany" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for
            creating amazing web experiences
          </p>
        </div>

        <div className="flex flex-col gap-12 items-center text-justify">

            <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <stat.icon className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 mx-52">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate frontend developer with over 4 years of
              experience creating beautiful, functional, and user-centered
              digital experiences. My journey began with a fascination for how
              design and technology intersect to solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in React, TypeScript, and modern CSS frameworks which
              include Tailwind and Bootstrap, with a keen eye for design and
              user experience. I love collaborating with teams to bring ideas to
              life and am always eager to learn new technologies and best
              practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or watching football match.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
