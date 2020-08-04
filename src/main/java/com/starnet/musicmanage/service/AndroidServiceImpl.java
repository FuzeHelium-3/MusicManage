package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.Android;
import com.starnet.musicmanage.dao.AndroidMapper;
import com.sun.org.apache.xpath.internal.operations.And;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName AndroidServiceImpl
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/20
 * @Version 1.0
 **/

@Service
public class AndroidServiceImpl implements AndroidService{
    @Autowired
    private AndroidMapper androidMapper;

    @Override
    public List<Android> getAndroidList() {
        try {
            return androidMapper.selectAll();
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean addAndroidDevice(Android android) {
        try {
            androidMapper.insert(android);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteAndroidDevice(List<Integer> ids) {
        try {
            for (Integer id : ids){
                androidMapper.deleteByPrimaryKey(id);
            }
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateAndroidDevice(Android android) {
        try {
            androidMapper.updateByPrimaryKey(android);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean isValidDevice(String id, String name){
        Integer idInt = Integer.valueOf(id);
        Android android = androidMapper.selectByPrimaryKey(idInt);
        if (android == null){
            return false;
        } else {
            if (android.getName().equals(name)){
                return true;
            } else {
                return false;
            }
        }
    }
}
