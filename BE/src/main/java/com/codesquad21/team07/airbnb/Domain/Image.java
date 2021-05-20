package com.codesquad21.team07.airbnb.Domain;

public class Image {

    private final Long id;

    private final String type;

    private final String url;

    private final Long roomId;

    public Image(Long id, String type, String url, Long roomId) {
        this.id = id;
        this.type = type;
        this.url = url;
        this.roomId = roomId;
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getUrl() {
        return url;
    }

    public Long getRoomId() {
        return roomId;
    }
}
