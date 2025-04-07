System.register("chunks:///_virtual/privacy",["./PrivacyDecUI.ts","./PrivacyDecUIItem.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PrivacyDecUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PrivacyDecUIItem.ts","./Main.ts"],(function(t){var e,n,c,i,a,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy},function(t){c=t.PrivacyDecUIItem},function(t){i=t.ccclass,a=t.EUILayer,r=t.BaseUI}],execute:function(){var o;n._RF.push({},"d99absQn+FBe56xnrZEXFRD","PrivacyDecUI",void 0);t("PrivacyDecUI",i("PrivacyDecUI")(o=function(t){function n(){for(var e,n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))||this).layerType=a.NoticeUp,e.cLabel_top_dec=null,e._openData=null,e}return e(n,t),n.prototype.onOpen=function(){var t=this;this.cLabel_top_dec.string=this._openData.gameName,this.ListCC.render(this._openData.count,c,(function(e,n,c){e.init("privacy/texture/"+t._openData.path+(t._openData.pathPirfix||"")+(c+1))})),this.ListCC.ScrollView.scrollToTop(0)},n}(r))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/PrivacyDecUIItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(t){var e,r,i,c;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy},function(t){i=t.ccclass,c=t.ListCCByBaseItemCC}],execute:function(){var n;r._RF.push({},"47985OVqclEVYZt7preuGzu","PrivacyDecUIItem",void 0);t("PrivacyDecUIItem",i("PrivacyDecUIItem")(n=function(t){function r(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))||this).url="",e}e(r,t);var i=r.prototype;return i.init=function(t){this.url=t},i.listInit=function(){this.SpriteLoaderCC.setSpriteFrameUrl(this.url,!0)},r}(c))||n);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/privacy', 'chunks:///_virtual/privacy'); 
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