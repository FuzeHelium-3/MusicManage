package com.starnet.musicmanage.controller;

import com.starnet.musicmanage.bean.Linux;
import com.starnet.musicmanage.service.LinuxService;
import com.starnet.musicmanage.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ClassName LinuxController
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/20
 * @Version 1.0
 **/

@RestController
public class LinuxController {
    @Autowired
    private LinuxService linuxService;

    @RequestMapping(value = "linuxes", method = RequestMethod.GET)
    public JsonResult getAllLinuxList(){
        try {
            List<Linux> linuxes = linuxService.getLinuxList();
            return JsonResult.ok(linuxes);
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("获取Linux设备列表失败！");
        }
    }

    @RequestMapping(value = "linux", method = RequestMethod.POST)
    public JsonResult addLinuxDevice(@RequestBody Linux linux){
        try {
            boolean result = linuxService.addLinuxDevice(linux);
            if (result){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("添加Linux设备信息失败！");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("添加Linux设备信息失败！");
        }
    }

    @RequestMapping(value = "linux", method = RequestMethod.DELETE)
    public JsonResult delLinuxDevice(@RequestBody Map map){
        try {

            List<Integer> ids =(List) map.get("ids");
            if (linuxService.deleteLinuxDevice(ids)){
                return JsonResult.ok();
            } else {
                return  JsonResult.errorMsg("删除失败");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("删除Linux设备失败！");
        }
    }

    @RequestMapping(value = "linux", method = RequestMethod.PUT)
    public JsonResult updateLinuxDevice(@RequestBody Linux linux){
        try {
            boolean result = linuxService.updateLinuxDevice(linux);
            if (result){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("更新Linux设备信息失败！");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("更新Linux设备信息失败！");
        }
    }

    @RequestMapping(value = "/linux/ad", method = RequestMethod.POST)
    public JsonResult postAd(@RequestBody Map map){
        try {
            List<Integer> ids = (List<Integer>) map.get("ids");
            String adContent = (String) map.get("ad");
            boolean result = linuxService.postAd(ids, adContent);
            if (result){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("推送广告失败！");
            }
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("推送广告失败！");
        }
    }
}
