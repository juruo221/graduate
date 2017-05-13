<template>
	<div class="friend">
		<div class="content">
			<div class="new-friend">
				<img src="/demo/static/image/userImg.jpg">
				<span>新的好友</span>
			</div>
			<div class="check-friend">
				<img src="/demo/static/image/userImg.jpg">
				<span>查找好友</span>
			</div>
			<div class="item-content">
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友1</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友2</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>

				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
				<div class="item">
					<img src="/demo/static/image/userImg.jpg">
					<span>好友3</span>
				</div>
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
		}
	},
	created (){
	},
	mounted() {
		console.log(this.$route.params.page);
	},
	methods: {	
	}
}
</script>

<style>
.friend{
	width: 100%;
	background-color: #fff;
}
.friend .content{
	width: 97%;
	margin: 0 1.5%;
}
.friend .content .new-friend, .friend .content .check-friend{
	height: 100px;
	background-color: red;
}
.friend .content .new-friend img,.friend .content .check-friend img{
	width: 100px;
}
.friend .content .new-friend span,.friend .content .check-friend span{
	display: inline-flex;
    height: 100%;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    vertical-align: top;
}
.friend .content .item-content{
	margin-top: 50px;
}
.friend .content .item-content .item{
	height: 130px;
    padding: 15px 0;
    box-sizing: border-box;
    border-top: 1px red solid;
}
.friend .content .item-content .item img{
	width: 100px;
	border-radius: 15px;
}
.friend .content .item-content .item span{
	display: inline-flex;
    height: 100%;
    padding-left: 15px;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    vertical-align: top;
}
</style>