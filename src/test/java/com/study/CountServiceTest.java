package com.study;

import com.study.config.SpringConfig;
import com.study.dao.CountDao;
import com.study.dao.CourseDao;
import com.study.domain.Count;
import com.study.service.CountService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class CountServiceTest {
    @Autowired
    private CountService countService;

    @Test
    public void testSave(){
        Count count=new Count("2020-10-10","2020-11-10","124");
        count.setUsername("12345678900");
        System.out.println(countService.save(count));

    }
    @Test
    public void delete(){
        Count count=new Count("2020-10-10","2020-11-10","12345678901");
        System.out.println(countService.delete(count.getUsername()));
    }
}
