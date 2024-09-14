package com.study.service.impl;

import com.study.dao.RouteDao;

import com.study.domain.Route;
import com.study.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class RouteServiceImpl implements RouteService {
    @Autowired
    private RouteDao routeDao;

    public boolean saveTarget(Route route){
        return routeDao.saveTarget(route)>0;
    }

    public boolean saveContent(Route route){
        return routeDao.saveContent(route)>0;

    }

    public boolean updateTarget(Route route){
        return routeDao.updateTarget(route)>0;
    }

    public boolean updateContent(Route route){
        return routeDao.updateContent(route)>0;
    }


    public Route getById(int id,String username){
        return routeDao.getById(id,username);
    }

    @Override
    public boolean delete(int id,String username) {
        if(routeDao.getById(id,username).getContent()==null){
            return true;
        }else {
            routeDao.delete(id,username);
            return true;
        }
    }

    @Override
    public LinkedList<Route> getAll(String username) {
        return  routeDao.getAll(username);
    }


}
