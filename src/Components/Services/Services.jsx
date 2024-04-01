import React, { useContext } from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "./My Resume.pdf";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          fuga a itaque, dolorem similique aperiam mollitia, <br />
          distinctio incidunt possimus quasi non quos odio!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/*right side*/}
      <div className="cards">
        {/*First Card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "13rem" }}
        >
          <Card
            emoji={Heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/*second Card*/}

        <motion.div
          initial={{ left: "-16rem", top: "12rem" }}
          whileInView={{ left: "-6rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-6rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>

        {/*Third CArd */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "20rem", left: "13rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Ui/UX"}
            detail={"fuga a itaque, dolorem similique aperiam mollitia,"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
