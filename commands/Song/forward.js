const a38_0x4cb9=['forward\x20<Time\x20in\x20seconds>','11764FYyUny','execute','position','send','19JaHamJ','158307AJLKVe','easy-djs-commandhandler','member','channel','212537MHUrKf','exports','**:musical_note:\x20Set\x20position\x20to\x20`','current','guild','#ff0000','setTitle','../../botconfig/config.json','queue','fwd','1cApSbw','seek','277618ITseXE','1tbVjQG','forward',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','get','23398QqNtrC','`\x20:fast_forward:**','**:x:\x20Invalid\x20usage**\x0a','264491SkYzmM','hasPermission','7302yrYpOR','discord.js','**:x:\x20Invalid\x20usage**','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','../../handlers/functions','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','voice','selfDeaf','duration'];const a38_0x4516c8=a38_0x6ed2;(function(_0xd8d969,_0x375550){const _0x51b009=a38_0x6ed2;while(!![]){try{const _0x3f260d=parseInt(_0x51b009(0x124))+parseInt(_0x51b009(0x138))*parseInt(_0x51b009(0x12e))+-parseInt(_0x51b009(0x130))+parseInt(_0x51b009(0x131))*parseInt(_0x51b009(0x135))+-parseInt(_0x51b009(0x120))+parseInt(_0x51b009(0x11b))+parseInt(_0x51b009(0x11f))*parseInt(_0x51b009(0x13a));if(_0x3f260d===_0x375550)break;else _0xd8d969['push'](_0xd8d969['shift']());}catch(_0x38e535){_0xd8d969['push'](_0xd8d969['shift']());}}}(a38_0x4cb9,0x347db));function a38_0x6ed2(_0x4b5f18,_0x1f9665){return a38_0x6ed2=function(_0x4cb9f3,_0x6ed241){_0x4cb9f3=_0x4cb9f3-0x114;let _0x2ddbdd=a38_0x4cb9[_0x4cb9f3];return _0x2ddbdd;},a38_0x6ed2(_0x4b5f18,_0x1f9665);}const {MessageEmbed}=require(a38_0x4516c8(0x13b)),config=require(a38_0x4516c8(0x12b)),ee=require('../../botconfig/embed.json'),{createBar,format}=require(a38_0x4516c8(0x115)),{Command}=require(a38_0x4516c8(0x121));module[a38_0x4516c8(0x125)]=new Command({'name':a38_0x4516c8(0x132),'category':'Song','aliases':[a38_0x4516c8(0x12d)],'description':'Forwards\x20by\x20a\x20certain\x20amount\x20of\x20time\x20in\x20the\x20current\x20track.','usage':'forward\x20<time>'})[a38_0x4516c8(0x11c)]((_0x76e9fc,_0x10495d,_0x2d2cf5,_0x436f02,_0x16ec3b,_0x55be15)=>{const _0x40f126=a38_0x4516c8,{channel:_0x3da530}=_0x10495d[_0x40f126(0x122)]['voice'];if(!_0x3da530)return _0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');if(_0x10495d[_0x40f126(0x122)][_0x40f126(0x117)][_0x40f126(0x118)])return _0x10495d[_0x40f126(0x123)]['send'](_0x40f126(0x133));const _0x101e3f=_0x10495d[_0x40f126(0x128)]['me']['voice']['channel'],_0x3e4056=_0x76e9fc['manager']['players'][_0x40f126(0x134)](_0x10495d[_0x40f126(0x128)]['id']);if(!_0x3e4056||!_0x101e3f)return _0x10495d[_0x40f126(0x123)]['send'](_0x40f126(0x114));if(!_0x3e4056['queue']||!_0x3e4056[_0x40f126(0x12c)][_0x40f126(0x127)])return _0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)](_0x40f126(0x114));if(_0x3e4056&&_0x3da530['id']!==_0x3e4056['voiceChannel'])return _0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)](_0x40f126(0x116));if(!_0x2d2cf5[0x0]){let _0x3c2161=_0x55be15+_0x40f126(0x11a),_0x14e232=new MessageEmbed()[_0x40f126(0x12a)](_0x40f126(0x13c))['setDescription'](_0x3c2161)['setColor'](_0x40f126(0x129));_0x10495d['guild']['me'][_0x40f126(0x139)]('EMBED_LINKS')?_0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)](_0x14e232):_0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)](_0x40f126(0x137)+_0x3c2161);return;}let _0x208512=Number(_0x3e4056[_0x40f126(0x11d)])+Number(_0x2d2cf5[0x0])*0x3e8;if(Number(_0x2d2cf5[0x0])<=0x0)_0x208512=Number(_0x3e4056[_0x40f126(0x11d)]);if(Number(_0x208512)>=_0x3e4056[_0x40f126(0x12c)][_0x40f126(0x127)][_0x40f126(0x119)])return _0x10495d[_0x40f126(0x123)][_0x40f126(0x11e)]('**:x:\x20Time\x20cannot\x20be\x20longer\x20than\x20the\x20song**');return _0x3e4056[_0x40f126(0x12f)](Number(_0x208512)),_0x10495d['channel'][_0x40f126(0x11e)](_0x40f126(0x126)+format(_0x3e4056[_0x40f126(0x11d)])+_0x40f126(0x136));});