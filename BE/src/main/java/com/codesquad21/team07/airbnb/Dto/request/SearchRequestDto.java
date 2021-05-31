package com.codesquad21.team07.airbnb.dto.request;

import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class SearchRequestDto { // POJO

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate checkOut;

    @NotNull
    private Long locationId;

    @Min(10000)
    @NotNull
    private Integer priceMin;

    @Min(10001)
    @NotNull
    private Integer priceMax;

    @Min(1)
    @NotNull
    private Integer adults;

    @NotNull
    private Integer children;

    @NotNull
    private Integer infants;

    public SearchRequestDto() {
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public int getPriceMin() {
        return priceMin;
    }

    public void setPriceMin(Integer priceMin) {
        this.priceMin = priceMin;
    }

    public int getPriceMax() {
        return priceMax;
    }

    public void setPriceMax(Integer priceMax) {
        this.priceMax = priceMax;
    }

    public int getAdults() {
        return adults;
    }

    public void setAdults(Integer adults) {
        this.adults = adults;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(Integer children) {
        this.children = children;
    }

    public int getInfants() {
        return infants;
    }

    public void setInfants(Integer infants) {
        this.infants = infants;
    }
}
