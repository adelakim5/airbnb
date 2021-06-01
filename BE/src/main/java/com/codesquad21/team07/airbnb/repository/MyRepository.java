package com.codesquad21.team07.airbnb.repository;

import java.util.List;
import java.util.Optional;

public interface MyRepository<T> {

    List<T> findAll();

    void save();

    Optional<T> findRoomById(Long id);

    void update(T t, Long id);

    void delete(Long id);

}
