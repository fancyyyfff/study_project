package com.study.dao;

import com.study.domain.Count;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;


public interface CountDao {

    @Insert("insert into countdown(username,task,fin) values(#{username},#{task},#{fin})")
    public boolean save(Count count);

    //根据Id查找库中是否有对象
    @Select("select * from countdown where username=#{username}")
    public Count getByUsername(String username);

    @Delete("delete from countdown where username = #{username}")
    public boolean delete(String username);



}
