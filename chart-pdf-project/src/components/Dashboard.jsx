import styled from "styled-components";
import React, {Fragment, useRef} from 'react';
import ChartContainer from "./Charts/ChartContainer";
import Chart from "./Charts/Chart";
import PieChart from "./Charts/PieChart";
import Button from "./UI/Button";
import {useReactToPrint} from "react-to-print";
import {AreaChart} from "./Charts/AreaChart";
import {LineChart} from "./Charts/LineChart";
import Header from "./Header";
import {H1} from "./UI/Text";
import {useNavigate} from "react-router";

const StyledDashboard = styled.div`
  background-color: #f7f8fa;
  width: 80%;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 15px;
`

const ExportPdfContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Dashboard = () => {
    const ref = useRef();
    const navigate = useNavigate();

    const handlePrint = useReactToPrint({
        content: () => ref.current,
    });

    const logOut = () => {
        navigate('/login')
    }

    return (
        <Fragment>
            <StyledDashboard>
                <Header>
                    <H1>Charts dashboard</H1>
                    <div>
                        <Button onClick={handlePrint} text={'Import in pdf'} />
                        <Button onClick={logOut} text={'Log out'} />
                    </div>
                </Header>
                <ExportPdfContainer ref={ref}>
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
                </ExportPdfContainer>

            </StyledDashboard>

        </Fragment>

    );
};

export default Dashboard;