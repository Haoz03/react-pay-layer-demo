import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.less";
import ReactPayLayer from "react-pay-layer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerVisibility: false,
      password: "123456"
    };
    this.showLayer = this.showLayer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.forgetClickEvent = this.forgetClickEvent.bind(this);
    this.inputEnd = this.inputEnd.bind(this);
  }
  showLayer() {
    this.setState({ layerVisibility: true });
  }
  handleClose() {
    this.setState({ layerVisibility: false });
  }
  forgetClickEvent() {
    alert("点击了忘记密码");
  }
  inputEnd(password) {
    let timer = setTimeout(() => {
      if (password === this.state.password) {
        this.payLayer.success().then(() => {});
      } else {
        this.payLayer.fail("支付密码错误");
      }
      clearTimeout(timer);
    }, 1500);
    console.log(password);
  }
  onRef = ref => {
    this.payLayer = ref;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>正确密码为：123456</p>
          <button onClick={this.showLayer}>显示支付弹窗</button>
        </header>
        {this.state.layerVisibility && (
          <ReactPayLayer
            onRef={this.onRef}
            handleClose={this.handleClose}
            forgetClickEvent={this.forgetClickEvent}
            inputEnd={this.inputEnd}
          />
        )}
      </div>
    );
  }
}

export default App;
