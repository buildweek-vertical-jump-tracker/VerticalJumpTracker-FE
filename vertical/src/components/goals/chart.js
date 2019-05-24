import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './goals.css';

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

    // addVertical = (event) => {
    //     event.preventDefault();
    //      Axios 
    //       .post(`https://awsafran-vertical.herokuapp.com/measurements/${userid}`)
    //       .then(res => {
    //         //console.log(res);
    //          this.setState({
             
    //           });
    //       })
    //       .catch((err) => console.log(err)); 
          
          
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
            </div>
        )
    }
}