import xiangyu_dialog from './dialog.vue';

xiangyu_dialog.install = function(app){
// 前面的文章都是基于Vue3的Setup-script的，所以ele.name即文件名
// 但是在这里可以重新定义组件名名。
    app.component('xiangyu_dialog', xiangyu_dialog)
}

export default xiangyu_dialog;
