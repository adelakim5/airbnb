import { Dispatch, MutableRefObject } from 'react';

export interface UsefulObject {
    [key: string]: string;
}

export interface Location {
    id: number;
    city: string;
}

export interface Date {
    year: number;
    month: number;
    day: number;
}

export interface People {
    guest: number;
    kids: number;
}

export interface ReservationContext {
    location: Location;
    checkIn: Date;
    checkOut: Date;
    fee: number[] | number;
    people: People;
}

export type ResercationAction =
    | { type: 'LOCATION'; id: number; city: string }
    | { type: 'CHECKIN'; year: number; month: number; day: number }
    | { type: 'CHECKOUT'; year: number; month: number; day: number }
    | { type: 'PEOPLE'; guest: number; kids: number }
    | { type: 'FEE'; fee: number[] | number };

export interface SearcherContext {
    locationList: Location[] | null;
    inputOfLocation: string | null;
    locationLayer: boolean;
    checkInCalendarLayer: boolean;
    checkOutCalendarLayer: boolean;
    feeLayer: boolean;
    peopleLayer: boolean;
}

export type SearchAction =
    | { type: 'SHOW_LOCATION_LIST'; list: Location[] | null }
    | { type: 'SHOW_LOCATION_LAYER'; state: boolean }
    | { type: 'SHOW_INPUTOFLOCATION'; value: string }
    | { type: 'SHOW_CHECKIN_CALENDAR_LAYER'; state: boolean }
    | { type: 'SHOW_CHECKOUT_CALENDAR_LAYER'; state: boolean }
    | { type: 'SHOW_FEE_LAYER'; state: boolean }
    | { type: 'SHOW_PEOPLE_LAYER'; state: boolean }
    | { type: 'CLOSE_ALL' };

export type SearcherLayerStateAction =
    | { type: 'SELECT_LOCATION_TAB' }
    | { type: 'SELECT_CHECKIN_TAB' }
    | { type: 'SELECT_CHECKOUT_TAB' }
    | { type: 'SELECT_FEE_TAB' }
    | { type: 'SELECT_PEOPLE_TAB' };

export type ReservationDispatch = Dispatch<ResercationAction>;

export type SearchDispatch = Dispatch<SearchAction>;

export type LocationList = Location[];

export type Td = {
    classNames: string[] | null;
    dataSets: string[] | null;
    countDay: number;
};

export type CalendarType = {
    isCheckIn: boolean;
};

export type DateType = {
    possible: boolean;
    typeOfDate: string;
};
