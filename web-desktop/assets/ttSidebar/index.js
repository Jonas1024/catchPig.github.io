System.register("chunks:///_virtual/ttSidebar",["./TTSidebarUI.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TTSidebarUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./LogicDefine.ts"],(function(t){var e,i,n,r,c,o,a,d,s,p,u,h;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy},function(t){n=t.ccclass,r=t._platform,c=t.EBottomAdType,o=t.EPlatformType,a=t._prop,d=t._ui,s=t.EUILayer,p=t.EBlockOnceAdType,u=t.BaseUI},function(t){h=t.EPropId}],execute:function(){var l;i._RF.push({},"b5261htOrhEAZuHr+x6XZUe","TTSidebarUI",void 0);t("TTSidebarUI",n("TTSidebarUI")(l=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).layerType=s.Panel,e.blockOnceAdType=p.Show,e.cSwitchChildrenCC_btn=null,e}e(i,t);var n=i.prototype;return n.onCreate=function(){switch(r.type){case o.wx:this.bottomAdType=c.Native;break;default:this.bottomAdType=c.Banner}this.addEvent(r._tt.sidebar.EventType.REWARD_CHANGE,this.updateView,this,r)},n.onOpen=function(){this.updateView()},n.updateView=function(){r._tt.sidebar.isReward?this.cSwitchChildrenCC_btn.index=0:r._tt.sidebar.checkReward()?this.cSwitchChildrenCC_btn.index=1:this.cSwitchChildrenCC_btn.index=2},n.onClickReward=function(){r._tt.sidebar.reward(),this.updateView(),a.addProp(h.tip),d.tip("领取成功！提示道具+1")},n.onClickTo=function(){r._tt.sidebar.to()},i}(u))||l);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/ttSidebar', 'chunks:///_virtual/ttSidebar'); 
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