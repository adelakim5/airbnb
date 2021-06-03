package com.codesquad21.team07.airbnb.domain;

import java.time.LocalDate;

public class Reservation {

    private final Long id;

    private final Long roomId;

    private final Long userId;

    private final LocalDate checkIn;

    private final LocalDate checkOut;

    private final Integer numOfAdults;

    private final Integer numOfChildren;

    private final Integer numOfInfants;

    private final Integer totalPrice;

    public Reservation(Long id, Long roomId, Long userId, LocalDate checkIn, LocalDate checkOut, Integer numOfAdults, Integer numOfChildren, Integer numOfInfants, Integer totalPrice) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numOfAdults = numOfAdults;
        this.numOfChildren = numOfChildren;
        this.numOfInfants = numOfInfants;
        this.totalPrice = totalPrice;
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

    public Integer getNumOfAdults() {
        return numOfAdults;
    }

    public Integer getNumOfChildren() {
        return numOfChildren;
    }

    public Integer getNumOfInfants() {
        return numOfInfants;
    }

}
