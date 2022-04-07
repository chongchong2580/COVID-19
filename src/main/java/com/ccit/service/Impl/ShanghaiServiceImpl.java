package com.ccit.service.Impl;

import com.ccit.dao.ShanghaiDao;
import com.ccit.service.ShanghaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ShanghaiServiceImpl implements ShanghaiService {

    @Autowired
    ShanghaiDao shanghaiDao;

    @Override
    public List<Map> findAllShanghai() {
        return shanghaiDao.findAllShanghai();
    }
}
