package com.study.dao;

import com.study.domain.Assignment;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface AssignmentDao {

    //添加数据
    @Insert("insert into tb_assignment(finish,content,username) values(#{finish},#{content},#{username})")
    public int save(@Param("finish")String finish,@Param("content") String content,@Param("username") String username);

    //删除
    @Delete("delete from tb_assignment where username=#{username}")
    public int delete(String username);


    //查询表的全部数据 -->为了下次进入还能够显示数据，getAll的时候也需要查询已完成的
    @Select("select * from tb_assignment where username=#{username}")
    public List<Assignment> getAllAssignments(String username);
}
