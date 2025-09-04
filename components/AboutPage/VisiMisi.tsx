// components/VisiMisi.jsx

const content = [
  {
    type: "vision",
    title: "Vision",
    description:
      "To be the most disruptive digital transformation catalyst in Southeast Asia, where technology isn't just a tool, but a creative partner that brings the wildest ideas to life.",
    items: [],
  },
  {
    type: "mission",
    title: "Mission",
    description: "",
    items: [
      {
        title: "Building Winning Products",
        text: "To design and develop highly intuitive digital products with top performance using the latest tech.",
      },
      {
        title: "Becoming a Partner, Not a Vendor",
        text: "To be a strategic partner for our clients, providing out-of-the-box solutions, not just the same old stuff.",
      },
      {
        title: "Creating the Best Playground",
        text: "To foster a fun and supportive work environment where talents can freely experiment, fail, and grow.",
      },
    ],
  },
  {
    type: "values",
    title: "Values",
    description: "",
    items: [
      {
        title: "Gokil Innovation",
        text: "We're not afraid to try new things, even those that sound crazy. The status quo is our enemy.",
      },
      {
        title: "Radical Empathy",
        text: "We genuinely care about our users and clients, diving deep into their problems to build solutions that actually help.",
      },
      {
        title: "Extreme Ownership",
        text: "Every project, every line of code, is ours. If there's a problem, we fix it. No pointing fingers.",
      },
      {
        title: "Playful Curiosity",
        text: "We always ask 'why?' and 'what if?'. Learning isn't a chore, it's a fun game we never stop playing.",
      },
    ],
  },
];

const VisiMisi = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="uppercase text-3xl md:text-4xl font-bold text-center mb-16">
          Our Vision Mission <span className="text-purple">Values</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {content.map((section) => (
            <div
              key={section.title}
              className={`bg-gray-800 p-8 rounded-lg ${section.type === "vision" ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <h2 className="text-2xl font-bold text-purple mb-4">
                {section.title}
              </h2>

              {section.description && (
                <p className="text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              )}

              {section.items.length > 0 && (
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
