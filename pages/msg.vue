<template>
   <div class='msg'>
       <div class="main-view container">
           <div class="table">
               <div class="tab-title">
                   <div class="num">序号</div>
                   <div class="tab-col">标题</div>
                   <div class="time">时间</div>
               </div>
               <div class="tab-content">
                   <div class="list" v-for="(item,index) in msgDataList" :key="index">
                        <div class="num">{{index+1}}</div>
                        <div class="tab-col">{{item.title}}</div>
                        <div class="time">{{item.updateTime}}</div>
                   </div>
               </div>
            </div>
           <div class="paging">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                        <a href="javascript:void(0)" aria-label="Previous" @click="prePageNum">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li v-for="(item,index) in pageNumList" :key="index" :class="pageIndex==item?'active':''" >
                            <a href="javascript:void(0)" @click="selectPageNum(item)">{{item}}</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" aria-label="Next" @click="nextPageNum">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
               </nav>
           </div>
       </div>
   </div>
</template>

<script>
   // import 《组件名称》 from '《组件路径》';
    import axios from 'axios'
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                pageSize:3,
                pageNum:1,
                msgDataList:[],
                pageNumList:[],
                pageIndex:1,
                total:''
            };
        },
        //监听属性 类似于data概念
        computed: {},
         created() {
            this.getMsgList()
        },
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            getMsgList(){
                let data = {
                    pageSize:this.pageSize,
                    pageNum:this.pageNum
                };
                axios.post(`http://192.168.101.69:7001/public/messageList`,data)
                .then(res=>{
                    console.log('res=>',res);
                    this.msgDataList = res.data.data.list;
                    this.total = res.data.data.total;
                    let num =   Math.ceil(res.data.data.total/this.pageSize)
                    if(this.pageNumList.length==0){
                        if(num>=5){
                            num = 5;
                        }
                        for(let i =0;i<num;i++){
                            this.pageNumList.push(i+1)
                        }
                    }
                })      
            },
            selectPageNum(num){
                this.pageNum = num;
                this.pageIndex = num;
                 this.getMsgList()
            },
            prePageNum(){
                let num = this.pageNumList[0];
                if(num <= 1){
                    return false
                }else{
                    num--
                    this.pageNumList.unshift(num);
                    this.pageNumList.pop()
                }
            },
            nextPageNum(){
                let num = this.pageNumList[this.pageNumList.length-1];
                if(num*this.pageSize >= this.total){
                    return false
                }else{
                    num++
                    this.pageNumList.push(num);
                    this.pageNumList.shift()
                }
            }
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            
        },
    }
</script>
<style lang='scss' scoped>
    .table{
        width: 100%;
        height: auto;
        min-height: 200px;
        padding: 20px 30px;
        .tab-title{
            border-top: 2px solid #62615a;
            border-bottom: 2px solid #bc9a4e;
            padding: 10px;
            text-align: center;
        }
        .tab-content{
            height: auto;
            width: 100%;
            .list{
                width: 100%;
                border-bottom:2px solid #dfdddc;
                padding: 10px;
                text-align: center;
            }
        }
        .tab-title,.list{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .num{
            flex: 2;
            text-align: center;
        }
        .tab-col{
            flex: 12;
        }
        .time{
             flex:3;
            text-align: center;
        }
    }
    .paging{
        text-align: center;
    }
</style>