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
                type: 'column'
            },
            title: {
                text: 'Time of object copy'
            },
            xAxis: {
                title: {
                    text: 'Number of properties'
                },
                categories: objectDepths
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Copy ratio'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.2f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'JSON.parse',
                data: nextProps.props.allData ? nextProps.props.allData.parse : []
            },
                {
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
        return <div id="chartId" style={{width: '50%', margin:'0 auto'}}>

        </div>
    }
}