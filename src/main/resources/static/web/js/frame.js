(function($) {
    sessionStorage.setItem("admin", "0");
    function login(event) {
        console.log("111");
        event.preventDefault();
        var userName = $("#username").val();
        var password = $("#password").val();

        $.post("/login",
            {username: userName, password: password},
            function (data) {
                console.log(data);
                console.log(data["status"]);
                if (data["status"] == 200){
                    console.log("success");
                    $(".contain").hide();
                    if (data["data"].admin == 1){
                        window.location.href="index.html";
                    } else {
                        window.location.href="user.html"
                    }
                } else {
                    console.log("wrong");
                    alert(data["msg"]);
                }
            });
    }

    $("#btnRtSubmit").bind("click", login);

})($);