package com.codesquad21.team07.airbnb.repository.mapper;

import com.codesquad21.team07.airbnb.domain.Image;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ImageMapper implements RowMapper<Image> {
    @Override
    public Image mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Image(
                rs.getLong("id"),
                rs.getLong("room_id"),
                rs.getString("type"),
                rs.getString("url")
        );
    }
}
