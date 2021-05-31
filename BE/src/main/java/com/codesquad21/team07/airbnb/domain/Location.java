package com.codesquad21.team07.airbnb.domain;

public class Location {

    private Long id;

    private String city; //INFO 특별시/광역시/도

    private String district; //INFO 군/구

    private Double latitude;

    private Double longitude;


    public Location() {
    }

    public Location(Long id, String city, String district, Double latitude, Double longitude) {
        this.id = id;
        this.city = city;
        this.district = district;
        this.latitude = latitude;
        this.longitude = longitude;
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

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
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

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
