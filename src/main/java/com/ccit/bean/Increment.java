package com.ccit.bean;


public class Increment {
    //全国各省确诊增量、死亡增量、治愈增量、现有确诊增量
    private int id;
    private String province;
    private String confirmedIncrement;
    private String deathIncrement;
    private String cureIncrement;
    private String existingConfirmedIncrement;

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

    public String getConfirmedIncrement() {
        return confirmedIncrement;
    }

    public void setConfirmedIncrement(String confirmedIncrement) {
        this.confirmedIncrement = confirmedIncrement;
    }

    public String getDeathIncrement() {
        return deathIncrement;
    }

    public void setDeathIncrement(String deathIncrement) {
        this.deathIncrement = deathIncrement;
    }

    public String getCureIncrement() {
        return cureIncrement;
    }

    public void setCureIncrement(String cureIncrement) {
        this.cureIncrement = cureIncrement;
    }

    public String getExistingConfirmedIncrement() {
        return existingConfirmedIncrement;
    }

    public void setExistingConfirmedIncrement(String existingConfirmedIncrement) {
        this.existingConfirmedIncrement = existingConfirmedIncrement;
    }

    @Override
    public String toString() {
        return "Increment{" +
                "id=" + id +
                ", province='" + province + '\'' +
                ", confirmedIncrement='" + confirmedIncrement + '\'' +
                ", deathIncrement='" + deathIncrement + '\'' +
                ", cureIncrement='" + cureIncrement + '\'' +
                ", existingConfirmedIncrement='" + existingConfirmedIncrement + '\'' +
                '}';
    }
}
