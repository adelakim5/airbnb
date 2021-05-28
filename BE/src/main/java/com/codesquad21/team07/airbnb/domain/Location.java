package com.codesquad21.team07.airbnb.domain;

public class Location {

    private  Long id;

    private  String city; //INFO 특별시/광역시/도

    private  String district; //INFO 군/구

    private  String neighborhood; //INFO 동/읍

    private  String town; //INFO 면/리

    private  Double latitude;

    private  Double logitude;


    public Location(){}
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void setLogitude(Double logitude) {
        this.logitude = logitude;
    }
}
