(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(t,e,o){var content=o(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("597ae0a8",content,!0,{sourceMap:!1})},276:function(t,e,o){"use strict";o(274)},277:function(t,e,o){(e=o(29)(!1)).push([t.i,".pageHeader[data-v-1b9ccaa2]{position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.pageHeader__imageContainer[data-v-1b9ccaa2]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.pageHeader__imageContainer>img[data-v-1b9ccaa2]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(15px);transform:scale(1.1);opacity:.5;transition:all .2s ease}.pageHeader__imageContainer>img[lazy=loaded][data-v-1b9ccaa2]{transform:scale(1.05);filter:blur(5px)}.pageHeader__container[data-v-1b9ccaa2]{text-align:center;max-width:var(--max-width-lg);padding:5em 0;z-index:1}.pageHeader__title[data-v-1b9ccaa2]{font-size:3em}.pageHeader__subtitle[data-v-1b9ccaa2]{font-weight:500;margin-top:1em}",""]),t.exports=e},278:function(t,e,o){"use strict";o.r(e);o(2),o(4),o(5),o(6);var n={props:{title:{type:String,required:!0},subtitle:{type:String,default:null},image:{type:Object,default:null},color:{type:String,default:null}}},r=(o(276),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageHeader",style:{background:t.color?"linear-gradient(to right, rgb("+t.color+"), var(--color-bg))":"linear-gradient(to right, var(--color-primary), var(--color-primary-light))"}},[t.image?o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"pageHeader__imageContainer"},[o("img",{attrs:{"data-src":t.image.image,"data-loading":t.image.placeholder}})]):t._e(),t._v(" "),o("div",{staticClass:"pageHeader__container"},[o("h1",{staticClass:"pageHeader__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),o("h2",{staticClass:"pageHeader__subtitle"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")])])])}),[],!1,null,"1b9ccaa2",null);e.default=component.exports},297:function(t,e,o){var content=o(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("aeb848b6",content,!0,{sourceMap:!1})},298:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=298},324:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=324},325:function(t,e,o){"use strict";o(297)},326:function(t,e,o){(e=o(29)(!1)).push([t.i,'.blogPostItem[data-v-70aa0e13]{width:100%;min-width:0;border-radius:1em;display:flex;align-items:center;flex-wrap:wrap;align-content:flex-start;color:var(--color-text);text-decoration:none;padding:0 1em 1em}.blogPostItem__imageContainer[data-v-70aa0e13],.blogPostItem__imageContainerNone[data-v-70aa0e13]{position:relative;width:100%;height:-webkit-max-content;height:-moz-max-content;height:max-content;min-width:350px;border-radius:1em;overflow:hidden;background:var(--color-bg-alt);flex:2;margin-bottom:1em;border:3px solid var(--color-bg-alt);box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}.blogPostItem__imageContainer[data-v-70aa0e13]:before,.blogPostItem__imageContainerNone[data-v-70aa0e13]:before{content:"";display:block;height:0;width:100%;padding-top:56.25%}.blogPostItem__imageContainer img[data-v-70aa0e13],.blogPostItem__imageContainerNone img[data-v-70aa0e13]{position:absolute;top:-1px;left:-1px;width:calc(100% + 2px);height:calc(100% + 2px);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(25px);transform:scale(1.1);transition:all .2s ease}.blogPostItem__imageContainer img[lazy=loaded][data-v-70aa0e13],.blogPostItem__imageContainerNone img[lazy=loaded][data-v-70aa0e13]{transform:scale(1);filter:none}.blogPostItem__color[data-v-70aa0e13]{position:absolute;top:0;left:0;bottom:0;right:0;background:var(--color-primary)}.blogPostItem__info[data-v-70aa0e13]{display:flex;flex-direction:column;justify-content:center;margin-left:1.5em;margin-right:1.5em;flex:1;min-width:350px}.blogPostItem__category[data-v-70aa0e13]{text-transform:uppercase;font-size:.8em}.blogPostItem__title[data-v-70aa0e13]{font-size:2em}.blogPostItem__excerpt[data-v-70aa0e13]{color:var(--color-text-dark);line-height:1.5em}.blogPostItem__date[data-v-70aa0e13]{padding:1em 0;color:var(--color-text-dark)}',""]),t.exports=e},328:function(t,e,o){"use strict";o(65),o(2),o(4),o(5),o(6);var n={props:{post:{type:Object,required:!0}},data:function(){return{thumbnailImage:null}},created:function(){this.thumbnailImage=this.getThumbnailImage()},methods:{getThumbnailImage:function(){if(this.post.thumbnailImage)try{return{image:o(275)("./".concat(this.post.dir.substring(1),"/").concat(this.post.thumbnailImage)),placeholder:o(296)("./".concat(this.post.dir.substring(1),"/").concat(this.post.thumbnailImage,""))}}catch(t){return null}else try{return{image:o(324)("./".concat(this.post.dir.substring(1),"/thumbnail.jpg")),placeholder:o(298)("./".concat(this.post.dir.substring(1),"/thumbnail.jpg"))}}catch(t){return null}}}},r=(o(325),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogPostItem",attrs:{to:t.post.dir}},[t.thumbnailImage?o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"blogPostItem__imageContainer"},[o("img",{attrs:{"data-src":t.thumbnailImage.image,"data-loading":t.thumbnailImage.placeholder}})]):o("div",{staticClass:"blogPostItem__imageContainerNone"},[o("div",{staticClass:"blogPostItem__color"})]),t._v(" "),o("div",{staticClass:"blogPostItem__info"},[o("p",{staticClass:"blogPostItem__category"},[t._v("\n      "+t._s(t.post.category?t.post.category:"Uncategorized")+"\n    ")]),t._v(" "),o("h2",{staticClass:"blogPostItem__title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),o("p",{staticClass:"blogPostItem__excerpt"},[t._v("\n      "+t._s(t.post.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"blogPostItem__date"},[t._v("\n      Published "+t._s(t._f("formatDate")(t.post.createdAt))+"\n    ")])])])}),[],!1,null,"70aa0e13",null);e.a=component.exports},342:function(t,e,o){var content=o(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("86cdbd74",content,!0,{sourceMap:!1})},392:function(t,e,o){"use strict";o(342)},393:function(t,e,o){(e=o(29)(!1)).push([t.i,".blogPosts__container[data-v-d94728a8]{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:dense}@media(max-width:720px){.blogPosts__container[data-v-d94728a8]{display:flex;flex-direction:column}}.blogPosts__feature[data-v-d94728a8]{grid-column:1/-1}",""]),t.exports=e},457:function(t,e,o){"use strict";o.r(e);o(32);var n=o(7),r=(o(2),o(4),o(5),o(6),{components:{PostItem:o(328).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,n=t.error,e.next=3,o("blog",{deep:!0}).only(["title","description","thumbnailImage","category","createdAt","dir"]).sortBy("createdAt","desc").fetch().catch((function(){n({statusCode:404,message:"Page not found"})}));case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=(o(392),o(12)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blogPosts"},[e("PageHeader",{attrs:{title:"Blog",subtitle:"Featured progress, new developments and feature updates"}}),this._v(" "),e("PageContainer",{staticClass:"blogPosts__container"},this._l(this.posts,(function(t,o){return e("PostItem",{key:o,class:{blogPosts__feature:0===o},attrs:{post:t}})})),1)],1)}),[],!1,null,"d94728a8",null);e.default=component.exports;installComponents(component,{PageHeader:o(278).default,PageContainer:o(189).default})}}]);