package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.SysUser;
import com.starnet.musicmanage.dao.SysUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/16
 * @Version 1.0
 **/

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private SysUserMapper sysUserMapper;

    @Override
    public SysUser userLogin(String userName, String password) {
        SysUser user = sysUserMapper.selectByUserName(userName);
        if (user.getPassword().equals(password)){
            return user;
        }
        return null;
    }

    @Override
    public List<SysUser> userList(){
        List<SysUser> users = sysUserMapper.selectAll();
        return users;
    }

    @Override
    public boolean updateUser(SysUser user){
        try {
            sysUserMapper.updateByPrimaryKey(user);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean addUser(SysUser user){
        try {
            sysUserMapper.insert(user);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteUser(List<Integer> ids){
        try {
            for (Integer id : ids) {
                int tmpId = id.intValue();
                Long tmpId2 = new Long(tmpId);
                sysUserMapper.deleteByPrimaryKey(tmpId2);
            }
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }


}
