<template>
    <div :style="{width:prop.width,height:prop.height,margin:prop.margin}" @click="refresh">
        <img :src="src" width="100%" height="100%" :alt="prop.alt">
    </div>
</template>
<script setup>
import { ref } from "vue";

const prop = defineProps({
    width: {
        type: String,
        default: "80px"
    },
    height: {
        type: String,
        default: "40px"
    },
    margin: {
        type: String,
        default: "0"
    },
    src: {
        type: String,
        default: "https://img-blog.csdnimg.cn/98d776ab30fa422495112665f61a3fb5.png"
    },
    alt: {
        type: String,
        default: "验证码"
    },
    prop:{
        type:String,
        default:"t"
    }
})
const randomChar = (len)=>{
    let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for(let i=0;i<len;i++){
        result += str.charAt(Math.floor(Math.random()*str.length));
    }
    return result;
}
const randomNum = ref(new Date().getTime()+randomChar(6))
const src = ref(prop.src+"?"+prop.prop+"="+randomNum.value)
const refresh = ()=>{
    randomNum.value = new Date().getTime()+randomChar(6)
    src.value = prop.src+"?"+prop.prop+"="+randomNum.value
    console.log("变量/prop:",prop.prop);
    console.log("refresh/刷新数值:",randomNum.value);
    console.log("src after refresh/刷新后src:",src.value);
}
defineExpose({
    randomNum,refresh
})
</script>
<style scoped>
    div{
        background-color: #ddd;
        cursor: pointer;
    }
</style>