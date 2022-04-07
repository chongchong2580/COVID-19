package com.ccit.controller;

import com.ccit.service.ShanghaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/shanghai",method = RequestMethod.POST)
public class ShanghaiController {

    @Autowired
    ShanghaiService shanghaiService;

    @RequestMapping(value = "/findAllShanghai",method = RequestMethod.POST)
    public @ResponseBody List findAllShanghai() {
        List<Map> findList = shanghaiService.findAllShanghai();
        return findList;
    }
}
