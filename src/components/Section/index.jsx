import React, { useRef, useLayoutEffect } from "react";
import { Wrapper } from "./Section.styles";
import PropTypes from "prop-types";
import myPic from "../../assets/images/new.jpg";
import Icon from "../Icon";
import gsap from "gsap";
const Section = ({ className, id, title, no, data, limit }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useLayoutEffect(() => {
    gsap.fromTo(
      q([
        "#about > .title",
        "#about > .about > .detail",
        ".skillList",
        "#about > .about > .imageWrapper",
      ]),
      { opacity: 0, y: 100 },
      { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce" }
    );
  }, []);
  tl.current = gsap.timeline({ paused: true });
  tl.current.fromTo(
    q([
      "#work > .title",
      "#work > .work > .imageWrapper",
      "#work > .work > .projectDetail",
    ]),
    { opacity: 0, y: 100 },
    { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce" }
  );
  const sectionAnimation = () => {
    if (window.scrollY > 1200) {
      tl.current.play();
      document.removeEventListener("scroll", sectionAnimation);
    }
  };
  document.addEventListener("scroll", sectionAnimation);

  return (
    <Wrapper id={id} ref={el}>
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
        data.project.slice(0, limit).map((work, index) => (
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
