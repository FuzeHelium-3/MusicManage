package com.starnet.musicmanage.controller;

import com.starnet.musicmanage.bean.SysUser;
import com.starnet.musicmanage.service.UserService;
import com.starnet.musicmanage.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ClassName UserController
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/16
 * @Version 1.0
 **/

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public JsonResult userLogin(@RequestParam("username") String userName,
                                @RequestParam("password") String password){
        try{
            SysUser user = userService.userLogin(userName, password);
            if (user != null){
                return JsonResult.ok(user);
            }
        }catch (Exception e){
            e.printStackTrace();

        }
        return JsonResult.errorException("密码错误");
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public JsonResult getUserList(){
        try{
            List<SysUser> users = userService.userList();
            return JsonResult.ok(users);
        } catch (Exception e){
            e.printStackTrace();
        }
        return JsonResult.errorException("获取用户列表信息发生错误！");
    }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public JsonResult updateUser(@RequestBody SysUser user){
        try{
            userService.updateUser(user);
            return JsonResult.ok();
        }catch (Exception e){
            e.printStackTrace();
        }
        return JsonResult.errorMsg("更新失败");
    }
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public JsonResult addUser(@RequestBody SysUser user){
        System.out.println("addUserController");
        try{
            userService.addUser(user);
            return JsonResult.ok();
        }catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("添加失败");
        }
    }

    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    public JsonResult delUser(@RequestBody Map map){
        try {
            List<Integer> ids =(List) map.get("ids");
            if (userService.deleteUser(ids)){
                return JsonResult.ok();
            } else {
                return  JsonResult.errorMsg("删除失败");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return  JsonResult.errorMsg("删除失败");
    }
}
