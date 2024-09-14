package com.study.service;

import com.study.domain.Count;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CountService {

    public boolean save(Count count);


    public boolean delete(String username);

    public Count getCount(String username);
}
