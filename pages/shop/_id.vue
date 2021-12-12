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
        <!-- breadcrumb-area end --><!-- Product Details Area Start -->
        <div class="product-details-area pt-100px pb-100px">
            <div class="container">
                <div class="row">
                <div class="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                    <div class="product-details-img product-details-tab product-details-tab-2 product-details-tab-3 d-flex">
                    <div class="swiper-container zoom-thumbs-2 align-self-start ml-15px">
                        <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class="img-responsive m-auto" v-if="shopData.image" :src="imageUrl+shopData.image" alt=""></div>
                        <div class="swiper-slide"><img class="img-responsive m-auto" v-if="shopData.detailImage1" :src="imageUrl+shopData.detailImage1" alt=""></div>
                        <div class="swiper-slide"><img class="img-responsive m-auto" v-if="shopData.detailImage2" :src="imageUrl+shopData.detailImage2" alt=""></div>
                        <div class="swiper-slide"><img class="img-responsive m-auto" v-if="shopData.detailImage3" :src="imageUrl+shopData.detailImage3" alt=""></div>
                        <div class="swiper-slide"><img class="img-responsive m-auto" v-if="shopData.detailImage4" :src="imageUrl+shopData.detailImage4" alt=""></div>
                        </div>
                    </div>
                    <!-- Swiper -->
                    <div class="swiper-container zoom-top-2 align-self-start">
                        <div class="swiper-wrapper">
                        <div class="swiper-slide bigImage zoom-image-hover"><img class="img-responsive m-auto" v-if="shopData.image" :src="imageUrl+shopData.image" alt=""></div>
                        <div class="swiper-slide bigImage zoom-image-hover"><img class="img-responsive m-auto" v-if="shopData.detailImage1" :src="imageUrl+shopData.detailImage1" alt=""></div>
                        <div class="swiper-slide bigImage zoom-image-hover"><img class="img-responsive m-auto" v-if="shopData.detailImage2" :src="imageUrl+shopData.detailImage2" alt=""></div>
                        <div class="swiper-slide bigImage zoom-image-hover"><img class="img-responsive m-auto" v-if="shopData.detailImage3" :src="imageUrl+shopData.detailImage3" alt=""></div>
                        <div class="swiper-slide bigImage zoom-image-hover"><img class="img-responsive m-auto" v-if="shopData.detailImage4" :src="imageUrl+shopData.detailImage4" alt=""></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                    <div class="product-details-content quickview-content">
                    <h2>{{shopData.name}}</h2>
                    <div class="pricing-meta">
                        <ul>
                        <li class="old-price not-cut">${{shopData.price}}</li>
                        </ul>
                    </div>
                    <div class="pro-details-rating-wrap">
                        <div class="rating-product"><i class="fa fa-star" :class="zndex<=shopData.star?'star-on':''" v-for="(zndex) in 5 " :key="zndex"></i></div>
                        <span class="read-review"></span></div>
                    <p class="mt-30px mb-0">{{shopData.desc}}</p>
                    <div class="pro-details-quality">
                        <!-- <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                        </div> -->
                        <div class="pro-details-cart">
                        <!-- <button class="add-cart" href="#">Add To Cart</button> -->
                        </div>
                        <!-- <div class="pro-details-compare-wishlist pro-details-wishlist "><a href="wishlist.html"><i class="pe-7s-like"></i></a></div>
                        <div class="pro-details-compare-wishlist pro-details-compare"><a href="compare.html"><i class="pe-7s-refresh-2"></i></a></div> -->
                    </div>
                    <!-- <div class="pro-details-sku-info pro-details-same-style  d-flex"><span>SKU:</span>
                        <ul class="d-flex">
                        <li><a href="#">Ch-256xl</a></li>
                        </ul>
                    </div>
                    <div class="pro-details-categories-info pro-details-same-style d-flex"><span>Categories:</span>
                        <ul class="d-flex">
                        <li><a href="#">Fashion.</a></li>
                        <li><a href="#">eCommerce</a></li>
                        </ul>
                    </div> -->
                    <!-- <div class="pro-details-social-info pro-details-same-style d-flex"><span>Share:</span>
                        <ul class="d-flex">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div> -->
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- product details description area start -->
            <div class="description-review-area pb-100px" data-aos="fade-up" data-aos-delay="200">
            <div class="container">
                <div class="description-review-wrapper">
                <div class="description-review-topbar nav"><a data-bs-toggle="tab" v-for="(item,index) in tabList" :key="index" :class="index==tabIndex?'active':''" @click="changeTabs(index)">{{item.name}}</a></div>
                <div class="tab-content description-review-bottom">
                    <div id="des-details2" class="tab-pane" :class="tabIndex==0?'active':''">
                    <div class="product-anotherinfo-wrapper text-start">
                        <div v-html="shopData.information">
                        </div>
                        <!-- <ul>
                        <li><span>Weight</span>400 g</li>
                        <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                        <li><span>Materials</span>60% cotton,40% polyester</li>
                        <li><span>Other Info</span>American heirloom jean shorts pug seitan letterpress</li>
                        </ul> -->
                    </div>
                    </div>
                    <div id="des-details1" class="tab-pane " :class="tabIndex==1?'active':''">
                    <div class="product-description-wrapper">
                        <p>{{shopData.desc}}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
   
   </div>
</template>

<script>

if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
    head(){
        return{
            script:[
                {src:'/js/jquery.min.js'},
                // {src:'/js/vendor/vendor.min.js'},
                {src:'/js/jquery-ui.min.js'},
                {src:'/js/plugins/plugins.min.js', defer: true},
                {src:'/js/mainnew.js', defer: true}
            ]
        }
    },
    async asyncData({params,$axios}) {
        const index = params.id
        let data ={
            id:index
        }
        const resultData = await $axios.post(`/public/productDetail`, data)
        let shopData = resultData.data.data;
        return {shopData}
    },
    data() {
        //这里存放数据
            return {
                tabList:[{
                    name:'Information',
                    id:0
                },{
                    name:'Description',
                    id:1
                }],
                tabIndex:1,
                imageUrl: process.env.IMAGE_URL,

            };
        },
    computed: {
      info() {
        const index = this.$route.params.id
        return index
      }
    },
    created(){
        if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        //   $("script[src='/js/jquery-1.12.0.min.js']").remove()
        //   $("script[src='/js/bootstrap.min.js']").remove()
          // console.log($().jquery)
          // jQuery.noConflict(true)
          // console.log($().jquery)
      }
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()

      }
    },
    methods:{
        changeTabs(index){
            this.tabIndex =index
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/static/css/vendor/vendor.min.css";
@import "@/static/css/plugins/plugins.min.css";
@import "@/static/css/style.min.css";
.title {
  font-size: 16px;
  font-weight: bold;
  color: #2a333c;
}
.detail {
  font-size: 16px;
  line-height: 2;
  color: #2a333c;
}
.shopNew{
    color: #1d1d1d;
    font-weight: 600;
}
 .badges .shopNew{
     background-color: #000;
 }  
 .product-details-content .pro-details-rating-wrap .rating-product i{
    color:#ddd
 }
  .product-details-content .pro-details-rating-wrap .rating-product i.star-on{
    color: #fdd835;
  }
  .swiper-slide.bigImage{
      width: 489px;
      height: 489px;
  }
</style>
