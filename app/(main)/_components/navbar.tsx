import { useState } from "react";

const Navbar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index ? "border-b-2" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
