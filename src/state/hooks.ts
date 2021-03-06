import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "./rootReducer";

export const useMapDispatch = <T extends ActionCreatorsMapObject>(mapDispatch: T, deps: unknown[] = []): T => {
    const dispatch = useDispatch();
    return useMemo(
        () => bindActionCreators(mapDispatch, dispatch),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch, mapDispatch, ...deps],
    );
};

export const useMapState: TypedUseSelectorHook<RootState> = useSelector;
