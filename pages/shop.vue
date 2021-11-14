<template>
   <div class=''>
             <!-- heading-banner-start -->
        <div class="heading-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="breadcrumb">
                            <a title="Return to Home" href="index.html">
                                <i class="icon-home"></i>
                            </a>
                            <span class="navigation-page">
                                <span class="navigation-pipe">></span>
                                Shop
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- heading-banner-end -->
          <!-- shop-area-start -->
        <div class="shop-area">
            <div class="container align" >
                <div class="col-md-9 col-sm-9 col-xs-12">
                    <div class="shop-right-col wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div class="category-products">
                            <div class="topbar-category">
                                <div class="pager-area">
                                    <div>
                                        <!-- Nav tabs -->
                                        <ul class="shop-tab">
                                            <li role="presentation" class="active"><a href="#gried_view" role="tab" data-toggle="tab">
                                                    <i class="fa fa-th-large"></i></a>
                                            </li>
                                            <li role="presentation"><a href="#list_view" role="tab" data-toggle="tab">
                                                    <i class="fa fa-th-list"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- <div class="sort-by hidden-xs">
                                    <label>Sort by</label>
                                    <select>
                                        <option value="#">Price: Lowest first</option>
                                        <option value="#">Price: Highest first</option>
                                        <option value="#">Product Name: A to Z</option>
                                        <option value="#">Product Name: Z to A</option>
                                        <option value="#">In stock</option>
                                        <option value="#">Reference: Lowest first</option>
                                        <option selected="selected" value="#">--</option>
                                    </select>
                                </div>
                                <div class="show hidden-xs">
                                    <label>Show</label>
                                    <select>
                                        <option value="#">24</option>
                                        <option selected="selected" value="#">12</option>
                                    </select>
                                    <span>per page</span>
                                </div> -->
                                <div class="shop-breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" @click="prePageNum">&lt;</a>
                                        </li>
                                        <li v-for="(item,index) in pageNumList" :key="index" :class="pageIndex==item?'active':''" >
                                            <a href="javascript:void(0)" @click="selectPageNum(item)">{{item}}</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" @click="nextPageNum">></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="shop-category-product">
                                <div class="row">
                                    <div class="category-product">
                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active fade in" id="gried_view">
                                                <div class="col-md-4 col-sm-6 col-xs-12 top-mar" v-for="(item,index) in productList"  :key="index">
                                                    <!-- single-product-start -->
                                                    <div class="single-product">
                                                        <div class="single-product-img">
                                                            <a href="javascript:void(0)">
                                                                <img :src="imageUrl+item.image" alt="" />
                                                            </a>
                                                            <span class="sale-box">
                                                                <span class="sale">Sale</span>
                                                            </span>
                                                            <span class="new-box">
                                                                <span class="new">New</span>
                                                            </span>
                                                        </div>
                                                        <div class="single-product-content">
                                                            <div class="product-title">
                                                                <h5>
                                                                    <a href="javascript:void(0)">{{item.name}}</a>
                                                                </h5>
                                                            </div>
                                                            <div class="rating">
                                                                <div class="star" :class="zndex<=item.star?'star-on':''" v-for="(zndex) in 5 " :key="zndex"></div>
                                                            </div>
                                                            <div class="price-box">
                                                                <span class="price">${{item.price}}</span>
                                                                <span class="old-price">${{item.oldPrice}}</span>
                                                            </div>
                                                            <div class="product-action">
                                                                <a class="add-wishlist" href="#" title="add to wishlist">
                                                                    <i class="fa fa-heart"></i>
                                                                </a>
                                                                <a class="quick-view" href="#" title="quick view" @click="productDetails(item)"  data-toggle="modal" data-target="#myModal">
                                                                    <i class="fa fa-search"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- single-product-end -->
                                                </div>
                                            </div>
                                            <div role="tabpanel" class="tab-pane fade" id="list_view">
                                                <div class="list-view">
                                                    <div class="row">
                                                        <div class="col-md-12 col-sm-12 col-xs-12 top-mar" v-for="(item,index) in productList"  :key="index">
                                                            <div class="col-md-4 col-sm-4 col-xs-12">
                                                                <!-- single-product-start -->
                                                                <div class="single-product">
                                                                    <div class="single-product-img">
                                                                        <a href="javascript:void(0)">
                                                                            <img :src="imageUrl+item.image" alt="" />
                                                                        </a>
                                                                        <span class="sale-box">
                                                                            <span class="sale">Sale</span>
                                                                        </span>
                                                                        <span class="new-box">
                                                                            <span class="new">New</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <!-- single-product-end -->
                                                            </div>
                                                            <div class="col-md-8 col-sm-8 col-xs-12">
                                                                <!-- single-product-start -->
                                                                <div class="single-product">
                                                                    <div class="single-product-content">
                                                                        <div class="product-title">
                                                                            <h5>
                                                                                <a href="javascript:void(0)">{{item.name}}</a>
                                                                            </h5>
                                                                        </div>
                                                                        <div class="rating">
                                                                           <div class="star" :class="zndex<=item.star?'star-on':''" v-for="(zndex) in 5 " :key="zndex"></div>
                                                                        </div>
                                                                        <div class="price-box">
                                                                            <span class="price">${{item.price}}</span>
                                                                            <span class="old-price">${{item.oldPrice}}</span>
                                                                        </div>
                                                                          <div class="product-action">
                                                                            <a class="add-wishlist" href="#" title="add to wishlist">
                                                                                <i class="fa fa-heart"></i>
                                                                            </a>
                                                                            <a class="quick-view" title="quick view" @click="productDetails(item)"  data-toggle="modal" data-target="#myModal">
                                                                                <i class="fa fa-search"></i>
                                                                            </a>
                                                                        </div>
                                                                        <p class="product-desc">{{item.desc}}</p>
                                                                        <div class="availability">
                                                                            <span>In stock</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- single-product-end -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- shop-area-end -->
                <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="product-details">
                            <div class="container">
                                <div class="row" style="min-height:300px;max-height:500px">
                                    <div class="col-md-5 col-xs-12 col-sm-5" >
                                        <div class="picture-tab">
                                            <ul class="pic-tabs">
                                                <li class="active" v-if="details.image"><a data-toggle="tab" href="#pic0"><img :src="imageUrl+details.image" alt="" /></a></li>
                                                <li v-if="details.detailImage1"><a data-toggle="tab" href="#pic1"><img :src="imageUrl+details.detailImage1" alt="" /></a></li>
                                                <li v-if="details.detailImage2"><a data-toggle="tab" href="#pic2"><img :src="imageUrl+details.detailImage2" alt="" /></a></li>
                                                <li v-if="details.detailImage3"><a data-toggle="tab" href="#pic3"><img :src="imageUrl+details.detailImage3" alt="" /></a></li>
                                            </ul>
                                            <div class="tab-content">
                                                <div id="pic0" class="tab-pane fade in active"  v-if="details.image">
                                                    <!-- single-product-start -->
                                                    <div class="single-product">
                                                        <div class="single-product-img">
                                                            <a href="#">
                                                                <img :src="imageUrl+details.image" alt="" />
                                                            </a>
                                                            <span class="sale-box">
                                                                <span class="sale">Sale</span>
                                                            </span>
                                                            <span class="new-box">
                                                                <span class="new">New</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!-- single-product-end -->
                                                </div>
                                                <div id="pic1" class="tab-pane fade" v-if="details.detailImage1">
                                                    <!-- single-product-start -->
                                                    <div class="single-product">
                                                        <div class="single-product-img">
                                                            <a href="#">
                                                                <img :src="imageUrl+details.detailImage1" alt="" />
                                                            </a>
                                                            <span class="sale-box">
                                                                <span class="sale">Sale</span>
                                                            </span>
                                                            <span class="new-box">
                                                                <span class="new">New</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!-- single-product-end -->
                                                </div>
                                                <div id="pic2" class="tab-pane fade" v-if="details.detailImage2">
                                                    <!-- single-product-start -->
                                                    <div class="single-product">
                                                        <div class="single-product-img">
                                                            <a href="#">
                                                                <img :src="imageUrl+details.detailImage2" alt="" />
                                                            </a>
                                                            <span class="sale-box">
                                                                <span class="sale">Sale</span>
                                                            </span>
                                                            <span class="new-box">
                                                                <span class="new">New</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!-- single-product-end -->
                                                </div>
                                                <div id="pic3" class="tab-pane fade" v-if="details.detailImage3">
                                                    <!-- single-product-start -->
                                                    <div class="single-product">
                                                        <div class="single-product-img">
                                                            <a href="#">
                                                                <img :src="imageUrl+details.detailImage3" alt="" />
                                                            </a>
                                                            <span class="sale-box">
                                                                <span class="sale">Sale</span>
                                                            </span>
                                                            <span class="new-box">
                                                                <span class="new">New</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!-- single-product-end -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-xs-12 col-sm-7">
                                        <div class="product-details-info" >
                                            <h5 class="product-title">{{details.name}}</h5>
                                            <div class="price-box">
                                                <span class="price">${{details.price}}</span>
                                                <span class="old-price">${{details.oldPrice}}</span>
                                            </div>
                                            <div class="rating">
                                                <div class="star" :class="zndex<=details.star?'star-on':''" v-for="(zndex) in 5 " :key="zndex"></div>
                                            </div>
                                            <div class="short-description">
                                                <p>{{details.desc}}
                                                </p>
                                            </div>
                                            <div class="widget-icon">
                                                <a href="#">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="fa fa-linkedin"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="fa fa-google-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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
                pageNum:1,
                // productList:[],
                // pageNumList:[],
                pageIndex:1,
                // total:'',
                imageUrl: process.env.IMAGE_URL,
                details:{}
            };
        },
        async asyncData({ $axios }) {
            let data = {
                pageSize:9,
                pageNum:1
            };
            let pageNumList =[];
            let total ='';
            const resultData = await $axios.post(`/public/productList`, data)
            let productList = resultData.data.data.list;
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
            return {productList,pageNumList,total};
        },
        created() {
            
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            getProductList(){
                let data = {
                    pageSize:this.pageSize,
                    pageNum:this.pageNum
                };
                this.$axios.post(`/public/productList`, data)
                .then(res=>{
                    console.log('res=>',res);
                    this.productList = res.data.data.list;
                    this.total = res.data.data.total;
                    let num = Math.ceil(res.data.data.total/this.pageSize)
                    if(this.pageNumList.length==0){
                        if(num>=3){
                            num = 3;
                        }
                        for(let i =0;i<num;i++){
                            this.pageNumList.push(i+1)
                        }
                    }
                })      
            },
            productDetails(item){
                console.log(item)
                this.details = item
            },
            selectPageNum(num){
                this.pageNum = num;
                this.pageIndex = num;
                this.getProductList()
            },
            prePageNum(){
                let num = this.pageNumList[0];
                if(num <= 1){
                    this.pageNum = this.pageNum-1;
                    this.pageIndex = this.pageIndex-1;
                    this.getProductList();
                    return false
                }else{
                    num--
                    this.pageNum = num;
                    this.pageIndex = num;
                    this.pageNumList.unshift(num);
                    this.pageNumList.pop()
                    this.getProductList();
                }
            },
            nextPageNum(){
                let num = this.pageNumList[this.pageNumList.length-1];
                if(num*this.pageSize >= this.total){
                    this.pageNum = this.pageNum+1;
                    this.pageIndex = this.pageIndex+1;
                    this.getProductList();
                    return false
                }else{
                    num++
                    this.pageNum = num;
                    this.pageIndex = num;
                    this.pageNumList.push(num);
                    this.pageNumList.shift()
                    this.getProductList();
                }
            }
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            // this.getProductList();
        },
    }
