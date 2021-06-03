package com.codesquad21.team07.airbnb.repository.sql

const val RESERVATION_CHECK: String = """
SELECT COUNT(*)
FROM Reservation AS R
WHERE 1=1
AND R.room_id
          IN (
              (:checkIn BETWEEN R.check_in AND R.check_out)
              OR (:checkOut BETWEEN R.check_in AND R.check_out)
              OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in))
          ) = 1
AND R.room_id = :roomdId
"""

const val INSERT_RESERVATION: String ="""
    
INSERT INTO Reservation (room_id, user_id, check_in, check_out, num_of_adults, num_of_children, num_of_infants, total_price, status) 
VALUES (
        :roomId,
        :userId,
        :checkIn,
        :checkOut,
        :numOfAdults,
        :numOfChildren,
        :numOfInfants,
        :totalPrice,
        :status                                                                                                                                 
)
 
"""

const val DELETE_RESERVATION: String ="""
    
UPDATE Reservation SET status = :status 
WHERE 1=1 
AND room_id = :roomId
AND user_id = :userId
AND id = :reservationId
 
"""
