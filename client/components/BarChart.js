import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

const config = {
    chart: {
        renderTo: 'container',
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
};

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
    }
componentDidMount(){
    ReactDOM.render(<ReactHighcharts config = {config} />, document.getElementById('chartId'));
}
    render() {
    return <div id="chartId">

    </div>}
}