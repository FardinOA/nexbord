import React from "react";
import DashboardCard from "../UI/Cards/DashboardCard";
import ChartOne from "../UI/Charts/ChartOne";

const Dashboard = () => {
    return (
        <div className=" ">
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartOne />
                <ChartOne />
                <ChartOne />
                <ChartOne />
                <ChartOne />
                <ChartOne />
            </div>
        </div>
    );
};

export default Dashboard;
