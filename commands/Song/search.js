const a46_0x3462=['send','find','EMBED_LINKS','../../handlers/lavalink/playermanager','guild','Song','89917kezUaZ','play\x20<link/query>','channel',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','231996mQhuLv','get','voice','1117BCAGFW','3cgYZyt','setTitle','search\x20<link/query>','voiceChannel','615fRoNTQ','**:x:\x20Invalid\x20usage**\x0a','133kczbAD','606eSicmt','90191rNGxRi','setColor',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','players','setDescription','member','137909JqmwEp','discord.js','105820zOlhPn','manager','search','exports'];const a46_0x51652b=a46_0x1b9b;function a46_0x1b9b(_0x4c6b05,_0x4d5c57){return a46_0x1b9b=function(_0x3462fb,_0x1b9b22){_0x3462fb=_0x3462fb-0x1ed;let _0xa491fc=a46_0x3462[_0x3462fb];return _0xa491fc;},a46_0x1b9b(_0x4c6b05,_0x4d5c57);}(function(_0x270920,_0x592914){const _0xf52aaf=a46_0x1b9b;while(!![]){try{const _0x45e71f=-parseInt(_0xf52aaf(0x1ed))+parseInt(_0xf52aaf(0x204))+parseInt(_0xf52aaf(0x208))*parseInt(_0xf52aaf(0x1ff))+-parseInt(_0xf52aaf(0x207))*-parseInt(_0xf52aaf(0x20e))+parseInt(_0xf52aaf(0x1f5))+-parseInt(_0xf52aaf(0x1f3))+-parseInt(_0xf52aaf(0x20f))*parseInt(_0xf52aaf(0x20c));if(_0x45e71f===_0x592914)break;else _0x270920['push'](_0x270920['shift']());}catch(_0x46ac94){_0x270920['push'](_0x270920['shift']());}}}(a46_0x3462,0x25eca));const {MessageEmbed}=require(a46_0x51652b(0x1f4)),playermanager=require(a46_0x51652b(0x1fc));module[a46_0x51652b(0x1f8)]={'name':a46_0x51652b(0x1f7),'category':a46_0x51652b(0x1fe),'aliases':[a46_0x51652b(0x1fa)],'description':'Searches\x20from\x20Youtube\x20for\x20a\x20song\x20via\x20your\x20query\x20and\x20returns\x20the\x20top\x2010\x20results.','usage':a46_0x51652b(0x20a),'run':async(_0x94c925,_0x5834d9,_0x4af1f1,_0x2fa740,_0x7438ba,_0x51fe7c)=>{const _0x48735d=a46_0x51652b,{channel:_0x1c8788}=_0x5834d9['member']['voice'];if(!_0x1c8788)return _0x5834d9[_0x48735d(0x201)]['send'](_0x48735d(0x1ef));if(_0x5834d9[_0x48735d(0x1f2)][_0x48735d(0x206)]['selfDeaf'])return _0x5834d9[_0x48735d(0x201)][_0x48735d(0x1f9)](_0x48735d(0x202));const _0x3373cd=_0x5834d9[_0x48735d(0x1fd)]['me'][_0x48735d(0x206)][_0x48735d(0x201)];if(!_0x4af1f1[0x0]){let _0x3a180e=_0x51fe7c+_0x48735d(0x200),_0x3ddb7a=new MessageEmbed()[_0x48735d(0x209)]('**:x:\x20Invalid\x20usage**')[_0x48735d(0x1f1)](_0x3a180e)[_0x48735d(0x1ee)]('#ff0000');_0x5834d9[_0x48735d(0x1fd)]['me']['hasPermission'](_0x48735d(0x1fb))?_0x5834d9[_0x48735d(0x201)][_0x48735d(0x1f9)](_0x3ddb7a):_0x5834d9['channel'][_0x48735d(0x1f9)](_0x48735d(0x20d)+_0x3a180e);return;}const _0x1cc10e=_0x94c925[_0x48735d(0x1f6)][_0x48735d(0x1f0)][_0x48735d(0x205)](_0x5834d9[_0x48735d(0x1fd)]['id']);if(_0x1cc10e&&_0x1c8788['id']!==_0x1cc10e[_0x48735d(0x20b)])return _0x5834d9[_0x48735d(0x201)]['send'](_0x48735d(0x203));_0x1cc10e&&_0x3373cd&&_0x1c8788['id']!==_0x3373cd['id']&&_0x1cc10e['destroy'](),playermanager(_0x94c925,_0x5834d9,_0x4af1f1,'search:youtube');}};