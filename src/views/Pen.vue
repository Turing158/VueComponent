<template>
    <div class="container">
			<div class="screen">
				<div class="screenContent">
					<form class="login">
						<div class="loginField">
							<i class="loginIcon fas fa-user"></i>
							<input type="text" class="loginInput" placeholder="用户名 / 邮箱">
						</div>
						<div class="loginField">
							<i class="loginIcon fas fa-lock"></i>
							<input type="password" class="loginInput" placeholder="密码">
						</div>
						<button class="button loginBtn">
							<span class="btnText">登录</span>
							<i class="btnIcon fas fa-chevron-right"></i>
						</button>				
					</form>
					<div class="socialLogin">
						<h3>其他登录方式</h3>
						<div class="socialIcons">
							<a href="#" class="socialIcon fab fa-github"></a>
						</div>
					</div>
				</div>
				<div class="screenBg">
					<span class="screemBgShape screemBgShape4"></span>
					<span class="screemBgShape screemBgShape3"></span>		
					<span class="screemBgShape screemBgShape2"></span>
					<span class="screemBgShape screemBgShape1"></span>
				</div>		
			</div>
		</div>
</template>
<script setup>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/css/all.css');
@import url('/src/assets/font/main.css');



.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  width: 100vw;
  height: 100vh;
  font-family: Inter,HarmonyOS Sans SC, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1;
  box-sizing: border-box;
}

.screen {		
  background: linear-gradient(90deg, #5479a4, #78a4b8);		
  position: relative;	
  height: 600px;
  width: 360px;	
  box-shadow: 0px 0px 24px #567296;
}

.screenContent {
  z-index: 1;
  position: relative;	
  height: 100%;
}

.screenBg {		
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);	
}

.screemBgShape {
  transform: rotate(45deg);
  position: absolute;
}

.screemBgShape1 {
  height: 520px;
  width: 520px;
  background: #f1f1f1;	
  top: -50px;
  right: 120px;	
  border-radius: 0 72px 0 0;
}

.screemBgShape2 {
  height: 220px;
  width: 220px;
  background: #6383ac;	
  top: -172px;
  right: 0;	
  border-radius: 32px;
}

.screemBgShape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5474a4, #677f9e);
  top: -24px;
  right: 0;	
  border-radius: 32px;
}

.screemBgShape4 {
  height: 400px;
  width: 200px;
  background: #7b98b9;	
  top: 420px;
  right: 50px;	
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.loginField {
  padding: 20px 0px;	
  position: relative;	
}

.loginIcon {
  position: absolute;
  top: 30px;
  color: #7875B5;
}

.loginInput {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: .2s;
}

.loginInput:active,
.loginInput:focus,
.loginInput:hover {
  outline: none;
  border-bottom-color: #67859e;
}

.loginBtn {
  background: #f1f1f1;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #48749d;
  box-shadow: 0px 2px 2px #567996;
  cursor: pointer;
  transition: .2s;
}

.loginBtn:active,
.loginBtn:focus,
.loginBtn:hover {
  border-color: #677f9e;
  outline: none;
}

.btnIcon {
  font-size: 24px;
  margin-left: auto;
  color: #758fb5;
}

.socialLogin {	
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #f1f1f1;
}

.socialIcons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.socialIcon {
  padding: 20px 10px;
  color: #f1f1f1;
  text-decoration: none;	
  text-shadow: 0px 0px 8px #7593b5;
  transition: all 0.2;
}

.socialIcon:hover {
  transform: scale(1.5);	
}
</style>
