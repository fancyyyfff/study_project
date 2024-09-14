package com.study;

import com.study.config.SpringConfig;
import com.study.dao.CourseDao;
import com.study.domain.Course;
import com.study.domain.CourseForReturn;
import com.study.domain.CoursesWithName;
import com.study.service.CourseService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class CourseServiceTest {
    @Autowired
    private CourseService courseService;
    @Autowired
    private CourseDao courseDao;
    @Test
    public void testReSet(){
        System.out.println("test方法被运行");
        Course course1 = new Course(3, "数据结构");
        Course course2 = new Course(6, "数据结构");
        List<Course> courseList=new ArrayList<Course>();
        courseList.add(course1);
        courseList.add(course2);
        String username="12332112345";
        CoursesWithName coursesWithName = new CoursesWithName(username, courseList);
        boolean b = courseService.reSet(coursesWithName);
        System.out.println("重新设置后结果是"+b);

    }

    @Test
    public void testGetAll(){
        String username="12332112345";
        CourseForReturn all = courseService.getAll(username);
        List<Course> courseList = all.getCourseList();
        for (int i = 0; i < courseList.size(); i++) {
            System.out.println(courseList.get(i));
        }
    }


}
