package com.study.domain;

import java.util.List;

public class CourseForReturn {
    private List<Course> courseList;

    public CourseForReturn() {
    }

    public CourseForReturn(List<Course> courseList) {
        this.courseList = courseList;
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
        return "CourseForReturn{courseList = " + courseList + "}";
    }
}
