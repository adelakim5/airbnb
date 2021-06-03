package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.dto.request.ReservationDto;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.time.LocalDate;

import static com.codesquad21.team07.airbnb.repository.sql.ReservationQueriesKt.RESERVATION_CHECK;

@Repository
public class ReservationRepository {

    private NamedParameterJdbcTemplate jdbc;

    public ReservationRepository(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    public Integer findDuplicateCountByRoomIdAndDate(Long roomdId, LocalDate checkIn, LocalDate checkOut){
        SqlParameterSource namedParameter = setNamedParametersBySearchRoom(roomdId, checkIn, checkOut);

        return jdbc.queryForObject(RESERVATION_CHECK, namedParameter, (rs, rowNum) -> rs.getInt("COUNT(*)"));
    }

    private SqlParameterSource setNamedParametersBySearchRoom(Long roomdId, LocalDate checkIn, LocalDate checkOut) {
        return new MapSqlParameterSource()
                .addValue("roomdId", roomdId)
                .addValue("checkIn", checkIn)
                .addValue("checkOut", checkOut);
    }

    public void reservation(Long roomId, Long userId, ReservationDto reservationDto){




    }


}
