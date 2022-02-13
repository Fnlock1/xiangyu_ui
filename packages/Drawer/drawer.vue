<template>
  <transition name="x_drawer_animation">
    <div class="x_drawer_mask" v-show="drawer_show" @click.self="drawer_cloes">
      <div class="x_drawer_concent" :style="{
      height:concent_height,
    }">
        <slot name="head_title"  ></slot>
        <slot name="head_content" ></slot>
        <div class="x_drawer_footer">
          <slot name="head_footer" class="x_drawer_footer" ></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
const emit=defineEmits(['drawer_cloes']);
const props=defineProps({  // eslint-disable-line no-unused-vars
  concent_height:{
    type: String,
    default:'20%'
  },
  head_title_align:{
    type:String,
    default:"center"
  },
  drawer_show:{
    type:Boolean,
    default:false
  }
})


function drawer_cloes(){
  emit('drawer_cloes',false)
}
</script>

<style lang="scss">

.x_drawer_mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0,0,0,0.2)
}

.x_drawer_concent{
  padding:10px;
  background-color: rgba(255,255,255,.6);
  filter: drop-shadow(0px 0.19rem 0.37rem rgba(0,0,0,0.09));
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  top: auto;
  border-radius:32px 32px 0px 0px;
}
.x_drawer_footer{
  position: fixed;
  bottom: 0;
  background-color:red;
  left:0;
  width: 100%;
}

.x_drawer_animation-enter-active,.x_drawer_animation-leave-active {
  transition: all 0.2s ease;
  //transform: translateY(-10px);

}
.x_drawer_animation_from,
.x_drawer_animation-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>