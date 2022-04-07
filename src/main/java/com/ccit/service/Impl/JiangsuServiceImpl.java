package com.ccit.service.Impl;

import com.ccit.dao.JiangsuDao;
import com.ccit.service.JiangsuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class JiangsuServiceImpl implements JiangsuService {

    @Autowired
    JiangsuDao jiangsuDao;

    @Override
    public List<Map> findAll() {
        return jiangsuDao.findAll();
    }
}
