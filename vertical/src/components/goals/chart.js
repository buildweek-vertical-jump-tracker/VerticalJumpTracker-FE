import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './goals.css';
import axiosWithAuth from '../axiosWithAuth';

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: this.props.measurements.map(measurement => measurement.creationDate),
                datasets: [
                    {
                        label:"New Vertical",
                        data: this.props.measurements.map(measurement => measurement.vertical)
                    } 
                   
                ]
            }
        }
    }

     addVertical = (event) => {
         event.preventDefault();
          axiosWithAuth()
           .post(`https://awsafran-vertical.herokuapp.com/measurements/${this.props.userId}`, {"vertical":  parseInt(this.state.measurement)})
           .then(res => {
             console.log(res);
             console.log('this is measurement', this.state.measurement)
              this.setState({
                data: {
                    labels: res.data.map(measurement => measurement.creationDate),
                    datasets: [
                        {
                            label:"New Vertical",
                            data: res.data.map(measurement => measurement.vertical)
                        } 
                       
                    ]
                }
               });
           })
           .catch((err) => console.log(err));
        } 
          
        handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value });
          };
          
    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 600, 400);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, 'rgba(133, 122, 144, 0.5)');
        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = ['rgba(255, 0, 255, 0.75)', 'rgba(0, 255, 0, 0.75)'];
            data.datasets.map((set, i) => {
            set.backgroundColor = this.setGradientColor(canvas, colors[i]);
            set.borderColor = 'white';
            set.borderWidth = 2;
            })
        }
        return data;
        }
    

    render() {
        //console.log(this.state);
        return (
            <div >
                <p className='chart'> ~This is what you have achieved~ </p>
                <Line 
                    options={{
                        responsive: true
                    }}
                    data= {this.getChartData}
                />
                <form onSubmit={(event) => this.addVertical(event)}>
                <input
                    onChange={this.handleInputChange}
                    placeholder="measurement"
                    value={this.state.measurement}
                    name="measurement"
                />
                <button className='chartButton' type="submit">Add New Vertical</button>
                </form>
            </div>
        )
    }
}