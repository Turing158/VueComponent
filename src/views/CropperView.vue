<template>
    <div class="main">
        <p>
            剪切需安装 vue-cropper@1.1.1 和 element-plus <br>
            Cropper needs to install vue-cropper@1.1.1 and element-plus
        </p>
        <p>
            剪切待更新【目前仅支持1：1剪切，以及选择图片大小的宽高，待更新各种样式】<br>
            Cropper to be updated【Currently only supports 1:1 cropping, as well as selecting the width and height of the image size, to be updated with various styles】
        </p>
        <br>
        <div>
            <Cropper />
        </div>
    </div>
</template>
<script setup>
import Cropper from '@/components/Cropper.vue';
</script>
<style scoped>
.main{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
p{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}
</style>