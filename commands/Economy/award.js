const a0_0x180c=['setDescription','```','../../botconfig/embed.json','❌\x20ERROR\x20|\x20An\x20error\x20occurred','exports','You\x20must\x20mention\x20someone\x20to\x20pay\x20them!','1092LFggJI','An\x20Economy\x20Command','first','send','setColor','/botconfig/config.json','setTitle','836263GGtBlw','award\x20<user>\x20<amount>','error','findOne','setFooter','293rflWkH','author','ObjectId','COINSSS!','footertext','award','Economy','bank','stack','execute','119518BZeBwY','990247HJLDUL','random','523579776749928449','channel','You\x20need\x20to\x20specify\x20an\x20ammount','addField','6499mnzNXI','182108CnujKO','users','bgRed','save','log','../../database/coins','2606766BTivXU','catch','discord.js','coins','username','You\x20have\x20paid\x20','49JpWhWQ'];const a0_0x374ea9=a0_0x2bc0;(function(_0x2bf5a7,_0x191c07){const _0x10f0d8=a0_0x2bc0;while(!![]){try{const _0x18e3b6=-parseInt(_0x10f0d8(0x14e))+parseInt(_0x10f0d8(0x138))*parseInt(_0x10f0d8(0x144))+parseInt(_0x10f0d8(0x162))*-parseInt(_0x10f0d8(0x155))+-parseInt(_0x10f0d8(0x14f))+parseInt(_0x10f0d8(0x156))+-parseInt(_0x10f0d8(0x13f))+parseInt(_0x10f0d8(0x15c));if(_0x18e3b6===_0x191c07)break;else _0x2bf5a7['push'](_0x2bf5a7['shift']());}catch(_0x3fc71b){_0x2bf5a7['push'](_0x2bf5a7['shift']());}}}(a0_0x180c,0xce23f));const {MessageEmbed,APIMessage}=require(a0_0x374ea9(0x15e)),config=require(process['cwd']()+a0_0x374ea9(0x13d)),ee=require(a0_0x374ea9(0x165)),mongoose=require('mongoose'),{Command}=require('easy-djs-commandhandler');function a0_0x2bc0(_0x510a63,_0x397b60){return a0_0x2bc0=function(_0x180cc6,_0x2bc0ce){_0x180cc6=_0x180cc6-0x135;let _0x4e3479=a0_0x180c[_0x180cc6];return _0x4e3479;},a0_0x2bc0(_0x510a63,_0x397b60);}module[a0_0x374ea9(0x136)]=new Command({'name':a0_0x374ea9(0x149),'category':a0_0x374ea9(0x14a),'aliases':[],'cooldown':0x4,'usage':a0_0x374ea9(0x140),'nsfw':![],'description':a0_0x374ea9(0x139)})[a0_0x374ea9(0x14d)]((_0x56e960,_0x5b6c54,_0x29b980,_0x1479f0,_0x1ec52f,_0x588939)=>{const _0x20e848=a0_0x374ea9;if(_0x5b6c54[_0x20e848(0x145)]['id']!==_0x20e848(0x151))return;try{const _0x20b300=require(_0x20e848(0x15b));if(!_0x29b980[0x1])return _0x5b6c54[_0x20e848(0x152)][_0x20e848(0x13b)](_0x20e848(0x153));let _0x2e444b=_0x5b6c54['mentions'][_0x20e848(0x157)][_0x20e848(0x13a)]();if(!_0x2e444b)return _0x5b6c54[_0x20e848(0x152)]['send'](_0x20e848(0x137));_0x20b300[_0x20e848(0x142)]({'userID':_0x2e444b['id']},(_0x11701b,_0xa8ce2f)=>{const _0x4e63aa=_0x20e848;if(_0x11701b)console['error'](_0x11701b);if(!_0xa8ce2f){const _0x356f56=new _0x20b300({'_id':mongoose['Types'][_0x4e63aa(0x146)](),'userID':_0x2e444b['id'],'coins':parseInt(_0x29b980[0x1]),'bank':parseInt(_0x29b980[0x2]||0x0)});_0x356f56[_0x4e63aa(0x159)]()[_0x4e63aa(0x15d)](_0x23579e=>console[_0x4e63aa(0x141)](_0x23579e));}else _0xa8ce2f[_0x4e63aa(0x15f)]=parseInt(_0xa8ce2f[_0x4e63aa(0x15f)])+parseInt(_0x29b980[0x1]),_0xa8ce2f[_0x4e63aa(0x14b)]=parseInt(_0xa8ce2f[_0x4e63aa(0x14b)])+parseInt(_0x29b980[0x2]||0x0),_0xa8ce2f[_0x4e63aa(0x159)]()[_0x4e63aa(0x15d)](_0x4af9ef=>console['error'](_0x4af9ef));const _0x31e454=new MessageEmbed()[_0x4e63aa(0x13c)](Math['floor'](Math[_0x4e63aa(0x150)]()*0xffffff))[_0x4e63aa(0x154)](_0x4e63aa(0x147),_0x4e63aa(0x161)+_0x2e444b[_0x4e63aa(0x160)]+'\x20'+_0x29b980[0x1]+'\x20coins!');_0x5b6c54[_0x4e63aa(0x152)]['send']({'embed':_0x31e454});});}catch(_0x596dea){return console[_0x20e848(0x15a)](String(_0x596dea[_0x20e848(0x14c)])[_0x20e848(0x158)]),_0x5b6c54[_0x20e848(0x152)][_0x20e848(0x13b)](new MessageEmbed()[_0x20e848(0x13c)](ee['wrongcolor'])[_0x20e848(0x143)](ee[_0x20e848(0x148)],ee['footericon'])[_0x20e848(0x13e)](_0x20e848(0x135))[_0x20e848(0x163)](_0x20e848(0x164)+_0x596dea[_0x20e848(0x14c)]+_0x20e848(0x164)));}});