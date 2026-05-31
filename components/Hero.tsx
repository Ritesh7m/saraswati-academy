"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, Focus, GraduationCap, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  const badges = [
    { icon: <GraduationCap className="w-5 h-5" />, text: "Experienced Teachers" },
    { icon: <Users className="w-5 h-5" />, text: "Small Batch Size" },
    { icon: <Focus className="w-5 h-5" />, text: "Personal Attention" },
    { icon: <BookOpen className="w-5 h-5" />, text: "English Medium" },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <Image
          src="/images/hero.jpg"
          alt="Classroom at Saraswati Academy"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          
          {/* Main Text Content (Animated) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-light border border-secondary/30 text-sm font-semibold tracking-wider mb-6">
              ADMISSIONS OPEN
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Students from <br className="hidden md:block" />
              <span className="text-secondary">Class 5th to 10th</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Quality education, personal attention, and strong academic guidance for every student to achieve their highest potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-slate-900 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:09322474326" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-3.5 rounded-full font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Trust Badges (Staggered Animation) */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {badges.map((badge, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-white shadow-sm transition-colors hover:bg-white/20"
              >
                <div className="bg-primary-light/40 p-2 rounded-lg text-secondary-light">
                  {badge.icon}
                </div>
                <span className="text-sm font-medium leading-tight">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}