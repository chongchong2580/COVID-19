package com.ccit.service.Impl;

import com.ccit.bean.Increment;
import com.ccit.dao.IncrementDao;
import com.ccit.service.IncrementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("incrementService")
public class IncrementServiceImpl implements IncrementService {

    @Autowired
    IncrementDao incrementDao;

    @Override
    public List<Map> listTopIncrement() {
        return incrementDao.listTopIncrement();
    }

    @Override
    public List<Increment> findAllByConfirmedIncrement() {
        return incrementDao.findAllByConfirmedIncrement();
    }
}
