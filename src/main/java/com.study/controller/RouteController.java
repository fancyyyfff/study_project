package com.study.controller;

import com.study.domain.Route;

import com.study.service.RouteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.LinkedList;

@CrossOrigin
@RestController
@RequestMapping("/routes")
public class RouteController extends HttpServlet {
    @Autowired
    private RouteService routeService;
    //已成功
    @PostMapping
    public Result saveTarget(@RequestBody Route route,HttpServletRequest request) {
//        String username = SessionController.getUser(request);
        Route route1=routeService.getById(route.getId(),route.getUsername());
//        route.setUsername(username);
        if(route1==null){
            boolean flag =routeService.saveTarget(route);
            Integer code = flag ? Code.SAVE_TARGET_OK : Code.SAVE_TARGET_ERR;
            String msg = flag ? "" : "添加失败，请重试！";
            return new Result(code,flag,msg);
        }else {
            boolean flag = routeService.updateTarget(route);
            Integer code = flag ? Code.SAVE_TARGET_OK : Code.SAVE_TARGET_ERR;
            String msg = flag ? "" : "添加失败，请重试！";
            return new Result(code,flag,msg);
        }

    }

    //已成功
    @PutMapping
    public Result saveContent(@RequestBody Route route,HttpServletRequest request) {
//        String username = SessionController.getUser(request);
        Route route1=routeService.getById(route.getId(),route.getUsername());
//        route.setUsername(username);
        if(route1==null){
            boolean flag =routeService.saveContent(route);
            Integer code = flag ? Code.SAVE_CONTENT_OK : Code.SAVE_CONTENT_ERR;
            String msg = flag ? "" : "获取失败，请重试！";
            return new Result(code,flag,msg);
        }else {
            boolean flag = routeService.updateContent(route);
            Integer code = flag ?Code.SAVE_CONTENT_OK : Code.SAVE_CONTENT_ERR;
            String msg = flag ? "" : "获取失败，请重试！";
            return new Result(code,flag,msg);        }
    }
    @GetMapping ("/{username}")//传username，不是route对象
    public Result getAll(@PathVariable String username,HttpServletRequest request){
//        String username = SessionController.getUser(request);
        LinkedList<Route> route = routeService.getAll(username);
        boolean flag;
        if(route==null)
            flag=false;
        else
            flag=true;
        Integer code = flag ?Code.GET_ROUTE_OK : Code.GET_ROUTE_ERR;
        String msg = flag ? "" : "获取失败，请重试！";
        return new Result(code,route,msg);
    }
//    //已成功
//    @DeleteMapping("/{id}")
//    public Result delete(@PathVariable int id,HttpServletRequest request) {
//        String username = SessionController.getUser(request);
//        boolean flag = routeService.delete(id, username);
//        return new Result(flag ? Code.DELETE_OK:Code.DELETE_ERR,flag);
//    }
//    public  String getUser(HttpServletRequest request){
//        HttpSession session = request.getSession();
//        return (String) session.getAttribute("username");
//
//    }
}

