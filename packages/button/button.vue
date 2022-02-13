<template>
  <button class="xiangyu_button"
          :class="[`xiangyu_button_${type}`,{
            xiangyu_fillet:fillet,
            xiangyu_disabled:disabled
          },`xiangyu_button_${size}`]"
      >
    <i class="iconfont xiangyu_loading"
       :class="[`${icon}`]">
    </i>

    <slot></slot>
  </button>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps({  // eslint-disable-line no-unused-vars
  type:{
    type: String,
    default: "default"
  },
  fillet:{
    type:Boolean,
    default:false
  },
  disabled:{
    type:Boolean,
    default:false
  },
  icon:{
    type:String,
    default:''
  },
  size:{
    type:String,
    default:'md'
  },
});


</script>






<style lang="scss">
  //按钮大小设置
  $xiangyu_button_large:40px;
  //小按钮
  $xiangyu_button_small:24px;
  //标准字体大小
    $xiangyu_fontsize:14px;
  //标准颜色白色
  $xiangyu_fontcolor:white;
  //默认hover触发
  $xiangyu_button_hover:#409eff;
  //标准蓝色
  $xiangyu_button_blue:#c6e2ff;
  //圆角框
  .xiangyu_button.xiangyu_fillet{border-radius:20px;height:34px};
  $xiangyu_default_disabled: #e4e7ed;   //默认禁用样式
  $xiangyu_primary_disabled: rgb(160, 207, 255);   //primary禁用样式
  $xiangyu_warning_disabled: rgb(243, 209, 158);   //warning禁用样式
  $xiangyu_success_disabled: rgb(179, 225, 157);   //success禁用样式
  $xiangyu_danger_disabled:rgb(250, 182, 182);     //danger禁用样式
  $xiangyu_info_disabled:rgb(200, 201, 204);       //info样式
  //loading旋转(其他图标也是可以的)

  //primary没选中样式(背景)
  $xiangyu_primary_bg_color:#53a8ff;
  //primary没转中border样式
  $xiangyu_primary_border_color:#53a8ff;
  //primary在hover状态下的背景颜色
  $xiangyu_primary_hover_bg_color:#79bbff;
  //primary在hover状态下的boder的颜色
  $xiangyu_primary_hover_border_color:#79bbff;
  //primary在选中状态下的背景颜色
  $xiangyu_primary_focus_bg_color:rgb(58, 142, 230);
  //primary在状态下的boder的颜色
  $xiangyu_primary_focus_border_color:rgb(58, 142, 230);




  //success没选中样式(背景)
  $xiangyu_success_bg_color:#67c23a;
  //success没选中boder的颜色
  $xiangyu_success_border_color:#67c23a;
  //在hover状态下的success的背景颜色
  $xiangyu_success_hover_bg_color:rgb(133, 206, 97);
  //在hover状态下的success的border的颜色
  $xiangyu_success_hover_border_color:rgb(133, 206, 97);
  //在选中状态下的success的背景颜色
  $xiangyu_success_focus_bg_color:rgb(93, 175, 52);
  //在选中状态下的success的boder的颜色
  $xiangyu_success_focus_border_color:rgb(93, 175, 52);




  //warning没有选中样式
  $xiangyu_warning_bg_color:#e6a23c;
  //warning没有border样式
  $xiangyu_warning_border_color:#e6a23c;
  //warning在hover状态下背景颜色
  $xiangyu_warning_hover_bg_color: rgb(235, 181, 99);
  //warning在hover状态下boder颜色
  $xiangyu_warning_hover_border_color: rgb(235, 181, 99);
  //在选中状态下warning的背景颜色
  $xiangyu_warning_focus_bg_color:rgb(207, 146, 54);
  //在选中状态下warning的boder颜色
  $xiangyu_warning_focus_border_color:rgb(207, 146, 54);




  //danger没选中的样式
  $xiangyu_danger_bg_color:#f56c6c;
  //dang没选中的boder样式
  $xiangyu_danger_border_color:#f56c6c;
  //在hover状态下danger背景颜色的样式
  $xiangyu_danger_hover_bg_color:rgb(247, 137, 137);
  //在hover状态下border的样式
  $xiangyu_danger_hover_border_color:rgb(247, 137, 137);
  //选中状态下的背景颜色
  $xiangyu_danger_focus_bg_color:rgb(221, 97, 97);
  //选中状态下的border的颜色
  $xiangyu_danger_focus_border_color:rgb(221, 97, 97);




  //info没选中的样式
  $xiangyu_info_bg_color:#909399;
  //info没选中boder样式
  $xiangyu_info_border_color:#909399;
  //在hover状态下背景颜色(info)
  $xiangyu_info_hover_bg_color:rgb(166, 169, 173);
  //在hover状态下的border(info)
  $xiangyu_info_hover_border_color:rgb(166, 169, 173);
  //选中状态下的背景颜色(info)
  $xiangyu_info_focus_bg_color:rgb(130, 132, 138);
  //在选中状态下的border(info)
  $xiangyu_info_focus_border_color:rgb(130, 132, 138);


  .xiangyu_button{
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_fontsize;
    color: $xiangyu_fontcolor;
    border-radius:7px;
    padding: 4px 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s linear;
  }



