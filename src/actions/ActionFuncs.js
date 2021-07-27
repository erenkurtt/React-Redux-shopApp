

export const increaseBasket = (item) =>{
   
    return(dispatch) => {
        dispatch({
            type:"INCREASE_BASKET",
            payload:{inc: 1, arr: item}
        })
    }
} 
export const decreaseBasket = (item) =>{
    return(dispatch) => {
        dispatch({
            type:"DECREASE_BASKET",
            payload:{inc: 1, arr: item}
        })
    }
} 

export const increaseFav = (item) =>{
    return(dispatch) => {
        dispatch({
            type:"INCREASE_FAV",
            payload:{inc: 1, arr: item}
        })
    }
} 

export const decreaseFav = (item) =>{
    return(dispatch) => {
        dispatch({
            type:"DECREASE_FAV",
            payload:{inc: 1, arr: item}
        })
    }
} 

  /////////////////////////////////////////////////////////////
 //                     FILTER ACTIONS                      //
/////////////////////////////////////////////////////////////

export const setSearch = (input) =>{
    return(dispatch) => {
        dispatch({
            type:"SET_SEARCH",
            payload:input
        })
    }
} 

export const setPriceFrom = (input) =>{
    return(dispatch) => {
        dispatch({
            type:"SET_PRICEFROM",
            payload:input
        })
    }
} 

export const setPriceTo = (input) =>{
    return(dispatch) => {
        dispatch({
            type:"SET_PRICETO",
            payload:input
        })
    }
} 

export const setCategory = (input) =>{
    return(dispatch) => {
        dispatch({
            type:"SET_CATEGORY",
            payload:input
        })
    }
} 







// export const increaseBasket = () => ({
//     type:actionTypes.INCREASE_BASKET,
//     payload:1
// })

// export const decreaseBasket = () => ({
//     type:actionTypes.DECREASE_BASKET,
//     payload:1
// })

// export const increaseFav = () => ({
//     type:actionTypes.INCREASE_FAV,
//     payload:1
// })

// export const decreaseFav = () => ({
//     type:actionTypes.DECREASE_FAV,
//     payload:1
// })


export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}
