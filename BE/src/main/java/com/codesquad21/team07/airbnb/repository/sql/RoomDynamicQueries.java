package com.codesquad21.team07.airbnb.repository.sql;

import com.codesquad21.team07.airbnb.dtoGroup.request.SearchRoom;

import static com.codesquad21.team07.airbnb.repository.sql.RoomQueriesKt.FIND_ALL_ROOM;

public class RoomDynamicQueries {

    //TODO. 코틀린에서 한번에 쿼리 로직을 짜고싶었는데, 문법을 아직 잘몰라서 동적 쿼리는 자바에서 작성

    public static String findRoomByConditions(SearchRoom searchRoom) {

        //m 지역 및 최대인원
        String query = FIND_ALL_ROOM + " WHERE location_id = :locationId \n";

        if(searchRoom.getAdults() != null || searchRoom.getChildren() != null  || searchRoom.getInfants() != null ){
            query += "AND person_capacity >= :numOfPeople \n";
        }

        if (searchRoom.getPriceMin() != null) {
            query += "AND (:priceMin <= rental_fee_per_night) \n";
        }

        if (searchRoom.getPriceMax() != null) {
            query += "AND (:priceMax >= rental_fee_per_night) \n";
        }

        if (searchRoom.getCheckIn() != null || searchRoom.getCheckOut() != null) {
            query += "AND (SELECT COUNT(*) AS 'reservation_check' \n" +
                    "FROM Reservation AS R \n" +
                    "WHERE R.room_id \n" +
                    "IN (";

            if (searchRoom.getCheckIn() != null) {
                query += "(:checkIn BETWEEN R.check_in AND R.check_out) \n";
            }
            if (searchRoom.getCheckOut() != null) {
                query += "OR (:checkOut BETWEEN R.check_in AND R.check_out) \n";
            }

            if (searchRoom.getCheckIn() != null && searchRoom.getCheckOut() != null) {
                query += "OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in)) \n";
            }

            query += ")) = 0";
        }



        return query;

    }

}
