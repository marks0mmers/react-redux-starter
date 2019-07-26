import { RootState } from "../../../rootReducer";

// Fill in with getters for each Loading Mask Type
export const isAnyLoadingMaskShowing = (state: RootState) => state.control.loadingMask.loadingMasks.some((value) => value);
