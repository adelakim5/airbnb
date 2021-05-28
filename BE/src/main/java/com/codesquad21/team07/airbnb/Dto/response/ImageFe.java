package com.codesquad21.team07.airbnb.dto.response;

public class ImageFe {

    private String thumbnail;
    private String big;
    private String small;

    public String getThumbnail() {
        return thumbnail;
    }

    public String getBig() {
        return big;
    }

    public String getSmall() {
        return small;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public void setBig(String big) {
        this.big = big;
    }

    public void setSmall(String small) {
        this.small = small;
    }

    public void add(String imageUrl){
        if(thumbnail == null){
            thumbnail = imageUrl;
        }else if(big == null){
            big = imageUrl;
        }else if(small == null){
            small = imageUrl;
        }
    }
}
