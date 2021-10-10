<template>
    <div>
        <!-- <Product />
    <Business />
    <About />
    <Partner />
    <Client /> -->
        <!-- banner-area-start -->
        {{$t('about.title')}}
      <div class="banner-area hidden-sm hidden-xs">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-xs-12">
                      <div class="single-banner wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                          <a href="#">
                              <img src="img/banner/2.png" alt="" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-4 col-xs-12">
                      <div class="single-banner wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                          <a href="#">
                              <img src="img/banner/3.png" alt="" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-4 col-xs-12">
                      <div class="single-banner wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                          <a href="#">
                              <img src="img/banner/1.png" alt="" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
              <!-- feature-area-start -->
        <div class="feature-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h3>FEATURED PRODUCTS</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="feature-tab wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <ul class="my-tab">
                                <li class="active"><a data-toggle="tab" href="#new">New</a></li>
                                <li><a data-toggle="tab" href="#men">Men</a></li>
                                <li><a data-toggle="tab" href="#women">Women</a></li>
                                <li><a data-toggle="tab" href="#kids">Kids</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="new" class="tab-pane fade in active" v-for="(item,index) in featurelist" :key="index">
                                    <div class="tab-carousel">
                                        <div class="col-md-12" v-for="(ztem,index) in item.list" :key="index">
                                            <!-- single-product-start -->
                                            <div class="single-product">
                                                <div class="single-product-img">
                                                    <a href="#"><img :src="ztem.img" alt="" /></a>
                                                    <span class="sale-box">
                                                            <span class="sale">Sale</span>
                                                    </span>
                                                    <span class="new-box">
                                                            <span class="new">New</span>
                                                    </span>
                                                </div>
                                                <div class="single-product-content">
                                                    <div class="product-title">
                                                        <h5><a href="#">{{ztem.title}}</a></h5>
                                                    </div>
                                                    <div class="rating">
                                                        <div class="star star-on"></div>
                                                        <div class="star star-on"></div>
                                                        <div class="star star-on"></div>
                                                        <div class="star star-on"></div>
                                                        <div class="star"></div>
                                                    </div>
                                                    <div class="price-box">
                                                        <span class="price">£{{ztem.price}}</span>
                                                        <span class="old-price">£{{ztem.oldPrice}}</span>
                                                    </div>
                                                    <div class="product-action">
                                                        <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                                        <a class="add-wishlist" href="#" title="add to wishlist"><i class="fa fa-heart"></i></a>
                                                        <a class="quick-view" href="#" title="quick view" data-toggle="modal" data-target="#myModal"><i class="fa fa-search"></i></a>
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
         <!-- new-product-area-start -->
        <div class="new-product-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h3>new product</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="new-product wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div class="new-carousel">
                            <div class="col-md-12" v-for="(item,index) in productList" :key="index">
                                <!-- single-product-start -->
                                <div class="single-product">
                                    <div class="single-product-img">
                                        <a href="#"><img :src="item.img" alt="" /></a>
                                        <span class="new-box">
                                                <span class="new">New</span>
                                        </span>
                                    </div>
                                    <div class="single-product-content">
                                        <div class="product-title">
                                            <h5><a href="#">{{item.title}}</a></h5>
                                        </div>
                                        <div class="rating">
                                            <div class="star star-on"></div>
                                            <div class="star star-on"></div>
                                            <div class="star star-on"></div>
                                            <div class="star star-on"></div>
                                            <div class="star"></div>
                                        </div>
                                        <div class="price-box">
                                            <span class="price">£{{item.price}}</span>
                                            <span class="old-price">£{{item.oldPrice}}</span>
                                        </div>
                                        <div class="product-action">
                                            <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            <a class="add-wishlist" href="#" title="add to wishlist"><i class="fa fa-heart"></i></a>
                                            <a class="quick-view" href="#" title="quick view" data-toggle="modal" data-target="#myModal"><i class="fa fa-search"></i></a>
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
          <!-- best-seller-area-start -->
        <div class="bestseller-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="best-seller-col wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3>top seller</h3>
                            <div class="best-seller-content">
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/41.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/4.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/7.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="best-seller-col top-mar-xs wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3>best product</h3>
                            <div class="best-seller-content">
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/6.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/43.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/10.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star"></div>
                                                <div class="star"></div>
                                                <div class="star"></div>
                                                <div class="star"></div>
                                                <div class="star"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="best-seller-col top-mar-xs wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3>top rated product</h3>
                            <div class="best-seller-content">
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/11.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/3.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                                <!-- single-new-product-start -->
                                <div class="single-new-product">
                                    <div class="product-img">
                                        <a href="#"><img src="img/singlepro/2.jpg" alt="" /></a>
                                    </div>
                                    <div class="product-details">
                                        <div class="single-product-content">
                                            <div class="product-title">
                                                <h5><a href="#">consectetuer</a></h5>
                                            </div>
                                            <div class="rating">
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                                <div class="star star-on"></div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price">£50.00</span>
                                                <span class="old-price">£70.00</span>
                                            </div>
                                            <div class="product-action">
                                                <button class="btn btn-default add-cart" title="add to cart">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-new-product-start -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- best-seller-area-end -->
        <!-- banner-2-area-start -->
        <div class="banner-2-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="single-banner wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <a href="#"><img src="img/banner/11.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="single-banner wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <a href="#"><img src="img/banner/12.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- banner-2-area-end -->
          <div class="news-letter-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="subscribe-area wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <div class="subscribe-title">
                                <h3><span>Subscribe</span>to our newsletter</h3>
                                <p>Subscribe to the Expert mailing list to receive updates on new arrivals, special offers and other discount information.
                                </p>
                                <form action="#">
                                    <div class="subscribe-form">
                                        <input type="text" placeholder="Your Email..." class="form-control search-form" />
                                        <button>subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- service-area-start -->
        <div class="service-area">
            <div class="container">
                <div class="row">
                    <div class="service wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div class="col-md-3 col-xs-12 col-sm-3">
                            <div class="single-service">
                                <i class="fa fa-plane"></i>
                                <h3>free shipping</h3>
                                <p> worldwide in 7 days</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-12 col-sm-3">
                            <div class="single-service">
                                <i class="fa fa-taxi"></i>
                                <h3>home delivery</h3>
                                <p>home delivery on all over country</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-12 col-sm-3">
                            <div class="single-service no-bor">
                                <i class="fa fa-cc-visa"></i>
                                <h3>secure payment</h3>
                                <p>secure payment many methods</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-12 col-sm-3">
                            <div class="single-service no-bor">
                                <i class="fa fa-phone"></i>
                                <h3>24/7 customer care</h3>
                                <p>online support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- service-area-end -->

  </div>

