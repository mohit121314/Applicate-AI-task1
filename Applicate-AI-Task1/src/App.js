import React, { Component } from "react";
import topFiveoOrders from "./topFiveoOrders.json";
import status from "./status.json";
import bottomFiveOrders from "./bottomFiveOrders.json";
import topFiveUers from "./topFiveUsers.json";
import bottomFiveUsers from "./bottomFiveUsers.json";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import chart from "./chart.json";
import india from "./india.json";
import japan from "./japan.json";

am4core.useTheme(am4themes_animated);

export default class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        status_order: "In Progress",
        data: "india",
      };
    }
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = india;
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.title.text = "Time (in months)";
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Total Sale (in Rs)";

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "totalamount";
    series.dataFields.dateX = "orderdate";
    series.strokeWidth = 3;

    var a = series.bullets.push(new am4charts.CircleBullet());
    a.tooltipText = "{dateX}:Sale=[bold]{valueY}Rs";

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  }
  countryChangeHandler = (e) => {
    this.setState(
      {
        data: e.target.value,
      },
      () => this.myfunc(this.state.data)
    );
  };

  myfunc(i) {
    if (i === "india") {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = india;
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.renderer.grid.template.location = 0.5;
      dateAxis.title.text = "Time (in months)";
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Total Sale (in Rs)";

      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "totalamount";
      series.dataFields.dateX = "orderdate";
      series.strokeWidth = 3;

      var a = series.bullets.push(new am4charts.CircleBullet());
      a.tooltipText = "{dateX}:Sale=[bold]{valueY}Rs";

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
    } else {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = japan;
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.renderer.grid.template.location = 0.5;
      dateAxis.title.text = "Time (in months)";
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Total Sale (in Rs)";

      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "totalamount";
      series.dataFields.dateX = "orderdate";
      series.strokeWidth = 3;

      var a = series.bullets.push(new am4charts.CircleBullet());
      a.tooltipText = "{dateX}:Sale=[bold]{valueY}Rs";

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <p>Applicate AI</p>
          <select value={this.state.data} onChange={this.countryChangeHandler}>
            <option disabled>--Select Region--</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
          </select>
        </div>
        <div className="top">
          <ul>
            <li>
              <p>
                <span className="label">Today's Order -</span>
                <span className="value"> {status.todayOrder}</span>
              </p>
              <p>
                <span className="label">Current Week Order -</span>
                <span className="value"> {status.currentWeekorder}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="label">Today's Order Amount -</span>
                <span className="value"> {status.todayAmount}</span>
              </p>
              <p>
                <span className="label">Current Week Amount -</span>
                <span className="value"> {status.currentWeekAmount}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="label">MTD Order -</span>
                <span className="value"> {status.MTDorder}</span>
              </p>
              <p>
                <span className="label">Last Month Order -</span>
                <span className="value"> {status.lastMonthAmount}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="label">MTD Order Amount -</span>
                <span className="value"> {status.MTDamount}</span>
              </p>
              <p>
                <span className="label">Last Month Amount -</span>
                <span className="value"> {status.lastMonthAmount}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="middle">
          <div id="chartdiv" className="graphWrapper"></div>
        </div>
        <div className="bottom">
          <table>
            <caption>Top 5 Orders</caption>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Total Amount</th>
                <th>Total Quantity</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {topFiveoOrders.map((item) => {
                return (
                  <tr>
                    <td>{item.orderNo}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.totalQuantity}</td>
                    <td>{item.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table>
            <caption>Bottom 5 Orders</caption>
            <thead>
              <th>Order No.</th>
              <th>Total Amount</th>
              <th>Total Quantity</th>
              <th>User Name</th>
            </thead>
            <tbody>
              {bottomFiveOrders.map((item) => {
                return (
                  <tr>
                    <td>{item.orderNo}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.totalQuantity}</td>
                    <td>{item.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table>
            <caption>Top 5 Users</caption>
            <thead>
              <th>User Name</th>
              <th>Total Amount</th>
              <th>Total Quantity</th>
              <th>City</th>
            </thead>
            <tbody>
              {topFiveUers.map((item) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.totalQuantity}</td>
                    <td>{item.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table>
            <caption>Bottom 5 Users</caption>
            <thead>
              <th>User Name</th>
              <th>Total Amount</th>
              <th>Total Quantity</th>
              <th>City</th>
            </thead>
            <tbody>
              {bottomFiveUsers.map((item) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.totalQuantity}</td>
                    <td>{item.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table>
            <caption>Detail Order Report</caption>
            <thead>
              <th>User Name</th>
              <th>Order No.</th>
              <th>Order Date</th>
              <th>Total Product Count</th>
              <th>Total Amount</th>
              <th>Total Qty</th>
              <th>Status</th>
            </thead>
            <tbody>
              {chart.map((item) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.orderno}</td>
                    <td>{item.orderdate}</td>
                    <td>{item.totalproductcount}</td>
                    <td>{item.totalamount}</td>
                    <td>{item.totalqty}</td>
                    <td
                      className={
                        this.state.status_order === item.status
                          ? "status-inp"
                          : "status-comp"
                      }
                    >
                      {item.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
