import React, { Component } from 'react'
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div>
                    <h1>{this.props.basketCount}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {basketCount:state.basketReducer }
}
 
export default connect(mapStateToProps)(Counter);