(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,n){e.exports=n(34)},26:function(e,a,n){},27:function(e,a,n){},34:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(13),o=n.n(r),c=(n(26),n(14)),u=n(15),i=n(19),m=n(16),s=n(20),p=(n(27),n(1)),E=n(2),h=n(17),d=n(8),g=n(10),y=(n(28),n(7)),C=(n(31),function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=e.target.value,t=e.target.name,l=n.state.formData;l[t]=a,n.setState({formData:l}),null!=e.target.files[0]&&n.setState({selectedFile:e.target.files[0]})},n.handleAutoFillClick=function(e){var a=n.state.formData;n.setState({isLoading:!0}),fetch("http://127.0.0.1:5000/autofill/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){n.setState({formData:e.autofill,isLoading:!1,autoFillClicked:!0}),console.log(e.error)})},n.handleFileUpload=function(){n.setState({isLoading:!0});var e=new FormData;e.append("file",n.state.selectedFile),e.append("filename",n.state.selectedFile.name),fetch("http://127.0.0.1:5000/upload/",{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){console.log(e.costs),n.setState({resultsArray:e.results_array,costsArray:e.cost,isLoading:!1,summary:e.summary}),n.setState({errorMsg:e.error})})},n.handlePredictClick=function(e){var a=n.state.formData;n.setState({isLoading:!0}),fetch("http://127.0.0.1:5000/prediction/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){n.setState({result:e.result,costs:e.costs,isLoading:!1}),console.log(e.error)})},n.handleCancelClick=function(e){n.setState({result:"",resultsArray:[]})},n.state={isLoading:!1,summary:{},autoFillClicked:!1,resultsArray:[],costsArray:[],selectedFile:null,multiStructure:!1,errorMsg:null,formData:{CO2MainSpace:5433.839,CO2SecondarySpace:511.128,CO2SupplementaryWater:616.915406,DeliveredEnergyMainSpace:26767.682,DeliveredLightingEnergy:1126.523,DoorArea:2.68448554,DwellingTypeDescr:0,ElecImmersionInSummer:0,FirstWallArea:53.4,FirstWallUValue:2.2,FloorArea:96.5,GroundFloorArea:151.3,GroundFloorHeight:2.6,HSMainSystemEfficiency:65,HSSupplHeatFraction:.1,HSSupplSystemEff:73,InsulationThickness:80,InsulationType:2,LivingAreaPercent:10.4098,LowEnergyLightingPercent:35,MainSpaceHeatingFuel:0,MainWaterHeatingFuel:0,MPCDERValue:32.76,NoOfChimneys:3,NoOfFansAndVents:5,NoOfOpenFlues:1,NoStoreys:2,PercentageDraughtStripped:100,PredominantRoofType:1,PrimaryCircuitLoss:0,PrimaryEnergyLighting:3041.612,PrimaryEnergyMainSpace:29444.45,PrimaryEnergyMainWater:8239.208,PrimaryEnergyPumpsFans:351,PrimaryEnergySecondarySpace:2769.66,RoofArea:85.6,RoomInRoofArea:25.6092374,SecondWallIsSemiExposed:0,SolarHotWaterHeating:0,SolarSpaceHeatingSystem:0,StructureType:0,SupplSHFuel:2,SupplWHFuel:1,ThermalMassCategory:1,TotalDeliveredEnergy:38032.267,UvalueDoor:2.7169859,UValueFloor:.6,UValueRoof:.21,UValueWall:1.53,UValueWindow:2.66,VentilationMethod:1,WallArea:102.2,WHEffAdjFactor:.95,WHMainSystemEff:65,WindowArea:24.05,Year_of_Construction:4},result:""},n}return Object(s.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.isLoading,a=this.state.formData,n=this.state.result,t=this.state.costs,r=this.state.summary,o=this.state.autoFillClicked,c=this.state.resultsArray,u=this.state.costsArray,i="./grade-png/fyp-"+n+"-rating.png",m=this.state.errorMsg;return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"WEB-BASED INTELLIGENT KNOWLEDGE-BASED ENERGY RETROFIT RECOMMENDATION SYSTEM")),l.a.createElement("center",null,l.a.createElement("img",{src:"./logo/ucd_ei.png",alt:"energy institute logo",height:"80",width:"180"})),l.a.createElement(y.d,null,l.a.createElement(y.b,null,l.a.createElement(y.a,{enable:!0},"Single"),l.a.createElement(y.a,null,"Multi")),l.a.createElement("div",{className:"content"},l.a.createElement(y.c,null,l.a.createElement("b",null,"Single"),l.a.createElement(p.a,null,l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Dwelling Type"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"DwellingTypeDescr",name:"DwellingTypeDescr",value:a.DwellingTypeDescr,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"Apartment"),l.a.createElement("option",{value:"1"},"Basement-Dwelling"),l.a.createElement("option",{value:"2"},"Detached house"),l.a.createElement("option",{value:"3"},"End of terrace house"),l.a.createElement("option",{value:"4"},"Grand-floor apartment"),l.a.createElement("option",{value:"5"},"House"),l.a.createElement("option",{value:"6"},"Maisonette"),l.a.createElement("option",{value:"7"},"Mid-floor apartment"),l.a.createElement("option",{value:"8"},"Mid-terrace house"),l.a.createElement("option",{value:"9"},"Semi-detached house"),l.a.createElement("option",{value:"10"},"Top-floor apartment"))),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Year of Construction"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"Year_of_Construction",name:"Year_of_Construction",value:a.Year_of_Construction,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"2019"),l.a.createElement("option",{value:"1"},"2000"),l.a.createElement("option",{value:"2"},"1980"),l.a.createElement("option",{value:"3"},"1960"),l.a.createElement("option",{value:"4"},"1940"),l.a.createElement("option",{value:"5"},"1920"),l.a.createElement("option",{value:"6"},"1900"),l.a.createElement("option",{value:"7"},"1800"),l.a.createElement("option",{value:"8"},"1700")))),l.a.createElement(E.a,null,l.a.createElement(g.a,{block:!0,variant:"success",disabled:e,onClick:e?null:this.handleAutoFillClick},e?"Fetching Data":"Autofill"))),!1===o?null:l.a.createElement(p.a,null,l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"CO2 Main Space"),l.a.createElement(p.a.Control,{type:"number",placeholder:"CO2MainSpace",name:"CO2MainSpace",value:a.CO2MainSpace,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"CO2 Secondary Space"),l.a.createElement(p.a.Control,{type:"number",placeholder:"CO2SecondarySpace",name:"CO2SecondarySpace",value:a.CO2SecondarySpace,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"CO2 Supplementary Water"),l.a.createElement(p.a.Control,{type:"number",placeholder:"CO2SupplementaryWater",name:"CO2SupplementaryWater",value:a.CO2SupplementaryWater,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Delivered Energy Main Space"),l.a.createElement(p.a.Control,{type:"number",placeholder:"DeliveredEnergyMainSpace",name:"DeliveredEnergyMainSpace",value:a.DeliveredEnergyMainSpace,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Delivered Lighting Energy"),l.a.createElement(p.a.Control,{type:"number",placeholder:"DeliveredLightingEnergy",name:"DeliveredLightingEnergy",value:a.DeliveredLightingEnergy,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Door Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"DoorArea",name:"DoorArea",value:a.DoorArea,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Elec Immersion In Summer"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"ElecImmersionInSummer",name:"ElecImmersionInSummer",value:a.ElecImmersionInSummer,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"NO"),l.a.createElement("option",{value:"1"},"YES")))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"First Wall Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"FirstWallArea",name:"FirstWallArea",value:a.FirstWallArea,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"First Wall U-Value"),l.a.createElement(p.a.Control,{type:"number",placeholder:"FirstWallUValue",name:"FirstWallUValue",value:a.FirstWallUValue,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Floor Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"FloorArea",name:"FloorArea",value:a.FloorArea,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Ground Floor Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"GroundFloorArea",name:"GroundFloorArea",value:a.GroundFloorArea,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Ground Floor Height"),l.a.createElement(p.a.Control,{type:"number",placeholder:"GroundFloorHeight",name:"GroundFloorHeight",value:a.GroundFloorHeight,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"HS Main System Efficiency"),l.a.createElement(p.a.Control,{type:"number",placeholder:"HSMainSystemEfficiency",name:"HSMainSystemEfficiency",value:a.HSMainSystemEfficiency,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"HS Supplement Heat Fraction"),l.a.createElement(p.a.Control,{type:"number",placeholder:"HSSupplHeatFraction",name:"HSSupplHeatFraction",value:a.HSSupplHeatFraction,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"HS Supplement System Efficiency"),l.a.createElement(p.a.Control,{type:"number",placeholder:"HSSupplSystemEff",name:"HSSupplSystemEff",value:a.HSSupplSystemEff,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Insulation Thickness"),l.a.createElement(p.a.Control,{type:"number",placeholder:"InsulationThickness",name:"InsulationThickness",value:a.InsulationThickness,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Insulation Type"),l.a.createElement(p.a.Control,{type:"number",placeholder:"InsulationType",name:"InsulationType",value:a.InsulationType,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Living Area Percent"),l.a.createElement(p.a.Control,{type:"number",placeholder:"LivingAreaPercent",name:"LivingAreaPercent",value:a.LivingAreaPercent,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Low Energy Lighting Percent"),l.a.createElement(p.a.Control,{type:"number",placeholder:"LowEnergyLightingPercent",name:"LowEnergyLightingPercent",value:a.LowEnergyLightingPercent,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Main Space Heating Fuel"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"MainSpaceHeatingFuel",name:"MainSpaceHeatingFuel",value:a.MainSpaceHeatingFuel,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"Anthracite"),l.a.createElement("option",{value:"1"},"Biodiesel from renewable source"),l.a.createElement("option",{value:"2"},"Bioethanol from renewable source"),l.a.createElement("option",{value:"3"},"Bottled LPG"),l.a.createElement("option",{value:"4"},"Bulk LPG (propane or butane)"),l.a.createElement("option",{value:"5"},"Electricity"),l.a.createElement("option",{value:"6"},"Electricity - Off-peak Night -R"),l.a.createElement("option",{value:"7"},"Heating Oil"),l.a.createElement("option",{value:"8"},"House Coal"),l.a.createElement("option",{value:"9"},"Mains Gas"),l.a.createElement("option",{value:"10"},"Manufactured Smokeless Fuel"),l.a.createElement("option",{value:"11"},"Peat Briquettes"),l.a.createElement("option",{value:"12"},"Solid Multi-fuel"),l.a.createElement("option",{value:"13"},"Wood Chips"),l.a.createElement("option",{value:"14"},"Wood Logs"),l.a.createElement("option",{value:"15"},"Wood Pellets (bulk supply)"),l.a.createElement("option",{value:"16"},"Wood Pellets(in bags)"))),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Main Water Heating Fuel"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"MainWaterHeatingFuel",name:"MainWaterHeatingFuel",value:a.MainWaterHeatingFuel,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"Anthracite"),l.a.createElement("option",{value:"1"},"Biodiesel from renewable source"),l.a.createElement("option",{value:"2"},"Bioethanol from renewable source"),l.a.createElement("option",{value:"3"},"Bottled LPG"),l.a.createElement("option",{value:"4"},"Bulk LPG (propane or butane)"),l.a.createElement("option",{value:"5"},"Electricity"),l.a.createElement("option",{value:"6"},"Electricity - Off-peak Night -R"),l.a.createElement("option",{value:"7"},"Heating Oil"),l.a.createElement("option",{value:"8"},"House Coal"),l.a.createElement("option",{value:"9"},"Mains Gas"),l.a.createElement("option",{value:"10"},"Manufactured Smokeless Fuel"),l.a.createElement("option",{value:"11"},"Peat Briquettes"),l.a.createElement("option",{value:"12"},"Sod Peat"),l.a.createElement("option",{value:"13"},"Solid Multi-fuel"),l.a.createElement("option",{value:"14"},"Wood Chips"),l.a.createElement("option",{value:"15"},"Wood Logs"),l.a.createElement("option",{value:"16"},"Wood Pellets (bulk supply)"),l.a.createElement("option",{value:"17"},"Wood Pellets(in bags)")))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"MPCDER Value"),l.a.createElement(p.a.Control,{type:"number",placeholder:"MPCDERValue",name:"MPCDERValue",value:a.MPCDERValue,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Number Of Chimneys"),l.a.createElement(p.a.Control,{type:"number",placeholder:"NoOfChimneys",name:"NoOfChimneys",value:a.NoOfChimneys,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Number Of Fans and Vents"),l.a.createElement(p.a.Control,{type:"number",placeholder:"NoOfFansAndVents",name:"NoOfFansAndVents",value:a.NoOfFansAndVents,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Number Of Open Flues"),l.a.createElement(p.a.Control,{type:"number",placeholder:"NoOfOpenFlues",name:"NoOfOpenFlues",value:a.NoOfOpenFlues,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Number of Storeys"),l.a.createElement(p.a.Control,{type:"number",placeholder:"NoStoreys",name:"NoStoreys",value:a.NoStoreys,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Percentage Draught Stripped"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PercentageDraughtStripped",name:"PercentageDraughtStripped",value:a.PercentageDraughtStripped,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Predominant Roof Type"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PredominantRoofType",name:"PredominantRoofType",value:a.PredominantRoofType,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Circuit Loss"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryCircuitLoss",name:"PrimaryCircuitLoss",value:a.PrimaryCircuitLoss,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Energy Lighting"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryEnergyLighting",name:"PrimaryEnergyLighting",value:a.PrimaryEnergyLighting,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Energy Main Space"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryEnergyMainSpace",name:"PrimaryEnergyMainSpace",value:a.PrimaryEnergyMainSpace,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Energy Main Water"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryEnergyMainWater",name:"PrimaryEnergyMainWater",value:a.PrimaryEnergyMainWater,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Energy Pumps Fans"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryEnergyPumpsFans",name:"PrimaryEnergyPumpsFans",value:a.PrimaryEnergyPumpsFans,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Primary Energy Secondary Space"),l.a.createElement(p.a.Control,{type:"number",placeholder:"PrimaryEnergySecondarySpace",name:"PrimaryEnergySecondarySpace",value:a.PrimaryEnergySecondarySpace,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Roof Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"RoofArea",name:"RoofArea",value:a.RoofArea,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Room In Roof Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"RoomInRoofArea",name:"RoomInRoofArea",value:a.RoomInRoofArea,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Second Wall Is Semi-Exposed"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"SecondWallIsSemiExposed",name:"SecondWallIsSemiExposed",value:a.SecondWallIsSemiExposed,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"NO"),l.a.createElement("option",{value:"1"},"YES"))),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Solar Hot Water Heating"),l.a.createElement(p.a.Control,{type:"number",placeholder:"SolarHotWaterHeating",name:"SolarHotWaterHeating",value:a.SolarHotWaterHeating,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Solar Space Heating System"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"SolarSpaceHeatingSystem",name:"SolarSpaceHeatingSystem",value:a.SolarSpaceHeatingSystem,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"NO"),l.a.createElement("option",{value:"1"},"YES"))),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Structure Type"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"StructureType",name:"StructureType",value:a.StructureType,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"Insulated Concrete Form"),l.a.createElement("option",{value:"1"},"Masonry"),l.a.createElement("option",{value:"2"},"Timber or Steel Frame")))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Supplement SH Fuel"),l.a.createElement(p.a.Control,{type:"number",placeholder:"SupplSHFuel",name:"SupplSHFuel",value:a.SupplSHFuel,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Supplement WH Fuel"),l.a.createElement(p.a.Control,{type:"number",placeholder:"SupplWHFuel",name:"SupplWHFuel",value:a.SupplSHFuel,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Thermal Mass Category"),l.a.createElement(p.a.Control,{type:"number",placeholder:"ThermalMassCategory",name:"ThermalMassCategory",value:a.ThermalMassCategory,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Total Delivered Energy"),l.a.createElement(p.a.Control,{type:"number",placeholder:"TotalDeliveredEnergy",name:"TotalDeliveredEnergy",value:a.TotalDeliveredEnergy,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"U-Value Door"),l.a.createElement(p.a.Control,{type:"number",placeholder:"UvalueDoor",name:"UvalueDoor",value:a.UvalueDoor,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"U-Value Floor"),l.a.createElement(p.a.Control,{type:"number",placeholder:"UValueFloor",name:"UValueFloor",value:a.UValueFloor,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"U-Value Wall"),l.a.createElement(p.a.Control,{type:"number",placeholder:"UValueWall",name:"UValueWall",value:a.UValueWall,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"U-Value Window"),l.a.createElement(p.a.Control,{type:"number",placeholder:"UValueWindow",name:"UValueWindow",value:a.UValueWindow,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Ventilation Method"),l.a.createElement(p.a.Control,{as:"select",type:"number",placeholder:"VentilationMethod",name:"VentilationMethod",value:a.VentilationMethod,onChange:this.handleChange},l.a.createElement("option",{value:"0"},"Bal. whole mech.vent heat recvr"),l.a.createElement("option",{value:"1"},"Bal. whole mech. vent no heat recvr"),l.a.createElement("option",{value:"2"},"Natural vent."),l.a.createElement("option",{value:"3"},"Pos input vent.-loft"),l.a.createElement("option",{value:"4"},"Pos input vent.-outside"),l.a.createElement("option",{value:"5"},"Whole house extract vent."))),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Wall Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"WallArea",name:"WallArea",value:a.WallArea,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"WHEff Adj Factor"),l.a.createElement(p.a.Control,{type:"number",placeholder:"WHEffAdjFactor",name:"WHEffAdjFactor",value:a.WHEffAdjFactor,onChange:this.handleChange})),l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"WH Main System Eff"),l.a.createElement(p.a.Control,{type:"number",placeholder:"WHMainSystemEff",name:"WHMainSystemEff",value:a.WHMainSystemEff,onChange:this.handleChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(p.a.Group,{as:E.a},l.a.createElement(p.a.Label,null,"Window Area"),l.a.createElement(p.a.Control,{type:"number",placeholder:"WindowArea",name:"WindowArea",value:a.WindowArea,onChange:this.handleChange}))),l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(g.a,{block:!0,variant:"success",disabled:e,onClick:e?null:this.handlePredictClick},e?"Making prediction":"Predict")),l.a.createElement(E.a,null,l.a.createElement(g.a,{block:!0,variant:"danger",disabled:e,onClick:this.handleCancelClick},"Reset prediction"))))),l.a.createElement(y.c,null,l.a.createElement("b",null,"Multi"),l.a.createElement(p.a,null,l.a.createElement(p.a.Row,null,l.a.createElement("input",{type:"file",name:"file",onChange:this.handleChange,accept:".csv"})),l.a.createElement(p.a.Row,null,l.a.createElement(E.a,null,l.a.createElement(g.a,{block:!0,variant:"success",disabled:e,onClick:this.handleFileUpload},"Upload File")),l.a.createElement(E.a,null,l.a.createElement(g.a,{block:!0,variant:"danger",disabled:e,onClick:this.handleCancelClick},"Reset prediction"))),""===m?null:l.a.createElement("div",{class:"alert alert-danger",role:"alert"}," ",m," "))),""===n?null:l.a.createElement(d.a,null,l.a.createElement(E.a,{className:"result-container"},l.a.createElement("img",{src:i,alt:"grade-png"})),l.a.createElement(E.a,null,l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("h5",null,"Package 9"),l.a.createElement("p",null,"Heating and hot water with ventilation upgradation",l.a.createElement("br",null),"Wall, roof and floor renovation ",l.a.createElement("br",null),"Window renovation ",l.a.createElement("br",null),"Solar PV and hot water installation",l.a.createElement("br",null),"Lighting upgradation",l.a.createElement("br",null)))),0===c.length?null:l.a.createElement(y.d,null,l.a.createElement(y.b,null,l.a.createElement(y.a,null,"Summary"),c.map(function(e,a){return l.a.createElement(y.a,null,a)})),l.a.createElement("div",null,l.a.createElement(y.c,null,l.a.createElement("h3",null," Number of grades  "),l.a.createElement(d.a,null," A: ",r.A),l.a.createElement(d.a,null," B: ",r.B),l.a.createElement(d.a,null," C: ",r.C),l.a.createElement(d.a,null," D: ",r.D),l.a.createElement(d.a,null," E: ",r.E),l.a.createElement(d.a,null," F: ",r.F),l.a.createElement(d.a,null," G: ",r.G)),c.map(function(e,a){return l.a.createElement(y.c,null,l.a.createElement(d.a,null,l.a.createElement(E.a,{className:"result-container"},l.a.createElement("img",{src:"./grade-png/fyp-"+e+"-rating.png",alt:"grade-png"})),l.a.createElement(E.a,null,l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:u[a]}}),l.a.createElement("h5",null,"Package 9"),l.a.createElement("p",null,"Heating and hot water with ventilation upgradation",l.a.createElement("br",null),"Wall, roof and floor renovation ",l.a.createElement("br",null),"Window renovation ",l.a.createElement("br",null),"Solar PV and hot water installation",l.a.createElement("br",null),"Lighting upgradation",l.a.createElement("br",null)))))}))))))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.869b0e2b.chunk.js.map