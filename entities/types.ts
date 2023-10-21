export type updateState<T> = (_newState: T) => void;

export type IAppState = {
    isMenuOpen: boolean;
}

export type IAppStateChange = IAppState

export interface IAppContext extends IAppState {
    updateState: updateState<IAppStateChange>;
}
