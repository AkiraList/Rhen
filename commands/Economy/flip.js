const a3_0x3f57=['discord.js','```','setTitle','569279elSHgI','random','\x20coins\x20:frowning2:','2843326czCJfa','send','988714XYgBYo','You\x20got\x20','❌\x20ERROR\x20|\x20An\x20error\x20occurred','wrongcolor',',\x20so\x20you\x20won\x20','You\x20don\x27t\x20have\x20enough\x20coins!','setDescription','cwd','/botconfig/config.json','log','setFooter','setColor','bgRed','findOne','27JUmtFF','catch','43702deiFXr','floor','1bgIaRK','mongoose','Economy','109689qzcoXD','\x20coins\x20:smile:','save','An\x20Economy\x20Command','3dyQtUj','2EFToKQ','channel','stack','flip\x20<amount>','You\x20need\x20to\x20specify\x20an\x20ammount','exports','footericon','flip','905820jhJcng','footertext','coins','reply','480068EQvZdE','error','author','../../botconfig/embed.json'];const a3_0x5da3a1=a3_0x4558;function a3_0x4558(_0x2ea3a3,_0x197cce){return a3_0x4558=function(_0x3f57d7,_0x455838){_0x3f57d7=_0x3f57d7-0x1cf;let _0x3f9d67=a3_0x3f57[_0x3f57d7];return _0x3f9d67;},a3_0x4558(_0x2ea3a3,_0x197cce);}(function(_0xc22bcc,_0x12d598){const _0x138acb=a3_0x4558;while(!![]){try{const _0x53f028=parseInt(_0x138acb(0x1d4))*-parseInt(_0x138acb(0x1d0))+parseInt(_0x138acb(0x1dd))+parseInt(_0x138acb(0x1fb))*-parseInt(_0x138acb(0x1fd))+-parseInt(_0x138acb(0x1ed))+parseInt(_0x138acb(0x1ff))*parseInt(_0x138acb(0x1e1))+-parseInt(_0x138acb(0x1e8))*parseInt(_0x138acb(0x1d5))+parseInt(_0x138acb(0x1eb));if(_0x53f028===_0x12d598)break;else _0xc22bcc['push'](_0xc22bcc['shift']());}catch(_0x1411d4){_0xc22bcc['push'](_0xc22bcc['shift']());}}}(a3_0x3f57,0x90c19));const {MessageEmbed,APIMessage}=require(a3_0x5da3a1(0x1e5)),config=require(process[a3_0x5da3a1(0x1f4)]()+a3_0x5da3a1(0x1f5)),ee=require(a3_0x5da3a1(0x1e4)),mongoose=require(a3_0x5da3a1(0x200)),Coins=require('../../database/coins'),{Command}=require('easy-djs-commandhandler');module[a3_0x5da3a1(0x1da)]=new Command({'name':a3_0x5da3a1(0x1dc),'category':a3_0x5da3a1(0x1cf),'aliases':[],'cooldown':0x4,'usage':a3_0x5da3a1(0x1d8),'nsfw':![],'description':a3_0x5da3a1(0x1d3),'run':async(_0x2de7a1,_0x23363b,_0x268c12,_0x30c785,_0x2be151)=>{const _0x283531=a3_0x5da3a1;if(!Number(_0x268c12[0x0]))return _0x23363b['channel'][_0x283531(0x1ec)](_0x283531(0x1d9));let _0x2495b8=_0x23363b['author'];try{let _0x393880=Math[_0x283531(0x1fe)](Math[_0x283531(0x1e9)]()*Math[_0x283531(0x1fe)](0x64));Coins[_0x283531(0x1fa)]({'userID':_0x23363b['author']['id']},(_0x5da69e,_0x168806)=>{const _0x49fa18=_0x283531;if(_0x5da69e)console[_0x49fa18(0x1e2)](_0x5da69e);if(!_0x168806){const _0xdf11ca=new Coins({'_id':mongoose['Types']['ObjectId'](),'userID':_0x23363b[_0x49fa18(0x1e3)]['id'],'coins':0x0});return _0xdf11ca[_0x49fa18(0x1d2)](),_0x23363b[_0x49fa18(0x1e0)](_0x49fa18(0x1f2));}else{if(_0x168806['coins']<parseInt(_0x268c12[0x0]))return _0x23363b[_0x49fa18(0x1e0)](_0x49fa18(0x1f2));else _0x393880<0x32?(_0x168806[_0x49fa18(0x1df)]=parseInt(_0x168806[_0x49fa18(0x1df)])-parseInt(_0x268c12[0x0]),_0x168806[_0x49fa18(0x1d2)]()[_0x49fa18(0x1fc)](_0x2a82bd=>console[_0x49fa18(0x1e2)](_0x2a82bd)),_0x23363b[_0x49fa18(0x1d6)][_0x49fa18(0x1ec)](_0x49fa18(0x1ee)+_0x393880+',\x20so\x20you\x20lost\x20'+parseInt(_0x268c12[0x0])+_0x49fa18(0x1ea))):(_0x168806['coins']=parseInt(_0x168806[_0x49fa18(0x1df)])+parseInt(_0x268c12[0x0]),_0x168806[_0x49fa18(0x1d2)]()[_0x49fa18(0x1fc)](_0x51b1aa=>console[_0x49fa18(0x1e2)](_0x51b1aa)),_0x23363b[_0x49fa18(0x1d6)][_0x49fa18(0x1ec)]('Woo\x20hoo!\x20You\x20got\x20'+_0x393880+_0x49fa18(0x1f1)+parseInt(_0x268c12[0x0])+_0x49fa18(0x1d1)));}});}catch(_0x9ad1b3){return console[_0x283531(0x1f6)](String(_0x9ad1b3[_0x283531(0x1d7)])[_0x283531(0x1f9)]),_0x23363b['channel'][_0x283531(0x1ec)](new MessageEmbed()[_0x283531(0x1f8)](ee[_0x283531(0x1f0)])[_0x283531(0x1f7)](ee[_0x283531(0x1de)],ee[_0x283531(0x1db)])[_0x283531(0x1e7)](_0x283531(0x1ef))[_0x283531(0x1f3)](_0x283531(0x1e6)+_0x9ad1b3[_0x283531(0x1d7)]+_0x283531(0x1e6)));}}});