<template>
    <canvas ref="mainCanvas" class="mainCanvas"></canvas>
</template>

<script setup lang="ts">
import {onMounted, shallowRef, triggerRef, ShallowRef, nextTick} from 'vue'

const mainCanvas = shallowRef<HTMLCanvasElement>();


const toRadian = (d:number) => {
    return (d * Math.PI) / 180;
}

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

const draw = (canvas:ShallowRef<HTMLCanvasElement>)=>{
    const _canvas = canvas.value;
    const _context = _canvas.getContext('2d') as CanvasRenderingContext2D;
        resize();
        _context.beginPath(); //빈경로 새롭게 시작
        _context.strokeStyle = "#fff5fc" ; 
        console.log(_canvas.width)
        _context.arc(_canvas.width/4 , (_canvas.height/2)-100 , 100, toRadian(0), toRadian(90) , true );
        _context.stroke(); //context의 경로에 있는 도형 그리기
        triggerRef(canvas)
}

onMounted(async() => {
    await nextTick()
    draw(mainCanvas)
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
