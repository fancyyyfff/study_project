package com.study.controller;

import com.study.domain.User;
import com.study.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
//@CrossOrigin(origins = {"http://localhost:8080/study_project_war"},maxAge = 4800,allowCredentials = "false")
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController extends HttpServlet {
    @Autowired
    private UserService userService;
    @PutMapping
    public Result login(@RequestBody User user,HttpServletRequest request){
        HttpSession session = request.getSession();
       // System.out.println("前端发送请求到了登录界面");
        boolean existUser = userService.isExistUser(user);
        if(existUser==true){
            session.setAttribute("username",user.getUsername());
        }
        Integer code = existUser ? Code.PUT_USER_OK : Code.PUT_USER_ERR;
        String msg = existUser ? "" : "密码跟账号不匹配";
        return new Result(code,existUser,msg);
    }


    @PostMapping
    public Result save(@RequestBody User user) {
        System.out.println("注册方法调用");
        boolean flag = userService.save(user);
        Integer code = flag ? Code.SAVE_USER_OK : Code.SAVE_USER_ERR;
        String msg = flag ? "" : "账户已存在！";
        return new Result(code,flag,msg);
    }




}
