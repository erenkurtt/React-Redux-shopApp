import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionFuncs} from '../actions/index';
import React, { Component }  from 'react';

function Try() {

  const state = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionFuncs, dispatch);
  
  console.log(state)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default Try;