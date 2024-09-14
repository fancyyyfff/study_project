package com.study.domain;

import java.util.List;

public class AssignmentsForReturn {
    private List<Assignment> assignmentList;

    public AssignmentsForReturn() {
    }

    public AssignmentsForReturn(List<Assignment> assignmentList) {
        this.assignmentList = assignmentList;
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
        return "AssignmentsForReturn{assignmentList = " + assignmentList + "}";
    }
}
