webpackJsonp([1],{"/8T7":function(t,e){},"991W":function(t,e){},"E/Nk":function(t,e){},GoUO:function(t,e){},Hifk:function(t,e){},KFao:function(t,e){},N0Cv:function(t,e){},"NH+c":function(t,e,s){t.exports=s.p+"static/img/ing.078aa3f.gif"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};s.d(n,"queryPlay",function(){return ut});var i={};s.d(i,"singer",function(){return ht}),s.d(i,"currentSong",function(){return dt});var r=s("7+uW"),o=s("mtWM"),a=s.n(o),l=s("Dd8w"),c=s.n(l),u=s("NYxO"),h={sequence:0,loop:1};var d={data:function(){return{songReady:"",currentTime:0}},created:function(){this.touch={}},computed:c()({bjMode:function(){return this.mode===h.sequence?"bj_sequence":this.mode===h.loop?"bj_loop":"bj_random"},playImg:function(){return this.playing?"center_true":"center_false"},miniPlayIcon:function(){return this.playing?"mini_play_true":"mini_play_false"},rotateImg:function(){return this.playing?"play":"play pause"}},Object(u.e)(["fullScreen","playlist","playing","currentIndex","mode","sequenceList"]),Object(u.c)(["currentSong"])),mounted:function(){},methods:c()({up:function(){this.setFullScreen(!1)}},Object(u.d)({setFullScreen:"GET_FULLSCREEN",setPlayingState:"GET_PLAYING",setCurrentIndex:"GET_CURRENTINDEX",setMode:"GET_MODE",setPlayList:"GET_PLAYLIST"}),{screen:function(){this.setFullScreen(!0)},toPlaying:function(){this.setPlayingState(!this.playing)},miniPlay:function(){this.setPlayingState(!this.playing)},next:function(){if(this.songReady){var t=this.currentIndex+1;t===this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.toPlaying(),this.songReady=!1}},prev:function(){if(this.songReady){var t=this.currentIndex-1;-1===t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.toPlaying(),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},end:function(){this.mode===h.loop?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play()},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return t|=0,this._pad(t/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=t.toString().length;s<e;s++)t="0"+t;return t},progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,s=Math.min(Math.max(this.touch.left+e,0),this.$refs.planTime_plan.clientWidth),n=this.currentSong.duration*(s/this.$refs.planTime_plan.clientWidth);this.$refs.progress.style.width=s+"px",this.$refs.btn_warpper.style.transform="translate3d("+s+"px,0,0)",this.$refs.audio.currentTime=n,console.log(this.touch.startX,this.touch.left,t.touches[0].pageX)}},progressTouchEnd:function(t){this.touch.initiated=!1},progressClick:function(t){var e=this.currentSong.duration*(t.offsetX/this.$refs.planTime_plan.clientWidth);this.$refs.audio.currentTime=e,this.$refs.progress.style.width=t.offsetX+"px",this.$refs.btn_warpper.style.transform="translate3d("+t.offsetX+"px,0,0)"},changeMode:function(){var t=(this.mode+1)%2;this.setMode(t);var e=null,s=this.sequenceList;e=t===h.random?function(t){for(var e=0;e<t.length;e++){var s=(i=0,r=e,Math.floor(Math.random()*(r-i+1)+i)),n=t[e];t[e]=t[s],t[s]=n}var i,r;return t}(s):s,this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this,s=t.findIndex(function(t){return t.id===e.currentSong.id});console.log(s),this.setCurrentIndex(s)}}),watch:{currentSong:function(t,e){var s=this;t.id!==e.id&&this.$nextTick(function(){s.$refs.audio.play()})},playing:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})},currentTime:function(t){if(t>=0&&!this.touch.initiated){var e=this.$refs.planTime_plan.clientWidth*t/this.currentSong.duration;this.$refs.progress.style.width=e+"px",this.$refs.btn_warpper.style.transform="translate3d("+e+"px,0,0)"}}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0&&t.up,expression:"playlist.length>0&&up"}],ref:"a",staticClass:"player"},[s("transition",{attrs:{name:"mormal"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"mormal_player"},[s("div",{staticClass:"bj"},[s("img",{attrs:{src:t.currentSong.image,width:"100%",height:"100%"}})]),t._v(" "),s("div",{staticClass:"top"},[s("div",{staticClass:"top_icDiv"},[s("i",{staticClass:"iconfont",on:{click:t.up}},[t._v("")])]),t._v(" "),s("div",{staticClass:"text"},[s("h1",[t._v(t._s(t.currentSong.name))]),t._v(" "),s("p",[t._v(t._s(t.currentSong.singer))])])]),t._v(" "),s("div",{staticClass:"mid"},[s("div",{staticClass:"cd"},[s("div",{staticClass:"cd_image",class:t.rotateImg},[s("img",{attrs:{src:t.currentSong.image}})]),t._v(" "),s("span",[t._v("这是歌词这是歌词")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"text"}),t._v(" "),s("div",{staticClass:"time"},[s("span",{staticClass:"time_left"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),s("div",{staticClass:"planTime",on:{click:t.progressClick}},[s("div",{ref:"planTime_plan",staticClass:"planTime_plan"},[s("div",{ref:"progress",staticClass:"progress"}),t._v(" "),s("div",{ref:"btn_warpper",staticClass:"btn_warpper",on:{touchstart:function(e){return e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){return e.preventDefault(),t.progressTouchMove(e)},touchend:function(e){return e.preventDefault(),t.progressTouchEnd(e)}}})])]),t._v(" "),s("span",{staticClass:"time_right"},[t._v(t._s(t.format(t.currentSong.duration)))])])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"options"},[s("div",{staticClass:"left"},[s("span",{staticClass:"one",class:t.bjMode,on:{click:t.changeMode}})]),t._v(" "),s("div",{staticClass:"left"},[s("span",{staticClass:"two",on:{click:t.prev}})]),t._v(" "),s("div",{staticClass:"center"},[s("span",{class:t.playImg,on:{click:t.toPlaying}})]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"one",on:{click:t.next}})]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"two"})])])])])]),t._v(" "),s("transition",{attrs:{name:"mini"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini_player",on:{click:t.screen}},[s("div",{staticClass:"mini_image"},[s("img",{class:t.rotateImg,attrs:{src:t.currentSong.image}})]),t._v(" "),s("div",{staticClass:"mini_text"},[s("h1",[t._v(t._s(t.currentSong.name))]),t._v(" "),s("p",[t._v(t._s(t.currentSong.singer))])]),t._v(" "),s("div",{staticClass:"mini_play"},[s("span",{class:t.miniPlayIcon,on:{click:function(e){return e.stopPropagation(),t.miniPlay(e)}}},[s("svg",{attrs:{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{staticClass:"progress_bar",attrs:{"data-v-5a1ec93d":"",r:"50",cx:"50",cy:"50",fill:"transparent","stroke-dasharray":"314.1592653589793","stroke-dashoffset":"251.8734996301937"}})])])]),t._v(" "),s("div",{staticClass:"mini_list"},[s("i",{staticClass:"iconfont"},[t._v("")])])])]),t._v(" "),s("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{canplay:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.end}})],1)},staticRenderFns:[]};var f={name:"App",components:{play:s("VU/8")(d,p,!1,function(t){s("x3i7")},"data-v-3b57535a",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("play")],1)},staticRenderFns:[]};var g=s("VU/8")(f,m,!1,function(t){s("cyap")},null,null).exports,v=s("/ocq"),_={data:function(){return{title:[{tit:"推荐",path:"/"},{tit:"歌手",path:"singer"},{tit:"搜索",path:"search"}]}},methods:{skip:function(t){this.$router.push(t),console.log(this.$route.path)},GetPath:function(t){return"/"==t?"/":"/"+t}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[t._m(0),t._v(" "),s("div",{staticClass:"secondBox"},[s("div",t._l(t.title,function(e,n){return s("span",{key:n,class:{color:t.$route.path==t.GetPath(e.path)},on:{click:function(s){return t.skip(e.path)}}},[t._v(t._s(e.tit))])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"firstBox"},[e("div",{staticClass:"firstBox_logo"},[e("i",{staticClass:"iconfont"},[this._v("")])]),this._v(" "),e("div",{staticClass:"ic_user"},[e("i",{staticClass:"iconfont"},[this._v("")])])])}]};var C=s("VU/8")(_,y,!1,function(t){s("y57P")},"data-v-5e7fad0a",null).exports,S={props:{imgData:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1}}}},mounted:function(){}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return this.imgData.length>0?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgData,function(t,s){return e("swiper-slide",{key:s},[e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:t.linkUrl}},[e("img",{staticClass:"img",attrs:{src:t.picUrl}})])])])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()},staticRenderFns:[]};var b=s("VU/8")(S,x,!1,function(t){s("jOec")},"data-v-204b085e",null).exports,T=(s("P9l9"),s("GQaK")),E={name:"isScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!1},scrollX:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new T.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollX:this.scrollX}),this.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("pullup")}),this.pulldown&&this.scroll.on("touchend",function(e){e.y>50&&t.$emit("pulldowm")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}))},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var L=s("VU/8")(E,w,!1,function(t){s("E/Nk")},"data-v-5862ff71",null).exports,$={props:{title:{type:String,default:"正在加载....."}},mounted:function(){this.top()},methods:{top:function(){}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"loading",staticClass:"loading"},[e("img",{attrs:{src:s("NH+c")}}),this._v(" "),e("p",[this._v(this._s(this.title))])])},staticRenderFns:[]};var k=s("VU/8")($,I,!1,function(t){s("/8T7")},"data-v-591ed19e",null).exports,P={data:function(){return{data:[],pulldown:!0,listenScroll:!0,imgList:[],hotRecommon:[],pullup:!0}},components:{Top:C,Slider:b,isScroll:L,Loading:k},created:function(){var t=this;this.loadData();this.$axios.get("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg").then(function(e){t.imgList=e.data.data.slider,console.log(t.imgList)}).catch(function(t){console.log(t)}),this.$axios.get('/u/cgi-bin/musicu.fcg?-=recom8916479739195171&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B"comm"%3A%7B"ct"%3A24%7D%2C"recomPlaylist"%3A%7B"method"%3A"get_hot_recommend"%2C"param"%3A%7B"async"%3A1%2C"cmd"%3A2%7D%2C"module"%3A"playlist.HotRecommendServer"%7D%7D').then(function(e){setTimeout(function(){t.hotRecommon=e.data.recomPlaylist.data},500),console.log(e)}).catch(function(t){console.log(t)})},mounted:function(){},methods:{recommonListenNum:function(t){return t/1e4>=1?"播放量: "+(t/1e4).toFixed(1)+"万":"播放量: "+t},loadData:function(){}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("div",{staticClass:"Rtop"},[s("Top")],1),t._v(" "),s("is-scroll",{staticClass:"wrapper",attrs:{data:t.data,listenScroll:t.listenScroll,pullup:t.pullup,pulldown:t.pulldown},on:{pulldown:t.loadData}},[s("div",{staticClass:"content"},[s("div",{staticClass:"img_content"},[s("div",{staticClass:"img"},[s("slider",{attrs:{imgData:t.imgList}})],1)]),t._v(" "),s("div",{staticClass:"bot"},[s("p",{staticClass:"bot_h"},[t._v("为你推荐")]),t._v(" "),t._l(t.hotRecommon.v_hot,function(e,n){return s("div",{key:n,staticClass:"bot_list"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}]}),t._v(" "),s("div",{staticClass:"list_tit"},[s("p",{domProps:{textContent:t._s(t.recommonListenNum(e.listen_num))}}),t._v(" "),s("h3",{domProps:{textContent:t._s(e.title)}})])])})],2),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:t.hotRecommon.length<=0,expression:"hotRecommon.length<=0"}],staticClass:"meLoading"})],1)])],1)},staticRenderFns:[]};var F=s("VU/8")(P,N,!1,function(t){s("a7gl")},"data-v-763a4a38",null).exports,R={data:function(){return{singerList:"",bb:10,ttt:"",hotList:{title:"热门",items:[]},sortList:[],map:[],titLength:0,itemsLength:0,ulScrollY:-1,currentIndex:0,difference:0,click:!0}},created:function(){this.arrAreaScroll=[],this.probeType=3,this.touch={},this.listenScroll=!0,this.GetData()},mounted:function(){console.log(this.sortList)},components:{Top:C,meScroll:L,loading:k},methods:c()({},Object(u.d)({getSinger:"GET_SINGER"}),{skipSingerList:function(t){this.$router.push({path:"/singer/"+t.Fsinger_mid}),this.noScroll(),this.getSinger(t)},pushPieceTitle:function(){return!(this.ulScrollY>=0)&&(this.sortList[this.currentIndex]?this.sortList[this.currentIndex].title:"")},onShort:function(t){var e=t.target.getAttribute("li-list");e&&(this.touch.Y1=t.touches[0].clientY,this.ulScrollY=-this.arrAreaScroll[Number(e)],this.touch.index=e,console.log(e),this.$refs.wrapper.scrollToElement(this.$refs.Group[e],0))},onTouchMove:function(t){this.touch.Y2=t.touches[0].clientY;var e=(this.touch.Y2-this.touch.Y1)/19|0;this.$refs.wrapper.scrollToElement(this.$refs.Group[e+Number(this.touch.index)],0)},singerScroll:function(t){this.ulScrollY=t.y},GetData:function(){var t=this;this.$axios.get("/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=1664029744&loginUin=280309453&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCodr=0").then(function(e){for(var s in t.singerList=e.data.data.list,t.singerList.forEach(function(e,s){e.meImg="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e.Fsinger_mid+".jpg",s<10&&t.hotList.items.push(e),t.map[e.Findex]||(t.map[e.Findex]={title:e.Findex,items:[]}),t.map[e.Findex].items.push(e)}),t.map)t.map[s].title.match(/[a-zA-Z]/)&&t.sortList.push(t.map[s]);t.sortList.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),t.sortList.unshift(t.hotList),t.titLength=t.sortList.length,t.sortList.forEach(function(e,s){for(var n in e)"items"===n&&(t.itemsLength+=e[n].length)})}).then(function(){console.log("time");var e=t.$refs.Group,s=0;t.arrAreaScroll.push(s);for(var n=0;n<e.length;n++)s+=e[n].clientHeight,t.arrAreaScroll.push(s)}).catch(function(t){console.log(t)})}}),watch:{data:function(t,e){console.log(t,e)},ulScrollY:function(t,e){for(var s=this.arrAreaScroll,n=0;n<s.length;n++){var i=s[n],r=s[n+1];if(!r||-t<r&&-t>=i)return this.currentIndex=n,void(this.difference=r+t);if(t>=0)return void(this.currentIndex=0)}this.currentIndex=0},difference:function(t){var e=t>0&&t<this.$refs.titP[0].offsetHeight?-(this.$refs.titP[0].offsetHeight-t):0;this.$refs.pushPiece.style.transform="translate3d(0,"+e+"px,0)"}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"singer"},[s("div",{staticClass:"singer_top"},[s("top")],1),t._v(" "),t.sortList.length>0?s("div",{ref:"singer_content",staticClass:"singer_content"},[s("me-scroll",{ref:"wrapper",staticClass:"wrapper",attrs:{listenScroll:t.listenScroll,probeType:t.probeType,click:t.click},on:{scroll:t.singerScroll}},[s("div",{staticClass:"content"},t._l(t.sortList,function(e,n){return s("div",{key:n,ref:"Group",refInFor:!0,staticClass:"second_content"},[s("p",{ref:"titP",refInFor:!0,staticClass:"titP",domProps:{textContent:t._s(e.title)}}),t._v(" "),s("ul",{staticClass:"content_firstUl"},t._l(e.items,function(e,n){return s("li",{key:n,ref:"ulli",refInFor:!0,on:{click:function(s){return t.skipSingerList(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.meImg,expression:"lis.meImg"}]}),t._v(" "),s("span",{domProps:{textContent:t._s(e.Fsinger_name)}})])}),0)])}),0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.pushPieceTitle(),expression:"pushPieceTitle()"}],ref:"pushPiece",staticClass:"pushPiece"},[s("p",{domProps:{textContent:t._s(t.pushPieceTitle())}})])])],1):s("loading",{staticClass:"load"}),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.sortList.length>0,expression:"sortList.length>0"}],staticClass:"scond_ul",on:{touchstart:t.onShort,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onTouchMove(e)}}},t._l(t.sortList,function(e,n){return s("li",{key:n,class:{color:t.currentIndex===n},attrs:{"li-list":n},domProps:{textContent:t._s(e.title.substr(0,1))}})}),0),t._v(" "),s("div",{staticClass:"bot"}),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var j=s("VU/8")(R,A,!1,function(t){s("Hifk")},"data-v-39babc09",null).exports,D=s("Zrlr"),G=s.n(D),U=function t(e){var s=e.id,n=e.mid,i=e.singer,r=e.name,o=e.album,a=e.duration,l=e.image,c=e.url;G()(this,t),this.id=s,this.mid=n,this.singer=i,this.name=r,this.album=o,this.duration=a,this.image=l,this.url=c},Y=(new Date).getUTCMilliseconds();Math.round(2147483647*Math.random());var q={name:"SingerListTop",props:{bgImage:{type:String,default:""},title:{type:String,default:""}},computed:{bjStyle:function(){return"background-image:url("+this.bgImage+"?max_age=2592000)"}},created:function(){},mounted:function(){},methods:{quit:function(){this.$router.push("/singer")}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music_list"},[s("div",{staticClass:"back",on:{click:t.quit}},[s("i",{staticClass:"iconfont icon-fanhui"},[t._v("")])]),t._v(" "),t._m(0),t._v(" "),s("h1",{staticClass:"title",domProps:{textContent:t._s(t.title)}}),t._v(" "),s("div",{staticClass:"bj_image",style:t.bjStyle},[s("div",{staticClass:"filter"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"clickPlay"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("点击随机播放")])}]};var B=s("VU/8")(q,M,!1,function(t){s("N0Cv")},"data-v-0b770599",null).exports,O={name:"SingerListContent",props:{songs:{type:Array,default:[]}},created:function(){this.probeType=3,this.click=!0,this.listenScroll=!0},data:function(){return{scrollY:""}},mounted:function(){console.log(this.songs)},methods:{singerScroll:function(t){this.scrollY=t.y},selectItem:function(t,e){this.$emit("select",t,e)}},watch:{scrollY:function(t){this.$emit("onShort",this.scrollY)},songs:function(t,e){console.log(t,e)}},components:{isScroll:L,loading:k}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music_content"},[t.songs.length>0?s("is-scroll",{staticClass:"wrapper",attrs:{probeType:t.probeType,click:t.click,listenScroll:t.listenScroll},on:{scroll:t.singerScroll}},[s("div",{staticClass:"content"},[s("ul",t._l(t.songs,function(e,n){return s("li",{key:n,on:{click:function(e){return t.selectItem(t.songs,n)}}},[s("div",{staticClass:"ic"},[s("span")]),t._v(" "),s("div",{staticClass:"text"},[s("p",{domProps:{textContent:t._s(e.name)}}),t._v(" "),s("span",{domProps:{textContent:t._s(e.singer+"·"+e.album)}})])])}),0)])]):s("loading",{staticClass:"load"})],1)},staticRenderFns:[]};var V={val:""},H={name:"singer_list",components:{SingerListTop:B,SingerListContent:s("VU/8")(O,X,!1,function(t){s("kwGg")},"data-v-5778ed18",null).exports},data:function(){return{songerList:[],ds:[]}},computed:c()({title:function(){return this.singer.Fsinger_name},bjImage:function(){return this.singer.meImg},songs:function(){return this.songerList}},Object(u.e)(["singer"])),created:function(){var t=this;console.log(this.songerList),this.getSingerListInfo(),this.ds=[15],setTimeout(function(){t.ds=[1,45]})},methods:c()({selectItem:function(t,e){this.queryPlay({playlist:this.songs,selist:this.songs,index:e}),console.log(this.songs,e)}},Object(u.b)(["queryPlay"]),{onShort:function(t){this.$refs.singer_list_bot.style.transfrom="translate3d(0,"+t+"px,0)";var e=0,s=1,n=this.$refs.bjImage.$el.getElementsByClassName("bj_image")[0],i=this.$refs.bjImage.$el.getElementsByClassName("clickPlay")[0];-t>=230?(e=40,n.style.paddingTop="0%",n.style.height="45px",n.style.zIndex=e):-t>=0&&-t<=230&&(n.style.paddingTop="40vh",n.style.height="0px",-t>=45&&-t<=75?(i.style.zIndex=0,i.style.opacity=0):t>-45&&(i.style.zIndex=1,i.style.opacity=1));var r=Math.abs(t/n.offsetHeight);t>0?(s=1+r,n.style.transform="scale("+s+")",i.style.zIndex=1,i.style.opacity=1,this.$refs.bg_layer.style.height="0px"):this.$refs.bg_layer.style.height=-t+"px",n.style.zIndex=e},getSingerListInfo:function(){var t,e=this;this.singer.Fsinger_mid?this.$axios.get("/api"+(t=this.singer.Fsinger_mid,"/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&ct=24&singermid="+t+"&order=listen&begin=0&num=30&songstatus=1")).then(function(t){var s=e.requireSingerList(t.data.data.list);s.forEach(function(t,e){t.image=t.image.replace("90x90","300x300")}),e.songerList=s,V.val=s,console.log(V.val)}).catch(function(t){console.log(t)}):this.$router.push({path:"/singer"})},requireSingerList:function(t){var e=[];if(t)return t.forEach(function(t){var s=t.musicData;s.songid&&s.albummid&&e.push(function(t){return new U({id:t.songid,mid:t.songmid,singer:(e=t.singer,s=[],e?(e.forEach(function(t){s.push(t.name)}),s.join("/")):""),name:t.songname,album:t.albumname,duration:t.interval,image:"http://y.gtimg.cn/music/photo_new/T002R90x90M000"+t.albummid+".jpg?max_age=2592000",url:"http://dl.stream.qqmusic.qq.com/C400"+t.songmid+".m4a?guid=8537498168&vkey=1C2508F8A9DF2234E8E84C0476E406EE7738D2C1181561D32E8CF644BB1E6AEA6D0302C8EA1AE8305A13EACBF2096A907A423BD0E25EC6FA&uin=0&fromtag=38"});var e,s}(s))}),e}})},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slider"}},[e("div",{staticClass:"singer_list"},[e("div",{staticClass:"singer_list_top"},[e("singer-list-top",{ref:"bjImage",attrs:{title:this.title,"bg-image":this.bjImage}})],1),this._v(" "),e("div",{ref:"bg_layer",staticClass:"bg_layer"}),this._v(" "),e("div",{ref:"singer_list_bot",staticClass:"singer_list_bot"},[e("singer-list-content",{attrs:{songs:this.songerList},on:{onShort:this.onShort,select:this.selectItem}})],1)])])},staticRenderFns:[]};var W=s("VU/8")(H,z,!1,function(t){s("KFao")},"data-v-71b93408",null).exports,Q={components:{Top:C,MeScroll:L},data:function(){return{scrollY:"",listenScroll:!0,probeType:3}},methods:{d:function(){},scrollme:function(t){this.scrollY=t.y,this.$refs.bot.style.height=-t.y+"px",this.$refs.bot.style.transfrom="scale(0.2)",console.log(t.y,this.$refs.bot.style)}}},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rank"},[s("div",{staticClass:"rank_top"},[s("top")],1),t._v(" "),s("div",{staticClass:"rank_content"},[s("me-scroll",{staticClass:"mescroll",attrs:{listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scrollme}},[s("div",{staticClass:"content",on:{touchmove:function(e){return e.preventDefault(),t.d(e)}}},t._l(200,function(e,n){return s("p",{key:n,domProps:{textContent:t._s(e+"水水水水是是是")}})}),0)])],1),t._v(" "),s("div",{ref:"bot",staticClass:"bot"})])},staticRenderFns:[]};var Z=s("VU/8")(Q,K,!1,function(t){s("vjon")},"data-v-7f1464b7",null).exports,J={components:{Top:C},mounted:function(){}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("div",{staticClass:"search_top"},[e("top")],1),this._v(" "),e("div",{staticClass:"content"}),this._v(" "),e("div",{staticClass:"bot"})])},staticRenderFns:[]};var et=s("VU/8")(J,tt,!1,function(t){s("XbBY")},"data-v-61cff402",null).exports,st={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var nt=s("VU/8")({},st,!1,function(t){s("r1YH")},"data-v-06d15f10",null).exports;r.a.use(v.a);var it=new v.a({routes:[{path:"/",component:F},{path:"/singer",component:j,children:[{path:":id",component:W}]},{path:"/rank",component:Z},{path:"/search",component:et},{path:"/user",component:nt}]}),rt=(s("GoUO"),s("991W"),s("7QTg")),ot=s.n(rt),at=(s("v2ns"),s("cTzj")),lt=s.n(at);r.a.prototype.noScroll=function(){document.body.style.overflow="hidden",document.addEventListener("touchmove",function(t){t.preventDefault()},!1)},r.a.prototype.canScroll=function(){document.body.style.overflow="",document.removeEventListener("touchmove",function(t){t.preventDefault()},!1)};var ct,ut=function(t,e){var s=t.commit,n=(t.state,e.playlist),i=e.index;s("GET_SEQUENCELIST",e.selist),s("GET_PLAYLIST",n),s("GET_CURRENTINDEX",i),s("GET_FULLSCREEN",!0),s("GET_PLAYING",!0)},ht=function(t){return t.singer},dt=function(t){return t.playlist[t.currentIndex]||{}},pt=s("bOdI"),ft=s.n(pt),mt=(ct={},ft()(ct,"GET_SINGER",function(t,e){t.singer=e}),ft()(ct,"GET_PLAYING",function(t,e){t.playing=e}),ft()(ct,"GET_FULLSCREEN",function(t,e){t.fullScreen=e}),ft()(ct,"GET_PLAYLIST",function(t,e){t.playlist=e}),ft()(ct,"GET_SEQUENCELIST",function(t,e){t.sequenceList=e}),ft()(ct,"GET_MODE",function(t,e){t.mode=e}),ft()(ct,"GET_CURRENTINDEX",function(t,e){t.currentIndex=e}),ct),gt=s("sax8"),vt=s.n(gt);r.a.use(u.a);var _t={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:h.sequence,currentIndex:-1,currentSong:function(t){return t.playlist[t.currentIndex]||{}}},yt=new u.a.Store({state:_t,actions:n,getters:i,mutations:mt,plugins:[vt()()]});r.a.use(ot.a),r.a.use(lt.a,{preLoad:1.3,error:s("aedp"),loading:s("aedp"),attempt:1}),r.a.config.productionTip=!1,r.a.prototype.$axios=a.a,new r.a({el:"#app",router:it,store:yt,components:{App:g},template:"<App/>"})},P9l9:function(t,e){},XbBY:function(t,e){},a7gl:function(t,e){},aedp:function(t,e,s){t.exports=s.p+"static/img/error.91003f4.jpg"},cyap:function(t,e){},jOec:function(t,e){},kwGg:function(t,e){},r1YH:function(t,e){},v2ns:function(t,e){},vjon:function(t,e){},x3i7:function(t,e){},y57P:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2eb8ecdf671058d8571b.js.map