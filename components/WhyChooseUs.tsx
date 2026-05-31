"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  UserCheck, 
  Wallet, 
  FileText, 
  MessageSquare, 
  Heart, 
  TrendingUp, 
  ShieldCheck 
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Experienced Teachers",
      desc: "Highly qualified educators dedicated to student success.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Individual Attention",
      desc: "Small batch sizes ensure every student gets focused guidance.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Affordable Fees",
      desc: "Premium quality education that fits within your budget.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Regular Tests",
      desc: "Weekly and monthly assessments to track academic progress.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Parent Communication",
      desc: "Regular PTMs and updates to keep parents informed.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Friendly Environment",
      desc: "A stress-free and supportive atmosphere for effective learning.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Academic Growth",
      desc: "Proven methodologies that consistently improve student grades.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Discipline & Motivation",
      desc: "Fostering strong study habits and a positive mindset.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary-dark font-bold tracking-wider uppercase text-sm mb-2 block">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-primary">Saraswati Academy?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We go beyond just teaching. We create an ecosystem where students feel confident, supported, and ready to excel.
            </p>
          </motion.div>
        </div>

        {/* Responsive Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}