package com.ccit.service.Impl;

import com.ccit.bean.Confirmed;
import com.ccit.dao.ConfirmedDao;
import com.ccit.service.ConfirmedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ConfirmedServiceImpl implements ConfirmedService {

    @Autowired
    ConfirmedDao confirmedDao;


    @Override
    public List<Map> findAllByProvince() {
        return confirmedDao.findAllByProvince();
    }

    @Override
    public List<Confirmed> findAll() {

        return confirmedDao.findAll();
    }
}
