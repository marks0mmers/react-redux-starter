import { Map, Record, RecordOf } from "immutable";
import { LoadingMaskType } from "../../../../constants/LoadingMaskTypeEnum";
import { LoadingMaskControlActions } from "./actions";
import { LoadingMaskControlActionTypes as types } from "./types";

interface LoadingMaskControlStateType {
    loadingMasks: Map<LoadingMaskType, boolean>;
}

export const LoadingMaskControlState = Record<LoadingMaskControlStateType>({
    loadingMasks: Map(),
});

export type LoadingMaskControlState = RecordOf<LoadingMaskControlStateType>;

export const LoadingMaskControlReducer = (
    state = new LoadingMaskControlState(),
    action: LoadingMaskControlActions,
): LoadingMaskControlState => {
    switch (action.type) {
        case types.SHOW_LOADING_MASK:
            return state.setIn(["loadingMasks", action.loadingMaskType], true);
        case types.HIDE_LOADING_MASK:
            return state.setIn(["loadingMasks", action.loadingMaskType], false);
        default:
            return state;
    }
};
