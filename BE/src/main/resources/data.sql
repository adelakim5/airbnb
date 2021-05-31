SELECT COUNT(*)
FROM Theme;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/유저.csv'
    REPLACE
    INTO TABLE User
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, name, email, profile_image_url);

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/테마여행지.csv'
    REPLACE
    INTO TABLE Theme
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    (@title,
     @thumbnail_)
    SET
        title = @title,
        thumbnail = @thumbnail_;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/지역데이터.csv'
    REPLACE
    INTO TABLE Location
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (@city,
     @district,
     @latitude_,
     @longitude_)
    SET
        city = @city,
        district = @district,
        latitude = @latitude_,
        longitude = @longitude_;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/인기여행지.csv'
    REPLACE
    INTO TABLE City
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (@name,
     @thumbnail,
     @latitude,
     @longitude)
    SET
        name = @name,
        thumbnail = @thumbnail,
        latitude = @latitude,
        longitude = @longitude;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/호스트.csv'
    REPLACE
    INTO TABLE Host
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, name, picture_url);

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/숙소.csv'
    REPLACE
    INTO TABLE Room
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, location_id, host_id, theme_id,
     latitude, longitude,
     name, room_and_property_type, avg_rating,
     rental_fee_per_night, weekly_price_factor, monthly_price_factor,
     description,
     person_capacity, bedrooms, beds, bathrooms);

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/예약.csv'
    REPLACE
    INTO TABLE Reservation
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, room_id, user_id, check_in, check_out);


LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/리뷰.csv'
    REPLACE
    INTO TABLE Review
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, room_id, user_id, content, star_rating);

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/csv/편의시설.csv'
    REPLACE
    INTO TABLE Amenity
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (id, room_id, name);
