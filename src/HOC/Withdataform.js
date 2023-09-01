import React from "react";
const EMP =[
    {"id":1,"name":"emp_1",age:34},
    {"id":2,"name":"emp_2",age:35},
    {"id":3,"name":"emp_3",age:36},
    {"id":4,"name":"emp_4",age:37},
    {"id":5,"name":"emp_5",age:38},
    {"id":6,"name":"emp_6",age:39},
    {"id":7,"name":"emp_7",age:40},
    {"id":8,"name":"emp_8",age:41},
    {"id":9,"name":"emp_9",age:21},
    {"id":10,"name":"emp_10",age:22}
    ]
const Withdataform = (Wrappedcomponent)=>{
    return class extends React.Component{
        state={
            empdata:EMP.slice(0,5),
        }
        loaddata = ()=>{
            this.setState({empdata:EMP})
        }
        render(){
            return <Wrappedcomponent 
            {...this.props}
            emps = {this.state.empdata}
            loadmore={this.loaddata}
            />
        }

    }
}
export default Withdataform