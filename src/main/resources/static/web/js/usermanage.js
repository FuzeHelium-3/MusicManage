(function($) {

})($);


$(function($){
	console.log(sessionStorage.getItem("admin"));

	var $table = $("#usertab");

	window.changeUserInfo={
		"click #changeUser":function (e, value, row, index) {
			$('#changeUserModal').modal('show');
			console.log("e:"+e);
			console.log("value:"+value);
			console.log("row id:"+row.id);
			console.log("index:"+index);
			console.log("1:user_name:"+$("#user_name2").val());
			$("#change_user").off().on('click', function (e) {
				console.log("2:user_name:"+$("#user_name2").val());
				var userName = $("#user_name2").val();
				var password = $("#password2").val();
				if (userName == undefined || userName == null || userName == ''
					|| password == undefined || password == null || userName == ''){
					alert("用户名或密码不可为空！");
				} else {
					var sex = $("#gender2").val();
					var age = $("#age2").val();
					var mobilePhone = $("#tel2").val();
					var address = $("#address2").val();
					var param = {
						id : row.id,
						username : userName,
						password : password,
						sex : sex,
						age : age,
						mobilePhone : mobilePhone,
						address : address
					};

					console.log(param);

					$.ajax({
						url : '/user',
						type : 'put',
						dataType : 'json',
						contentType :"application/json",
						data : JSON.stringify(param),
						success : function(res){
							if (res['status'] != 200){
								alert(res['msg']);
							}
						},
						error : function(res){
							alert("用户信息修改失败...");
						},
						complete:function () {
							$("#addUserModal").modal("hide");
							$table.bootstrapTable('refresh');
						}
					});
				}
			});

		}
	};

	window.changeAndroidInfo={
		"click #changeAndroid":function (e, value, row, index) {
			$('#changeAndroidModal').modal('show');
			console.log("e:"+e);
			console.log("value:"+value);
			console.log("row id:"+row.id);
			console.log("index:"+index);
			console.log("1:user_name:"+$("#user_name2").val());
			$("#change_android_button").off().on('click', function (e) {
				var name = $("#android_name2").val();
				var no = $("#android_no2").val();
				var status = $('#android_status2').val();
				if (name == undefined || name == null || name == ''
					|| no == undefined || no == null || no == ''){
					alert("设备名称或编号不可为空！");
				} else if (status == undefined || status == null || status == '') {
					alert("请选择设备状态！");
				} else {
					var param = {
						id : row.id,
						name : name,
						no : no,
						status : status
					};

					$.ajax({
						url : '/android',
						type : 'put',
						dataType : 'json',
						contentType :"application/json",
						data : JSON.stringify(param),
						success : function(res){
							console.log(res);
							alert("更改Android设备信息成功");
						},
						error : function(res){
							console.log(res);
							alert("更改Android设备信息失败...");
						},
						complete:function () {
							$("#addAndroidModal").modal("hide");
							$table.bootstrapTable('refresh');
						}
					});
				}
			});

		},
		"click #androidDetail":function (e, value, row, index) {
			$("#device_id").html(row.id);
			$('#device_no').html(row.no);
			$("#device_name").html(row.name);
			$('#device_status').html(((row.status == 0) ? "离线" : "在线"));
			$('#linuxDetailModal').modal('show');
		},
	};

	window.changeLinuxInfo={
		"click #linuxDetail":function (e, value, row, index) {
			$("#device_id").html(row.id);
			$('#device_no').html(row.no);
			$("#device_name").html(row.name);
			$('#device_status').html(((row.status == 0) ? "离线" : "在线"));
			$('#linuxDetailModal').modal('show');
		},

		"click #changeLinux":function (e, value, row, index) {
			$('#changeLinuxModal').modal('show');
			console.log("e:"+e);
			console.log("value:"+value);
			console.log("row id:"+row.id);
			console.log("index:"+index);
			console.log("1:user_name:"+$("#user_name2").val());
			$("#change_linux_button").off().on('click', function (e) {
				var name = $("#linux_name2").val();
				var no = $("#linux_no2").val();
				var status = $('#linux_status2').val();
				if (name == undefined || name == null || name == ''
					|| no == undefined || no == null || no == ''){
					alert("设备名称或编号不可为空！");
				} else if (status == undefined || status == null || status == '') {
					alert("请选择设备状态！");
				} else {
					var param = {
						id : row.id,
						name : name,
						no : no,
						status : status
					};

					$.ajax({
						url : '/linux',
						type : 'put',
						dataType : 'json',
						contentType :"application/json",
						data : JSON.stringify(param),
						success : function(res){
							console.log(res);
							alert("更改Linux设备信息成功");
						},
						error : function(res){
							console.log(res);
							alert("更改Linux设备信息失败...");
						},
						complete:function () {
							$("#addLinuxModal").modal("hide");
							$table.bootstrapTable('refresh');
						}
					});
				}
			});

		}
	};

	window.changeMusicInfo={
		"click #changeMusic":function (e, value, row, index) {
			$('#changeMusicModal').modal('show');
			$("#change_music_button").off().on('click', function (e) {
				var name = $("#music_name2").val();
				var singer = $("#singer2").val();
				var status = $('#music_status2').val();
				var detail = $('#detail2').val();
				if (name == undefined || name == null || name == ''){
					alert("歌曲名称不可为空！");
				} else if (singer == undefined || singer == null || singer == ''){
					alert("歌手名称不可为空！");
				} else if (status == undefined || status == null || status == ''){
					alert("请选择歌曲状态！");
				} else {
					var param = {
						id : row.id,
						name : name,
						singer : singer,
						status : status,
						detail : detail
					};
					console.log(param);
					$.ajax({
						url : '/music',
						type : 'put',
						dataType : 'json',
						contentType :"application/json",
						data : JSON.stringify(param),
						success : function(res){
							alert("更改歌曲信息成功");
						},
						error : function(res){
							alert("更改歌曲信息失败...");
						},
						complete:function () {
							$("#changeMusicModal").modal("hide");
							$table.bootstrapTable('refresh');
						}
					});
				}
			});
		},
		"click #musicDetail":function (e, value, row, index) {
			$("#music_id").html(row.id);
			$('#music_name_detail').html(row.name);
			$("#singer_detail").html(row.singer);
			$('#music_status_detail').html(((row.status == 0) ? "设计中" : "发布"));
			$("#other_detail").html(row.detail);
			$('#musicDetailModal').modal('show');
		},
	};

	function changeUserBtn(value, row, index) {
    return [
			'<div class="btn-group">',
			'<button id="changeUser" type="button" class="btn btn-default">更改</button>',
			'</div>'
    	].join('');
	};

	function changeAndroidBtn(value, row, index) {
		return [
			'<div class="btn-group">',
			'<button id="changeAndroid" type="button" class="btn btn-default">更改</button>',
			'<button id="androidDetail" type="button" class="btn btn-primary">详情</button>',
			'</div>'
		].join('');
	};

	function changeLinuxBtn(value, row, index) {
		return [
			'<div class="btn-group">',
			'<button id="changeLinux" type="button" class="btn btn-default">更改</button>',
			'<button id="linuxDetail" type="button" class="btn btn-primary">详情</button>',
			'</div>'
		].join('');
	};

	function changeMusicBtn(value, row, index) {
		return [
			'<div class="btn-group">',
			'<button id="changeMusic" type="button" class="btn btn-default">更改</button>',
			'<button id="musicDetail" type="button" class="btn btn-primary">详情</button>',
			'</div>'
		].join('');
	};

	function initUserManage(){
		$('#userToolbar').show();
		$('#linuxToolbar').hide();
		$('#musicToolbar').hide();
		$('#androidToolbar').hide();
		//$('#addUser').show();
		//$('#deleteUser').show();
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
				},{
					title:'操作',
					field:'alter',
					align:'center',
					valign:'middle',
					events:changeUserInfo,
					formatter: changeUserBtn
				}
			]

		});
	}

	function initAndroidManage(){
		$('#userToolbar').hide();
		$('#linuxToolbar').hide();
		$("#musicToolbar").hide();
		$('#androidToolbar').show();
		//$('#addUser').hide();
		//$('#deleteUser').hide();
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
				},{
					title:'操作',
					field:'alter',
					align:'center',
					valign:'middle',
					events:changeAndroidInfo,
					formatter: changeAndroidBtn
				}
			]

		});
	}

	function initLinuxManage(){
		$('#userToolbar').hide();
		$('#androidToolbar').hide();
		$('#musicToolbar').hide();
		$('#linuxToolbar').show();
		//$('#addUser').display="none";
		//$('#deleteUser').display="none";
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
				},{
					title:'操作',
					field:'alter',
					align:'center',
					valign:'middle',
					events:changeLinuxInfo,
					formatter: changeLinuxBtn
				}
			]

		});
	}

	function initMusicManage(){
		$('#userToolbar').hide();
		$('#androidToolbar').hide();
		$('#linuxToolbar').hide();
		$('#musicToolbar').show();
		//$('#addUser').display="none";
		//$('#deleteUser').display="none";
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
				},{
					title:'操作',
					field:'alter',
					align:'center',
					valign:'middle',
					events:changeMusicInfo,
					formatter: changeMusicBtn
				}
			]
		});
	}

	$('#addUser').on('click',function(e){
		$('#addUserModal').modal('show');
	});

	$('#deleteUser').on('click',function(e){
		var data = $table.bootstrapTable('getSelections');
		if (data == undefined || data == null || data == ''){
			alert("请先勾选想要删除的用户！");
		} else {
			var ids = [];
			for (i = 0; i < data.length; i++){
				ids.push(data[i].id);
			}
			console.log(ids);
			var param = {
				ids : ids
			}

			$.ajax({
				url : '/user',
				type : 'delete',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("批量删除用户成功");
				},
				error : function(res){
					console.log(res);
					alert("批量删除用户失败...");
				},
				complete:function () {
					$("#addUserModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	});

	$('#addAndroid').on('click', function(e){
		$('#addAndroidModal').modal('show');
	})

	$('#addLinux').on('click', function(e){
		$('#addLinuxModal').modal('show');
	})

	$('#addMusic').on('click', function(e){
		$('#addMusicModal').modal('show');
	})

	$('#deleteAndroid').on('click',function(e){
		var data = $table.bootstrapTable('getSelections');
		if (data == undefined || data == null || data == ''){
			alert("请先勾选想要删除的设备！");
		} else {
			var ids = [];
			for (i = 0; i < data.length; i++){
				ids.push(data[i].id);
			}
			console.log(ids);
			var param = {
				ids : ids
			}

			$.ajax({
				url : '/android',
				type : 'delete',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("批量删除设备成功");
				},
				error : function(res){
					console.log(res);
					alert("批量删除设备失败...");
				},
				complete:function () {
					$("#addAndroidModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	});

	$('#deleteLinux').on('click',function(e){
		var data = $table.bootstrapTable('getSelections');
		if (data == undefined || data == null || data == ''){
			alert("请先勾选想要删除的设备！");
		} else {
			var ids = [];
			for (i = 0; i < data.length; i++){
				ids.push(data[i].id);
			}
			console.log(ids);
			var param = {
				ids : ids
			}

			$.ajax({
				url : '/linux',
				type : 'delete',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("批量删除设备成功");
				},
				error : function(res){
					console.log(res);
					alert("批量删除设备失败...");
				},
				complete:function () {
					$("#addLinuxModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	});

	$('#deleteMusic').on('click',function(e){
		var data = $table.bootstrapTable('getSelections');
		if (data == undefined || data == null || data == ''){
			alert("请先勾选想要删除的歌曲！");
		} else {
			var ids = [];
			for (i = 0; i < data.length; i++){
				ids.push(data[i].id);
			}
			console.log(ids);
			var param = {
				ids : ids
			}

			$.ajax({
				url : '/music',
				type : 'delete',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("批量删除音乐成功");
				},
				error : function(res){
					console.log(res);
					alert("批量删除音乐失败...");
				},
				complete:function () {
					$table.bootstrapTable('refresh');
				}
			});
		}
	});

	function addUser(){
		var userName = $("#user_name").val();
		var password = $("#password").val();
		if (userName == undefined || userName == null || userName == ''
			|| password == undefined || password == null || userName == ''){
			alert("用户名或密码不可为空！");
		} else {
			var sex = $("#gender").val();
			var age = $("#age").val();
			var mobilePhone = $("#tel").val();
			var address = $("#address").val();
			var param = {
				username : userName,
				password : password,
				sex : sex,
				age : age,
				mobilePhone : mobilePhone,
				address : address
			};

			$.ajax({
				url : '/user',
				type : 'post',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("添加用户成功");
				},
				error : function(res){
					console.log(res);
					alert("添加用户失败...");
				},
				complete:function () {
					$("#addUserModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	}

	function addAndroid(){
		var name = $("#android_name").val();
		var no = $("#android_no").val();
		var status = $('#android_status').val();
		if (name == undefined || name == null || name == ''
			|| no == undefined || no == null || no == ''){
			alert("设备名称或编号不可为空！");
		} else if (status == undefined || status == null || status == '') {
			alert("请选择设备状态！");
		} else {
			var param = {
				name : name,
				no : no,
				status : status
			};

			$.ajax({
				url : '/android',
				type : 'post',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("添加Android设备成功");
				},
				error : function(res){
					console.log(res);
					alert("添加Android设备失败...");
				},
				complete:function () {
					$("#addAndroidModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	}

	function addLinux(){
		var name = $("#linux_name").val();
		var no = $("#linux_no").val();
		var status = $('#linux_status').val();
		if (name == undefined || name == null || name == ''
			|| no == undefined || no == null || no == ''){
			alert("设备名称或编号不可为空！");
		} else if (status == undefined || status == null || status == '') {
			alert("请选择设备状态！");
		} else {
			var param = {
				name : name,
				no : no,
				status : status
			};

			$.ajax({
				url : '/linux',
				type : 'post',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("添加Linux设备成功");
				},
				error : function(res){
					console.log(res);
					alert("添加Linux设备失败...");
				},
				complete:function () {
					$("#addLinuxModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	}

	function addMusic(){
		var name = $("#music_name").val();
		var singer = $("#singer").val();
		var status = $('#music_status').val();
		var detail = $('#detail').val();
		if (name == undefined || name == null || name == ''){
			alert("歌曲名称不可为空！");
		} else if (singer == undefined || singer == null || singer == ''){
			alert("歌手名称不可为空！");
		} else if (status == undefined || status == null || status == ''){
			alert("请选择歌曲状态！");
		} else {
			var param = {
				name : name,
				singer : singer,
				status : status,
				detail : detail
			};

			$.ajax({
				url : '/music',
				type : 'post',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("添加歌曲成功");
				},
				error : function(res){
					console.log(res);
					alert("添加歌曲失败...");
				},
				complete:function () {
					$("#addMusicModal").modal("hide");
					$table.bootstrapTable('refresh');
				}
			});
		}
	}

	function sendAd() {
		var data = $table.bootstrapTable('getSelections');
		if (data == undefined || data == null || data == '') {
			alert("请先勾选想要推送广告的设备！");
		} else {
			$("#adModal").modal('show');

		}
	}

	function postAd() {
		var data = $table.bootstrapTable('getSelections');
		var adContent = $("#ad_content").val();
		if (adContent == undefined || adContent == '' || adContent == null){
			console.log("请输入广告内容！");
		} else {
			var ids = [];
			for (i = 0; i < data.length; i++){
				ids.push(data[i].id);
			}
			console.log(adContent);
			var param = {
				ids : ids,
				ad : adContent
			}

			$.ajax({
				url : '/linux/ad',
				type : 'post',
				dataType : 'json',
				contentType :"application/json",
				data : JSON.stringify(param),
				success : function(res){
					console.log(res);
					alert("添加广告成功");
				},
				error : function(res){
					console.log(res);
					alert("添加广告失败...");
				},
				complete:function () {
					$("#adModal").modal('hide');
					$table.bootstrapTable('refresh');
				}
			});
		}
	}


	$("#sendAd").bind("click", sendAd);
	$("#send_ad_button").bind("click", postAd);
	$("#add_user").bind("click", addUser);
	$("#add_android_button").bind("click", addAndroid);
	$("#add_linux_button").bind("click", addLinux);
	$("#add_music_button").bind("click", addMusic);
	$('#userManageButton').on('click',initUserManage);
	$('#androidManageButton').on('click', initAndroidManage);
	$('#linuxManageButton').on('click', initLinuxManage);
	$('#musicManageButton').on('click', initMusicManage);

	initUserManage();
});