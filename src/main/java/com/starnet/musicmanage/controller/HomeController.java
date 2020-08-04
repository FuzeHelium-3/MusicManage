package com.starnet.musicmanage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName HomeController
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/16
 * @Version 1.0
 **/

@Controller
public class HomeController {

    @RequestMapping(value = "/controller")
    public String homePage(){
        return "forward:/web/login.html";
    }
}
