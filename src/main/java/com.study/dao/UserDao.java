package com.study.dao;

import com.study.domain.Book;
import com.study.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface UserDao {

    //1.添加账户
    @Insert("insert into account (username,psword) values(#{username},#{psword})")
    public int save(User user);

    //2.通过账户名查询
    @Select("select * from account where username = #{username}")
    public User getUserByName(String username);
    //3.添加用昵称跟id
    //4.修改昵称跟图片
    @Update("update account set id = #{id}, alias = #{alias} where username = #{username}")
    public boolean put(User user);
    //5.修改密码
    @Update("update account set psword = #{psword} where username = #{username}")
    public boolean update(User user);






}
