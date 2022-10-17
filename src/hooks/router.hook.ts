import {useLocation} from "react-router-dom";

// type useLocationType = ReturnType<typeof useLocation>;
//
// interface IState<T> extends useLocationType {
//     stata: T
// }

interface IState<T> {
    state: T
}

type LocationType<S> = ReturnType<typeof useLocation> & IState<S>

export const useAppLocations = <State>(): LocationType<State> => useLocation();