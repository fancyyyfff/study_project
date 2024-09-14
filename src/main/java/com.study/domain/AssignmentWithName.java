package com.study.domain;

import java.util.List;

public class AssignmentWithName {
    private String username;
    //集合或是Assignment对象

    private List<Assignment> assignmentList;


    public AssignmentWithName() {
    }

    public AssignmentWithName(String username, List<Assignment> assignmentList) {
        this.username = username;
        this.assignmentList = assignmentList;
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
     * @return assignmentList
     */
    public List<Assignment> getAssignmentList() {
        return assignmentList;
    }

    /**
     * 设置
     * @param assignmentList
     */
    public void setAssignmentList(List<Assignment> assignmentList) {
        this.assignmentList = assignmentList;
    }

    public String toString() {
        return "AssignmentWithName{username = " + username + ", assignmentList = " + assignmentList + "}";
    }
}
