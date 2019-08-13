import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  Fragment
} from "react";
import PropTypes from "prop-types";
import imgClose from "./img/close.png";
import imgPoint from "./img/point.png";
import imgBackspace from "./img/backspace.png";
import imgSuccess from "./img/success.png";
import "./index.less";

function ReactPayLayer(props, ref) {
  const inputArr = [];
  for (let i = 0; i < props.passwordLength; i++) {
    inputArr.push(i);
  }
  const [password, setPassword] = useState("");
  const [payStatus, setPayStatus] = useState("");
  const [failDialogVisibility, setFailDialogVisibility] = useState(false);
  const [failTip, setFailTip] = useState("支付密码错误");
  function keyClickEvent(key) {
    if (password.length >= props.passwordLength) {
      return;
    }
    const newPassword = `${password}${key}`;
    setPassword(newPassword);
    if (newPassword.length === props.passwordLength) {
      setPayStatus("PAYING");
      props.inputEnd(newPassword);
    }
  }
  /**点击回删 */
  function backspaceClickEvent() {
    if (password.length === 0) {
      return;
    }
    const newPassword = password.slice(0, password.length - 1);
    setPassword(newPassword);
  }
  /**重置输入框 */
  function resetInput() {
    setPassword("");
    setFailDialogVisibility(false);
  }
  /**重置组件 */
  function resetComponent() {
    if (payStatus === "PAYING") return;
    setPassword("");
    setPayStatus("");
  }
  useImperativeHandle(ref, () => ({
    success: () => {
      return new Promise(resolve => {
        setPayStatus("SUCCESS");
        let timer = setTimeout(() => {
          resetComponent();
          props.handleClose();
          resolve();
          clearTimeout(timer);
        }, props.successDuration);
      });
    },
    fail: tip => {
      tip && typeof tip === "string" && setFailTip(tip);
      setPayStatus("");
      setFailDialogVisibility(true);
    }
  }));

  const {
    title,
    handleClose,
    forgetClickEvent,
    loadingText,
    successText
  } = props;

  return (
    <div className="layer-container">
      <div className="inner">
        <div className="title both-center">{title}</div>
        <div className="layer-close-btn both-center" onClick={handleClose}>
          <img className="img-close" src={imgClose} alt="" />
        </div>
        <ul className="password-ul">
          {inputArr.map((item, index) => {
            return (
              <li className="password-li both-center" key={index}>
                {password.length > index && (
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
              onClick={keyClickEvent.bind(this, 1)}
            >
              1
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 2)}
            >
              2
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 3)}
            >
              3
            </li>
          </ul>
          <ul className="key-ul">
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 4)}
            >
              4
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 5)}
            >
              5
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 6)}
            >
              6
            </li>
          </ul>
          <ul className="key-ul">
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 7)}
            >
              7
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 8)}
            >
              8
            </li>
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 9)}
            >
              9
            </li>
          </ul>
          <ul className="key-ul">
            <li className="key-li both-center gray" />
            <li
              className="key-li both-center"
              onClick={keyClickEvent.bind(this, 0)}
            >
              0
            </li>
            <li
              className="key-li both-center gray"
              onClick={backspaceClickEvent}
            >
              <img className="icon-backspace" src={imgBackspace} alt="" />
            </li>
          </ul>
        </div>
        {!!payStatus && (
          <div className="loading-wrap">
            <div className="loading">
              {payStatus === "PAYING" && (
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
              {payStatus === "SUCCESS" && (
                <Fragment>
                  <img className="success-icon" src={imgSuccess} alt="" />
                  <p>{successText}</p>
                </Fragment>
              )}
            </div>
          </div>
        )}

        {failDialogVisibility && (
          <div className="pay-fail">
            <div className="pay-fail-lay">
              <h3 className="fail-title">{failTip}</h3>
              <div className="btns">
                <div onClick={resetInput}>重新输入</div>
                <div onClick={forgetClickEvent}>忘记密码</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
ReactPayLayer = forwardRef(ReactPayLayer);

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
