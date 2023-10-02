import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { useWindowDimensions } from "./utilities/WindowDimensions.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    // Simulate preloader animation
    setTimeout(() => {
      setIsLoading(false); // Preloader animation has finished
    }, 4000); // Adjust the time to match your preloader animation duration
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      let navElements = document.querySelectorAll(".fade-in-initial-up");

      navElements.forEach((element) => {
        element.classList.add("fade-in-active");
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (width > 768) {
      let navElements = document.querySelectorAll(".fade-in-initial-up");

      navElements.forEach((element) => {
        element.classList.add("fade-in-active");
      });
    }
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();

        // Adjust this value to control when the animation triggers
        const triggerPoint = window.innerHeight;

        if (
          rect.top <= triggerPoint &&
          !element.classList.contains("fade-in-active")
        ) {
          element.classList.add("fade-in-active");
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <div className="app_wrapper">
            <Navbar />
            <div className="content_wrapper">
              <About />
              <Experience />
              <Projects />
              <Contact />
              <div className="code offwhite footer">
                <p>Built by Danyal Babar using React.js</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
