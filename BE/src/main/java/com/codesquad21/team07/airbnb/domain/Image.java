package com.codesquad21.team07.airbnb.domain;

public class Image {

    private final Long id;

    private final Long roomId;

    private final String type;

    private final String url;

    public Image(Long id, Long roomId, String type, String url) {
        this.id = id;
        this.roomId = roomId;
        this.type = type;
        this.url = url;
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
