package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Address;
import com.codesquad21.team07.airbnb.Domain.Province;
import com.codesquad21.team07.airbnb.Domain.Town;

import java.util.List;

public class SearchContents {

    private Province province;

    private Town town;

    private List<Address> addresses;

    public SearchContents(Province province, Town town, List<Address> addresses) {
        this.province = province;
        this.town = town;
        this.addresses = addresses;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }

    public Town getTown() {
        return town;
    }

    public void setTown(Town town) {
        this.town = town;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }
}
