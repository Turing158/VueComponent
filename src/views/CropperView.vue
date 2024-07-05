<template>
  <div class="main">
    <a class="back" href="/">返回</a>
    <p>
      剪切需安装 vue-cropper@1.1.1 和 element-plus <br />
      Cropper needs to install vue-cropper@1.1.1 and element-plus
    </p>
    <p>
      剪切待更新【待更新各种样式】<br />
      Cropper to be updated【To be updated with various styles】
    </p>
    <br />
    <div class="item">
      <div class="name">默认/default</div>
      <div class="comp">
        <Cropper />
      </div>
    </div>
    <div class="item">
      <div class="name">自定义默认样式/Customize default styles</div>
      <div class="comp">
        <Cropper width="150px" height="80px" />
      </div>
    </div>
    <div class="item">
      <div class="name">按钮样式[默认]/Button style [default]</div>
      <div class="comp">
        <Cropper type="button" />
      </div>
    </div>
    <div class="item">
      <div class="name">禁止选择比例[默认比例为1:1，可选比例]/Prohibit selection of ratio [default ratio is 1:1, optional ratio]</div>
      <div class="comp">
        <Cropper :needProp="false" proportion="1,1" />
      </div>
    </div>
    <div class="item">
      <div class="name">是否可预览[默认可预览]/Can it be previewed by default</div>
      <div class="comp">
        <Cropper isPreview />
      </div>
    </div>
    <div style="width: 80vw">
      <el-table :data="data">
        <el-table-column prop="name" label="prop/属性"></el-table-column>
        <el-table-column prop="type" label="type/类型"></el-table-column>
        <el-table-column prop="default" label="default/默认值"></el-table-column>
        <el-table-column prop="desc" label="desc/描述"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import Cropper from '@/components/Cropper.vue'
import { ref } from 'vue'
const data = ref([
  {
    name: 'width',
    type: 'String',
    default: '200px',
    desc: '设置默认样式宽度，对按钮样式无效 | Set default style width, invalid for button styles'
  },
  {
    name: 'height',
    type: 'String',
    default: '200px',
    desc: '设置默认样式高度，对按钮样式无效 | Set default style height, invalid for button styles'
  },
  {
    name: 'text',
    type: 'String',
    default: '+',
    desc: "样式文字，在按钮样式中，'+'为'上传文件' | Style text, in button styles, '+' represents' upload file '"
  },
  {
    name: 'proportion',
    type: 'String',
    default: '1,1',
    desc: "设置默认比例，格式为'1,1'，对按钮样式无效 | Set default scale, format as' 1,1 ', invalid for button style"
  },
  {
    name: 'needProp',
    type: 'Boolean',
    default: 'true',
    desc: '是否需要选择比例 | Do you need to choose a proportion'
  },
  {
    name: 'isPreview',
    type: 'Boolean',
    default: 'true',
    desc: '是否可预览 | Can it be previewed'
  },
  {
    name: 'type',
    type: 'String',
    default: 'default',
    desc: "设置样式类型，可选值为'default'和'button' | Set the style type, with optional values of 'default' and 'button'"
  },
  {
    name: 'size',
    type: 'String',
    default: 'default',
    desc: "设置按钮样式大小，可选值为'small'和'large' | Set the button style size, with optional values of 'small' and 'large'"
  }
])
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 100vh;
}
p {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
}
a {
  margin: 10px;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 5px;
  text-decoration: none;
  color: #131313;
  transition: all 0.2s;
  cursor: pointer;
}
a:hover {
  background-color: #888;
  color: #fff;
}
.item {
  margin: 20px 0;
  padding: 10px 20px;
  border: 1px solid #000;
  display: inline;
  border-radius: 10px;
}
.item .name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.item .comp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
