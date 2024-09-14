package com.study.dao;


import com.study.domain.Enjoy;
import org.apache.ibatis.annotations.*;

public interface EnjoyDao {
    @Insert("insert into enjoy (id,things) values(#{id},#{things})")
    public boolean save(Enjoy enjoy);
    @Select("select things from enjoy")
    public String[] getAll();
    @Update("update enjoy set id = id-1 where id >#{id}")
    public boolean update(@Param("id") int id);

    @Update("update enjoy set id = id+1 where id >=#{id}")
    public boolean add(@Param("id") int id);
    @Delete("delete from enjoy where id = #{id}")
    public boolean delete(@Param("id") int id);
}
