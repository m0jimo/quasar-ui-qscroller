(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{8669:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return o}));s("a481");function i(t){var e=window.location.origin+window.location.pathname+"#"+t,s=document.createElement("textarea");s.className="fixed-top",s.value=e,document.body.appendChild(s),s.focus(),s.select(),document.execCommand("copy"),document.body.removeChild(s),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function o(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}},a89d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-markdown"},[s("example-title",{attrs:{title:"view='string'"}}),s("example-viewer",{attrs:{title:"Basic",file:"string/Basic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Colors",file:"string/Colors","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"QInput",file:"string/QInput","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Disabled",file:"string/Disabled","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1)},o=[],a=s("fe7d"),n=s("8669"),c=s("384e"),r={name:"String",components:{ExampleTitle:a["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qscroller/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@".concat(c["b"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@".concat(c["b"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@quasar/extras/fontawesome-v5/fontawesome-v5.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("view='string'"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=t;e>1&&(s="example-"+s);var i=Object(n["b"])(s);this.tempToc.push({children:[],id:i,label:t,level:e})}}},l=r,d=s("2877"),u=Object(d["a"])(l,i,o,!1,null,null,null);e["default"]=u.exports},fe7d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},o=[],a=s("8669"),n={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(a["b"])(this.title)}},methods:{copyHeading:a["a"]}},c=n,r=s("2877"),l=Object(r["a"])(c,i,o,!1,null,null,null);e["a"]=l.exports}}]);