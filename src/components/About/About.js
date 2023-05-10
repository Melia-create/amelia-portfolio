import styled from "styled-components";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <Grid>
      <div className="Me">
        <SImage
          responsive={true}
          quality="auto"
          width={250}
          height={250}
          src="/itme.jpg"
        />
        <Rectangle>
          <div className="Text">
            <h1>Hi, I'm Amelia</h1>
            <p>
              I'm a versatile Junior Developer whose currently specialising in
              Web Development with a thirst for knowledge.
            </p>
          </div>
          <div className="Icons">
            <a>
              <AiOutlineFacebook />
            </a>
            <a href="https://github.com/Melia-create" passHref={true}>
              <AiOutlineGithub />
            </a>
            <a>
              <AiOutlineInstagram />
            </a>
            <a href="https://www.linkedin.com/in/amelia-evr/" passHref={true}>
              <AiOutlineLinkedin />
            </a>
          </div>
        </Rectangle>
      </div>
      <div className="About">
        <h1>About Me</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <a href="AmeliaRidingCV.pdf" download="AmeliaCV">
          <Button>
            <FiDownload />
            Download Resume
          </Button>
        </a>
      </div>
    </Grid>
  );
};

export default About;

const Button = styled.button`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: transparent;
  border: 2px solid rgb(198, 0, 99);
  border-radius: 5px;
  font-size: 20px;
  color: white;
  padding: 20px;
  display: flex;
  transition: 0.5s;
  margin-top: 20px;

  :hover {
    background-color: rgb(198, 0, 99);
  }
`;

const SImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  top: 700px;
`;

const Rectangle = styled.div`
  border-radius: 10px;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  height: 500px;
  color: white;
  background-color: rgb(198, 0, 99);

  .Text {
    margin: 0 15px;
  }
  h1 {
    text-transform: uppercase;
  }

  .Icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    font-size: 30px;

    & :visited {
      color: white;
    }
  }
`;

const Grid = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  text-align: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .Me {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .About {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
    h1 {
      color: rgb(198, 0, 99);
    }
  }
`;
