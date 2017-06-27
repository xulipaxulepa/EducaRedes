"use strict";
cc._RF.push(module, '6ec98tavstF46fC5jCFjmOB', 'btnPlayCamada1');
// scripts/buttons/btnPlay/btnPlayCamada1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    goToFase1: function goToFase1() {
        cc.director.loadScene("fase1");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();