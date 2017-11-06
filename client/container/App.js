import React, {Component} from 'react'
import {connect} from 'react-redux'

import BarChart from './../components/BarChart';
import BarChartRelative from './../components/BarChartRelative';

import {getJsonParseData, getCloneData, getDeepCopyData, getLodashData, getAllData} from './../store/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    getParseData() {
        this.props.dispatch(getJsonParseData());
    }

    getCloneData() {
        this.props.dispatch(getCloneData());
    }

    getDeepCopyData() {
        this.props.dispatch(getDeepCopyData());
    }

    getLodashData() {
        this.props.dispatch(getLodashData());
    }

    getData(){
        this.props.dispatch(getAllData());
    }

    render() {
        const chartData = [];
        const chartOptions ={};
        return (
            <div>
                <div>
                    <div style={{textAlign:'center', fontSize:'1.4em'}}>Object copy time</div>
                    <button onClick={()=>{this.getData()}}>Get all data</button>
                </div>
                <div>
                    <BarChart props={this.props.state}/>
                </div>
                <button onClick={()=>{this.getParseData()}}>Relative to JSON.parse</button>
                <button onClick={()=>{this.getCloneData()}}>Relative to clone</button>
                <button onClick={()=>{this.getDeepCopyData()}}>Relative to deep copy</button>
                <button onClick={()=>{this.getLodashData()}}>Relative to lodash</button>
                <div>
                    <BarChartRelative props={this.props.state}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps)(App);

