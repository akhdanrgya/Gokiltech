import React from "react";

const statsData = [
  { value: 2, label: "Operated Years" },
  { value: 50, label: "Happy Clients" },
  { value: 15, label: "Amazing Projects" },
  { value: 20, label: "Professionals" },
];

const StatsCounter = () => {
  return (
    <section className="dark:bg-white bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 text-center text-purple md:grid-cols-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-bold sm:text-5xl">{stat.value}+</h3>
              <p className="mt-2 text-base sm:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
