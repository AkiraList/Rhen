const a42_0x5e03=['destroy','1224023skOBgW','3irPGVp','queue','Pauses\x20the\x20current\x20playing\x20track','406016vkIleb','channel','241797hVszKD','voice','666218FZVtPF',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','manager','**:x:\x20The\x20player\x20is\x20already\x20paused**','playing','current','stop','85188ImfAtZ','get','9BwUZXG','guild','pause','877568ykvmEH','execute','send','selfDeaf',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','exports','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','member','508237PyUHrF'];const a42_0x719618=a42_0x2d29;function a42_0x2d29(_0x32fec5,_0x1563cd){return a42_0x2d29=function(_0x5e039a,_0x2d2930){_0x5e039a=_0x5e039a-0x15d;let _0x464a7d=a42_0x5e03[_0x5e039a];return _0x464a7d;},a42_0x2d29(_0x32fec5,_0x1563cd);}(function(_0x14057c,_0x1653ab){const _0x31be3c=a42_0x2d29;while(!![]){try{const _0x1d148c=-parseInt(_0x31be3c(0x179))+parseInt(_0x31be3c(0x15d))*-parseInt(_0x31be3c(0x162))+-parseInt(_0x31be3c(0x164))+-parseInt(_0x31be3c(0x160))+-parseInt(_0x31be3c(0x16d))*-parseInt(_0x31be3c(0x16b))+parseInt(_0x31be3c(0x170))+parseInt(_0x31be3c(0x17b));if(_0x1d148c===_0x1653ab)break;else _0x14057c['push'](_0x14057c['shift']());}catch(_0xcf69d6){_0x14057c['push'](_0x14057c['shift']());}}}(a42_0x5e03,0x894f5));const {Command}=require('easy-djs-commandhandler');module[a42_0x719618(0x176)]=new Command({'name':'pause','category':'Song','aliases':[a42_0x719618(0x16a)],'description':a42_0x719618(0x15f),'usage':'pause'})[a42_0x719618(0x171)]((_0x5b39cf,_0x54d2dd,_0x3f0299,_0x3d95a5,_0x214a45,_0x23c444)=>{const _0x3925bb=a42_0x719618,{channel:_0x1d0e9c}=_0x54d2dd[_0x3925bb(0x178)][_0x3925bb(0x163)];if(!_0x1d0e9c)return _0x54d2dd[_0x3925bb(0x161)]['send'](_0x3925bb(0x174));if(_0x54d2dd['member'][_0x3925bb(0x163)][_0x3925bb(0x173)])return _0x54d2dd[_0x3925bb(0x161)][_0x3925bb(0x172)](_0x3925bb(0x165));const _0x673fc=_0x54d2dd[_0x3925bb(0x16e)]['me'][_0x3925bb(0x163)][_0x3925bb(0x161)],_0xce6b3a=_0x5b39cf[_0x3925bb(0x166)]['players'][_0x3925bb(0x16c)](_0x54d2dd[_0x3925bb(0x16e)]['id']);if(!_0xce6b3a||!_0x673fc)return _0x54d2dd[_0x3925bb(0x161)]['send'](_0x3925bb(0x175));if(!_0xce6b3a[_0x3925bb(0x15e)]||!_0xce6b3a[_0x3925bb(0x15e)][_0x3925bb(0x169)])return _0x54d2dd[_0x3925bb(0x161)][_0x3925bb(0x172)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(_0xce6b3a&&_0x1d0e9c['id']!==_0xce6b3a['voiceChannel'])return _0x54d2dd[_0x3925bb(0x161)][_0x3925bb(0x172)](_0x3925bb(0x177));_0xce6b3a&&_0x673fc&&_0x1d0e9c['id']!==_0x673fc['id']&&_0xce6b3a[_0x3925bb(0x17a)]();if(!_0xce6b3a[_0x3925bb(0x168)])return _0x54d2dd[_0x3925bb(0x161)]['send'](_0x3925bb(0x167));return _0xce6b3a[_0x3925bb(0x16f)](!![]),_0x54d2dd[_0x3925bb(0x161)]['send']('**Paused\x20:pause_button:**');});