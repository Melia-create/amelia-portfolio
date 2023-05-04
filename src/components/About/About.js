import styled from "styled-components";
import Image from "next/image";
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
            <h2>Hi, I'm Amelia</h2>
            <p>I'm a Junior Web Developer</p>
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
  width: 400px;
  height: 500px;
  color: white;
  background-color: rgb(198, 0, 99);

  .Text {
  }

  h2 p {
    position: absolute;
    text-transform: uppercase;
  }
`;

const Grid = styled.div`
  border: 1px solid yellow;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  text-align: center;

  .Me {
    display: flex;
    border: 2px solid red;
    justify-content: center;
    align-items: center;
  }
  .About {
    border: 2px solid blue;
  }
`;