</template>

<script>
// import Product from "@/components/index/product";
// import Business from "@/components/index/business";
// import About from "@/components/index/about";
// import Partner from "@/components/index/partner";
// import Client from "@/components/index/client";
if (process.browser) {
    // 在这里根据环境引入wow.js
    var { WOW } = require("wowjs");
}

export default {
  components: {
    // Product,
    // Business,
    // About,
    // Client,
    // Partner
  },
  data() {
    return {
        featurelist:[
            {
                type:'new',
                list:[{
                    title:'consectetuer',
                    name:'',
                    img:'img/singlepro/8.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                },{
                    title:'Dictum',
                    name:'',
                    img:'img/singlepro/1.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                },{
                    title:'Dictum',
                    name:'',
                    img:'img/singlepro/43.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                },{
                    title:'Dictum',
                    name:'',
                    img:'img/singlepro/2.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                },{
                    title:'Dictum',
                    name:'',
                    img:'img/singlepro/2.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                },{
                    title:'Dictum',
                    name:'',
                    img:'img/singlepro/2.jpg',
                    price:'7.00',
                    oldPrice:'5.00'
                }],
            }
        ],
        productList:[{
            title:'Dictum',
            name:'',
            img:'/img/singlepro/9.jpg',
            price:'7.00',
            oldPrice:'5.00'
        },{
            title:'Dictum',
            name:'',
            img:'img/singlepro/5.jpg',
            price:'7.00',
            oldPrice:'5.00'
        },{
            title:'Dictum',
            name:'',
            img:'img/singlepro/10.jpg',
            price:'7.00',
            oldPrice:'5.00'
        },{
            title:'Dictum',
            name:'',
            img:'img/singlepro/44.jpg',
            price:'7.00',
            oldPrice:'5.00'
        }]
    }
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  }
}
</script>

