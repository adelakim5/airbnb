package com.codesquad21.team07.airbnb.dtoGroup.response;

import com.codesquad21.team07.airbnb.domain.Amenity;
import com.codesquad21.team07.airbnb.domain.Image;
import com.codesquad21.team07.airbnb.domain.Room;

import java.util.*;

public class RoomDTO {

    private final Long id;

    private final Long locationId;

    private final Long hostId;

    private final Long themeId;

    private final Double latitude;

    private final Double longitude;

    private final String name;

    private final String roomAndPropertyType;

    private final Double avgRating;

    private final int rentalFeePerNight;

    private final Double weeklyPriceFactor;

    private final Double monthlyPriceFactor;

    private final String description;

    private final int personCapacity;

    private final int bedrooms;

    private final int beds;

    private final int bathrooms;

    private final Map<String, String> imagesFe;

    private final List<String> images;

    private final List<String> amenities;

    private final int numOfReview;

    private final String hostName;


    public RoomDTO(Room room, String hostName, List<String> imageList, Map<String, String> imagesFe, List<String> amenities) {
        this.id = room.getId();
        this.latitude = room.getLatitude();
        this.longitude = room.getLongitude();
        this.locationId = room.getLocationId();
        this.themeId = room.getThemeId();
        this.hostId = room.getHostId();
        this.name = room.getName();
        this.rentalFeePerNight = room.getRentalFeePerNight();
        this.weeklyPriceFactor = room.getWeeklyPriceFactor();
        this.monthlyPriceFactor = room.getMonthlyPriceFactor();
        this.description = room.getDescription();
        this.personCapacity = room.getPersonCapacity();
        this.bedrooms = room.getBedrooms();
        this.beds = room.getBeds();
        this.bathrooms = room.getBathrooms();
        this.avgRating = room.getAvgRating();
        this.roomAndPropertyType = room.getRoomAndPropertyType();
        this.numOfReview = room.getNumOfReview();

        //TODO. N+1 문제 해결
        this.images = imageList;
        this.imagesFe = imagesFe;
        this.amenities = amenities;
        this.hostName = hostName;
    }

    public static RoomDTO of(Room room, String hostName, List<Image> images, List<Amenity> amenities){
        List<String> imageList = new LinkedList<>();
        List<String> amenityList = new LinkedList<>();
        Map<String, String> imagesFe = new LinkedHashMap<>();

        int count = 0;
        for(Image image : images){
            imageList.add(image.getUrl().trim());

            if(!imagesFe.containsKey("thumbnail")){
                imagesFe.put("thumbnail",image.getUrl().trim());
            }else {
                imagesFe.put(("detail_"+count),image.getUrl().trim());
            }
            count++;
        }
        for(Amenity amenity : amenities){
            amenityList.add(amenity.getName().trim());
        }

        return new RoomDTO(room, hostName, imageList, imagesFe, amenityList);
    }


    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
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

    public List<String> getImages() {
        return images;
    }

    public List<String> getAmenities() {
        return amenities;
    }

    public Map<String, String> getImagesFe() {
        return imagesFe;
    }

    public Long getId() {
        return id;
    }

    public Long getHostId() {
        return hostId;
    }

    public int getNumOfReview() {
        return numOfReview;
    }

    public String getHostName() {
        return hostName;
    }
}
