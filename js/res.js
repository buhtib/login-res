var res = (function () {
    return {

        init: function () {
            this.$name = document.getElementById('name')
            this.$pass = document.getElementById('mima')
            this.$btn = document.querySelector('.but');
            this.event()
        },
        event: function () {
            var _this = this
            //点击发送数据
            this.$name.onchange = function () {
                _this.sendData()
            }

            this.$btn.onclick = function() {
                _this.insertData()
            }   

        },
        //发送检测用户名存在
        sendData: function () {
            var _this = this

            var obj = {
                type: 'get',
                params: {
                    username:_this.$name.value.trim()
                },
                success: function (data) {
                    _this.check_name(data)
                }
            }
            sendAjax('php/check_name.php', obj)
        },
         //点击按钮插入数据
         insertData: function () {
            var _this = this
            var obj = {
                type: 'post',
                params: {
                    username: _this.$name.value.trim(),
                    password:_this.$pass.value.trim()
                },
                success: function (data) {
                    _this.login_(data)
                }
            }
            sendAjax('php/res.php', obj)
        },
        //对name input 判断一波
        check_name: function (data) {
            if (data.code == 200) {

            } else if (data.code == 100) {
                alert(data.msg)
            }
        },
        //加入后的操作
        login_:function (data){
                if(data.code == 200) {
                    location.href = 'login.html';
                } else if(data.code == 100) {
                    alert(data.msg);
                }else if(data.code == 1000) {
                    alert(data.msg);
                }
           
        }
    }

}())