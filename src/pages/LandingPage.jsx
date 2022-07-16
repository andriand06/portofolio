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
const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);
  const [data, setData] = useState({
    payload: { about: {}, work: [], tabs: [] },
  });
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const aboutRes = await fetch(
        "https://server-portofolio.herokuapp.com/api/v1/about"
      );
      const about = await aboutRes.json();
      const workRes = await fetch(
        "https://server-portofolio.herokuapp.com/api/v1/work"
      );

      const work = await workRes.json();
      const tabsRes = await fetch(
        "https://server-portofolio.herokuapp.com/api/v1/experience"
      );
      const tabs = await tabsRes.json();
      setData({ payload: { about, work, tabs } });
    };
    fetchData().then((_res) => {
      setLoading(false);
    });
  }, []);
  const onClick = (e) => {
    e.preventDefault();
    const hiddenEl = window.document.getElementById("hidden");
    const opacity = hiddenEl.style.opacity;
    if (opacity == 1) {
      hiddenEl.style.opacity = 0;
      hiddenEl.style.visibility = "hidden";
      hiddenEl.style.zIndex = 9;
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
          <>
            <Navbar />
            <aside className="hiddenLink" id="hidden">
              <Icon
                href=""
                name="x"
                label="x"
                style={{ width: "36px", height: "36px" }}
                onClick={onClick}
              ></Icon>
              <a href="#about" className="link">
                About
              </a>
              <a href="#experience" className="link">
                Experience
              </a>
              <a href="#work" className="link">
                Work
              </a>
              <a href="#contact" className="link">
                Contact
              </a>
              <a href="/cv.pdf" target="_blank" className="button">
                Resume
              </a>
            </aside>

            <Hero />
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
          </>
        )}
      </>
    );
  }

  return content;
};

export default LandingPage;
