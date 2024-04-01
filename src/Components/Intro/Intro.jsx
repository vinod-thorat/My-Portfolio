import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Vinod Thorat</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Frontend Developer with high level of experience in Web Development
            and Designing,
            <br /> Producting the Quality Work.
          </span>
        </div>
        <button className="button i-button ">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/vinod-thorat" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/vinodthorat" target="_blank">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/vinodthorat_1" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "4%", left: "74%" }}
          whileInView={{ left: "57%" }}
          transition={transition}
          style={{ top: "4%", left: "57%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="developer" />
        </motion.div>

        <motion.div
          initial={{ top: "23.5rem", left: "24rem" }}
          whileInView={{ left: "1.5rem" }}
          transition={transition}
          style={{ top: "23.5rem", left: "1.4rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1f5ff",
            top: "20rem",
            width: "28rem",
            height: "16rem",
            left: "-11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