//  默认样式
.xiangyu_button_default{
  background-color:white ;
  height: 32px;
  white-space: nowrap;
  font-size:$xiangyu_fontsize;
  color: black;
  border: 1px solid #DCDCDC;
  &:hover{
    color: $xiangyu_button_hover;
    background:$xiangyu_button_blue;
    border: 1px solid #c6e2ff;
  }
  &:focus{
    background:$xiangyu_button_blue;
    color: $xiangyu_button_hover;
    border: 1px solid #c6e2ff;
  }
}


  //primary样式
  .xiangyu_button_primary{
    background-color:$xiangyu_primary_bg_color ;
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_fontsize;
    color: white;
    border: 1px solid $xiangyu_primary_border_color;
    &:hover{
      color: white;
      background:$xiangyu_primary_hover_bg_color;
      border: 1px solid $xiangyu_primary_hover_border_color;
    }
    &:focus{
      background:$xiangyu_primary_focus_bg_color;
      color: white;
      border: 1px solid $xiangyu_primary_focus_border_color;
    }
  }


//  success样式
  .xiangyu_button_success{
    background-color: $xiangyu_success_bg_color;
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_success_border_color;
    color: white;
    border: 1px solid #DCDCDC;
    &:hover{
      color: white;
      background: $xiangyu_success_hover_bg_color;
      border:1px solid $xiangyu_success_hover_border_color;
    }
    &:focus{
      background: $xiangyu_success_focus_bg_color;
      color: white;
      border:1px solid $xiangyu_success_focus_border_color;
    }
  }


//  warning样式
  .xiangyu_button_warning{
    background-color: $xiangyu_warning_bg_color;
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_fontsize;
    color: white;
    border: 1px solid $xiangyu_warning_border_color;
    &:hover{
      color: white;
      background: $xiangyu_warning_hover_bg_color;
      border:1px solid $xiangyu_warning_hover_border_color;
    }
    &:focus{
      background:$xiangyu_warning_focus_bg_color;
      color: white;
      border:1px solid $xiangyu_warning_focus_bg_color;
    }
  }


//  danger样式
  .xiangyu_button_danger{
    background-color: $xiangyu_danger_bg_color;
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_fontsize;
    color: white;
    border: 1px solid $xiangyu_danger_border_color;
    &:hover{
      color: white;
      background: $xiangyu_danger_hover_bg_color;
      border:1px solid $xiangyu_danger_hover_border_color;
    }
    &:focus{
      background:$xiangyu_danger_focus_bg_color;
      color: white;
      border:1px solid $xiangyu_danger_focus_border_color;
    }
  }


