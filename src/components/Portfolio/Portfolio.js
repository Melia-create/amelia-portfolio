import styled from "styled-components";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <section>
        <Grid></Grid>
      </section>
    </div>
  );
};

export default Portfolio;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
