package com.codesquad21.team07.airbnb.dtoGroup.response;

import java.util.HashMap;
import java.util.Map;

public class ImageFe {

    private final Map<String, String> imagesFe = new HashMap<>();

    public Map<String, String> getImagesFe() {
        return imagesFe;
    }

    public void add(String imageUrl){
        if(!imagesFe.containsKey("thumbnail")){
            imagesFe.put("imageUrl",imageUrl);
        }else {
            imagesFe.put("detail",imageUrl);
        }
    }
}
