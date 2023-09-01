import {createStore} from 'redux'
const intialstate = {count:10}
const countReducer = (state=intialstate,action)=>{
if(action.type==="increament"){
    return {
        count:state.count+1
    }

}
if(action.type==="decrement"){
    return {
        count:state.count-1
    }

}
if(action.type==="incre5"){
    return {
        count:state.count+action.value
    }

}
return state
}

const store = createStore(countReducer)
export default store ;