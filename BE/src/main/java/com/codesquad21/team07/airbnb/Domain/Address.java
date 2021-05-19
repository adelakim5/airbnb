package com.codesquad21.team07.airbnb.Domain;

public class Address {

    private final Long id;

    private final Long townId;

    private final String name;

    private final Double latitude;

    private final Double longitude;
    
    public Address(Long id, Long townId, String name, Double latitude, Double longitude) {
        this.id = id;
        this.townId = townId;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public Long getTownId() {
        return townId;
    }

    public String getName() {
        return name;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }
}
