package com.ccit.service.Impl;

import com.ccit.dao.BeijingDao;
import com.ccit.service.BeijingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class BeijingServiceImpl implements BeijingService {

    @Autowired
    BeijingDao beijingDao;

    @Override
    public List<Map> findAllBeijing() {
        return beijingDao.findAllBeijing();
    }
}
