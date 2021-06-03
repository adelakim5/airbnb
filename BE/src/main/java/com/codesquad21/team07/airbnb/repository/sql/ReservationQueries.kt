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
