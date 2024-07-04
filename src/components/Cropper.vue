<template>
    <div>
        <div class="default" :style="{width:prop.width,height:prop.height}" @click="selectFile">
            {{ prop.text }}
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
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
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
import { ref,reactive, onMounted } from 'vue';
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
    }
})
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
    ElMessage.info("上传")
    console.log(selected.value);
  }
  inputFile.value.value = ''
  selected.value = ''
}
const option = reactive({
  outputSize: 1,
  outputType: 'png',
  info: true,
  canScale: false,
  autoCrop: true,
  autoCropWidth: 100,
  autoCropHeight: 100,
  fixedBox: false,
  fixed: true,
  fixedNumber: [1, 1],
  canMove: true,
  canMoveBox: true,
  original: false,
  centerBox: true,
  infoTrue: false,
  full: true,
  enlarge: '1',
  mode: 'contain'
})
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
</style>