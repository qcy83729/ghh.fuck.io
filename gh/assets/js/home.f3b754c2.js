"use strict";(self["webpackChunkinvestment_advisor_fe"]=self["webpackChunkinvestment_advisor_fe"]||[]).push([[177],{4160:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=function(){var e=this,t=e._self._c;return t("div",[t("button",{staticClass:"btn",on:{click:function(t){return e.getCode()}}},[e._v("获取code")]),t("p",[e._v("code：")]),t("p",[e._v(e._s(e.codeValue))]),t("p"),t("p"),t("p"),t("button",{staticClass:"btn",on:{click:function(t){return e.getAcessToken()}}},[e._v("获取AcessToken")]),t("p",[e._v("AcessToken：")]),t("p",[e._v(e._s(e.acessToken))]),t("p",[e._v("openid:")]),t("p",[e._v(e._s(e.openId))]),t("p"),t("p"),t("button",{staticClass:"btn",on:{click:function(t){return e.getUserInfoData()}}},[e._v("获取用户信息")]),t("p",[e._v("unionid：")]),t("p",[e._v(e._s(e.unionid))]),t("p"),t("p"),t("p")])},s=[],a=n(2617),c={name:"PrivateOne",components:{},props:{},data(){return{ddata:"",codeValue:"",acessToken:"",openId:"",unionid:""}},mounted(){window.wi=this;let e=this.getUrlData();console.log("uData",e),e&&e.param&&e.param.code&&(this.codeValue=e.param.code)},methods:{getAccessToken2(){return(0,a.Kq)({}).then((e=>{console.log("getAccessToken",e.accessToken)}))},publishHomework(){return(0,a.Sm)({jump_wxa:{path:"/distpages/index/index",query:"source=webH5",env_version:"trial"},expire_type:1,expire_interval:30}).then((e=>{console.log("getAccessToken",e)}))},getCode(){var e=window.location.href;e=encodeURIComponent(e);var t="wx57610e79865e6ca2",n="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t+"&redirect_uri="+e+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";window.location.href=n},getAcessToken(){return console.log("getAccessTokenByCode"),(0,a.Cl)({code:this.codeValue||"123"}).then((e=>{console.log("getAccessTokenByCode@@@@",e),e.data.data&&e.data.data.access_token&&(this.acessToken=e.data.data.access_token,this.openId=e.data.data.openid)}))},getUserInfoData(){return(0,a.bG)({openid:this.openId,access_token:this.acessToken}).then((e=>{console.log("getAccessTokenhh",e),e.data.data&&e.data.data.unionid&&(this.unionid=e.data.data.unionid)}))},getUrlData(){var e=window.location.href,t=new Object,n=e;if(-1!=e.indexOf("?")){n=e.split("?")[0],-1!=n.indexOf("#")&&(n=n.split("#")[1]);for(var o=e.split("?")[1],s=o.split("&"),a=0;a<s.length;a++)t[s[a].split("=")[0]]=unescape(s[a].split("=")[1])}return{path:n,param:t}}}},r=c,i=n(1001),d=(0,i.Z)(r,o,s,!1,null,"38c30a7a",null),p=d.exports},2617:function(e,t,n){n.d(t,{Cl:function(){return h},Gf:function(){return p},JK:function(){return i},Kq:function(){return u},Sm:function(){return l},bG:function(){return g},li:function(){return d}});var o=n(826),s=n(1073),a=n(9669),c=n.n(a),r=n(9327);const i=(e={})=>(0,o.s)({method:"ghtradePost",url:"self/risk-adapt-check",service:s.Z.women,body:e,disablePop:!0}),d=(e={})=>(0,o.s)({method:"ghtradePost",url:"qry-female-prod",service:s.Z.women,body:e}),p=(e={})=>c().post(r.ZR?"http://tglmcs.ghzq.com.cn:7535/tgh5hs/api/getFirstProduct":"http://tglmcs.ghzq.com.cn:7532/tgh5/api/getFirstProduct",e).then((e=>e.data)),u=(e={})=>(0,o.s)({method:"ghmsGet",url:"wx/getAccessToken",service:s.Z.women,body:e}),l=(e={})=>(0,o.s)({method:"ghmsPost",url:"wx/generateScheme",service:s.Z.women,body:e}),h=(e={})=>(console.log("url","https://tglmcs.ghzq.com.cn:9401/ghms-gateway"),c()({method:"get",url:"https://tglmcs.ghzq.com.cn:9401/ghms-gateway/"+s.Z.women+"/wx/getAccessTokenByCode",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}}).then((e=>e)).catch((e=>e))),g=(e={})=>c().get("https://tglmcs.ghzq.com.cn:9401/ghms-gateway/"+s.Z.women+"/wx/getUserInfo",{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}}).then((e=>e)).catch((e=>e))}}]);