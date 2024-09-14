package com.study.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.rmi.registry.Registry;
//解决跨域问题
@Configuration
public class CrosConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("*/api/**")
        .allowedHeaders("*").allowedMethods("POST","PUT","GET","OPTIONS","DELETE").allowCredentials(true).allowedOrigins("*").maxAge(3600);
    }
}
