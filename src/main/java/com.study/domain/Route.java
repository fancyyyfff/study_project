package com.study.domain;

public class Route {
    private int id;
    private String target;
    private String content;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private  String username;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public Route(){

    }

    public Route(int id, String target, String username) {
        this.id = id;
        this.target = target;
        this.username = username;
    }

    public Route(int id, String target, String content, String username) {
        this.id = id;
        this.target = target;
        this.content = content;
        this.username = username;
    }

    @Override
    public String toString() {
        return "Route{" +
                "id=" + id +
                ", target='" + target + '\'' +
                ", content='" + content + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}
