import { LoadingMaskType } from "../../../../constants/LoadingMaskTypeEnum";
import { LoadingMaskControlActionTypes as types } from "./types";

export interface ShowLoadingMask {
    loadingMaskType: LoadingMaskType;
    type: types.SHOW_LOADING_MASK;
}

export interface HideLoadingMask {
    loadingMaskType: LoadingMaskType;
    type: types.HIDE_LOADING_MASK;
}

export const ShowLoadingMaskCreator = (loadingMaskType: LoadingMaskType): ShowLoadingMask => ({
    loadingMaskType,
    type: types.SHOW_LOADING_MASK,
});

export const HideLoadingMaskCreator = (loadingMaskType: LoadingMaskType): HideLoadingMask => ({
    loadingMaskType,
    type: types.HIDE_LOADING_MASK,
});

export type LoadingMaskControlActions = ShowLoadingMask | HideLoadingMask;
