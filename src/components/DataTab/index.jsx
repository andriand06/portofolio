import React, { useRef } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Wrapper } from "./DataTab.styles";
import gsap from "gsap";
const DataTab = ({ id, data }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  tl.current = gsap.timeline({ paused: true });
  tl.current.fromTo(
    q(["#experience > .title", "#experience > .tabs"]),
    { opacity: 0, y: 100 },
    { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce" }
  );
  const scrollAnimation = () => {
    if (window.scrollY > 380) {
      tl.current.play();
      document.removeEventListener("scroll", scrollAnimation);
    }
  };
  document.addEventListener("scroll", scrollAnimation);
  return (
    <Wrapper id={id} ref={el}>
      <h2 className="title">
        <span className="greenText" style={{ marginRight: "1rem" }}>
          02.
        </span>
        Where I've Worked
      </h2>
      <Tabs className="tabs" colorScheme="gray" color="#8892b0">
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel key={index}>
              <h5>
                {tab.title}{" "}
                <span className="greenText">
                  @ {""}
                  <a href={tab.link} className="animatedLink">
                    {tab.company}
                  </a>
                </span>
              </h5>
              <p style={{ fontSize: "14px" }}>{tab.period}</p>
              <ul className="jobList">
                {tab.jobId.map((job, index) => (
                  <li key={index}>{job.description}</li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default DataTab;
