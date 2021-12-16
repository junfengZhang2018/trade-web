<template>
   <div class=''>
       <!-- heading-banner-start -->
        <div class="heading-banner contact-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="breadcrumb">
                            <a title="Return to Home" href="index.html">
                                <i class="icon-home"></i>
                            </a>
                            <span class="navigation-pipe">></span>
                            <span class="navigation-page">
                                Contact
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- heading-banner-end -->
        <!-- contact-area-start -->
        <div class="contact-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="contact-form wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3>
                                <i class="fa fa-comment-o"></i>
                                Leave a Message
                            </h3>
                            <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" v-model="name"  placeholder="Name (required)" />
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input type="email" v-model="email" placeholder="Email (required)" />
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" v-model="subject"  placeholder="Subject" />
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <textarea placeholder="Message" v-model="message" id="message" cols="30" rows="10"></textarea>
                                        <div class="submit" @click="submit">submit</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="contact-info wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                            <h3>
                                <i class="fa fa-newspaper-o"></i>
                                leave a message
                            </h3>
                            <ul>
                                <li>
                                    <i class="fa fa-location-arrow"></i>
                                    <span>28 Green Tower, Street Name,</span>
                                    <span>New York City, USA</span>
                                </li>
                                <li>
                                    <i class="fa fa-mobile"></i>
                                    <span>+880 1234 123456</span>
                                    <span>+880 1234 123456</span>
                                </li>
                                <li>
                                    <i class="fa fa-envelope-o"></i>
                                    <span>admin@admin.com</span>
                                    <span>admin@admin.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact-area-end -->
        <div v-if="isHidden">
            <div class="prompt-box success">
                <!-- <div class="prompt-success-icon"></div> -->
                <div class= "msgStyle">{{msgTips}}</div>
                <div class="prompt-close-btn" @click="close()">X</div>
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
                name:'',
                email:'',
                subject:'',
                message:'',
                msgTips:'提交成功，我们将尽快与您取得联系！',
                isHidden:false
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            async submit(){
                if(this.name==''||this.email==''){
                    this.isHidden = true;
                    this.msgTips= '请填写姓名或者邮箱'
                    setTimeout(()=>{
                        this.isHidden = false
                    }, 2000)
                    return false
                }
                const res = await this.$axios.post(`http://localhost:3000/sendmail`, {
                  subject: this.subject,
                  html: `
                    <p><strong>发信人姓名：</strong></p>
                    <p>${this.name}</p>
                    <p><strong>发信人邮箱：</strong></p>
                    <p>${this.email}</p>
                    <p><strong>发信人留言：</strong></p>
                    <p>${this.message}</p>
                  `
                })
                if(res.data.error_code === 200) {
                    // this.$bvToast.toast('提交成功，我们将尽快与您取得联系！');
                    this.isHidden = true;
                    setTimeout(()=>{
                        this.isHidden = false
                    }, 2000)
                }else{
                     this.isHidden = true;
                    this.msgTips= '提交失败，请重新提交。'
                    setTimeout(()=>{
                        this.isHidden = false
                    }, 2000)
                    return false
                }
            },
            close(){
                 this.isHidden = false;
            }
        },
        //生命周期 - 挂载完成（可以访问DOM元素）   
        mounted() {
           
        },
    }
</script>
<style lang='scss' scoped>
.prompt-box {
    width:600px;
    min-height:36px;
    line-height:36px;
    position:fixed;
    left:50%;
    top:20px;
    margin-left:-320px;
    z-index:99999;
    border-radius:2px;
    padding:0 25px;
    color:#666;
}
.prompt-box.warning {
    font-weight:bold;
    border: 1px solid #FCD037;
}
.prompt-box.success {
    font-weight:bold;
    border: 1px solid #e1f3d8;
    color: #67c23a;
    background-color: #e1f3d8;
}
.prompt-box.notify {
    font-weight:bold;
    border: 1px solid #FCD037;
}
.prompt-close-btn {
    // background:url("/images/closebtn.svg") no-repeat center;
    width:14px;
    height:14px;
    position:absolute;
    right:20px;
    top:0;
    cursor:pointer;
    color: #909399;
}
.msgStyle {
    display:inline-block;
    vertical-align:middle;
    max-width:500px;
    text-align:left;
}
.prompt-warning-icon {
    display: inline-block;
    width: 26px;
    height: 26px;
    vertical-align: middle;
}
.prompt-success-icon {
    display: inline-block;
    width: 26px;
    height: 26px;
    vertical-align: middle;
}
.prompt-notify-icon {
    display: inline-block;
    width: 26px;
    height: 25px;
    vertical-align: middle;
}
.prompt-hidden {
    display:none;
}
.contact-form .submit{
    width: 120px;
    line-height: 40px;
    text-align: center;
    background: #252525 none repeat scroll 0 0;
    border: medium none;
    border-radius: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    margin-top: 16px;
    padding: 0 15px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}
/*------------------------------
17. contact
------------------------------*/
.heading-banner.contact-banner {
    background: rgba(0, 0, 0, 0) url("/img/bg/contact.jpg") no-repeat fixed 0 0;
}
.contact-info h3, .contact-form h3 {
  border-bottom: 2px solid #e8e8e9;
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 8px;
  text-transform: uppercase;
}
.contact-form h3 {
    margin-bottom: 30px;
}
.contact-form h3 i,
.contact-info h3 i {
    margin-right: 10px;
}
.contact-form input[type="text"],
.contact-form input[type="email"] {
    border: 1px solid #ccc;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    height: 50px;
    margin-bottom: 16px;
    padding-left: 20px;
    width: 100%;
}
.contact-form input[type="submit"] {
    background: #252525 none repeat scroll 0 0;
    border: medium none;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    margin-top: 16px;
    padding: 0 15px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.contact-form textarea#message {
    border: 1px solid #ccc;
	-webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    height: 180px;
    padding: 20px;
    width: 100%;
}
.contact-area {
  padding: 80px 0;
}
.contact-form input[type="submit"]:hover {
    background: #ff6464 none repeat scroll 0 0;
}
.contact-info ul li {
    border-bottom: 1px solid #e8e8e9;
    clear: both;
    margin-bottom: 30px;
    overflow: hidden;
}
.contact-info ul li i {
    background: #ddd none repeat scroll 0 0;
    color: #999;
    float: left;
    font-size: 20px;
    height: 35px;
    line-height: 35px;
    margin-right: 20px;
    text-align: center;
    width: 35px;
}
.contact-info ul li span {
    display: block;
}
.map-area {
    padding: 80px 0;
    -webkit-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -moz-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -ms-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    -o-box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
    box-shadow: 0 12px 18px -22px rgba(31, 31, 31, 1) inset, 0 -23px 21px -33px rgba(31, 31, 31, 1) inset;
}
#googleMap {
    height: 400px;
    width: 100%
}
</style>