import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.less";
// import ReactPayLayer from "react-pay-layer";
import ReactPayLayer from "./lib/react-pay-layer";

const PASSRORD = "123456";
const App = props => {
  const payLayer = useRef(null);
  const [layerVisibility, setLayerVisibility] = useState(false);
  const showLayer = () => {
    setLayerVisibility(true);
  };
  const hideLayer = () => {
    setLayerVisibility(false);
  };
  const forgetClickEvent = () => {
    alert("点击了忘记密码");
  };
  const inputEnd = password => {
    let timer = setTimeout(() => {
      if (password === PASSRORD) {
        payLayer.current.success().then(() => {});
      } else {
        payLayer.current.fail("支付密码错误");
      }
      clearTimeout(timer);
    }, 1500);
    console.log(password);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>正确密码为：123456</p>
        <button onClick={showLayer}>显示支付弹窗</button>
      </header>
      {layerVisibility && (
        <ReactPayLayer
          ref={payLayer}
          handleClose={hideLayer}
          forgetClickEvent={forgetClickEvent}
          inputEnd={inputEnd}
        />
      )}
    </div>
  );
};
export default App;
