package com.study.domain;

import java.util.List;

public class CoursesWithName {
    private String username;
    private List<Course> courseList;


    public CoursesWithName() {
    }

    public CoursesWithName(String username, List<Course> courseList) {
        this.username = username;
        this.courseList = courseList;
    }

    /**
     * 获取
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取
     * @return courseList
     */
    public List<Course> getCourseList() {
        return courseList;
    }

    /**
     * 设置
     * @param courseList
     */
    public void setCourseList(List<Course> courseList) {
        this.courseList = courseList;
    }

    public String toString() {
        return "CoursesWtihName{username = " + username + ", courseList = " + courseList + "}";
    }
}
