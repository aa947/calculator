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
    marginTop: 10,
    marginRight: 10,
    // margin:'1% 1%',
    boxShadow: "3px 3px 5px black"
}
const container_style = {
    width: '100%'
}

const widget_style = {
    display: 'inline'
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "on",
            bank : "one",
            style : inactiveStyle

        };

      
    }

    componentDidMount() {
        document.addEventListener("keydown",this.play);
          }
    //componentWillUnmount() {
    //document.removeEventListener("keydown",this.handleKeyPress);
    //this.setState({style: inactiveStyle});
      //  }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

   

    render() {
        return (
            <div style={container_style}>
                <h1> Calculator </h1>
                <div className="container" >
                 {/* Zero row */}
                 <div className="row">
                {/* <div className="col-md-2" ></div> */}
                        <div id="show" className="col-md-4" style={inactiveStyle}  >  hi </div>
                   </div>
                   
                   {/* first row */}
                    <div className="row">
                        <div className="col-md-1" style={this.state.style}><button className="bttn" id="1" onClick={this.play}>1</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="2" onClick={this.play}>2</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="3" onClick={this.play}>3</button></div>
                        <div className="col-md-1"></div>    
                    </div>

                    {/* second row */}
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="4" onClick={this.play}>4</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="5" onClick={this.play}>5</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="6" onClick={this.play}>6</button></div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="7" onClick={this.play}>7</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="8" onClick={this.play}>8</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button className="bttn" id="9" onClick={this.play}>9</button></div>
                    </div>   
                </div>
            </div>
        );
    }
};



export default Calc;