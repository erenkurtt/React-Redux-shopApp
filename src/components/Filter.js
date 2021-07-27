import React from 'react'
import { Input } from 'antd';
import SearchIcon from '@material-ui/icons/Search';
import { Select } from 'antd';

import { useDispatch } from 'react-redux';
import * as actionFuncs from '../actions/ActionFuncs';
import { bindActionCreators } from 'redux';


const { Option } = Select;

const Filter = () => {

    

    const dispatch = useDispatch();

    const { setSearch, setPriceFrom, setPriceTo, setCategory } = bindActionCreators(actionFuncs, dispatch);

    function onChangeFunc(value , func){
        console.log(value);
        if( isNaN(value) && func === setPriceFrom){
            value =0; 
        }
        else if( isNaN(value) && func === setPriceTo){
            value =100000; 
        }
        setTimeout(() => {
            func(value);
        }, 400);
    }


    const divStyle = {
        border: "1px solid #ededed",
        margin: "1%",
        padding: "0.5%",
        backgroundColor: "#ededed"
    }

    return (
        <div style={divStyle}>
            <Input style={{ width: '40%', margin: "0 2%" }} size="large" placeholder="Search" prefix={<SearchIcon />}
                onChange={(e) => onChangeFunc(e.target.value , setSearch )} />

            <Input style={{ width: '15%', margin: "0 2%" }} placeholder="Price From" 
            onChange={(e) => onChangeFunc(parseFloat(e.target.value) , setPriceFrom ) } />

            <Input style={{ width: '15%', margin: "0 1%" }} placeholder="Price To" 
            onChange={(e) => onChangeFunc(parseFloat(e.target.value) , setPriceTo )} />

            <Select placeholder="Category" style={{ width: "15%", margin: "0 2%" }} onChange={setCategory} >
                <Option value="">All</Option>
                <Option value="men's clothing">men's clothing</Option>
                <Option value="jewelery">jewelery</Option>
                <Option value="electronics">electronics</Option>
                <Option value="women's clothing">women's clothing</Option>
            </Select>

        </div>
    )
}


export default Filter;
