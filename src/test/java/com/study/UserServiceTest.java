package com.study;

import com.study.config.SpringConfig;

import com.study.domain.User;
import com.study.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void testGetUserByName(){
        User userByName = userService.getUserByName("12332112345");
        System.out.println(userByName);
    }
    @Test
    public void testsave(){
        User user=new User("12345678900","123456");
        boolean save = userService.save(user);
        System.out.println(save);
    }
    @Test
    public void testIsExistUser(){
        User user = new User("12332112345", "1234");
        userService.isExistUser(user);
    }
}
