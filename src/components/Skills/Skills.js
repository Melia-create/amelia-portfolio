import Carousel from "react-multi-carousel";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  const [selectedItem, setSelectedItem] = useState({});

  const skills = [
    { id: 1, name: "Javascript", color: "#f0db4f", Icon: SiJavascript },
    { id: 2, name: "HTML", color: "#dd3e24", Icon: SiHtml5 },
    { id: 3, name: "CSS", color: "#264de4", Icon: SiCss3 },
    { id: 4, name: "Git", color: "#f34f29", Icon: SiGit },
    { id: 5, name: "React", color: "#61dbfb", Icon: SiReact },
    { id: 6, name: "NextJS", color: "grey", Icon: SiNextdotjs },
  ];

  return (
    <CarouselSection>
      <h1>Skills</h1>
      <Carousel responsive={responsive} infinite={true}>
        {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <Container>
              <div className="card">
                <div
                  className="face face1"
                  style={
                    skill.id === selectedItem.id ? { color: skill.color } : {}
                  }
                  onMouseEnter={() =>
                    setSelectedItem({ id: skill.id, color: skill.color })
                  }
                >
                  <div className="content">
                    <Icon />
                    <h2>{skill.name}</h2>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc consequat, nibh vel interdum iaculis, urna eros
                      ultricies lorem, ut luctus massa mi pellentesque neque.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          );
        })}
      </Carousel>
    </CarouselSection>
  );
};

export default Skills;

const CarouselSection = styled.div``;

const Container = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  justify-content: space-between;

  .card {
    position: relative;
    cursor: pointer;
  }

  svg {
    font-size: 100px;
  }

  .card .face {
    height: 200px;
    text-align: center;
    transition: 0.5s;
  }
  .card .face.face1 {
    position: relative;
    background: black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  .card:hover .face.face1 {
    transform: translateY(0);
  }

  .card:hover .face.face1 .content {
    opacity: 1;
    text-align: center;
  }

  .card .face.face1 .content h2 {
    margin: 10px 0 0;
    padding: 0;
    color: rgb(198, 0, 99);
    font-size: 1.5em;
  }

  .card .face.face2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px black;
    transform: translateY(-100px);
    color: white;
  }

  .card:hover .face.face2 {
    transform: translateY(0);
  }

  .card .face.face2 .content p {
    margin: 0;
    padding: 0;
  }

  .card .face.face2 .content a {
    margin: 15px 0 0;
    display: inline-block;
    text-decoration: none;
    font-weight: 900;
    color: rgb(198, 0, 99);
    padding: 5px;
  }
`;
