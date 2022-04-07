package com.ccit.controller;

import com.ccit.service.TrendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/trend",method = RequestMethod.POST)
public class TrendController {

    @Autowired
    TrendService trendService;

    @RequestMapping(value = "/time",method = RequestMethod.POST)
    public @ResponseBody List listTimeConfirmed() {
        List<Map> listTimeConfirmed = trendService.listTimeConfirmed();
        return listTimeConfirmed;
    }

}
