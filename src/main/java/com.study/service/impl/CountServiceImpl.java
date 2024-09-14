package com.study.service.impl;

import com.study.dao.CountDao;
import com.study.domain.Count;
import com.study.service.CountService;
import javafx.scene.input.DataFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class CountServiceImpl implements CountService {
    @Autowired
    private CountDao countDao;

    @Override
    public boolean save(Count count) {
        if(countDao.getByUsername(count.getUsername())==null){
            return countDao.save(count);
        }else {
            if(countDao.delete(count.getUsername())==true){
               return countDao.save(count);
            }else{
                return false;
            }
        }
    }

    @Override
    public boolean delete( String username) {
        return countDao.delete(username);

    }
    @Override
    public Count getCount(String username) {
        if(countDao.getByUsername(username)==null){
            return null;
        }else {
            return countDao.getByUsername(username);
        }
    }
}
