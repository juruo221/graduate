<template>
	<div class="register" :style="{backgroundImage: 'url(' + bg + ')'}">
		<div class="content">
			<span>用户名：</span>
			<input class="user-id" type="text" name="userId" placeholder="用户名">
			<span>密码：</span>
			<input class="user-pwd" type="password" name="userPwd" placeholder="用户名">
			<span>确认密码：</span>
			<input class="user-pwd" type="password" name="userPwd" placeholder="用户名">
			<span>昵称：</span>
			<input class="user-name" type="text" name="userName" placeholder="用户名">
			<span>性别：</span>
			<label class="user-sex-option" for="male">男</label>
			<input type="radio" name="userSex" id="male">
			<label class="user-sex-option second" for="female">女</label>
			<input type="radio" name="userSex" id="female"> 	
			<input class="btn-register" type="button" value="注册" @click="register()">
			<button class="login" @click="login()">登陆</button>
			<span class="have-account">已有账号？</span>
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
    	// this.$emit("on-result-change",'3');
    	$.get('/data/info/repo',res => {
    		if (res && res.code == 0){
    			this.bg = res.data && res.data.bg;
    		}
    	})
    	
    },
    methods : {
    	register(){
    		$.post('/dashboard/user/user/add',{
    			id: 'idd',
    			pwd: 'pwdd',
    			name: 'namee',
    			sex: true
    		},res => {
    			console.log(res);
    		})
    		// this.$route.params.id = 'registerSuccess';
    		// this.$router.push(this.$route.params.id);
    	},
    	login(){
    		this.$route.params.id = 'login';
    		this.$router.push(this.$route.params.id);
    	}
    }
}
</script>

<style>
.register{
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
}
.register .content{
	width: 60%;
	height: 50%;
	padding: 40% 20% 0;
}
.register .content span{
	display: block;
	height: 6%;
	font-size: 28px;
	color: #fff;
	margin-top: 6%;
}
.register .content .user-id,.register .content .user-pwd, .register .content .user-name{
	width: 100%;
	height: 8%;
	font-size: 24px;
	color: #fff;
	padding-left: 16px;
	border: 1px #fff solid;
	background-color: transparent;
}

.register .content .user-sex-option{
	font-size: 24px;
	color: #fff;
	padding-right: 6px;
}
.register .content .second{
	margin-left: 30%;
}
.register .content .btn-register{
	display: block;
	width: 100%;
	height: 8%;
	font-size: 30px;
	color: #fff;
	margin-top: 8%;
	border: 1px #fff solid;
	background-color: transparent;
}
.register .content .have-account{
	float: right;
}
.register .content .login{
	float: right;
    width: 18%;
    height: 5%;
    font-size: 24px;
    color: #9CD3F2;
    margin-top: 6%;
    border: 1px #9CD3F2 solid;
    background-color: transparent;
}
</style>