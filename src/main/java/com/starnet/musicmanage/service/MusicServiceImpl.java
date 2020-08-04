package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.Music;
import com.starnet.musicmanage.dao.MusicMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName MusicServiceImpl
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/22
 * @Version 1.0
 **/

@Service
public class MusicServiceImpl implements MusicService{
    @Autowired
    private MusicMapper musicMapper;

    @Override
    public boolean addMusic(Music music) {
        try {
            musicMapper.insert(music);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateMusic(Music music) {
        try {
            musicMapper.updateByPrimaryKey(music);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<Music> getMusciList() {
        try {
            return musicMapper.selectAll();
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean deleteMusic(List<Integer> ids) {
        try {
            for (Integer id : ids){
                musicMapper.deleteByPrimaryKey(id);
            }
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
