import { AnyAction, createStore, applyMiddleware } from "redux";
import { RouterState, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { RootState, rootReducer } from "./rootReducer";
import history from "./history";
import { rootEpic } from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({});

export const store = createStore<RootState, AnyAction, {}, {router: RouterState}>(
    rootReducer(history),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            epicMiddleware,
        )
    )
);

epicMiddleware.run(rootEpic);
