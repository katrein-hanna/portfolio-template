import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { SKILL_TABS, SKILLS } from "../utils/data";
import SkillCard from "../components/SkillCard";
// eslint-disable-next-line no-unused-vars
import { MotionConfig, motion } from "framer-motion";

function TechnicalProficiency() {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updatedList = SKILLS.filter((skill) => skill.type === value);

    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and framworks, dedicated to building efficient,
            scalable, and user-centric solutions.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]  lg:w-[80vw] lg:mx-auto mx-10">
        {tabData.map((skill, index) => (
          <MotionConfig key={skill.id}>
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={<skill.icon className="w-6 h-6 text-primary" />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          </MotionConfig>
        ))}
      </div>
    </section>
  );
}

export default TechnicalProficiency;
