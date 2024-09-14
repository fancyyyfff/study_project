package com.study.controller;

import com.study.domain.Course;
import com.study.domain.CourseForReturn;
import com.study.domain.CoursesWithName;
import com.study.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/courses")
public class CourseController extends HttpServlet{
    @Autowired
    private CourseService courseService;
    //返回全部数据，返回对象（参数是集合
    @PostMapping
    public Result reSet(@RequestBody CoursesWithName coursesWithName) {
        System.out.println("jdjjdah");
        boolean loop = courseService.reSet(coursesWithName);
        System.out.println("hhhh");
        Integer code = loop ? Code.SET_COURSE_OK : Code.SET_COURSE_ERR;
        String msg = loop ? "" : "添加失败，请重试！";
        return new Result(code,loop,msg);
    }

    //一跳转，回显全部数据:
    @GetMapping("/{username}")
    public Result getAll(@PathVariable String username) {
        CourseForReturn courseList = courseService.getAll(username);
        boolean loop = courseService.isSuccess();
        return new Result(loop ? Code.GET_COURSE_OK:Code.GET_COURSE_ERR,courseList);
    }
}
