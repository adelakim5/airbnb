package com.codesquad21.team07.airbnb.service;

import com.codesquad21.team07.airbnb.domain.Amenity;
import com.codesquad21.team07.airbnb.domain.Image;
import com.codesquad21.team07.airbnb.domain.Room;
import com.codesquad21.team07.airbnb.dtoGroup.request.SearchRoom;
import com.codesquad21.team07.airbnb.dtoGroup.response.RoomDTO;
import com.codesquad21.team07.airbnb.dtoGroup.response.RoomList;
import com.codesquad21.team07.airbnb.exception.NotFoundException;
import com.codesquad21.team07.airbnb.repository.RoomRepostiory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepostiory roomRepostiory;

    public RoomService(RoomRepostiory roomRepostiory) {
        this.roomRepostiory = roomRepostiory;
    }

    public RoomDTO findRoomByRoomId(Long id) {
        Room room = roomRepostiory.findRoomByRoomId(id).orElseThrow(NotFoundException::new);

        //m N+1 문제 추후 해결하기
        List<Image> images = findImageByRoomId(room.getId());
        List<Amenity> amenity = findAmenityByRoomId(room.getId());
        String hostName = findHostNameById(room.getHostId());

        return RoomDTO.of(room, hostName, images, amenity);
    }

    public List<Image> findImageByRoomId(Long id) {
        return roomRepostiory.findImageByRoomId(id);
    }

    public List<Amenity> findAmenityByRoomId(Long id) {
        return roomRepostiory.findAmenityByRoomId(id);
    }

    public RoomList findByConditions(SearchRoom searchRoom){

        RoomList roomList = new RoomList();
        List<Room> rooms = roomRepostiory.findRoomListByPeriod(searchRoom);

        return getRoomList(roomList, rooms);
    }

    public String findHostNameById(Long hostId) {
        return roomRepostiory.findHostNameById(hostId);
    }

    private RoomList getRoomList(RoomList roomList, List<Room> rooms) {

        for(Room room : rooms){
            //m N+1 문제 추후 해결하기
            List<Image> images = findImageByRoomId(room.getId());
            List<Amenity> amenity = findAmenityByRoomId(room.getId());
            String hostName = findHostNameById(room.getHostId());
            roomList.add(RoomDTO.of(room, hostName, images, amenity));
        }

        return roomList;
    }


}
