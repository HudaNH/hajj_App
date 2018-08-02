import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import {minaCrowd, arafatCrowd, muzdalifahCrowd} from "data/crowd";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { legendSales } from "variables/Variables.jsx";
import Maps from "views/Maps/Maps";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    
    this.updateRegion = this.updateRegion.bind(this);

    this.state = {
      region: {
        name: "Mina",
        capacity: "20000",
        crowd: minaCrowd,
        position: {lat: 21.416087, lng: 39.894372}
      }   
    };
  }
  
  componentDidMount() {

  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  updateRegion(event) {
    var selectedRegion = event.target.innerText;
    if(selectedRegion === "Mina") {
      this.setState({
        region: {
          name: "Mina", 
          capacity: "20000",
          crowd: minaCrowd,
          position: {lat: 21.416087, lng: 39.894372}
        }
      });  
    } else if (selectedRegion === "Arafat") {
      this.setState({
        region: {name: "Arafat", 
        capacity: "40000",
        crowd: arafatCrowd,
        position: {lat: 21.353586, lng: 39.977915}
      }
      });
    } else if (selectedRegion === "Muzdalifah") {
      this.setState({
        region: {
          name: "Muzdalifah", 
          capacity: "70000",
          crowd: muzdalifahCrowd,
          position: {lat: 21.387778, lng: 39.885511}
        }
      });
    }
    
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue={this.state.region.capacity}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title={this.state.region.name}
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ButtonToolbar style={{marginBottom: "10px"}}>
                      <Button bsStyle="primary" onClick={this.updateRegion} >Mina</Button>
                      <Button bsStyle="primary" onClick={this.updateRegion} >Arafat</Button>
                      <Button bsStyle="primary" onClick={this.updateRegion} >Muzdalifah</Button>
                    </ButtonToolbar>
              
                    <Maps crowd={this.state.region.crowd} position={this.state.region.position} />
                    {/* <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    /> */}
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
