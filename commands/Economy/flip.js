const a3_0x1de4=['Types',',\x20so\x20you\x20won\x20','setDescription','author','stack','233234WANMag','37hJbBUs','setColor','findOne','You\x20don\x27t\x20have\x20enough\x20coins!','An\x20Economy\x20Command','flip\x20<amount>','18014qnCgOd','footericon','12StEuBD','flip','send','Woo\x20hoo!\x20You\x20got\x20','cwd','\x20coins\x20:smile:','You\x20got\x20','error','```','4085pqcgbU','857QUpBYb','setFooter','59695kKQmcp','floor','139uYrAei','ObjectId','reply','coins','15XyOCYX','log','save','485681TKkDUZ','random','3551XrIpgv','channel','catch','setTitle','../../database/coins','easy-djs-commandhandler',',\x20so\x20you\x20lost\x20'];const a3_0x18a6fb=a3_0x16b7;function a3_0x16b7(_0x4a7f15,_0x4e08b1){return a3_0x16b7=function(_0x1de4bb,_0x16b7c1){_0x1de4bb=_0x1de4bb-0x146;let _0x2fdf0c=a3_0x1de4[_0x1de4bb];return _0x2fdf0c;},a3_0x16b7(_0x4a7f15,_0x4e08b1);}(function(_0x57bff4,_0x3e7a4e){const _0x4093f7=a3_0x16b7;while(!![]){try{const _0x56f7ca=-parseInt(_0x4093f7(0x14a))+parseInt(_0x4093f7(0x158))+parseInt(_0x4093f7(0x161))*parseInt(_0x4093f7(0x16a))+parseInt(_0x4093f7(0x159))*parseInt(_0x4093f7(0x14c))+parseInt(_0x4093f7(0x16b))*parseInt(_0x4093f7(0x16f))+-parseInt(_0x4093f7(0x16d))+-parseInt(_0x4093f7(0x15f))*-parseInt(_0x4093f7(0x147));if(_0x56f7ca===_0x3e7a4e)break;else _0x57bff4['push'](_0x57bff4['shift']());}catch(_0x178bd8){_0x57bff4['push'](_0x57bff4['shift']());}}}(a3_0x1de4,0x3ee3e));const {MessageEmbed,APIMessage}=require('discord.js'),config=require(process[a3_0x18a6fb(0x165)]()+'/botconfig/config.json'),ee=require('../../botconfig/embed.json'),mongoose=require('mongoose'),Coins=require(a3_0x18a6fb(0x150)),{Command}=require(a3_0x18a6fb(0x151));module['exports']=new Command({'name':a3_0x18a6fb(0x162),'category':'Economy','aliases':[],'cooldown':0x4,'usage':a3_0x18a6fb(0x15e),'nsfw':![],'description':a3_0x18a6fb(0x15d),'run':async(_0x400fc7,_0xb0115d,_0x476c03,_0x7a3612,_0x1032a4)=>{const _0x366935=a3_0x18a6fb;if(!Number(_0x476c03[0x0]))return _0xb0115d[_0x366935(0x14d)][_0x366935(0x163)]('You\x20need\x20to\x20specify\x20an\x20ammount');let _0x42b775=_0xb0115d[_0x366935(0x156)];try{let _0x30989f=Math[_0x366935(0x16e)](Math[_0x366935(0x14b)]()*Math[_0x366935(0x16e)](0x64));Coins[_0x366935(0x15b)]({'userID':_0xb0115d['author']['id']},(_0xdfa742,_0x421f4e)=>{const _0x550b23=_0x366935;if(_0xdfa742)console[_0x550b23(0x168)](_0xdfa742);if(!_0x421f4e){const _0x2b4a3f=new Coins({'_id':mongoose[_0x550b23(0x153)][_0x550b23(0x170)](),'userID':_0xb0115d[_0x550b23(0x156)]['id'],'coins':0x0});return _0x2b4a3f[_0x550b23(0x149)](),_0xb0115d[_0x550b23(0x171)](_0x550b23(0x15c));}else{if(_0x421f4e[_0x550b23(0x146)]<parseInt(_0x476c03[0x0]))return _0xb0115d[_0x550b23(0x171)](_0x550b23(0x15c));else _0x30989f<0x32?(_0x421f4e[_0x550b23(0x146)]=parseInt(_0x421f4e[_0x550b23(0x146)])-parseInt(_0x476c03[0x0]),_0x421f4e[_0x550b23(0x149)]()[_0x550b23(0x14e)](_0x334091=>console[_0x550b23(0x168)](_0x334091)),_0xb0115d[_0x550b23(0x14d)][_0x550b23(0x163)](_0x550b23(0x167)+_0x30989f+_0x550b23(0x152)+parseInt(_0x476c03[0x0])+'\x20coins\x20:frowning2:')):(_0x421f4e['coins']=parseInt(_0x421f4e[_0x550b23(0x146)])+parseInt(_0x476c03[0x0]),_0x421f4e[_0x550b23(0x149)]()[_0x550b23(0x14e)](_0x319984=>console[_0x550b23(0x168)](_0x319984)),_0xb0115d[_0x550b23(0x14d)][_0x550b23(0x163)](_0x550b23(0x164)+_0x30989f+_0x550b23(0x154)+parseInt(_0x476c03[0x0])+_0x550b23(0x166)));}});}catch(_0x1e1101){return console[_0x366935(0x148)](String(_0x1e1101[_0x366935(0x157)])['bgRed']),_0xb0115d['channel'][_0x366935(0x163)](new MessageEmbed()[_0x366935(0x15a)](ee['wrongcolor'])[_0x366935(0x16c)](ee['footertext'],ee[_0x366935(0x160)])[_0x366935(0x14f)]('❌\x20ERROR\x20|\x20An\x20error\x20occurred')[_0x366935(0x155)](_0x366935(0x169)+_0x1e1101['stack']+'```'));}}});