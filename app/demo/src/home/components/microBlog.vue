<template>
	<div class="micro-blog">
		<!-- <div class="content"> -->
			<!-- <div class="item">
				<div class="head">
					<img src="/demo/static/image/userImg.jpg">
					<span class="item-name">名字</span>
					<span class="item-time">时间</span>
				</div>
				<div class="guandian">
				观点
				</div>
				<div class="zhuanfa">
				</div>
				<div class="bottom">
					<span class="item-relay">转发</span>
					<div class="interval-1"></div>
					<span class="item-discuss">评论</span>
					<div class="interval-2"></div>
					<span class="item-praise">赞</span>
				</div>
			</div> -->
			<micro-item></micro-item>
			<micro-item></micro-item>
		<!-- </div> -->
	</div>
</template>

<script>
import MicroItem from "./micro-item.vue"

export default {
	components: {
		MicroItem
	},
	data() {
		return {
		}
	},
	created (){
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<style>
.micro-blog{
	width: 100%;
	background-color: #fff;
}
/*.micro-blog .content{
	width: 97%;
	margin: 0 1.5%;
	background-color: #eee;
}*/

</style>