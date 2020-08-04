package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.Linux;
import com.starnet.musicmanage.dao.LinuxMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName LinuxServiceImpl
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/20
 * @Version 1.0
 **/

@Service
public class LinuxServiceImpl implements LinuxService{
    @Autowired
    private LinuxMapper linuxMapper;

    @Override
    public List<Linux> getLinuxList() {
        try {
            return linuxMapper.selectAll();
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean addLinuxDevice(Linux linux) {
        try {
            linuxMapper.insert(linux);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteLinuxDevice(List<Integer> ids) {
        try {
            for (Integer id : ids){
                linuxMapper.deleteByPrimaryKey(id);
            }
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateLinuxDevice(Linux linux) {
        try {
            linuxMapper.updateByPrimaryKey(linux);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean postAd(List<Integer> ids, String ad) {
        try {
            for(Integer id : ids){
                Linux linux = linuxMapper.selectByPrimaryKey(id);
                linux.setAd(ad);
                linuxMapper.updateByPrimaryKey(linux);
            }
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
