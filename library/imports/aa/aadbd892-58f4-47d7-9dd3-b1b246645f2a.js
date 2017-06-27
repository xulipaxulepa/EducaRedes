"use strict";
cc._RF.push(module, 'aadbdiSWPRH153TsbJGZF8q', 'btnPlayCamada3');
// scripts/buttons/btnPlay/btnPlayCamada3.js

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

    goToFase3: function goToFase3() {
        cc.director.loadScene("fase3");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();