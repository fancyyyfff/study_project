package com.study.domain;

import com.study.service.CountService;

public class Count {
    private String username;

    private String fin;
    private  String task;

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }
    public Count(){

    }

    public Count(String username,String task,String fin) {
        this.username = username;
        this.fin = fin;
        this.task=task;
    }
    public Count( String task, String fin) {
        this.fin = fin;
        this.task=task;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }




    public String getFin() {
        return fin;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    @Override
    public String toString() {
        return "Count{" +
                "username='" + username + '\'' +
                ", fin='" + fin + '\'' +
                ", task='" + task + '\'' +
                '}';
    }
}
