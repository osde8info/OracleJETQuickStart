/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)}function c(a,b){this.Init(a,b)}function d(a){this.Init(a.u(),a.ag,a);this.Ac=a}function e(){this.Init({skyros:e.lh,alta:e.pf,next:e.yv})}function f(a){this.Ac=a;this.Qf=this.Ac.D()}a.wf=function(){};a.v.F(a.wf,a.Le);a.wf.newInstance=function(b,c,d){var e=new a.wf;e.Init(b,c,d);return e};a.wf.Or=function(a){return(new e).Or(a)};a.wf.prototype.Init=function(b,c,f){a.wf.C.Init.call(this,b,c,f);this.setId("legend1000"+Math.floor(1E9*Math.random()));
this.Xg=new e;this.H=new d(this);this.H.Lf(this);this.hw=[];this.Nx=[];this.xe=null;this.Gsa=[]};a.wf.prototype.yf=function(a){this.Bk.SQ();a?(this.W=this.Xg.jn(a),this.uQa(this.W.sections)):this.W||(this.W=this.SF())};a.wf.prototype.pt=function(b,c,d){this.yf(b);this.D().isLayout=!0;b=h.ta(this,new a.Z(0,0,c,d));this.D().isLayout=!1;return new a.xj(b.a,b.b)};a.wf.prototype.ta=function(b,d,e){this.Bc.SQ();this.yf(b);isNaN(d)||isNaN(e)||(this.xb=d,this.Kb=e);this.D().isLayout=!1;this.Gl();this.hw=
[];this.Nx=[];this.xe=null;this.Gsa=[];a.B.Wa()||this.H.cs(new c(this.H,this));this.lr();this.Ima=h.ta(this,new a.Z(0,0,this.xb,this.Kb));(b=this.D().highlightedCategories)&&0<b.length&&this.Ze(b);this.Aq();return this.Ima};a.wf.prototype.Ze=function(b){this.D().highlightedCategories=b&&0<b.length?b.slice():null;a.uh.Ze(b,this.hw,!0)};a.wf.prototype.ag=function(a,b){var c=a.type;if("categoryHighlight"==c&&"dim"==this.D().hoverBehavior){var d=this.hw;this!=b&&this.Ze(a.categories);for(var e=0;e<d.length;e++)if(d[e].getId()==
a.categories){this.GRa.scrollIntoView(d[e].Se()[0]);break}}this!=b&&"adfShowPopup"!=c&&"adfHidePopup"!=c||this.dispatchEvent(a)};a.wf.prototype.rla=function(b){if(b.Se()[0]instanceof a.ja)this.Nx.push(b);else{var c=this.D().hideAndShowBehavior;(null!=b.Qg()||null!=b.Bh()||b.jk()||"none"!=c&&"off"!=c)&&this.Nx.push(b);this.hw.push(b)}};a.wf.prototype.sla=function(a){this.xe=a.clone()};a.wf.prototype.o7a=function(a){this.Gsa.push(a)};a.wf.prototype.oh=function(){return new f(this)};a.wf.prototype.rM=
function(){return null!=this.H?this.H.nf():null};a.wf.prototype.$fa=function(a,b){if(null!=this.H){for(var c=this.Nx,d=0;d<c.length;d++)if(c[d].getId()==a.getId()){this.H.$u(c[d]);b&&c[d].Tf();break}if(c=this.rM())d=c.Se()[0],d.Gd("label",c.Ed()),this.u().TI(d)}};a.wf.prototype.aa=function(b){var c=new a.Z(0,0,this.xb,this.Kb);return b&&b!==this?this.kj(c,b):c};a.wf.prototype.sC=function(a){return a&&a!==this?this.kj(this.Ima,a):this.Ima};a.wf.prototype.hm=function(){return a.I.wa(a.I.Ia,"LEGEND")};
a.wf.prototype.uQa=function(b){if(b&&!(0>=b.length))for(var c=this.D().hiddenCategories,d=0;d<b.length;d++){var e=b[d];e.sections&&(c=this.uQa(e.sections));if((e=e.items)&&!(0>=e.length))for(var f=0;f<e.length;f++){var q=e[f],v=h.aea(q);"hidden"==q.categoryVisibility&&0>a.na.lb(c,v)&&c.push(v);q.categoryVisibility=null}}};a.wf.prototype.lr=function(){if(this.m7()){var b=this.D(),c=b.hideAndShowBehavior;if("off"!=c&&"none"!=c||"dim"==b.hoverBehavior)this.u().bg("application"),this.u().c5(a.I.wa(a.I.Ia,
"COLON_SEP_LIST",[a.I.wa(a.I.Ia,"DATA_VISUALIZATION"),a.Nd.MI(this.hm())]))}};a.wf.prototype.FI=function(){return 0<this.Nx.length};a.wf.qM=function(b){var c=b.Bk.Kk("itemsCount");if(null!=c)return c;for(var c=0,d=b.D().sections,e=0;e<d.length;e++)c+=a.wf.yUa(d[e]);b.Bk.Uh("itemsCount",c);return c};a.wf.yUa=function(b){var c=0;b.items&&(c+=b.items.length);if(b.Urb){b=b.Urb;for(var d=0;d<b.length;d++)c+=a.wf.yUa(b[d])}return c};a.v.F(f,a.Rd);f.prototype.Cn=function(a){return(a=this.Ac.Za().mb(a))&&
a instanceof b&&(a=a.getData(),a=this.kKa(a,this.Qf))?"section"+a:null};f.prototype.kKa=function(a,b){if(b.sections&&0<b.sections.length){for(var c=0;c<b.sections.length;c++){if(b.sections[c]==a)return"["+c+"]";var d=this.kKa(a,b.sections[c]);if(d)return"["+c+"]"+d}return null}if(b.items&&0<b.items.length){for(c=0;c<b.items.length;c++)if(b.items[c]==a)return":item["+c+"]";return null}};f.prototype.qTa=function(a,b){if(b.sections&&0<b.sections.length){for(var c=0;c<b.sections.length;c++){var d=this.qTa(a,
b.sections[c]);if(d)return"["+c+"]"+d}return null}if(b.items&&0<b.items.length){for(c=0;c<b.items.length;c++)if(b.items[c].text==a.name)return":item["+c+"]";return null}};f.prototype.Kua=function(a,b){var c=b.indexOf("["),d=b.indexOf("]");if(0<=c&&0<=d){var c=b.substring(c+1,d),e=b.indexOf(":");b=b.substring(d+1);d=b.indexOf("]");return 0<=b.indexOf("[")&&0<=d?this.Kua(a.sections[c],b):0==e?a.items[c]:a.sections[c]}};f.prototype.ph=function(b){if(b==a.Rd.vD)return this.WF(this.Ac);b=this.Kua(this.Qf,
b);for(var c=this.Ac.hw,d=0;d<c.length;d++){var e=c[d].getData();if(b==e)return c[d].Se()[0].Ua()}return null};f.prototype.yC=function(){return this.Qf.title};f.prototype.getItem=function(a){for(var b,c=a.shift(),d=this.Qf;void 0!=c;)0<a.length?d=d.sections[c]:b=d.items[c],c=a.shift();return b?{text:b.text?b.text:null}:null};f.prototype.ynb=function(a){for(var b,c=a.shift(),d=this.Qf;void 0!=c;)0<a.length?d=d.sections[c]:b=d.sections[c],c=a.shift();return{title:b.title?b.title:null,items:b.items?
this.FJa(b.items):null,sections:b.sections?this.IJa(b.sections):null}};f.prototype.FJa=function(a){for(var b=[],c=0;c<a.length;c++)b.push({text:a[c].text});return b};f.prototype.IJa=function(a){for(var b=[],c=0;c<a.length;c++)b.push({title:a[c].title?a[c].title:null,items:a[c].items?this.FJa(a[c].items):null,sections:a[c].sections?this.IJa(a[c].sections):null});return b};a.v.F(e,a.fb);e.yv={skin:a.j.yv,titleStyle:new a.j("color: #737373;"),_sectionTitleStyle:new a.j("color: #737373;"),layout:{titleGapWidth:17,
titleGapHeight:9,symbolGapWidth:7,symbolGapHeight:4,rowGap:4,columnGap:10,sectionGapHeight:16,sectionGapWidth:24}};e.pf={skin:a.j.pf,textStyle:new a.j(a.fb.Sm),titleStyle:new a.j(a.fb.DN+"color: #333333;"),_sectionTitleStyle:new a.j(a.fb.DN+"color: #333333;")};e.lh={skin:a.j.Hg,orientation:"vertical",position:null,backgroundColor:null,borderColor:null,textStyle:new a.j(a.fb.Nt+"font-size: 11px; color: #333333;"),titleStyle:new a.j(a.fb.Nt+"font-size: 12px; color: #003d5b;"),titleHalign:"start",hiddenCategories:[],
hideAndShowBehavior:"off",hoverBehavior:"none",hoverBehaviorDelay:200,scrolling:"asNeeded",halign:"start",valign:"top",drilling:"off",_color:"#a6acb1",_markerShape:"square",_lineWidth:3,layout:{outerGapWidth:3,outerGapHeight:3,titleGapWidth:8,titleGapHeight:3,symbolGapWidth:5,symbolGapHeight:4,rowGap:0,columnGap:8,sectionGapHeight:6,sectionGapWidth:15},isLayout:!1};e.Ch=function(b,c){var d=Math.min(a.Ba.kF(b.u(),b.D().textStyle)/14,1);return Math.ceil(c*d)};e.prototype.Rua=function(){return{sections:{items:{_dataContext:!0}}}};
a.v.F(d,a.H);d.prototype.Tj=function(a){d.C.Tj.call(this,a);var b=this.mb(a.target);if(b){var c=this.sxa(b),b=this.awa(b,a);(c||b)&&a.stopPropagation()}};d.prototype.Sy=function(b){d.C.Sy.call(this,b);if(b=this.mb(b.target)){var c=b instanceof a.wi?b.Kr:null;c&&c.isCollapsible&&c.button&&c.button.i3();this.xD(b)}};d.prototype.To=function(b){d.C.To.call(this,b);(b=this.mb(b.target))&&(b=b instanceof a.wi?b.Kr:null)&&b.isCollapsible&&b.button&&b.button.TE()};d.prototype.$w=function(a){var b=this.mb(a.target);
if(b){var c=a.tya,d=this.sxa(b);a=this.awa(b,a);(d||a)&&c&&c.preventDefault()}};d.prototype.sxa=function(b){var c=this.Ac.D().hideAndShowBehavior;if("none"==c||"off"==c)return!1;var d=b.Zd?b.Zd():null;if(!d||0>=d.length)return!1;for(var e=b.Zd()[0],c=this.Ac.D().hiddenCategories||[],c=c.slice(),f=b.Se(),q=0;q<f.length;q++){var v=f[q];v instanceof a.za?v.XI(b.gc()):v instanceof a.Rect&&b.yya()}b=d[0];h.Xea(e,this.Ac)?(c.splice(a.na.lb(c,e),1),b=a.$a.Xpb(b,c)):(c.push(e),b=a.$a.Wpb(b,c));this.Ac.D().hiddenCategories=
c;this.ml(b,this.Ac);return!0};d.prototype.awa=function(c,d){if(c&&c.Bh&&c.Bh())return this.ml(a.$a.KI("action",c.Bh(),c.getId()),this.Ac),!0;if(c instanceof b&&c.jk()){var e=c.getId();this.ml(a.$a.qfa(e,e,null),this.Ac);return!0}return(e=c instanceof a.wi?c.Kr:null)&&e.isCollapsible?(this.OXa(d,e.id),!0):!1};d.prototype.zq=function(b,c,d){b=this.Ac.D();"none"==b.hoverBehavior||c.Se&&c.Se()[0]instanceof a.ja||(c=c.Zd?c.Zd():[],b.highlightedCategories=d?c.slice():null,d=a.$a.LI(b.highlightedCategories,
d),b=a.Ta.Vr(b.hoverBehaviorDelay),this.PJ.ag(d,this.Ac.hw,b,!0))};d.prototype.Xwa=function(a,b){var c=b.getId();this.OXa(a,c)};d.prototype.OXa=function(b,c){for(var d=this.Ac.D(),e=0;e<c.length;e++)d=d.sections[c[e]];d.expanded="off"==d.expanded?"on":"off";b.type==a.MouseEvent.Ce&&(d=this.mb(this.pe(b)),d.Fd&&this.$u(d.Fd(b)));e=(d=this.Ac.rM())?d.Kd():!1;this.Ac.ta();d&&this.Ac.$fa(d,e);this.ue();d=this.Ac.sC();this.ml(new a.Jn(d.a,d.b,d.x,d.y),this.Ac)};d.prototype.QA=function(){return this.Ac.D()._isScrollingLegend?
a.H.oG:a.H.Wy};d.prototype.Jk=function(){return this.Ac};d.prototype.G4=function(){return!0};d.prototype.GN=function(){var a=this.Gf.vB;return a instanceof b&&null!=a.getData()._dataContext?"series":null};d.prototype.hZ=function(){var a=this.Gf.vB;return a instanceof b?[a.getData()._dataContext]:[]};d.prototype.SS=function(a){a=this.Ac.Md(this.u().eh(a.pageX,a.pageY));return this.Ac.xe.Nj(a.x,a.y)?"legend":null};d.prototype.Pha=function(){return{}};d.prototype.Zja=function(a){if("legend"==this.SS(a)){a=
this.Ac.D()._dropColor;var b=this.Ac.Bc.Kk("background");b&&b.ib(a)}};d.prototype.Uga=function(){var a=this.Ac.Bc.Kk("background");if(a){var b=this.Ac.D().backgroundColor;b?a.ib(b):a.Wb()}};a.v.F(c,a.Cb);c.prototype.Init=function(a,b){c.C.Init.call(this,a);this.Ac=b};c.prototype.mk=function(b){var d=b.keyCode,e=this.yb.nf(),f=e&&e.Se()[0]instanceof a.ja,h=null;null==e&&d==a.KeyboardEvent.Nh?(d=this.Ac.Nx,0<d.length&&(a.H.sc(b),h=this.oI(d))):e&&(d==a.KeyboardEvent.Nh?(a.H.sc(b),h=e):d==a.KeyboardEvent.Yi||
d==a.KeyboardEvent.ki?(d==a.KeyboardEvent.Yi&&this.yb.awa(e,b),f?this.yb.Xwa(b,e.Se()[0]):this.yb.sxa(e),a.H.sc(b)):!f||d!=a.KeyboardEvent.Nf&&d!=a.KeyboardEvent.xf?h=c.C.mk.call(this,b):(this.yb.Xwa(b,e.Se()[0]),a.H.sc(b)));h&&this.Ac.GRa.scrollIntoView(h.Se()[0]);return h};a.v.F(b,a.v);b.prototype.Init=function(a,b,c,d,e,f){this.Ac=a;this.Ag=b;this.Rn=c;this.xc=(this.JO=h.aea(this.Rn))?this.JO:c.title;this.$t=c.action;this.Rv=f;this.chb=c._spb;this.Ul=d;this.z$=e;this.dd=!1;if(this.$t||this.Rv)for(a=
0;a<this.Ag.length;a++)this.Ag[a].setCursor("pointer")};b.nb=function(a,c,d,e,f,h){if(!a||!d)return null;d=new b(c,a,d,e,f,h);c.rla(d);for(e=0;e<a.length;e++)c.Za().nb(a[e],d);return d};b.prototype.getData=function(){return this.Rn};b.prototype.gc=function(){return this.Rn.color};b.prototype.getId=function(){return this.xc};b.prototype.Se=function(){return this.Ag};b.prototype.Zd=function(){return null!=this.JO?[this.JO]:null};b.prototype.Bh=function(){return this.$t};b.prototype.jk=function(){return this.Rv};
b.prototype.Cf=function(){return this.chb};b.prototype.Ed=function(){var b=[],c=this.Ac.D(),d=this.Ac.D().hideAndShowBehavior,e=h.Xea(this.JO,this.Ac),f=this.getData();if(this.Ag[0]instanceof a.ja)return b.push(a.I.wa(a.I.Ia,"off"==f.expanded?"STATE_COLLAPSED":"STATE_EXPANDED")),a.oa.Ik(f.title,b);"off"!=d&&"none"!=d&&b.push(a.I.wa(a.I.Ia,e?"STATE_HIDDEN":"STATE_VISIBLE"));this.jk()&&b.push(a.I.Ef(c,"stateDrillable",a.I.Ia,"STATE_DRILLABLE"));return null!=f.shortDesc?a.oa.Ik(f.shortDesc,b):0<b.length?
a.oa.Ik(f.text,b):null};b.prototype.yya=function(){!a.B.ij()&&this.Ag[0]&&this.Ag[0].Gd("label",this.Ed())};b.prototype.Fd=function(b){return b.type==a.MouseEvent.Ce?this:a.Cb.Fd(this,b,this.Ac.Nx,!0)};b.prototype.tf=function(b){return this.Ag[0]?this.Ag[0].aa(b):new a.Z(0,0,0,0)};b.prototype.Mm=function(){return this.Ag[0]?this.Ag[0].Ua():null};b.prototype.Tf=function(){this.dd=!0;this.Ag[0]&&(this.Ag[0]instanceof a.ja?this.Ag[0].i3():this.Ag[0].Tb(a.B.tua()))};b.prototype.Qd=function(){this.dd=
!1;this.Ag[0]&&(this.Ag[0]instanceof a.ja?this.Ag[0].TE():this.Ag[0].Ga(null))};b.prototype.Kd=function(){return this.dd};b.prototype.Ri=function(){return this.Ul};b.prototype.Qg=function(){return this.z$};b.prototype.Wl=function(){return this.Rn.color};b.prototype.Zl=function(){return!0};b.prototype.Lm=function(){return[this.getId()]};b.prototype.it=function(){return this.Se()};var h={};a.v.F(h,a.v);h.Lka=2;h.LFa=.6;h.oFa=10;h.pl=12;h.c_=2;h.ta=function(b,c){var d=b.D(),f=b.u(),r=a.B.ca(f);b.sla(c);
d.isLayout||h.Mr(b,c);var q=new a.Mh(f,c.a,c.b),v=new a.ma(f);q.Fa.A(v);b.A(q);b.GRa=q;var x=e.Ch(b,d.layout.outerGapWidth),u=e.Ch(b,d.layout.outerGapHeight);c.x+=x;c.y+=u;c.a-=2*x;c.b-=2*u;if(0>=c.a||0>=c.b)return new a.xj(0,0);f=h.Cfb(b,v,new a.Z(c.x,c.y,c.a,c.b));if(0==f.a||0==f.b)return new a.xj(0,0);q.W4();f.b>c.b?(f.b=c.b,d._isScrollingLegend=!0):d._isScrollingLegend=!1;var A=q=0,w=null!=d.hAlign?d.hAlign:d.halign;"center"==w?q=c.x-f.x+(c.a-f.a)/2:"end"==w&&(q=r?c.x-f.x:c.x-f.x+c.a-f.a);r=null!=
d.vAlign?d.vAlign:d.valign;"middle"==r?A=c.y-f.y+(c.b-f.b)/2:"bottom"==r&&(A=c.y-f.y+c.b-f.b);r=new a.Z(f.x+q-x,f.y+A-u,f.a+2*x,f.b+2*u);if(d.isLayout)return r;(q||A)&&v.Na(q,A);d=b.Gsa;for(v=0;v<d.length;v++)a.Gn.align(f,d[v].pob,d[v].text,d[v].text.Qc().a);return r};h.Cfb=function(a,b,c){var d=a.D();c=c.clone();var f=h.uQ(a,b,d.title,c,null,!0);if(f){var q=f.Qc(),v=e.Ch(a,d.layout.titleGapHeight);c.y+=q.b+v;c.b-=Math.floor(q.b+v)}a=h.$Oa(a,b,d.sections,c,[]);return f?q.uj(a):a};h.Mr=function(b,
c){var d=b.D(),e=d.backgroundColor,f=d.borderColor,d=d.dnd?d.dnd.drop.legend:{};if(e||f||0<Object.keys(d).length)d=new a.Rect(b.u(),c.x,c.y,c.a,c.b),e?d.ib(e):d.Wb(),f&&(d.Tb(f),d.hd()),b.A(d),b.Bc.Uh("background",d)};h.uQ=function(b,c,d,e,f,h,v,x){var u=b.D(),A=c.u(),w=a.B.ca(A);if(!d)return null;d=new a.da(A,d,e.x,e.y);A=u.titleStyle;f&&f.titleStyle?A=new a.j(f.titleStyle):f&&u._sectionTitleStyle&&(A=u._sectionTitleStyle);d.Ab(A);return a.Ba.fd(d,e.a,Infinity,c)?(w&&d.Aa(e.x+e.a-d.Qc().a),u.isLayout?
c.removeChild(d):(c={id:v,button:x},c.isCollapsible=f&&("on"==f.collapsible||1==f.collapsible),b.Za().nb(d,new a.wi(d.pq(),null,null,c)),h&&b.o7a({text:d,pob:f&&f.titleHalign?f.titleHalign:u.titleHalign})),d):null};h.$Oa=function(b,c,d,f,r){var q=b.D();null==q.symbolWidth&&null==q.symbolHeight?(q.symbolWidth=h.oFa,q.symbolHeight=h.oFa):(null==q.symbolWidth?q.symbolWidth=q.symbolHeight:null==q.symbolHeight&&(q.symbolHeight=q.symbolWidth),q.symbolWidth=parseInt(q.symbolWidth),q.symbolHeight=parseInt(q.symbolHeight));
for(var v=e.Ch(b,q.layout.sectionGapHeight),x=e.Ch(b,q.layout.titleGapHeight),u=e.Ch(b,q.layout.sectionGapWidth),A=h.Gbb(b),q="vertical"!=q.orientation,w=null,D=f.clone(),B,C=0;C<d.length;C++){var y=r.concat([C]),H="off"==d[C].expanded||0==d[C].expanded?x:v;q?(B=h.ROa(b,c,d[C],D,A),B.a>D.a?(D.a<f.a&&(f.y+=B.b+H,f.b-=B.b+H),B=B.a<=f.a?h.ROa(b,c,d[C],f,A):h.cPa(b,c,d[C],f,A,y,!0),f.y+=B.b+H,f.b-=B.b+H,D=f.clone()):(D.a-=B.a+u,a.B.ca(b.u())||(D.x+=B.a+u))):(B=h.cPa(b,c,d[C],f,A,y,!1),f.y+=B.b+H,f.b-=
B.b+H);w=w?w.uj(B):B}return w};h.H9a=function(c,d,e,f,r,q,v,x,u,A,w){var D=h.Qma(c,f,r+"Enabled",q,v),B=h.Qma(c,f,r+"Over",q,v);f=h.Qma(c,f,r+"Down",q,v);c=new a.ja(c,D,B,f,null,u,A,w);d=b.nb([c],d,e,x,null,!1);c.bg("button");d.yya();return c};h.Qma=function(b,c,d,e,f){var q=a.B.ca(b)?"RTL":"";b=new a.Image(b,c[d+q]?c[d+q]:c[d],e,f,h.pl,h.pl);b.Wb();return b};h.cPa=function(b,c,d,f,r,q,v){if(d){var x=b.D(),u=e.Ch(b,x.layout.symbolGapWidth),A=e.Ch(b,x.layout.rowGap),w=e.Ch(b,x.layout.columnGap),D=
b.u(),B=a.B.ca(D);f=f.clone();"off"!=x.scrolling&&(f.b=Infinity);var C,y="on"==d.collapsible||1==d.collapsible,H;if(y){C=B?f.x+f.a-h.pl:f.x;if(!x.isLayout){var z="off"==d.expanded||0==d.expanded;H=z?"closed":"open";var z=a.I.wa(a.I.Ia,z?"EXPAND":"COLLAPSE",null),E=b.Za();H=h.H9a(D,b,d,x._resources,H,C,f.y,z,q,E.Xwa,E);c.A(H)}C=new a.Z(C,f.y,h.pl,h.pl);D=e.Ch(b,x.layout.symbolGapWidth);B||(f.x+=h.pl+D);f.a-=h.pl+D}D=(D=h.uQ(b,c,d.title,f,d,!y&&1>=q.length,q,H))?D.Qc():new a.Z(B?f.x+f.a:f.x,f.y,0,0);
D=C?D.uj(C):D;if(!d.items&&!d.sections||"off"==d.expanded||0==d.expanded)return D;0<D.b&&(y=e.Ch(b,x.layout.titleGapHeight),f.y+=D.b+y,f.b-=D.b+y);d.sections&&(q=h.$Oa(b,c,d.sections,f,q),D=D.uj(q));if(!d.items)return D;y=h.T8a(b,f,r,d.items,v);v=y.numCols;q=y.numRows;y=y.width;C=f.y;if(0==q||0==v)return D;H=Math.min(v*(y+w)-w,f.a);D=D.uj(new a.Z(B?f.x+f.a-H:f.x,f.y,H,q*(r+A)-A));if(x.isLayout)return D;x=y-x.symbolWidth-u;u=0;H=1;z=d.items.length;for(E=0;E<z&&(h.U_(b,c,d.items[E],f,x,r,E),f.y+=r+
A,u++,u===q&&H!==v&&(f.y=C,f.a-=y+w,B||(f.x+=y+w),u=0,H++),u!==q);E++);return D}};h.ROa=function(b,c,d,f,r){if(d){var q=b.D(),v=q.symbolWidth,x=e.Ch(b,q.layout.symbolGapWidth),u=e.Ch(b,q.layout.columnGap),A=e.Ch(b,q.layout.titleGapWidth),w=d.items.length,D=a.B.ca(b.u()),B=f.clone(),C=h.uQ(b,c,d.title,f,d,!1),y=C?C.Qc():new a.Z(D?f.x+f.a:f.x,f.y,0,0);if(!d.items)return y;0<y.a&&(B.a-=y.a+A,D||(B.x+=y.a+A));var A=[],H=f.a-B.a,z,E;for(E=0;E<w;E++)z=d.items[E],z=Math.ceil(a.Ba.Iea(b.u(),z.text,q.textStyle)),
H+=z+v+x+u,A.push(z);0<w&&(H-=u);y=new a.Z(D?f.x+f.a-H:f.x,f.y,H,Math.max(r,y.b));if(q.isLayout||H>f.a)return c.removeChild(C),y;for(E=0;E<w;E++)z=d.items[E],h.U_(b,c,z,B,A[E],r,E),f=A[E]+v+x,B.a-=f+u,D||(B.x+=f+u);return y}};h.T8a=function(b,c,d,f,h){for(var q=b.D(),v=100<a.wf.qM(b),x=0,u=0;u<f.length;u++){var A=f[u];v?(A=new a.da(b.u(),A.text),A.Ab(q.textStyle),A=a.Ba.vj(A).a):A=a.Ba.Iea(b.u(),A.text,q.textStyle);A>x&&(x=A)}v=q.symbolWidth;A=e.Ch(b,q.layout.symbolGapWidth);u=e.Ch(b,q.layout.rowGap);
b=e.Ch(b,q.layout.columnGap);x=Math.ceil(v+A+x);h?(h=Math.min(Math.floor((c.a+b)/(x+b)),f.length),d=Math.min(Math.floor((c.b+u)/(d+u)),Math.ceil(f.length/h)),h=Math.ceil(f.length/d),d=Math.ceil(f.length/h)):Infinity==c.b?(h=1,d=f.length):(d=Math.min(Math.floor((c.b+u)/(d+u)),f.length),h=Math.ceil(f.length/d),d=Math.ceil(f.length/h));c=Math.min(x,(c.a-b*(h-1))/h);return c<v?{width:0,numCols:0,numRows:0}:{width:c,numCols:h,numRows:d}};h.Gbb=function(b){var c=b.D(),d=new a.da(b.u(),"Test");d.Ab(c.textStyle);
d.Ng();d=a.Ba.vj(d).b;b=c.symbolHeight+e.Ch(b,c.layout.symbolGapHeight);return Math.ceil(Math.max(d,b))};h.U_=function(c,d,f,m,r,q){var v=c.D(),x=c.u(),u=a.B.ca(x),A=v.symbolWidth,w=e.Ch(c,v.layout.symbolGapWidth),D=u?m.x+m.a-A:m.x,B=u?m.x+m.a-A-w:m.x+A+w,C=h.S9a(c,D,m.y,q,f),y=f.text,H;y&&(H=h.T9a(d,r,y,v.textStyle))&&(H.Aa(B),a.Ba.LW(H,m.y+q/2),u&&H.Ah());d.A(C);m=new a.Rect(x,u?B-r-h.c_:D-h.c_,m.y-h.c_,A+w+r+2*h.c_,q+2*h.c_);m.Wb();v=v.hideAndShowBehavior;"none"!=v&&"off"!=v&&m.setCursor("pointer");
d.A(m);d=[m,C];null!=H&&d.push(H);H=b.nb(d,c,f,null!=H?H.pq():null,f.shortDesc,h.Vcb(c,f));h.Xea(h.aea(f),c)&&(C.XI(H.gc()),C.ea().Je());if("none"!=v&&"off"!=v||null!=f.shortDesc)m.bg("img"),H.yya()};h.Vcb=function(a,b){return"on"==b.drilling?!0:"off"==b.drilling?!1:"on"==a.D().drilling};h.T9a=function(b,c,d,e){d=new a.da(b.u(),d);d.Ab(e);return d=a.Ba.fd(d,c,Infinity,b)?d:null};h.S9a=function(b,c,d,e,f){var q=b.D(),v=b.u(),x=null!=f.type?f.type:f.symbolType;f.markerShape||(f.markerShape=q._markerShape);
f.color||(f.color=q._color);f.lineWidth||(f.lineWidth="lineWithMarker"==x?h.Lka:q._lineWidth);var u=q.symbolWidth,q=q.symbolHeight,A=d+e/2,w=c+u/2;"line"==x?v=h.vIa(v,c,d,u,e,f):"lineWithMarker"==x?(v=h.vIa(v,c,d,u,e,f),h.Xea(h.aea(f),b)||v.A(h.lz(b,w,A,u*h.LFa,q*h.LFa,f))):"image"==x?v=h.Sma(b,c,d,u,q,e,f):"_verticalBoxPlot"==x?(q=Math.max(4*Math.round(q/4),4),v=new a.ma(v),v.A(h.lz(b,w,A+q/4,u,q/2,h.W$(f,"q2"))),v.A(h.lz(b,w,A-q/4,u,q/2,h.W$(f,"q3")))):"_horizontalBoxPlot"==x?(c=a.B.ca(v),u=Math.max(4*
Math.round(u/4),4),c=u/4*(c?1:-1),v=new a.ma(v),v.A(h.lz(b,w+c,A,u/2,q,h.W$(f,"q2"))),v.A(h.lz(b,w-c,A,u/2,q,h.W$(f,"q3")))):v=h.lz(b,w,A,u,q,f);return v};h.Sma=function(b,c,d,e,f,h,v){return new a.Hf(b.u(),c+e/2,d+h/2,e,f,null,v.source)};h.lz=function(b,c,d,e,f,h){var v=b.u(),x=b.D();b=h.markerShape;var u=h.markerColor?h.markerColor:h.color,A=h.markerStyle?h.markerStyle:h.style,w=h.markerClassName?h.markerClassName:h.className,D=h.pattern;D&&"none"!=D?(e=new a.za(v,b,x.skin,0,0,e,f,null,null,!0),
e.qa(new a.wc(D,u,"#FFFFFF")),e.Na(c,d)):(e=new a.za(v,b,x.skin,c,d,e,f,null,null,!0),e.ib(u));h.borderColor&&e.Tb(h.borderColor,null,h._borderWidth?h._borderWidth:1);"square"!=b&&"rectangle"!=b||e.hd();e.Je(w).ea(A);return e};h.vIa=function(b,c,d,e,f,h){d+=f/2;b=new a.Gc(b,c,d,c+e,d);c=new a.xa(h.color,1,h.lineWidth);e=h.lineStyle;"dashed"==e?c.bo(a.Xc.Xx(e),"4,2,4"):"dotted"==e&&c.bo(a.Xc.Xx(e),"2");b.Je(h.className).ea(h.style);b.Ga(c);b.hd();return b};h.W$=function(a,b){return{markerShape:"rectangle",
color:a._boxPlot[b+"Color"],pattern:a._boxPlot["_"+b+"Pattern"],className:a._boxPlot[b+"ClassName"],style:a._boxPlot[b+"Style"]}};h.aea=function(a){var b=null;return b=a.categories&&0<a.categories.length?a.categories[0]:a.id?a.id:a.text};h.Xea=function(b,c){var d=c.D().hiddenCategories;return!d||0>=d.length?!1:-1!==a.na.lb(d,b)};a.Ha(a,"Legend",a.wf);a.Ha(a.wf,"newInstance",a.wf.newInstance);a.Ha(a.wf.prototype,"destroy",a.wf.prototype.ya);a.Ha(a.wf.prototype,"getAutomation",a.wf.prototype.oh);a.Ha(a.wf.prototype,
"getPreferredSize",a.wf.prototype.pt);a.Ha(a.wf.prototype,"highlight",a.wf.prototype.Ze);a.Ha(a.wf.prototype,"render",a.wf.prototype.ta);a.Ha(f.prototype,"getDomElementForSubId",f.prototype.ph);a.Ha(f.prototype,"getItem",f.prototype.getItem);a.Ha(f.prototype,"getSection",f.prototype.ynb);a.Ha(f.prototype,"getTitle",f.prototype.yC)})(dvt);
  return dvt;
});