import Carousel from "react-multi-carousel";
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
  const skills = [
    { name: "Javascript", Icon: SiJavascript },
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "Git", Icon: SiGit },
    { name: "React", Icon: SiReact },
    { name: "NextJS", Icon: SiNextdotjs },
  ];

  const icons = [SiJavascript, SiHtml5, SiCss3, SiGit, SiReact];
  return (
    <CarouselSection>
      <h1>Skills</h1>
      <Carousel responsive={responsive} infinite={true}>
        {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <Container>
              <div className="card">
                <div className="face face1">
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
    width: 300px;
    height: 200px;
    transition: 0.5s;
  }
  .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  .card:hover .face.face1 {
    background: rgb(198, 0, 99);
    transform: translateY(0);
  }

  .card .face.face1 .content {
    opacity: 0.2;
    transition: 0.5s;
  }

  .card:hover .face.face1 .content {
    opacity: 1;
    text-align: center;
  }

  .card .face.face1 .content h2 {
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
  }

  .card .face.face2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
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
    color: #333;
    padding: 5px;
  }
`;
