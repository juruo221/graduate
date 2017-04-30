<template>
	<div class="login" :style="{backgroundImage: 'url(' + bg + ')'}">
		<div class="content">
			<input type="text" name="" class="userId" placeholder="用户名">
			<hr>
			<input type="text" name="" class="userPwd" placeholder="密码">
			<hr>
			<input type="button" value="登陆" class="btn-login" @click="login()">
			<input type="button" value="注册账号" class="btn-register" @click="register()">
			<div class="btn-forget-pwd">忘记密码？</div>
		</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
        	bg: ''
        }
    },
    mounted () {
    	$.get('/data/info/repo',res => {
    		console.log(res);
    		if (res && res.code == 0){
    			this.bg = res.data && res.data.bg;
    			console.log(this.bg);
    		}
    	})
    },
    methods : {
    	register(){
    		
    	}
    }

}
</script>

<style>
.login{
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
}
.login .content{
	width: 60%;
	height: 50%;
	padding: 50% 20% 0;
}
.login .content .userId{
	width: 100%;
	height: 5%;
	font-size: 24px;
	color: #fff;
	background-color: transparent;
}
.login .content .userPwd{
	width: 100%;
	height: 5%;
	font-size: 24px;
	color: #fff;
	margin-top: 5.5%;
	background-color: transparent;
}
.login .content hr{
	height: 2px;
	background-color: #fff;
}
.login .content .btn-login{
	width: 100%;
	height: 8%;
	font-size: 28px;
	color: #68CDD3;
	margin-top: 15%;
	background-color: #fff;
}
.login .content .btn-register{
	width: 100%;
	height: 8%;
	font-size: 28px;
	color: #fff;
	margin-top: 5%;
	border: 1px #fff solid;
	background-color: transparent;
}
.login .content .btn-forget-pwd{
	width: 100%;
	margin-top: 8%;
	text-align: center;
	font-size: 24px;
	color: #fff;
}
</style>