package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Room;

import java.util.ArrayList;
import java.util.List;

public class RoomList {

    private List<Room> rooms;

    public RoomList() {
        this.rooms = new ArrayList<>();
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void add(Room room){
        this.rooms.add(room);
    }
}
