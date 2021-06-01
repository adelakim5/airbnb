package com.codesquad21.team07.airbnb.repository.sql

const val FIND_IMAGE_BY_ID: String = """
    
SELECT id, room_id, type, url FROM Image WHERE room_id = :roomId;

"""

const val FIND_AMENITY_BY_ID: String = """
    
SELECT id, room_id, name FROM Amenity WHERE room_id = :roomId;

"""
const val FIND_ALL_ROOM: String = """

SELECT
    id, location_id, host_id, theme_id,
    latitude ,longitude,
    name, room_and_property_type, avg_rating, rental_fee_per_night,
    weekly_price_factor, monthly_price_factor, description, person_capacity, bedrooms, beds, bathrooms
FROM Room

"""

const val FIND_ROOM_BY_ID: String = FIND_ALL_ROOM + "WHERE id = :id"
