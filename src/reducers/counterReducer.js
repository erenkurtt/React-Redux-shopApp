import * as actionTypes from "../actions/ActionTypes";

export const basketReducer = (state = { basketCount: 0, favCount: 0, basketItems: [], favItems: [] }, action) => {

    switch (action.type) {
        case actionTypes.INCREASE_BASKET:

            return {
                basketCount: state.basketCount + action.payload.inc,
                favCount: state.favCount,
                basketItems: state.basketItems.concat(action.payload.arr),
                favItems: state.favItems
            };

        case actionTypes.DECREASE_BASKET:

            return {
                basketCount: state.basketCount -= action.payload.inc,
                favCount: state.favCount,
                basketItems: state.basketItems.filter(element => element !== action.payload.arr),
                favItems: state.favItems
            };

        case actionTypes.INCREASE_FAV:


            return {
                basketCount: state.basketCount,
                favCount: state.favCount += action.payload.inc,
                basketItems: state.basketItems,
                favItems: state.favItems.concat(action.payload.arr)
            };

        case actionTypes.DECREASE_FAV:

            return {
                basketCount: state.basketCount,
                favCount: state.favCount -= action.payload.inc,
                basketItems: state.basketItems,
                favItems: state.favItems.filter(element => element !== action.payload.arr)
            };

        default:
            return state;
    }
};

export const searchReducer = (state = { search: "", priceFrom: 0, priceTo: 1000000, category: "" }, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH:
            return { search: action.payload, 
                priceFrom: state.priceFrom, 
                priceTo: state.priceTo, 
                category: state.category }

        case actionTypes.SET_PRICEFROM:
            return { search: state.search, 
                priceFrom: action.payload, 
                priceTo: state.priceTo, 
                category: state.category }

        case actionTypes.SET_PRICETO:
            return { search: state.search, 
                priceFrom: state.priceFrom, 
                priceTo: action.payload, 
                category: state.category }

        case actionTypes.SET_CATEGORY:
            return { search: state.search, 
                priceFrom: state.priceFrom, 
                priceTo: state.priceTo, 
                category: action.payload }

        default:
            return state
    }
}

const initialState = 0;

export const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload
        default:
            return state
    }
}

// export const favReducer = (state = { favCount: 1}, action ) => {
//     let newState;
//     switch (action.type) {
//         case actionTypes.INCREASE_FAV:
//             return (newState = state.favCount + action.payload);

//         case actionTypes.DECREASE_FAV:
//             return (newState = state.favCount + action.payload);

//         default:
//             return state.favCount;
//     }
// };


   // function multiAction(type){

    //     if(type === actionTypes.INCREASE_BASKET){
    //         tempBasket.push(action.payload.arr);
    //         let tempCount = state.basketCount + action.payload.inc;
    //         state = {
    //             basketCount: tempCount, favCount: state.favCount,
    //             basketItems: tempBasket, favItems: state.favItems
    //         };
    //     }
    //     else if(type === actionTypes.DECREASE_BASKET){
    //         tempBasket.splice(tempBasket.indexOf(action.payload.arr), 1)
    //         let tempCount = state.basketCount - action.payload.inc;
    //         state =  {
    //             basketCount: tempCount, favCount: state.favCount,
    //             basketItems: tempBasket, favItems: state.favItems
    //         };
    //     }
    //     else if(type === actionTypes.INCREASE_FAV){
    //         tempFav.push(action.payload.arr);
    //         let tempCount = state.favCount + action.payload.inc;
    //         state =  {
    //             basketCount: state.basketCount, favCount: tempCount,
    //             basketItems: state.basketItems, favItems: tempFav
    //         };
    //     }
    //     else{
    //         tempFav.splice(tempFav.indexOf(action.payload.arr), 1);
    //         let tempCount = state.favCount - action.payload.inc;
    //         state =  {
    //             basketCount: state.basketCount, favCount: tempCount,
    //             basketItems: state.basketItems, favItems: tempFav
    //         };
    //     }
    // }


      // if(action.type === actionTypes.INCREASE_BASKET ){
    //     multiAction(actionTypes.INCREASE_BASKET);
    // }
    // else if(action.type === actionTypes.DECREASE_BASKET ){
    //     multiAction(actionTypes.DECREASE_BASKET);
    // }
    // else if(action.type === actionTypes.INCREASE_FAV){
    //     multiAction(actionTypes.INCREASE_FAV);
    // }
    // else if(action.type === actionTypes.DECREASE_FAV){
    //     multiAction(actionTypes.INCREASE_BASKET);
    // }
    // else{

    // }

    // console.log(tempBasket.push(action.payload.arr));
    // console.log(tempFav.push(action.payload.arr));
    // console.log(tempFav.splice(tempFav.indexOf(action.payload.arr), 1));
    // console.log(tempBasket.splice(tempBasket.indexOf(action.payload.arr), 1));

    //  state.tempFav.splice(tempFav.indexOf(action.payload.arr), 1)
    //  state.basketItems.splice(tempBasket.indexOf(action.payload.arr), 1)
    //  state.basketItems.push(action.payload.arr)
    //  state.favItems.push(action.payload.arr)