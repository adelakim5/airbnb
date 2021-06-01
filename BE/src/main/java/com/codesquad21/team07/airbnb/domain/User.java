package com.codesquad21.team07.airbnb.domain;

public class User {

    private final Long id;

    private final String name;

    private final String email;

    private final String profileImageUrl;

    public User(Long id, String name, String email, String profileImageUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.profileImageUrl = profileImageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

}
