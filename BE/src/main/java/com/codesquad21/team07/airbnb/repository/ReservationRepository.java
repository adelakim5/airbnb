package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.dtoGroup.request.ReservationDto;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.time.LocalDate;

import static com.codesquad21.team07.airbnb.repository.sql.ReservationQueriesKt.*;

@Repository
public class ReservationRepository {

    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;

    public ReservationRepository(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("Reservation").usingGeneratedKeyColumns("id");
    }

    public Integer findDuplicateCountByRoomIdAndDate(Long roomId, LocalDate checkIn, LocalDate checkOut) {
        SqlParameterSource namedParameter = new MapSqlParameterSource()
                .addValue("roomId", roomId)
                .addValue("checkIn", checkIn)
                .addValue("checkOut", checkOut);

        return jdbc.queryForObject(RESERVATION_CHECK, namedParameter, (rs, rowNum) -> rs.getInt("COUNT(*)"));
    }

    public Integer reservation(Long roomId, Long userId, ReservationDto reservationDto) {
        SqlParameterSource namedParameter = setNamedParametersByReservationInfo(roomId, userId, reservationDto);
        return insertAction.executeAndReturnKey(namedParameter).intValue();
    }

    private SqlParameterSource setNamedParametersByReservationInfo(Long roomId, Long userId, ReservationDto reservationDto) {
        return new MapSqlParameterSource()
                .addValue("roomId", roomId)
                .addValue("userId", userId)
                .addValue("checkIn", reservationDto.getCheckIn())
                .addValue("checkOut", reservationDto.getCheckOut())
                .addValue("numOfAdults", reservationDto.getNumOfAdults())
                .addValue("numOfChildren", reservationDto.getNumOfChildren())
                .addValue("numOfInfants", reservationDto.getNumOfInfants())
                .addValue("totalPrice", reservationDto.getTotalPrice());
    }

    public void cancelReservation(Long roomId, Long reservationId, Long userId) {
        SqlParameterSource namedParameter = new MapSqlParameterSource()
                .addValue("roomId", roomId)
                .addValue("reservationId", reservationId)
                .addValue("userId", userId);
        jdbc.update(DELETE_RESERVATION, namedParameter);
    }

    // 수정 필요
    public Integer findReservasionById(Long userId, Long roomId, Long reservationId){
        SqlParameterSource namedParameter = new MapSqlParameterSource()
                .addValue("roomId", roomId)
                .addValue("reservationId", reservationId)
                .addValue("userId", userId);
        return jdbc.queryForObject(FIND_VALID_RESERVATION, namedParameter, (rs, rowNum) -> rs.getInt("COUNT(*)"));
    }
}
