import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
 
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact us for any photography or videografy ideas that you have</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera"></img>
      </Image>
    </About>
  );
};

export default AboutSection;
