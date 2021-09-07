<template>
  <section>
    <!-- 固定导航 -->
    <!-- <b-nav v-if="showNavFixed" tabs align="center" ref="nav2"
      class="py-3 navFixed"
      :style="{top: (headerHeight - 2) + 'px'}">
      <b-nav-item
        v-for="(item, index) of list"
        :key="index"
        :active="index === active"
        class="text-dark"
        href="javascript:;"
        @click="handleNavClick(index)"
      >{{item.title}}</b-nav-item>
    </b-nav> -->
    <!-- <b-nav tabs align="center" class="py-3" ref="nav">
      <b-nav-item
        v-for="(item, index) of list"
        :key="index"
        :active="index === active"
        class="text-dark"
        href="javascript:;"
        @click="handleNavClick(index)"
      >{{item.title}}</b-nav-item>
    </b-nav> -->
    <div v-if="showNavFixed" class="bar navFixed"
      :style="{top: (headerHeight - 2) + 'px'}" ref="nav2">
      <div class="bar-item py-2 px-3"
        v-for="(item, index) of list"
        :key="index"
        :class="{active: active === index}"
        @click="handleNavClick(index)"
      >{{item.title}}</div>
    </div>
     <!-- heading-banner-start -->
        <div class="heading-banner about-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="breadcrumb">
                            <a title="Return to Home" href="index.html">
                                <i class="icon-home"></i>
                            </a>
                            <span class="navigation-pipe">></span>
                            <span class="navigation-page">
                                About
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- heading-banner-end -->
           <!-- about-us-area-start -->
        <div class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="about-text wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h2>About Trendy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum sit amet nibh eget interdum. Nullam ligula risus, efficitur id posuere nec, pulvinar at tellus. Morbi ut tortor nibh. Pellentesque accumsan nisl nulla, et vehicula libero iaculis eu. Cras faucibus, sem et imperdiet cursus, libero risus commodo elit, euismod tempor Donec aliquet, nibh ut imperdiet venenatis, arcu lectus bibendum velit, et gravida sapien justo a libero. Suspendisse ornare, urna id finibus vestibulum.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum sit amet nibh eget interdum. Nullam ligula risus, efficitur id posuere nec, pulvinar at tellus. Morbi ut tortor nibh. Pellentesque accumsan nisl nulla, et vehicula libero iaculis eu. Cras faucibus, sem et imperdiet cursus, libero risus commodo elit, euismod tempor Donec aliquet, nibh ut imperdiet venenatis, arcu lectus bibendum velit, et gravida sapien justo a libero. Suspendisse ornare, urna id finibus vestibulum.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="about-img wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <img src="img/bg/about2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about-us-area-end -->
        <!-- skill-aera-start -->
        <div class="skill-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="we-are-good-at">
                            <h3>We are good at</h3>
                            <div class="skill">								
                                <!-- PROGRESS START -->
                                <div class="progress">
                                    <div class="lead">Web Design </div>
                                    <div class="progress-bar wow fadeInLeft" data-progress="95%" style="width: 95%;" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>95%</span> </div>
                                </div>
                                <!-- PROGRESS END -->
                                <!-- PROGRESS START -->
                                <div class="progress">
                                    <div class="lead">Web Development </div>
                                    <div class="progress-bar wow fadeInLeft" data-progress="75%" style="width: 75%;" data-wow-duration="1.5s" data-wow-delay="1.2s"> <span>75%</span></div>
                                </div>
                                <!-- PROGRESS END -->
                                <!-- PROGRESS START -->							
                                <div class="progress">
                                    <div class="lead">Graphics Design </div>
                                    <div class="progress-bar wow fadeInLeft" data-progress="97%" style="width: 97%;" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>97%</span> </div>
                                </div>	
                                <!-- PROGRESS END -->								
                                <!-- PROGRESS START -->
                                <div class="progress">
                                    <div class="lead">HTML5 Design </div>
                                    <div class="progress-bar wow fadeInLeft" data-progress="70%" style="width: 70%;" data-wow-duration="1.5s" data-wow-delay="1.2s"><span>70%</span> </div>
                                </div>
                                <!-- PROGRESS END -->							
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- skill-aera-end -->
        <!-- about-area-start -->
        <div class="about-team-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h3>Our team</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="team-members wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div class="col-md-3 col-sm-6 col-xs-12" v-for="(item,index) in aboutArea" :key="index">
                            <div class="single-member">
                                <div class="member-img">
                                    <img :src="item.img" alt="" />
                                </div>
                                <div class="member-details">
                                    <div class="mb-wrap">
                                        <h4><a href="#">{{item.title}}</a></h4>
                                        <h5>{{item.name}}</h5>
                                        <ul class="member-social-links">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about-area-end -->







    <!-- <div class="bar" ref="nav">
      <div class="bar-item py-2 px-3"
        v-for="(item, index) of list"
        :key="index"
        :class="{active: active === index}"
        @click="handleNavClick(index)"
      >{{item.title}}</div>
    </div> -->
    <!-- <div class="container py-5">
      <article v-for="(item, index) of list" :Key="index">
        <h5 ref="title" class="title mb-3">{{item.title}}</h5>
        <p class="desc text-dark mb-5" v-html="item.desc"></p>
        <template v-if="!item.desc">
          <b-row>
            <b-col lg="6" class="mb-3">
              <iframe width='100%' height='300' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://surl.amap.com/4RbgAE1ncwv'></iframe>
            </b-col>
            <b-col lg="6" class="d-none d-lg-block">
              <p>地址： 江苏省南京市鼓楼区广州路37号江苏科技大厦27F</p>
              <p>电话： 025-5180 2988</p>
              <p>邮箱：public@mayiyundt.com</p>
              <p>公司网站：www.mayiyundt.com</p>
            </b-col>
          </b-row>
        </template>
      </article>
    </div> -->
  </section>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import smoothscroll from 'smoothscroll-polyfill'

