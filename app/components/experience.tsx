
const ChemdrawCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg w-lg mx-auto border border-gray-700">
      <h2 className="text-2xl font-bold mb-2 text-center">Chemdraw Consulting Pvt Ltd</h2>
      <p className="text-gray-400 text-sm mb-4 text-center">May 2024 - Sept 2024 | Full Stack Developer Intern</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
      <li>
          Led modernization of platform frontend/backend components through a cross-functional initiative, 
          optimizing performance for all devices .
        </li>
        <li>
          Designed and built responsive web interfaces using Next.js and Tailwind CSS, 
          prioritizing modern UI/UX principles to streamline user navigation.
        </li>
        <li>
          Engineered dynamic frontend components with real-time adaptability to user inputs, 
          fostering a personalized browsing experience.
        </li>
        <li>
          Developed scalable backend APIs to handle complex data operations, 
          integrating seamlessly with diverse third-party data sources.
        </li>
        <li>
          Created interactive data visualization dashboards using Chart.js, transforming 
          complex datasets into clear, actionable business insights for stakeholders.
        </li>
            </ul>
    </div>
  );
};

export default ChemdrawCard;