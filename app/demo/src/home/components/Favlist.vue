<template>
    <div id="isStart">
        <log-in v-if=" _show( 1 ) " @on-result-change="change"></log-in>
        <register v-if=" _show( 2 ) "></register>
        <home-info v-if=" _show( 3 ) "></home-info>
        <reg-succ v-if=" _show( 4 ) "></reg-succ>
    </div>
</template>

<script>
import Register from './register.vue'
import LogIn from './logIn.vue'
import HomeInfo from './homeInfo.vue'
import RegSucc from './registerSuccess.vue'

export default {
	components: {
        Register,
        LogIn,
        HomeInfo,
        RegSucc
  	},
    data (){
        return {
        	flag: ''
        }
    },
    created (){
    	this.flagUpdate(this.$route.params.id);
    }, 
    mounted (){
    },
    methods : {
    	_show (tag){
    		if (this.flag == tag) return true;
    		else return false;
    	},
    	change (da){
    		
    	},
    	flagUpdate (str){
    		switch (str){
    			case '/v1/login':
    				this.flag = 1;
    				break;
    			case '/v1/register':
    				this.flag = 2;
    				break;
    			case '/v1/homeInfo':
    				this.flag = 3;
    				break;
    			case '/v1/registerSuccess':
    				this.flag = 4;
    				break;
    			default:
    				this.flag = 1;
    		}
    	}
    },
    watch: {
    	'$route': function(newVal, oldVal){
            console.log(oldVal);
            console.log(newVal);
    		this.flagUpdate(newVal.path);
    	}
    }
}
</script>

<style>
body,ul,div,input{
	padding: 0;
	margin: 0;
}
html,body,#app,#isStart{
	height: 100%;
    width: 100%;
    max-width: 100%;
}
hr{
	height: 0px;
	border-width: 0px;
	-webkit-margin-before: 0;
    -webkit-margin-after: 0;
}
input{
	border:0;
	outline: none;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
color: #fff; 
} 
input:-moz-placeholder, textarea:-moz-placeholder { 
color: #fff; 
} 
input::-moz-placeholder, textarea::-moz-placeholder { 
color: #fff; 
} 
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
color: #fff; 
} 
input:focus {
        font-size: 20px !important;
}
</style>