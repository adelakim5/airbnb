import { Date, ReservationContext } from 'shared/interface';

const isDateNull = (date: Date) => {
    const { year, month, day } = date;
    return year === 0 && month === 0 && day === 0;
};

export const URL = {
    endPoint: `http://airbnb.clone.r-e.kr/api/`,
    location: (city: string): string => `search/${city}`,
    detailRoom: (roomId: number | string): string => `rooms/${roomId}`,
    searchRoomWithQuery: (reservationState: ReservationContext): string => {
        const { location, checkIn, checkOut, fee, people } = reservationState;
        const locationId = location.id;
        const checkInDate = isDateNull(checkIn) ? '' : `${checkIn.year}-${checkIn.month}-${checkIn.day}`;
        const checkOutDate = isDateNull(checkOut) ? '' : `${checkOut.year}-${checkOut.month}-${checkOut.day}`;
        const [priceMin, priceMax] = fee;
        const { adult, children, kids } = people;
        return `rooms?locationId=${locationId}&checkIn=${checkInDate}&checkOut=${checkOutDate}&priceMin=${priceMin}&priceMax=${priceMax}&adults=${adult}&children=${children}&infants=${kids}`;
    },
};