<style lang="scss" scoped>
//banner-area-1
.mar-15 {
    margin-top: 15px;
}
.banner-area {
  background: #f7f7f7 none repeat scroll 0 0;
  padding: 80px 0;
}
.single-banner {} .single-banner a {
    display: block;
    position: relative;
}
.single-banner > a::before {
    background: #000 none repeat scroll 0 0;
    content: "";
    height: 100%;
    opacity: 0;
    position: absolute;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
	transform: scale(.5);
    width: 100%;
}
.single-banner:hover a::before {
  opacity: 0.3;
  transform: scale(1);
}
.single-banner img {
    width: 100%;
}
.single-banner:hover h2 {
	-webkit-box-transform: translate3d(15px, 0px, 0px);
    -moz-box-transform: translate3d(15px, 0px, 0px);
    -ms-box-transform: translate3d(15px, 0px, 0px);
    -o-box-transform: translate3d(15px, 0px, 0px);
    transform: translate3d(15px, 0px, 0px);
}
.banner-caption h2::before {
    background: #fff none repeat scroll 0 0;
    content: "";
    height: 2px;
    position: absolute;
    right: 25px;
    top: 100%;
	-webkit-box-transform: translate3d(0px, 0px, 40px);
    -moz-box-transform: translate3d(0px, 0px, 40px);
    -ms-box-transform: translate3d(0px, 0px, 40px);
    -o-box-transform: translate3d(0px, 0px, 40px);
    transform: translate3d(0px, 0px, 40px);
    width: 55%;
}
.banner-caption h2::before,
.banner-caption p {
    opacity: 0;
    -webkit-transition: opacity 2s ease 0s, transform 0.35s ease 0s;
    -moz-transition: opacity 2s ease 0s, transform 0.35s ease 0s;
    -ms-transition: opacity 2s ease 0s, transform 0.35s ease 0s;
    -o-transition: opacity 2s ease 0s, transform 0.35s ease 0s;
    transition: opacity 2s ease 0s, transform 0.35s ease 0s;
}
.single-banner:hover h2::before,
.single-banner:hover p {
    opacity: 1;
	-webkit-box-transform: translate3d(25px, 0px, 0px);
    -moz-box-transform: translate3d(25px, 0px, 0px);
    -ms-box-transform: translate3d(25px, 0px, 0px);
    -o-box-transform: translate3d(25px, 0px, 0px);
    transform: translate3d(25px, 0px, 0px);
}
// 5. feature-area
.feature-area {
  padding: 80px 0;
}
.section-heading {
    font-weight: bold;
    margin: 0 0 10px;
    position: relative;
    text-align: center;
}
.section-heading::before {
    border-top: 5px dotted #bfbfbf;
    content: "";
    left: 0;
    margin: 0;
    position: absolute;
    top: 50%;
    width: 100%;
}
.section-heading h3 {
  background: #fff none repeat scroll 0 0;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0;
  padding: 0 15px;
  position: relative;
  text-transform: uppercase;
  width: auto;
  z-index: 1;
}
.section-heading h3::before {
    content: "";
    display: inline-block;
    font: 12px/1 FontAwesome;
    margin-right: 10px;
    text-rendering: auto;
	-webkit-box-transform: translate(0px, 0px);
    -moz-box-transform: translate(0px, 0px);
    -ms-box-transform: translate(0px, 0px);
    -o-box-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
}
.section-heading h3::after {
    content: "";
    display: inline-block;
    font: 12px/1 FontAwesome;
    margin-left: 10px;
    text-rendering: auto;
	-webkit-box-transform: translate(0px, 0px);
    -moz-box-transform: translate(0px, 0px);
    -ms-box-transform: translate(0px, 0px);
    -o-box-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
}
/* single-product */
.single-product {
    background-color: #f5f5f5;
    padding: 0 10px 20px;
    position: relative;
    text-align: left;
    width: 285px;
    flex-shrink: 0;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
}
.single-product:hover {
    -webkit-box-shadow: 0 0 5px rgba(25, 25, 25, 0.3);
    -moz-box-shadow: 0 0 5px rgba(25, 25, 25, 0.3);
    -ms-box-shadow: 0 0 5px rgba(25, 25, 25, 0.3);
    -o-box-shadow: 0 0 5px rgba(25, 25, 25, 0.3);
    box-shadow: 0 0 5px rgba(25, 25, 25, 0.3);
	-webkit-box-transform: translate(0px, -3px);
    -moz-box-transform: translate(0px, -3px);
    -ms-box-transform: translate(0px, -3px);
    -o-box-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
}
.single-product .single-product-img {
    background-color: #ffffff;
    margin: auto -10px 20px;
    position: relative;
}
.new-box,
.sale-box {
    height: 50px;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: -16px;
    width: 75px;
    z-index: 0;
}
.sale-box {
    right: -5px;
}
.new-box {
    left: 2px;
}
.new,
.sale {
    height: 31px;
    left: 0px;
    position: absolute;
    top: 18px;
    width: 67px;
}
.sale, .new {
  background: #ff6464 none repeat scroll 0 0;
  border: 1px solid #ff6464;
  border-radius: 15px 0;
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
}
.new {
    background: #46B255 none repeat scroll 0 0;
    border-color: #46B255;
}
.single-product-content .product-title h5 {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
}
.rating {
    display: block;
    margin: 5px 0;
    overflow: hidden;
    text-align: left;
}
.single-product-content .rating {
    display: inline-block;
}
.rating .star {
    cursor: pointer;
    display: block;
    float: left;
    font-size: 13px;
    font-weight: normal;
    height: 19px;
    margin: 0 1px -1px 0;
    overflow: hidden;
    position: relative;
    top: -1px;
    width: 14px;
}
.rating .star::after {
    color: #aaa;
    content: "";
    display: inline-block;
    font-family: "FontAwesome";
}
.rating .star-on::after {
  color: #f8c53c;
  content: "";
  display: inline-block;
  font-family: "FontAwesome";
}
.price-box .price {
  color: #ff6464;
  font-size: 18px;
  font-weight: bold;
}
.price-box .old-price {
    color: #404040;
    font-size: 13px;
    margin-left: 10px;
    text-decoration: line-through;
}
.product-action {
    display: inline-block;
    margin: 15px 0 0;
}
.product-action a {
    border: 1px solid #868686;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    color: #666;
    display: inline-block;
    height: 34px;
    line-height: 30px;
    margin: 0 2px;
    opacity: 0;
    text-align: center;
	-webkit-box-transform: rotate(90deg);
    -moz-box-transform: rotate(90deg);
    -ms-box-transform: rotate(90deg);
    -o-box-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    visibility: hidden;
    width: 34px;
}
.single-product:hover .single-product-action,
.single-product:hover .product-action a {
    opacity: 1;
	-webkit-box-transform: rotate(0deg);
    -moz-box-transform: rotate(0deg);
    -ms-box-transform: rotate(0deg);
    -o-box-transform: rotate(0deg);
    transform: rotate(0deg);
    visibility: visible;
}
.product-action button {
    background: #7d7d7d none repeat scroll 0 0;
    border: 1px solid #7d7d7d;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    color: white;
    height: 34px;
    margin: 0 5px 0 0;
    text-transform: uppercase;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
	font-size: 13px;
	padding: 7px 18px;
    width: 120px;
}
.product-action a:hover, .product-action button:hover {
  background-color: #ff6464;
  border-color: #ff6464;
  color: #fff;
}
.single-product-img > a::before {
    background: #000 none repeat scroll 0 0;
    content: "";
    height: 100%;
    opacity: 0;
    position: absolute;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 100%;
    z-index: 9;
}
.single-product:hover a::before {
    opacity: 0.2;
}
.product-action .quick-view {
    -webkit-transition: all 0.6s ease 0s;
    -moz-transition: all 0.6s ease 0s;
    -ms-transition: all 0.6s ease 0s;
    -o-transition: all 0.6s ease 0s;
    transition: all 0.6s ease 0s;
}
.single-product-img img {
    width: 100%;
}
/* customs-tab */

