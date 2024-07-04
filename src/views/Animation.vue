<!-- 需要字体文件/src/assets/font -->
 <!-- 需要安装SASS -->
<template>
    <div class="bg">
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="square" style="--i:5;"></div>
            
        <div class="container"> 
            <div class="form"> 
            <h2>登录</h2>
            <form action="">
                <div class="inputBx">
                <input type="text" required="required">
                <span>登录</span>
                <i class="fas fa-user-circle"></i>
                </div>
                <div class="inputBx password">
                <input id="password-input" type="password" name="password" required="required">
                <span>密码</span>
                <i class="fas fa-key"></i>
                </div>
                <label class="remember"><input type="checkbox">
                下次自动登录</label>
                <div class="inputBx">
                <input type="submit" value="登录" disabled> 
                </div>
            </form>
            <p>密码忘记了？<a href="#">点这</a></p>
            <p>还没有用户？<a href="#">注册</a></p>
            </div>
        </div>
            
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/css/all.css');
@import url('/src/assets/font/main.css');

.fas{
    margin-top: -3px;
}
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  font-family: Inter,HarmonyOS Sans SC, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
    }
  50% {
    background-position: 100% 50%;
    }
  100% {
    background-position: 0% 50%;
    }
}

.box {
  position: relative;
}

.box .square {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  animation: square 10s linear infinite;
  animation-delay: calc(-1s * var(--i));
}
@keyframes square {
  0%,100% {
    transform: translateY(-20px);
  }
  
  50% {
    transform: translateY(20px);
  }
}
.box .square:nth-child(1) {
  width: 100px;
  height: 100px;
  top: -15px;
  right: -45px;
}

.box .square:nth-child(2) {
  width: 150px;
  height: 150px;
  top: 105px;
  left: -125px;
  z-index: 2;
}

.box .square:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 85px;
  right: -45px;
  z-index: 2;
}

.box .square:nth-child(4) {
  width: 50px;
  height: 50px;
  bottom: 35px;
  left: -95px;
}

.box .square:nth-child(5) {
  width: 50px;
  height: 50px;
  top: -15px;
  left: -25px;
}

.box .square:nth-child(6) {
  width: 85px;
  height: 85px;
  top: 165px;
  right: -155px;
  z-index: 2;
}
.container {
  position: relative;
  padding: 50px;
  width: 260px;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
}
.container:hover{
    animation: bomb 0.2s;
}
@keyframes bomb {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02)
  }
  100% {
    transform: scale(1);
  }
}
.container::after {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 5px;
  pointer-events: none;
  background: linear-gradient( to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 2%
  );
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
}

.form h2 {
    color: #f1f1f1;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

.form .inputBx {
  position: relative;
  width: 100%;
  margin-bottom: 20px; 
}

.form .inputBx input {
  width: 80%;
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 10px;
  padding-left: 40px;
  border-radius: 15px;
  color: #f1f1f1;
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
    

    

.form .inputBx .fas {
  position: absolute;
  top: 13px;
  left: 13px;
}

.form .inputBx input[type="submit"] {
  background: #f1f1f1;
  color: #111;
  max-width: 100px;
  padding: 8px 10px;
  box-shadow: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.5s;
}

.form .inputBx input[type="submit"]:hover {
  background: linear-gradient(115deg, 
    rgba(0,0,0,0.10), 
    rgba(255,255,255,0.25));
  color: #f1f1f1;
  transition: .2s;
}

.form .inputBx input::placeholder {
  color: #f1f1f1;
}

.form .inputBx span {
  position: absolute;
  left: 30px;
  padding: 10px;
  margin-top: -2px;
  display: inline-block;
  color: #f1f1f1;
  transition: .2s;
  pointer-events: none;
}
input:focus ~ span,
input:valid ~ span {
  transform: translateX(-30px) translateY(-25px);
  font-size: 12px;
}
a{
    text-decoration: none;
    color: #f1f1f1;
}
.form p {
  color: #f1f1f1;
  font-size: 15px;
  margin-top: 5px;
}
.form a {
    color: #f1f1f1;
  }
  
  .form a:hover {
  background-color: #000;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
}

.remember {
  position: relative;
  display: inline-block;
  color: #f1f1f1;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>