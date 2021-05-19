package com.codesquad21.team07.airbnb.Domain;

public class Theme {

    private final Long id;

    private final String title;

    private final String thumbnail;

    public Theme(Long id, String title, String thumbnail) {
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
}
