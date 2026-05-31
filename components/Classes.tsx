"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";

export default function Classes() {
  const classLevels = [
    { title: "Class 5th", desc: "Building a strong fundamental base." },
    { title: "Class 6th", desc: "Transitioning to deeper concepts smoothly." },
    { title: "Class 7th", desc: "Expanding knowledge and critical thinking." },
    { title: "Class 8th", desc: "Preparing for advanced secondary topics." },
    { title: "Class 9th", desc: "Setting the groundwork for board exams." },
    { title: "Class 10th", desc: "Rigorous preparation for board excellence." },
  ];

  const standardFeatures = [
    "Concept-based learning",
    "Homework support",
    "Doubt solving sessions",
    "Weekly tests",
    "Exam preparation",
  ];

  // Framer motion variants for the staggered grid animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="classes" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Academic <span className="text-primary">Programs</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive coaching tailored to the specific needs of students at every level, ensuring they achieve their academic goals.
            </p>
          </motion.div>
        </div>

        {/* Responsive Grid for Class Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {classLevels.map((level, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{level.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm">
                {level.desc}
              </p>

              <hr className="border-gray-100 mb-6" />

              <ul className="space-y-3 mb-8">
                {standardFeatures.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="block w-full text-center bg-gray-50 hover:bg-primary hover:text-white text-primary font-semibold py-3 rounded-xl transition-colors border border-gray-200 hover:border-primary"
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}