package com.codesquad21.team07.airbnb.Domain;

public class Amenity {
    private final Long id;

    private final Long roomId;

    private final String name;

    public Amenity(Long id, Long roomId, String name) {
        this.id = id;
        this.roomId = roomId;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public Long getRoomId() {
        return roomId;
    }

    public String getName() {
        return name;
    }
}
