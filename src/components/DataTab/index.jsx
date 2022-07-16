import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Wrapper } from "./DataTab.styles";

const DataTab = ({ id, data }) => (
  <Wrapper id={id}>
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

export default DataTab;
