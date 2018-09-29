var login = (function () {
    return {

        init: function () {
           this.$btn = document.querySelector('.but');

            this.event()
        },
        event: function () {
            var _this=this
        //点击发送数据
            this.$btn.onclick = function () {
                _this.$name = document.getElementById('name').value.trim()
                _this.$pass = document.getElementById('mima').value.trim()
                _this.sendData()  
            }
        },
        //发送数据
        sendData: function () {
            var _this=this

            var obj = {
                type: 'POST',
                params: {
                    username: _this.$name,
                    password: _this.$pass
                },
                success: function (data) {
                   _this.loginSuccess(data)
                }
            }
            sendAjax('php/login.php', obj)
        },
        //对获取数据判断
        loginSuccess:function(data){
            if (data.code == 200) {
                document.cookie = "token=" + data.data.token;
                document.cookie = "id=" + data.data['user-id'];
                localStorage = data.img
                location.href='welcome.html'
            } else if (data.code == 100) {
                alert(data.msg)  
            }
        }
    }

}())