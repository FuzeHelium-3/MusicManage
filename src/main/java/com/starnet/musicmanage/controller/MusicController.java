package com.starnet.musicmanage.controller;

import com.starnet.musicmanage.bean.Music;
import com.starnet.musicmanage.service.AndroidService;
import com.starnet.musicmanage.service.MusicService;
import com.starnet.musicmanage.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

/**
 * @ClassName MusicController
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/22
 * @Version 1.0
 **/

@RestController
public class MusicController {
    @Autowired
    private MusicService musicService;
    @Autowired
    private AndroidService androidService;

    @RequestMapping(value = "/musics", method = RequestMethod.GET)
    public JsonResult getMusicList(){
        try {
            List<Music> musics = musicService.getMusciList();
            return JsonResult.ok(musics);
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("获取音乐列表失败！");
        }
    }

    @RequestMapping(value = "/music", method = RequestMethod.POST)
    public JsonResult addMusic(@RequestBody Music music){
        try {
            if (musicService.addMusic(music)) {
                return JsonResult.ok();
            }
            return JsonResult.errorMsg("添加歌曲失败！");
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("添加歌曲失败！");
        }
    }

    @RequestMapping(value = "/music", method = RequestMethod.PUT)
    public JsonResult updateMusic(@RequestBody Music music){
        try {
            if (musicService.updateMusic(music)){
                return JsonResult.ok();
            }
            return JsonResult.errorMsg("修改歌曲信息失败！");
        } catch (Exception e){
            e.printStackTrace();
            return JsonResult.errorMsg("修改歌曲信息失败！");
        }
    }

    @RequestMapping(value = "/music", method = RequestMethod.DELETE)
    public JsonResult deleteMusic(@RequestBody Map map){
        try {
            List<Integer> ids =(List) map.get("ids");
            if (musicService.deleteMusic(ids)){
                return JsonResult.ok();
            } else {
                return JsonResult.errorMsg("删除失败");
            }
        } catch (Exception e){
            e.printStackTrace();
            return  JsonResult.errorMsg("删除失败");
        }
    }

    @RequestMapping(value = "/V1.0/songlist", method = RequestMethod.POST)
    public JsonResult postMusic(@RequestBody Map map){
        try {
            String deviceName = (String)map.get("deviceName");
            String deviceID = (String)map.get("deviceID");
            String songlist = (String)map.get("songlist");
            if (deviceName == null){
                return JsonResult.errorMsg("设备名为空");
            } else if (deviceID == null){
                return JsonResult.errorMsg("设备ID为空");
            } else if(songlist == null){
                return JsonResult.errorMsg("歌单为空");
            }
            if (androidService.isValidDevice(deviceID, deviceName)){
                return JsonResult.errorMsg("设备名或ID不合法");
            } else {
                return JsonResult.ok();
            }
        } catch (Exception e){
            e.printStackTrace();
            return  JsonResult.errorMsg("非法请求");
        }
    }
}
