const a33_0x11df=['Page\x20','38825vUGdmN','ceil','Queue','name','I\x20have\x20not\x20joined\x20a\x20channel\x20because\x20I\x20have\x20nothing\x20to\x20play.\x20Use\x20the\x20play\x20command\x20to\x20play\x20the\x20song.','448124kjCEjK','length','292215RFFNdg','uri','No\x20tracks\x20in\x20','players','the\x20queue','addField','15isVuTV','369877GzwWVI','loopqueue','slice','reply','1016871SGUles','current','../../handlers/functions','\x20of\x20','easy-djs-commandhandler','exports','color','Queue\x20for\x20','title','map','queue','discord.js','1047574BRuwNb','Checks\x20whats\x20in\x20the\x20queue.','setDescription','2NRwESj','16693oKSXkL','1MakLxN','guild','../../botconfig/config.json','page\x20'];const a33_0x15ce06=a33_0x3dfb;(function(_0x4610c1,_0x499185){const _0x265c53=a33_0x3dfb;while(!![]){try{const _0x258f37=-parseInt(_0x265c53(0x1f7))+parseInt(_0x265c53(0x1eb))+-parseInt(_0x265c53(0x1e7))*-parseInt(_0x265c53(0x1fa))+parseInt(_0x265c53(0x206))+parseInt(_0x265c53(0x1fc))*-parseInt(_0x265c53(0x201))+-parseInt(_0x265c53(0x208))+-parseInt(_0x265c53(0x1fb))*parseInt(_0x265c53(0x1e6));if(_0x258f37===_0x499185)break;else _0x4610c1['push'](_0x4610c1['shift']());}catch(_0x59cd98){_0x4610c1['push'](_0x4610c1['shift']());}}}(a33_0x11df,0x8c8fc));const {MessageEmbed}=require(a33_0x15ce06(0x1f6)),{format,swap_pages2}=require(a33_0x15ce06(0x1ed)),ee=require(a33_0x15ce06(0x1fe)),{Command}=require(a33_0x15ce06(0x1ef));function a33_0x3dfb(_0x1328cd,_0x37f0f1){return a33_0x3dfb=function(_0x11df7d,_0x3dfb3c){_0x11df7d=_0x11df7d-0x1e4;let _0x879fa9=a33_0x11df[_0x11df7d];return _0x879fa9;},a33_0x3dfb(_0x1328cd,_0x37f0f1);}module[a33_0x15ce06(0x1f0)]=new Command({'name':a33_0x15ce06(0x1f5),'category':a33_0x15ce06(0x203),'aliases':['q','que'],'description':a33_0x15ce06(0x1f8),'usage':a33_0x15ce06(0x1e8)})['execute']((_0x4c92b,_0x23995b,_0x1ddfeb,_0x5a257f,_0x775477,_0xff5f88)=>{const _0x5a82e2=a33_0x15ce06,_0x2782d4=_0x4c92b['manager'][_0x5a82e2(0x20b)]['get'](_0x23995b[_0x5a82e2(0x1fd)]['id']);if(!_0x2782d4)return _0x23995b[_0x5a82e2(0x1ea)](_0x5a82e2(0x205));const _0x18b2d5=_0x2782d4['queue'],_0x1d1927=new MessageEmbed()['setAuthor'](_0x5a82e2(0x1f2)+_0x23995b[_0x5a82e2(0x1fd)][_0x5a82e2(0x204)]),_0x1351d1=0xa,_0x446a0a=_0x1ddfeb[_0x5a82e2(0x207)]&&Number(_0x1ddfeb[0x0])?Number(_0x1ddfeb[0x0]):0x1,_0x1a2517=_0x446a0a*_0x1351d1,_0x46715d=_0x1a2517-_0x1351d1,_0x1c1971=_0x18b2d5[_0x5a82e2(0x1e9)](_0x46715d,_0x1a2517);if(_0x18b2d5['current'])_0x1d1927[_0x5a82e2(0x1e5)]('Current','['+_0x18b2d5[_0x5a82e2(0x1ec)][_0x5a82e2(0x1f3)]+']('+_0x18b2d5['current'][_0x5a82e2(0x209)]+')');if(!_0x1c1971[_0x5a82e2(0x207)])_0x1d1927[_0x5a82e2(0x1f9)](_0x5a82e2(0x20a)+(_0x446a0a>0x1?_0x5a82e2(0x1ff)+_0x446a0a:_0x5a82e2(0x1e4))+'.');else _0x1d1927['setDescription'](_0x1c1971[_0x5a82e2(0x1f4)]((_0x9b27c9,_0x43966e)=>_0x46715d+ ++_0x43966e+'\x20-\x20['+_0x9b27c9[_0x5a82e2(0x1f3)]+']('+_0x9b27c9[_0x5a82e2(0x209)]+')')['join']('\x0a'));const _0x19ce85=Math[_0x5a82e2(0x202)](_0x18b2d5[_0x5a82e2(0x207)]/_0x1351d1);return _0x1d1927['setColor'](ee[_0x5a82e2(0x1f1)]),_0x1d1927['setFooter'](_0x5a82e2(0x200)+(_0x446a0a>_0x19ce85?_0x19ce85:_0x446a0a)+_0x5a82e2(0x1ee)+_0x19ce85),_0x23995b['reply'](_0x1d1927);});