if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
  smoothscroll.polyfill()
}

export default {
  data() {
    return {
      topList: [],
      navHeight: 0,
      navTop: 0,
      showNavFixed: false,
      active: 0,
      list: [
        {
          title: '公司介绍',
          desc: `江苏蚂蚁云数据技术有限公司（简称蚂蚁云）成立于2017年，是国家级高新技术软件企业，专业从事云计算、大数据和智慧城市等领域的产品研发及技术服务；蚂蚁云秉持“以人为本、客户至上、生态协作、诚信敬业”的经营理念，从客户实际需求出发，为客户提供行业化的DT、IT设计咨询、方案规划、建设交付、运营维护、综合运营、行业应用软件开发等全方位的解决方案及技术服务。<br/>
          蚂蚁云根植江苏、辐射全国，拥有一支扎实稳固的高端技术人才团队，成功建设了江苏省政府、江苏省公安厅、南京市政府、建邺区、溧水区等大数据平台，助力政务互联网化；为中天集团、悦达起亚等生产企业提供智慧城市信息化整体解决方案，助力产业互联网化。<br/>
          “精于开发，长于数据”蚂蚁云作为大数据时代卓越的技术与服务提供商，我们将不断创新与实践，赋能更多的客户及生态伙伴。`
        },
        {
          title: '企业文化',
          desc: `愿景：成为您身边的大数据专家。<br/>
          使命：助力政府和企业的数字化转型。<br/>
          核心价值观：客户至上、生态协助、诚信敬业。`
        },
        {
          title: '荣誉资质',
          desc: `信用等级AAA认证<br/>
          ISO9001质量管理体系认证<br/>
          ISO27001信息安全管理体系认证<br/>
          双软企业认证<br/>
          高新企业`
        },
        // {
        //   title: '公司新闻',
        //   desc: `公司最新的动态，重大事件`
        // },
        {
          title: '联系我们'
        },
      ],
       aboutArea:[{
            title:'Md Rabiul Islam Robi',
            name:'developer',
            img:'img/team/1.jpg',
        },{
            title:'Lutful Kabir',
            name:'developer',
            img:'img/team/2.jpg',
        },{
            title:'Arifa Afsana',
            name:'developer',
            img:'img/team/3.jpg',
        },{
            title:'Saikat Ahmed',
            name:'developer',
            img:'img/team/4.jpg',
        }]
    }
  },
  watch: {
    subNavIndex(newVal, oldVal) {
      this.active = newVal - 1
      setTimeout(() => {
        this.handleNavClick(this.active)
      }, 0)
    },
    // active(newVal, oldVal) {
    //   setTimeout(() => {
    //     this.handleNavClick(newVal)
    //   }, 0)
    // }
  },
  computed: {
    ...mapState(['headerHeight', 'subNavIndex'])
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }

    // this.getTitleHeight()

    this.active = this.subNavIndex == 0 ? 0 : this.subNavIndex - 1
    if(this.active != 0) {
      setTimeout(() => {
        this.handleNavClick(this.active)
      }, 0)
    }

    window.addEventListener('scroll', this.handleWindowScroll)
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleWindowScroll)
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    // 点击切换tab
    handleNavClick(index) {
      // this.active = index
      window.scrollTo({
        top: this.topList[index] - this.headerHeight - this.navHeight,
        left: 0,
        behavior: "smooth"
      })
      console.log(this.topList[index] - this.headerHeight - this.navHeight)
    },
    // 监听窗口滚动
    handleWindowScroll(e) {
      const myTop = document.documentElement.scrollTop||document.body.scrollTop
      // 固定tab
      const flag = myTop > this.navTop - this.headerHeight
      if(this.showNavFixed != flag) {
        this.showNavFixed = flag
      }
      // 高亮tab-item
      const list = [...this.topList, 9999]
      const doubleBarHeight = this.navHeight + this.headerHeight
      for(let i=0, len = list.length; i < len; i++) {
        if(myTop >= list[i] - doubleBarHeight && myTop < list[i+1] - doubleBarHeight) {
          this.active = i
        }
      }
    },
    // 获取每个title、nav的高度
    getTitleHeight() {
      const titleList = this.$refs.title
      this.topList = titleList.map(val => {
        return val.offsetTop
      })
      const navHeight = this.$refs.nav.clientHeight
      this.navHeight = navHeight
      const navTop = this.$refs.nav.offsetTop
      this.navTop = navTop
    },
    // 改变窗口大小重新获取title、nav高度
    handleWindowResize() {
      this.$nextTick(() => {
        this.getTitleHeight()
      })
      this.handleNavClick(this.active)
    }
  }
}
</script>

