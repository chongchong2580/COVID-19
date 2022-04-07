package com.ccit.dao;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface JiangsuDao {

    public List<Map> findAll();
}
