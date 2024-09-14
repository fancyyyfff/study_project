package com.study.service;

import com.study.domain.Book;
import com.study.domain.Enjoy;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface EnjoyService {
    public boolean save(Enjoy enjoy);

    public String [] getAll();

    public boolean delete(int id);

}

