package com.starnet.musicmanage.service;import com.starnet.musicmanage.bean.Android;import com.sun.org.apache.xpath.internal.operations.And;import java.util.List;/** * @InterfaceName AndroidService * @Description TODO * @Author SupreacyXXXXX * @Date 2020/7/20 * @Version 1.0 **/public interface AndroidService {    public List<Android> getAndroidList();    public boolean addAndroidDevice(Android android);    public boolean deleteAndroidDevice(List<Integer> ids);    public boolean updateAndroidDevice(Android android);    public boolean isValidDevice(String id, String name);}