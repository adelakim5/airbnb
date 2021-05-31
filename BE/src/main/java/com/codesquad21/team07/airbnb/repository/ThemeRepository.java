package com.codesquad21.team07.airbnb.repository;

import com.codesquad21.team07.airbnb.domain.Theme;
import com.codesquad21.team07.airbnb.dto.response.ThemeDTO;
import com.codesquad21.team07.airbnb.utils.sql.ThemeSQLKt;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class ThemeRepository implements MyRepository<Theme> {

    private NamedParameterJdbcTemplate jdbc;
    private RowMapper<ThemeDTO> rowMapper = BeanPropertyRowMapper.newInstance(ThemeDTO.class);

    public ThemeRepository(DataSource dataSource) {
        jdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<Theme> findAll() {
        List<ThemeDTO> themeDTOS = jdbc.query(ThemeSQLKt.FIND_ALL_THEME, Collections.emptyMap(), rowMapper);
        return themeDTOS.stream().map(Theme::update).collect(Collectors.toList());
    }

    @Override
    public void save() {

    }

    @Override
    public Optional<Theme> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void update(Theme theme, Long id) {

    }

    @Override
    public void delete(Long id) {

    }
}

