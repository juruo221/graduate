<template>
	<div class="friend-information">
		<div class="content">
<!-- 			<div class="head">
				<img>
			</div>
			<span class="id"></span>
			<span class="dongtai"></span>
			<button class="start-chat">发消息</button> -->
			<div class="chat-wrapper">
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
				<span class="me">aaaa</span>
				<span class="you">you</span>
			</div>
			<div class="bottom">
				<input v-model="message" class="input-message" type="text">
				<button @click="sendMessage()" class="btn-message">发送</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	components: {
	},
	data() {
		return {
			message: ''
		}
	},
	created (){
		console.log('sssssssss');
	},
	mounted() {
		$('.chat-wrapper').scrollTop( $('.chat-wrapper')[0].scrollHeight );
	},
	methods: {
		sendMessage() {
			if (this.message == '') return ;
			console.log(this.message);
			$(".chat-wrapper").append("<span class='me'>"+this.message+"<span>");
			this.message='';
			$("input").focus();
			$('.chat-wrapper').scrollTop( $('.chat-wrapper')[0].scrollHeight );
		}
	}
}
</script>

<style>
.friend-information{
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.friend-information .content{
	width: 97%;
	height: 100%;
	margin: 0 1.5%;
}
.friend-information .content .chat-wrapper{
	height: calc(100% - 100px);
	overflow-y: scroll;
	width: 100%;
	background-color: red;
}
.friend-information .content .chat-wrapper .me{
	display: block;
    font-size: 45px;
    text-align: right;
    /* float: right; */
    padding-right: 20px;
}
.friend-information .content .chat-wrapper .you{
	display: inline-block;
    /* float: left; */
    font-size: 45px;
    text-align: left;
    padding-left: 20px;
}
.friend-information .content .bottom{
	position: absolute;
	bottom: 20px;
	width: 97%;
}
.friend-information .content .bottom input{
	width: 88%;
    height: 60px;
    border: 1px solid green;
}
.friend-information .content .bottom .btn-message{
	height: 60px;
    width: 10%;
    float: right;
}
</style>