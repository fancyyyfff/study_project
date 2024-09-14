package com.study;

import com.study.config.SpringConfig;
import com.study.domain.Assignment;
import com.study.domain.AssignmentWithName;
import com.study.domain.AssignmentsForReturn;
import com.study.service.AssignmentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class AssignmentServiceTest {
    @Autowired
    private AssignmentService assignmentService;
   @Test
   public void testGetAllAssignments(){
       AssignmentsForReturn allAssignments = assignmentService.getAllAssignments("12332112345");
       List<Assignment> assignmentList = allAssignments.getAssignmentList();
       for (int i = 0; i < assignmentList.size(); i++) {
           System.out.println(assignmentList.get(i));
       }
       System.out.println(assignmentService.isSuccess());

   }

    @Test
    public void testReset(){
        Assignment assignment = new Assignment("false", "完成项目");
        Assignment assignment1 = new Assignment("true", "项目通过");
        List<Assignment> assignments = new ArrayList<Assignment>();
        assignments.add(assignment);
        assignments.add(assignment1);
        AssignmentWithName assignmentWithName = new AssignmentWithName("12332112345", assignments);
        boolean reset = assignmentService.reset(assignmentWithName);
    }

}
