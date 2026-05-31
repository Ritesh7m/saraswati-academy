"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Parent of Class 10 Student",
      text: "Saraswati Academy improved my child’s confidence and academic performance immensely. The board exam preparation is top-notch.",
      rating: 5,
    },
    {
      name: "Priya Desai",
      role: "Class 8 Student",
      text: "Teachers explain concepts clearly and give personal attention. I used to struggle with Math, but now it's my favorite subject!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Parent of Class 9 Student",
      text: "The best coaching classes in Saki Naka. The weekly tests and regular parent-teacher meetings keep us well informed.",
      rating: 5,
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Google Review Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by <span className="text-primary">Parents & Students</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is what our community has to say about their experience at Saraswati Academy.
            </p>
          </motion.div>

          {/* Google Review Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center min-w-[250px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold text-slate-900">5.0</span>
              <div className="flex flex-col">
                <div className="flex text-secondary-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-3">Based on 33+ Reviews</p>
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Google Excellent</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 rotate-180" />
              
              <div className="flex text-secondary-dark mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}