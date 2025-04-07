System.register("chunks:///_virtual/skin",["./SkinUI.ts","./SkinUIItem.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SkinUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./SkinUIItem.ts"],(function(t){var n,e,i,o,r,s,a,c,p,u,l,h,y;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy},function(t){i=t.ccclass,o=t._platform,r=t.EBottomAdType,s=t.EPlatformType,a=t.SkinHelper,c=t._logic,p=t._config_,u=t.EUILayer,l=t.EBlockOnceAdType,h=t.BaseUI},function(t){y=t.SkinUIItem}],execute:function(){var d;e._RF.push({},"7143cuYD8FIoLyRP1Z9PShW","SkinUI",void 0);t("SkinUI",i("SkinUI")(d=function(t){function e(){for(var n,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))||this).layerType=u.Panel,n.blockOnceAdType=l.None,n}n(e,t);var i=e.prototype;return i.onCreate=function(){switch(o.type){case s.wx:this.bottomAdType=r.Native;break;default:this.bottomAdType=r.Banner}this.addEvent(a.EventType.CHANGE,this.noAnimUpdateView,this,c.arrowSkin),this.addEvent(a.EventType.UNLOCK,this.noAnimUpdateView,this,c.arrowSkin)},i.onOpen=function(){this.ListCC.isPlayAnim=!0,this.updateView()},i.noAnimUpdateView=function(){this.ListCC.isPlayAnim=!1,this.updateView()},i.updateView=function(){this.ListCC.render(p.arr.skin_item,y,(function(t,n){t.initArrow(n)}))},e}(h))||d);e._RF.pop()}}}));

System.register("chunks:///_virtual/SkinUIItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(i){var n,t,o,e,r,c,s;return{setters:[function(i){n=i.inheritsLoose},function(i){t=i.cclegacy},function(i){o=i.ccclass,e=i._logic,r=i._ui,c=i._main,s=i.BaseComponent}],execute:function(){var a;t._RF.push({},"19921HTx39Bg4e+rwJ0Xa3Y","SkinUIItem",void 0);i("SkinUIItem",o("SkinUIItem")(a=function(i){function t(){for(var n,t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];return(n=i.call.apply(i,[this].concat(o))||this).config=null,n}n(t,i);var o=t.prototype;return o.initArrow=function(i){this.config=i,this.updateView()},o.updateView=function(){var i=0;i=e.arrowSkin.has(this.config.id)?e.arrowSkin.cur==this.config.id?2:1:0,this.ControllerCC.index=i,this.SpriteLoaderCC.setSpriteFrameUrl(this.config.icon_url)},o.onClick=function(){var i=this;switch(this.ControllerCC._index){case 0:c.showVideo("获取"+("skin_item"==this.config.configName?"箭头":"背景")+"皮肤-id{"+this.config.id+"}",(function(){e.arrowSkin.unlock(i.config.id),r.tip("获得成功")}));break;case 1:r.tip("使用成功"),e.arrowSkin.use(this.config.id);break;case 2:r.tip("正在使用中")}},t}(s))||a);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/skin', 'chunks:///_virtual/skin'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});