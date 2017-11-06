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
                    text: 'Object depth'
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
        return <div id="chartIdRelative">

        </div>
    }
}