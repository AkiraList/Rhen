const a43_0x1dd9=['content','guild','1621MLphKu','hasPermission','play:soundcloud','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','setColor',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','playskip\x20<link/query>','includes','playskip','1yTSWlx','369413MWLsqL','7773sZzAiy','setTitle','exports','**:x:\x20Invalid\x20usage**','get','selfDeaf','6277gDlQgx','#ff0000','2868YojCJR','member','join','**Searching**\x20:mag_right:\x20`','voiceChannel','spotify','pskip','43xqtfQy','setDescription','494LPxqRX','play:youtube','209RwmvoU','Skips\x20the\x20current\x20song\x20and\x20plays\x20the\x20song\x20you\x20requested.','2GIvxcX','http','voice','../../handlers/lavalink/playermanager','3gWtYWu','execute','254325OvIacJ','send','channel','**:x:\x20Invalid\x20usage**\x0a','Song','512470FzohLP','easy-djs-commandhandler','soundcloud','playnow'];const a43_0x36836d=a43_0x4f9a;(function(_0x4fc74a,_0x2e37d9){const _0x279d80=a43_0x4f9a;while(!![]){try{const _0x57b7e0=-parseInt(_0x279d80(0x13b))*-parseInt(_0x279d80(0x139))+-parseInt(_0x279d80(0x120))*parseInt(_0x279d80(0x11e))+-parseInt(_0x279d80(0x12f))*parseInt(_0x279d80(0x126))+parseInt(_0x279d80(0x115))*parseInt(_0x279d80(0x131))+parseInt(_0x279d80(0x128))*parseInt(_0x279d80(0x133))+-parseInt(_0x279d80(0x11f))+-parseInt(_0x279d80(0x10f))*parseInt(_0x279d80(0x135));if(_0x57b7e0===_0x2e37d9)break;else _0x4fc74a['push'](_0x4fc74a['shift']());}catch(_0x10bee2){_0x4fc74a['push'](_0x4fc74a['shift']());}}}(a43_0x1dd9,0x77e74));const {MessageEmbed}=require('discord.js'),playermanager=require(a43_0x36836d(0x138)),{Command}=require(a43_0x36836d(0x110));function a43_0x4f9a(_0x162876,_0x349c0b){return a43_0x4f9a=function(_0x1dd972,_0x4f9a4a){_0x1dd972=_0x1dd972-0x10f;let _0x48ec20=a43_0x1dd9[_0x1dd972];return _0x48ec20;},a43_0x4f9a(_0x162876,_0x349c0b);}module[a43_0x36836d(0x122)]=new Command({'name':a43_0x36836d(0x11d),'category':a43_0x36836d(0x13f),'aliases':['ps',a43_0x36836d(0x12e),a43_0x36836d(0x112),'pn'],'description':a43_0x36836d(0x134),'usage':a43_0x36836d(0x11b)})[a43_0x36836d(0x13a)]((_0x545310,_0x344297,_0x242ea0,_0x57a302,_0x629dbc,_0x28417b)=>{const _0x45d13f=a43_0x36836d,{channel:_0x3145b9}=_0x344297[_0x45d13f(0x129)][_0x45d13f(0x137)];if(!_0x3145b9)return _0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](_0x45d13f(0x11a));if(_0x344297[_0x45d13f(0x129)][_0x45d13f(0x137)][_0x45d13f(0x125)])return _0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x47804a=_0x344297[_0x45d13f(0x114)]['me']['voice'][_0x45d13f(0x13d)];if(!_0x242ea0[0x0]){let _0x5024b0=_0x28417b+'playskip\x20<link/query>',_0x4780cd=new MessageEmbed()[_0x45d13f(0x121)](_0x45d13f(0x123))[_0x45d13f(0x130)](_0x5024b0)[_0x45d13f(0x119)](_0x45d13f(0x127));_0x344297[_0x45d13f(0x114)]['me'][_0x45d13f(0x116)]('EMBED_LINKS')?_0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](_0x4780cd):_0x344297[_0x45d13f(0x13d)]['send'](_0x45d13f(0x13e)+_0x5024b0);return;}const _0x2d0213=_0x545310['manager']['players'][_0x45d13f(0x124)](_0x344297[_0x45d13f(0x114)]['id']);if(_0x2d0213&&_0x3145b9['id']!==_0x2d0213[_0x45d13f(0x12c)])return _0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](_0x45d13f(0x118));_0x2d0213&&_0x47804a&&_0x3145b9['id']!==_0x47804a['id']&&_0x2d0213['destroy']();if(_0x344297[_0x45d13f(0x113)]['includes']('youtu'))_0x344297['channel']['send'](_0x45d13f(0x12b)+_0x242ea0['join']('\x20')+'`'),playermanager(_0x545310,_0x344297,_0x242ea0,_0x45d13f(0x132));else{if(_0x344297[_0x45d13f(0x113)][_0x45d13f(0x11c)](_0x45d13f(0x12d)))_0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](_0x45d13f(0x12b)+_0x242ea0[_0x45d13f(0x12a)]('\x20')+'`'),playermanager(_0x545310,_0x344297,_0x242ea0,'play:youtube');else{if(_0x344297['content'][_0x45d13f(0x11c)](_0x45d13f(0x111)))_0x344297[_0x45d13f(0x13d)][_0x45d13f(0x13c)](_0x45d13f(0x12b)+_0x242ea0['join']('\x20')+'`'),playermanager(_0x545310,_0x344297,_0x242ea0,_0x45d13f(0x117));else _0x344297[_0x45d13f(0x113)][_0x45d13f(0x11c)](_0x45d13f(0x136))?(_0x344297['channel'][_0x45d13f(0x13c)](_0x45d13f(0x12b)+_0x242ea0[_0x45d13f(0x12a)]('\x20')+'`'),playermanager(_0x545310,_0x344297,_0x242ea0,_0x45d13f(0x132))):(_0x344297['channel'][_0x45d13f(0x13c)](_0x45d13f(0x12b)+_0x242ea0[_0x45d13f(0x12a)]('\x20')+'`'),playermanager(_0x545310,_0x344297,_0x242ea0,'play:youtube'));}}});