.feature-tab {
    position: relative;
}
.feature-tab .my-tab {
    margin: 28px 0 40px;
    text-align: center;
}
.feature-tab .my-tab li {
    display: inline-block;
    padding: 5px 15px;
    position: relative;
}
.my-tab li a {
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
}
.my-tab li.active::before,
.my-tab li.active::after,
.my-tab li a:hover::before,
.my-tab li a:hover::after {
    border-top: 3px double #ff6464;
    content: "";
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}
.my-tab li.active::after,
.my-tab li a:hover::after {
    bottom: 0;
    top: auto;
}
.my-tab .active > a {
    color: #ff6464;
}
/* tab-owl-button */

.feature-tab .owl-buttons {
  position: absolute;
  right: 15px;
  top: -75px;
}
.owl-theme .owl-controls .owl-buttons div {
    background: transparent none repeat scroll 0 0;
    border: 1px solid black;
	-webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    color: black;
    display: inline-block;
    font-size: 15px;
    margin: 5px;
    opacity: 1;
    padding: 7px 15px;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}
.owl-theme .owl-controls.clickable .owl-buttons div:hover {
    background: #ff6464 none repeat scroll 0 0;
    border-color: #ff6464;
    color: white;
    opacity: 1;
    text-decoration: none;
}
.owl-buttons i {
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
}
.tab-carousel,.new-carousel{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow:auto;
}
/*------------------------------
6. new product
------------------------------*/
.new-product-area {
  background: #f7f7f7 none repeat scroll 0 0;
  padding: 80px 0;
}
.new-product {
  margin-top: 60px;
  position: relative;
}
.new-product .owl-buttons {
  position: absolute;
  right: 15px;
  top: -60px;
}
.new-product-area .section-heading h3 {
  background: #f7f7f7 none repeat scroll 0 0;
}
/*------------------------------
7. banner-area-2
------------------------------*/
.banner-2-area {
    -webkit-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -moz-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -ms-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -o-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    padding: 80px 0;
}
/*------------------------------
25. bestseller-area
------------------------------*/
.bestseller-area {
  background: rgba(0, 0, 0, 0) url("/img/bg/best1.jpg") no-repeat fixed center center / cover;
  padding: 80px 0;
  position: relative;
}
.bestseller-area::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    position: absolute;
    opacity: 0.50;
}
.best-seller-col {
    background: #fff none repeat scroll 0 0;
    padding: 25px 15px;
}
.best-seller-col h3 {
  border-bottom: 3px double;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-bottom: 5px;
  text-transform: uppercase;
}
.single-new-product {
    display: block;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 20px 0;
}
.single-new-product:last-child {
    margin-bottom: 0;
}
.single-new-product .product-img {
    display: inline-block;
    float: left;
    width: 30%;
}
.single-new-product .product-details {
  display: inline-block;
  float: left;
  padding: 0 0 0 20px;
  background: transparent;
}
.best-seller-content .single-product-content .product-title h5 {
    font-size: 13px;
    margin-bottom: 5px;
}
.best-seller-content .product-action button {
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    font-size: 13px;
    height: 30px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
	padding: 10px 13px;
    width: 110px;
    line-height: 0;
}
.best-seller-content .single-new-product .product-details {
    margin-bottom: auto;
}
.best-carousel .product-title {
  margin: 15px 0;
}
.best-carousel .product-action {
  margin-top: 17px;
}
/*------------------------------
9. news-letter-area
------------------------------*/
.news-letter-area {
  background: rgba(0, 0, 0, 0) url("/img/banner/bg3.jpg") no-repeat fixed center center / cover ;
  padding: 80px 0;
  position: relative;
}
.news-letter-area::before {
    background: black none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    width: 100%;
}
.subscribe-area {} .subscribe-title {
    text-align: center;
}
.subscribe-title h3 {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.subscribe-title h3 span {
  color: #ff6464;
  font-size: 36px;
  padding-right: 15px;
}
.subscribe-title p {
  color: #e6e6e6;
  display: block;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  margin: 0;
}
.subscribe-title form {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  text-align: center;
  width: 582px;
}
.subscribe-form {
    text-align: left;
}
.subscribe-title input {
    border: 1px solid #d7d7d7;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius:0;
    -o-border-radius: 0;
    border-radius: 0;
    height: 43px;
    line-height: 34px;
    padding: 0 19px 0 15px;
    width: 77%;
}
.subscribe-title button {
    background: #ff6464 none repeat scroll 0 0;
    border: 0 none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    height: 43px;
    line-height: 41px;
    padding: 0 30px;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.subscribe-title button:hover {
    background: #808080 none repeat scroll 0 0;
}
/*------------------------------
10. service-area
------------------------------*/
.service-area {
  padding: 80px 0;
  text-align: center;
}
.service {} .single-service {
    -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -ms-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -o-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    padding: 30px 0;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -ms-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}
.single-service:hover {
    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    -ms-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    -o-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
.service .single-service i {
	-webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #ff6464;
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    -webkit-transition: all 0.3 ease 0s;
    -moz-transition: all 0.3 ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 50px;
}
.service .single-service:hover i {
    background: #ff6464 none repeat scroll 0 0;
	-webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    color: #ffffff;
}
.service .single-service h3 {
  font-size: 18px;
  margin: 20px 0 10px;
  text-transform: capitalize;
}
.service .single-service p {
    font-size: 14px;
}
.no-bor {
    border: none;
}
</style>
