package com.ccit.bean;

public class Guangdong {
    //广东省各地级市确诊、死亡、治愈
    private int id;
    private String city;
    private String confirmed;
    private String death;
    private String cure;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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

    @Override
    public String toString() {
        return "Guangdong{" +
                "id=" + id +
                ", city='" + city + '\'' +
                ", confirmed='" + confirmed + '\'' +
                ", death='" + death + '\'' +
                ", cure='" + cure + '\'' +
                '}';
    }
}
