<template>
  <div v-focus>
    <div class="x_down_input">
      <label class="x_placeholder">{{placeholder}}</label>
      <input
          type="text"
          class="x_placeholder_text"
      />
      <i class="iconfont icon-fanhui x_placeholder_icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownMenu",
  props:{
    placeholder:{
      type:String,
      default:"请输入"
    },
    size:{
      type:String,
      default:'md'
    }
  },
  directives:{
    focus:{
            mounted(el){
              const ondown=el.querySelector('.x_down_input')
              const onplaceholder=ondown.querySelector('.x_placeholder'),
                  oninput=ondown.querySelector('.x_placeholder_text'),
                  onicon=ondown.querySelector('.x_placeholder_icon')
              console.log(ondown)
              oninput.addEventListener('focus',function() {
                console.log(oninput)
                onplaceholder.style.display="none";
                onicon.className='iconfont icon-sousuo x_placeholder_icon';
                },false);

              oninput.addEventListener('blur',function() {
                onplaceholder.style.display="inline-block";
                onicon.className='iconfont icon-fanhui x_placeholder_icon';
              },false)

            }
      }
  }
}

</script>

<style lang="scss">
  .x_down_input{
    //height: 20px;
    //width: 314px;
  }
  .x_placeholder{
    position: absolute;
    left: 12px;
    color: rgba(0,0,0,0.6);
          &_icon{
           position: relative;
           top: 0px;
           left: -21px;
           top: 2px;
           color: rgba(0,0,0,0.5);

          }
     }
  .x_placeholder_text{
    border: 1px solid rgba(0,0,0,0.3 );
    transition:0.2s all linear;
    height: 20px;
    width: 200px;
    border-radius:4px;
    outline:none;
    padding-left:5px;
    &:focus{
      -webkit-filter: drop-shadow(0 0 5px #409eff);
      filter: drop-shadow(0 0 5px #409eff);
    }
  }


</style>