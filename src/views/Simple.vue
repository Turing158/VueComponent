<template>
    <div class="bg">
        <div class="wrapper">
            <form action="#">
                <h1>Login</h1>
                <div class="input-box">
                <i class="fas fa-user icon"></i>
                <input id="usernameInput" type="username" required />
                <label>用户名</label>
                </div>
                <div class="input-box">
                <i class="fas fa-lock icon"></i>
                <input id="passwordInput" type="password" required />
                <label>密码</label>
                </div>

                <div class="row">
                

                <a href="#" onclick="forgotman()">忘记密码了?</a>
                </div>

                <button onclick="loginBrungle()" class="btn">登录</button>

                <div class="signup-link">
                <p>没有用户? <a href="#">创一个.</a></p>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/css/all.css');
@import url('/src/assets/font/main.css');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition:all 0.2s;
}
.bg {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #283137;
  background-size: cover;
  background-position: center;
  font-family: Inter,HarmonyOS Sans SC, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 450px;
  background: #3e474d;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}
  
.wrapper:hover {
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
    background: #464b4e;
}

.wrapper h1 {
  font-size: 2em;
  color: #f1f1f1;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 310px;
  margin: 30px 0;
  border-bottom: 2px solid #f1f1f1;
}

.wrapper .input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1em;
  color: #f1f1f1;
  padding: 0 40px 0 5px;
}

.wrapper .input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #f1f1f1;
  pointer-events: none;
  transition: 0.2s;
}

.wrapper .input-box input:focus ~ label,
.wrapper .input-box input:valid ~ label {
  top: -5px;
}

.wrapper .input-box .icon {
  position: absolute;
  right: 8px;
  color: #f1f1f1;
  font-size: 1.2em;
  line-height: 57px;
}

.wrapper .row {
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #f1f1f1;
  display: flex;
  justify-content: space-between;
}

.wrapper .row label {
  display: flex;
  align-items: center;
  gap: 5px;
}

.wrapper .row a {
  color: #f1f1f1;
  text-decoration: none;
}

.wrapper .options a:hover {
  text-decoration: underline;
}

.wrapper .btn {
  width: 100%;
  height: 40px;
  background: #f1f1f1;
  outline: none;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  color: #000;
  margin-top: 10px;
}
  
.btn:hover {
  background: #ffffea;
}

.wrapper .signup-link {
  font-size: 0.9em;
  color: #f1f1f1;
  text-align: center;
  margin: 25px 0 10px;
}

.wrapper .signup-link a {
  color: #f1f1f1;
  text-decoration: none;
  font-weight: 600;
}

.wrapper .signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 360px) {
  .wrapper {
    width: 100%;
    height: 100vh;
    border: none;
    border-radius: 0px;
  }

  .wrapper .input-box {
    width: 290px;
  }
  #img {
  z-index: -90;
  }
}
</style>