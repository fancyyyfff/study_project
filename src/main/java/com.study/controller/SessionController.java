package com.study.controller;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Service
public abstract class SessionController extends HttpServlet {
    public static String getUser(HttpServletRequest request){
        HttpSession session = request.getSession();
        return (String) session.getAttribute("username");
    }
}
