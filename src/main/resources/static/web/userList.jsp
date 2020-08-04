<%--
  Created by IntelliJ IDEA.
  User: SupremacyXXXXX
  Date: 2020/6/18
  Time: 16:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.*" pageEncoding="utf-8" contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://www.springframework.org/tags"%>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-table.min.css">
    <script src="./js/jquery-3.5.1.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/bootstrap-table.min.js"></script>
    <script src="./js/bootstrap-table-locale-all.min.js"></script>
    <script src="./js/usermanage.js"></script>
    <title>用户信息</title>
</head>

<body>
<div class="panel panel-default">
    <div class="panel-heading">用户信息管理</div>
    <div id="toolbar">
        <br/>
        <button id="add" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
            添加
        </button>
    </div>
    <table id="usertab"
           data-show-refresh="true"
           data-show-toggle="true"
           data-show-columns="true"
           data-id-field="id">
    </table>
</div>
<div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    ×
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    用户信息
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="user_name" class="col-sm-3 control-label">用户名</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="user_name" id="user_name"
                                   placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-3 control-label">密码</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="password" id="password"
                                   placeholder="请输入密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="gender" class="col-sm-3 control-label">性别</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="gender" id="gender"
                                   placeholder="请输入性别">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="age" class="col-sm-3 control-label">年龄</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="age" id="age"
                                   placeholder="请输入年龄">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="tel" class="col-sm-3 control-label">电话</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="tel" id="tel"
                                   placeholder="请输入年龄">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="address" class="col-sm-3 control-label">地址</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="address" id="address"
                                   placeholder="请输入地址">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button id="add_user" type="button" class="btn btn-primary" >
                            提交
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</div>
</body>
</html>
