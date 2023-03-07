import React, { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

interface SkillsState {
  name: string;
  bgColor: string;
  icon: object;
}

interface WorkState {
  name: string;
  company: string;
  desc: Array<any>;
}

interface ExperienceState {
  name: string;
  works: Array<WorkState>;
  year: number;
}

const Skills: FC = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill: SkillsState) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience: ExperienceState) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work: WorkState) => (
                  <>
                    <div className="app__skills-exp-company">
                      <h4 className="work-name">
                        {work.name}
                        <span className="p-text normal-text">
                          {experience.year}
                        </span>
                      </h4>
                      <h4 className="work-company">{work.company}</h4>

                      <>
                        {work.desc.map((dec) => (
                          <p className="work-desc p-text">
                            {dec?.children[0].text}
                          </p>
                        ))}
                      </>
                    </div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