</script>
<style lang='scss' scoped>
/*------------------------------
shop
------------------------------*/
#gried_view .single-product .single-product-img{
    height:255px;
}
.shop-area {
  background: #f7f7f7 none repeat scroll 0 0;
  padding: 80px 0;
}
.align{
    display: flex;
    justify-content: center;
}
.shop-left-col {
    border: 1px solid #f6f5f3;
    padding: 0 10px;
}
.content-box {
    padding: 15px 0;
}
.content-box ul li {
    margin-bottom: 5px;
}
.content-box h2 {
    border-bottom: 2px solid #cccccc;
    color: #363636;
    display: block;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-transform: uppercase;
}
.content-box span {
  float: left;
  position: relative;
  top: 2px;
}
.check-label {
    font-weight: normal;
    margin-left: 8px;
}
.content-box input {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    height: 15px;
    width: 15px;
}
.check-label a {
  color: #444;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
.price_filter .ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all {
    background: #f2f2f2 none repeat scroll 0 0;
    border: medium none;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    height: 4px;
    margin-right: 5px;
    margin-top: 35px;
}
.price_filter .ui-slider-handle.ui-state-default.ui-corner-all {
    background: #444 none repeat scroll 0 0;
    border: medium none black;
	-webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    height: 21px;
    margin-left: -2px;
    margin-top: -5px;
    width: 6px;
}
.price_filter .ui-slider-range {
    background: #444 none repeat scroll 0 0;
    height: 4px;
    margin-top: 0;
}
.price_slider_amount > input[type="text"] {
    border: medium none;
    font-weight: bold;
    letter-spacing: 3px;
    margin-left: -15px;
    text-align: center;
    width: 130px;
}
.price_slider_amount > input[type="submit"] {
    border-image: none;
    border-style: solid solid solid none;
    border-width: 0;
    color: #444444;
    float: left;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 1px;
    margin-top: 2px;
    text-transform: uppercase;
    -webkit-transition: all 400ms ease-in 0s;
    -moz-transition: all 400ms ease-in 0s;
    -ms-transition: all 400ms ease-in 0s;
    -o-transition: all 400ms ease-in 0s;
    transition: all 400ms ease-out 0s;
    width: auto;
}
.shop-filter h2.shop-sidebar-title {
    margin: 0 0 20px;
}
.price_slider_amount {
    margin: 25px 0;
}
.content-box .price-filter {
    background: black none repeat scroll 0 0;
    border: medium none;
    color: white;
    font-weight: bold;
    padding: 5px 13px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.content-box .price-filter:hover {
    background: #ff6464 none repeat scroll 0 0;
}
.content-box ul.tags > li {
    display: inline-block;
}
ul.tags li {
    margin-bottom: 5px;
    margin-right: 5px;
}
ul.tags li a {
    border: 1px solid #d5d5d5;
    color: black;
    display: block;
    font-weight: 500;
    padding: 5px 15px;
    text-decoration: none;
    text-transform: capitalize;
}
ul.tags li a:hover {
    background: #ff6464 none repeat scroll 0 0;
    border-color: #ff6464;
    color: white;
}
.topbar-category {
    border: 1px solid #e5e5e5;
    clear: both;
    margin-bottom: 0;
    padding: 15px 15px 10px;
    position: relative;
}
.pager-area {
    display: inline-block;
}
.shop-tab {
    display: inline-block;
    margin-left: 6px;
    margin-top: 1px;
}
.shop-tab li {
    display: inline-block;
}
.shop-tab li a {
    background: #909295 none repeat scroll 0 0;
    border: 0 none;
    color: white;
    display: block;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    width: 30px;
}
.shop-tab li.active a {
    background: #ff6464 none repeat scroll 0 0;
}
.shop-tab li a i {
    display: block;
    font-size: 17px;
    line-height: 30px;
    padding-left: 7px;
}
.shop-tab li.active a i {} .sort-by {
    display: inline-block;
    margin-left: 50px;
    margin-top: 0;
    position: absolute;
}
.sort-by label,
.show label,
.show span {
    color: #404048;
    font-size: 14px;
    font-weight: normal;
    padding: 3px 4px 0 0;
}
.sort-by > select {
    background: #fbfbfb none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: right;
    height: 27px;
    margin-left: 2px;
    margin-top: 0;
    padding-left: 5px;
    padding-top: 1px;
    width: 190px;
}
option {
    border-left: 1px solid;
    border-right: 1px solid;
}
.show {
    display: inline-block;
    position: absolute;
    right: 270px;
    top: 15px;
}
.show > label {
    float: left;
}
.show > select {
    background: #fbfbfb none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: left;
    font-size: 11px;
    height: 27px;
    margin-left: 2px;
    margin-right: 5px;
    padding-left: 5px;
    padding-top: 1px;
    width: 55px;
}
.top-mar {
    margin-top: 30px
}
.list-view .single-product .single-product-img {
    margin: auto -10px 0;
    height: 300px;
}
.list-view .single-product {
    background: transparent none repeat scroll 0 0;
    border: medium none;
    padding: 0 10px;
}
.list-view .single-product-content .product-desc {
    color: #464646;
    font-size: 14px;
    font-weight: normal;
    line-height: 25px;
    margin: 15px 0;
    padding: 0;
}
.list-view .product-action a {
    opacity: 1;
	-webkit-box-transform: scale(1);
    -moz-box-transform: scale(1);
    -ms-box-transform: scale(1);
    -o-box-transform: scale(1);
    transform: scale(1);
    visibility: visible;
}
.availability,
.not-available {
    display: block;
    margin-top: 30px;
}
.availability span,
.not-available span {
    background-color: #008000;
    border: 1px solid #36943e;
    color: white;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 3px 8px 4px 9px;
}
.not-available span {
    background-color: #b30000;
    border: 1px solid #b30000;
}
.shop-breadcrumb {
    display: inline-block;
    float: right;
}
.shop-breadcrumb ul {} .shop-breadcrumb ul li {
    display: inline-block;
}
.shop-breadcrumb ul li a {
    border: 1px solid #ddd;
    color: #444;
    display: block;
    height: 25px;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    width: 25px;
}
.shop-breadcrumb ul li a:hover,
.shop-breadcrumb ul li.active a {
    background: #ff6464 none repeat scroll 0 0;
    border-color: #ff6464;
    color: #fff;
}
.shop-area .single-product:hover {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
</style>