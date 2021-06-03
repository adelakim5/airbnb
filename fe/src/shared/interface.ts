import { Dispatch } from 'react';

export interface UsefulObject {
    [key: string]: string;
}

export interface Location {
    id: number;
    latitude: number | null;
    longitude: number | null;
    address: string;
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

export interface PeopleCount {
    adult: number;
    children: number;
    kids: number;
}

export interface ReservationContext {
    location: Location;
    checkIn: Date;
    checkOut: Date;
    fee: number[];
    people: PeopleCount;
}

export type ReservationAction =
    | { type: 'LOCATION'; id: number; latitude: number | null; longitude: number | null; address: string }
    | { type: 'CHECKIN'; year: number; month: number; day: number }
    | { type: 'CHECKOUT'; year: number; month: number; day: number }
    | { type: 'PEOPLE'; adult: number; children: number; kids: number }
    | { type: 'FEE'; fee: number[] }
    | { type: 'RESET_DATE' };

export interface SearchContext {
    locationLayer: boolean;
    checkInCalendarLayer: boolean;
    checkOutCalendarLayer: boolean;
    feeLayer: boolean;
    peopleLayer: boolean;
}

export interface SearcherContext extends SearchContext {
    locationList: Location[] | null;
    inputOfLocation: string | null;
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

export type ReservationDispatch = Dispatch<ReservationAction>;

export type SearchDispatch = Dispatch<SearchAction>;

export type SearchLayerDispatch = Dispatch<SearcherLayerStateAction>;

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

export type LayerSpecType = {
    width: number;
    top: number;
    left: number;
    height: number;
};

export type ModalLayerType = {
    children: React.ReactNode;
    options: LayerSpecType;
};

export interface AccomodationType {
    id: number;
    location_id: number;
    host_id: number;
    theme_id: number;
    latitude: number;
    longitude: number;
    name: string;
    room_and_property_type: string;
    avg_rating: number;
    rental_fee_per_night: number;
    weekly_price_factor: number;
    monthly_price_factor: number;
    description: string;
    person_capacity: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    images_fe: {
        thumbnail: string;
        detail_1: string;
        detail_2: string;
        detail_3: string;
        detail_4: string;
        detail_5: string;
    };
    images: {
        thumb: string;
        detail_1: string;
        detail_2: string;
        detail_3: string;
        detail_4: string;
        detail_5: string;
    };
    amenities: string[];
}
