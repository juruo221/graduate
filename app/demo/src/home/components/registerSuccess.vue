<template>
	<div class="register-success">
		<div class="content">
			<span class="tooltip">恭喜您注册成功</span>
			<button class="btn-login" @click="login()">立即登录>></button>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			bg: ''
		}
	},
	mounted(){
    	$.get('/data/info/repo',res => {
    		if (res && res.code == 0){
    			this.bg =res.data && res.data.bg;
    		}
    	})
	},
	methods: {
		login(){
			this.$route.params.id = 'login';
			this.$router.push(this.$route.params.id);
		}
	}
}
</script>

<style>
.register-success{
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
}
.register-success .content{
	width: 60%;
	height: 40%;
	padding: 50% 20% 0; 
}
.register-success .content .tooltip{
	display: block;
    width: 80%;
    height: 70px;
    font-size: 35px;
    line-height: 70px;
    text-indent: 27%;
    margin: 0 auto;
    border: 1px #9BD9FC solid;
    background-color: transparent;
}
.register-success .content .btn-login{
    display: block;
    width: 35%;
    height: 50px;
    margin: 5% auto;
    background-color: transparent;
    border: 0px;
    font-size: 28px;
}
</style>