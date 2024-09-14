package com.study.service;

import com.study.domain.Course;
import com.study.domain.CourseForReturn;
import com.study.domain.CoursesWithName;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface CourseService {
    public boolean isSuccess();
    public boolean reSet(CoursesWithName coursesWithName);
    //一跳转，回显全部数据
    public CourseForReturn getAll(String username);
}
