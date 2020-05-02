// TODO: Add a simple WebRTC example
import bruh from '../src/lib/connectionTest';
checkTurnOrStun({"url": "stun:stunserver.org"}).then(function(result){
    console.log(
    result ? 'YES, Server active as '+result : 'NO, server not active');
}).catch(console.error.bind(console));
