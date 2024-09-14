package com.study;

import com.study.config.SpringConfig;

import com.study.dao.RouteDao;
import com.study.domain.Route;
import com.study.service.RouteService;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.RouteMatcher;

import java.util.LinkedList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class RouteServiceTest {
    @Autowired
    private RouteService routeService;

    @Autowired
    private RouteDao routeDao;

    @Test
    public void text(){
        System.out.println("wrq");
    }
    @Test
    public void textSave(){
       System.out.println("12421");
        Route route =new Route(5,"1234560","15707532080");
        int n=routeDao.saveTarget(route);
//        boolean save = routeService.saveTarget(route);
        System.out.println(n);
    }
    @Test
    public void TextGet(){
        LinkedList<Route> b=routeService.getAll("12345678901");
        System.out.println(b);

    }
    @Test
    public void textTarget(){
        System.out.println("12421");
        Route route =new Route(11,"1234560","gjs","12345689876");
        int n=routeDao.saveContent(route);
//        boolean save = routeService.saveTarget(route);
        System.out.println(n);
    }
}
