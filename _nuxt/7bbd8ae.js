(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{412:function(t,e,c){"use strict";c.r(e);c(4),c(71),c(187),c(2),c(6),c(7),c(5),c(1),c(3);var o=c(0),r=c(80);function l(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}var n={data:function(){return{slide:0,sliding:null,loading:!1,post:null,error:null,desc:null,tab:"about"}},created:function(){this.selectProject(),this.project=this.$store.state.projects},watch:{$route:"selectProject"},computed:function(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?l(Object(c),!0).forEach((function(e){Object(o.a)(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}({},Object(r.b)(["projects"])),methods:{onSlideStart:function(t){this.sliding=null},onSlideEnd:function(t){this.sliding=null},selectProject:function(){var t=this.$route.params.project;void 0!==t&&null!=t||(t=0),this.slide=t}}},d=n,v=c(52),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"}),e("div",{staticClass:"col-md-8 m-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-title"},[e("b-carousel",{attrs:{id:"carousel-fade",interval:0,fade:"",controls:"",indicators:"","img-width":"970","img-height":"925"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.projects,(function(c){return e("a",{key:t.projects.id,attrs:{href:c.link}},[e("b-carousel-slide",{attrs:{"img-src":c.image}})],1)})),0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md float-md-left"},[t._v(t._s(t.projects[t.slide].title))]),e("div",{staticClass:"col-lg float-md-right"},[e("b",[t._v(t._s(t.projects[t.slide].dates))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("a",{attrs:{href:t.project.url}},[t._v(t._s(t.project.url))])])])],1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"btn-group btn-group-toggle col-12",attrs:{"data-toggle":"buttons"}},[e("label",{staticClass:"btn btn-success",class:{active:"about"==t.tab}},[e("input",{attrs:{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:""},on:{click:function(e){t.tab="about"}}}),t._v("About")]),e("label",{staticClass:"btn btn-success",class:{active:"tech"==t.tab}},[e("input",{attrs:{type:"radio",name:"options",id:"option2",autocomplete:"off"},on:{click:function(e){t.tab="tech"}}}),t._v("Tech")])])]),e("div",{staticClass:"m-2"},[e("b",[t._v(t._s(t.projects[t.slide].company))])]),"about"==t.tab?e("div",[t._v(t._s(t.projects[t.slide].about)+t._s(t.projects[t.slide].description))]):t._e(),"tech"==t.tab?e("div",t._l(t.projects[t.slide].tech,(function(c){return e("i",[t._v("- "+t._s(c)+" -")])})),0):t._e()])])]),e("div",{staticClass:"col-lg-2"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"container col-12"},[t("h1",{staticClass:"text-center"},[this._v("Projects")])])}],!1,null,null,null);e.default=component.exports}}]);