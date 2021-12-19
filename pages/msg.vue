<template>
   <div class='msg'>
       <div class="main-view container">
           <div class="table">
               <div class="tab-title">
                   <div class="num">serial number</div>
                   <div class="tab-col">title</div>
                   <div class="time">time</div>
               </div>
               <div class="tab-content">
                   <div class="list quick-view" v-for="(item,index) in msgDataList" :key="index" @click="msgDetails(item)"  data-toggle="modal" data-target="#myModal">
                        <div class="num">{{(pageNum-1)*pageSize+index+1}}</div>
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
                            <a href="javascript:void(0)"   @click="selectPageNum(item)">{{item}}</a>
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
       <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <span>{{details.title}}</span>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="product-details">
                            <div class="container">
                                <div class="row" style="min-height:300px;max-height:500px">
                                      {{details.content}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        components: {},
        data() {
        //这里存放数据
            return {
                pageSize:9,
                // pageNum:1,
                // msgDataList:[],
                // pageNumList:[],
                // pageIndex:1,
                details:{}
                // total:''
            };
        },
        //监听属性 类似于data概念
        computed: {},
        created() {},
        //监控data中的数据变化
        watch: {},
        async asyncData({query,$axios }) {
            let data = {
                pageSize:9,
                pageNum:query.prePageNum||1
            };
            let pageNumList =[];
            let total ='';
            let pageNum = query.pageNum||1;
            let pageIndex = query.pageNum||1;
            const resultData = await $axios.post(`/public/messageList`, data)
            let msgDataList = resultData.data.data.list;
                total = resultData.data.data.total;
                    let num = Math.ceil(total/9)
                    if(pageNumList.length==0){
                        if(num>=3){
                            num = 3;
                        }
                        for(let i =0;i<num;i++){
                            pageNumList.push(i+1)
                        }
                    }
            return {msgDataList,pageNumList,total,pageNum,pageIndex};
        },
        //方法集合
        methods: {
            msgDetails(item){
                console.log(item)
                this.details = item
            },
            getMsgList(){
                let data = {
                    pageSize:this.pageSize,
                    pageNum:this.pageNum
                };
                this.$axios.post(`/public/messageList`, data)
                .then(res=>{
                    this.msgDataList = res.data.data.list;
                    this.total = res.data.data.total;
                    let num =   Math.ceil(res.data.data.total/this.pageSize)
                    if(this.pageNumList.length==0){
                        if(num>=5){
                            num = 5;
                        }
                        for(let i=0;i<num;i++){
                            this.pageNumList.push(i+1)
                        }
                    }
                })      
            },
            selectPageNum(num){
                this.pageNum = num;
                this.pageIndex = num;
                location.href = `/msg?pageNum=${num}`;
            },
            prePageNum(){
                let num = this.pageNumList[0];
                if(num <= 1){
                    if(this.pageNum>1){
                        this.pageNum = this.pageNum-1;
                        this.pageIndex = this.pageIndex-1;
                        this.selectPageNum(this.pageNum)
                    }
                    return false
                }else{
                    num--
                    this.pageNumList.unshift(num);
                    this.pageNumList.pop()
                    this.pageNum = this.pageNum-1;
                    this.pageIndex = this.pageIndex-1;
                    this.selectPageNum(this.pageNum)
                }
            },
            nextPageNum(){
                let num = this.pageNumList[this.pageNumList.length-1];
                if(num*this.pageSize >= this.total){
                    if(this.pageNum*this.pageSize<this.total){
                        this.pageNum = parseInt(this.pageNum)+1;
                        this.pageIndex = parseInt(this.pageIndex)+1;
                        this.selectPageNum(this.pageNum)

                    }
                    return false
                }else{
                    num++
                    this.pageNumList.push(num);
                    this.pageNumList.shift();
                     this.pageNum = parseInt(this.pageNum)+1;
                    this.pageIndex = parseInt(this.pageIndex)+1;
                    this.selectPageNum(this.pageNum)
                }
            }
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            // this.getMsgList();
        },
    }
</script>
<style lang='scss' scoped>
    #myModal{
        z-index: 99999999;
    }
    @media screen and (max-width: 768px) {
        .modal-dialog{
            width: 500px!important;
        }
        .modal-content{
            margin: 0 auto;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        .modal-dialog{
            width:800px!important;
        }
        .modal-content {
           margin: 0 auto;
        }
    }
        

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
                cursor: pointer;
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