package com.codesquad21.team07.airbnb.domain;

public class Host {

    private final Long id;

    private final String name;

    private final String pictureUrl;

    public Host(Long id, String name, String pictureUrl) {
        this.id = id;
        this.name = name;
        this.pictureUrl = pictureUrl;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }
}
