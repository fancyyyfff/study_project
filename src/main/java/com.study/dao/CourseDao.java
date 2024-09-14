package com.study.dao;

import com.study.domain.Course;
import com.study.domain.Course;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface CourseDao {


    @Insert("insert into tb_course(id,course,username) values(#{id},#{course},#{username})")
    public int save(@Param("id") Integer id,@Param("course") String course,@Param("username") String username);
    //获取所有的课程,用于回显数据
    @Select("select * from tb_course where username=#{username}")
    public List<Course> getAll(String username);
    @Delete("delete from tb_course where username=#{username}")
    public int delete(String username);

//    //根据Id查找库中是否有对象
//    @Select("select * from tb_course where id=#{id} and username=#{username}")
//    public Course getById(@Param("id") Integer id,@Param("username") String username);

//    @Update("update tb_course set course = #{course} where id = #{id} and username=#{username}")
//    public int updateById(@Param("course") String course,@Param("id") Integer id,@Param("username") String username);

}
