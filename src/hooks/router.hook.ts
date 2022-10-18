import {useLocation, Location} from "react-router-dom";

// type useLocationType = ReturnType<typeof useLocation>;
//
// interface IState<T> extends useLocationType {
//     stata: T
// }

interface IState<T> extends Location {
    state: T
}

export const useAppLocations = <State>(): IState<State> => useLocation();