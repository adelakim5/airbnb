package com.codesquad21.team07.airbnb.domain;

import java.time.LocalDate;

public class Reservation {

    private final Long id;

    private final Long roomId;

    private final Long userId;

    private final LocalDate checkIn;

    private final LocalDate checkOut;

    public Reservation(Long id, Long roomId, Long userId, LocalDate checkIn, LocalDate checkOut) {
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

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }
}
