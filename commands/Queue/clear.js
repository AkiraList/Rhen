const a31_0x1b3b=['send','cache','762900xlcNfc','97502suBDtZ','454gkghmZ','current','clearqu','3SLdqfi','452kGQYkH','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','clearq','Queue','1179868FvFSgd','findOne','manager','member','easy-djs-commandhandler','reply','**:boom:\x20Cleared...\x20:stop_button:**','29042oWqpkZ','channel','clearqueue','clear','queue','has',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','741067prXELZ','djRole','voice','selfDeaf','roles','execute','6sCCWvj','../database/Settings','guild','617547znYqHR','voiceChannel'];const a31_0x4dae5a=a31_0x200b;function a31_0x200b(_0x4a16a1,_0x4fda93){return a31_0x200b=function(_0x1b3bec,_0x200b98){_0x1b3bec=_0x1b3bec-0xae;let _0x1c2df4=a31_0x1b3b[_0x1b3bec];return _0x1c2df4;},a31_0x200b(_0x4a16a1,_0x4fda93);}(function(_0xc46244,_0x2d35ac){const _0x3813fb=a31_0x200b;while(!![]){try{const _0x40fb28=parseInt(_0x3813fb(0xcb))+parseInt(_0x3813fb(0xb0))*parseInt(_0x3813fb(0xd1))+parseInt(_0x3813fb(0xc2))+parseInt(_0x3813fb(0xbb))*-parseInt(_0x3813fb(0xaf))+-parseInt(_0x3813fb(0xc8))*parseInt(_0x3813fb(0xd0))+parseInt(_0x3813fb(0xcf))+-parseInt(_0x3813fb(0xb4));if(_0x40fb28===_0x2d35ac)break;else _0xc46244['push'](_0xc46244['shift']());}catch(_0x32d78b){_0xc46244['push'](_0xc46244['shift']());}}}(a31_0x1b3b,0x73e5c));const {Command}=require(a31_0x4dae5a(0xb8)),Settings=require(a31_0x4dae5a(0xc9));module['exports']=new Command({'name':'clear','category':a31_0x4dae5a(0xb3),'aliases':['clearqueue',a31_0x4dae5a(0xae),a31_0x4dae5a(0xb2),'cl'],'description':'Clears\x20the\x20whole\x20queue','usage':a31_0x4dae5a(0xbd)})[a31_0x4dae5a(0xc7)]((_0x30965b,_0x128321,_0x35b1aa,_0x590551,_0x3cc3a2,_0x275dea)=>{const _0x2a8d74=a31_0x4dae5a,{channel:_0x4daf14}=_0x128321[_0x2a8d74(0xb7)]['voice'];if(!_0x4daf14)return _0x128321[_0x2a8d74(0xbc)]['send'](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings[_0x2a8d74(0xb5)]({'guildID':_0x128321[_0x2a8d74(0xca)]['id']},async(_0x134820,_0x6a85b5)=>{const _0x58fc15=_0x2a8d74;if(_0x134820)console['error'](_0x134820);if(_0x6a85b5){if(_0x6a85b5[_0x58fc15(0xc3)]&&_0x128321[_0x58fc15(0xca)][_0x58fc15(0xc6)][_0x58fc15(0xce)]['get'](_0x6a85b5[_0x58fc15(0xc3)])){if(!_0x128321['author'][_0x58fc15(0xc6)][_0x58fc15(0xc0)](_0x6a85b5['djRole']))return _0x128321[_0x58fc15(0xb9)]({'embed':{'description':':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!'}});}}});if(_0x128321[_0x2a8d74(0xb7)][_0x2a8d74(0xc4)][_0x2a8d74(0xc5)])return _0x128321['channel'][_0x2a8d74(0xcd)](_0x2a8d74(0xc1));const _0x4f9889=_0x128321['guild']['me']['voice'][_0x2a8d74(0xbc)],_0x3d8ce2=_0x30965b[_0x2a8d74(0xb6)]['players']['get'](_0x128321[_0x2a8d74(0xca)]['id']);if(!_0x3d8ce2||!_0x4f9889)return _0x128321[_0x2a8d74(0xbc)]['send']('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(!_0x3d8ce2[_0x2a8d74(0xd2)]<0x1)return _0x128321[_0x2a8d74(0xbc)][_0x2a8d74(0xcd)](_0x2a8d74(0xb1));if(_0x3d8ce2&&_0x4daf14['id']!==_0x3d8ce2[_0x2a8d74(0xcc)])_0x3d8ce2&&_0x4f9889&&_0x4daf14['id']!==_0x4f9889['id']&&_0x3d8ce2['destroy']();return _0x3d8ce2[_0x2a8d74(0xbf)][_0x2a8d74(0xbe)](),_0x128321['channel'][_0x2a8d74(0xcd)](_0x2a8d74(0xba));});