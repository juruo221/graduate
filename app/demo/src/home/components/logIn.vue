<template>
	<div class="login" :style="{backgroundImage: 'url(' + bg + ')'}">
		<div class="content">
			<input v-model="userId" type="text" name="userId" class="userId" placeholder="用户名">
			<hr>
			<input v-model="userPwd" type="text" name="userPwd" class="userPwd" placeholder="密码">
			<hr>
			<div class="pwd-wrong-wrapper">
				<span v-if="pwdWrong" class="pwd-wrong">密码错误或账号不存在</span>	
			</div>
			<input type="button" value="登陆" class="btn-login" @click="login()">
			<input type="button" value="注册账号" class="btn-register" @click="register()">
			<div class="btn-forget-pwd">忘记密码？</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		// flag: {
		// 	type: Number,
		// 	twoWay: true
		// }
	},
    data () {
        return {
        	bg: '',
        	userId: '',
        	userPwd: '',
        	pwdWrong: false
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
    	login(){
    		console.log('click');
    		$.post('/dashboard/user/user/checkPwd', {
    			id: this.userId,
    			pwd: this.userPwd
    		},res => {
    			//有坑待开发
    			if (res.length == 1){	
    				console.log('true');
    				// this.$route.params.id = 'homeInfo';
    				// this.$router.push(this.$route.params.id);
    				// this.$router.push(this.$route.params.page);
    				this.$router.push({ path: '/v1/homeInfo/blog'})

    			}else {
    				console.log('false');
    				this.pwdWrong = true;
    			}
    		});
    	},
    	register(){
    		console.log('++++++++++++');
    		// this.$route.params.id = 'register';
    		this.$router.push({ path: '/v1/register' });
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
.login .content .pwd-wrong-wrapper{
	height: 40px;
}
.login .content .pwd-wrong-wrapper .pwd-wrong{
	display: block;
    font-size: 20px;
    line-height: 40px;
    color: red;
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