import React from "react";
import { motion } from "framer-motion";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Our Location",
      details:
        "Jl Cipedak Raya RT 07/09, Kel. Jagakarsa Kec. Srengseng Sawah, Jakarta 12630, Indonesia",
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: "+62-823-1273-0909",
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: "info@gokiltech.com",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center bg-background">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold text-purple-500 tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-lg text-default-600 font-medium mt-4 max-w-2xl mx-auto text-foreground/80">
            Have a project in mind or just want to say hi? We&#39;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact Info Cards */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-6 p-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-default-200/50 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="flex-shrink-0 p-4 bg-purple-500/10 rounded-full text-purple-500">
                  <info.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-default-600 font-medium leading-relaxed">
                    {info.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="p-8 md:p-10 rounded-3xl bg-background/60 backdrop-blur-xl border border-default-200/50 shadow-2xl shadow-purple-500/5"
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  isRequired
                  classNames={{
                    label: "font-semibold",
                    inputWrapper:
                      "bg-default-100 hover:bg-default-200 focus-within:!bg-default-100/50",
                  }}
                  label="First Name"
                  labelPlacement="outside"
                  placeholder="John"
                  size="lg"
                  variant="faded"
                />
                <Input
                  classNames={{
                    label: "font-semibold",
                    inputWrapper:
                      "bg-default-100 hover:bg-default-200 focus-within:!bg-default-100/50",
                  }}
                  label="Last Name"
                  labelPlacement="outside"
                  placeholder="Doe"
                  size="lg"
                  variant="faded"
                />
              </div>
              <Input
                isRequired
                classNames={{
                  label: "font-semibold",
                  inputWrapper:
                    "bg-default-100 hover:bg-default-200 focus-within:!bg-default-100/50",
                }}
                label="Email Address"
                labelPlacement="outside"
                placeholder="john.doe@example.com"
                size="lg"
                type="email"
                variant="faded"
              />
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-foreground"
                  htmlFor="message-input"
                >
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  required
                  className="w-full min-h-[150px] p-4 rounded-xl bg-default-100 hover:bg-default-200 focus:bg-default-100/50 border-2 border-transparent focus:border-purple-500/50 outline-none transition-colors resize-y text-foreground placeholder:text-default-500"
                  id="message-input"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30 font-bold text-lg hover:-translate-y-1 transition-transform"
                color="secondary"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
