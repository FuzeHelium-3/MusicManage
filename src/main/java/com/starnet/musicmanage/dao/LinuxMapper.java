package com.starnet.musicmanage.dao;

import com.starnet.musicmanage.bean.Linux;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface LinuxMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Linux record);

    Linux selectByPrimaryKey(Integer id);

    List<Linux> selectAll();

    int updateByPrimaryKey(Linux record);
}