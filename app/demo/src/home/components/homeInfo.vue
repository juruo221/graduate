<template>
	<div class="home-info">
		<div class="content">
			<div class="tab" @click="fontColorChange()">
				<span>动态</span>
				<span>帖子</span>
				<span>进吧</span>
				<span>好友</span>
				<span>我的</span>
			</div>
		</div>
		<friend v-show="_show( 3 )"></friend>
		<!-- <micro-blog></micro-blog> -->
		<!-- <select-tribe></select-tribe> -->
		
		<!-- <note></note>
		<about-me></about-me> -->		
	</div>
</template>

<script>
import MicroBlog from "./microBlog.vue"
import Friend from "./friend.vue"

export default {
	components: {
		MicroBlog,
		Friend
	},
	data() {
		return {
			oldTag: null,
			flag: 1
		}
	},
	created (){
		// this.$route.params.page = 'zz';
		// this.$router.push(this.$route.params.page);
		// this.$route.params.page = 'zz';
		// this.$router.push(this.$route.params.page);
		console.log(this.$route.params);
		this.flagUpdate(this.$route.params.page);
	},
	mounted() {
		this.oldTag = $("span")[this.flag - 1];
		$($("span")[this.flag - 1]).css("color", "red");
	},
	methods: {
		_show(tag) {
			if(this.flag == tag)
				return true;
			else 
				return false;
		},
		fontColorChange(){
			$(this.oldTag).css("color","#000");
			var event = window.event || arguments[0];
			var tag = event.target || event.srcElement;
			$(tag).css("color","red");
			this.oldTag = tag;
			switch (tag.innerHTML){
				case "动态":
					this.flag = 1;
					this.$route.params.page = 'blog';
					this.$router.push(this.$route.params.page);
					break;
				case "进吧":
					this.flag = 2;
					this.$route.params.page = 'tribe';
					this.$router.push(this.$route.params.page);
					break;
				case "好友":
					this.flag = 3;
					this.$route.params.page = 'friend';
					this.$router.push(this.$route.params.page);
					break;
				case "我的":
					this.flag = 4;
					this.$route.params.page = 'abouteMe';
					this.$router.push(this.$route.params.page);
					break;
				default:
					this.flag = 1;
					this.$route.params.page = 'blog';
					this.$router.push(this.$route.params.page);	
			};
			
		},
		flagUpdate (str){
    		switch (str){
    			case 'blog':
    				this.flag = 1;
    				break;
    			case 'tribe':
    				this.flag = 2;
    				break;
    			case 'friend':
    				this.flag = 3;
    				break;
    			case 'abouteMe':
    				this.flag = 4;
    				break;
    			default:
    				this.flag = 1;
    		}
    	}
	},
	watch: {
    	// '$route.params.page': function(newVal, oldVal){
    	// 	this.flagUpdate(newVal);
    	// }
    }
}
</script>

<style>
.home-info{
	width: 100%;
	background-color: #fff;
}
.home-info .content{
	width: 97%;
	margin: 0 1.5%;
}
.home-info .content .tab{
	position: fixed;
	width: 100%;
	height: 5%;
	left: 0;
	bottom: 0;
	font-size: 0px;
	border-top: 1px red solid;
	background-color: white;
}
.home-info .content .tab span{
	display: inline-flex;
    width: 20%;
    height: 100%;
    font-size: 28px;
    align-items: center;
    justify-content: center;
}
</style>