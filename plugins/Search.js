function _0x68cb(_0x1edc63,_0xbf58aa){const _0xb04769=_0xb047();return _0x68cb=function(_0x68cb3d,_0x49a98e){_0x68cb3d=_0x68cb3d-0x72;let _0x1026b3=_0xb04769[_0x68cb3d];return _0x1026b3;},_0x68cb(_0x1edc63,_0xbf58aa);}const _0x17d04a=_0x68cb;(function(_0x1a394b,_0x3bc2ee){const _0x2a19f0=_0x68cb,_0x4c8e2c=_0x1a394b();while(!![]){try{const _0x4bd9e5=-parseInt(_0x2a19f0(0x108))/0x1+-parseInt(_0x2a19f0(0x144))/0x2+-parseInt(_0x2a19f0(0x106))/0x3*(parseInt(_0x2a19f0(0x11a))/0x4)+parseInt(_0x2a19f0(0x123))/0x5*(parseInt(_0x2a19f0(0x117))/0x6)+parseInt(_0x2a19f0(0x141))/0x7*(parseInt(_0x2a19f0(0xd7))/0x8)+parseInt(_0x2a19f0(0x14a))/0x9+parseInt(_0x2a19f0(0x8d))/0xa;if(_0x4bd9e5===_0x3bc2ee)break;else _0x4c8e2c['push'](_0x4c8e2c['shift']());}catch(_0x1395f7){_0x4c8e2c['push'](_0x4c8e2c['shift']());}}}(_0xb047,0x94262));const moment=require('moment-timezone'),{fetchJson,Module_Exports,tlang,getBuffer,prefix,name,fancytext,botpic}=require('../lib');let gis='';const axios=require(_0x17d04a(0xc4)),fetch=require(_0x17d04a(0xc7)),{shazam}=require(_0x17d04a(0xcb));let yts=require(_0x17d04a(0xae));Module_Exports({'kingcmd':_0x17d04a(0xac),'kingclass':_0x17d04a(0x149),'infocmd':'Finds\x20info\x20about\x20song','kingpath':__filename},async(_0xfa9769,_0x5a10ac,_0x35a8b5)=>{const _0x1f835c=_0x17d04a;let _0x37a97c=_0x5a10ac[_0x1f835c(0x88)][_0x1f835c(0x147)];if(!_0x5a10ac['quoted'])return _0x5a10ac['reply'](_0x1f835c(0x8c));if(!/audio/['test'](_0x37a97c))return _0x5a10ac['reply'](_0x1f835c(0xa4)+prefix+_0x1f835c(0x89));let _0x4a62d5=await _0x5a10ac[_0x1f835c(0x88)][_0x1f835c(0x14b)](),_0x40b82e=await shazam(_0x4a62d5);if(!_0x40b82e[_0x1f835c(0xab)])return _0x5a10ac[_0x1f835c(0x76)](_0x40b82e);let _0x387305=await yts(_0x40b82e['title']),_0x587f6a=_0x387305[_0x1f835c(0xea)][0x0],_0xc5d4e5=_0x1f835c(0x14f)+_0x40b82e[_0x1f835c(0xdb)]+_0x1f835c(0x11e)+_0x40b82e[_0x1f835c(0xe2)]+_0x1f835c(0x121)+prefix+_0x1f835c(0xe8)+_0x587f6a[_0x1f835c(0x130)]+'_*\x0a\x20\x20\x20',_0x18b741={'image':{'url':_0x587f6a[_0x1f835c(0x11d)]},'caption':_0xc5d4e5,'footer':tlang()[_0x1f835c(0x10f)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x40b82e[_0x1f835c(0xe2)],'body':_0x40b82e[_0x1f835c(0x11b)],'thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':''}}};await _0xfa9769[_0x1f835c(0xd2)](_0x5a10ac[_0x1f835c(0xeb)],_0x18b741,{'quoted':_0x5a10ac});}),Module_Exports({'kingcmd':'ss','shortcut':[_0x17d04a(0x99),_0x17d04a(0x10b)],'kingclass':_0x17d04a(0x149),'infocmd':_0x17d04a(0xa0),'use':'','kingpath':__filename},async(_0x5b2669,_0x5b6a4b,_0x173df3)=>{const _0x2fc63f=_0x17d04a;let _0x2e2049=0x5;try{if(!_0x173df3)return _0x5b6a4b[_0x2fc63f(0x11f)](_0x2fc63f(0xce));var _0x46cd82=_0x173df3;let _0x2ff441='https://s.vercel.app/api?url='+_0x46cd82[_0x2fc63f(0xd9)](/\bhttps?:\/\/\S+/gi)[0x0]+_0x2fc63f(0x7b),_0x7401ab=await getBuffer(_0x2ff441);return await _0x5b2669[_0x2fc63f(0xd2)](_0x5b6a4b['chat'],{'image':_0x7401ab},{'quoted':_0x5b6a4b});}catch(_0x2c0c2e){return _0x5b6a4b['reply'](_0x2fc63f(0x112));}}),Module_Exports({'kingcmd':'imdb','kingclass':_0x17d04a(0x149),'infocmd':_0x17d04a(0xff),'use':_0x17d04a(0xd8),'kingpath':__filename},async(_0x4b6975,_0x34270d,_0x5ce914)=>{const _0x11a550=_0x17d04a;if(!_0x5ce914)return _0x34270d[_0x11a550(0x11f)](_0x11a550(0x13a)+prefix+'imdb\x20kingman');try{let _0x5ece6b=await axios[_0x11a550(0xbd)](_0x11a550(0x136)+_0x5ce914+'&plot=full'),_0x5c1b91='';_0x34270d[_0x11a550(0x11f)](_0x5ece6b[_0x11a550(0x10c)]),_0x5c1b91+='⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\x0a'+_0x11a550(0x137)+_0x11a550(0xb6),_0x5c1b91+=_0x11a550(0xbf)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x139)]+'\x0a',_0x5c1b91+=_0x11a550(0x96)+_0x5ece6b[_0x11a550(0x10c)]['Year']+'\x0a',_0x5c1b91+=_0x11a550(0x80)+_0x5ece6b['data'][_0x11a550(0x153)]+'\x0a',_0x5c1b91+=_0x11a550(0x111)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x90)]+'\x0a',_0x5c1b91+='⏳Runtime\x20\x20\x20\x20:\x20'+_0x5ece6b['data'][_0x11a550(0x91)]+'\x0a',_0x5c1b91+=_0x11a550(0xb5)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x13d)]+'\x0a',_0x5c1b91+=_0x11a550(0xd6)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0xf2)]+'\x0a',_0x5c1b91+=_0x11a550(0xd3)+_0x5ece6b['data']['Writer']+'\x0a',_0x5c1b91+=_0x11a550(0xcf)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x154)]+'\x0a',_0x5c1b91+=_0x11a550(0x151)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x8b)]+'\x0a',_0x5c1b91+=_0x11a550(0x13c)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x10e)]+'\x0a',_0x5c1b91+=_0x11a550(0xbe)+_0x5ece6b[_0x11a550(0x10c)]['Country']+'\x0a',_0x5c1b91+=_0x11a550(0xe0)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0xde)]+'\x0a',_0x5c1b91+=_0x11a550(0x8f)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0xf9)]+'\x0a',_0x5c1b91+=_0x11a550(0xbb)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x133)]+'\x0a',_0x5c1b91+=_0x11a550(0xca)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0xc9)]+'\x0a',_0x5c1b91+=_0x11a550(0x95)+_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0xdd)]+'\x0a',_0x5c1b91+=name[_0x11a550(0x92)],_0x4b6975[_0x11a550(0xd2)](_0x34270d['chat'],{'image':{'url':_0x5ece6b[_0x11a550(0x10c)][_0x11a550(0x12e)]},'caption':_0x5c1b91},{'quoted':_0x34270d});}catch{_0x34270d[_0x11a550(0x11f)](_0x11a550(0x14c));}}),Module_Exports({'kingcmd':_0x17d04a(0x156),'kingclass':_0x17d04a(0x149),'infocmd':'Sends\x20weather\x20info\x20about\x20asked\x20place.','use':_0x17d04a(0xe9)},async(_0xf5f379,_0x356199,_0x1bfc01)=>{const _0x3995fd=_0x312c32;(function(_0x1a7f22,_0x3b8b2e){const _0x27a042=_0x68cb,_0x253656=_0x312c32,_0x2bc9d1=_0x1a7f22();while(!![]){try{const _0xe5fe15=-parseInt(_0x253656(0x109))/(0xd75+0x11c7+0xd*-0x267)*(parseInt(_0x253656(0x159))/(-0xa*0x1ba+0xac+-0x2*-0x84d))+-parseInt(_0x253656(0x142))/(0x785+-0x1*0xb3f+0x3bd)+parseInt(_0x253656(0x10e))/(0x17f9+0xb35+0x232a*-0x1)+-parseInt(_0x253656(0x145))/(-0x7f5+0x1*-0xe8f+0x1689)*(parseInt(_0x253656(0x121))/(0x1f35+0x1853+-0x3782))+-parseInt(_0x253656(0x127))/(-0x2b*0xc7+0x2044+0x130)*(parseInt(_0x253656(0x12b))/(-0x1349*-0x1+0x1*0x2480+-0x37c1))+parseInt(_0x253656(0x107))/(-0x1c55+-0x59*0x29+0x2a9f)+-parseInt(_0x253656(0x10a))/(0x174f+-0x19a4+0x25f)*(-parseInt(_0x253656(0x14a))/(0xdab*-0x1+0x15fd+0xa3*-0xd));if(_0xe5fe15===_0x3b8b2e)break;else _0x2bc9d1[_0x27a042(0x120)](_0x2bc9d1['shift']());}catch(_0x531214){_0x2bc9d1[_0x27a042(0x120)](_0x2bc9d1[_0x27a042(0x7d)]());}}}(_0x4c33fb,0x3cc9b*-0x1+-0x6*0xb747+0x10cc3f));if(!_0x1bfc01)return _0x356199[_0x3995fd(0x158)](_0x3995fd(0x11a)+_0x3995fd(0x132)+_0x3995fd(0x118)+prefix+(_0x3995fd(0x12d)+_0x3995fd(0x11d)));function _0x312c32(_0x197efa,_0x2102ff){const _0x4ae5ad=_0x4c33fb();return _0x312c32=function(_0x591879,_0x34231d){_0x591879=_0x591879-(-0x183f*-0x1+-0x8df+0x7*-0x20d);let _0x252440=_0x4ae5ad[_0x591879];return _0x252440;},_0x312c32(_0x197efa,_0x2102ff);}_0x356199[_0x3995fd(0x155)](_0x3995fd(0x130)+_0x3995fd(0x148)+_0x3995fd(0x13e)+_0x3995fd(0x12c)+_0x1bfc01);try{let _0x269b3d=await axios[_0x3995fd(0x14e)](_0x3995fd(0x15b)+_0x3995fd(0x128)+_0x3995fd(0x151)+_0x3995fd(0x137)+_0x3995fd(0x119)+_0x1bfc01+(_0x3995fd(0x134)+_0x3995fd(0x117)+_0x3995fd(0x12a)+_0x3995fd(0x111)+_0x3995fd(0x146)+_0x3995fd(0x15a)+_0x3995fd(0x112))),_0x1a45c2='';_0x1a45c2+=_0x3995fd(0x13a)+mztit+(_0x3995fd(0x14c)+_0x3995fd(0x129)+_0x3995fd(0x131)+_0x3995fd(0x12f)+_0x3995fd(0x11f))+fancytext(_0x3995fd(0x144)+'f*',0x7*-0x145+-0x270b*0x1+0x6d9*0x7)+'\x20'+_0x1bfc01+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x13f)+'*',-0x5*0x3c7+-0x3*0x6ff+-0x27e1*-0x1)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x10d)][_0x3995fd(0x143)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x157)+_0x3995fd(0x156),-0x47d*-0x1+-0x2*0x1061+0x1c46)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x126)][0x19+0xaaa+-0xac3][_0x3995fd(0x150)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x15d)+_0x3995fd(0x12e),0x169a+0xb82+-0x221b)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x126)][-0xf8e*0x2+-0x36+0x1a6*0x13][_0x3995fd(0x125)+'n']+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x122)+_0x3995fd(0x141),-0x233*-0x5+-0x17c8+0xcca)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x150)][_0x3995fd(0x139)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x120)+_0x3995fd(0x138),0x2b*0x65+-0x1418+-0x191*-0x2)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x150)][_0x3995fd(0x140)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x152)+'*',0x22b2*0x1+0x416*-0x4+-0x1259)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x150)][_0x3995fd(0x147)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x116)+'*',-0x25a+0x13fd+-0x7a*0x25)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x150)][_0x3995fd(0x10b)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x123)+_0x3995fd(0x15c),0x1*-0x1176+0x2*-0x9c5+0x2501)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x10f)][_0x3995fd(0x14b)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x124)+'*',0xa*-0x4b+-0x16*0x153+0x1*0x2011)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x14d)][_0x3995fd(0x115)]+'\x0a',_0x1a45c2+=_0x3995fd(0x13c)+fancytext(_0x3995fd(0x154)+_0x3995fd(0x108),0x216d*0x1+-0xfe3+-0x1189)+'\x20'+_0x269b3d[_0x3995fd(0x133)][_0x3995fd(0x14d)][_0x3995fd(0x13d)]+(_0x3995fd(0x14f)+_0x3995fd(0x11b)+_0x3995fd(0x110)+'\x20')+name[_0x3995fd(0x106)]+'*';const _0x18436a=await getBuffer(global[_0x3995fd(0x114)]);let _0x20a4fe={'image':{'url':await botpic()},'text':_0x1a45c2,'footer':tlang()[_0x3995fd(0x10c)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+Gname,'body':_0x3995fd(0x11c)+'e','thumbnail':_0x18436a,'mediaType':0x4,'mediaUrl':'','sourceUrl':''+waUrl}}};_0xf5f379[_0x3995fd(0x136)+'e'](_0x356199[_0x3995fd(0x105)],_0x20a4fe,{'quoted':_0x356199});}catch{_0x356199[_0x3995fd(0x158)](_0x3995fd(0x153)+_0x3995fd(0x149)+_0x3995fd(0x135)+_0x3995fd(0x13b)+_0x3995fd(0x113)+_0x3995fd(0x11e)+_0x3995fd(0x132));}function _0x4c33fb(){const _0xf09ff5=_0x68cb,_0x3413fc=['ric&appid=',_0xf09ff5(0xef),'weather?q=',_0xf09ff5(0xf3),'━━\x0a*𝙶𝙴','Easy\x20to\x20Us',_0xf09ff5(0x105),_0xf09ff5(0x129),_0xf09ff5(0xe3),_0xf09ff5(0x126),_0xf09ff5(0x128),_0xf09ff5(0xd4),_0xf09ff5(0xa9),_0xf09ff5(0x102),_0xf09ff5(0x9e),'weather','64771YWHcXe',_0xf09ff5(0xb9),'sɪɢᴍᴀ\x20ᴹᴰ*\x0a',_0xf09ff5(0x97),'296kRcLkx','nfo\x20Of_*\x20',_0xf09ff5(0xc5),'ion*','ᴇʀ\x20sᴇᴀʀᴄʜ*','*_Wait\x20Whi','≡┗➛\x20*ᴡᴇᴀᴛʜ',_0xf09ff5(0xa5),_0xf09ff5(0x10c),'&units=met','n\x20is\x20Inval',_0xf09ff5(0xf0),_0xf09ff5(0xd5),_0xf09ff5(0xfe),'temp','┏━━↱\x20',_0xf09ff5(0x101),'〣\x20',_0xf09ff5(0x14e),_0xf09ff5(0x104),_0xf09ff5(0xc0),_0xf09ff5(0xda),_0xf09ff5(0xf4),_0xf09ff5(0x109),_0xf09ff5(0x119),_0xf09ff5(0xc8),_0xf09ff5(0xc1),'97a212b192','pressure',_0xf09ff5(0xb0),'en\x20Locatio',_0xf09ff5(0xd0),_0xf09ff5(0x9a),_0xf09ff5(0xa7),_0xf09ff5(0x10a),_0xf09ff5(0xbd),_0xf09ff5(0xaa),_0xf09ff5(0x9f),_0xf09ff5(0x100),_0xf09ff5(0x14d),'*_Your\x20Giv',_0xf09ff5(0x12c),_0xf09ff5(0x76),'n*',_0xf09ff5(0xdf),_0xf09ff5(0x11f),'20WMgJfp',_0xf09ff5(0xb8),_0xf09ff5(0x77),_0xf09ff5(0x158),_0xf09ff5(0xba),_0xf09ff5(0xeb),_0xf09ff5(0xe5),_0xf09ff5(0x13e),'e*',_0xf09ff5(0x145),_0xf09ff5(0x81),'humidity',_0xf09ff5(0x10f),'sys','2405384TzfFHL','wind',_0xf09ff5(0x7f),_0xf09ff5(0x74),_0xf09ff5(0xbc),_0xf09ff5(0x150),_0xf09ff5(0xa1),_0xf09ff5(0x148),'*humidity'];return _0x4c33fb=function(){return _0x3413fc;},_0x4c33fb();}}),Module_Exports({'kingcmd':'horo','kingclass':_0x17d04a(0x149),'infocmd':_0x17d04a(0xec),'use':_0x17d04a(0xcc),'kingpath':__filename},async(_0x1d0b94,_0x4fd01c,_0x134bbc)=>{const _0xde0d82=_0x17d04a;if(!_0x134bbc)return _0x4fd01c[_0xde0d82(0x11f)](_0xde0d82(0x73));try{const _0x29f22d=_0xde0d82(0x83)+_0x134bbc+_0xde0d82(0xb2);fetch(_0x29f22d,{'method':_0xde0d82(0x11c)})[_0xde0d82(0xee)](_0x36e34d=>_0x36e34d[_0xde0d82(0xa8)]())[_0xde0d82(0xee)](_0x323d26=>{const _0x2ed00a=_0xde0d82,_0x243c75=_0x323d26['current_date'];console[_0x2ed00a(0xa6)](_0x243c75);let _0xc05635='';_0xc05635+='*🌟\x20Horoscope\x20of\x20\x20'+_0x134bbc+_0x2ed00a(0xfd),_0xc05635+=_0x2ed00a(0xe4)+_0x323d26[_0x2ed00a(0xf8)]+'.\x0a',_0xc05635+=_0x2ed00a(0x9b)+_0x134bbc+'.\x0a',_0xc05635+='*Lucky\x20Time:*\x20'+_0x323d26[_0x2ed00a(0x118)]+'.\x0a',_0xc05635+='*Compatibility:*\x20'+_0x323d26[_0x2ed00a(0x110)]+'.\x0a',_0xc05635+='*Lucky\x20Number:*\x20'+_0x323d26[_0x2ed00a(0x124)]+'.\x0a',_0xc05635+='*Lucky\x20Color:*\x20'+_0x323d26[_0x2ed00a(0x142)]+'.\x0a',_0xc05635+=_0x2ed00a(0x98)+_0x323d26[_0x2ed00a(0x84)]+'.\x0a',_0xc05635+=_0x2ed00a(0x75)+_0x323d26[_0x2ed00a(0xb3)]+'.\x0a',_0xc05635+=name[_0x2ed00a(0x92)],_0x4fd01c['reply'](_0xc05635);});}catch(_0xe18d8a){console[_0xde0d82(0xa6)](_0xe18d8a);}}),Module_Exports({'kingcmd':'cricket','shortcut':['cric'],'kingclass':_0x17d04a(0x149),'infocmd':'Sends\x20info\x20of\x20about\x20cricket','use':'','kingpath':__filename},async(_0x31ce8f,_0x2cf495,_0x37963a)=>{const _0x3ca942=_0x17d04a;_0x2cf495['send'](_0x3ca942(0x155));const _0x4b9454=await fetch(_0x3ca942(0x12b)),_0x1ee443=await _0x4b9454['json']();console[_0x3ca942(0xa6)](_0x1ee443);for(let _0x47e4d0=0x0;_0x47e4d0<_0x1ee443[_0x3ca942(0x10c)][_0x3ca942(0x132)];_0x47e4d0++){_0x37963a+=_0x3ca942(0x12d)+_0x47e4d0+_0x3ca942(0x7c),_0x37963a+=_0x3ca942(0xf1)+_0x1ee443[_0x3ca942(0x10c)][_0x47e4d0][_0x3ca942(0xad)],_0x37963a+=_0x3ca942(0xf5)+_0x1ee443['data'][_0x47e4d0][_0x3ca942(0xab)],_0x37963a+=_0x3ca942(0x127)+_0x1ee443[_0x3ca942(0x10c)][_0x47e4d0][_0x3ca942(0x94)],_0x37963a+=_0x3ca942(0x122)+_0x1ee443[_0x3ca942(0x10c)][_0x47e4d0][_0x3ca942(0x79)],_0x37963a+=_0x3ca942(0x86)+_0x1ee443[_0x3ca942(0x10c)][_0x47e4d0][_0x3ca942(0xcd)]+'\x0a';}return await _0x2cf495['reply'](_0x37963a);}),Module_Exports({'kingcmd':'google','shortcut':[_0x17d04a(0xc3)],'kingclass':'search\x20commands','infocmd':'Sends\x20info\x20of\x20given\x20query\x20from\x20Google\x20Search.','use':_0x17d04a(0x82),'kingpath':__filename},async(_0x1b8ae8,_0x27f3c0,_0x439131)=>{const _0x30fe7c=_0x17d04a;if(!_0x439131)return _0x27f3c0['reply'](_0x30fe7c(0xe6)+prefix+'google\x20Who\x20is\x20KING.*');let _0xc2ee7e=require(_0x30fe7c(0xc2));_0xc2ee7e({'query':_0x439131})[_0x30fe7c(0xee)](_0x23eabb=>{const _0x122a01=_0x30fe7c;let _0x592d32='*Google\x20Search\x20From:*\x20'+_0x439131+_0x122a01(0x13b);for(let _0x3ce332 of _0x23eabb){_0x592d32+=_0x122a01(0x143)+_0x3ce332[_0x122a01(0xdb)]+'\x0a',_0x592d32+=_0x122a01(0x13f)+_0x3ce332[_0x122a01(0x7e)]+'\x0a',_0x592d32+=_0x122a01(0x116)+_0x3ce332['link']+_0x122a01(0xd1);}return _0x27f3c0['reply'](_0x592d32);});}),Module_Exports({'kingcmd':_0x17d04a(0xa2),'shortcut':[_0x17d04a(0xf6)],'kingclass':_0x17d04a(0x149),'infocmd':_0x17d04a(0xa0),'use':_0x17d04a(0x146),'kingpath':__filename},async(_0x141b87,_0x6b04cf,_0x562e65)=>{const _0x1e2846=_0x17d04a;if(!_0x562e65)return _0x6b04cf['reply']('Provide\x20me\x20a\x20query!\x0a*Ex:\x20'+prefix+'image\x20crown\x20|10*');let _0x35503f={},_0x1d7005=_0x562e65[_0x1e2846(0x9d)]('|')[0x0]||_0x1e2846(0x10d),_0x3f0eb2=_0x562e65[_0x1e2846(0x9d)]('|')[0x1]||'5';try{let _0x1cbbf6=[];const _0xe2fa90={'q':_0x1d7005,'tbm':_0x1e2846(0x131),'hl':'en','gl':'in','ijn':'0'},_0x4ec778={'User-Agent':_0x1e2846(0x78),'Accept-Encoding':_0x1e2846(0xfb)},_0x439e25=await axios['get'](_0x1e2846(0x72),{'headers':_0x4ec778,'params':_0xe2fa90});let _0x198648=_0x439e25[_0x1e2846(0x10c)];_0x198648=_0x198648[_0x1e2846(0xb7)](_0x198648[_0x1e2846(0xb4)]('AF_initDataCallback')),_0x198648=_0x198648['slice'](_0x198648[_0x1e2846(0x103)]('[')),_0x198648=_0x198648[_0x1e2846(0xb7)](0x0,_0x198648['indexOf'](_0x1e2846(0x140))-0x1),_0x198648=_0x198648[_0x1e2846(0xb7)](0x0,_0x198648[_0x1e2846(0xb4)](','));const _0x14af69=JSON['parse'](_0x198648),_0x277acd=_0x14af69[0x38][0x1][0x0][0x0][0x1][0x0];for(let _0x135ded=0x0;_0x135ded<_0x3f0eb2;_0x135ded++){if(_0x277acd[_0x135ded]&&_0x277acd[_0x135ded][0x0][0x0][_0x1e2846(0x114)][0x1]){let _0x579d20=_0x277acd[_0x135ded][0x0][0x0][_0x1e2846(0x114)][0x1][0x3][0x0];_0x1cbbf6[_0x1e2846(0x120)](_0x579d20);}}for(let _0x1b9b9a of _0x1cbbf6){_0x141b87['sendMessage'](_0x6b04cf[_0x1e2846(0xeb)],{'image':{'url':_0x1b9b9a}});}}catch(_0x51eb22){return _0x6b04cf[_0x1e2846(0x11f)](_0x1e2846(0x85));}}),Module_Exports({'kingcmd':_0x17d04a(0xc6),'kingclass':_0x17d04a(0x149),'infocmd':_0x17d04a(0x113),'use':_0x17d04a(0xe7),'kingpath':__filename},async(_0x210d40,_0x5e92a5,_0x244e16)=>{const _0x4e8a81=_0x17d04a;if(!_0x244e16)return await _0x5e92a5[_0x4e8a81(0x11f)](_0x4e8a81(0x125)+prefix+'iswa\x209234663191xx');var _0x2094d3=_0x244e16[_0x4e8a81(0x9d)]('\x20')[0x0];if(!_0x2094d3[_0x4e8a81(0x107)]('x'))return _0x5e92a5['reply'](_0x4e8a81(0xa3)+prefix+'iswa\x209234663191xx');_0x5e92a5[_0x4e8a81(0x11f)](_0x4e8a81(0xdc));function _0x363dc0(_0x2531a6,_0xe07e7c){const _0x1c00d0=_0x4e8a81;return _0x2531a6[_0x1c00d0(0x9d)](_0xe07e7c)[_0x1c00d0(0x132)]-0x1;}var _0x5699a1=_0x2094d3[_0x4e8a81(0x9d)]('x')[0x0],_0x440fd9=_0x2094d3['split']('x')[_0x363dc0(_0x2094d3,'x')]?_0x2094d3[_0x4e8a81(0x9d)]('x')[_0x363dc0(_0x2094d3,'x')]:'',_0x1e5e52=_0x363dc0(_0x2094d3,'x'),_0x10b163;if(_0x1e5e52==0x1)_0x10b163=0xa;else{if(_0x1e5e52==0x2)_0x10b163=0x64;else _0x1e5e52==0x3&&(_0x10b163=0x3e8);}_0x244e16=_0x4e8a81(0x87);var _0x23ee0a=_0x4e8a81(0x8a),_0x2132f4='\x0a*Numbers\x20with\x20no\x20WhatsApp\x20account\x20within\x20provided\x20range.*\x0a';for(let _0x3c7d5e=0x0;_0x3c7d5e<_0x10b163;_0x3c7d5e++){var _0x1b86d0=['1','2','3','4','5','6','7','8','9'],_0x55558e=_0x1b86d0[Math[_0x4e8a81(0x157)](Math[_0x4e8a81(0x135)]()*_0x1b86d0[_0x4e8a81(0x132)])],_0x56a49d=_0x1b86d0[Math[_0x4e8a81(0x157)](Math[_0x4e8a81(0x135)]()*_0x1b86d0['length'])],_0x4b29ee=_0x1b86d0[Math['floor'](Math['random']()*_0x1b86d0[_0x4e8a81(0x132)])],_0x3f8b06=_0x1b86d0[Math['floor'](Math['random']()*_0x1b86d0['length'])],_0x2dc3f6;if(_0x1e5e52==0x1)_0x2dc3f6=''+_0x55558e;else{if(_0x1e5e52==0x2)_0x2dc3f6=''+_0x55558e+_0x56a49d;else{if(_0x1e5e52==0x3)_0x2dc3f6=''+_0x55558e+_0x56a49d+_0x4b29ee;else _0x1e5e52==0x4&&(_0x2dc3f6=''+_0x55558e+_0x56a49d+_0x4b29ee+_0x3f8b06);}}var _0x4b0a59=await _0x210d40['onWhatsApp'](''+_0x5699a1+_0x3c7d5e+_0x440fd9+_0x4e8a81(0x138)),_0x32aca3=_0x4b0a59[_0x4e8a81(0x132)]!==0x0?_0x4b0a59:![];try{try{var _0x192e50=await _0x210d40[_0x4e8a81(0xb1)](_0x4b0a59[0x0][_0x4e8a81(0xfc)]);}catch{var _0x192e50='401';}_0x192e50==_0x4e8a81(0xe1)||_0x192e50[_0x4e8a81(0xab)][_0x4e8a81(0x132)]==0x0?_0x23ee0a+=_0x4e8a81(0xfa)+_0x4b0a59[0x0][_0x4e8a81(0xfc)][_0x4e8a81(0x9d)]('@')[0x0]+'\x0a':_0x244e16+='*𝙽𝚄𝙼𝙱𝙴𝚁*\x20wa.me/'+_0x4b0a59[0x0][_0x4e8a81(0xfc)][_0x4e8a81(0x9d)]('@')[0x0]+_0x4e8a81(0x8e)+_0x192e50[_0x4e8a81(0xab)]+_0x4e8a81(0x115)+moment(_0x192e50[_0x4e8a81(0x9c)])['tz']('Africa/Lagos')[_0x4e8a81(0x152)]('HH:mm:ss\x20DD/MM/YYYY')+'\x0a\x0a';}catch{_0x2132f4+=''+_0x5699a1+_0x3c7d5e+_0x440fd9+'\x0a';}}return await _0x5e92a5[_0x4e8a81(0x11f)](''+_0x244e16+_0x23ee0a+_0x2132f4+'*\x20𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈\x20'+name[_0x4e8a81(0xe5)]+'*');}),Module_Exports({'kingcmd':_0x17d04a(0xaf),'kingclass':'search\x20commands','infocmd':'Searches\x20in\x20given\x20rage\x20about\x20given\x20number.','use':_0x17d04a(0xe7),'kingpath':__filename},async(_0x50b95f,_0xa39842,_0x14fd73)=>{const _0x3198de=_0x17d04a;if(!_0x14fd73)return await _0xa39842[_0x3198de(0x11f)]('*_Give\x20Me\x20Number\x20without\x20+\x20sign_*\x0aEx:\x20'+prefix+_0x3198de(0x12f));const _0x328dcb=_0x14fd73['split']('\x20')[0x0];if(!_0x328dcb[_0x3198de(0x107)]('x'))return _0xa39842[_0x3198de(0x11f)](_0x3198de(0xa3)+prefix+_0x3198de(0x134));_0xa39842[_0x3198de(0x11f)](_0x3198de(0xed));function _0x594c06(_0x17d7cc,_0x4e42c){const _0x11ecf6=_0x3198de;return _0x17d7cc[_0x11ecf6(0x9d)](_0x4e42c)[_0x11ecf6(0x132)]-0x1;}const _0xac1203=_0x328dcb[_0x3198de(0x9d)]('x')[0x0],_0x444d37=_0x328dcb['split']('x')[_0x3198de(0xb7)](-0x1)[0x0]||'',_0x480500=_0x594c06(_0x328dcb,'x'),_0x3af393=[0xa,0x64,0x3e8][_0x480500-0x1]||0x0;let _0x250373=_0x3198de(0x93),_0x43d101='',_0x125fb5=_0x3198de(0x12a);for(let _0x63c4af=0x0;_0x63c4af<_0x3af393;_0x63c4af++){const _0x3a2860=['1','2','3','4','5','6','7','8','9'],_0x5dd662=_0x3a2860[_0x3198de(0xb7)](0x0,_0x480500)['map'](()=>_0x3a2860[Math['floor'](Math['random']()*_0x3a2860[_0x3198de(0x132)])])['join'](''),_0x2536d8=(''+_0x5dd662+_0x3a2860[Math[_0x3198de(0x157)](Math[_0x3198de(0x135)]()*_0x3a2860[_0x3198de(0x132)])])[_0x3198de(0xb7)](0x0,_0x480500),_0x157e2f=await _0x50b95f[_0x3198de(0x7a)](''+_0xac1203+_0x63c4af+_0x444d37),_0x591961=_0x157e2f['length']!==0x0?_0x157e2f:![];try{const _0x44be80=await _0x50b95f[_0x3198de(0xb1)](_0x157e2f[0x0][_0x3198de(0xfc)]);(_0x44be80===_0x3198de(0xe1)||_0x44be80['status'][_0x3198de(0x132)]===0x0)&&(_0x43d101+='wa.me/'+_0x157e2f[0x0][_0x3198de(0xfc)][_0x3198de(0x9d)]('@')[0x0]+'\x0a');}catch{_0x125fb5+=''+_0xac1203+_0x63c4af+_0x444d37+'\x0a';}}return!_0x43d101?_0x250373='':_0x250373+=_0x43d101+'\x0a',await _0xa39842['reply'](''+_0x250373+_0x125fb5+_0x3198de(0xf7)+name['botname']+'*');});function _0xb047(){const _0x3b18aa=['lat','search\x20commands','4066371ytJKVG','download','*_Wrong\x20Movie\x20Name_*\x20','*pressure','lon','*Title\x20:\x20_','ase\x20Give\x20M','📃Plot\x20\x20\x20\x20\x20\x20\x20:\x20','format','Rated','Actors','*_Please\x20Wait,\x20While\x20Getting\x20Cricket\x20Updates_*','weather','floor','ed*','https://www.google.com/search','Provide\x20me\x20a\x20sign!','9809c2cd4d','*Overall:*\x20','send','https://ap','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/103.0.5060.114\x20Safari/537.36','matchStarted','onWhatsApp','&width=1280&height=720','────✯*','shift','snippet','𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈','⭐Rated\x20\x20\x20\x20\x20\x20:\x20','10062110AcRGYp','who\x20is\x20king','https://aztro.sameerkumar.website/?sign=','mood','*_Google\x20Images\x20Not\x20Working,\x20Try\x20it\x20Later_*','\x0a*𝙼𝙰𝚃𝙲𝙷\x20𝙴𝙽𝙳𝙴𝙳*\x20','*--\x20List\x20of\x20Whatsapp\x20Numbers\x20--*\x0a\x0a','quoted','shazam','\x0a*Bio:*\x20||\x20\x0aHey\x20there!\x20I\x20am\x20using\x20WhatsApp.\x0a','Plot','Reply\x20to\x20Audio','13894700jSZfaz','\x0a*𝙱𝙸𝙾*\x20','📦BoxOffice\x20\x20:\x20','Released','Runtime','caption','\x0a*Accounts\x20With\x20No\x20Bio*\x20\x0a','dateTimeGMT','❎imdbVotes\x20\x20:\x20','📅Year\x20\x20\x20\x20\x20\x20\x20:\x20','060a6bcfa1','*Today\x20Mood:*\x20','webss','speed','*Sign:*\x20','setAt','split','descriptio','main','Searches\x20Image\x20on\x20Google','slogo','image','*You\x20did\x20not\x20add\x20x*\x0aEx:\x20','Send/Reply\x20audio\x20','Location_*','log','\x20↰━\x0a≡┏➛\x20*','json','*wind-spe','\x0a┗━━━━━━━━','status','find','name','secktor-pack','nowa','le\x20Getting','fetchStatus','&day=today','description','lastIndexOf','🌀Genre\x20\x20\x20\x20\x20\x20:\x20','⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\x0a','slice','73&languag','i.openweat','*descript','🏙️Production\x20:\x20','e=en','get','🌍Country\x20\x20\x20\x20:\x20','🎬Title\x20\x20\x20\x20\x20\x20:\x20','*country','58245bylUcp','google-it','gsearch','axios','weather\x20la','iswa','node-fetch','*weather\x20o','imdbRating','🌟imdbRating\x20:\x20','../lib','sign\x0a:Example:\x20horo\x20libra','matchEnded','```Uhh\x20Please,\x20Give\x20me\x20Url!```','👨Actors\x20\x20\x20\x20\x20:\x20','11DEXvEm','\x0a\x0a✯─────────────────────✯\x0a\x0a','sendMessage','✍Writer\x20\x20\x20\x20\x20:\x20','*temperat','/data/2.5/','👨🏻‍💻Director\x20\x20\x20:\x20','291160IHGZtW','kingsman','match','feels_like','title','*Searching\x20WhatsApp\x20accounts\x20in\x20given\x20range...*','imdbVotes','Awards','*conditio','🎖️Awards\x20\x20\x20\x20\x20:\x20','401','artists','\x0a〣\x20\x20\x20\x20\x20\x20\x20','*Current\x20Date:*\x20','botname','give\x20me\x20a\x20query\x0a*Ex:\x20','234803960xx','yta\x20','Lagos','videos','chat','Gives\x20horoscope\x20info\x20of\x20user.','*Searching\x20for\x20WhatsApp\x20account\x20in\x20the\x20given\x20range...*','then','...!\x0aEx:\x20','sendMessag','\x0a*𝙼𝙰𝚃𝙲𝙷\x20𝙽𝙰𝙼𝙴*\x20','Director','*_Give\x20me\x20','ure*','\x0a*𝙼𝙰𝚃𝙲𝙷\x20𝚂𝚃𝙰𝚃𝚄𝚂*\x20','img','*\x20𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈\x20','current_date','BoxOffice','wa.me/','application/json','jid','*\x0a\x0a','ke*','Sends\x20image\x20of\x20asked\x20Movie/Series.','hermap.org','id_*\x0a*_Ple','*latitude','indexOf','\x20Weather\x20I','hore','237rZnvPM','includes','387942eXIfPk','1581732wlAYJg','coord','fullss','data','Luffy','Language','footer','compatibility','📆Released\x20\x20\x20:\x20','```Error\x20While\x20Fetching\x20Snapshot```','Searches\x20in\x20given\x20rage\x20about\x20given\x20number.','444383007','\x0a*𝙻𝙰𝚂𝚃\x20𝚄𝙿𝙳𝙰𝚃𝙴*\x20','➣\x20*𝙻𝙸𝙽𝙺*\x20','284244GWsVnc','lucky_time','country','13208JDAoIU','album','POST','thumbnail','_*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Artist\x20:\x20_','reply','push','_*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*To\x20Download\x20Song:-\x20_','\x0a*𝙼𝙰𝚃𝙲𝙷\x20𝚂𝚃𝙰𝚁𝚃𝙴𝙳*\x20','45VUJbjG','lucky_number','*_Give\x20Me\x20Number\x20without\x20+\x20sign_*\x0aEx:\x20','*feels-li','\x0a*𝙼𝙰𝚃𝙲𝙷\x20𝙳𝙰𝚃𝙴*\x20','210ztztvU','e\x20a\x20Valid\x20','*\x20Numbers\x20With\x20No\x20WhatsApp*\x20\x0a\x0a','https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78','*longitud','\x0a*✯────𝐌𝐀𝐓𝐂𝐇\x20','Poster','nowa\x20234803960xx','url','isch','length','Production','nowa\x20234803960xxxx','random','http://www.omdbapi.com/?apikey=742b2d09&t=','\x20```\x20\x20\x20\x20\x20𝕀𝕄𝔻𝔹\x20𝕊𝔼𝔸ℝℂℍ```\x0a','@s.whatsapp.net','Title','*_Name\x20a\x20Series\x20or\x20movie_*\x0aEx:\x20','\x20\x0a\x0a','🌐Language\x20\x20\x20:\x20','Genre','8891955MoXLZC','➣\x20*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\x20','</script>','35wYuuws','color','➣\x20*ᴛɪᴛʟᴇ*\x20','2388024ewIdie','74787QomYGj','Cars','mtype'];_0xb047=function(){return _0x3b18aa;};return _0xb047();}