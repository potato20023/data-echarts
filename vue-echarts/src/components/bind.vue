<template>
    <div id="bind">
        <!-- <div class="item">
            <div class="top clearfix">
                <img src="@/assets/image/bind_img1.png" alt="">
                <div class="text">
                    <p class="name">注册班级</p>
                    <p class="num">10000{{bindNum.bindNum}}</p>
                </div>
            </div>
            <img src="@/assets/image/bind_move.png" alt="" class="move">
            
        </div>
        <div class="item">
            <div class="top clearfix">
                <img src="@/assets/image/bind_img1.png" alt="">
                <div class="text">
                    <p class="name">在线班级</p>
                    <p class="num">{{bindNum.onlineNum}}</p>
                </div>
            </div>
            <img src="@/assets/image/bind_move.png" alt="" class="move">
        </div> -->
        <div class="item">
            <div class="top">
                <div class="text">
                    <p class="name1">注册班级:<span class="num1">{{bindNum.bindNum}}</span></p>
                    
                </div>
            </div>
        </div>
        <div class="item">
            <div class="top">
                <div class="text">
                    <p class="name1">在线班级:<span class="num1">{{bindNum.onlineNum}}</span></p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters(['bindNum'])
    }
}
</script>
