/* eslint-disable no-eval */
import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
}

const inactiveStyle = {
    backgroundColor: 'grey',
   // marginTop: 10,
   // marginRight: 10,
    // margin:'1% 1%',
    boxShadow: "3px 3px 5px black",
    border: '2px solid black'
}
const container_style = {
    //position: 'absolute',
    width: '50%',
    marginLeft:'40%'
    
}

const equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 80,
    bottom: '29.3%',
    left: '57.5%',
    width:'4.15%'
  };

const widget_style = {
    display: 'inline'
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // first: "",
           // operation : "",
           // second :'',
            input : '0',
            result : 0

        };

    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);

      
    }

    componentDidMount() {
       // document.addEventListener("keydown",this.play);
          }
    //componentWillUnmount() {
    //document.removeEventListener("keydown",this.handleKeyPress);
    //this.setState({style: inactiveStyle});
      //  }

    // handleChange(event) {
    //     this.setState({
    //         input: event.target.value
    //     });
    // }

    handleClick (event){
        //console.log(event);
        let input = this.state.input;
        let tar = event.target;
        let val = tar.value;
        //console.log(val);
       // let next_input = input+ val
       this.setState({ input : (input+ val) });
        console.log(input)
        if (val === '='){
       // let output = eval(input.substring(1, input.length));
       // console.log(input.substring(1, input.length-1));
        //console.log(output)
       // eslint-disable-next-line no-eval
     return  this.setState({
               result: eval(input.substring(1, input.length)),
               input: input.substring(1, input.length)
    });

    }
    }



    clear(){
        return(this.setState({
            input: '0',
            result: 0
        }))
    }
   

    render() {
        return (
            <div style={container_style}>
                <h1 style={{marginLeft:'-70%'}}> Calculator </h1>
                <div className="container clc" >
                 {/* Zero row */}
                 <div className="row">
                {/* <div className="col-md-2" ></div> */}
                        <div id="show" className="col-md-4 col-4" style={inactiveStyle ,{backgroundColor:'black'}}  >  {this.state.input} </div>
                   </div>

                   <div className="row">
                {/* <div className="col-md-2" ></div> */}
                        <div id="show" className="col-md-4 col-4" style={inactiveStyle ,{backgroundColor:'black'}}  >  {this.state.result} </div>
                   </div>
                   
                   {/* first row */}
                    <div className="row">
                       
                        <button className=" col-md-2 col-2 bttn" style={{backgroundColor:'red'}} id="ac" value="" onClick={this.clear}>AC</button>
                        {/* <button className=" col-md-1 col-1 bttn" id="1" onClick={this.play}>1</button> */}
                        <button className=" col-md-1 col-1 bttn" id="/" value="/" onClick={this.handleClick}>/</button>
                        <button className=" col-md-1 col-1 bttn" id="*" value="*" onClick={this.handleClick}>x</button>
                           
                    </div>

                    {/* second row */}
                    <div className="row">
                    <button className=" col-md-1 col-1 bttn" id="7" value="7" onClick={this.handleClick}>7</button>
                        <button className=" col-md-1 col-1 bttn" id="8" value="8" onClick={this.handleClick}>8</button>
                        <button className=" col-md-1 col-1 bttn" id="9" value="9" onClick={this.handleClick}>9</button>
                        <button className=" col-md-1 col-1 bttn" id="-" value="-" onClick={this.handleClick}>-</button>
                    
                    </div>

                    <div className="row">
                    <button className=" col-md-1 col-1 bttn" id="4" value="4" onClick={this.handleClick}>4</button>
                        <button className=" col-md-1 col-1 bttn" id="5" value="5" onClick={this.handleClick}>5</button>
                        <button className=" col-md-1 col-1 bttn" id="6" value="6" onClick={this.handleClick}>6</button>
                        <button className=" col-md-1 col-1 bttn" id="+" value="+" onClick={this.handleClick}>+</button>
                           
                    </div>   
                    
                    <div className="row">
                    <button className=" col-md-1 col-1 bttn" id="1" value="1" onClick={this.handleClick}>1</button>
                        <button className=" col-md-1 col-1 bttn" id="2" value="2" onClick={this.handleClick}>2</button>
                        <button className=" col-md-1 col-1 bttn" id="3" value="3" onClick={this.handleClick}>3</button>
                        <button className=" col-md-1 col-1 bttn" id="=" style={equalsStyle} value="=" onClick={this.handleClick}>=</button>
                           
                    </div>   

                    <div className="row">
                    <button className=" col-md-2 col-2 bttn" id='0' value="0" onClick={this.handleClick}>0</button>
                        {/* <button className=" col-md-1 col-1 bttn" id="1" onClick={this.play}>1</button> */}
                        <button className=" col-md-1 col-1 bttn" id="." value="." onClick={this.handleClick}>.</button>
                        {/* <button className=" col-md-1 col-1 bttn" id="1" onClick={this.play}>1</button> */}
                           
                    </div>   
                </div>
                <br />
                <h6 style={{marginLeft:'-70%'}}> **Note: press AC between every two separate operations, don't use extra zeros  </h6>
            </div>
        );
    }
};



export default Calc;