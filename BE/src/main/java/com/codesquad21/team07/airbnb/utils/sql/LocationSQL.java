package com.codesquad21.team07.airbnb.utils.sql;

public class LocationSQL {
    public static final String FIND_ADDRESS_BY_KEYWORD = "SELECT id, city, district, neighborhood, town, latitude, longitude \n"+
            "FROM Location\n" +
            "WHERE CONCAT(city, district, neighborhood, town) REGEXP :input LIMIT 5";
}