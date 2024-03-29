import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import DataTab from "../components/DataTab";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Spinner from "../components/Spinner";
import Icon from "../components/Icon";
import { tabs } from "../assets/datas/tabs";
import { hero } from "../assets/datas/heros";
import { about } from "../assets/datas/abouts";
import { work } from "../assets/datas/projects";
const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);
  const [data, setData] = useState({
    payload: { hero: {}, about: {}, work: [], tabs: [] },
  });

  useEffect(() => {
    setLoading(true);

    setData({
      payload: {
        hero,
        about,
        work,
        tabs,
      },
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //comment since backend are in local then our payloads are kept in json
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async () => {
  //     const heroRes = await fetch(
  //       "https://server-portofolio.herokuapp.com/api/v1/hero"
  //     );
  //     const hero = await heroRes.json();
  //     const aboutRes = await fetch(
  //       "https://server-portofolio.herokuapp.com/api/v1/about"
  //     );
  //     const about = await aboutRes.json();
  //     const workRes = await fetch(
  //       "https://server-portofolio.herokuapp.com/api/v1/work"
  //     );

  //     const work = await workRes.json();
  //     const tabsRes = await fetch(
  //       "https://server-portofolio.herokuapp.com/api/v1/experience"
  //     );
  //     const tabs = await tabsRes.json();
  //     setData({ payload: { hero, about, work, tabs } });
  //   };
  //   fetchData().then((_res) => {
  //     setLoading(false);
  //   });
  // }, []);
  const onClick = (_e) => {
    const hiddenEl = window.document.getElementById("hidden");
    const opacity = hiddenEl.style.opacity;
    if (opacity == 1) {
      hiddenEl.style.opacity = 0;
      hiddenEl.style.visibility = "hidden";
      hiddenEl.style.zIndex = 9;
      window.document.body.style.overflowY = "visible";
    }
  };
  const closeModal = (e) => {
    e.preventDefault();
    const hiddenEl = window.document.getElementById("hidden");
    const opacity = hiddenEl.style.opacity;
    if (opacity == 1) {
      hiddenEl.style.opacity = 0;
      hiddenEl.style.visibility = "hidden";
      hiddenEl.style.zIndex = 9;
      window.document.body.style.overflowY = "visible";
    }
  };
  const loadMore = (e) => {
    e.preventDefault();
    setLimit((prevState) => prevState + 4);
  };
  const loadLess = (e) => {
    e.preventDefault();
    setLimit(4);
  };
  let content = "";
  if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <>
        {data.payload.tabs.length > 0 && (
          //wrapped in div with below style to hide x overflow and need to set position to relative because overflowx in body tag will be ignored in mobile
          <div style={{ overflowX: "hidden", position: "relative" }}>
            <Navbar />
            <aside className="hiddenLink" id="hidden">
              <Icon
                href=""
                name="x"
                label="x"
                style={{ width: "36px", height: "36px" }}
                onClick={closeModal}
              ></Icon>
              <a href="#about" className="link" onClick={onClick}>
                About
              </a>
              <a href="#experience" className="link" onClick={onClick}>
                Experience
              </a>
              <a href="#work" className="link" onClick={onClick}>
                Work
              </a>
              <a href="#contact" className="link" onClick={onClick}>
                Contact
              </a>
              <a href="/cv.pdf" download target="_blank" className="button">
                Resume
              </a>
            </aside>
            <Hero
              jobTitle={data.payload.hero[0].jobTitle}
              companyLink={data.payload.hero[0].companyLink}
              companyName={data.payload.hero[0].companyName}
              description={data.payload.hero[0].description}
            />
            <Section
              id="about"
              className="about"
              title="About Me"
              no="01."
              data={data.payload.about}
            />
            <DataTab id="experience" data={data.payload.tabs} />
            <Section
              id="work"
              className="work"
              title="Projects"
              no="03."
              data={data.payload.work}
              limit={limit}
            />
            {limit < data.payload.work.project.length && (
              <div className="loadMore">
                <a href="" className="button" onClick={loadMore}>
                  Show More
                </a>
              </div>
            )}

            {limit > 4 && 4 < data.payload.work.project.length && (
              <div className="loadMore">
                <a href="" className="button" onClick={loadLess}>
                  Show Less
                </a>
              </div>
            )}
            <Contact />
            <Sidebar />
            <Footer />
          </div>
        )}
      </>
    );
  }

  return content;
};

export default LandingPage;
