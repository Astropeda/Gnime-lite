        const axios = require('axios')
        const { fetchJson,Module_Exports, GIFBufferToVideoBuffer} = require('../lib')
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bite",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bite`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bitten to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bitten to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
            Module_Exports({
                kingcmd: "poke",
                kingclass: "react cmd",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/poke`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} poked to @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} poked to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
    //-----------------------------------------------------------------------
    Module_Exports({
                kingcmd: "hug",
                kingclass: "react cmd",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/hug`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} hug to @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} huged to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
    //-----------------------------------------------------------------------
    Module_Exports({
                kingcmd: "hold",
                kingclass: "react cmd",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/handhold`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} hold hand of @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} holed to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        ) 
    //-----------------------------------------------------------------------
    Module_Exports({
                kingcmd: "hifi",
                kingclass: "react cmd",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/highfive`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} highfive with @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} highfived with everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
            //------------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "blush",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/blush`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} blushed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} blushed to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "punch",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kick`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} punched to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} punched everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "pat",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/pat`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} patted with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} patted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "kiss",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kiss`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} kissed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} kissed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "kill",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kill`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} killed @${users.split("@")[0]}. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} killed everyone over here. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "happy",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "dance",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} danced with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} danced with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "yeet",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/yeet`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} yeeted to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} yeeted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "wink",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/wink`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} winked with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} winked with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "slap",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/slap`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} slapped @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} slapped to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bonk",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bonk`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bonked to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bonked to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bully",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bully`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bullied to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bullied to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "cringe",
                    kingclass: "react cmd",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/cringe`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} cringed at @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} cringed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                kingcmd: "cuddle",
                kingclass: "react cmd",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
        
                var bite = await fetchJson(`https://api.waifu.pics/sfw/cuddle`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )