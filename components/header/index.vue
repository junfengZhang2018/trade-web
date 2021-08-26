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
                            <div class="language">
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
        // this.$nextTick(() => {
        //     this.getHeaderHeight();
        // });
        // window.addEventListener("scroll", this.handleWindowScroll);
    },
    beforeDestroy() {
        // window.removeEventListener("scroll", this.handleWindowScroll);
    },
    methods: {
        // 导航栏点击事件
        handleNavbarClick(item, index, bvEvt) {
            if (index !== "") {
                this.$store.commit("setSubNavIndex", index + 1);
            } else {
                this.$store.commit("setSubNavIndex", 0);
                this.showDrop = false;
            }
            this.$router.push(item.link);
            this.showCollaps = false;
        },
        handleShowDrop(bvEvt) {
            if (!this.showDrop) {
                bvEvt.preventDefault();
            }
            this.showDrop = true;
        },
        // 监听窗口滚动，改变导航背景色
        handleWindowScroll(e) {
            const myTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const flag = myTop > 60;
            if (this.showNavbarBg != flag) {
                this.showNavbarBg = flag;
            }
        },
        // 获取导航栏高度
        getHeaderHeight() {
            const headerHeight = this.$refs.header.clientHeight;
            this.$store.commit("setHeaderHeight", headerHeight);
        },
    },
};
</script>

<style lang="scss" scoped>
// @import "@/assets/styles/variables.scss";

// #header {
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
//     z-index: 99;
// }

// ::v-deep.dropdown:hover .btn,
// ::v-deep.dropdown-item:hover {
//     border-color: transparent;
//     background: none;
// }
// ::v-deep.nav-link:hover,
// ::v-deep.dropdown-item:hover,
// ::v-deep .navbar-nav .nav-link.active {
//     color: $theme-color !important;
// }

// ::v-deep.navbar-toggler {
//     padding: 0;
//     border: none;
//     outline: none;
//     .navbar-toggler-icon {
//         position: relative;
//         width: 1em;
//         // height: 0.1em;
//         height: 2px;
//         border-radius: 1px;
//         background: #fff;
//         &:after,
//         &:before {
//             position: absolute;
//             left: 0;
//             content: "";
//             width: 1em;
//             height: 2px;
//             // height: 0.1rem;
//             background: #fff;
//             transition: all 0.2s ease-in-out;
//         }
//         &:before {
//             top: -0.3em;
//         }
//         &:after {
//             top: 0.3em;
//         }
//     }
//     &.active .navbar-toggler-icon {
//         background: transparent;
//         &:before {
//             transform: rotate(45deg);
//             transform-origin: 8%;
//         }
//         &:after {
//             transform: rotate(-45deg);
//             transform-origin: 8%;
//         }
//     }
// }
// .dropdown-toggle .active {
//     color: $theme-color;
// }
// ::v-deep .nav-link {
//     color: #fff !important;
// }
// ::v-deep .navbar {
//     background: transparent !important;
//     &.active {
//         background: #fff !important;
//         box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
//         .navbar-brand,
//         .nav-link {
//             color: #333 !important;
//             &.active {
//                 color: #3269a5 !important;
//             }
//         }
//         .navbar-toggler {
//             .navbar-toggler-icon {
//                 background: #333;
//                 &:after,
//                 &:before {
//                     background: #333;
//                 }
//             }
//             &.active .navbar-toggler-icon {
//                 background: transparent;
//             }
//         }
//     }
// }
// @media screen and (max-width: 992px) {
//     ::v-deep .navbar {
//         background: #fff !important;
//         box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
//         &.active2 {
//             .navbar-brand,
//             .nav-link {
//                 color: #333 !important;
//                 &.active {
//                     color: #3269a5 !important;
//                 }
//             }
//             .navbar-toggler {
//                 .navbar-toggler-icon {
//                     background: #333;
//                     &:after,
//                     &:before {
//                         background: #333;
//                     }
//                 }
//                 &.active .navbar-toggler-icon {
//                     background: transparent;
//                 }
//             }
//         }
//     }
// }
// @media screen and (min-width: 992px) {
//     ::v-deep.dropdown:hover .dropdown-menu {
//         display: block;
//     }
//     ::v-deep .dropdown-menu {
//         display: none;
//         margin-top: 20px;
//         border-color: transparent;
//         box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
//         &:after {
//             content: "";
//             position: absolute;
//             top: -20px;
//             left: 0;
//             width: 100%;
//             height: 20px;
//             background: transparent;
//         }
//         &:before {
//             content: "";
//             position: absolute;
//             top: -13px;
//             right: 1px;
//             width: 0;
//             height: 0;
//             border: 7px solid transparent;
//             border-bottom-color: #fff;
//         }
//     }
// }
</style>
