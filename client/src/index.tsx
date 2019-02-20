import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./pages/app";
import {Provider} from "react-redux";
import store from "./store";

declare let module: any;

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
 }