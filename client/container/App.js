import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getJsonParseData} from './../store/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    getParseData() {
        this.props.dispatch(getJsonParseData());
        console.log(this.props.state);
    }

    render() {
        console.log(this.props.state);

        return (
            <div>
                <div style={{textAlign:'center', fontSize:'1.4em'}}>Object copy time</div>
                <button onClick={()=>{this.getParseData()}}>Get parse data</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        state: state
    }
};

export default connect(mapStateToProps)(App);

