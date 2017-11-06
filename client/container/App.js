import React, {Component} from 'react'
import {connect} from 'react-redux'

import BarChart from './../components/BarChart';

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
        console.log(this.props.state);
        const chartData = [];
        const chartOptions ={};
        return (
            <div>
                <div>
                    <div style={{textAlign:'center', fontSize:'1.4em'}}>Object copy time</div>
                    <button onClick={()=>{this.getData()}}>Get all data</button>
                    <button onClick={()=>{this.getParseData()}}>Get parse data</button>
                    <button onClick={()=>{this.getCloneData()}}>Get clone data</button>
                    <button onClick={()=>{this.getDeepCopyData()}}>Get deep copy data</button>
                    <button onClick={()=>{this.getLodashData()}}>Get lodash data</button>
                </div>
                <div>
                    <BarChart props={this.props.state}/>
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

