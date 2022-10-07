<template>
    <div class="wrapper">
    <div class="head">
        <h1>УРОВНИ</h1>
        <div class="bot">
            <router-link to="Levels/Add"  class="add" >Создать уровень</router-link>
        </div>
    </div>
   
    <div class="articl levellist">
        <div class="box">
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>
            <LevelShowBox/>

        
        </div>
        <div class="pagin">
            <ul class="pagination">
                <li class="page-item">
                    <a class="prev page-link" href="#"><img src="@/assets/img/arrow1.svg" alt=""></a>
                </li>
                <li class="page-item active">
                    <span class="page-link current">1</span>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                    <span class="page-link">...</span>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">11</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">12</a>
                </li>
                <li class="page-item">
                    <a class="nextpage-link" href="#"><img src="@/assets/img/arrow2.svg" alt=""></a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="popup" id="popup1">
   <LevelPopupDesc/>
</div>

</template>


<script>
import LevelShowBox from './elementComponents/LevelShowBox.vue'
import LevelPopupDesc from './elementComponents/LevelPopupDesc.vue'
    export default {
        name:"AdminLevels",
        components:{
            LevelShowBox,
            LevelPopupDesc
        },
        mounted(){
            let self=this
            this.$Jquery('.show_popup').click(function() {                
                var popup_id = self.$Jquery(this).attr("rel")               
                self.$Jquery("#"+popup_id).show();               
            })

            this.$Jquery('.clouse').click(function() {                
                self.$Jquery('.popup').hide(); 
                self.$Jquery('body').removeClass('hide');
})
           
        }
    }
</script>

<style lang="scss" scoped>

</style>