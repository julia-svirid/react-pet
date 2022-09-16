import styled from "styled-components";
import Chart from "./components/Chart";
import ChartContainer from "./components/ChartContainer";
import PieChart from "./components/PieChart";
import Button from "./components/Button";

const Container = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const Dashboard = styled.div`
  background-color: #ffff;
  width: 80%;
  padding: 25px;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Container>
        <Dashboard>
            <ChartContainer>
                <Chart />
            </ChartContainer>
            <ChartContainer>
                <PieChart />
            </ChartContainer>
            <div>
                <Button text={'Import in pdf'}/>
            </div>

        </Dashboard>

    </Container>
  );
}

export default App;
