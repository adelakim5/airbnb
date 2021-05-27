package com.codesquad21.team07.airbnb.Domain;

public class Location {

    private final Long id;

    private final String city; //INFO 특별시/광역시/도

    private final String district; //INFO 군/구

    private final String neighborhood; //INFO 동/읍

    private final String town; //INFO 면/리

    private final Double latitude;

    private final Double logitude;


    public Location(Long id, String city, String district, String neighborhood, String town, Double latitude, Double logitude) {
        this.id = id;
        this.city = city;
        this.district = district;
        this.neighborhood = neighborhood;
        this.town = town;
        this.latitude = latitude;
        this.logitude = logitude;
    }

    public Long getId() {
        return id;
    }

    public String getCity() {
        return city;
    }

    public String getDistrict() {
        return district;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public String getTown() {
        return town;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLogitude() {
        return logitude;
    }
}
