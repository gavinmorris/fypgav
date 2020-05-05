import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: false,
      summary: {},
      autoFillClicked: false,
      resultsArray: [],
      costsArray: [],
      selectedFile: null,
      multiStructure: false,
      errorMsg: null,
      formData: {
        CO2MainSpace: 5.43383900e+03,
        CO2SecondarySpace:5.11128000e+02,
        CO2SupplementaryWater:6.16915406e+02,
        DeliveredEnergyMainSpace:2.67676820e+04,
        DeliveredLightingEnergy: 1.12652300e+03,
        DoorArea:2.68448554e+00,
        DwellingTypeDescr:0,
        ElecImmersionInSummer:0,
        FirstWallArea: 5.34000000e+01,
        FirstWallUValue:2.20000000e+00,
        FloorArea:9.65000000e+01,
        GroundFloorArea:1.51300000e+02,
        GroundFloorHeight:2.60000000e+00,
        HSMainSystemEfficiency:6.50000000e+01,
        HSSupplHeatFraction:1.00000000e-01,
        HSSupplSystemEff:7.30000000e+01,
        InsulationThickness: 8.00000000e+01,
        InsulationType:2, 
        LivingAreaPercent:1.04098000e+01,
        LowEnergyLightingPercent:3.50000000e+01,
        MainSpaceHeatingFuel:0,
        MainWaterHeatingFuel:0,
        MPCDERValue:3.27600000e+01,
        NoOfChimneys:3.00000000e+00,
        NoOfFansAndVents:  5.00000000e+00,
        NoOfOpenFlues:1.00000000e+00, 
        NoStoreys:2.00000000e+00,
        PercentageDraughtStripped:1.00000000e+02,
        PredominantRoofType:1,
        PrimaryCircuitLoss:0,
        PrimaryEnergyLighting:3.04161200e+03, 
        PrimaryEnergyMainSpace:2.94444500e+04,
        PrimaryEnergyMainWater:8.23920800e+03,
        PrimaryEnergyPumpsFans:3.51000000e+02,
        PrimaryEnergySecondarySpace:2.76966000e+03,
        RoofArea:8.56000000e+01,
        RoomInRoofArea:2.56092374e+01,
        SecondWallIsSemiExposed:0,
        SolarHotWaterHeating:0,
        SolarSpaceHeatingSystem:0.0,
        StructureType:0,
        SupplSHFuel:2.00000000e+00,
        SupplWHFuel:1.0,
        ThermalMassCategory:1,
        TotalDeliveredEnergy:3.80322670e+04,
        UvalueDoor:2.71698590e+00,
        UValueFloor:6.00000000e-01,
        UValueRoof:2.10000000e-01,
        UValueWall:1.53000000e+00,
        UValueWindow:2.66000000e+00,
        VentilationMethod:1,
        WallArea:1.02200000e+02,
        WHEffAdjFactor: 9.50000000e-01,
        WHMainSystemEff:6.50000000e+01,
        WindowArea:2.40500000e+01,
        Year_of_Construction:4
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
    if(event.target.files[0] != null){
        this.setState({
            selectedFile: event.target.files[0]
          });
    }
  }

  handleAutoFillClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/autofill/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          formData: response.autofill,
          isLoading: false,
          autoFillClicked: true
        });
        console.log(response.error)
      });
  }

  handleFileUpload = () => {
    this.setState({ isLoading: true });
	const data = new FormData();
    data.append('file',  this.state.selectedFile);
    data.append('filename',  this.state.selectedFile.name);
    fetch('http://127.0.0.1:5000/upload/', 
      {
          method: 'POST',
          body: data,
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.costs)
            this.setState({
                resultsArray: response.results_array,
                costsArray : response.cost,
                isLoading: false,
                summary:response.summary
            });
            this.setState({
                errorMsg: response.error
            })
        });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          costs: response.costs,
          isLoading: false
        });
        console.log(response.error)
      });
  }

  handleCancelClick = (event) => {
    this.setState({ 
        result: "",
        resultsArray: []
     });
  }
  

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const costs = this.state.costs;
    const summary = this.state.summary;
    const autoFillClicked = this.state.autoFillClicked;
    const resultsArray = this.state.resultsArray;
    const costsArray = this.state.costsArray;
    const imagePath = "./grade-png/fyp-"+result+"-rating.png";
    const error = this.state.errorMsg;
    return (
      <Container>
        <div>
          <h1 className="title">WEB-BASED INTELLIGENT KNOWLEDGE-BASED ENERGY RETROFIT RECOMMENDATION SYSTEM</h1>
        </div>
        <center>
            <img src='./logo/ucd_ei.png' alt="energy institute logo" height="80" width="180"/>
        </center>
        <Tabs>
            <TabList>
                <Tab enable>Single</Tab>
                <Tab>Multi</Tab>
             </TabList>
        <div className="content">
            <TabPanel>
            <b>Single</b>
            <Form>
                <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Dwelling Type</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="DwellingTypeDescr" 
                                    name="DwellingTypeDescr"
                                    value={formData.DwellingTypeDescr}
                                    onChange={this.handleChange} >
                        <option value="0">Apartment</option>
                        <option value="1">Basement-Dwelling</option>
                        <option value="2">Detached house</option>
                        <option value="3">End of terrace house</option>
                        <option value="4">Grand-floor apartment</option>
                        <option value="5">House</option>
                        <option value="6">Maisonette</option>
                        <option value="7">Mid-floor apartment</option>
                        <option value="8">Mid-terrace house</option>
                        <option value="9">Semi-detached house</option>
                        <option value="10">Top-floor apartment</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Year of Construction</Form.Label>
                        <Form.Control as="select"
                            type="number" 
                            placeholder="Year_of_Construction" 
                            name="Year_of_Construction"
                            value={formData.Year_of_Construction}
                            onChange={this.handleChange} >
                        <option value="0">2019</option>
                        <option value="1">2000</option>
                        <option value="2">1980</option>
                        <option value="3">1960</option>
                        <option value="4">1940</option>
                        <option value="5">1920</option>
                        <option value="6">1900</option>
                        <option value="7">1800</option>
                        <option value="8">1700</option> 
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Col>
                    <Button
                    block
                    variant="success"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleAutoFillClick : null}>
                    { isLoading ? 'Fetching Data' : 'Autofill' }
                    </Button>
                </Col>
                
                </Form>
                {autoFillClicked === false ? null :
                <Form>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>CO2 Main Space</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="CO2MainSpace" 
                            name="CO2MainSpace"
                            value={formData.CO2MainSpace}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CO2 Secondary Space</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="CO2SecondarySpace" 
                            name="CO2SecondarySpace"
                            value={formData.CO2SecondarySpace}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CO2 Supplementary Water</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="CO2SupplementaryWater" 
                            name="CO2SupplementaryWater"
                            value={formData.CO2SupplementaryWater}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Delivered Energy Main Space</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="DeliveredEnergyMainSpace" 
                            name="DeliveredEnergyMainSpace"
                            value={formData.DeliveredEnergyMainSpace}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Delivered Lighting Energy</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="DeliveredLightingEnergy" 
                            name="DeliveredLightingEnergy"
                            value={formData.DeliveredLightingEnergy}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Door Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="DoorArea" 
                            name="DoorArea"
                            value={formData.DoorArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Elec Immersion In Summer</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="ElecImmersionInSummer" 
                                    name="ElecImmersionInSummer"
                                    value={formData.ElecImmersionInSummer}
                                    onChange={this.handleChange} >
                            <option value="0">NO</option>
                            <option value="1">YES</option>
                        </Form.Control>  
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Wall Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="FirstWallArea" 
                            name="FirstWallArea"
                            value={formData.FirstWallArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>First Wall U-Value</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="FirstWallUValue" 
                            name="FirstWallUValue"
                            value={formData.FirstWallUValue}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Floor Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="FloorArea" 
                            name="FloorArea"
                            value={formData.FloorArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Ground Floor Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="GroundFloorArea" 
                            name="GroundFloorArea"
                            value={formData.GroundFloorArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Ground Floor Height</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="GroundFloorHeight" 
                            name="GroundFloorHeight"
                            value={formData.GroundFloorHeight}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>HS Main System Efficiency</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="HSMainSystemEfficiency" 
                            name="HSMainSystemEfficiency"
                            value={formData.HSMainSystemEfficiency}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>HS Supplement Heat Fraction</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="HSSupplHeatFraction" 
                            name="HSSupplHeatFraction"
                            value={formData.HSSupplHeatFraction}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>HS Supplement System Efficiency</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="HSSupplSystemEff" 
                            name="HSSupplSystemEff"
                            value={formData.HSSupplSystemEff}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Insulation Thickness</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="InsulationThickness" 
                            name="InsulationThickness"
                            value={formData.InsulationThickness}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Insulation Type</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="InsulationType" 
                            name="InsulationType"
                            value={formData.InsulationType}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Living Area Percent</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="LivingAreaPercent" 
                            name="LivingAreaPercent"
                            value={formData.LivingAreaPercent}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Low Energy Lighting Percent</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="LowEnergyLightingPercent" 
                            name="LowEnergyLightingPercent"
                            value={formData.LowEnergyLightingPercent}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Main Space Heating Fuel</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="MainSpaceHeatingFuel" 
                                    name="MainSpaceHeatingFuel"
                                    value={formData.MainSpaceHeatingFuel}
                                    onChange={this.handleChange} >
                            <option value="0">Anthracite</option>
                            <option value="1">Biodiesel from renewable source</option>
                            <option value="2">Bioethanol from renewable source</option>
                            <option value="3">Bottled LPG</option>
                            <option value="4">Bulk LPG (propane or butane)</option>
                            <option value="5">Electricity</option>
                            <option value="6">Electricity - Off-peak Night -R</option>
                            <option value="7">Heating Oil</option>
                            <option value="8">House Coal</option>
                            <option value="9">Mains Gas</option>
                            <option value="10">Manufactured Smokeless Fuel</option>
                            <option value="11">Peat Briquettes</option>
                            <option value="12">Solid Multi-fuel</option>
                            <option value="13">Wood Chips</option>
                            <option value="14">Wood Logs</option>
                            <option value="15">Wood Pellets (bulk supply)</option>
                            <option value="16">Wood Pellets(in bags)</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Main Water Heating Fuel</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="MainWaterHeatingFuel" 
                                    name="MainWaterHeatingFuel"
                                    value={formData.MainWaterHeatingFuel}
                                    onChange={this.handleChange} >
                            <option value="0">Anthracite</option>
                            <option value="1">Biodiesel from renewable source</option>
                            <option value="2">Bioethanol from renewable source</option>
                            <option value="3">Bottled LPG</option>
                            <option value="4">Bulk LPG (propane or butane)</option>
                            <option value="5">Electricity</option>
                            <option value="6">Electricity - Off-peak Night -R</option>
                            <option value="7">Heating Oil</option>
                            <option value="8">House Coal</option>
                            <option value="9">Mains Gas</option>
                            <option value="10">Manufactured Smokeless Fuel</option>
                            <option value="11">Peat Briquettes</option>
                            <option value="12">Sod Peat</option>
                            <option value="13">Solid Multi-fuel</option>
                            <option value="14">Wood Chips</option>
                            <option value="15">Wood Logs</option>
                            <option value="16">Wood Pellets (bulk supply)</option>
                            <option value="17">Wood Pellets(in bags)</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>MPCDER Value</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="MPCDERValue" 
                            name="MPCDERValue"
                            value={formData.MPCDERValue}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Number Of Chimneys</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="NoOfChimneys" 
                            name="NoOfChimneys"
                            value={formData.NoOfChimneys}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Number Of Fans and Vents</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="NoOfFansAndVents" 
                            name="NoOfFansAndVents"
                            value={formData.NoOfFansAndVents}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Number Of Open Flues</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="NoOfOpenFlues" 
                            name="NoOfOpenFlues"
                            value={formData.NoOfOpenFlues}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Number of Storeys</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="NoStoreys" 
                            name="NoStoreys"
                            value={formData.NoStoreys}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Percentage Draught Stripped</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PercentageDraughtStripped" 
                            name="PercentageDraughtStripped"
                            value={formData.PercentageDraughtStripped}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Predominant Roof Type</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PredominantRoofType" 
                            name="PredominantRoofType"
                            value={formData.PredominantRoofType}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Circuit Loss</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryCircuitLoss" 
                            name="PrimaryCircuitLoss"
                            value={formData.PrimaryCircuitLoss}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Energy Lighting</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryEnergyLighting" 
                            name="PrimaryEnergyLighting"
                            value={formData.PrimaryEnergyLighting}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Energy Main Space</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryEnergyMainSpace" 
                            name="PrimaryEnergyMainSpace"
                            value={formData.PrimaryEnergyMainSpace}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Energy Main Water</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryEnergyMainWater" 
                            name="PrimaryEnergyMainWater"
                            value={formData.PrimaryEnergyMainWater}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Energy Pumps Fans</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryEnergyPumpsFans" 
                            name="PrimaryEnergyPumpsFans"
                            value={formData.PrimaryEnergyPumpsFans}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Primary Energy Secondary Space</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="PrimaryEnergySecondarySpace" 
                            name="PrimaryEnergySecondarySpace"
                            value={formData.PrimaryEnergySecondarySpace}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Roof Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="RoofArea" 
                            name="RoofArea"
                            value={formData.RoofArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Room In Roof Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="RoomInRoofArea" 
                            name="RoomInRoofArea"
                            value={formData.RoomInRoofArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Second Wall Is Semi-Exposed</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="SecondWallIsSemiExposed" 
                                    name="SecondWallIsSemiExposed"
                                    value={formData.SecondWallIsSemiExposed}
                                    onChange={this.handleChange} >
                            <option value="0">NO</option>
                            <option value="1">YES</option>
                        </Form.Control>  
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Solar Hot Water Heating</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="SolarHotWaterHeating" 
                            name="SolarHotWaterHeating"
                            value={formData.SolarHotWaterHeating}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Solar Space Heating System</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="SolarSpaceHeatingSystem" 
                                    name="SolarSpaceHeatingSystem"
                                    value={formData.SolarSpaceHeatingSystem}
                                    onChange={this.handleChange} >
                            <option value="0">NO</option>
                            <option value="1">YES</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Structure Type</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="StructureType" 
                                    name="StructureType"
                                    value={formData.StructureType}
                                    onChange={this.handleChange} >
                            <option value="0">Insulated Concrete Form</option>
                            <option value="1">Masonry</option>
                            <option value="2">Timber or Steel Frame</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Supplement SH Fuel</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="SupplSHFuel" 
                            name="SupplSHFuel"
                            value={formData.SupplSHFuel}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Supplement WH Fuel</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="SupplWHFuel" 
                            name="SupplWHFuel"
                            value={formData.SupplSHFuel}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Thermal Mass Category</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="ThermalMassCategory" 
                            name="ThermalMassCategory"
                            value={formData.ThermalMassCategory}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Total Delivered Energy</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="TotalDeliveredEnergy" 
                            name="TotalDeliveredEnergy"
                            value={formData.TotalDeliveredEnergy}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>U-Value Door</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="UvalueDoor" 
                            name="UvalueDoor"
                            value={formData.UvalueDoor}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>U-Value Floor</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="UValueFloor" 
                            name="UValueFloor"
                            value={formData.UValueFloor}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>U-Value Wall</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="UValueWall" 
                            name="UValueWall"
                            value={formData.UValueWall}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>U-Value Window</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="UValueWindow" 
                            name="UValueWindow"
                            value={formData.UValueWindow}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Ventilation Method</Form.Label>
                        <Form.Control as="select" 
                                    type="number" 
                                    placeholder="VentilationMethod" 
                                    name="VentilationMethod"
                                    value={formData.VentilationMethod}
                                    onChange={this.handleChange} >
                            <option value="0">Bal. whole mech.vent heat recvr</option>
                            <option value="1">Bal. whole mech. vent no heat recvr</option>
                            <option value="2">Natural vent.</option>
                            <option value="3">Pos input vent.-loft</option>
                            <option value="4">Pos input vent.-outside</option>
                            <option value="5">Whole house extract vent.</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Wall Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="WallArea" 
                            name="WallArea"
                            value={formData.WallArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>WHEff Adj Factor</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="WHEffAdjFactor" 
                            name="WHEffAdjFactor"
                            value={formData.WHEffAdjFactor}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>WH Main System Eff</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="WHMainSystemEff" 
                            name="WHMainSystemEff"
                            value={formData.WHMainSystemEff}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Window Area</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="WindowArea" 
                            name="WindowArea"
                            value={formData.WindowArea}
                            onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>

                <Row>
                <Col>
                    <Button
                    block
                    variant="success"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handlePredictClick : null}>
                    { isLoading ? 'Making prediction' : 'Predict' }
                    </Button>
                </Col>
                <Col>
                    <Button
                    block
                    variant="danger"
                    disabled={isLoading}
                    onClick={this.handleCancelClick}>
                    Reset prediction
                    </Button>
                </Col>
                </Row>
            </Form>
            }
            </TabPanel>
            <TabPanel>
            <b>Multi</b>
            <Form>
                <Form.Row> 
                    <input type="file" name="file" onChange={this.handleChange} accept=".csv"/>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button
                            block
                            variant="success"
                            disabled={isLoading}
                            onClick={this.handleFileUpload}>
                            Upload File
                        </Button>
                    </Col>
                    <Col>
                        <Button
                        block
                        variant="danger"
                        disabled={isLoading}
                        onClick={this.handleCancelClick}>
                        Reset prediction
                        </Button>
                    </Col>
                </Form.Row>
                { error === "" ? null : (<div class="alert alert-danger" role="alert"> { error } </div>) }
            </Form>
        </TabPanel>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <img src={imagePath} alt="grade-png"/>
              </Col> 
              <Col>
                {(<div className="content" dangerouslySetInnerHTML={{__html: costs}}></div>)}
                <h5>Package 9</h5>
                <p>
                    Heating and hot water with ventilation upgradation<br/>
                    Wall, roof and floor renovation <br/>
                    Window renovation <br/>
                    Solar PV and hot water installation<br/>
                    Lighting upgradation<br/>
                </p>
              </Col>
            </Row>)
          }
          

          {resultsArray.length === 0 ? null:
            (
            <Tabs>
            <TabList>
                <Tab>Summary</Tab>
                {resultsArray.map((item, index) => (
                    <Tab>{index}</Tab>
                ))}
             </TabList>
            <div>
                <TabPanel>
                    <h3> Number of grades  </h3>
                    <Row> A: {summary['A']}</Row>
                    <Row> B: {summary['B']}</Row>
                    <Row> C: {summary['C']}</Row>
                    <Row> D: {summary['D']}</Row>
                    <Row> E: {summary['E']}</Row>
                    <Row> F: {summary['F']}</Row>
                    <Row> G: {summary['G']}</Row>
                </TabPanel>
                   {resultsArray.map((item, index) => (
                    (<TabPanel><Row>
                     <Col className="result-container">
                       <img src={"./grade-png/fyp-"+item+"-rating.png"} alt="grade-png"/>
                     </Col> 
                     <Col>
                        {(<div className="content" dangerouslySetInnerHTML={{__html: costsArray[index]}}></div>)}
                       <h5>Package 9</h5>
                       <p>
                           Heating and hot water with ventilation upgradation<br/>
                           Wall, roof and floor renovation <br/>
                           Window renovation <br/>
                           Solar PV and hot water installation<br/>
                           Lighting upgradation<br/>
                       </p>
                     </Col>
                     </Row></TabPanel>)
                 ))}
            </div> 

            </Tabs>
            )
          }

        </div>
        </Tabs>
      </Container>
    );
  }
}
export default App;
