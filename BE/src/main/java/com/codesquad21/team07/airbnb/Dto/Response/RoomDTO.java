package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Amenity;
import com.codesquad21.team07.airbnb.Domain.Image;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class RoomDTO {

    private final Long id;

    private final Double latitude;

    private final Double logitude;

    private final Long addressId;

    private final Long themeId;

    private final String name;

    private final int rentalFeePerNight;

    private final Double weeklyPriceFactor;

    private final Double monthlyPriceFactor;

    private final String description;

    private final int personCapacity;

    private final int bedrooms;

    private final int beds;

    private final int bathrooms;

    private final Double avgRating;

    private final String roomAndPropertyType;

    private final List<String> images;

    private final List<Map<String,String>> imagesFe;

    private final List<String> amenities;

    public static class Builder {

        private Long id;

        private Double latitude;

        private Double logitude;

        private Long addressId;

        private Long themeId;

        private String name;

        private int rentalFeePerNight;

        private Double weeklyPriceFactor;

        private Double monthlyPriceFactor;

        private String description;

        private int personCapacity;

        private int bedrooms;

        private int beds;

        private int bathrooms;

        private Double avgRating;

        private String roomAndPropertyType;

        private List<String> images = new ArrayList<>();

        private List<Map<String,String>> imagesFe = new ArrayList<>();;

        private List<String> amenities = new ArrayList<>();


        public Builder id(Long id){
            this.id = id;
            return this;
        }

        public Builder latitude(Double latitude){
            this.latitude = latitude;
            return this;
        }

        public Builder logitude(Double logitude){
            this.logitude = logitude;
            return this;
        }

        public Builder addressId(Long addressId){
            this.addressId = addressId;
            return this;
        }

        public Builder themeId(Long themeId){
            this.themeId = themeId;
            return this;
        }

        public Builder name(String name){
            this.name = name;
            return this;
        }

        public Builder rentalFeePerNight(int rentalFeePerNight){
            this.rentalFeePerNight = rentalFeePerNight;
            return this;
        }

        public Builder weeklyPriceFactor(Double weeklyPriceFactor){
            this.weeklyPriceFactor = weeklyPriceFactor;
            return this;
        }

        public Builder monthlyPriceFactor(Double monthlyPriceFactor){
            this.monthlyPriceFactor = monthlyPriceFactor;
            return this;
        }

        public Builder description(String description){
            this.description = description;
            return this;
        }

        public Builder personCapacity(int personCapacity){
            this.personCapacity = personCapacity;
            return this;
        }

        public Builder bedrooms(int bedrooms){
            this.bedrooms = bedrooms;
            return this;
        }

        public Builder beds(int beds){
            this.beds = beds;
            return this;
        }

        public Builder bathrooms(int bathrooms){
            this.bathrooms = bathrooms;
            return this;
        }

        public Builder avgRating(Double avgRating){
            this.avgRating = avgRating;
            return this;
        }

        public Builder roomAndPropertyType(String roomAndPropertyType){
            this.roomAndPropertyType = roomAndPropertyType;
            return this;
        }

        public Builder images(List<Image> images){

            for(Image image : images){
                this.images.add(image.getType()+": "+image.getUrl());
            }

            return this;
        }

        public Builder imagesFe(List<Image> images){

            for(Image image : images){
                this.imagesFe.add(Collections.singletonMap(image.getType(),image.getUrl()));
            }
            return this;
        }

        public Builder amenities(List<Amenity> amenities){
            for(Amenity amenity : amenities){
                this.amenities.add(amenity.getName()+" ");
            }
            return this;
        }

        public RoomDTO build(){
            return new RoomDTO(this);
        }

    }

    public RoomDTO(Builder builder) {
        this.id = builder.id;
        this.latitude = builder.latitude;
        this.logitude = builder.logitude;
        this.addressId = builder.addressId;
        this.themeId = builder.themeId;
        this.name = builder.name;
        this.rentalFeePerNight = builder.rentalFeePerNight;
        this.weeklyPriceFactor = builder.weeklyPriceFactor;
        this.monthlyPriceFactor = builder.monthlyPriceFactor;
        this.description = builder.description;
        this.personCapacity = builder.personCapacity;
        this.bedrooms = builder.bedrooms;
        this.beds = builder.beds;
        this.bathrooms = builder.bathrooms;
        this.avgRating = builder.avgRating;
        this.roomAndPropertyType = builder.roomAndPropertyType;
        this.images = builder.images;
        this.imagesFe = builder.imagesFe;
        this.amenities = builder.amenities;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLogitude() {
        return logitude;
    }

    public Long getAddressId() {
        return addressId;
    }

    public Long getThemeId() {
        return themeId;
    }

    public String getName() {
        return name;
    }

    public int getRentalFeePerNight() {
        return rentalFeePerNight;
    }

    public Double getWeeklyPriceFactor() {
        return weeklyPriceFactor;
    }

    public Double getMonthlyPriceFactor() {
        return monthlyPriceFactor;
    }

    public String getDescription() {
        return description;
    }

    public int getPersonCapacity() {
        return personCapacity;
    }

    public int getBedrooms() {
        return bedrooms;
    }

    public int getBeds() {
        return beds;
    }

    public int getBathrooms() {
        return bathrooms;
    }

    public Double getAvgRating() {
        return avgRating;
    }

    public String getRoomAndPropertyType() {
        return roomAndPropertyType;
    }

    public List<String> getImages() {
        return images;
    }

    public List<String> getAmenities() {
        return amenities;
    }

    public List<Map<String, String>> getImagesFe() {
        return imagesFe;
    }
}
