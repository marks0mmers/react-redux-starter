import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Layout from "./views/Layout";
import { store } from "./state/store";
import history from "./state/history";
import { unregister } from "./serviceWorker";

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout />
        </ConnectedRouter>
    </Provider>
), document.getElementById("root"));

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
