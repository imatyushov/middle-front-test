import {IUser} from "../../../models /IUser";
import {IEvent} from "../../../models /IEvent";


export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActions {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestsAction {
    type: EventActions.SET_GUESTS,
    payload: IUser[]
}

export interface SetEventsAction {
    type: EventActions.SET_EVENTS,
    payload: IEvent[]
}

export type EventAction =
    SetGuestsAction |
    SetEventsAction
