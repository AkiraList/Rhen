const a33_0x61f2=['title','setDescription','I\x20have\x20not\x20joined\x20a\x20channel\x20because\x20I\x20have\x20nothing\x20to\x20play.\x20Use\x20the\x20play\x20command\x20to\x20play\x20the\x20song.','join','32236wlTZTf','slice','name','manager','exports','map','\x20of\x20','7575CFDUDf','2TaSLrB','color','63670IueyTY','3311iVFwjV','queue','138AMAvUA','1434CScBlx','72321YUtTrK','159392UCadxY','execute','que','loopqueue','1CtgAoy','length','Current','players','uri','53lrFCfY','easy-djs-commandhandler','addField','setFooter','current','39gQaSRE','reply','page\x20','setColor'];const a33_0x35e531=a33_0x1974;(function(_0x3bebc1,_0x27bb93){const _0x4a678a=a33_0x1974;while(!![]){try{const _0x16204c=parseInt(_0x4a678a(0xe5))+-parseInt(_0x4a678a(0xe0))*-parseInt(_0x4a678a(0xc8))+parseInt(_0x4a678a(0xdd))*-parseInt(_0x4a678a(0xd5))+parseInt(_0x4a678a(0xe2))*parseInt(_0x4a678a(0xe3))+parseInt(_0x4a678a(0xdf))+parseInt(_0x4a678a(0xe4))*-parseInt(_0x4a678a(0xc3))+parseInt(_0x4a678a(0xdc))*-parseInt(_0x4a678a(0xcd));if(_0x16204c===_0x27bb93)break;else _0x3bebc1['push'](_0x3bebc1['shift']());}catch(_0x42228c){_0x3bebc1['push'](_0x3bebc1['shift']());}}}(a33_0x61f2,0x2817b));const {MessageEmbed}=require('discord.js'),{format,swap_pages2}=require('../../handlers/functions'),ee=require('../../botconfig/config.json'),{Command}=require(a33_0x35e531(0xc9));function a33_0x1974(_0x232071,_0x57f0fd){return a33_0x1974=function(_0x61f249,_0x19740d){_0x61f249=_0x61f249-0xc0;let _0x1ae4fc=a33_0x61f2[_0x61f249];return _0x1ae4fc;},a33_0x1974(_0x232071,_0x57f0fd);}module[a33_0x35e531(0xd9)]=new Command({'name':a33_0x35e531(0xe1),'category':'Queue','aliases':['q',a33_0x35e531(0xc1)],'description':'Checks\x20whats\x20in\x20the\x20queue.','usage':a33_0x35e531(0xc2)})[a33_0x35e531(0xc0)]((_0x82612f,_0x4d0369,_0x2a53bc,_0x1454cb,_0x41a2b2,_0x1a95fd)=>{const _0x25ec69=a33_0x35e531,_0x3e6f21=_0x82612f[_0x25ec69(0xd8)][_0x25ec69(0xc6)]['get'](_0x4d0369['guild']['id']);if(!_0x3e6f21)return _0x4d0369[_0x25ec69(0xce)](_0x25ec69(0xd3));const _0x7ca904=_0x3e6f21[_0x25ec69(0xe1)],_0x2a7e8d=new MessageEmbed()['setAuthor']('Queue\x20for\x20'+_0x4d0369['guild'][_0x25ec69(0xd7)]),_0x57990d=0xa,_0x2c1c63=_0x2a53bc['length']&&Number(_0x2a53bc[0x0])?Number(_0x2a53bc[0x0]):0x1,_0x1a7226=_0x2c1c63*_0x57990d,_0x82578e=_0x1a7226-_0x57990d,_0x8557d7=_0x7ca904[_0x25ec69(0xd6)](_0x82578e,_0x1a7226);if(_0x7ca904[_0x25ec69(0xcc)])_0x2a7e8d[_0x25ec69(0xca)](_0x25ec69(0xc5),'['+_0x7ca904['current'][_0x25ec69(0xd1)]+']('+_0x7ca904[_0x25ec69(0xcc)][_0x25ec69(0xc7)]+')');if(!_0x8557d7[_0x25ec69(0xc4)])_0x2a7e8d[_0x25ec69(0xd2)]('No\x20tracks\x20in\x20'+(_0x2c1c63>0x1?_0x25ec69(0xcf)+_0x2c1c63:'the\x20queue')+'.');else _0x2a7e8d[_0x25ec69(0xd2)](_0x8557d7[_0x25ec69(0xda)]((_0x2e8488,_0x16f8f9)=>_0x82578e+ ++_0x16f8f9+'\x20-\x20['+_0x2e8488[_0x25ec69(0xd1)]+']('+_0x2e8488[_0x25ec69(0xc7)]+')')[_0x25ec69(0xd4)]('\x0a'));const _0x136f12=Math['ceil'](_0x7ca904[_0x25ec69(0xc4)]/_0x57990d);return _0x2a7e8d[_0x25ec69(0xd0)](ee[_0x25ec69(0xde)]),_0x2a7e8d[_0x25ec69(0xcb)]('Page\x20'+(_0x2c1c63>_0x136f12?_0x136f12:_0x2c1c63)+_0x25ec69(0xdb)+_0x136f12,ee['footericon']),_0x4d0369[_0x25ec69(0xce)](_0x2a7e8d);});