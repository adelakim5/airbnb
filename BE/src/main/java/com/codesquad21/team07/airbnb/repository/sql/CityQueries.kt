package com.codesquad21.team07.airbnb.repository.sql

const val FIND_ALL_CITY : String = """

SELECT id, name, thumbnail, latitude, longitude FROM City

"""