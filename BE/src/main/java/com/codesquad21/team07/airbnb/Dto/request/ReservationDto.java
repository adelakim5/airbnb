package com.codesquad21.team07.airbnb.dto.request;

import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class ReservationDto {

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private final LocalDate checkIn;

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private final LocalDate checkOut;

    @NotNull
    private final Integer numOfAdults;

    @NotNull
    private final Integer numOfChildren;

    @NotNull
    private final Integer numOfInfants;

    @NotNull
    private final Integer totalPrice;

    public ReservationDto(LocalDate checkIn, LocalDate checkOut, Integer numOfAdults, Integer numOfChildren, Integer numOfInfants, Integer totalPrice) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numOfAdults = numOfAdults;
        this.numOfChildren = numOfChildren;
        this.numOfInfants = numOfInfants;
        this.totalPrice = totalPrice;
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

    public Integer getTotalPrice() {
        return totalPrice;
    }
}
