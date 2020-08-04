package com.starnet.musicmanage.controller;

import com.starnet.musicmanage.bean.Android;
import com.starnet.musicmanage.service.AndroidService;
import com.starnet.musicmanage.utils.JsonResult;
import com.sun.org.apache.xpath.internal.operations.And;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ClassName AndroidController
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/20
 * @Version 1.0
 **/

@RestController
public class AndroidController {
    @Autowired
    private AndroidService androidService;

    @RequestMapping(value = "/androids", method = RequestMethod.GET)
    public JsonResult getAllAndroidList(){
        System.out.println("test");
        return JsonResult.ok();
    }

    @RequestMapping(value = "/android", method = RequestMethod.POST)
    public JsonResult addAndroidDevice(@RequestBody Android android){
        try {
            boolean result = androidService.addAndroidDevice(android);
            if (result){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("添加安卓设备失败！");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("添加安卓设备失败！");
        }
    }

    @RequestMapping(value = "/android", method = RequestMethod.PUT)
    public JsonResult updateAndroidDevice(@RequestBody Android android){
        try {
            boolean result = androidService.updateAndroidDevice(android);
            if (result){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("更新安卓设备失败!");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("更新安卓设备失败!");
        }
    }

    @RequestMapping(value = "/android", method = RequestMethod.DELETE)
    public JsonResult delAndroidDevice(@RequestBody Map map){
        try {
            List<Integer> ids =(List) map.get("ids");
            if (androidService.deleteAndroidDevice(ids)){
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
