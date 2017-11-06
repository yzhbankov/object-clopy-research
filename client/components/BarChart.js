import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.


export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89/*, 144, 233, 377, 610, 987*/];

        const config = {
            chart: {
                renderTo: 'container',
                type: 'bar'
            },
            title: {
                text: 'Objects deep copy velocity'
            },
            xAxis: {
                categories: objectDepths
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'JSON.parse',
                data: nextProps.props.allData ? nextProps.props.allData.parse : []
            }, {
                name: 'clone',
                data: nextProps.props.allData ? nextProps.props.allData.clone : []
            },
                {
                    name: 'deep copy',
                    data: nextProps.props.allData ? nextProps.props.allData.deepcopy : []
                },
                {
                    name: 'lodash',
                    data: nextProps.props.allData ? nextProps.props.allData.lodash : []
                }]
        };
        ReactDOM.render(<ReactHighcharts config={config}/>, document.getElementById('chartId'));
    }

    render() {
        return <div id="chartId">

        </div>
    }
}