import React from "react";
//icons.
import clock from "../img/clock.svg";
import diaphram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesService = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon"></img>
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon"></img>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphram} alt="icon"></img>
              <h3>Diaphram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon"></img>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="secondPhoto"></img>
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 1300px){
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesService;
