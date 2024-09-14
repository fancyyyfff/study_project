package com.study;

import com.study.config.SpringConfig;
import com.study.dao.EnjoyDao;
import com.study.service.EnjoyService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class EnjoyServiceTest {
    @Autowired
    private EnjoyService enjoyService;
    @Autowired
    private EnjoyDao enjoyDao;

    @Test
    public void delete(){
        boolean delete = enjoyService.delete(4);
        System.out.println(delete);
    }
    @Test
    public void add(){
        boolean delete = enjoyDao.add(0);
        System.out.println(delete);
    }
}

