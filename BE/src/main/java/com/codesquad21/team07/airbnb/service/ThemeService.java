package com.codesquad21.team07.airbnb.service;

import com.codesquad21.team07.airbnb.domain.Theme;
import com.codesquad21.team07.airbnb.repository.MyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeService {

    private final MyRepository<Theme> themeRepository;

    public ThemeService(MyRepository<Theme> themeRepository) {
        this.themeRepository = themeRepository;
    }

    public List<Theme> findAll(){
        return themeRepository.findAll();
    }

}
