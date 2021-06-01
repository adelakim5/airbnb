package com.codesquad21.team07.airbnb.dto.request;

import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class SearchDate {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate checkOut;

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }
}
