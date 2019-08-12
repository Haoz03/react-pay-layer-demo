import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import imgClose from "./img/close.png";
import imgPoint from "./img/point.png";
import imgBackspace from "./img/backspace.png";
import imgSuccess from "./img/success.png";
import "./index.less";

class ReactPayLayer extends Component {
  constructor(props) {
    super(props);
    const inputArr = [];
    for (let i = 0; i < props.passwordLength; i++) {
      inputArr.push(i);
    }
    this.state = {
      inputArr,
      password: "",
      payStatus: "",
      failDialogVisibility: false,
      failTip: "支付密码错误"
    };
    this.resetInput = this.resetInput.bind(this);
    this.backspaceClickEvent = this.backspaceClickEvent.bind(this);
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  keyClickEvent(key) {
    if (this.state.password.length >= this.props.passwordLength) {
      return;
    }
    const password = `${this.state.password}${key}`;
    this.setState({ password });
    if (password.length === this.props.passwordLength) {
      const payStatus = "PAYING";
      this.setState({ payStatus });
      this.props.inputEnd(password);
    }
  }
  /**点击回删 */
  backspaceClickEvent() {
    if (this.state.password.length === 0) {
      return;
    }
    const password = this.state.password.slice(
      0,
      this.state.password.length - 1
    );
    this.setState({ password });
  }
  /**重置输入框 */
  resetInput() {
    this.setState({ password: "", failDialogVisibility: false });
  }
  /**重置组件 */
  resetComponent() {
    if (this.state.payStatus === "PAYING") return;
    this.setState({ password: "", payStatus: "" });
  }
  /**支付成功方法 */
  success() {
    return new Promise(resolve => {
      this.setState({ payStatus: "SUCCESS" });
      let timer = setTimeout(() => {
        this.resetComponent();
        this.props.handleClose();
        resolve();
        clearTimeout(timer);
      }, this.props.successDuration);
    });
  }
  /**支付失败方法 */
  fail(tip) {
    let failTip = this.setState.failTip;
    if (tip && typeof tip === "string") {
      failTip = tip;
    }
    this.setState({
      failTip: failTip,
      payStatus: "",
      failDialogVisibility: true
    });
  }
  render() {
    const {
      title,
      handleClose,
      forgetClickEvent,
      loadingText,
      successText
    } = this.props;
    return (
      <div className="layer-container">
        <div className="inner">
          <div className="title both-center">{title}</div>
          <div className="layer-close-btn both-center" onClick={handleClose}>
            <img className="img-close" src={imgClose} alt="" />
          </div>
          <ul className="password-ul">
            {this.state.inputArr.map((item, index) => {
              return (
                <li className="password-li both-center" key={index}>
                  {this.state.password.length > index && (
                    <span>
                      <img className="img-point" src={imgPoint} alt="" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="both-center forget-btn-row">
            <span className="forget-btn" onClick={forgetClickEvent}>
              忘记密码？
            </span>
          </div>
          <div className="keyboard-box">
            <ul className="key-ul">
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 1)}
              >
                1
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 2)}
              >
                2
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 3)}
              >
                3
              </li>
            </ul>
            <ul className="key-ul">
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 4)}
              >
                4
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 5)}
              >
                5
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 6)}
              >
                6
              </li>
            </ul>
            <ul className="key-ul">
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 7)}
              >
                7
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 8)}
              >
                8
              </li>
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 9)}
              >
                9
              </li>
            </ul>
            <ul className="key-ul">
              <li className="key-li both-center gray" />
              <li
                className="key-li both-center"
                onClick={this.keyClickEvent.bind(this, 0)}
              >
                0
              </li>
              <li
                className="key-li both-center gray"
                onClick={this.backspaceClickEvent}
              >
                <img className="icon-backspace" src={imgBackspace} alt="" />
              </li>
            </ul>
          </div>
          {!!this.state.payStatus && (
            <div className="loading-wrap">
              <div className="loading">
                {this.state.payStatus === "PAYING" && (
                  <Fragment>
                    <div className="loading-icon">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <p>{loadingText}</p>
                  </Fragment>
                )}
                {this.state.payStatus === "SUCCESS" && (
                  <Fragment>
                    <img className="success-icon" src={imgSuccess} alt="" />
                    <p>{successText}</p>
                  </Fragment>
                )}
              </div>
            </div>
          )}

          {this.state.failDialogVisibility && (
            <div className="pay-fail">
              <div className="pay-fail-lay">
                <h3 className="fail-title">{this.state.failTip}</h3>
                <div className="btns">
                  <div onClick={this.resetInput}>重新输入</div>
                  <div onClick={forgetClickEvent}>忘记密码</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ReactPayLayer.defaultProps = {
  title: "请输入支付密码",
  passwordLength: 6,
  loadingText: "正在支付...",
  successText: "支付成功",
  successDuration: 2000
};

ReactPayLayer.propTypes = {
  title: PropTypes.string,
  passwordLength: PropTypes.number,
  loadingText: PropTypes.string,
  successText: PropTypes.string,
  successDuration: PropTypes.number
};

export default ReactPayLayer;
