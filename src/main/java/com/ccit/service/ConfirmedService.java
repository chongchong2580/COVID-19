package com.ccit.service;

import com.ccit.bean.Confirmed;

import java.util.List;
import java.util.Map;

public interface ConfirmedService {

    public List<Map> findAllByProvince();

    public List<Confirmed> findAll();
}
