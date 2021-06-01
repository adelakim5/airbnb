package com.codesquad21.team07.airbnb.repository.mapper;

import com.codesquad21.team07.airbnb.domain.Room;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoomMapper implements RowMapper<Room> {
    @Override
    public Room mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Room.Builder()
                .id(rs.getLong("id"))
                .locationId(rs.getLong("location_id"))
                .hostId(rs.getLong("host_id"))
                .themeId(rs.getLong("theme_id"))
                .latitude(rs.getDouble("latitude"))
                .longitude(rs.getDouble("longitude"))
                .name(rs.getString("name"))
                .roomAndPropertyType(rs.getString("room_and_property_type"))
                .avgRating(rs.getDouble("avg_rating"))
                .rentalFeePerNight(rs.getInt("rental_fee_per_night"))
                .weeklyPriceFactor(rs.getDouble("weekly_price_factor"))
                .monthlyPriceFactor(rs.getDouble("monthly_price_factor"))
                .description(rs.getString("description"))
                .personCapacity(rs.getInt("person_capacity"))
                .bedrooms(rs.getInt("bedrooms"))
                .beds(rs.getInt("beds"))
                .bathrooms(rs.getInt("bathrooms"))
                .build();
    }
}
