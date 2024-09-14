package com.study.service;

import com.study.domain.Assignment;
import com.study.domain.AssignmentWithName;
import com.study.domain.AssignmentsForReturn;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface AssignmentService {
    /*
     * 待办有四个功能：
     * 添加：未完成 finish=false，加表1
     * 暂时删除：点击已完成 finish=true，删表1，放表2
     * 取消删除：从表2中找，记录下来，放到表1，把表2的记录删除
     * 永久删除：删除表2的数据,如果数据还在表1，就删表1
     * */


    /*
    * 发送：用户名、
    * 1.根据用户名回显全部数据，返回不用加用户名
    * 2.根据用户名，先删除所有数据
    * 3.再根据用户名添加所有数据
    *2和3合并为重置方法
    * */

    public boolean isSuccess();
    //获取所有的数据
    public AssignmentsForReturn getAllAssignments(String username);

    public boolean reset(AssignmentWithName assignmentWithName);

}
