<template>
    <div>
        
        <div v-if="prop.type == 'button'" class="btn upload" :class="prop.size == 'small' ? 'small' : prop.size == 'large' ? 'large' : '' " @click="selectFile">{{ prop.text=="+" ? '上传文件' : prop.text }}</div>
        <div v-if="prop.type == 'button'" :style="{width:prop.width,height:prop.height}" v-show="selected && isPreview">
          预览/Preview
          <img class="preview border" :src="selected"/>
        </div>
        <div v-else class="default" :style="{width:prop.width,height:prop.height}" @click="selectFile">
            <span v-show="!selected && isPreview">
              {{ prop.text }}
            </span>
            <img class="preview" v-show="selected && isPreview" :src="selected"/>
        </div>
        <input ref="inputFile" class="hidden" type="file" hidden>
        <el-dialog title="裁剪头像" v-model="cropperPage" :close-on-click-modal="false" @close="cancle()">
      <div class="cropperDiv">
        <VueCropper
          class="cropper"
          ref="cropper"
          :img="selected"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          :info="option.info"
          :canScale="option.canScale"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox"
          :fixed="!freeProp"
          :fixedNumber="proportion.toString().split(',')"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :centerBox="option.centerBox"
          :infoTrue="option.infoTrue"
          :full="option.full"
          :enlarge="option.enlarge"
          :mode="option.mode"
          @realTime="realTime"
        >
        </VueCropper>
        <div class="operateClip">
          <el-select v-show="needProp" v-model="proportion" @change="onSelectChange">
            <el-option label="自由比例" value="0,0"></el-option>
            <el-option label="1:1" value="1,1"></el-option>
            <el-option label="1:2" value="2,1"></el-option>
            <el-option label="4:3" value="4,3"></el-option>
            <el-option label="16:9" value="16,9"></el-option>
            <el-option label="2:1" value="1,2"></el-option>
            <el-option label="3:4" value="3,4"></el-option>
            <el-option label="9:16" value="9,16"></el-option>
          </el-select>
          <div class="btn" @click="cropper.rotateRight()">顺时针旋转90°</div>
          <div class="btn" @click="cropper.rotateLeft()">逆时针旋转90°</div>
          <div class="btn" @click="onclip()">确定/Confirm</div>
          <div class="btn" @click="cancle()">取消/Cancel</div>
        </div>
      </div>
    </el-dialog>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { ref, onMounted } from 'vue';
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
const prop = defineProps({
    width: {
        type: String,
        default: "200px"
    },
    height: {
        type: String,
        default: "200px"
    },
    text: {
        type: String,
        default: "+"
    },
    proportion: {
        type: String,
        default: "1,1"
    },
    needProp: {
        type: Boolean,
        default: true
    },
    isPreview: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: "default"
    },
    size:{
        type: String,
        default: "default"
    }
})
const permitSelectProp = ref(prop.needProp)
const freeProp = ref(prop.needProp)
const proportion = ref(prop.proportion)
const inputFile = ref(null);
const selectFile = () => {
    inputFile.value.click();
}
const cropper = ref()
const selected = ref('')
const cropperPage = ref(false)
const confirmFile = async () => {
  if (selected.value == '') {
    ElMessage.error('请先选择图片')
  } else {
    ElMessage.info("剪裁完成")
    console.log(selected.value);
  }
  inputFile.value.value = ''
}
const option = ref({
  outputSize: 1,
  outputType: 'png',
  info: true,
  canScale: false,
  autoCrop: true,
  autoCropWidth: 100,
  autoCropHeight: 100,
  fixedBox: false,
  canMove: true,
  canMoveBox: true,
  original: false,
  centerBox: true,
  infoTrue: false,
  full: true,
  enlarge: '1',
  mode: 'contain'
})
const onSelectChange = (e)=>{
  if(permitSelectProp.value){
    if(e == '0,0'){
      freeProp.value = true
    }
    else{
      freeProp.value = false
    }
  }
}
const preview = ref('')
const realTime = (data) => {
  preview.value = data
}
const onclip = () => {
  cropper.value.getCropData((data) => {
    selected.value = data
    cropperPage.value = false
    confirmFile()
  })
}
const cancle = ()=>{
  cropperPage.value = false
}

const initInput = ()=>{
  inputFile.value.addEventListener('change', function () {
    let inputFileValue = inputFile.value
    if (!inputFileValue.value) {
      inputFileValue.value = ''
      return
    }
    let file = inputFileValue.files[0]
    let size = file.size
    if (size >= 5 * 1024 * 1024) {
      inputFileValue.value = ''
      ElMessage.error('文件大小超出限制(5MB)')
      return false
    }
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      inputFileValue.value = ''
      ElMessage.error('不是有效的图片文件!')
      return
    }
    let reader = new FileReader()
    reader.onload = function (e) {
      let data = e.target.result
      selected.value = data
      console.log(data);
      cropperPage.value = true
    }
    reader.readAsDataURL(file)
  })
}

onMounted(initInput)
</script>
<style scoped>
*{
  user-select: none;
}
.hidden{
    display: none;
}
.default{
    border: 2px dashed #0a4f88;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #0a4f88;
    cursor: pointer;
}
.upload{
  display: flex;
  justify-content: center;
  align-items: center;
}
.small{
    width: 80px !important;
    height: 30px !important;
    font-size: 15px;
}
.large{
    width: 120px !important;
    height: 50px !important;
    font-size: 20px;
}
.cropperDiv{
  height: 60vh;
  display: flex;
}
.cropper{
  width: 60vw;
  height: 60vh;
}
.operateClip{
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 20px;
}
.btn{
  width: 100px;
  height: 40px;
  padding: 0 5px;
  margin: 20px 0;
  color: #0a4f88;
  background-color: #0a4f8833;
  border: 2px solid #0a4f88;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;
}
.btn:hover{
  background-color: #0a4f88;
  color: white;
}
.preview{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
}
.border{
    border: 2px solid #0a4f88;
}
</style>