package com.codesquad21.team07.airbnb.domain;

import java.time.LocalDateTime;

public class Reservation {

    private final Long id;

    private final Long roomId;

    private final Long userId;

    private final LocalDateTime checkIn;

    private final LocalDateTime checkOut;

    public Reservation(Long id, Long roomId, Long userId, LocalDateTime checkIn, LocalDateTime checkOut) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
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

    public LocalDateTime getCheckIn() {
        return checkIn;
    }

    public LocalDateTime getCheckOut() {
        return checkOut;
    }
}