//  info样式
  .xiangyu_button_info{
    background-color: $xiangyu_info_bg_color;
    height: 32px;
    white-space: nowrap;
    font-size:$xiangyu_fontsize;
    color: white;
    border: 1px solid $xiangyu_info_border_color;
    &:hover{
      color: white;
      background: $xiangyu_info_hover_bg_color;
      border:1px solid $xiangyu_info_hover_border_color;
    }
    &:focus{
      background:$xiangyu_info_focus_bg_color;
      color: white;
      border:1px solid $xiangyu_info_focus_border_color;
    }
  }




//  文本样式
  .xiangyu_button_text{
    border: 0;
    background:none;
    color: #000;
    font-weight: 550;
    &:hover{
      color: #36ad6a;
    }
    &:focus{
      color: #36ad6a;

    }
  }



//  禁用状态
  //默认样式禁用
  .xiangyu_button_default.xiangyu_disabled {
      background:$xiangyu_default_disabled;
    border: $xiangyu_default_disabled;
    cursor: not-allowed;
    color: #c0c4cc;
      &:hover{
        background:$xiangyu_default_disabled;
        color: #c0c4cc;
        border: $xiangyu_default_disabled;
      }
    &:focus{
      background:$xiangyu_default_disabled;
      color: #c0c4cc;
      border: $xiangyu_default_disabled;
    }
  }


  //primary的样式禁用
  .xiangyu_button_primary.xiangyu_disabled {
    background:$xiangyu_primary_disabled;
    border: $xiangyu_primary_disabled;
    cursor: not-allowed;
    &:hover{
      background:$xiangyu_primary_disabled;
      border: $xiangyu_primary_disabled;
      color: white;
    }
    &:focus{
      background:$xiangyu_primary_disabled;
      border: $xiangyu_primary_disabled;
      color: white;
    }
  }


  //warning的禁用样式
  .xiangyu_button_warning.xiangyu_disabled {
    background:$xiangyu_warning_disabled;
    border: $xiangyu_warning_disabled;
    cursor: not-allowed;
    &:hover{
      background:$xiangyu_warning_disabled;
      border: $xiangyu_warning_disabled;
      color: white;
    }
    &:focus{
      background:$xiangyu_warning_disabled;
      border: $xiangyu_warning_disabled;
      color: white;
    }
  }


//  success 的禁用样式
  .xiangyu_button_success.xiangyu_disabled {
    background:$xiangyu_success_disabled;
    border: $xiangyu_success_disabled;
    cursor: not-allowed;
    &:hover{
      background:$xiangyu_success_disabled;
      border: $xiangyu_success_disabled;
      color: white;
    }
    &:focus{
      background:$xiangyu_success_disabled;
      border: $xiangyu_success_disabled;
      color: white;
    }
  }


//  danger的禁用样式
  .xiangyu_button_danger.xiangyu_disabled {
    background:$xiangyu_danger_disabled;
    border: $xiangyu_danger_disabled;
    cursor: not-allowed;
    &:hover{
      background:$xiangyu_danger_disabled;
      border: $xiangyu_danger_disabled;
      color: white;
    }
    &:focus{
      background:$xiangyu_danger_disabled;
      border: $xiangyu_danger_disabled;
      color: white;
    }
  }


//  info的禁用样式
  .xiangyu_button_info.xiangyu_disabled {
    background:$xiangyu_info_disabled;
    border: $xiangyu_info_disabled;
    cursor: not-allowed;
    &:hover{
      background:$xiangyu_info_disabled;
      border: $xiangyu_info_disabled;
      color: white;
    }
    &:focus{
      background:$xiangyu_info_disabled;
      border: $xiangyu_info_disabled;
      color: white;
    }
  }


//大按钮
  .xiangyu_button_large {
    height: $xiangyu_button_large;
  }

  .xiangyu_button_small {
    height: $xiangyu_button_small;
    padding-bottom: 24px;
  }


</style>
