(function($) {

})($);


$(function($){
    console.log(sessionStorage.getItem("admin"));

    var $table = $("#usertab");

    function initUserManage(){
        $table.bootstrapTable('destroy');
        console.log("userManage");
        $table.bootstrapTable({
            url:"/users",
            method:"GET",
            height:'600px',
            responseHandler : function(res){
                console.log(res);
                return res["data"];
            },

            queryParams : function (params) {
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            },
            columns:[
                {
                    field:'select',
                    checkbox:true,
                    align:'center',
                    valign:'middle'
                },{
                    title:'编号',
                    field:'id',
                    align:'center',
                    valign:'middle'
                },{
                    title:'用户名',
                    field:'username',
                    align:'center',
                    valign:'middle'
                },{
                    title:'性别',
                    field:'sex',
                    align:'center',
                    valign:'middle',
                    formatter:function (value, row, index) {
                        return ((typeof(value)!= "undefined") &&
                            (value == 0)) ? "男" : "女";
                    }
                },{
                    title:'年龄',
                    field:'age',
                    align:'center',
                    valign:'middle'
                },{
                    title:'电话',
                    field:'mobilePhone',
                    align:'center',
                    valign:'middle'
                },{
                    title:'住址',
                    field:'address',
                    align:'center',
                    valign:'middle'
                }
            ]

        });
    }

    function initAndroidManage(){
        $table.bootstrapTable('destroy');
        console.log("androidManage");
        $table.bootstrapTable({
            url:"/androids",
            method:"GET",
            height:'600px',
            responseHandler : function(res){
                console.log(res);
                return res["data"];
            },

            queryParams : function (params) {
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            },
            columns:[
                {
                    field:'select',
                    checkbox:true,
                    align:'center',
                    valign:'middle'
                },{
                    title:'ID',
                    field:'id',
                    align:'center',
                    valign:'middle'
                },{
                    title:'编号',
                    field:'no',
                    align:'center',
                    valign:'middle'
                },{
                    title:'设备名',
                    field:'name',
                    align:'center',
                    valign:'middle'
                },{
                    title:'在线状态',
                    field:'status',
                    align:'center',
                    valign:'middle',
                    formatter:function (value, row, index) {
                        return ((typeof(value)!= "undefined") &&
                            (value == 0)) ? "离线" : "在线";
                    }
                }
            ]

        });
    }

    function initLinuxManage(){
        $table.bootstrapTable('destroy');
        console.log("linuxManage");
        $table.bootstrapTable({
            url:"/linuxes",
            method:"GET",
            height:'600px',
            responseHandler : function(res){
                return res["data"];
            },

            queryParams : function (params) {
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            },
            columns:[
                {
                    field:'select',
                    checkbox:true,
                    align:'center',
                    valign:'middle'
                },{
                    title:'ID',
                    field:'id',
                    align:'center',
                    valign:'middle'
                },{
                    title:'编号',
                    field:'no',
                    align:'center',
                    valign:'middle'
                },{
                    title:'设备名',
                    field:'name',
                    align:'center',
                    valign:'middle'
                },{
                    title:'在线状态',
                    field:'status',
                    align:'center',
                    valign:'middle',
                    formatter:function (value, row, index) {
                        return ((typeof(value)!= "undefined") &&
                            (value == 0)) ? "离线" : "在线";
                    }
                },{
                    title:'广告信息',
                    field:'ad',
                    align:'center',
                    valign:'middle'
                }
            ]

        });
    }

    function initMusicManage(){
        $table.bootstrapTable('destroy');
        $table.bootstrapTable({
            url:"/musics",
            method:"GET",
            height:'600px',
            search:true,
            responseHandler : function(res){
                return res["data"];
            },
            queryParams : function (params) {
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            },
            columns:[
                {
                    field:'select',
                    checkbox:true,
                    align:'center',
                    valign:'middle'
                },{
                    title:'ID',
                    field:'id',
                    align:'center',
                    valign:'middle'
                },{
                    title:'歌名',
                    field:'name',
                    align:'center',
                    valign:'middle'
                },{
                    title:'歌手',
                    field:'singer',
                    align:'center',
                    valign:'middle'
                },{
                    title:'歌曲状态',
                    field:'status',
                    align:'center',
                    valign:'middle',
                    formatter:function (value, row, index) {
                        return ((typeof(value)!= "undefined") &&
                            (value == 0)) ? "设计中" : "发布";
                    }
                },{
                    title:'备注说明',
                    field:'detail',
                    align:'center',
                    valign:'middle'
                }
            ]
        });
    }

    $('#userManageButton').on('click',initUserManage);
    $('#androidManageButton').on('click', initAndroidManage);
    $('#linuxManageButton').on('click', initLinuxManage);
    $('#musicManageButton').on('click', initMusicManage);

    initUserManage();
});