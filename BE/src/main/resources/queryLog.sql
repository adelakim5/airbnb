# 전체 방 검색
SELECT *
FROM Room;

# 특정 지역의 방 검색
SELECT *
FROM Room
WHERE location_id = 20;

# 날짜 중복 체크
SELECT COUNT(*)
FROM Reservation
WHERE ((:checkIn <= check_out) AND (:checkOut >= check_in));

# 가격 풀 검색
SELECT *
FROM Room
WHERE ((:inputMinPrice <= rental_fee_per_night) AND (:inputMaxPrice >= rental_fee_per_night));
SELECT *
FROM Room
WHERE (:inputMaxPrice >= rental_fee_per_night);
SELECT *
FROM Room
WHERE (:inputMinPrice <= rental_fee_per_night);


# 인원 검색
SELECT *
FROM Room
WHERE person_capacity >= :num;

SELECT id,
       location_id,
       host_id,
       theme_id,
       latitude,
       longitude,
       name,
       room_and_property_type,
       avg_rating,
       rental_fee_per_night,
       weekly_price_factor,
       monthly_price_factor,
       description,
       person_capacity,
       bedrooms,
       beds,
       bathrooms
FROM Room
WHERE id = :id;


# 숙소 검색 N+1 해결하기 위해 JOIN 사용해보기

SELECT *
FROM Room
         INNER JOIN Location L on Room.location_id = L.id
         INNER JOIN Image I on Room.id = I.room_id;


SELECT *
FROM Image
WHERE room_id = :roomId;
SELECT name
FROM Amenity
WHERE room_id = :roomId;


SELECT GROUP_CONCAT(url) AS IMAGES
FROM Image AS I
WHERE I.room_id = 1
GROUP BY type;
SELECT GROUP_CONCAT(name) AS Amenities
FROM Amenity
WHERE Amenity.room_id = 1;


# 날짜 중복 체크
SELECT COUNT(*)
FROM Reservation
WHERE ((:checkIn <= check_out) AND (:checkOut >= check_in));


/*View는 의미있는 변수같은 느낌, 최적화할 때 쓰는게 아니라 변수 네이밍할때 쓰는 스킬*/
/*쿼리를 저장하고 있는지(머지) 테이블을 저장하고 있는지(테이블)에 따라 알고리즘 방식이 달라짐*/
/*쿼리 저장 방식은 lazy loading이 가능해서 좀 더 정확한 결과가 가능해질 듯. 캐싱은 불가능*/
CREATE VIEW reservation_count AS
SELECT COUNT(*) AS reservation_count
FROM Reservation
WHERE ((:checkIn <= check_out) AND (:checkOut >= check_in));

SELECT *
FROM Room
WHERE (SELECT reservation_count FROM reservation_count) < 1;


/*조건별 숙소 검색하는 쿼리*/

SELECT id,
       location_id,
       host_id,
       theme_id,
       latitude,
       longitude,
       name,
       room_and_property_type,
       avg_rating,
       rental_fee_per_night,
       weekly_price_factor,
       monthly_price_factor,
       description,
       person_capacity,
       bedrooms,
       beds,
       bathrooms
FROM Room
WHERE location_id = :locationId
  AND person_capacity >= :numOfPeople
  AND (:priceMin <= rental_fee_per_night)
  AND (:priceMax >= rental_fee_per_night)
  AND (SELECT COUNT(*) AS 'double_check'
       FROM Reservation AS R
       WHERE R.room_id
                 IN (
                     (:checkIn BETWEEN R.check_in AND R.check_out)
                     OR (:checkOut BETWEEN R.check_in AND R.check_out)
                     OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in))
                 )) = 0;


# 방법이 없다...조인할..ㅜㅠㅠ
SELECT DISTINCT *
FROM Room
         INNER JOIN Reservation R on Room.id = R.room_id
         INNER JOIN Image I on Room.id = I.room_id
         INNER JOIN Amenity A on Room.id = A.room_id
         INNER JOIN User U on R.user_id = U.id
         INNER JOIN Review R2 on Room.id = R2.room_id;


# FIND_ALL_BY_STAY_PERIOD
# 날짜로만 숙소검색

SELECT id,
       location_id,
       host_id,
       theme_id,
       latitude,
       longitude,
       name,
       room_and_property_type,
       avg_rating,
       rental_fee_per_night,
       weekly_price_factor,
       monthly_price_factor,
       description,
       person_capacity,
       bedrooms,
       beds,
       bathrooms
FROM Room
WHERE (SELECT COUNT(*)
       FROM Reservation AS R
       WHERE R.room_id
                 IN (
                     (:checkIn BETWEEN R.check_in AND R.check_out)
                     OR (:checkOut BETWEEN R.check_in AND R.check_out)
                     OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in))
                 )) = 0;


# 숙소 ID와 예약 날짜를 통해 예약 가능한지 여부 확인

SELECT COUNT(*)
FROM Reservation AS R
WHERE 1=1
AND R.room_id
          IN (
              (:checkIn BETWEEN R.check_in AND R.check_out)
              OR (:checkOut BETWEEN R.check_in AND R.check_out)
              OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in))
          ) = 1
AND R.status = :status
AND R.room_id = :roomdId;


SELECT COUNT(*)
FROM Reservation AS R
WHERE R.room_id
          IN (
              (:checkIn BETWEEN R.check_in AND R.check_out)
              OR (:checkOut BETWEEN R.check_in AND R.check_out)
              OR ((:checkIn <= R.check_out) AND (:checkOut >= R.check_in))
          );



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
);

UPDATE Reservation SET status = :status
WHERE 1=1
AND room_id = :roomId
AND user_id = :userI
AND id = :reservationId



SELECT COUNT(*) FROM Reservation AS R
WHERE 1=1
AND R.user_id=:userId
AND R.room_id=:roomId
AND R.id = :reservationId
AND R.status = :status;


SELECT H.name
FROM Room INNER JOIN Host H on Room.host_id = H.id
WHERE host_id = :hostId;

SELECT H.name
FROM Room INNER JOIN Host H on Room.host_id = H.id
WHERE host_id = 1

SELECT name FROM Host WHERE id = :hostId;
