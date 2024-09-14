package com.study.service.impl;

import com.study.dao.BookDao;
import com.study.dao.UserDao;
import com.study.domain.User;
import com.study.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.Name;
import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    //登录
    public boolean isExistUser(User user){
        User user1 = userDao.getUserByName(user.getUsername());
        if(user!=null){
          if(user1.getPsword().equals(user.getPsword())){
              return true;
          }
        }
        return false;
    }


    public boolean save(User user) {
        String name=user.getUsername();
        if(getUserByName(name)==null){
            userDao.save(user);
            return true;
        }else {
            return false;
        }
    }

    public User getUserByName(String username) {
        User user=userDao.getUserByName(username);
        if(user==null){
            return null;
        }else{
            System.out.println("获取到了用户use"+user);
            return user;
        }
    }

    @Override
    public boolean put(User user) {
        return userDao.put(user);
    }

    @Override
    public boolean update(User user) {
        return userDao.update(user);
    }


}
