<template>
    <!-- <header id="header" ref="header">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="active2" :class="{active: showNavbarBg}">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="@/assets/img/logo.png" class="mr-2" alt="logo">蚂蚁云
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"
          :class="{active: showCollaps}"
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav v-model="showCollaps">
          <b-navbar-nav class="ml-auto">
            <template v-for="(item, index) of navBarList" :Key="index">
              <b-nav-item v-if="item.children.length <= 0"
                :to="item.link" :active="$route.path === item.link">
                {{item.nav}}
              </b-nav-item>
              <template v-else>
                <b-nav-item-dropdown @show="handleShowDrop" right>
                  <template v-slot:button-content>
                    <span @click="handleNavbarClick(item, '', $event)"
                      :class="{active: $route.path.includes(item.link)}"
                    >{{item.nav}}</span>
                  </template>
                  <b-dropdown-item
                    v-for="(ite, ind) of item.children"
                    :key="ind"
                    @click="handleNavbarClick(ite, ind, $event)"
                    >{{ite.nav}}
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </template>
            </template>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header> -->
  
    <header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 hidden-xs">
                        <div class="header-top-left">
                            <div class="welcome-msg">
                                <span class="default-msg hidden-xs"
                                    >Default welcome msg!</span
                                >
                                <span class="phone"
                                    >Call support free:
                                    <span class="number"
                                        >01234-567890</span
                                    ></span
                                >
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-xs-12 col-sm-12">
                        <div class="header-top-right">
                            <!-- <ul class="header-links hidden-xs">
                                <li>
                                    <a class="my-account" href="#"
                                        >My Account</a
                                    >
                                </li>
                                <li>
                                    <a class="my-wishlist" href="#"
                                        >My Wishlist</a
                                    >
                                </li>
                                <li>
                                    <a class="checkout" href="#">Checkout</a>
                                </li>
                                <li><a class="login" href="#">Login</a></li>
                            </ul>
                            <div class="currency language">
                                <div class="current">
                                    <span>Dollar</span>
                                </div>
                                <ul class="lang">
                                    <li class="selected">
                                        <span class="dollar">Dollar</span>
                                    </li>
                                    <li>
                                        <a href="#" title=""
                                            ><span class="euro">Euro</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#" title=""
                                            ><span class="sheqel"
                                                >Sheqel</span
                                            ></a
                                        >
                                    </li>
                                </ul>
                            </div> -->
                            <!-- <div class="language">
                                <div class="current">
                                    <span>English</span>
                                </div>
                                <ul class="lang">
                                    <li class="selected">
                                        <img
                                            src="img/lang/1.jpg"
                                            alt="en"
                                        /><span>English</span>
                                    </li>
                                    <li>
                                        <img src="img/lang/2.jpg" alt="ar" /><a
                                            href="#"
                                            title=""
                                            ><span>اللغة العربية</span></a
                                        >
                                    </li>
                                    <li>
                                        <img src="img/lang/7.jpg" alt="hb" /><a
                                            href="#"
                                            title=""
                                            ><span>עִברִית</span></a
                                        >
                                    </li>
                                    <li>
                                        <img src="img/lang/3.jpg" alt="es" /><a
                                            href="#"
                                            title=""
                                            ><span>Español</span></a
                                        >
                                    </li>
                                    <li>
                                        <img src="img/lang/4.jpg" alt="ph" /><a
                                            href="#"
                                            title=""
                                            ><span>Pilipino</span></a
                                        >
                                    </li>
                                    <li>
                                        <img src="img/lang/5.jpg" alt="fr" /><a
                                            href="#"
                                            title=""
                                            ><span>français</span></a
                                        >
                                    </li>
                                    <li>
                                        <img src="img/lang/6.jpg" alt="sd" /><a
                                            href="#"
                                            title=""
                                            ><span>svensk</span></a
                                        >
                                    </li>
                                </ul>
                            </div> -->
                            <div class="translate">
                                <div id="google_translate_element"></div>
                                <a @click="cleartrans">Return to original page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle">
            <div class="container">
                <!-- <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-8">
                        <div class="logo">
                            <a href="index.html"
                                ><img src="img/logo.png" alt=""
                            /></a>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-6 hidden-xs">
                        <div class="search-box">
                            <form action="#">
                                <input
                                    class="form-control search-form"
                                    type="text"
                                    placeholder="Search entire store here"
                                />
                                <button
                                    class="search-button"
                                    value="Search"
                                    type="submit"
                                >
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-4 col-sm-6">
                        <div class="shopping-cart">
                            <a class="cart" href="#" title="view shopping cart"
                                ><span class="hidden-xs"
                                    >shopping cart <br /><small
                                        >2 item(s) - £199.00</small
                                    ></span
                                ></a
                            >
                            <div class="top-cart-content">
                                <div class="media header-middle-checkout">
                                    <div class="media-left check-img">
                                        <a href="#"
                                            ><img src="img/cart/1.jpg" alt=""
                                        /></a>
                                    </div>
                                    <div class="media-body checkout-content">
                                        <h4 class="media-heading">
                                            <span class="cart-count">2x</span>
                                            <a href="#">Jacket</a>
                                            <span
                                                class="
                                                    btn-remove
                                                    checkout-remove
                                                "
                                                title="remove this product from my cart"
                                                ><i
                                                    class="fa fa-times"
                                                    aria-hidden="true"
                                                ></i
                                            ></span>
                                        </h4>
                                        <p>£ 78.15</p>
                                    </div>
                                </div>
                                <div
                                    class="
                                        media
                                        header-middle-checkout
                                        last-child
                                    "
                                >
                                    <div class="media-left check-img">
                                        <a href="#"
                                            ><img src="img/cart/2.jpg" alt=""
                                        /></a>
                                    </div>
                                    <div class="media-body checkout-content">
                                        <h4 class="media-heading">
                                            <span class="cart-count">1x</span>
                                            <a href="#">Jacket</a>
                                            <span
                                                class="
                                                    btn-remove
                                                    checkout-remove
                                                "
                                                title="remove this product from my cart"
                                                ><i
                                                    class="fa fa-times"
                                                    aria-hidden="true"
                                                ></i
                                            ></span>
                                        </h4>
                                        <p>£ 120.85</p>
                                    </div>
                                </div>
                                <div class="cart-total">
                                    <span>Total</span>
                                    <span><b>£ 199.00</b></span>
                                </div>
                                <div class="checkout">
                                    <a href="#"
                                        ><span
                                            >checkout<i
                                                class="
                                                    fa fa-arrow-circle-o-right
                                                "
                                                aria-hidden="true"
                                            ></i></span
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="main-menu-area hidden-xs hidden-sm">
            <div class="container">
                <div class="row">
                    <div class="colo-md-12">
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/shop">Shop</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/msg">Message</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile-menu-area-start -->
        <div class="mobile-menu-area visible-xs visible-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile_menu">
                            <nav id="mobile_menu_active">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/shop">Shop</a></li>
                                    <li><a href="/contact">contact</a></li>
                                    <li><a href="/msg">Message</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile-menu-area-end -->
    </header>
