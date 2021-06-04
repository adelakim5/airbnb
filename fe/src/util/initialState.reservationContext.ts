export const initialState = {
    location: {
        id: 0,
        address: '',
        latitude: null,
        longitude: null,
    },
    checkIn: {
        year: 0,
        month: 0,
        day: 0,
    },
    checkOut: {
        year: 0,
        month: 0,
        day: 0,
    },
    fee: [1, 100],
    people: {
        adult: 0,
        children: 0,
        kids: 0,
    },
};
