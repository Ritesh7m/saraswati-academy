"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryImages = [
    { 
      src: "/images/gallery-1.jpg", 
      alt: "Classroom teaching session",
      tagline: "Expert Guidance",
      description: "Interactive classroom sessions with experienced teachers."
    },
    { 
      src: "/images/gallery-2.jpg", 
      alt: "Students focusing on their work",
      tagline: "Focused Learning",
      description: "A distraction-free environment for deep concentration."
    },
    { 
      src: "/images/gallery-3.jpg", 
      alt: "Interactive doubt solving",
      tagline: "Personal Attention",
      description: "One-on-one doubt solving to ensure concept clarity."
    },
    { 
      src: "/images/gallery-4.jpg", 
      alt: "Saraswati Academy campus",
      tagline: "Modern Facilities",
      description: "Well-equipped classrooms designed for optimal learning."
    },
    { 
      src: "/images/gallery-5.jpg", 
      alt: "Weekly test session",
      tagline: "Regular Assessment",
      description: "Weekly tests to track progress and build exam readiness."
    },
    { 
      src: "/images/gallery-6.jpg", 
      alt: "Happy students at the academy",
      tagline: "Student Success",
      description: "Empowering students to achieve their highest academic goals."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Life at <span className="text-primary">Saraswati Academy</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Take a glimpse into our vibrant classrooms, interactive sessions, and the focused environment we provide for our students.
            </p>
          </motion.div>
        </div>

        {/* Responsive Image Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-sm group ${
                index === 0 || index === 3 ? "md:col-span-2 md:aspect-[2/1]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Hover Overlay with Tagline and Description */}
              <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center backdrop-blur-[2px]">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-secondary-light font-bold text-lg md:text-xl lg:text-2xl mb-2">
                    {img.tagline}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-[90%] mx-auto hidden sm:block">
                    {img.description}
                  </p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}