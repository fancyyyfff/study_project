package com.study.service;

import com.study.domain.User;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface UserService {
    /**
     * 判断用户是否存在
     * @param
     * @return
     */
    public boolean isExistUser(User user);
    /**
     * 保存
     * @param user
     * @return
     */
    public boolean save(User user);



    /**
     * 按用户名查询
     * @param username
     * @return
     */
    public User getUserByName(String username);
    public boolean put(User user);
    public boolean update(User user);
}


