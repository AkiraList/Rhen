const a34_0x69c6=['**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','cache','guild','exports','queue','current','301219qvLmjG','mix','member','shuffle','64995jQnBse','142gehpPZ','map','destroy',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','manager','5cFIYml','send','Queue','channel','get','1475MkHEsj','168349HUMjdg','players','roles','voiceChannel','error','44582sQgqMm','beforeshuffle','23099hZjaHp','40702TaMrOY','voice','../../database/Settings','djRole','Shuffles\x20the\x20Queue','**:boom:\x20Cleared...\x20:stop_button:**','1yzAUGi','findOne','1lHkxlk','selfDeaf'];const a34_0x3bd182=a34_0x155f;(function(_0x4adc77,_0x69978f){const _0x6a4672=a34_0x155f;while(!![]){try{const _0x11e95a=parseInt(_0x6a4672(0x1a5))+parseInt(_0x6a4672(0x180))+-parseInt(_0x6a4672(0x18b))*-parseInt(_0x6a4672(0x181))+-parseInt(_0x6a4672(0x191))+-parseInt(_0x6a4672(0x18c))*parseInt(_0x6a4672(0x19a))+-parseInt(_0x6a4672(0x186))*parseInt(_0x6a4672(0x193))+parseInt(_0x6a4672(0x19c))*parseInt(_0x6a4672(0x194));if(_0x11e95a===_0x69978f)break;else _0x4adc77['push'](_0x4adc77['shift']());}catch(_0x27b91c){_0x4adc77['push'](_0x4adc77['shift']());}}}(a34_0x69c6,0x464c4));function a34_0x155f(_0x573e40,_0x490b02){return a34_0x155f=function(_0x69c67f,_0x155fe7){_0x69c67f=_0x69c67f-0x180;let _0x20c2c9=a34_0x69c6[_0x69c67f];return _0x20c2c9;},a34_0x155f(_0x573e40,_0x490b02);}const {Command}=require('easy-djs-commandhandler'),Settings=require(a34_0x3bd182(0x196));module[a34_0x3bd182(0x1a2)]=new Command({'name':a34_0x3bd182(0x1a8),'category':a34_0x3bd182(0x188),'aliases':[a34_0x3bd182(0x1a6),'random'],'description':a34_0x3bd182(0x198),'usage':'shuffle'})['execute']((_0x33907f,_0x1dc247,_0x4ffd8b,_0x144aaa,_0x328428,_0x5aefe6)=>{const _0xec9347=a34_0x3bd182,{channel:_0x24eec3}=_0x1dc247['member'][_0xec9347(0x195)];if(!_0x24eec3)return _0x1dc247[_0xec9347(0x189)][_0xec9347(0x187)](_0xec9347(0x184));Settings[_0xec9347(0x19b)]({'guildID':_0x1dc247[_0xec9347(0x1a1)]['id']},async(_0x44659c,_0x2b81cd)=>{const _0x380e5f=_0xec9347;if(_0x44659c)console[_0x380e5f(0x190)](_0x44659c);if(_0x2b81cd){if(_0x2b81cd[_0x380e5f(0x197)]&&_0x1dc247[_0x380e5f(0x1a1)][_0x380e5f(0x18e)][_0x380e5f(0x1a0)][_0x380e5f(0x18a)](_0x2b81cd[_0x380e5f(0x197)])){if(!_0x1dc247['author'][_0x380e5f(0x18e)]['has'](_0x2b81cd[_0x380e5f(0x197)]))return _0x1dc247['reply']({'embed':{'description':':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!'}});}}});if(_0x1dc247[_0xec9347(0x1a7)]['voice'][_0xec9347(0x19d)])return _0x1dc247[_0xec9347(0x189)][_0xec9347(0x187)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x241622=_0x1dc247[_0xec9347(0x1a1)]['me'][_0xec9347(0x195)][_0xec9347(0x189)],_0x1bfb15=_0x33907f[_0xec9347(0x185)][_0xec9347(0x18d)][_0xec9347(0x18a)](_0x1dc247[_0xec9347(0x1a1)]['id']);if(!_0x1bfb15||!_0x241622)return _0x1dc247[_0xec9347(0x189)][_0xec9347(0x187)](_0xec9347(0x19f));if(!_0x1bfb15[_0xec9347(0x1a4)]<0x1)return _0x1dc247['channel'][_0xec9347(0x187)](_0xec9347(0x19f));if(_0x1bfb15&&_0x24eec3['id']!==_0x1bfb15[_0xec9347(0x18f)])return _0x1dc247[_0xec9347(0x189)]['send'](_0xec9347(0x19e));return _0x1bfb15&&_0x241622&&_0x24eec3['id']!==_0x241622['id']&&_0x1bfb15[_0xec9347(0x183)](),_0x1bfb15['set'](_0xec9347(0x192),_0x1bfb15[_0xec9347(0x1a3)][_0xec9347(0x182)](_0x36a66b=>_0x36a66b)),_0x1bfb15[_0xec9347(0x1a3)][_0xec9347(0x1a8)](),_0x1dc247['channel']['send'](_0xec9347(0x199));});