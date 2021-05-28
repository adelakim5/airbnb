
SELECT COUNT(*) FROM Theme;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/sample/테마여행지.csv'
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

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/sample/지역데이터.csv'
    REPLACE
    INTO TABLE Location
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    (@city,
     @district,
     @neighborhood,
     @town)
    SET
        city = @city,
        district = @district,
        neighborhood = @neighborhood,
        town = @town;

LOAD DATA LOCAL INFILE 'C:/Users/psh/Documents/Web/codesquad/airbnb/BE/src/main/resources/sample/인기여행지.csv'
    REPLACE
    INTO TABLE City
    CHARACTER SET euckr
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY ''
    LINES TERMINATED BY '\n'
    (@name,
     @thumbnail,
     @latitude,
     @longitude)
    SET
        name = @name,
        thumbnail = @thumbnail,
        latitude = @latitude,
        longitude = @longitude;
