!function(){"use strict";angular.module("gaPow",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap"])}(),angular.module("gaPow").controller("MainController",function(){var e=this;e.userName="Deric Robinson",e.helloText="Welcome to Ga Pow DemoProject",e.descriptionText="It is an AngularJS web app."}).controller("CarouselDemoCtrl",["$scope",function(e){function a(e){for(var a=0,i=n.length;i>a;a++)n[a].id=e.pop()}function i(){for(var e=[],a=0;l>a;++a)e[a]=a;return s(e)}function s(e){var a,i,s=e.length;if(s)for(;--s;)i=Math.floor(Math.random()*(s+1)),a=e[i],e[i]=e[s],e[s]=a;return e}e.myInterval=5e4,e.noWrapSlides=!1,e.active=0;var n=e.slides=[],l=0;e.addSlide=function(){1920+n.length+1;n.push({image:"/assets/images/GaPow_Bg1920x516.jpg",id:l++}),n.push({image:"/assets/images/GaPow_Bg1920x516_2.jpg",id:l++})},e.randomize=function(){var e=i();a(e)};for(var t=0;2>t;t++)e.addSlide()}]),angular.element(document).ready(function(e){function a(){var e=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",e+"px");var a=angular.element("nav.navbar-default").height(),i=angular.element("#page-wrapper").height();a>i&&angular.element("#page-wrapper").css("min-height",a+"px"),i>a&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(a>i?angular.element("#page-wrapper").css("min-height",a+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||a()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),e(function(){a()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("gaPow").run(e)}(),function(){"use strict";function e(e,a){e.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),a.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gaPow").config(e)}(),angular.module("gaPow").directive("sideNavigation",["$timeout",function(e){return{restrict:"A",link:function(a,i){a.$watch("authentication.user",function(){e(function(){i.metisMenu()})});var s=angular.element('#side-menu a:not([href$="\\#"])');if(s.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var n=i.parent();n.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(e){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(a){a.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),e(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]),angular.module("inspinia").run(["$templateCache",function(e){e.put("app/main/main.html",'<div id="wrapper"><div class="row"><div class="col-lg-12"><div><div class="row"><div id="Row1" class="col-md-12"><div class="ibox float-e-margins"><div ng-controller="CarouselDemoCtrl"><div style="padding:0; margin:0"><div uib-carousel="" active="active" interval="myInterval" no-wrap="noWrapSlides"><div uib-slide="" ng-repeat="slide in slides track by slide.id" index="slide.id"><img ng-src="{{slide.image}}" style="margin:auto;"><div class="carousel-caption"></div></div></div></div></div></div></div><div id="Row2" class="col-md-12"><div class="row"><div class="col-md-8"><div class="col-md-12"><h3>Recomended for you</h3><br><span>Simple ideas to help you save time, money, and energy.</span><div class="row"><div class="col-md-6"><div class="widget style1 lazur-bg"><div class="row vertical-align"><div class="col-xs-3" style="border:0px"><i class="fa fa-snowflake-o fa-4x"></i></div><div class="col-xs-9 text-right" style="border:0px"><h5 class="font-bold">Winter is Coming</h5><h6>Get your home ready for winter weather with these energy efficiency tips.</h6></div></div></div></div><div class="col-md-6"><div class="widget style1 red-bg"><div class="row vertical-align"><div class="col-xs-3" style="border:0px"><i class="fa fa-building-o fa-4x"></i></div><div class="col-xs-9 text-right" style="border:0px"><h5 class="font-bold">Refrigerator Rebate</h5><h6>Save Money &amp Energy: Give us your old refrigeratory and we\'ll give you $50.</h6></div></div></div></div></div><div class="row"><div class="col-md-6"><div class="widget style1 yellow-bg"><div class="row vertical-align"><div class="col-xs-3" style="border:0px"><i class="fa fa-money fa-4x"></i></div><div class="col-xs-9 text-right" style="border:0px"><h5 class="font-bold">Lower Your Bill</h5><h6>Install a programmable thermostat and still save, even when you\'re away from home.</h6></div></div></div></div><div class="col-md-6"><div class="widget style1 navy-bg"><div class="row vertical-align"><div class="col-xs-3" style="border:0px"><i class="fa fa-credit-card fa-4x"></i></div><div class="col-xs-9 text-right" style="border:0px"><h5 class="font-bold">Many Ways to Pay</h5><h6>We make paying your bill easy, convenient and efficient. Find the best way to pay today.</h6></div></div></div></div></div></div><div class="col-md-12"><h3>In the Community</h3><div class="row"><div class="col-md-8"><div class="ibox-content"><figure><iframe width="450" height="315" src="https://www.youtube.com/embed/TRPGo_8uQ3w" frameborder="0" allowfullscreen=""></iframe></figure></div></div><div class="col-md-4"><div class="col-sm-12" style="padding:0"><img src="/assets/images/article_001.jpg" alt="Engaging 100000 Students in STEM Learning" style="max-width:220px"></div><div class="col-md-12" style="padding:0"><img src="/assets/images/article_002.jpg" alt="Community and Charitable Leaders Share the Impact" style="max-width:220px"></div></div></div></div><div class="col-lg-12"><div class="ibox-content"><h2>Outage map</h2><img src="/assets/images/outagemap.jpg" alt="" style="max-width:700px;padding:0"></div></div></div><div class="col-md-4"><div class="outer"><div class="inner"><div><h3>Get Social</h3></div><div class="iframe"><div class="iframe-container"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGeorgiaPower%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true"></iframe></div></div></div><div class="inner"><div class="iframe"><div class="iframe-container"><a class="twitter-timeline" href="https://twitter.com/GeorgiaPower" data-height="500" data-width="330">Tweets by GeorgiaPower</a><script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div></div></div></div></div></div><div id="Row3" class="col-md-12" style="text-align:center; background-color:#02bdee;color:white"><h2>Innovation</h2><br><br></div></div><div id="Row4" class="col-md-12"><div class="row"><img alt="image" class="img-responsive" src="/assets/images/innovations.jpg"></div></div><div id="Row5" class="col-md-12" style="padding-bottom:5em;padding-top:4em"><h3>Latest News</h3><div class="row"><div class="col-md-4"><img alt="image" class="img-responsive" src="/assets/images/secArticle001.jpg"></div><div class="col-md-4"><img alt="image" class="img-responsive" src="/assets/images/secArticle002.jpg"></div><div class="col-md-4"><img alt="image" class="img-responsive" src="/assets/images/secArticle003.jpg"></div></div></div><div id="Row6" class="col-md-12" style="text-align:center; background-color:#02bdee;color:white;padding-bottom:25px"><h4>Sitemap</h4><div class="row"><div class="col-md-12"><div class="col-md-1"></div><div class="col-md-2"><p>Residential Customers</p>My Account Pay My Bill Turn On/Off Power Payment Arrangements Paperless Billing Budget Billing Prices/Rates Save Money and Energy Energy Audits Money-Saving Tips Rebates & Incentives Electric Vehicles Georgia Power Marketplace Products & Programs Water Heaters Heat Pumps Lighting Power Credit Smart Meter Multifamily</div><div class="col-md-2"><p>Business Customers</p>My Account Pay My Bill Turn On/Off Power Budget Billing Prices/Rates Save Money and Energy Energy Audits Money-Saving Tips Rebates & Incentives Electric Vehicles Programs & Services Water Heaters Heat Pumps Outdoor Lighting Electric Cooking Forklifts Smart Meter Energydirect</div><div class="col-md-2"><p>Help &amp Support</p>Contact Us Report an Outage Understanding Outages Find an Office Frequently Asked Questions Report Energy Theft Project SHARE Bill Payment Assistance Call Before You Dig (811) Site Map En Español</div><div class="col-md-2"><p>Company Information</p>About Us Brand Promise Diversity Georgia Power Retirees Our Community Lakes & Recreation Charitable Giving Education Storm Center Environment Get Involved — Energy Efficiency Stewardship Energy Nuclear Solar Renewables Media Resources Careers</div><div class="col-md-2"><p>Doing Business With Us</p>Agency Assistance Builders Developers Economic Development New Construction Services Property Managers Suppliers Energy Services Power Services Wiring Approval<hr><div class="col-md-12"><h5>Connect With Us</h5></div><div class="col-md-12"><a class="btn btn-social-icon btn-facebook"><span class="fa fa-facebook"></span></a> <a class="btn btn-social-icon btn-twitter"><span class="fa fa-twitter"></span></a> <a class="btn btn-social-icon btn-youtube"><span class="fa fa-youtube"></span></a></div></div><div class="col-md-1"></div></div></div></div></div></div></div></div></div>'),e.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),e.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),e.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div>'),e.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),e.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a uib-dropdown-toggle="" href=""><span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{main.userName}}</strong></span> <span class="text-muted text-xs block">Account<b class="caret"></b></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li><li><a href="">Register</a></li></ul></div><div class="logo-element"></div></li><li ui-sref-active="active"><a ui-sref="index.main"><i class="fa fa-laptop"></i> <span class="nav-label">Home</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-home"></i> <span class="nav-label">For My Home</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-building"></i> <span class="nav-label">For My Business</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-plug"></i> <span class="nav-label">Power Outages</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-bicycle"></i> <span class="nav-label">Community</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-desktop"></i> <span class="nav-label">Environment</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-bolt"></i> <span class="nav-label">Energy</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-id-card-o"></i> <span class="nav-label">About Us</span></a></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-volume-control-phone"></i> <span class="nav-label">Contact Us</span></a></li></ul></div></nav>'),e.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Type here to Search..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-fa5eed0d40.js.map
