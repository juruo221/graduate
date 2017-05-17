<template>
	<div class="add-friend">
		<input type="text" v-model="userId" placeholder="通过用户名添加好友">
		<button class="btn-search" @click="search()">搜索</button>
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
	created (){
	},
	mounted() {
	},
	methods: {
		search() {
			console.log(this.userId);
			this.userId = 'xxx';
			this.$router.push('/v1/addFriend/'+this.userId);
		}
	}
}
</script>

<style>
.add-friend{
	position: relative;
	top: 50px;
    width: 95%;
    padding: 0px 2.5%;
    background-color: #fff;
}
.add-friend input{
    width: 80%;
    border-top: 0px;
    border-bottom: 1px solid #317EF3;
    height: 70px;
    font-size: 48px;
}
.add-friend .btn-search{
    height: 71px;
    width: 12%;
    font-size: 32px;
    margin-left: 2%;
    background-color: #317EF3;
    color: #fff;
    border-radius: 6px;
}
.add-friend input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
	color: #eee; 
	font-size: 48px;
} 
.add-friend input:-moz-placeholder, textarea:-moz-placeholder { 
	color: #eee; 
	font-size: 48px;
} 
.add-friend input::-moz-placeholder, textarea::-moz-placeholder { 
	color: #eee; 
	font-size: 48px;
} 
.add-friend input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
	color: #eee; 
	font-size: 48px;
} 
</style>