"use strict";
cc._RF.push(module, '5a1c4XzCSVHbp6Ht4+qg7aD', 'btnPlayCamada5');
// scripts/buttons/btnPlay/btnPlayCamada5.js

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

    goToFase4: function goToFase4() {
        cc.director.loadScene("fase5");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();