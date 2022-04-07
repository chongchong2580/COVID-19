package com.ccit.controller;

import com.ccit.bean.Increment;
import com.ccit.service.IncrementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/increment",method = RequestMethod.POST)
public class IncrementController {

    @Autowired
    IncrementService incrementService;

    @RequestMapping(value = "/top",method = RequestMethod.POST)
    public @ResponseBody List listTopIncrement() {
        List<Map> listTopIncrement = incrementService.listTopIncrement();
        return listTopIncrement;
    }

    @RequestMapping(value = "/listAll",method = RequestMethod.POST)
    public String listAll(Model model) {
        List<Increment> listAll = incrementService.findAllByConfirmedIncrement();
        System.out.println(listAll);
        model.addAttribute("listAll",listAll);
        return "listAll";
    }
}
