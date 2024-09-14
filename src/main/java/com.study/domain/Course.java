package com.study.domain;

public class Course {
    private Integer id;
    private String course;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private  String username;


    public Course() {
    }

    public Course(Integer id, String course) {
        this.id = id;
        this.course = course;
    }

    /**
     * 获取
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取
     * @return course
     */
    public String getCourse() {
        return course;
    }

    /**
     * 设置
     * @param course
     */
    public void setCourse(String course) {
        this.course = course;
    }

    public String toString() {
        return "Course{id = " + id + ", course = " + course + "}";
    }
}
