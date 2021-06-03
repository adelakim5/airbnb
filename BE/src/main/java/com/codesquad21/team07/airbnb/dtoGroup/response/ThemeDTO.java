package com.codesquad21.team07.airbnb.dtoGroup.response;

public class ThemeDTO {

    private Long id;

    private String title;

    private String thumbnail;

    public ThemeDTO(){}

    public ThemeDTO(Long id, String title, String thumbnail) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
