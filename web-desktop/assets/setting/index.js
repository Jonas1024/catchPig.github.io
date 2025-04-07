System.register("chunks:///_virtual/setting",["./SettingUI.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SettingUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./GameDefine.ts","./GameTypeDefine.ts"],(function(e){var t,i,n,c,o,s,l,a,u,r,h,d,C,p;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy},function(e){n=e.ccclass,c=e._platform,o=e.EBottomAdType,s=e.EPlatformType,l=e._gameType,a=e._privacy,u=e._audio,r=e.EUILayer,h=e.EBlockOnceAdType,d=e.BaseUI},function(e){C=e.initData},function(e){p=e.EGameType}],execute:function(){var f;i._RF.push({},"52af3yS6apPi5dNpKPnKLiB","SettingUI",void 0);e("SettingUI",n("SettingUI")(f=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).layerType=r.Panel,t.blockOnceAdType=h.Show,t.cSwitchChildrenCC_music=null,t.cSwitchChildrenCC_sound=null,t.cSwitchChildrenCC_btn=null,t.cBtns=null,t.cAUser=null,t.cADec=null,t}t(i,e);var n=i.prototype;return n.onCreate=function(){switch(c.type){case s.wx:this.bottomAdType=o.Native;break;default:this.bottomAdType=o.Banner}},n.onOpen=function(){this.updateView(),C.openPrivacy?(this.cAUser.active=!0,this.cADec.active=!0):(this.cAUser.active=!1,this.cADec.active=!1),l.isRun?this.cSwitchChildrenCC_btn.index=0:this.cSwitchChildrenCC_btn.index=1,this.cSwitchChildrenCC_btn.node.active=l.type!=p.index},n.onClickReset=function(){if(l.hasRun()&&(this.closeUI(),l.reset(),c.type==s.tt)){var e=window.tt,t="首页";switch(l.type){case p.level:t="关卡";break;case p.today:t="挑战";break;case p.shape:t="彩虹";break;case p.custom:t="自定义";break;case p.customEditor:t="编辑器"}e.reportAnalytics("enterMode",{mode:t})}},n.onClickExit=function(){this.closeUI(),l.settingExit()},n.onClickAUser=function(){a.openUserUI()},n.onClickADec=function(){a.openDecUI()},n.onClickSwitchChildrenCC_music=function(){1==u.getVolume(!0)?u.setVolume(!0,0):u.setVolume(!0,1),this.updateView()},n.onClickSwitchChildrenCC_sound=function(){1==u.getVolume(!1)?u.setVolume(!1,0):u.setVolume(!1,1),this.updateView()},n.updateView=function(){1==u.getVolume(!0)?this.cSwitchChildrenCC_music.index=0:this.cSwitchChildrenCC_music.index=1,1==u.getVolume(!1)?this.cSwitchChildrenCC_sound.index=0:this.cSwitchChildrenCC_sound.index=1},i}(d))||f);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/setting', 'chunks:///_virtual/setting'); 
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