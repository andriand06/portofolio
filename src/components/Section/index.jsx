import React from "react";
import { Wrapper } from "./Section.styles";
import PropTypes from "prop-types";
import myPic from "../../assets/images/new.jpg";
import Icon from "../Icon";
const Section = ({ className, id, title, no, data, limit }) => {
  return (
    <Wrapper id={id}>
      <h2 className="title">
        <span className="greenText" style={{ marginRight: "1rem" }}>
          {no}
        </span>
        {title}
      </h2>
      {id === "about" && (
        <div className={className}>
          <div className="detail">
            {data.details.map((e, index) => {
              if (e.company) {
                const split = e.description.split(e.company);
                return (
                  <p key={index}>
                    {split[0]}
                    <a
                      href={e.url}
                      target="_blank"
                      className="animatedLink"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {e.company}
                    </a>
                    {split[1]}
                  </p>
                );
              } else {
                return <p key={index}>{e.description}</p>;
              }
            })}
            <p>{data.techList.description}</p>
            <ul className="skillList">
              {data.techList.listId.map((list, index) => (
                <li key={index}>{list.name}</li>
              ))}
            </ul>
          </div>
          <div className="imageWrapper">
            <img src={myPic} alt="" className="profilePic" />
          </div>
        </div>
      )}
      {id === "work" &&
        data.project.slice(0,limit).map((work, index) => (
          <div className={className} key={index}>
            <div className="imageWrapper">
              <img
                src={`https://server-portofolio.herokuapp.com/${work.imageUrl}`}
                alt="myProject1"
              />
            </div>
            <div className="projectDetail">
              <h5 className="greenText" style={{ fontSize: "14px" }}>
                Featured Project
              </h5>
              <h2 className="projectTitle">{work.title}</h2>
              <div className="details">{work.detail}</div>
              <div className="tools">
                <ul>
                  {work.toolId.map((tool, index) => (
                    <li key={index}>{tool.name}</li>
                  ))}
                </ul>
              </div>
              <div className="links">
                <Icon href={work.github} label="GitHub" name="github"></Icon>
                <Icon
                  href={work.external}
                  label="external"
                  name="external-link"
                ></Icon>
              </div>
            </div>
          </div>
        ))}
    </Wrapper>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};
export default Section;
