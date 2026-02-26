import React from "react";
import {
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const servicesData = [
  {
    icon: CommandLineIcon,
    title: "Custom Web Applications",
    description:
      "We build high-performance web apps from scratch, fully tailored to your business process. Scalable and secure solutions are our guarantee.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Mobile Experience",
    description:
      "In a mobile-first world, we ensure your website and apps look perfect on all screen sizes, from smartphones to tablets, to reach all your users.",
  },
  {
    icon: CubeIcon,
    title: "AI Development",
    description:
      "Propel your business into the future with AI solutions. From intelligent automation to deep data insights, we unlock unmatched efficiency.",
  },
];

const OurServices = () => {
  return (
    <section
      id="services"
      className="bg-default-50 py-20 sm:py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* === HEADER SECTION === */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
            Our Featured Services
          </h2>
          <p className="mt-4 text-lg text-default-600 font-medium">
            We push ourselves to be creative in each project. From idea to
            finished product, we ensure you get the best results for your budget
            and vision.
          </p>
        </div>

        {/* === SERVICE CARDS (GRID) === */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-background/60 backdrop-blur-md border border-default-200 p-8 text-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                {/* Render the icon we defined in the data */}
                <service.icon
                  className="h-14 w-14 mx-auto text-purple-500 drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-grow mt-6">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-base text-default-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/"
                  className="inline-block rounded-full bg-default-100 text-foreground px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
