package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.Amenity;
import com.codesquad21.team07.airbnb.Domain.Image;
import com.codesquad21.team07.airbnb.Dto.Response.RoomDTO;
import com.codesquad21.team07.airbnb.Dto.Response.RoomList;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class RoomApi {

    //http://localhost:8080/api/search/seoul-gangnam/rooms?checkIn=2021-05-24&checkOut=2021-05-28&priceMin=100000&priceMax=300000&adults=1&children=1&infants=1
    @GetMapping("/search/seoul-gangnam/rooms")
    public RoomList SearchFilteredList(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn,
                                   @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut,
                                   @RequestParam int priceMin,
                                   @RequestParam int priceMax,
                                   @RequestParam int adults,
                                   @RequestParam int children,
                                   @RequestParam int infants) {

        Image image1 = new Image(1L,"thumbnail","https://a0.muscache.com/im/pictures/miso/Hosting-44552310/original/3914cc46-8881-41cd-8090-33e679305107.jpeg?im_w=1200",1L);
        Image image2 = new Image(2L,"big","https://a0.muscache.com/im/pictures/67f4ea10-0e7e-41f5-a2b6-190215610d41.jpg?im_w=720",1L);
        Image image3 = new Image(3L,"small","https://a0.muscache.com/im/pictures/584e8ac9-67d8-4e27-a40c-d67293d298c0.jpg?im_w=720",1L);

        Amenity amenity1 = new Amenity(1L, 1L, "주방");
        Amenity amenity2 = new Amenity(2L, 1L, "무선 인터넷");
        Amenity amenity3 = new Amenity(3L, 1L, "에어컨");
        Amenity amenity4 = new Amenity(4L, 1L, "헤어드라이기");

        List<Amenity> amenities = new ArrayList<>();
        amenities.add(amenity1);
        amenities.add(amenity2);
        amenities.add(amenity3);
        amenities.add(amenity4);

        List<Image> imageList = new ArrayList<>();
        imageList.add(image1);
        imageList.add(image2);
        imageList.add(image3);

        RoomDTO.Builder builder = new RoomDTO.Builder();
        builder.latitude(12.2);
        builder.logitude(13.3);
        builder.addressId(1L);
        builder.themeId(1L);
        builder.name("#역삼역4번출구 도보3분 409");
        builder.rentalFeePerNight(15000);
        builder.weeklyPriceFactor(0.97);
        builder.monthlyPriceFactor(0.95);
        builder.description("상세설명입니다.");
        builder.personCapacity(1);
        builder.bedrooms(1);
        builder.beds(1);
        builder.bathrooms(1);
        builder.avgRating(4.73);
        builder.roomAndPropertyType("콘도(아파트) 전체");
        builder.images(imageList);
        builder.imagesFe(imageList);
        builder.amenities(amenities);

        RoomDTO room = builder.build();


        image1 = new Image(1L,"thumbnail","https://a0.muscache.com/im/pictures/dd9e507a-ea75-4634-bbdd-77c2ceb9adbf.jpg?im_w=1200",2L);
        image2 = new Image(2L,"big","https://a0.muscache.com/im/pictures/b71b2c8d-5ca7-4326-aa59-9811985f7320.jpg?im_w=720",2L);
        image3 = new Image(3L,"small","https://a0.muscache.com/im/pictures/934d9bb8-0c34-4a3e-85f5-e7b722855b00.jpg?im_w=720",2L);

        imageList = new ArrayList<>();

        imageList.add(image1);
        imageList.add(image2);
        imageList.add(image3);


        RoomDTO.Builder builder2 = new RoomDTO.Builder();
        builder2.latitude(22.2);
        builder2.logitude(33.3);
        builder2.addressId(1L);
        builder2.themeId(2L);
        builder2.name("#2 홍대입구역 도보 5분 조용하고 깔끔한 집");
        builder2.rentalFeePerNight(25000);
        builder2.weeklyPriceFactor(0.93);
        builder2.monthlyPriceFactor(0.92);
        builder2.description("2호선 홍대입구역 도보 5분 거리에 위치한 깔끔하고 아담한 집입니다.\n" +
                "커플 또는 2-3인이 여행, 출장 오시기 좋은 위치이며 엘리베이터가 있어 짐이 많으셔도 편하게 이용하실 수 있습니다.\n" +
                "주변이 주택가라 저녁에는 안전하고 조용하게 지내실 수 있고 같은 건물 1층에 편의점, 도보 2분 거리에 대형마트가 있어 언제든 필요한 물건 구입하시기도 좋습니다\n" +
                "여름에는 시원하고 겨울에는 난방 잘 되며 창문이 커서 채광도 좋습니다^^");
        builder2.personCapacity(1);
        builder2.bedrooms(1);
        builder2.beds(1);
        builder2.bathrooms(1);
        builder2.avgRating(4.73);
        builder2.roomAndPropertyType("레지던스 전체");
        builder2.images(imageList);
        builder2.imagesFe(imageList);
        builder2.amenities(amenities);

        RoomDTO room2 = builder2.build();


        RoomList rooms = new RoomList();


        rooms.add(room);
        rooms.add(room2);

        return rooms;

    }

}
