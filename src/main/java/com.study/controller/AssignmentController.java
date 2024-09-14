package com.study.controller;

import com.study.domain.Assignment;
import com.study.domain.AssignmentWithName;
import com.study.domain.AssignmentsForReturn;
import com.study.domain.CoursesWithName;
import com.study.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/assignments")
public class AssignmentController {
    @Autowired
    private AssignmentService assignmentService;

    //获取所有的任务
    @GetMapping("/{username}")
    public Result getAllAssignment(@PathVariable String username) {
        AssignmentsForReturn allAssignments = assignmentService.getAllAssignments(username);
        boolean flag = assignmentService.isSuccess();
        return new Result(flag ? Code.GET_ASSIGNMENT_OK:Code.GET_ASSIGNMENT_ERR,allAssignments);
    }

    @PostMapping
    public Result reSet(@RequestBody AssignmentWithName assignmentWithName) {
        boolean loop = assignmentService.reset(assignmentWithName);
        Integer code = loop ? Code.SET_ASSIGNMENT_OK : Code.SET_ASSIGNMENT_ERR;
        String msg = loop ? "" : "添加失败，请重试！";
        return new Result(code,loop,msg);
    }
}
