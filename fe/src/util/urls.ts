import { Date, ReservationContext } from 'shared/interface';

const isDateNull = (date: Date) => {
    const { year, month, day } = date;
    return year === 0 && month === 0 && day === 0;
};

export const addZero = (value: number, type: string) => {
    switch (type) {
        case 'date':
            return value < 10 ? `0${value}` : `${value}`;
        case 'fee':
            return value > 0 ? `${value}0000` : '0';
    }
};

export const URL = {
    endPoint: `http://airbnb.clone.r-e.kr/api/`,
    location: (city: string): string => `search/${city}`,
    detailRoom: (roomId: number | string): string => `rooms/${roomId}`,
    searchRoomWithQuery: (reservationState: ReservationContext): string => {
        const { location, checkIn, checkOut, fee, people } = reservationState;
        const locationId = location.id;
        const checkInDate = isDateNull(checkIn)
            ? ''
            : `${checkIn.year}-${addZero(checkIn.month, 'date')}-${addZero(checkIn.day, 'date')}`;
        const checkOutDate = isDateNull(checkOut)
            ? ''
            : `${checkOut.year}-${addZero(checkOut.month, 'date')}-${addZero(checkOut.day, 'date')}`;
        const [priceMin, priceMax] = fee;
        const { adult, children, kids } = people;
        return `rooms?locationId=${locationId}&checkIn=${checkInDate}&checkOut=${checkOutDate}&priceMin=${addZero(
            priceMin,
            'fee',
        )}&priceMax=${addZero(priceMax, 'fee')}&adults=${adult}&children=${children}&infants=${kids}`;
    },
    feeChart: `https://codesquad-2021-api.herokuapp.com/airbnb/price`,
    postReservation: (id: number): string => `rooms/${id}/reservations`,
};
