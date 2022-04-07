package com.ccit.dao;

import com.ccit.bean.Confirmed;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ConfirmedDao {

    public List<Map> findAllByProvince();

    public List<Confirmed> findAll();
}
