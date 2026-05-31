"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Trusted coaching institute in Saki Naka",
    "Comprehensive secondary education support",
    "Personal guidance for every student",
    "Focus on deep concept clarity",
    "Student-focused learning environment"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image (Slides in from left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform -rotate-3 -z-10" />
            <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] transform rotate-3 -z-10" />
            
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="Students at Saraswati Academy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary">100%</span>
                <span className="block text-sm text-gray-600 font-medium mt-1">Concept Clarity</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content (Slides in from right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Know More About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Shaping Bright Futures at <span className="text-primary">Saraswati Academy</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Located in the heart of Saki Naka, we are dedicated to providing top-tier academic coaching for students from Class 5th to 10th. We believe that a strong foundation in secondary education is the stepping stone to lifelong success.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary-dark flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Join Our Academy
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}