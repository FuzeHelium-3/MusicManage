package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.SysUser;
import java.util.List;
/**
 * @InterfaceName UserService
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/16
 * @Version 1.0
 **/

public interface UserService{
    public SysUser userLogin(String userName, String password);
    public List<SysUser> userList();
    public boolean updateUser(SysUser user);
    public boolean addUser(SysUser user);
    public boolean deleteUser(List<Integer> ids);
}
