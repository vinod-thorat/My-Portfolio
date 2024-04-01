import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            <br />
            distinctio incidunt possimus quasi non quos odio!
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ea
            <br />
            amet facere maxime reprehenderit, dolorem quos.
          </span>
          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      {/*Right Side*/}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/*BackGround Circles*/}
        <div className="blueCircle w-backCircle"></div>
        <div className="yellowCircle w-backCircle"></div>
      </div>
    </div>
  );
};

export default Works;
