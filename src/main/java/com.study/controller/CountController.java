package com.study.controller;

import com.study.domain.Count;

import com.study.service.CountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@CrossOrigin
@RestController
@RequestMapping("/counts")
public class CountController extends HttpServlet{
    @Autowired
    private CountService countService;
    //已成功
    @PostMapping
    public Result save(@RequestBody Count count,HttpServletRequest request) {
        boolean flag=countService.save(count);
//        String username = SessionController.getUser(request);
//        count.setUsername(username);
//        //获取当前年月日
//        SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd");
//        Date date = new Date(System.currentTimeMillis());
//        String star = formatter.format(date);
//        count.setStar(star);
//        String num = countService.save(count);
//        boolean flag;
//        if(num==null){
//            flag=false;
//        }else {
//            flag=true;
//        }
        Integer code = flag ? Code.SAVE_COUNT_OK : Code.SAVE_COUNT_ERR;
        String msg = flag ? "" : "添加失败，请重试！";
        return new Result(code,count,msg);

    }

//已成功
    @PutMapping("/{username}")
    public Result getCount(@PathVariable String username ,HttpServletRequest request){
        Count count=countService.getCount(username);
//        String username = SessionController.getUser(request);
//        Count count=countService.getCount(username);
        boolean flag;
//        String num;
        if(count==null){
            flag=false;
//            num=null;
        }else {
            flag=true;
//            //获取当前年月日
//            SimpleDateFormat dft=new SimpleDateFormat("yyyy-MM-dd");
//            Date date = new Date(System.currentTimeMillis());
//            String star = dft.format(date);
//            count.setStar(star);
//            try {
//                Date star1 = dft.parse(count.getStar());
//                Date fin1= dft.parse(count.getFin());
//                long starTime = star1.getTime();
//                long finTime = fin1.getTime();
//                long n = finTime - starTime;
//                num=String.valueOf(n/24/60/60/1000);
//            } catch (ParseException e) {
//                throw new RuntimeException(e);
//            }
        }
        Integer code = flag ? Code.GET_COUNT_OK : Code.GET_COUNT_ERR;
        String msg = flag ? "" : "获取失败，请重试！";
        return new Result(code,count,msg);
    }

    //已成功
    @DeleteMapping("/{username}")
    public Result delete(@PathVariable String username, HttpServletRequest request) {
//        String username = SessionController.getUser(request);
        boolean flag = countService.delete(username);
        Integer code = flag ? Code.DELETE_COUNT_OK : Code.DELETE_COUNT_ERR;
        String msg = flag ? "" : "删除失败,还没有内容！";
        return new Result(code,flag,msg);
    }
}
