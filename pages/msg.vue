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
                        <div class="time">{{item.time}}</div>
                   </div>
               </div>
            </div>
           <div class="paging">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                        <a href="#" aria-label="Next">
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

    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                msgDataList:[{
                    id:'',
                    title:'这是一条消息提示~~',
                    time:'2018-06-55 42:22:22',
                    cont:''
                },{
                    id:'',
                    title:'这是一条消息提示~~',
                    time:'2018-06-55 42:22:22',
                    cont:''
                },{
                    id:'',
                    title:'这是一条消息提示~~',
                    time:'2018-06-55 42:22:22',
                    cont:''
                },{
                    id:'',
                    title:'这是一条消息提示~~',
                    time:'2018-06-55 42:22:22',
                    cont:''
                },{
                    id:'',
                    title:'这是一条消息提示~~',
                    time:'2018-06-55 42:22:22',
                    cont:''
                }]
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
        
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