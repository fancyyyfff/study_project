package com.study.service.impl;

import com.study.dao.EnjoyDao;
import com.study.dao.RouteDao;
import com.study.domain.Enjoy;
import com.study.service.EnjoyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnjoyServiceImpl implements EnjoyService {

    @Autowired
    private EnjoyDao enjoyDao;
    @Override
    public boolean save(Enjoy enjoy) {
        enjoyDao.add(enjoy.getId());
        return enjoyDao.save(enjoy);
    }

    @Override
    public String[] getAll() {
        return enjoyDao.getAll();
    }


    @Override
    public boolean delete(int id) {
        if(enjoyDao.delete(id)==true){
           return enjoyDao.update(id);
        }else {
            return false;
        }
    }
}
