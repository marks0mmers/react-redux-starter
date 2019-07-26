import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { LoadingMaskControlReducer, LoadingMaskControlState } from "./ducks/control/loadingMask/reducers";

export interface RootState {
    control: {
        loadingMask: LoadingMaskControlState;
    };
    router: RouterState;
}

export const rootReducer = (history: History) => combineReducers({
    control: combineReducers({
        loadingMask: LoadingMaskControlReducer,
    }),
    router: connectRouter(history),
});
