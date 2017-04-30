<template>
    <div id="isStart">
        <!-- <div :class=" {login: isAct} " :style="{ backgroundImage: 'url('+bg+')' }">
    		{{ date }}
        </div> -->
        <register v-if="_show(1)" ></register>
        <log-in v-if="_show(2)" ></log-in>
        <home-info v-if="_show(3)" ></home-info>
    </div>
</template>

<script>
import Register from './register.vue'
import LogIn from './logIn.vue'
import HomeInfo from './homeInfo.vue'

export default {
	components: {
        Register,
        LogIn,
        HomeInfo
  	},
    data () {
        return {
        	flag: 2
        }
    },
    mounted () {
    },
    methods : {
    	_show (tag) {
    		if (this.flag == tag) return true;
    		else return false;
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
</style>