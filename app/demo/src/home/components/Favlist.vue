<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
      
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style >
#example {
   /* background:#000000;
　　color:#fff;*/
    height: 100vh;
}
</style>