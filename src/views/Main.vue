<template>
    <canvas ref="mainCanvas" class="mainCanvas"></canvas>
</template>

<script setup lang="ts">
import {onMounted, shallowRef, triggerRef, ShallowRef, nextTick, ref, unref} from 'vue'
import {Circle} from '../resource/circle'

const mainCanvas = shallowRef<HTMLCanvasElement>();


const resize = ()=>{
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
    const _canvas = mainCanvas.value as HTMLCanvasElement
    _canvas.width = clientWidth*2;
    _canvas.height = clientHeight*2;
    _canvas.getContext('2d')?.scale(2,2);
}

const reset = ()=>{
    const context = mainCanvas.value?.getContext('2d');
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
    context?.clearRect(0, 0, clientWidth, clientHeight)
}

let temp = 5000

const animate= function(){
    mainCanvas.value?.getContext('2d').beginPath();
    const a = new Circle(mainCanvas.value.width/4, mainCanvas.value.height/2, temp,"#fff5fc")
    a.draw(mainCanvas.value.getContext('2d'))
    temp += 1000*6
    requestAnimationFrame(animate)
}

onMounted(async() => {
    if(mainCanvas.value){
        await nextTick()
        reset()
        resize()
        // make(mainCanvas.value)
        animate()
    }
})


</script>

<style scoped lang="scss">
.mainCanvas { 
   width: 100%; 
   height: 100%; 
//    border-radius: 300px 300px 0 0;
   background-color: #ff6376;
}
</style>
