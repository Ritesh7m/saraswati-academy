"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [studentClass, setStudentClass] = useState("");
const [message, setMessage] = useState("");

const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();


const whatsappMessage = `


*New Admission Inquiry*

👤 Parent/Student Name: ${name}
📞 Phone Number: ${phone}
🎓 Class: ${studentClass}

📝 Message:
${message}
`;


const whatsappUrl = `https://wa.me/919322474326?text=${encodeURIComponent(
  whatsappMessage
)}`;

window.open(whatsappUrl, "_blank");

setName("");
setPhone("");
setStudentClass("");
setMessage("");


};

return ( <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-gray-600 text-lg">
          Have questions? Want to enroll your child? Visit our center in
          Saki Naka or reach out to us today.
        </p>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

      {/* LEFT SIDE */}
      <div className="p-8 lg:p-12 bg-primary text-white">
        <h3 className="text-2xl font-bold mb-8">
          Contact Information
        </h3>

        <div className="space-y-8 mb-10">

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">
                Our Location
              </h4>

              <p className="text-gray-200 leading-relaxed text-sm">
                Shop No 5, Saraswati Academy, Sai Shakti HSG,
                Pipe Line Rd, Pereira Wadi,
                Saki Naka, Mumbai,
                Maharashtra 400072
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-secondary" />
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">
                Phone Number
              </h4>

              <p className="text-gray-200 text-sm">
                +91 9322474326
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Clock className="w-6 h-6 text-secondary" />
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">
                Working Hours
              </h4>

              <p className="text-gray-200 text-sm">
                Sunday to Saturday
                <br />
                8:00 AM – 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full h-64 rounded-xl overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Shop%20No%205,%20Saraswati%20Academy,%20Sai%20Shakti%20HSG,%20Pipe%20Line%20Rd,%20Pereira%20Wadi,%20Saki%20Naka,%20Mumbai,%20Maharashtra%20400072&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Saraswati Academy"
          />
        </div>

        {/* ROUTE BUTTON */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Shop+No+5,+Saraswati+Academy,+Sai+Shakti+HSG,+Pipe+Line+Rd,+Pereira+Wadi,+Saki+Naka,+Mumbai,+Maharashtra+400072"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get Directions
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="p-8 lg:p-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">
          Send us a Message
        </h3>

        <form
          className="space-y-6"
          onSubmit={handleWhatsAppSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium">
                Student/Parent Name
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
                placeholder="+91 9876543210"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Admission For
            </label>

            <select
              required
              value={studentClass}
              onChange={(e) =>
                setStudentClass(e.target.value)
              }
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="">
                Select Class
              </option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Message
            </label>

            <textarea
              rows={4}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold"
          >
            <Send className="w-5 h-5" />
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* FLOATING BUTTONS */}
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

    <a
      href="https://wa.me/919322474326"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>

    <a
      href="tel:+919322474326"
      className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl text-white"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
</section>


);
}
