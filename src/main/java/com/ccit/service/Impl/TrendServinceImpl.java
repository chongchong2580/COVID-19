package com.ccit.service.Impl;

import com.ccit.dao.TrendDao;
import com.ccit.service.TrendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("trendService")
public class TrendServinceImpl implements TrendService {

    @Autowired
    TrendDao trendDao;

    @Override
    public List<Map> listTimeConfirmed() {
        return trendDao.listTimeConfirmed();
    }
}
