const a7_0x18c5=['ObjectId','2BqPbOM','172NxZBwn','channel','An\x20Economy\x20Command','execute','1239568URhdOx','Economy','Types','setFooter','coins','```','discord.js','613RaktYu','You\x20have\x20Earned\x20your\x20paycheck\x20of\x20250\x20coins!','1411040RwrGTo','stack','Working:','1811595ABhpKl','1700240lFwguw','setTitle','footericon','setColor','/botconfig/config.json','catch','easy-djs-commandhandler','../../botconfig/embed.json','797wvuWYn','exports','1513tKXnYn','random','send','error','mongoose','❌\x20ERROR\x20|\x20An\x20error\x20occurred','floor','wrongcolor','addField','save','bank','bgRed','819706bjsTzg'];const a7_0x3d77c6=a7_0x462c;function a7_0x462c(_0x1c9478,_0x5eb90d){return a7_0x462c=function(_0x18c502,_0x462c01){_0x18c502=_0x18c502-0x101;let _0x49b176=a7_0x18c5[_0x18c502];return _0x49b176;},a7_0x462c(_0x1c9478,_0x5eb90d);}(function(_0x2fd511,_0x468d29){const _0x34f38c=a7_0x462c;while(!![]){try{const _0x512c9e=-parseInt(_0x34f38c(0x114))+-parseInt(_0x34f38c(0x11d))*parseInt(_0x34f38c(0x10f))+parseInt(_0x34f38c(0x111))+-parseInt(_0x34f38c(0x108))+-parseInt(_0x34f38c(0x11f))*parseInt(_0x34f38c(0x104))+parseInt(_0x34f38c(0x101))*parseInt(_0x34f38c(0x103))+parseInt(_0x34f38c(0x115));if(_0x512c9e===_0x468d29)break;else _0x2fd511['push'](_0x2fd511['shift']());}catch(_0x59797f){_0x2fd511['push'](_0x2fd511['shift']());}}}(a7_0x18c5,0xe81cc));const {MessageEmbed,APIMessage}=require(a7_0x3d77c6(0x10e)),config=require(process['cwd']()+a7_0x3d77c6(0x119)),ee=require(a7_0x3d77c6(0x11c)),mongoose=require(a7_0x3d77c6(0x123)),{Command}=require(a7_0x3d77c6(0x11b));module[a7_0x3d77c6(0x11e)]=new Command({'name':'work','category':a7_0x3d77c6(0x109),'aliases':[],'cooldown':0x1e,'usage':'work','nsfw':![],'description':a7_0x3d77c6(0x106)})[a7_0x3d77c6(0x107)]((_0x3a446b,_0x31ea95,_0x8d1fd4,_0x5efa81,_0x4f146b,_0x12bf16)=>{const _0x15ac8a=a7_0x3d77c6;try{const _0x471e8d=require('../../database/coins');_0x471e8d['findOne']({'userID':_0x5efa81['id']},(_0x52c3d4,_0x11aff9)=>{const _0x418db4=a7_0x462c;if(_0x52c3d4)console[_0x418db4(0x122)](_0x52c3d4);if(!_0x11aff9){const _0xf1ed88=new _0x471e8d({'_id':mongoose[_0x418db4(0x10a)][_0x418db4(0x102)](),'userID':_0x5efa81['id'],'coins':parseInt(0xfa),'bank':parseInt(0x0)});_0xf1ed88[_0x418db4(0x128)]()[_0x418db4(0x11a)](_0x599004=>console[_0x418db4(0x122)](_0x599004));}else _0x11aff9[_0x418db4(0x10c)]=parseInt(_0x11aff9[_0x418db4(0x10c)])+parseInt(0xfa),_0x11aff9[_0x418db4(0x129)]=parseInt(_0x11aff9[_0x418db4(0x129)])+parseInt(0x0),_0x11aff9['save']()[_0x418db4(0x11a)](_0x114d9a=>console['error'](_0x114d9a));const _0x38e92b=new MessageEmbed()[_0x418db4(0x118)](Math[_0x418db4(0x125)](Math[_0x418db4(0x120)]()*0xffffff))[_0x418db4(0x127)](_0x418db4(0x113),_0x418db4(0x110));_0x31ea95[_0x418db4(0x105)][_0x418db4(0x121)]({'embed':_0x38e92b});});}catch(_0x241e8d){return console['log'](String(_0x241e8d[_0x15ac8a(0x112)])[_0x15ac8a(0x12a)]),_0x31ea95[_0x15ac8a(0x105)][_0x15ac8a(0x121)](new MessageEmbed()[_0x15ac8a(0x118)](ee[_0x15ac8a(0x126)])[_0x15ac8a(0x10b)](ee['footertext'],ee[_0x15ac8a(0x117)])[_0x15ac8a(0x116)](_0x15ac8a(0x124))['setDescription']('```'+_0x241e8d['stack']+_0x15ac8a(0x10d)));}});