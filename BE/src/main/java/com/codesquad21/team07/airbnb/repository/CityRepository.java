package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.domain.City;
import com.codesquad21.team07.airbnb.dto.response.CityDTO;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.codesquad21.team07.airbnb.utils.sql.CitySQLKt.*;

@Repository
public class CityRepository implements MyRepository<City> {

    private NamedParameterJdbcTemplate jdbc;
    private RowMapper<CityDTO> rowMapper = BeanPropertyRowMapper.newInstance(CityDTO.class);

    public CityRepository(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<City> findAll() {
        List<CityDTO> cityDTOS = jdbc.query(FIND_ALL_CITY, Collections.emptyMap(), rowMapper);
        return cityDTOS.stream().map(City::update).collect(Collectors.toList());
    }

    @Override
    public Optional<City> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void save() {

    }

    @Override
    public void update(City city, Long id) {

    }

    @Override
    public void delete(Long id) {

    }
}
