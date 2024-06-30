"use client";
import React, { useState } from "react";
import HeaderComponent from "@/components/ui/HeaderComponent";
import ContentComponent from "@/components/ui/ContentComponent";
const HomePage: React.FC = () => {
  const [section, setSection] = useState("section1");

  const handleHeaderClick = (section: string) => {
    setSection(section);
  };
  return (
    <div>
      <HeaderComponent onClick={handleHeaderClick} />
      <ContentComponent section={section} />
    </div>
  );
};

export default HomePage;
