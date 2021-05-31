package com.codesquad21.team07.airbnb.utils.sql;


const val FIND_ADDRESS_BY_KEYWORD : String = """

SELECT id, city, district, latitude, longitude
FROM Location
WHERE CONCAT(city, district) REGEXP :input LIMIT 5

"""