<style lang="scss" scoped>
.navFixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
  font-size: 16px;
  color: #333;
  .bar-item {
    cursor: pointer;
    &.active {
      color: #007bff;
    }
  }
}
::v-deep.nav-tabs .nav-item .nav-link {
  border-color: transparent !important;
  font-size: 16px;
  color: #333;
  &.active {
    color: #007bff;
  }
  &:hover {
    color: #007bff;
  }
}
.desc {
  line-height: 3;
}
.heading-banner.about-banner {
    background: rgba(0, 0, 0, 0) url("/img/bg/about.jpg") no-repeat fixed 0 0;
}
.about-us {
  padding: 80px 0;
}
.about-text h2 {
  font-size: 18px;
  margin: 10px 0;
}
.about-text p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  margin-top: 25px;
}
.skill .progress .lead {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  left: 30px;
  position: absolute;
  top: 4px;
  z-index: 99;
}
.skill .progress {
    background-color: #f0f0f0;
	-webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    height: 30px;
    margin-bottom: 20px;
    position: relative;
}
.skill .progress-bar > span {
  float: right;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 5px;
}
.we-are-good-at h3 {
  font-size: 18px;
  margin-bottom: 25px;
}
.skill .progress:nth-child(1) .progress-bar {
    background: #666600 linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent) repeat scroll 0 0;
}
.skill .progress:nth-child(2) .progress-bar {
    background: #000066 linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent) repeat scroll 0 0;
}
.skill .progress:nth-child(3) .progress-bar {
    background: #602060 linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent) repeat scroll 0 0;
}
.skill .progress:nth-child(4) .progress-bar {
    background: #800040 linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent) repeat scroll 0 0;
}
.skill-area {
    -webkit-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -moz-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -ms-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -o-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    padding: 80px 0;
}
.about-team-area {
  background: #f7f7f7 none repeat scroll 0 0;
  padding: 80px 0;
}
.about-team-area .section-heading h3 {
  background: #f7f7f7 none repeat scroll 0 0;
}
.member-img {
    overflow: hidden;
    position: relative;
}
.member-img::before {
    background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 100%;
}
.member-details {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 100%;
}
.single-member:hover .member-details,
.single-member:hover .member-img::before {
    opacity: 1;
}
.mb-wrap {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 40%;
    width: 100%;
}
.member-details h4 {
    letter-spacing: 2px;
    margin-bottom: 10px;
	-webkit-box-transform: scaleX(0);
    -moz-box-transform: scaleX(0);
    -ms-box-transform: scaleX(0);
    -o-box-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
}
.single-member:hover .member-details h4 {
	-webkit-box-transform: scaleX(1);
    -moz-box-transform: scaleX(1);
    -ms-box-transform: scaleX(1);
    -o-box-transform: scaleX(1);
    transform: scaleX(1);
}
.member-details h4 a {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    text-transform: uppercase;
}
.member-details h5 {
    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 80px;
	-webkit-box-transform: scaleY(0);
    -moz-box-transform: scaleY(0);
    -ms-box-transform: scaleY(0);
    -o-box-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.single-member:hover .member-details h5 {
	-webkit-box-transform: scaleY(1);
    -moz-box-transform: scaleY(1);
    -ms-box-transform: scaleY(1);
    -o-box-transform: scaleY(1);
    transform: scaleY(1);
}
.member-social-links {
    bottom: -10px;
    opacity: 0;
    position: absolute;
    -webkit-transition: all 1.3s ease 0s;
    -moz-transition: all 1.3s ease 0s;
    -ms-transition: all 1.3s ease 0s;
    -o-transition: all 1.3s ease 0s;
    transition: all 1.3s ease 0s;
    visibility: hidden;
    width: 100%;
}
.single-member:hover .member-social-links {
    bottom: 15px;
    opacity: 1;
    visibility: visible;
}
.member-social-links > li {
    display: inline-block;
}
.member-social-links > li a {
    background: #444 none repeat scroll 0 0;
	-webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    text-align: center;
    width: 40px;
}
.member-social-links a:hover {
    background: white none repeat scroll 0 0;
    color: #444;
}
.single-member {
    overflow: hidden;
}
.team-members {
    margin-top: 30px;
}
</style>
