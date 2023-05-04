import styled from "styled-components";

const Banner = () => {
  return (
    <div>
      <HeroBanner />
    </div>
  );
};

export default Banner;

const HeroBanner = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 250px 0;
  background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(4px);
`;
