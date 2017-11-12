import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.


export default class BarChartRelative extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('NEXT PROPS 2', nextProps);
        const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89/*, 144, 233, 377, 610, 987*/];
        let parseData = [];
        let cloneData = [];
        let deepCopyData = [];
        let lodashData = [];
        const props = nextProps.props.relativeTo;
        if (props && nextProps.props.allData) {
            for (let i = 0; i < props.length; i++){

            }
            parseData =  nextProps.props.allData.parse.map((parse, i) => {
                return parse / props[i]
            });
            cloneData = nextProps.props.allData.clone.map((clone, i) => {
                return clone / props[i]
            });
            deepCopyData = nextProps.props.allData.deepcopy.map((deepcopy, i) => {
                return deepcopy / props[i]
            });
            lodashData = nextProps.props.allData.lodash.map((lodash, i) => {
                return lodash / props[i]
            });
        }
        const config = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Time of object copy, ms'
            },
            xAxis: {
                title: {
                    text: 'Number of properties'
                },
                categories: objectDepths
            },
            yAxis: {
                min: 0.8,
                title: {
                    text: 'Relative time'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
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
            series: [
                {
                    name: 'JSON.parse',
                    data: parseData
                },
                {
                    name: 'clone',
                    data: cloneData
                },
                {
                    name: 'deep copy',
                    data: deepCopyData
                },
                {
                    name: 'lodash',
                    data: lodashData
                }]
        };
        ReactDOM.render(<ReactHighcharts config={config}/>, document.getElementById('chartIdRelative'));
    }

    render() {
        return <div id="chartIdRelative" style={{width: '50%', margin:'0 auto'}}>

        </div>
    }
}