package com.codesquad21.team07.airbnb.domain;

public class Reivew {

    private final Long id;

    private final Long roomId;

    private final Long userId;

    private final String content;

    private final Double starRating;

    public Reivew(Long id, Long roomId, Long userId, String content, Double starRating) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.content = content;
        this.starRating = starRating;
    }

    public Long getId() {
        return id;
    }

    public Long getRoomId() {
        return roomId;
    }

    public Long getUserId() {
        return userId;
    }

    public String getContent() {
        return content;
    }

    public Double getStarRating() {
        return starRating;
    }
}
