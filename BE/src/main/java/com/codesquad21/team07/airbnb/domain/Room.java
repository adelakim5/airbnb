package com.codesquad21.team07.airbnb.domain;

import java.util.List;

public class Room {

    private final Long id;

    private final Double latitude;

    private final Double logitude;

    private final Long locationId;

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

    private final List<Image> images;

    private final List<Amenity> amenities;

    public static class Builder {

        private Long id;

        private Double latitude;

        private Double logitude;

        private Long locationId;

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

        private List<Image> images;

        private List<Amenity> amenities;


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

        public Builder locationId(Long locationId){
            this.locationId = locationId;
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
            this.images = images;
            return this;
        }

        public Builder amenities(List<Amenity> amenities){
            this.amenities = amenities;
            return this;
        }

        public Room build(){
            return new Room(this);
        }

    }

    private Room(Builder builder){
        this.id = builder.id;
        this.latitude = builder.latitude;
        this.logitude = builder.logitude;
        this.locationId = builder.locationId;
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
        this.amenities = builder.amenities;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLogitude() {
        return logitude;
    }

    public Long getLocationId() {
        return locationId;
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

    public List<Image> getImages() {
        return images;
    }

    public List<Amenity> getAmenities() {
        return amenities;
    }

    public Long getId() {
        return id;
    }
}
