package com.ccit.service;

import com.ccit.bean.Increment;

import java.util.List;
import java.util.Map;

public interface IncrementService {
    public List<Map> listTopIncrement();

    public List<Increment> findAllByConfirmedIncrement();
}
