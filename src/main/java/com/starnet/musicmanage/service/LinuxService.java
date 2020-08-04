package com.starnet.musicmanage.service;

import com.starnet.musicmanage.bean.Linux;

import java.util.List;
/**
 * @InterfaceName LinuxService
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/20
 * @Version 1.0
 **/
public interface LinuxService {
    public List<Linux> getLinuxList();
    public boolean addLinuxDevice(Linux linux);
    public boolean deleteLinuxDevice(List<Integer> ids);
    public boolean updateLinuxDevice(Linux linux);
    public boolean postAd(List<Integer> ids, String ad);
}
