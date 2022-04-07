package com.ccit.controller;

import com.ccit.service.GuangdongService;
import com.ccit.service.JiangsuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/guangdong",method = RequestMethod.POST)
public class GuangdongController {

    @Autowired
    GuangdongService guangdongService;

    @RequestMapping(value = "/findAllGuangdong",method = RequestMethod.POST)
    public @ResponseBody List findAllGuangdong() {
        List<Map> findList = guangdongService.findAllGuangdong();
        return findList;
    }
}
