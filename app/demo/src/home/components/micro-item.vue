<template>
	<div class="micro-item">
		<div class="head">
			<img src="/demo/static/image/userImg.jpg">
			<span class="item-name">名字</span>
			<span class="item-time">时间</span>
		</div>
		<div class="guandian">
			观点
		</div>
		<div class="zhuanfa">
			转发
		</div>
		<div class="bottom">
			<span class="item-relay">转发</span>
			<div class="interval-1"></div>
			<span class="item-discuss">评论</span>
			<div class="interval-2"></div>
			<span class="item-praise">赞</span>
		</div>
	</div>
</template>

<script>
export default{

}
</script>

<style>
.micro-item{
	width: 100%;
	background-color: #fff;
}
.micro-item .head{
	width: 97%;
	margin: 0 1.5%;
	height: 90px;
}
.micro-item .head img{
	float: left;
	width: 90px;
	height: 100%;
	margin-right: 20px;
}
.micro-item .head .item-name{
	display: inline-block;
    height: 45px;
    width: calc(100% - 110px);
    font-size: 32px;
    color: #FA7D3C;
    vertical-align: top;
}
.micro-item .head .item-time{
	display: inline-block;
    height: 45px;
    width: calc(100% - 110px);
    font-size: 24px;
    color: #808080;
    vertical-align: top;
}
.micro-item .guandian{
	display: block;
	width: 97%;
	min-height: 50px;
	margin: 20px 1.5%;
}
.micro-item .zhuanfa{
	display: block;
	min-height: 50px;
	padding: 20px 1.5%;
	background-color: #F2F2F5;
}
.micro-item .bottom{
	position: relative;
	width: 100%;
	height: 50px;
	border-top: 1px #D9D9D9 solid;
}
.micro-item .bottom .interval-1{
	position: absolute;
	width: 1px;
	height: 30px;
	left: 33%;
	top: 18%;
	background-color: #D9D9D9;
}
.micro-item .bottom .interval-2{
	position: absolute;
	width: 1px;
	height: 30px;
	left: 66%;
	top: 18%;
	background-color: #D9D9D9;
}
.micro-item .bottom span{
	display: inline-block;
	width: 33%;
	height: 100%;
	line-height: 50px;
	text-align: center;
}
</style>
