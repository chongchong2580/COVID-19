package com.ccit.controller;

import com.ccit.bean.Confirmed;
import com.ccit.service.ConfirmedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/confirmed",method = RequestMethod.POST)
public class ConfirmedController {

    @Autowired
    ConfirmedService confirmedService;

    @RequestMapping(value = "/listAll",method = RequestMethod.POST)
    public @ResponseBody List findAllByProvince() {
        List<Map> listAll = confirmedService.findAllByProvince();
        return listAll;
    }

    @RequestMapping(value = "/confirmedList",method = RequestMethod.POST)
    public String confirmedlist(Model model) {
        List<Confirmed> confirmedList = confirmedService.findAll();
        model.addAttribute("confirmedList",confirmedList);
        return "confirmedList";
    }
}
