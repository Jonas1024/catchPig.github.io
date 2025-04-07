System.register("chunks:///_virtual/platform",["./RecordTemp.ts","./RewardedVideoTemp.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RecordTemp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(t){var o,n,e,i,s,r;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy},function(t){e=t.ccclass,i=t.winSize,s=t.Times,r=t.BaseComponent}],execute:function(){var c;n._RF.push({},"8fead3vpRJCebltsTfegXF2","RecordTemp",void 0);t("RecordTemp",e("RecordTemp")(c=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this)._startTime=-1,o.duration=-1,o._onStartRecord=null,o._onStopRecord=null,o.isUpdate=!1,o}o(n,t);var e=n.prototype;return e.onLoad=function(){t.prototype.onLoad.call(this),this.setPositionY(i().height,!0)},e.startRecord=function(t){var o=this;this.duration=t,this._startTime=s.second(),this.isUpdate=!0,this.getCountDownByLabel("开始"),this.scheduleOnce((function(){o._onStartRecord&&o._onStartRecord()}),1)},e.pauseRecord=function(){this.isUpdate=!1,this.getCountDownByLabel("暂停")},e.resumeRecord=function(){this.isUpdate=!0},e.stopRecord=function(){var t=this;this.isUpdate=!1,this.Label.string="停止",this.scheduleOnce((function(){t._onStopRecord&&t._onStopRecord()}),1)},e.onUpdate=function(){this.getCountDownByLabel("进行中")||this.stopRecord()},e.getCountDownByLabel=function(t){var o=this.getCountDown();return-1!=o&&o>=0&&(this.Label.string=t+s.numMinute(1e3*o),!0)},e.getCountDown=function(){return-1==this._startTime?-1:this._startTime+this.duration-s.second()},e.onStartRecord=function(t){this._onStartRecord=t},e.onStopRecord=function(t){this._onStopRecord=t},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/RewardedVideoTemp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(e){var i,t,n,o,l,a;return{setters:[function(e){i=e.inheritsLoose},function(e){t=e.cclegacy},function(e){n=e.ccclass,o=e.winSize,l=e._timer,a=e.BaseComponent}],execute:function(){var s;t._RF.push({},"51e35+FBKhL05Ae9ZXXM/rW","RewardedVideoTemp",void 0);e("RewardedVideoTemp",n("RewardedVideoTemp")(s=function(e){function t(){for(var i,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(i=e.call.apply(e,[this].concat(n))||this).cLabelTime=null,i.onCloseCallBack=null,i}i(t,e);var n=t.prototype;return n.onLoad=function(){e.prototype.onLoad.call(this),this.setSize(o())},n.onEnable=function(){e.prototype.onEnable.call(this),l.clearUpdateAddTime(this.uuid+"test"),this.SwitchChildrenCC.index=1},n.onUpdate=function(){if(0!=this.SwitchChildrenCC.index){var e=l.updateAddTime(this.uuid+"test");this.cLabelTime.string=Math.floor(.5-e)+"秒",e>=.5&&(this.SwitchChildrenCC.index=0)}},n.onClickClose=function(){this.onCloseCallBack&&(0==this.SwitchChildrenCC.index?this.onCloseCallBack(!0):this.onCloseCallBack(!1))},t}(a))||s);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/platform', 'chunks:///_virtual/platform'); 
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