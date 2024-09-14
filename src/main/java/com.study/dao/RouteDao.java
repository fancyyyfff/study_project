package com.study.dao;

import com.study.domain.Route;
import org.apache.ibatis.annotations.*;

import java.util.LinkedList;
import java.util.List;

public interface RouteDao {
    @Insert("insert into route(id,target,username) values(#{id},#{target},#{username})")
    public int saveTarget(Route route);

    @Insert("insert into route(id,content,username) values(#{id},#{content},#{username})")
    public int saveContent(Route route);

    @Update("update route set target = #{target}  where id = #{id} and username=#{username}")
    public int updateTarget(Route route);

    @Update("update route set content = #{content}  where id = #{id} and username=#{username}")
    public int updateContent(Route route);

    @Select("select * from route where id = #{id} and username=#{username}")
    public Route getById(@Param("id") int id,@Param("username") String username);
    @Delete("delete from route where id = #{id} and username=#{username}")
    public int delete(@Param("id") int id,@Param("username") String username);

    @Select("select * from route where  username=#{username}")
    public LinkedList<Route> getAll(String username);


}
