<template>
    <div class="main">
        <div class="item">
            <p>登录界面/LoginPage</p>
            <div class="login">
                <router-link to="/simple">Simple</router-link>
                <router-link to="/animation">Animation</router-link>
                <router-link to="/pen">Pen</router-link>
                <router-link to="/cardDouble">CardDouble</router-link>
            </div>
        </div>
        <div class="item">
            <p>基础组件/PrimaryComp</p>
            <div class="login">
                <router-link to="/code">Code/验证码</router-link>
                <router-link to="/cropper">Cropper/图像剪裁</router-link>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
@import url('/src/assets/font/main.css');
*{
    margin: 0;
    padding: 0;
    font-family: Inter,HarmonyOS Sans SC, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1;
}
p{
    font-size: 25px;
    margin-bottom: 20px;

}
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;

}
.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
    border: 2px solid #0a4f88;
    border-radius: 10px;
    margin: 30px 0;
}
a{
    text-decoration: none;
    color: #0a4f88;
    padding: 5px 10px;
    border: 2px solid #0a4f88;
    border-radius: 5px;
    margin: 10px 5px;
    font-size: 18px;
    transition: all .2s;
}
a:hover{
    background-color: #0a4f88;
    color: white;
}

</style>