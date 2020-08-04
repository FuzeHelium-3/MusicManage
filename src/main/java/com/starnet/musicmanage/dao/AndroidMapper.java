package com.starnet.musicmanage.dao;

import com.starnet.musicmanage.bean.Android;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AndroidMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Android record);

    Android selectByPrimaryKey(Integer id);

    List<Android> selectAll();

    int updateByPrimaryKey(Android record);
}