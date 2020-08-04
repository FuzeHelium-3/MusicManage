package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.Music;
import java.util.List;

/**
 * @InterfaceName MusicService
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/22
 * @Version 1.0
 **/
public interface MusicService {
    public boolean addMusic(Music music);
    public boolean updateMusic(Music music);
    public List<Music> getMusciList();
    public boolean deleteMusic(List<Integer> ids);
}
