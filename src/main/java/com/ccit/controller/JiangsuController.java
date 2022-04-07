package com.ccit.controller;

import com.ccit.service.JiangsuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/jiangsu",method = RequestMethod.POST)
public class JiangsuController {

    @Autowired
    JiangsuService jiangsuService;

    @RequestMapping(value = "/findAll",method = RequestMethod.POST)
    public @ResponseBody List findAll() {
        List<Map> findList = jiangsuService.findAll();
        return findList;
    }
}
