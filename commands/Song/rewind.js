const a45_0x2f5c=['rewind','1772990Ckkkrn','1319093JdjXiu','1Hjqdlx','EMBED_LINKS','channel','send','rewind\x20<time>','1138273QetSVT',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','players','../../botconfig/embed.json','`\x20:fast_forward:**','**:musical_note:\x20Set\x20position\x20to\x20`','seek','current','../../botconfig/config.json','setTitle','345411yQKPXG','queue','duration','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','discord.js','Rewinds\x20by\x20a\x20certain\x20amount\x20of\x20time\x20in\x20the\x20current\x20track.','rewind\x20<Time\x20in\x20seconds>','member','guild','27121IFyfFS','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20Rhen\x20Music\x20to\x20use\x20this\x20command**','858698pNUpfR','rwd','Song','exports','**:x:\x20Invalid\x20usage**','get','hasPermission','2hiAyPf','../../handlers/functions','407960aUDcYK','voiceChannel','selfDeaf'];const a45_0x5dedf6=a45_0x1615;function a45_0x1615(_0x394b2d,_0x4899ca){return a45_0x1615=function(_0x2f5c15,_0x1615f5){_0x2f5c15=_0x2f5c15-0x1a6;let _0x53da08=a45_0x2f5c[_0x2f5c15];return _0x53da08;},a45_0x1615(_0x394b2d,_0x4899ca);}(function(_0x2c1d7e,_0x53f1c0){const _0x54d02c=a45_0x1615;while(!![]){try{const _0xd25290=parseInt(_0x54d02c(0x1c4))*parseInt(_0x54d02c(0x1cb))+-parseInt(_0x54d02c(0x1c2))+-parseInt(_0x54d02c(0x1af))+-parseInt(_0x54d02c(0x1cd))+parseInt(_0x54d02c(0x1b9))+parseInt(_0x54d02c(0x1a8))+parseInt(_0x54d02c(0x1aa))*-parseInt(_0x54d02c(0x1a9));if(_0xd25290===_0x53f1c0)break;else _0x2c1d7e['push'](_0x2c1d7e['shift']());}catch(_0x6eb31f){_0x2c1d7e['push'](_0x2c1d7e['shift']());}}}(a45_0x2f5c,0xe64f6));const {MessageEmbed}=require(a45_0x5dedf6(0x1bd)),config=require(a45_0x5dedf6(0x1b7)),ee=require(a45_0x5dedf6(0x1b2)),{createBar,format}=require(a45_0x5dedf6(0x1cc));module[a45_0x5dedf6(0x1c7)]={'name':a45_0x5dedf6(0x1a7),'category':a45_0x5dedf6(0x1c6),'aliases':[a45_0x5dedf6(0x1c5)],'description':a45_0x5dedf6(0x1be),'usage':a45_0x5dedf6(0x1ae),'run':async(_0x3d13e7,_0x4637dc,_0xa8361a,_0x42bb89,_0x266210,_0x4e5806)=>{const _0x44cc98=a45_0x5dedf6,{channel:_0x1c1f6c}=_0x4637dc[_0x44cc98(0x1c0)]['voice'];if(!_0x1c1f6c)return _0x4637dc['channel']['send'](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');if(_0x4637dc[_0x44cc98(0x1c0)]['voice'][_0x44cc98(0x1a6)])return _0x4637dc[_0x44cc98(0x1ac)][_0x44cc98(0x1ad)](_0x44cc98(0x1b0));const _0x979cc7=_0x4637dc[_0x44cc98(0x1c1)]['me']['voice'][_0x44cc98(0x1ac)],_0x3b2163=_0x3d13e7['manager'][_0x44cc98(0x1b1)][_0x44cc98(0x1c9)](_0x4637dc[_0x44cc98(0x1c1)]['id']);if(!_0x3b2163||!_0x979cc7)return _0x4637dc['channel'][_0x44cc98(0x1ad)](_0x44cc98(0x1bc));if(!_0x3b2163[_0x44cc98(0x1ba)]||!_0x3b2163[_0x44cc98(0x1ba)]['current'])return _0x4637dc['channel'][_0x44cc98(0x1ad)](_0x44cc98(0x1bc));if(_0x3b2163&&_0x1c1f6c['id']!==_0x3b2163[_0x44cc98(0x1ce)])return _0x4637dc[_0x44cc98(0x1ac)][_0x44cc98(0x1ad)](_0x44cc98(0x1c3));if(!_0xa8361a[0x0]){let _0x33e75b=_0x4e5806+_0x44cc98(0x1bf),_0xdc7bcc=new MessageEmbed()[_0x44cc98(0x1b8)](_0x44cc98(0x1c8))['setDescription'](_0x33e75b);_0x4637dc['guild']['me'][_0x44cc98(0x1ca)](_0x44cc98(0x1ab))?_0x4637dc[_0x44cc98(0x1ac)][_0x44cc98(0x1ad)](_0xdc7bcc):_0x4637dc[_0x44cc98(0x1ac)][_0x44cc98(0x1ad)]('**:x:\x20Invalid\x20usage**\x0a'+_0x33e75b);return;}let _0x52a224=_0x3b2163['position']-Number(_0xa8361a[0x0])*0x3e8;if(_0x52a224>=_0x3b2163[_0x44cc98(0x1ba)][_0x44cc98(0x1b6)][_0x44cc98(0x1bb)]-_0x3b2163['position']||_0x52a224<0x0)return _0x4637dc['channel'][_0x44cc98(0x1ad)]('**:x:\x20Cannot\x20rewind\x20that\x20far\x20back\x20in\x20the\x20song**');return _0x3b2163[_0x44cc98(0x1b5)](Number(_0x52a224)),_0x4637dc[_0x44cc98(0x1ac)]['send'](_0x44cc98(0x1b4)+format(_0x3b2163['position'])+_0x44cc98(0x1b3));}};