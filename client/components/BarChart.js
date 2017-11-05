import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.


class BarChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
        const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34/*, 55, 89, 144, 233, 377, 610, 987*/];

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
                data: this.props.parseData
            }, {
                name: 'clone',
                data: this.props.cloneData
            },
                {
                    name: 'deep copy',
                    data: this.props.deepCopyData
                },
                {
                    name: 'lodash',
                    data: this.props.lodashData
                }]
        };
        console.log('PROPERTIES', this.props);
        ReactDOM.render(<ReactHighcharts config={config}/>, document.getElementById('chartId'));
    }

    render() {
        return <div id="chartId">

        </div>
    }
}


const mapStateToProps = state => {
    return {
        parseData: state.parseData ? state.parseData : [],
        cloneData: state.cloneData ? state.cloneData : [],
        deepCopyData: state.deepCopyData ? state.deepCopyData : [],
        lodashData: state.lodashData ? state.lodashData : []
    }
};

export default connect(mapStateToProps)(BarChart);
