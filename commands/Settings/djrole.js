const a35_0x5bd9=['486626nalMRD','djrole','exports','djRole','MANAGE_ROLES','Successfully\x20set\x20DJ\x20role\x20to:\x20','156056Bjwrpm','clearqueue','445zWQYGZ','catch','7598tnZUBH','Please\x20provide\x20a\x20proper\x20djrole!','findOne','roles','1HJizDx','mongoose','cache','send','287530dDSTWk','../../database/Settings','42ApgrZP','101781Fqdrow','1164340ZYvWFX','has','ObjectId','mentions','execute','reply','You\x20need\x20`MANAGE\x20SERVER`\x20and\x20`MANAGE\x20ROLES`\x20permissions\x20to\x20use\x20this\x20command!','error','guild','1271aCiHCb','save','2RXzgfo'];const a35_0x457488=a35_0x25c9;function a35_0x25c9(_0x47775b,_0x5e459c){return a35_0x25c9=function(_0x5bd998,_0x25c9a2){_0x5bd998=_0x5bd998-0x128;let _0x374bbe=a35_0x5bd9[_0x5bd998];return _0x374bbe;},a35_0x25c9(_0x47775b,_0x5e459c);}(function(_0x41c737,_0x3510dd){const _0x2870e0=a35_0x25c9;while(!![]){try{const _0x201041=parseInt(_0x2870e0(0x144))*-parseInt(_0x2870e0(0x13c))+-parseInt(_0x2870e0(0x133))*parseInt(_0x2870e0(0x13e))+parseInt(_0x2870e0(0x135))*parseInt(_0x2870e0(0x148))+parseInt(_0x2870e0(0x129))+-parseInt(_0x2870e0(0x136))+parseInt(_0x2870e0(0x128))*-parseInt(_0x2870e0(0x140))+parseInt(_0x2870e0(0x12a));if(_0x201041===_0x3510dd)break;else _0x41c737['push'](_0x41c737['shift']());}catch(_0x2eebc4){_0x41c737['push'](_0x41c737['shift']());}}}(a35_0x5bd9,0x4c9bc));const {Command}=require('easy-djs-commandhandler'),mongoose=require(a35_0x457488(0x145)),Settings=require(a35_0x457488(0x149));module[a35_0x457488(0x138)]=new Command({'name':a35_0x457488(0x137),'category':'Settings','aliases':['setdj'],'description':'Sets\x20a\x20DJ\x20role\x20for\x20the\x20server.','usage':a35_0x457488(0x13d)})[a35_0x457488(0x12e)](async(_0x305eff,_0xaec8a4,_0x25322a,_0xfb802,_0x3cac10,_0xdfb850)=>{const _0x15672a=a35_0x457488;if(!_0xaec8a4['member']['permissions'][_0x15672a(0x12b)]([_0x15672a(0x13a),'MANAGE_GUILD'])){_0xaec8a4[_0x15672a(0x12f)](_0x15672a(0x130));return;};if(_0x25322a['length']<0x1){_0xaec8a4['reply']('Please\x20provide\x20a\x20proper\x20djrole!');return;};const _0x154874=_0xaec8a4[_0x15672a(0x12d)][_0x15672a(0x143)][0x0]||_0xaec8a4[_0x15672a(0x132)]['roles'][_0x15672a(0x146)]['get'](_0x25322a[0x0]);if(!_0x154874){_0xaec8a4[_0x15672a(0x12f)](_0x15672a(0x141));return;};Settings[_0x15672a(0x142)]({'guildID':_0xaec8a4[_0x15672a(0x132)]['id']},async(_0x5435b9,_0xe60991)=>{const _0x126bc6=_0x15672a;if(_0x5435b9)console[_0x126bc6(0x131)](_0x5435b9);if(!_0xe60991){const _0x1c96eb=new Settings({'_id':mongoose['Types'][_0x126bc6(0x12c)](),'guildID':_0xaec8a4[_0x126bc6(0x132)]['id'],'djRole':_0x154874['id']});await _0x1c96eb[_0x126bc6(0x134)](),_0xaec8a4['channel'][_0x126bc6(0x147)]({'embed':{'description':_0x126bc6(0x13b)+_0x154874}});}else _0xe60991[_0x126bc6(0x139)]=_0x154874['id'],await _0xe60991['save']()[_0x126bc6(0x13f)](_0x472dd1=>console['error'](_0x472dd1)),_0xaec8a4['channel'][_0x126bc6(0x147)]({'embed':{'description':_0x126bc6(0x13b)+_0x154874}});});});