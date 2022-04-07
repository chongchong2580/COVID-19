package com.ccit.dao;

import com.ccit.bean.Increment;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface IncrementDao {

    public List<Map> listTopIncrement();

    public List<Increment> findAllByConfirmedIncrement();
}
