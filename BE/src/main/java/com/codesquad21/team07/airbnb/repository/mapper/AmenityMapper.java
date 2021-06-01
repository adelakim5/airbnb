package com.codesquad21.team07.airbnb.repository.mapper;

import com.codesquad21.team07.airbnb.domain.Amenity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AmenityMapper implements RowMapper<Amenity> {
    @Override
    public Amenity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Amenity(
                rs.getLong("id"),
                rs.getLong("room_id"),
                rs.getString("name"));
    }
}
