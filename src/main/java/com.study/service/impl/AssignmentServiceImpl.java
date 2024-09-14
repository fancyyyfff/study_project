package com.study.service.impl;

import com.study.dao.AssignmentDao;
import com.study.domain.Assignment;
import com.study.domain.AssignmentWithName;
import com.study.domain.AssignmentsForReturn;
import com.study.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentServiceImpl implements AssignmentService {
    @Autowired
    private AssignmentDao assignmentDao;

    private boolean flag=false;


    @Override
    public boolean isSuccess() {
        return flag;
    }

    @Override
    public AssignmentsForReturn getAllAssignments(String username) {
        List<Assignment> assignmentList = assignmentDao.getAllAssignments(username);
        AssignmentsForReturn assignmentsForReturn = new AssignmentsForReturn(assignmentList);
        flag=true;
        return assignmentsForReturn;
    }

    @Override
    public boolean reset(AssignmentWithName assignmentWithName) {
        //根据用户名，先删除所有数据
        String username = assignmentWithName.getUsername();
        assignmentDao.delete(username);
        //再根据用户名添加所有数据
        List<Assignment> assignmentList = assignmentWithName.getAssignmentList();
        for (int i = 0; i < assignmentList.size(); i++) {
            String finish = assignmentList.get(i).getFinish();
            String content = assignmentList.get(i).getContent();
            assignmentDao.save(finish,content,username);
        }
        return true;
    }

}
