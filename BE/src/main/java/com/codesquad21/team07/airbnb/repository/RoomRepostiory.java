package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.domain.Amenity;
import com.codesquad21.team07.airbnb.domain.Image;
import com.codesquad21.team07.airbnb.domain.Room;
import com.codesquad21.team07.airbnb.dto.request.SearchRoom;
import com.codesquad21.team07.airbnb.repository.mapper.AmenityMapper;
import com.codesquad21.team07.airbnb.repository.mapper.ImageMapper;
import com.codesquad21.team07.airbnb.repository.mapper.RoomMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static com.codesquad21.team07.airbnb.repository.sql.RoomDynamicQueries.findRoomByConditions;
import static com.codesquad21.team07.airbnb.repository.sql.RoomQueriesKt.*;

@Repository
public class RoomRepostiory implements MyRepository {

    private NamedParameterJdbcTemplate jdbc;

    public RoomRepostiory(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List findAll() {
        return null;
    }

    public Optional<Room> findRoomByRoomId(Long roomId) {
        SqlParameterSource namedParameter = new MapSqlParameterSource("id", roomId);

        Room room = jdbc.queryForObject(FIND_ROOM_BY_ID, namedParameter, new RoomMapper());


        if (Objects.isNull(room)) {
            return Optional.empty();
        }
        return Optional.of(room);
    }


    public List<Image> findImageByRoomId(Long roomId) {
        SqlParameterSource namedParameter = new MapSqlParameterSource("roomId", roomId);

        return jdbc.query(FIND_IMAGE_BY_ID, namedParameter, new ImageMapper());
    }

    public List<Amenity> findAmenityByRoomId(Long roomId) {
        SqlParameterSource namedParameter = new MapSqlParameterSource("roomId", roomId);
        return jdbc.query(FIND_AMENITY_BY_ID, namedParameter, new AmenityMapper());
    }


    public List<Room> findRoomListByPeriod(SearchRoom searchRoom) {
        SqlParameterSource namedParameter = setNamedParametersBySearchRoom(searchRoom);

        return jdbc.query(findRoomByConditions(searchRoom), namedParameter, new RoomMapper());
    }

    private SqlParameterSource setNamedParametersBySearchRoom(SearchRoom searchRoom) {
        return new MapSqlParameterSource()
                .addValue("checkIn", searchRoom.getCheckIn())
                .addValue("checkOut", searchRoom.getCheckOut())
                .addValue("locationId", searchRoom.getLocationId())
                .addValue("numOfPeople", searchRoom.sumOfPeople()) //INFO. 유아는 계산안함.
                .addValue("priceMin", searchRoom.getPriceMin())
                .addValue("priceMax", searchRoom.getPriceMax())
                .addValue("adults", searchRoom.getAdults())
                .addValue("children", searchRoom.getChildren())
                .addValue("infants", searchRoom.getInfants());
    }

    @Override
    public void save() {

    }

    @Override
    public Optional findRoomById(Long id) {
        return Optional.empty();
    }

    @Override
    public void update(Object o, Long id) {

    }

    @Override
    public void delete(Long id) {

    }
}
