import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import store from "./configureStore";
declare let module: any
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
 }