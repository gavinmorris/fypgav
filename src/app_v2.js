import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: false,
      formData: [
        -173.421, -55.114, 205.11869, -854.293, 760.988, 2.19, 0, 0, 49.95,
       0.18, 65.97, 168.64, 2.98, 90.3, 0.1, 100.0, 53, 0, 11.0887, 100.0,
       0, 0, 19.65, 1, 1, 1, 3, 100, 1, 1, 2054.6679999999997, -939.722,
       4228.49, 2048.15, -231.428, 64.46, 52.2312, 0, 0, 60, 0, 28, 1, 0,
       4423.637, 3.0, 0.09, 0.16, 0.17, 1.2, 0, 77.54, 1.0, 90.3, 29.37,
       0
      ],
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
          isLoading: false
        });
        console.log(response.error)
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    return (
      <Container>
        <div>
          <h1 className="title">ML React App</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" 
                          type="text" 
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
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}
export default App;