package com.ccit.bean;


public class Trend {
    //全国一定阶段累计确诊、死亡、治愈、累计确诊增量
    private int id;
    private String time;
    private String confirmed;
    private String death;
    private String cure;
    private String confirmedIncrement;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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

    public String getConfirmedIncrement() {
        return confirmedIncrement;
    }

    public void setConfirmedIncrement(String confirmedIncrement) {
        this.confirmedIncrement = confirmedIncrement;
    }

    @Override
    public String toString() {
        return "Trend{" +
                "id=" + id +
                ", time='" + time + '\'' +
                ", confirmed='" + confirmed + '\'' +
                ", death='" + death + '\'' +
                ", cure='" + cure + '\'' +
                ", confirmedIncrement='" + confirmedIncrement + '\'' +
                '}';
    }
}
