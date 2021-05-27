package com.codesquad21.team07.airbnb.domain;

import com.codesquad21.team07.airbnb.dto.response.ThemeDTO;

public class Theme {

    private final Long id;

    private final String title;

    private final String thumbnail;

    public Theme(ThemeDTO themeDTO) {
        this.id = themeDTO.getId();
        this.title = themeDTO.getTitle();
        this.thumbnail = themeDTO.getThumbnail();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public static Theme update(ThemeDTO themeDTO){
        return new Theme(themeDTO);
    }
}
