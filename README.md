# vue-pay-layer

移动端 React 支付密码弹窗插件

### demo 地址

[demo 演示地址](https://Haoz03.github.io/react-pay-layer/build/)

### 动态图演示

![演示动图](https://haoz03.github.io/react-pay-layer/build/demo.gif)

### 插件的安装

```
npm install react-pay-layer
```

#### 在组件中使用

```js
import ReactPayLayer from "react-pay-layer";
<ReactPayLayer
  onRef={this.onRef}
  handleClose={this.handleClose}
  forgetClickEvent={this.forgetClickEvent}
  inputEnd={this.inputEnd}
/>;
```

### API

| 参数            | 说明                   | 类型   |     默认值     |
| --------------- | :--------------------- | :----- | :------------: |
| title           | 弹框标题               | String | 请输入支付密码 |
| passwordLength  | 密码位数               | Number |       6        |
| loadingText     | 正在支付文字提示       | String |  正在支付...   |
| successText     | 支付成功文字提示       | String |    支付成功    |
| successDuration | 支付成功提示时长（ms） | Number |      2000      |

### Event

| 事件名         | 说明                   | 参数 |
| :------------- | :--------------------- | :--- |
| inputEnd       | 密码输入完的回调函数   | -    |
| close          | 点击弹窗关闭的回调函数 | -    |
| forgetPassword | 点击忘记密码得回调函数 | -    |

### inputEnd 回调参数

| 参数名 | 说明     | 类型   |
| ------ | :------- | :----- |
| result | 支付密码 | String |

### 插件内部方法

| 方法名  | 说明                                                                            | 参数                         |
| :------ | :------------------------------------------------------------------------------ | :--------------------------- |
| success | 通知插件支付结果成功，该方法返回 promise，可在.then()方法中进行成功后的回调函数 | -                            |
| fail    | 密码弹窗关闭后的回调函数                                                        | String（可传入错误提示内容） |

#### 用法示例：

支付结果成功：

```javascript
this.payLayer.success().then(res => {
  console.log("支付成功");
});
```

支付结果失败：

```javascript
this.payLayer.fail("可以自定义错误提示，默认：支付密码错误");
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
