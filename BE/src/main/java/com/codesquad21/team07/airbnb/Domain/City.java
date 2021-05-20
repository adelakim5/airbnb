package com.codesquad21.team07.airbnb.Domain;

public class City {

    private final Long id;

    private final String name;

    private final String thumbnail;

    private final Double latitude;

    private final Double longtitue;


    public City(Long id, String name, String thumbnail, Double latitude, Double longtitue) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.latitude = latitude;
        this.longtitue = longtitue;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongtitue() {
        return longtitue;
    }
}
