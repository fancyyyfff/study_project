package com.study.service.impl;

import com.study.controller.SessionController;
import com.study.dao.CourseDao;
import com.study.domain.Course;
import com.study.domain.CourseForReturn;
import com.study.domain.CoursesWithName;
import com.study.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
@Service
public class CourseServiceImpl extends HttpServlet implements CourseService {

    @Autowired
    private CourseDao courseDao;

    private boolean loop=false;

    @Override
    public CourseForReturn getAll(String username) {
        List<Course> courseList = courseDao.getAll(username);
        CourseForReturn courseForReturn = new CourseForReturn(courseList);
        loop=true;
        return courseForReturn;
    }

    public boolean isSuccess() {
        return loop;
    }

    @Override
    public boolean reSet(CoursesWithName coursesWithName) {
        String username = coursesWithName.getUsername();
        //通过用户名获取用户
        if(courseDao.getAll(username)!=null){
            //如果用户名存在，把原来的全部内容删掉
            courseDao.delete(username);
        }
        //再新加对象
        List<Course> courseList = coursesWithName.getCourseList();
        for (int i = 0; i < courseList.size(); i++) {
            Integer id = courseList.get(i).getId();
            String course = courseList.get(i).getCourse();
            courseDao.save(id,course,username);
        }
        return true;
    }
}
