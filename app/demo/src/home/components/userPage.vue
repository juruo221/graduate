<template>
	<div class="user-page">
		<div class="header">
			<img src="/demo/static/image/userImg.jpg">
			<span>{{ userId }}</span>
		</div>
		<div class="dongtai">
		</div>
		<div class="bottom">
			<button class="btn-add" @click="add()">添加</button>
		</div>
	</div>

</template>

<script>

export default {
	components: {
	},
	data() {
		return {
			userId: ''
		}
	},
	created () {
	},
	mounted() {
		// this.userId="idd";
		// var socket = io();
		// console.log('+++++++++++++');
		// socket.on('news', function (data) {
		// 	console.log('++++++++++++++++++++');
		// 	console.log(data);
		// 	socket.emit('my other event', { my: 'data' });
		// });
	},
	methods: {
		add() {
			console.log(this.userId);
			console.log(host);
		}
	}
}
</script>

<style>
/*.user-page{
	height: 100%
    width: 95%;
    padding: 0px 2.5%;
    background-color: #fff;
}
*/
.user-page{
    height: 100%;
    width: 100%;
    background-color: #fff
}
.user-page .header{
	height: 55%;
	background-color: #eee;
}
.user-page .header img{
	display: block;
    margin: 0 auto;
    border-radius: 100px;
    padding-top: 33%;
}
.user-page .header span{
	display: block;
    text-align: center;
    font-size: 46px;
    padding-top: 2%;
}
.user-page .bottom{
	position: fixed;
    bottom: 0px;
    display: block;
    width: 100%;
}
.user-page .bottom .btn-add{
	height: 80px;
    display: block;
    margin: 0 auto;
    width: 46%;
    background-color: #fff;
    border: 0px;
    font-size: 46px;
    color: #317EF3;
}
</style>