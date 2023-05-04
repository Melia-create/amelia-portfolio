import styled from "styled-components";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

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
            <AiOutlineFacebook />
            <AiOutlineGithub />
            <AiOutlineInstagram />
            <AiOutlineLinkedin />
          </div>
        </Rectangle>
      </div>
      <div className="About">About me</div>
    </Grid>
  );
};

export default About;

const SImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  top: 200px;
`;

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-top: 20px;
    font-size: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  text-align: center;

  .Me {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .About {
    border: 2px solid red;
  }
`;
