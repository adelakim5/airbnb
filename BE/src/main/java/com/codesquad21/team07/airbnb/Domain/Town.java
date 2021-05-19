package com.codesquad21.team07.airbnb.Domain;

public class Town {

    private final Long id;

    private final Long provinceId;

    private final String name;

    public Town(Long id, Long provinceId, String name) {
        this.id = id;
        this.provinceId = provinceId;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public Long getProvinceId() {
        return provinceId;
    }

    public String getName() {
        return name;
    }
}
