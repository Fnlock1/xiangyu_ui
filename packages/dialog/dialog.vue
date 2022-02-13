<template>
  <transition name="x_dialog_animation">
    <div class="x_dialog" v-show="dialog_show" @click.self="handcolse">
      <div class="x_dialog_body" :style="{width:width,top:top}">
        <!--            这里是标题-->
        <div class="x_dialog_head">
          <div class="x_dialog_title" :class="{
            x_dialog_title_center:center
          }">
            <div>{{title}}</div>
          </div>
          <!--这里是减号-->
          <div class="x_dialog_x" @click="handcolse">
            <i class="icon-cuocha_kuai iconfont x_dialog_x" ></i>
          </div>
        </div>



        <!--        这里是内容区-->
        <div class="x_dialog_msg">
          <slot></slot>
        </div>


        <div class="x_dialog_foot" v-if="$slots.footer" :class="{
          x_dialog_foot_center:center
        }">
          <slot name="footer" ></slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
const emit=defineEmits(['close'])
const props=defineProps({   // eslint-disable-line no-unused-vars
  title:{
    type:String,
    default:'提示'
  },
  width:{
    type:String,
    default:'50%'
  },
  top:{
    type:String,
    default:'20%'
  },
  footer:{
    type:String,
    default:''
  },
  center:{
    type:Boolean,
    default:false
  },
  dialog_show:{
    type:Boolean,
    default:false
  },

})

function handcolse(){
  emit('close',false)

}


</script>

<style lang="scss">

//我们在这里说一遍，为了方便我们把xiangyu_button这种名字改成了x_button
  .x_dialog{  //这是背景灰色
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    background-color:rgba(0,0,0,0.5);

    &_animation-enter-active,&_animation-leave-active {
      transition: all 0.2s ease;
    }
    &_animation_from,
    &_animation-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }

    &_body{   //这是用户看到的白色部分   这里叫做内容区
      width: 50%;
      background-color: white;
      position: absolute;
      top: 20%;
      left:25%;
      border-radius:9px
    }

    &_title{
      padding:10px;
          &_center{
              margin:0 auto;
          }
    }

    &_head{   //这是用户区的头部
    display: flex;
      flex-direction: row;
      justify-content:space-between;
      width: 90%;
      margin:0 auto;
      font-size:18px;
      font-weight: 500;
    }

    $dialog_more_color:rgba(59, 130, 246, .5);
  &_x{   //这是减号
    color: rgba(0,0,0,0.5);
    cursor: pointer;
    transition:all 0.2s linear;
    &:hover{
      color: $dialog_more_color;
    }
  }



    &_msg{
      font-size:14px;
      font-weight: 500;
      text-align: left;
      width: 90%;
      margin:0 auto;
      margin-top: 10px;
      padding:20px
    }


  &_foot{
    float: right;
    margin-bottom: 10px;
    &_center{
        float:none;
    }
    }

    & button{
      width: 83px;
      height: 32px;
      //padding:8px;
      margin-right: 6px;
    }
  }



.x_dialog_cancel{
  font-size: 14px;
  background-color:white;
  border: 1px solid #DCDCDC;
  color: black;
  transition:0.2s all linear;
  cursor: pointer;
  &:hover{
    color: #409eff;
    background:#c6e2ff;
    border: 1px solid #c6e2ff;
  }
}


.x_dialog_confirm{
  background-color:#67c23a ;
  height: 32px;
  white-space: nowrap;
  font-size:14px;
  color: white;
  border: 1px solid #67c23a;
  cursor: pointer;
  &:hover{
    color: white;
    background:rgb(133, 206, 97);
    border: 1px solid rgb(133, 206, 97);
  }
  &:focus{
    background:rgb(93, 175, 52);
    color: white;
    border: 1px solid rgb(93, 175, 52);
  }
}
</style>