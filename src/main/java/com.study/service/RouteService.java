package com.study.service;

import com.study.domain.Route;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;

@Transactional
public interface RouteService {
    public boolean saveTarget(Route route);

    public boolean saveContent(Route route);

    public boolean updateTarget(Route route);

    public boolean updateContent(Route route);

    public Route getById(int id,String username);
    public  boolean delete(int id,String username);
    public LinkedList<Route> getAll(String username);


}
