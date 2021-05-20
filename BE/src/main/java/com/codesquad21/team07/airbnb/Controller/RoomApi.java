package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.Amenity;
import com.codesquad21.team07.airbnb.Domain.Image;
import com.codesquad21.team07.airbnb.Domain.Room;
import com.codesquad21.team07.airbnb.Dto.Response.RoomList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class RoomApi {

    @GetMapping("/room/서울-강남구")
    public RoomList SearchHomeList() {

        Image image1 = new Image(1L,"thumbnail","http://imgurl",1L);
        Image image2 = new Image(2L,"big","http://imgurl",1L);
        Image image3 = new Image(3L,"small","http://imgurl",1L);

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


        Room.Builder builder = new Room.Builder();
        builder.latitude(12.2);
        builder.logitude(13.3);
        builder.addressId(1L);
        builder.themeId(1L);
        builder.name("#역삼역4번출구 도보3분 409");
        builder.rentalFee(15000);
        builder.weeklyPriceFactor(0.97);
        builder.monthlyPriceFactor(0.95);
        builder.description("");
        builder.personCapacity(1);
        builder.bedrooms(1);
        builder.beds(1);
        builder.bathrooms(1);
        builder.avgRating(4.73);
        builder.roomAndPropertyType("콘도(아파트) 전체");
        builder.images(imageList);
        builder.amenities(amenities);

        Room room = builder.build();


        image1 = new Image(1L,"thumbnail","http://imgurl",2L);
        image2 = new Image(2L,"big","http://imgurl",2L);
        image3 = new Image(3L,"small","http://imgurl",2L);

        imageList = new ArrayList<>();

        imageList.add(image1);
        imageList.add(image2);
        imageList.add(image3);



        Room.Builder builder2 = new Room.Builder();
        builder2.latitude(22.2);
        builder2.logitude(33.3);
        builder2.addressId(1L);
        builder2.themeId(2L);
        builder2.name("#2 홍대입구역 도보 5분 조용하고 깔끔한 집");
        builder2.rentalFee(25000);
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
        builder.amenities(amenities);

        Room room2 = builder2.build();


        RoomList rooms = new RoomList();

        rooms.add(room);
        rooms.add(room2);

        return rooms;

    }

}
