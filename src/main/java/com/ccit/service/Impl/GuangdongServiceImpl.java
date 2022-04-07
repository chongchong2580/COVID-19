package com.ccit.service.Impl;

import com.ccit.dao.GuangdongDao;
import com.ccit.dao.ShanghaiDao;
import com.ccit.service.GuangdongService;
import com.ccit.service.ShanghaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GuangdongServiceImpl implements GuangdongService {

    @Autowired
    GuangdongDao guangdongDao;

    @Override
    public List<Map> findAllGuangdong() {
        return guangdongDao.findAllGuangdong();
    }

}
