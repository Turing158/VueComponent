<template>
    <div class="main">
        <a class="back" href="/">返回</a>
        <div class="item">
            <div class="name">默认/primary</div>
            <div class="comp">
                <Code/>
            </div>
        </div>
        <div class="item">
            <div class="name">自定样式/Custom Style</div>
            <div class="comp">
                <Code width="100px" height="60px" margin="20px" alt="CCCCCCCCode"/>
            </div>
        </div>
        <div class="item">
            <div class="name">自定义变量/Custom Prop</div>
            <div class="comp">
                <Code prop="abc"/>
            </div>
        </div>
        <div class="item">
            <div class="name">组件信息/Component information</div>
            <div class="comp">
                <Code ref="code"/>
                <div style="margin: 20px;">
                    <a @click="refresh">刷新/refresh</a>
                    <a @click="getCode">获取数值/Get RandomNum</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Code from "@/components/Code.vue";
import { ref } from "vue";
const code = ref(null)
const refresh = ()=>{
    code.value.refresh()
}
const getCode = ()=>{
    console.log("获取数值/Get RandomNum:",code.value.randomNum);
}
</script>
<style scoped>
@import url('/src/assets/font/main.css');
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #f1f1f1;
    font-family: Inter,HarmonyOS Sans SC, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1;
  }
  .back{
    position: absolute;
    top: 0;
    left: 0;
  }
  a{
    margin: 10px;
    padding: 10px;
    border: 1px solid #888;
    border-radius: 5px;
    text-decoration: none;
    color: #131313;
    transition: all .2s;
    cursor: pointer;
  }
  a:hover{
    background-color: #888;
    color: #fff;
  }
  .item{
    margin: 20px 0;
    padding: 10px 20px;
    border: 1px solid #000;
    display: inline;
    border-radius: 10px;
  }
  .item .name{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .item .comp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>