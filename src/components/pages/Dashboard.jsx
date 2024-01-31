import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Table } from "antd";
import { Card } from 'antd';
import {
    errorResponse,
} from "../helpers/response";
import Http from '../security/Http'
import url from "../../Development.json";
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { Content } = Layout;
    const [dashboardData, setDashboardData] = useState([]);
    const [monthlyActivity, setMonthlyActivity] = useState([]);

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        await Http
            .get(process.env.REACT_APP_BASE_URL + url.dashboard_get)
            .then((response) => {
                let data = response.data.data;
                setDashboardData(data);
                setMonthlyActivity(data.monthlyActivity);
            })
            .catch((error) => {
                if (error.response) {
                    errorResponse(error)
                }
            });
    };

    return (
        <Content className="site-layout-background">

            <div className="site-card-border-less-wrapper mt-4">

                <h3 className="px-2">
                    Dashboard
                </h3>

                <Row>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Customers Count (Active/Total)"
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.activeCustomer}
                                /
                                {dashboardData.allCustomer}

                            </h3>
                        </Card>
                    </Col>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Service Provider Count (Active/Total)"
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.activeServiceProvider}
                                /
                                {dashboardData.allServiceProvider}

                            </h3>
                        </Card>
                    </Col>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Total Earning"
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.currentMonthErning}
                                {" "}
                                AED
                                {/* /
                                {dashboardData.currentMonthErningTotal} */}

                            </h3>

                        </Card>
                    </Col>

                </Row>
                <div>

                    <div className="d-flex">
                        <h3 className="p-2 px-2">
                            Service Request Overall Status
                            <span className="pl-1 text-secondary">
                                {` (as of now)`}
                            </span>
                        </h3>
                    </div>
                    <Row>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Initiated"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestInitiated}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Ongoing"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestOngoing}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Completed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestCompleted}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Disputed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestDisputed}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Closed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestClosed}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Expired"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestExpired}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={24} className="">
                            <Card
                                title="Cancelled"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestCancelled}
                                </h1>
                            </Card>
                        </Col>
                    </Row>
                </div>
                {/* <Card className="mx-2">
                    <div className="table-responsive">
                        <h3 className="p-2">
                            Monthly Activity (Number of SRs processed within a month)
                        </h3>
                        <Table dataSource={monthlyActivity} columns={columns} rowKey={"inedx"} />
                    </div>
                </Card> */}
            </div>
        </Content >
    )
};

export default Dashboard;
