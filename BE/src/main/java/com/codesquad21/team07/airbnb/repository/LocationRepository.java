package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.domain.Location;
import com.codesquad21.team07.airbnb.dto.response.LocationDTO;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class LocationRepository implements MyRepository<Location>{

    private NamedParameterJdbcTemplate jdbc;
    private RowMapper<Location> rowMapper = BeanPropertyRowMapper.newInstance(Location.class);

    public LocationRepository(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
    }


    public List<LocationDTO> findByAddress(String address) {
        Map<String, String> parameter = Collections.singletonMap("input",address);

        String sql = "SELECT DISTINCT id, city, district, neighborhood, town AS 'location'\n" +
                "FROM Location\n" +
                "WHERE CONCAT(city, district, neighborhood, town) REGEXP :input";

        List<Location> location = jdbc.query(sql, parameter, rowMapper);

        return location.stream().map(LocationDTO::of).collect(Collectors.toList());
    }


    @Override
    public List<Location> findAll() {
        return null;
    }

    @Override
    public void save() {

    }

    @Override
    public Optional<Location> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void update(Location location, Long id) {

    }

    @Override
    public void delete(Long id) {

    }
}
