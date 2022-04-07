package com.ccit.bean;

public class Confirmed {
    //全国各省确诊、死亡、治愈、现有确诊
    private int id;
    private String province;
    private String confirmed;
    private String death;
    private String cure;
    private String existingConfirmed;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(String confirmed) {
        this.confirmed = confirmed;
    }

    public String getDeath() {
        return death;
    }

    public void setDeath(String death) {
        this.death = death;
    }

    public String getCure() {
        return cure;
    }

    public void setCure(String cure) {
        this.cure = cure;
    }

    public String getExistingConfirmed() {
        return existingConfirmed;
    }

    public void setExistingConfirmed(String existingConfirmed) {
        this.existingConfirmed = existingConfirmed;
    }

    @Override
    public String toString() {
        return "confirmed{" +
                "id=" + id +
                ", province='" + province + '\'' +
                ", confirmed='" + confirmed + '\'' +
                ", death='" + death + '\'' +
                ", cure='" + cure + '\'' +
                ", existingConfirmed='" + existingConfirmed + '\'' +
                '}';
    }
}
