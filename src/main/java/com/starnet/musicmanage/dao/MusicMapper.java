package com.starnet.musicmanage.dao;

import com.starnet.musicmanage.bean.Music;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MusicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Music record);

    Music selectByPrimaryKey(Integer id);

    List<Music> selectAll();

    int updateByPrimaryKey(Music record);
}