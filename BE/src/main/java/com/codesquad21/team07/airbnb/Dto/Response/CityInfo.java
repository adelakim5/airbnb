package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Address;
import com.codesquad21.team07.airbnb.Domain.Province;
import com.codesquad21.team07.airbnb.Domain.Town;

public class CityInfo {

    private Long provinceId;

    private Long townId;

    private Long addressId;

    private String address;

    public CityInfo(Province province, Town town, Address address) {
        this.provinceId = province.getId();
        this.townId = town.getId();
        this.addressId = address.getId();
        this.address = province.getName() + " " + town.getName() + " " + address.getName();
    }

    public Long getProvinceId() {
        return provinceId;
    }

    public Long getTownId() {
        return townId;
    }

    public String getAddress() {
        return address;
    }

    public Long getAddressId() {
        return addressId;
    }
}
