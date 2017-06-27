"use strict";
cc._RF.push(module, 'b94cbMJ8WpDNKS0SpR87W9N', 'btnNovoJogo');
// scripts/buttons/btnNovoJogo.js

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

    goToSelectFase: function goToSelectFase() {
        cc.director.loadScene("selectFase");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();