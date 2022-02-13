<template>
  <a :href="href" :class="[`x_link_${type}`,{
    x_link_disabled:disabled,
    x_link_underline:underline
  }]" :disabled="disabled">

    <i class="iconfont xiangyu_loading"
       :class="[`${icon}`]">
    </i>
    <slot></slot>
  </a>
</template>

<script setup>

import {defineProps} from "vue";

const props = defineProps({  // eslint-disable-line no-unused-vars
  href: {
    type:String,
    default:"https://www.baidu.com/"
  },
  type:{
    type:String,
    default:"default"
  },
  disabled:{
    type:Boolean,
    default:false
  },
  icon: {
    type:String,
    default:""
  },
  underline:{
    type:Boolean,
    default:false
  }
})
</script>

<style lang="scss">
.x_link{

  &_default{
    color: #000;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color: #409eff;
      text-decoration:underline;
    }
  }

  &_primary{
    color: #409eff;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color:rgba(59, 130, 246, .7);
      text-decoration:underline;
    }
  }

  &_success{
    color: #85ce61;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color: #67c23a;
      text-decoration:underline;
    }
  }


  &_warning{
    color: #ebb563;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color: #e6a23c;
      text-decoration:underline;
    }
  }


  &_danger{
    color: #F56C6B;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color: #f78989;
      text-decoration:underline;
    }
  }


  &_info{
    color: #a6a9ad;
    text-decoration:none;
    transition:0.2s all linear;
    &:hover{
      color: #909399;
      text-decoration:underline;
    }
  }

  &_disabled{
    cursor:not-allowed;
    pointer-events:none ;
  }

  &_underline{
    text-decoration:underline;
  }

}
</style>