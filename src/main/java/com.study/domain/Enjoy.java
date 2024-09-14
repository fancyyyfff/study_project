package com.study.domain;

public class Enjoy {
    private int id;
    private String things;
    public Enjoy(){

    }

    public Enjoy(int id, String things) {
        this.id = id;
        this.things = things;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThings() {
        return things;
    }

    public void setThings(String things) {
        this.things = things;
    }

    @Override
    public String toString() {
        return "Enjoy{" +
                "id=" + id +
                ", things='" + things + '\'' +
                '}';
    }
}
