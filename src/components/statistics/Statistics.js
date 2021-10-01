import {
  Container,
  Statisticss,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

function Statistics({ title, stats }) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomcolor = () => {
    return `rgb(${randomIntegerFromInterval(
      0,
      255
    )},${randomIntegerFromInterval(0, 255)},${randomIntegerFromInterval(
      0,
      255
    )})`;
  };
  return (
    <Statisticss>
      <Container>
        <Title>{title}</Title>

        <StatList>
          {stats.map((stat) => {
            return (
              <Item
                style={{ backgroundColor: randomcolor() }}
                classNameName="item"
                key={stat.id}
              >
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}%</Percentage>
              </Item>
            );
          })}
        </StatList>
      </Container>
    </Statisticss>
  );
}

export default Statistics;
