package com.study.controller;

import com.study.domain.User;
import com.study.service.RouteService;
import com.study.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/peos")
public class PeoController {
    @Autowired
    private UserService userService;

    @GetMapping( "/{username}")
    public Result getByUserName(@PathVariable String username) {
        User user = userService.getUserByName(username);
        Integer code = user!= null ? Code.GET_PEO_OK : Code.GET_PEO_ERR;
        String msg = user != null ? "" : "数据查询失败，请重试！";
        return new Result(code,user,msg);
    }

    @PutMapping
    public Result put(@RequestBody User user){
       boolean flag= userService.put(user);
        Integer code = flag ? Code.PUT_PEO_OK : Code.PUT_PEO_ERR;
        String msg = flag ? "" : "添加失败，请重试！";
        return new Result(code,flag,msg);
    }
    @PostMapping
    public Result update(@RequestBody User user){
        boolean flag=userService.update(user);
        Integer code = flag ? Code.POST_PEO_OK : Code.POST_PEO_ERR;
        String msg = flag ? "" : "添加失败，请重试！";
        return new Result(code,flag,msg);
    }

}
