"use strict";
exports.__esModule = true;
checkTurnOrStun({ "url": "stun:stunserver.org" }).then(function (result) {
    console.log(result ? 'YES, Server active as ' + result : 'NO, server not active');
})["catch"](console.error.bind(console));