</template>

<script>
// if (process.browser) {
//     require('@/assets/lib/jquery.meanmenu');
// }
export default {
    data() {
        return {

        };
    },
    mounted() {
        window.onload = () => this.initTranslate();
        // this.$nextTick(() => {
        //     this.getHeaderHeight();
        // });
        // window.addEventListener("scroll", this.handleWindowScroll);
    },
    beforeDestroy() {
        // window.removeEventListener("scroll", this.handleWindowScroll);
    },
    methods: {
        // // 导航栏点击事件
        // handleNavbarClick(item, index, bvEvt) {
        //     if (index !== "") {
        //         this.$store.commit("setSubNavIndex", index + 1);
        //     } else {
        //         this.$store.commit("setSubNavIndex", 0);
        //         this.showDrop = false;
        //     }
        //     this.$router.push(item.link);
        //     this.showCollaps = false;
        // },
        // handleShowDrop(bvEvt) {
        //     if (!this.showDrop) {
        //         bvEvt.preventDefault();
        //     }
        //     this.showDrop = true;
        // },
        // // 监听窗口滚动，改变导航背景色
        // handleWindowScroll(e) {
        //     const myTop =
        //         document.documentElement.scrollTop || document.body.scrollTop;
        //     const flag = myTop > 60;
        //     if (this.showNavbarBg != flag) {
        //         this.showNavbarBg = flag;
        //     }
        // },
        // // 获取导航栏高度
        // getHeaderHeight() {
        //     const headerHeight = this.$refs.header.clientHeight;
        //     this.$store.commit("setHeaderHeight", headerHeight);
        // },
        // toggle(lang) {
        //     this.$store.commit('SET_LANG', lang)
        //     localStorage.setItem('lang', lang);
        //     this.$i18n.locale = lang;
        // }
        initTranslate() {
            var langs = {
                'af': 'Afrikaans',
                'sq': 'Albanian',
                'am': 'Amharic',
                'ar': 'Arabic',
                'hy': 'Armenian',
                'az': 'Azerbaijani',
                'eu': 'Basque',
                'be': 'Belarusian',
                'bn': 'Bengali',
                'bs': 'Bosnian',
                'bg': 'Bulgarian',
                'ca': 'Catalan',
                'ceb': 'Cebuano',
                'ny': 'Chichewa',
                'zh-CN': 'Chinese Simplified',
                'zh-TW': 'Chinese Traditional',
                'co': 'Corsican',
                'hr': 'Croatian',
                'cs': 'Czech',
                'da': 'Danish',
                'nl': 'Dutch',
                'en': 'English',
                'eo': 'Esperanto',
                'et': 'Estonian',
                'tl': 'Filipino',
                'fi': 'Finnish',
                'fr': 'French',
                'fy': 'Frisian',
                'gl': 'Galician',
                'ka': 'Georgian',
                'de': 'German',
                'el': 'Greek',
                'gu': 'Gujarati',
                'ht': 'Haitian Creole',
                'ha': 'Hausa',
                'haw': 'Hawaiian',
                'iw': 'Hebrew',
                'hi': 'Hindi',
                'hmn': 'Hmong',
                'hu': 'Hungarian',
                'is': 'Icelandic',
                'ig': 'Igbo',
                'id': 'Indonesian',
                'ga': 'Irish',
                'it': 'Italian',
                'ja': 'Japanese',
                'jw': 'Javanese',
                'kn': 'Kannada',
                'kk': 'Kazakh',
                'km': 'Khmer',
                'ko': 'Korean',
                'ku': 'Kurdish (Kurmanji)',
                'ky': 'Kyrgyz',
                'lo': 'Lao',
                'la': 'Latin',
                'lv': 'Latvian',
                'lt': 'Lithuanian',
                'lb': 'Luxembourgish',
                'mk': 'Macedonian',
                'mg': 'Malagasy',
                'ms': 'Malay',
                'ml': 'Malayalam',
                'mt': 'Maltese',
                'mi': 'Maori',
                'mr': 'Marathi',
                'mn': 'Mongolian',
                'my': 'Myanmar (Burmese)',
                'ne': 'Nepali',
                'no': 'Norwegian',
                'ps': 'Pashto',
                'fa': 'Persian',
                'pl': 'Polish',
                'pt': 'Portuguese',
                'pa': 'Punjabi',
                'ro': 'Romanian',
                'ru': 'Russian',
                'sm': 'Samoan',
                'gd': 'Scots Gaelic',
                'sr': 'Serbian',
                'st': 'Sesotho',
                'sn': 'Shona',
                'sd': 'Sindhi',
                'si': 'Sinhala',
                'sk': 'Slovak',
                'sl': 'Slovenian',
                'so': 'Somali',
                'es': 'Spanish',
                'su': 'Sundanese',
                'sw': 'Swahili',
                'sv': 'Swedish',
                'tg': 'Tajik',
                'ta': 'Tamil',
                'te': 'Telugu',
                'th': 'Thai',
                'tr': 'Turkish',
                'uk': 'Ukrainian',
                'ur': 'Urdu',
                'uz': 'Uzbek',
                'vi': 'Vietnamese',
                'cy': 'Welsh',
                'xh': 'Xhosa',
                'yi': 'Yiddish',
                'yo': 'Yoruba',
                'zu': 'Zulu'
            };
            new google.translate.TranslateElement(
                {
                    // pageLanguage: 'zh-CN',
                    // 需要翻译的语言，比如你只需要翻译成越南和英语，这里就只写en,vi
                    // includedLanguages: 'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es,th,vi,af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca',
                    includedLanguages: Object.keys(langs).join(','),
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    // 自动显示翻译横幅，就是翻译后顶部出现的那个
                    autoDisplay: false,
                    // 还有些其他参数，由于原插件不再维护，找不到详细api了，将就了，实在不行直接上dom操作
                },
                'google_translate_element' // 触发元素的id
            );
        },
        cleartrans() {
            this.delCookie("googtrans");
            window.location.reload();
        },
        delCookie(name) {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() - Days * 24 * 60 * 60 * 30);
    
            //这里一定要注意，如果直接访问ip的话，不用注明域名domain
            //但访问的是域名例如www.baidu.com时，翻译插件的cookie同时存在于一级和二级域名中
            //即删除翻译cookie时要把domain=www.baidu.com和domain=.baidu.com两个cookie一起删除才行
            var domain = document.domain;
            var domainIsIp = false;
            var dd = domain.split(".");
            if(dd.length==4){
            	domainIsIp=true;
            }
            document.cookie = name + "='';path=/;expires="+ exp.toUTCString();
            if(domainIsIp==false){
            	domain="."+dd[1]+"."+dd[2];
            	document.cookie = name + "='';domain="+domain+";expires="+exp.toGMTString()+";path=/";
            }
	    }
    }
};
</script>

<style lang="scss" scoped>
    .translate {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            color: #fff;
            margin-left: 10px;
            cursor: pointer;
        }
    }
</style>
