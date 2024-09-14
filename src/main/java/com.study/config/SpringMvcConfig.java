package com.study.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan({"com.study.controller","com.study.config"})
@EnableWebMvc
public class SpringMvcConfig {
}
