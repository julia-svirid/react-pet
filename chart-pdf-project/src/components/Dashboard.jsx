import styled from "styled-components";
import React, {Fragment, useRef} from 'react';
import ChartContainer from "./Charts/ChartContainer";
import Chart from "./Charts/Chart";
import PieChart from "./Charts/PieChart";
import Button from "./Button";
import {useReactToPrint} from "react-to-print";
import {AreaChart} from "./Charts/AreaChart";
import {LineChart} from "./Charts/LineChart";

const StyledDashboard = styled.div`
  background-color: #ffff;
  width: 80%;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Dashboard = () => {
    const ref = useRef();

    const handlePrint = useReactToPrint({
        content: () => ref.current,
    });

    return (
        <Fragment>
            <StyledDashboard ref={ref}>
                <ChartContainer>
                    <Chart />
                </ChartContainer>
                <ChartContainer>
                    <PieChart />
                </ChartContainer>
                <ChartContainer>
                    <AreaChart />
                </ChartContainer>
                <ChartContainer>
                    <LineChart />
                </ChartContainer>

            </StyledDashboard>
            <div>
                <Button handlePrint={handlePrint} text={'Import in pdf'}/>
            </div>
        </Fragment>

    );
};

export default Dashboard;