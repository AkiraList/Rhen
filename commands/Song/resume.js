const a49_0x46a5=['586bxpZrt','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','roles','41585IEsGMp','res','voiceChannel',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&','reply','has','>]\x20to\x20use\x20this\x20command!','channel','10jDmYsM','123108PhaEPN','destroy','djRole','cache','**:x:\x20The\x20player\x20is\x20not\x20paused**','playing','voice','get','847SXAdxj','949894redHnk','member','execute',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','**:play_pause:\x20Resuming\x20:thumbsup:**','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','2iSVNoS','current','Resumes\x20paused\x20music','selfDeaf','continue','1598562xHDALc','exports','findOne','1329GvbJaj','guild','981213hWlgmX','send','easy-djs-commandhandler','manager','1136GDcSBL'];const a49_0x13bc65=a49_0x83c6;function a49_0x83c6(_0x1c53d0,_0x82b20e){return a49_0x83c6=function(_0x46a56,_0x83c6b7){_0x46a56=_0x46a56-0x12f;let _0x1a1e3b=a49_0x46a5[_0x46a56];return _0x1a1e3b;},a49_0x83c6(_0x1c53d0,_0x82b20e);}(function(_0x4201bd,_0x5ebd91){const _0x63e41a=a49_0x83c6;while(!![]){try{const _0x5179c5=parseInt(_0x63e41a(0x140))*parseInt(_0x63e41a(0x158))+parseInt(_0x63e41a(0x149))*parseInt(_0x63e41a(0x148))+-parseInt(_0x63e41a(0x138))+parseInt(_0x63e41a(0x133))+-parseInt(_0x63e41a(0x136))*parseInt(_0x63e41a(0x13c))+parseInt(_0x63e41a(0x151))*-parseInt(_0x63e41a(0x13d))+parseInt(_0x63e41a(0x152));if(_0x5179c5===_0x5ebd91)break;else _0x4201bd['push'](_0x4201bd['shift']());}catch(_0x189374){_0x4201bd['push'](_0x4201bd['shift']());}}}(a49_0x46a5,0xd5b8f));const {Command}=require(a49_0x13bc65(0x13a)),Settings=require('../../database/Settings');module[a49_0x13bc65(0x134)]=new Command({'name':'resume','category':'Song','aliases':[a49_0x13bc65(0x132),'re',a49_0x13bc65(0x141)],'description':a49_0x13bc65(0x130),'usage':'resume'})[a49_0x13bc65(0x154)]((_0x1e353c,_0x3ead92,_0x4af7b2,_0x38e44e,_0xa15390,_0x282052)=>{const _0x526d86=a49_0x13bc65,{channel:_0x15adf0}=_0x3ead92[_0x526d86(0x153)]['voice'];if(!_0x15adf0)return _0x3ead92[_0x526d86(0x147)][_0x526d86(0x139)](_0x526d86(0x155));Settings[_0x526d86(0x135)]({'guildID':_0x3ead92[_0x526d86(0x137)]['id']},async(_0x1e128,_0x1c2ae7)=>{const _0xe81e76=_0x526d86;if(_0x1e128)console['error'](_0x1e128);if(_0x1c2ae7){if(_0x1c2ae7[_0xe81e76(0x14b)]&&_0x3ead92[_0xe81e76(0x137)][_0xe81e76(0x13f)][_0xe81e76(0x14c)][_0xe81e76(0x150)](_0x1c2ae7[_0xe81e76(0x14b)])){if(!_0x3ead92[_0xe81e76(0x153)][_0xe81e76(0x13f)][_0xe81e76(0x14c)][_0xe81e76(0x145)](_0x1c2ae7['djRole'])){_0x3ead92[_0xe81e76(0x144)]({'embed':{'description':_0xe81e76(0x143)+_0x1c2ae7[_0xe81e76(0x14b)]+_0xe81e76(0x146)}});return;}}}if(_0x3ead92['member']['voice'][_0xe81e76(0x131)])return _0x3ead92[_0xe81e76(0x147)]['send'](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x53caa2=_0x3ead92[_0xe81e76(0x137)]['me'][_0xe81e76(0x14f)][_0xe81e76(0x147)],_0x39dac5=_0x1e353c[_0xe81e76(0x13b)]['players'][_0xe81e76(0x150)](_0x3ead92[_0xe81e76(0x137)]['id']);if(!_0x39dac5||!_0x53caa2)return _0x3ead92['channel'][_0xe81e76(0x139)](_0xe81e76(0x13e));if(!_0x39dac5[_0xe81e76(0x12f)]<0x1)return _0x3ead92[_0xe81e76(0x147)]['send'](_0xe81e76(0x13e));if(_0x39dac5&&_0x15adf0['id']!==_0x39dac5[_0xe81e76(0x142)])return _0x3ead92['channel'][_0xe81e76(0x139)](_0xe81e76(0x157));_0x39dac5&&_0x53caa2&&_0x15adf0['id']!==_0x53caa2['id']&&_0x39dac5[_0xe81e76(0x14a)]();if(_0x39dac5[_0xe81e76(0x14e)])return _0x3ead92[_0xe81e76(0x147)][_0xe81e76(0x139)](_0xe81e76(0x14d));return _0x39dac5['pause'](![]),_0x3ead92[_0xe81e76(0x147)][_0xe81e76(0x139)](_0xe81e76(0x156));});});