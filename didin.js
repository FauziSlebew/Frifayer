//Base By : DikaAnrt
//Recode By : Didin

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const dani = require('./lib/null.js')
const { cerpen } = require('./storage/story/cerpen')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { menunya } = require('./database/menu')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('©DidinBotz‡')  //ubah di config biar ngk emro
const didinyt = ('*ɴᴏᴛᴇ  :*\n*• ʙᴏᴛ ᴍᴀsɪʜ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇʀᴋᴇᴍʙᴀɴɢᴀɴ ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ sɪʟᴀʜᴋɴ ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ.*')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
 //Database\\
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
const ApikeyNya = JSON.parse(fs.readFileSync('./ApikeyNya.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = didin = async (didin, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await didin.decodeJid(didin.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	
	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
        // Group
        const groupMetadata = m.isGroup ? await didin.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
        //function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
        
        // Public & Self
        if (!didin.public) {
            if (!m.key.fromMe) return
        }

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await didin.setStatus(`${didin.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	

	//auto reply 
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./DidinMedia/vn/${anju}.mp3`)
					didin.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
	//KONTOLODIN
const reply = (teks) => {
    didin.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: botname,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: caption, thumbnail: thumbwiz,sourceUrl: ("github.com/Ajmal-Achu")}}})
}
const replay = (teks) => {
    didin.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: botname,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: caption, thumbnail: thumbwiz,sourceUrl: ("github.com/Ajmal-Achu")}}})
}

const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: nyoutube,
mediaType: "VIDEO",
mediaUrl: `https://githb.com/Ajmal-Achu/Wizard-MD`,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}

	// DOCUMENT
const kontol = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `Kontol`, 
                    jpegThumbnail: thumb
                          }
                        }
                      }
                      //batas//
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
                let buttonMessage = {
                  document: doc,
                  mimetype: "application/pdf",
                  fileName: fileName,
                  fileLength: fileLength,
                  caption: caption,
                  footer: footer,
                  buttons: buttons,
                  headerType: 4,
                  contextInfo:{externalAdReply:{
                     title: time,
                     body: boddy,
                     thumbnail: thumbnail,
                     thumbnailUrl: thumbnailUrl,
                     sourceUrl: sourceUrl,
                     mediaUrl: mediaUrl,          
                     renderLargerThumbnail: true,
                     showAdAttribution: true,
                     mediaType: 1
                   }}
               }
           didin.sendMessage(m.chat, buttonMessage, options)
   }
   
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await didin.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        didin.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

//Auto Downloader
if (db.data.settings[botNumber].autodownload) {
if (budy.match('https://youtu')) {
if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
var { ytv } = require('./lib/y2mate')
await m.reply(mess.wait)
let media = await ytv(budy, '360')
if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
didin.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4` }, { quoted: m })
global.db.data.users[m.sender].limit -= 1
} else if (budy.match('https://vt.tiktok.com')) {
if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
var { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
await m.reply(mess.wait)
var { author: { nickname }, video, description } = await tiktokdl(budy).catch(async _ => await tiktokdlv2(budy))
var url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
if (!url) throw 'Can\'t download video!'
var teks = `🔗 *Url:* ${url}\n📛 *Nickname:* ${nickname}\n${description ? `📱 *Description:* ${description}` : ''}`
didin.sendMessage(m.chat, { document: { url: url }, mimetype: 'video/mp4', fileName: 'tiktok.mp4' }, { quoted: m })
global.db.data.users[m.sender].limit -= 5
} else if (budy.match('https://twitter')) {
if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
var { twitterDl } = require('./lib/scraper')
var res = await twitterDl(budy)
await m.reply(mess.wait)
for (let x = 0; x < res.media.length; x++) {
var caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
didin.sendFile(m.chat, res.media[x].url, caption, m)
}
global.db.data.users[m.sender].limit -= 5
} else if (budy.match('https://www.mediafire')) {
if (!isPrem) return m.reply(mess.prem)
var { mediafiredl } = require('@bochilteam/scraper')
await m.reply(mess.wait)
var res = await mediafiredl(budy)
var { url, url2, filename, ext, aploud, filesize, filesizeH } = res
didin.sendMessage(m.chat, {document: { url: url }, mimetype: `application/${ext}`, fileName: `${filename}.${ext}`}, { quoted : m })
} else if (budy.match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) {
var { instagramdl } = require('@bochilteam/scraper')
if (!budy.match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\nhttps://www.instagram.com/reel/CfEAxBrJrRh/?igshid=YmMyMTA2M2Y=`
await m.reply(mess.wait)
instagramdl(budy).then(async res => {
let instagramdl = JSON.stringify(res)
let json = JSON.parse(instagramdl)
for (let { url, type } of json) {
didin.sendFile(m.chat, url, global.isCreator, m)
}
})
global.db.data.users[m.sender].limit -= 5
  }
}

//━━━━━━━━━━━━━━━[ CONST APIKEY ]━━━━━━━━━━━━━━━━━//

humankey = ApikeyNya.humankey
zerkey = ApikeyNya.zerkey
xchillds = ApikeyNya.xchillds


      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: didin.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, didin.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        didin.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            didin.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await didin.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await didin.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    didin.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    didin.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) didin.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) didin.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) didin.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    didin.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) didin.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) didin.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    didin.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        switch(command) {
	    case 'skskalalsl': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await didin.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await didin.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            didin.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await didin.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) didin.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'dona': case 'si': case 'donat': case 'donate': {
                didin.sendMessage(m.chat, { jpegThumbnail: thumb, caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Atau klik link dibawah ini*\n_https://saweria.co/didinsec\n\n*Atau Transfer via*\n- *Dana: 081545463585\n\n_Terima kasih bagi yang sudah donasi_` }, { quoted: m })
            }
            break
            case 'skdkka': {
                m.reply('https://wa.me/6281545463585')
            }
            break
            case 'bot': {
                m.reply('Apa?su')
            }
            break
            case 'asalamualaikum': {
                m.reply('Waalaikumsalam')
            }
            case 'hehe': {
                m.reply('Fitur Yang Eror Akan Segera Mimin Benerin\nSabar Ya:/')
            }
            break
            case 'groupbot': {
                m.reply('Halo Kak\nGroup DidinBotz: https://chat.whatsapp.com/CigmOAZApWZDWnAKAHQ5Ju\nNOTE : Kalo kakak nya Punya Bot Masukin aja\n\n*_Makasih><_*')
            }
            break
            case 'tqto': {
                m.reply('THANK TO :\nDikaArdnt: https://github.com/DikaArdnt\ndidin: https://github.com/didindev\nRonove: https://github.com/ralfh19\nRifza: https://github.com/rifza123')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    didin.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    didin.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    didin.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    didin.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    didin.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    didin.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    didin.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await didin.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await didin.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    didin.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                didin.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi Ke *Didin*🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await didin.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
           
//Pembatas
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                didin.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await didin.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await didin.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await didin.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await didin.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                await didin.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                await didin.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                didin.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            didin.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            didin.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            didin.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            didin.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${didin.user.id}
`
didin.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await didin.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await didin.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mode Group`, didin.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await didin.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await didin.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mode Edit Info`, didin.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mode Antilink`, didin.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${didin.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${didin.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mute Bot`, didin.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await didin.groupInviteCode(m.chat)
                didin.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await didin.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await didin.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                didin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehe', buttonText: { displayText: 'Makasih Laporannya :/' }, type: 1 }]
            await didin.sendButtonText('6281545463585@s.whatsapp.net', buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Anda Telah Terkirim Ke Owner @${ownernya.split('@')[0]}\n*Terima Kasih Atas Laporannya🙏*\n_(Nomermu Akan Terblokir Jika Laporan Hanya Di Buat Buat)_`
            await didin.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            break
            case 'bcgc': case 'bcgroup': {
var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
let getGroups = await didin.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
for (let i of anu) {
if (/image/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `B R O A D C A S T` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(i, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/video/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(i, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/audio/.test(mime)) {
let media = await didin.downloadAndSaveMediaMessage(quoted)
await sleep(1500)
let urll = await UploadFileUgu(media)
didin.sendMessage(i, { audio: { url: urll.url }}, { quoted: fdoc })
} else {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
await didin.sendButtonText(i, btnbc, txtbc, '', fdoc)
}
m.reply('Sukses Broadcast')
}
}
break
case 'bc': case 'broadcast': case 'bcall': {
var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: thumb, }}}
if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
let anu = await store.chats.all().map(v => v.id)
m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
for (let yoi of anu) {
if (/image/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/video/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/audio/.test(mime)) {
let media = await didin.downloadAndSaveMediaMessage(quoted)
await sleep(1500)
let urll = await UploadFileUgu(media)
didin.sendMessage(yoi, { audio: { url: urll.url }}, { quoted: fdoc })
} else {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
await didin.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
}
m.reply('Sukses Broadcast')
}
}
break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await didin.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 didin.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await didin.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 didin.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    didin.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await didin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await didin.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await didin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await didin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await didin.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'didin', 'morou', m, {asSticker: true})

         }
         break
           case 'setbio':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('*Example* :\n#setbiobot text')
didin.setStatus(`${q}`)
m.reply(`*Sukses Ganti Bio Bot Menjadi:*\n${q}`)
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await didin.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await didin.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'f22b3c4c2c'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    didin.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        //━━━━━━━━━━━━━━━[ CONVERTER ]━━━━━━━━━━━━━━━━━//
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await didin.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
didin.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await didin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
didin.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
didin.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${didin.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
didin.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await didin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//━━━━━━━━━━━━━━━[ SEARCH ]━━━━━━━━━━━━━━━━━//
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await didin.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    didin.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `• No : ${no++}\n• Type : ${i.type}\n• Video ID : ${i.videoId}\n• Title : ${i.title}\n• Views : ${i.views}\n• Duration : ${i.timestamp}\n• Upload At : ${i.ago}\n• Author : ${i.author.name}\n• Url : ${i.url}\n\n─────────────────\n\n`
                }
                didin.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: didin.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
あ Title : ${anu.title}
あ Ext : Search
あ Id : ${anu.videoId}
あ Duration : ${anu.timestamp}
あ Viewers : ${anu.views}
あ Upload At : ${anu.ago}
あ Author : ${anu.author.name}
あ Channel : ${anu.author.url}
あ Description : ${anu.description}
あ Url : ${anu.url}`,
footer: didin.user.name,
buttons: buttons,
headerType: 4
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
didin.sendImage(m.chat, media.thumb, `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '128kbps'}`, m)
didin.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
didin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                didin.sendMessage(m.chat, { image: { url: result }, caption: '• Media Url : '+result }, { quoted: m })
            }
            break
//Hosting Menu
case 'createcp':
let domain = q.split('|')[2]
let usern = q.split('|')[0]
let pekeg = q.split('|')[1]
if (args.length < 2) return m.reply(`Kirim perintah ${command} domain|package`)
m.reply("Creating please wait....")

axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=shymex404@gmail.com&pekeg=${pekeg}&domain=${domain}`, authWhm)
.then(response => {     
     let np = response.data
          if (np.metadata.result == 0) {
           m.reply(np.metadata.reason)
          } else {
           let dsta = np.metadata.output.raw;
            var substr = dsta.substring(
              dsta.toString().indexOf("+===================================+")
            ); //substr = 'word. Hello!'
            let nefft = substr.split("| Language: en")[0];
            m.reply(`${nefft}\n\nLogin : https://${hostwhm}:2087`)
  }});
break
case prefix+'listcp':
reply('Wait Getting List Account info....')
axios.get(`https://${hostwhm}:2087/json-api/listaccts?api.version=1`, authWhm)
  .then((risol) => {
 let lisol = risol.data
 var ttdy = lisol.data.acct
let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`
for (let i = 0; i < ttdy.length; i++) {
ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ Ip* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
}
reply(ogh)
})
				break
case prefix+'terminate':
if (args.length < 2) return reply(`Kirim perintah ${command} username`)
reply('Wait Terminating Account....')
axios
    .get(
      `https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`, authWhm )
    .then((e) => {
      if ([1, "1"].includes(e.data?.metadata?.result))
      reply(`Done User ${args[1]} Telah di Terminate`);
      else {
        reply(e.metadata);
        console.log(e.data);
      }
    })
break
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                didin.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                didin.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
                if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: 'menu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await didin.sendButtonText(m.chat, buttons, jwbn, nyoutube, m)
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//INI FITUR SHORT YA ADICK"//
            case 'tinyurl': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.hasil }, {quoted:m })
            }
            break
           case 'bitly': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api-didinbotz.herokuapp.com/api/linkshort/bitly?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.result }, {quoted:m })
            }
            break
          case 'cuttly': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api-didinbotz.herokuapp.com/api/linkshort/cuttly?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.result }, {quoted:m })
            }
            break
//AKHIR FITUR SHORT YA ADICK" WKWKWK//
case 'ssweb': case 'ss': {
                if (!text) throw 'No Query Link'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://api-didinbotz.herokuapp.com/api/tools/ssweb?link=${text}` }, caption: `SSWEB DONE` }, { quoted: m })
            }
            break
//INI FITUR SSWEB YA KONT//
//DIBAWAH FITUR STYLE TEXT YA. JING//
case 'styletext': case 'style': {
                if (!text) throw 'No Query text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://api-didinbotz.herokuapp.com/api/tools/styletext?text=${text}` }, caption: `Styletext DONE` }, { quoted: m })
            }
            break
//SELESAAAI//
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotes': {
var Quotes = JSON.parse(fs.readFileSync('./storage/quotes/quotes.json'))
var hasil = pickRandom(Quotes)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesjawa': {
var jawa = JSON.parse(fs.readFileSync('./storage/quotes/quotesjawa.json'))
var hasil = pickRandom(jawa)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katagalau': {
var Quotes = JSON.parse(fs.readFileSync('./storage/quotes/katagalau.json'))
var hasil = pickRandom(Quotes)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'dilan': {
var Dilan = JSON.parse(fs.readFileSync('./storage/quotes/dilan.json'))
var hasil = pickRandom(Dilan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katabucin': {
var teks = JSON.parse(fs.readFileSync('./storage/quotes/katabucin.json'))
var hasil = pickRandom(teks)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'bucin': {
var bucin = JSON.parse(fs.readFileSync('./storage/quotes/bucin.json'))
var hasil = pickRandom(bucin)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katailham': {
var ilham = JSON.parse(fs.readFileSync('./storage/quotes/katailham.json'))
var hasil = pickRandom(ilham)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'renungan': {
var renungan = JSON.parse(fs.readFileSync('./storage/quotes/renungan.json'))
var hasil = pickRandom(renungan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'gombalan': {
var gombalan = JSON.parse(fs.readFileSync('./storage/quotes/gombalan.json'))
var hasil = pickRandom(gombalan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//INI FITUR TEXT PRO YA ADICK"//
            case 'berry': case 'blackpink': case 'glitch': case 'neon': case '3dboxtext': case 'pencil': case 'logobear': case '3dchristmas': case 'thunder': case 'magma': case 'strawberry': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://api-didinbotz.herokuapp.com/api/textpro/${command}?text=${text}` }, caption: `textpro ${command}` }, { quoted: m })
            }
            break
//INI FITUR Photooxy YA ADICK"//
case 'carved-wood': case 'picture-of-love': case 'naruto': case 'butterfly': case 'pubg': case 'illuminated-metallic': case 'flower-typography': case 'sweet-candy': case 'coffee-cup': case 'under-grass': case 'night-sky': case 'harry-potter': case 'metallic': case 'shadow': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://api-didinbotz.herokuapp.com/api/photooxy/${command}?text=${text}` }, caption: `textpro ${command}` }, { quoted: m })
            }
            break
//INI FITUR IMAGE MAKER YA ADICK"//
case 'wanted':
case 'darkness':
case 'blur':
case 'beautiful':
case 'circle':
case 'pixelate':
case 'rainbow':
case 'resize':
case 'trigger':
case 'invert':
case 'facepalm': {
if (!m.quoted && !text) throw `reply gambar/Sticker dengan caption ${prefix + command}`
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
res = await TelegraPh(media)
kontol = `https://api-didinbotz.herokuapp.com/api/maker/${command}?url=${res}`
xuntul = await didin.sendMessage(m.chat, { image: { url: kontol }}, {quoted:m})
}
            break
//INI FITUR TIKTOK YA ADICK"//
case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowm },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await didin.sendMessage(m.chat, buttonMessage, { quoted: m })
                didin.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
//BATAS NYA DECK//
//━━━━━━━━━━━━━━━[ WEBZONE ]━━━━━━━━━━━━━━━━━//
//━━━━━━━━━━━━━━━[ RANDOM ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'asupan':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./storage/asupan/asupan.json'))
var hasil = pickRandom(asupan)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./storage/asupan/gheayubi.json'))
var hasil = pickRandom(gheayubi)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./storage/asupan/bocil.json'))
var hasil = pickRandom(bocil)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./storage/asupan/ukhty.json'))
var hasil = pickRandom(ukhty)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupansantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./storage/asupan/santuy.json'))
var hasil = pickRandom(santuy)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupankayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./storage/asupan/kayes.json'))
var hasil = pickRandom(kayes)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./storage/asupan/rikagusriani.json'))
var hasil = pickRandom(rikagusriani)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupannotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./storage/asupan/asupannotnot.json'))
var hasil = pickRandom(notnot)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'storyanime':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var storyanime = JSON.parse(fs.readFileSync('./storage/video/storyanime.js'))
var hasil = pickRandom(storyanime)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
         case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
//━━━━━━━━━━━━━━━[ RANDOM ANIME ]━━━━━━━━━━━━━━━━━//
case 'loli':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var loli = JSON.parse(fs.readFileSync('./storage/anime/loli.json'))
var hasil = pickRandom(loli)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'husbu':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var husbu = JSON.parse(fs.readFileSync('./storage/anime/husbu.json'))
var hasil = pickRandom(husbu)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'boruto':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var boruto = JSON.parse(fs.readFileSync('./storage/anime/boruto.json'))
var hasil = pickRandom(boruto)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asuna':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asuna = JSON.parse(fs.readFileSync('./storage/anime/asuna.json'))
var hasil = pickRandom(asuna)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'elaina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var elaina = JSON.parse(fs.readFileSync('./storage/anime/elaina.json'))
var hasil = pickRandom(elaina)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'luffy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var luffy = JSON.parse(fs.readFileSync('./storage/anime/luffy.json'))
var hasil = pickRandom(luffy)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'anya':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var anya = JSON.parse(fs.readFileSync('./storage/anime/anya.json'))
var hasil = pickRandom(anya)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'akiyama':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var akiyama = JSON.parse(fs.readFileSync('./storage/anime/akiyama.json'))
var hasil = pickRandom(akiyama)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'ana':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ana = JSON.parse(fs.readFileSync('./storage/anime/ana.json'))
var hasil = pickRandom(ana)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'ayuzawa':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ayuzawa = JSON.parse(fs.readFileSync('./storage/anime/ayuzawa.json'))
var hasil = pickRandom(ayuzawa)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'chiho':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var chiho = JSON.parse(fs.readFileSync('./storage/anime/chiho.json'))
var hasil = pickRandom(chiho)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'chitoge':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var chitoge = JSON.parse(fs.readFileSync('./storage/anime/chitoge.json'))
var hasil = pickRandom(chitoge)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'cosplay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var cosplay = JSON.parse(fs.readFileSync('./storage/anime/cosplay.json'))
var hasil = pickRandom(cosplay)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'deidara':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var deidara = JSON.parse(fs.readFileSync('./storage/anime/deidara.json'))
var hasil = pickRandom(deidara)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'eba':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var eba = JSON.parse(fs.readFileSync('./storage/anime/eba.json'))
var hasil = pickRandom(eba)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'emilia':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var emilia = JSON.parse(fs.readFileSync('./storage/anime/emilia.json'))
var hasil = pickRandom(emilia)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'erza':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var erza = JSON.parse(fs.readFileSync('./storage/anime/erza.json'))
var hasil = pickRandom(erza)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'isuzu':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var isuzu = JSON.parse(fs.readFileSync('./storage/anime/isuzu.json'))
var hasil = pickRandom(isuzu)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'itachi':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var itachi = JSON.parse(fs.readFileSync('./storage/anime/itachi.json'))
var hasil = pickRandom(itachi)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'itori':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var itori = JSON.parse(fs.readFileSync('./storage/anime/itori.json'))
var hasil = pickRandom(itori)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kaga':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kaga = JSON.parse(fs.readFileSync('./storage/anime/kaga.json'))
var hasil = pickRandom(kaga)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kagura':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kagura = JSON.parse(fs.readFileSync('./storage/anime/kagura.json'))
var hasil = pickRandom(kagura)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kakasih':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kakasih = JSON.parse(fs.readFileSync('./storage/anime/kakasih.json'))
var hasil = pickRandom(kakasih)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kaori':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kaori = JSON.parse(fs.readFileSync('./storage/anime/kaori.json'))
var hasil = pickRandom(kaori)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kaneki':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kaneki = JSON.parse(fs.readFileSync('./storage/anime/kaneki.json'))
var hasil = pickRandom(kaneki)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kotori':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kotori = JSON.parse(fs.readFileSync('./storage/anime/kotori.json'))
var hasil = pickRandom(kotori)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'kurumi':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kurumi = JSON.parse(fs.readFileSync('./storage/anime/kurumi.json'))
var hasil = pickRandom(kurumi)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'madara':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var madara = JSON.parse(fs.readFileSync('./storage/anime/madara.json'))
var hasil = pickRandom(madara)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'mikasa':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var mikasa = JSON.parse(fs.readFileSync('./storage/anime/mikasa.json'))
var hasil = pickRandom(mikasa)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'mikey':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var mikey = JSON.parse(fs.readFileSync('./storage/anime/mikey.json'))
var hasil = pickRandom(mikey)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'miku':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var miku = JSON.parse(fs.readFileSync('./storage/anime/miku.json'))
var hasil = pickRandom(miku)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'milf':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var milf = JSON.parse(fs.readFileSync('./storage/anime/milf.json'))
var hasil = pickRandom(milf)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'minato':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var minato = JSON.parse(fs.readFileSync('./storage/anime/minato.json'))
var hasil = pickRandom(minato)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'nezuko':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var nezuko = JSON.parse(fs.readFileSync('./storage/anime/nezuko.json'))
var hasil = pickRandom(nezuko)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'sasuke':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var sasuke = JSON.parse(fs.readFileSync('./storage/anime/sasuke.json'))
var hasil = pickRandom(sasuke)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'sakura':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var sakura = JSON.parse(fs.readFileSync('./storage/anime/sakura.json'))
var hasil = pickRandom(sakura)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'shina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var shina = JSON.parse(fs.readFileSync('./storage/anime/shina.json'))
var hasil = pickRandom(shina)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'shinka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var shinka = JSON.parse(fs.readFileSync('./storage/anime/shinka.json'))
var hasil = pickRandom(shinka)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'shinomiya':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var shinomiya = JSON.parse(fs.readFileSync('./storage/anime/shinomiya.json'))
var hasil = pickRandom(shinomiya)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'shizuka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var shizuka = JSON.parse(fs.readFileSync('./storage/anime/nezuko.json'))
var hasil = pickRandom(shizuka)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'shota':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var shota = JSON.parse(fs.readFileSync('./storage/anime/shota.json'))
var hasil = pickRandom(shota)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'toukachan':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var toukachan = JSON.parse(fs.readFileSync('./storage/anime/toukachan.json'))
var hasil = pickRandom(toukachan)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'tsunade': {
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var tsunade = JSON.parse(fs.readFileSync('./storage/anime/tsunade.json'))
var hasil = pickRandom(tsunade)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
global.db.data.users[m.sender].limit -= 1
}
break
case 'yotsuba': {
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var yotsuba = JSON.parse(fs.readFileSync('./storage/anime/yotauba.json'))
var hasil = pickRandom(yotsuba)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
global.db.data.users[m.sender].limit -= 1
}
break
case 'yumeko': {
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var yumeko = JSON.parse(fs.readFileSync('./storage/anime/yumeko.json'))
var hasil = pickRandom(yumeko)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
global.db.data.users[m.sender].limit -= 1
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'darkjokes': case 'mountain': case 'meme': case 'aestatic': case 'art': case 'boneka': case 'cyber': case 'doraemon': case 'exo': case 'wallpapergame': case 'islamic': case 'kartun': case 'katakata': case 'kpop': case 'mobil': case 'motor': case 'pokemon': case 'programming': case 'pubg': case 'quotesyt': case 'stanic': case 'tatasurya': case 'technology': case 'wallhp': case 'wallml': case 'wallnime': case 'yulibocil': 
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var darkjokes = JSON.parse(fs.readFileSync(`./storage/wallpaper/${command}.json`))
var hasil = pickRandom(darkjokes)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
//ANJAY ALOK//
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'f22b3c4c2c'))
                let msg = await didin.sendImage(m.chat, anu.result.img, `• Title : ${anu.result.lagu}\n• Album : ${anu.result.album}\n• Singer : ${anu.result.penyanyi}\n• Publish : ${anu.result.publish}\n• Lirik :\n${anu.result.lirik.result}`, m)
                didin.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'f22b3c4c2c'))
                let msg = await didin.sendImage(m.chat, anu.result.thumb, `• Title : ${anu.result.title}\n• Url : ${isUrl(text)[0]}`)
                didin.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'f22b3c4c2c'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'f22b3c4c2c'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await didin.sendMessage(m.chat, buttonMessage, { quoted: m })
                didin.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'f22b3c4c2c'))
                didin.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `• Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
didin.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
• Title : ${anu.title}
• Author : ${anu.author.name}
• Like : ${anu.like}
• Caption : ${anu.caption}
• Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: didin.user.name,
			buttons,
			headerType: 4
		    }
		    didin.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        didin.sendMessage(m.chat, { image: { url }, caption: `• Title : ${anu.title}\n• Author : ${anu.author.name}\n• Like : ${anu.like}\n• Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		didin.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
//INI FITUR ISLAMI KEK NYA WORK SEMUA\nKalo Eror Fix Sendiri ya teman wk//
				case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		didin.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
case 'hadits': case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
let { number, arab, id } = res.result.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
didin.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
case 'kisahnabi': {
if (!text) return m.reply(`Mau Kisah Nabi Siapa?\n\nList Nama Nabi :\n1. adam\n2. idris\n3. nuh\n4. hud\n5. saleh\n6. ibrahim\n7. luth\n8. ismail\n9. ishaq\n10. yaqub\n11. yusuf\n12. ayub\n13. syuaib\n14. musa\n15. harun\n16. dzulkifli\n17. daud\n18. sulaiman\n19. ilyas\n20. ilyasa\n21. yunus\n22. zakaria\n23. yahya\n24. musa\n25. muhammad\n\nExample: ${prefix+command} Muhammad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'adam': case 'idris': case 'nuh': case 'hud': case 'saleh': case 'ibrahim': case 'luth': case 'ismail': case 'ishaq': case 'yaqub': case 'yusuf': case 'ayub': case 'syuaib': case 'musa': case 'harun': case 'dzulkifli': case 'daud': case 'sulaiman': case 'ilyas': case 'ilyasa': case 'yunus': case 'zakaria': case 'yahya': case 'musa': case 'muhammad': 
m.reply(mess.wait)
let kisah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Islami/${text}.json`)
resNabi = `Kisah Nabi ${text}

❏ *Nama* : ${kisah.name}
❏ *Kelahiran* : ${kisah.thn_kelahiran}
❏ *Usia* : ${kisah.usia}
❏ *Tempat* : ${kisah.tmp}
❏ *Cerita* : ${kisah.description}
`
didin.sendMessage(m.chat, { image: { url: `${kisah.image_url}` }, caption: resNabi }, { quoted: m })
 }
}
break
case 'niatsolat': {
if (!text) return m.reply(`Mau Niat Solat Apa?\n\nList Niat Solat :\n1. subuh\n2. dzuhur\n3. ashar\n4. maghrib\n5. isya\n\nExample: ${prefix+command} subuh`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'subuh': case 'dzuhur': case 'ashar': case 'maghrib': case 'isya':
m.reply(mess.wait)
let niat = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Niatsolat/${text}.json`)
let resniat = `Niat Solat ${text}
  
❏ *Nama* : ${niat.name}
❏ *Arabic* : ${niat.arabic}
❏ *Latin* : ${niat.latin}
❏ *Indonesia* : ${niat.terjemahan}
`
m.reply(resniat)
 }
}
break
case 'asmaulhusna': {
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
let capt = `Asmaul Husna:\n\n`
for (let i of anu) {
capt += `❏ *Nomor*: ${i.index}\n`
capt += `❏ *Latin*: ${i.latin}\n`
capt += `❏ *Arab*: ${i.arabic}\n`
capt += `❏ *Arti ID*: ${i.translation_id}\n`
capt += `❏ *Arti EN*: ${i.translation_en}\n\n━━━━━━━━━━━━━━━━━━━━━━━\n`
}
m.reply(capt)
}
break
case 'jadwalsholat':
case 'jadwalshalat':
case 'jadwalsalat': {
if (!text) throw `Contoh : ${prefix + command} Padang`
let res = await dani.jadwalsholat(text)  
let capt = `Jadwal Sholat Kota : ${text}\n\n`
let i = res
capt += `Tanggal : ${i.tanggal}\n`
capt += `Imsak : ${i.imsyak}\n`
capt += `Subuh : ${i.subuh}\n`
capt += `Dzuhur : ${i.dzuhur}\n`
capt += `Ashar : ${i.ashar}\n`
capt += `Maghrib : ${i.maghrib}\n`
capt += `Isya : ${i.isya}\n\n`
m.reply(capt)
}
break
case 'ceramah': {
if (!text) return m.reply(`Mau Ceramah Dari Siapa?\n\nList Ustadz :\n1. abdulsomad\n2. adihidayat\n3. felixsiauw\n4. khalidbasalamah\n\nExample: ${prefix+command} abdulsomad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'abdulsomad': case 'adihidayat': case 'felixsiauw': case 'khalidbasalamah': 
m.reply(mess.wait)
let ceramah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Ceramah/${text}.json`)
let rescera = `Ceramah Dari *${ceramah.name}*

${ceramah.ceramah}`
m.reply(rescera)
}
}
break
//SELESAI//
//━━━━━━━━━━━━━━━[ RANDOM CERPEN ]━━━━━━━━━━━━━━━━━//
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
//SELESAI
//INI FITUR MEDIAFIRE YA KIDS//
//BATAS//
//INI FITUR INSTAGRAM YA KIDS/
case 'poling': {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "*_Halo Kk, Saya Owner DidinBotz_*\n\n*_Apakah Kk Nya Puas Dengan Fitur Fitur Yang Ada Di DidinBotz‡ ?_*",
"options": [
	{
"optionName": "Sangat Puas"
	},
	{
"optionName": "Puas"
	},
	{
"optionName": "Tidak"
	}
],
"selectableOptionsCount": 3
	}
}), { userJid: m.chat, quoted: m })
didin.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break
//DDONE//
//INI FITUR STICKER YA DECK//
case 'patrick':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/patrick?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'lonet':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/lonte?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'lidi':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'kucing':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kucing?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'sponbob':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'kawansponbob':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'popoci':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/popoci?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'meow':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/meow?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'menjamet':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/menjamet?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'tyni':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/tyni?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'hopeboy':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/hope-boy?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'doge':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/doge?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'dinokuning':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/dyno-kuning?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'krrobot':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'jiisho':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/jisoo?apikey=dhmDlD5x`}}, {quoted: m })
break
//done//
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                didin.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                didin.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                didin.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
//fitur menfess//
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kk ada Menfess nih!!\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 var button = [{ buttonId: `owner`, buttonText: { displayText: `OWNER‡` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
					didin.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: `Didin_yt1\nhttps://didinsec.tk` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case 'menfesconfirm':
 				 didin.sendMessage(q, {text: `Sudah Di Confirmasi Ni kk✌🏻`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                didin.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await didin.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, didin.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await didin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, didin.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await didin.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, didin.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await didin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await didin.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, didin.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                didin.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                didin.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                didin.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                didin.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, didin.user.name, `*Hello Didin* !`, `Pilih Din`, sections, m)
                }
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot by didin Dev* 
-Creator :  @${ownernya.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'tesrow', buttonText: { displayText: '📖List Menu' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: ments})
            }
            break
//INI FITUR REQUEST YA ADICK"//
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'tesrow', buttonText: { displayText: 'MENU‡' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI' }, type: 1 }]
            await didin.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: m })
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*`
            await didin.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: m })
            }
            break
case 'reeport': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
didin.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
didin.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
//ini MENU NYA YA ADICK"//
case 'menu': {
const Jimp = require('jimp')
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
buffer = global.thumb
  	anu = `*ʜᴀʟᴏ ${pushname} ${ucapanWaktu}*\n\n*sᴀʏᴀ ᴅɪᴅɪɴʙᴏᴛ, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʀᴍᴜᴅᴀʜ sᴇsᴜᴀᴛᴜ sᴇᴘᴇʀᴛɪ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴄᴋᴇʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ.*`
    var button = [{ buttonId: `tesrow`, buttonText: { displayText: `MENU‡` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
didin.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: button, footer:  didinyt, mentions: [m.sender] })
}
break
case 'rules': {
const Jimp = require('jimp')
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
buffer = global.rules
  	anu = `
*⚠️ sʏᴀʀᴀᴛ ᴅᴀɴ ᴋᴇᴛᴇɴᴛᴜᴀɴ ⚠️*

*1. ᴘᴇɴɢɢᴜɴᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴇᴍᴜᴀ ᴘᴇʀɪɴᴛᴀʜ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴘᴀᴍ ᴛᴇʀʜᴀᴅᴀᴘ ʙᴏᴛ.*
*2. ᴅɪʟᴀʀᴀɴɢ ᴋᴇʀᴀs ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴛᴇx ᴅᴀɴ sᴇᴍᴀᴄᴀᴍɴʏᴀ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ sᴇʀᴠᴇʀ ᴅᴏᴡɴ ᴀᴛᴀᴜᴘᴜɴ ʙᴏᴛ ᴄʀᴀsʜ.*
*3. ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ʜᴀʟ ᴀᴛᴀᴜ ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪsɪᴍᴘᴀɴ ᴏʟᴇʜ ʙᴏᴛ ɪɴɪ, ᴅᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ʙᴇʀᴛᴀɴɢɢᴜɴɢ ᴊᴀᴡᴀʙ ᴀᴛᴀs ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛᴇʀsᴇʙᴜᴛ!*
*4. ᴋᴀᴍɪ ᴛɪᴅᴀᴋ ᴘᴇʀɴᴀʜ ᴍᴇᴍɪɴᴛᴀ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ɪɴғᴏʀᴍᴀsɪ ᴘʀɪʙᴀᴅɪ.*

*❗ ʀᴜʟᴇs ❗*
1. ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ

2. ᴊᴀɴɢᴀɴ ᴛᴇʟᴇᴘᴏɴ ʙᴏᴛ.
sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ

3. ᴊᴀɴɢᴀɴ ᴍᴇɴɢᴇᴋsᴘʟᴏɪᴛᴀsɪ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴘᴇʀᴍᴀɴᴇɴᴛ ʙʟᴏᴄᴋ
___________________
ɴᴏᴛᴇ : ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴀᴜᴛᴏʀᴇᴀᴅ ᴀᴛᴀᴜ ʟᴀɴɢsᴜɴɢ ᴍᴇᴍʙᴀᴄᴀ ᴘᴇsᴀɴ ʏᴀɴɢ ᴘᴇɴɢɢᴜɴᴀ ᴋɪʀɪᴍ.`
    var button = [{ buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }, { buttonId: `donasi`, buttonText: { displayText: `DONASI‡` }, type: 1 }]
didin.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: button, footer:  mess.watermark, mentions: [m.sender] })
}
break
case 'tesrow':{
  // send a list message!
   const sections = [
    {
	title: "Sub Menu Ke-1",
	rows: [
	   {
	    title: "【⚙️】› Main menu ‹", 
	    rowId: `${prefix}mainmenu`,
	    description: 'Menu Utama',
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-2",
	rows: [
	   {
	    title: "【🏢】› Group ‹", 
	    rowId: `${prefix}grupmenu`,
	    description: "Atur grupmu dengan menjadikan bot sebagai admin ",
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-3",
	rows: [
	   {
	    title: "【📲】› Downloader ‹", 
	    rowId: `${prefix}downloadmenu`,
	    description: "Download sesuatu menggunakan bot",
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-4",
	rows: [
	   {
	    title: "【🛠️】› OwnerMenu ‹", 
	    rowId: `${prefix}ownermenu`,
	    description: "Menu Mengatur Bot ( Khusus Owner )",
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-5",
	rows: [
	   {
	    title: "【🔎】› Search ‹", 
	    rowId: `${prefix}searchmenu`,
	    description: "Mencari data data dari web menggunakan bot",
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-6",
	rows: [
	   {
	    title: "【🕋】› Islami ‹", 
	    rowId: `${prefix}islamimenu`,
	    description: "Menu khusus muslim",
      },	    
     ]
    },
    {
	title: "Sub Menu Ke-7",
	rows: [
	   {
	    title: "【💬】› Anonymous ‹", 
	    rowId: `${prefix}anonmenu`,
	    description: "Anonymous chat menggunakan bot",
      },	    
     ]
    },
    {
	title: "Sub Menu Ke-8",
	rows: [
	   {
	    title: "【📁】› Database ‹ ", 
	    rowId: `${prefix}dbmenu`,
	    description: "Mengatur file di database",
      },	    
     ]
    },
    {
	title: "Sub Menu Ke-9",
	rows: [
	   {
	    title: "【🎧】› Sound ‹", 
	    rowId: `${prefix}soundmenu`,
	    description: "Menampilkan Fitur Sound Menu",
	    },	    
     ]
    },
    {
	title: "Sub Menu Ke-10",
	rows: [
	   {
	    title: "【🔖】 Random ‹", 
	    rowId: `${prefix}randommenu`,
	    description: "Menampilkan Daftar Fitur Acak",
	    },	    
     ]
    },
    {
	title: "Sub Menu Ke-11",
	rows: [
	   {
	    title: "【🎙️】› VoiceChanger ‹", 
	    rowId: `${prefix}vcmenu`,
	    description: "Mengubah suara menggunakan bot",
	    },	    
     ]
    },
    {
	title: "Sub Menu Ke-12",
	rows: [
	   {
	    title: "【🕹️】› Convert ‹", 
	    rowId: `${prefix}convertmenu`,
	    description: "Membuat stiker dan mengconvert media menggunakan bot",
	    },	    
     ]
    },
    {
	title: "Sub Menu Ke-13",
	rows: [
	   {
	    title: "【🧩】› Fun ‹", 
	    rowId: `${prefix}funmenu`,
	    description: "Menu menyenangkan yang terdapat di bot",
	   },	    
     ]
    },
    {
	title: "Sub Menu Ke-15",
	rows: [
	   {
	    title: "【🎥】› Photo Oxy ‹", 
	    rowId: `${prefix}photomenu`,
	    description: "Menampilkan Daftar Fitur Photo Oxy",
	    	    	    },	    
     ]
    },
    {
	title: "Sub Menu Ke-16",
	rows: [
	   {
	    title: "【🗡️】› Text Pro ‹", 
	    rowId: `${prefix}textpro`,
	    description: "Menampilkan Daftar Fitur Text Pro",
	     },	    
     ]
    },
    {
	title: "Sub Menu Ke-17",
	rows: [
	   {
	    title: "【🎗️】› Game ‹", 
	    rowId: `${prefix}gamemenu`,
	    description: "Menampilkan Daftar Fitur Game",
	    },	    
     ]
    },
    {
    title: "Sub Menu Ke -18",
	rows: [
	   {
	    title: "【🔗️】› Short Link ‹", 
	    rowId: `${prefix}shortmenu`,
	    },	    
     ]
    },
    {
    title: "Sub Menu Ke -19",
	rows: [
	   {
	    title: "【📝️】› RANDOM CERPEN ‹", 
	    rowId: `${prefix}cerpenmenu`,
	    },	    
     ]
    },
    {
    title: "Sub Menu Ke -20",
	rows: [
	   {
	    title: "【👀】› Asupan Menu ‹", 
	    rowId: `${prefix}asupanmenu`,
	    },	    
     ]
    },
    {
    title: "Sub Menu Ke -21",
	rows: [
	   {
	    title: "【🌌】› Random Image ‹", 
	    rowId: `${prefix}randomimage`
	    },	    
     ]
    },
    {
    title: "Sub Menu Ke -22",
	rows: [
	   {
	    title: "【🌀】› Random Anime ‹", 
	    rowId: `${prefix}animemenu`,
	    },	    
     ]
    },
    {
	title: "Sewa Bot",
	rows: [
	   {
	    title: "【🏷️】› List Sewa Bot ‹", 
	    rowId: `${prefix}sewabot`,
	    description: "ketik .owner jika ingin menyewa bot ",
	    },	    
     ]
    },
    {
	title: "Source Code",
	rows: [
	   {
	    title: "【🤙】› Source Code Bot ‹", 
	    rowId: `${prefix}sc`,
	    description: "Script DidinBotz‡",
	    },	    
     ]
    },
    {
	title: "Thank To :",
	rows: [
	   {
	    title: "【🌹️】› Contributor ‹", 
	    rowId: `${prefix}tqto`,
	    description: "",
	    },	    
     ]
    },
    {
	title: "Request Fitur",
	rows: [
	   {
	    title: "【💫】› Request ‹", 
	    rowId: `${prefix}req`,
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Hai kak ${pushname} ${ucapanWaktu}_*\n\n_Aku didinBotz‡ Bot whatsapp multi-device yang dapat membantumu_`,
   footer: "DidinBotz‡",
   title: "",
   buttonText: "Click Here!",
   sections
   }

  didin.sendMessage(m.chat, listMessage, {quoted:m})
  var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "*_Halo Kk, Saya Owner DidinBotz_*\n\n*_Apakah Kk Nya Puas Dengan Fitur Fitur Yang Ada Di DidinBotz‡ ?_*",
"options": [
	{
"optionName": "Sangat Puas"
	},
	{
"optionName": "Puas"
	},
	{
"optionName": "Tidak"
	},
	{
"optionName": "Banyak Eror"
	},
	{
"optionName": "Fitur Nya Dikit"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: m })
didin.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
  }
break
case 'gamemenu':{
  // send a list message!
   const sections = [
    {
	title: "Game 1",
	rows: [
	   {
	    title: "Tebak Gambar", 
	    rowId: `${prefix}tebakgambar`,
	   },	    
     ]
    },
    {
	title: "Game 2",
	rows: [
	   {
	    title: "Tebak Lirik", 
	    rowId: `${prefix}tebak lirik`,
	   },	    
     ]
    },
    {
	title: "Game 3",
	rows: [
	   {
	    title: "tictactoe", 
	    rowId: `${prefix}tictactoe`,
	   },	    
     ]
    },
    {
	title: "Game 4",
	rows: [
	   {
	    title: "Tebak Kata", 
	    rowId: `${prefix}tebak kata`,
	   },	    
     ]
    },
    {
	title: "Game 5",
	rows: [
	   {
	    title: "Tebak Lontong", 
	    rowId: `${prefix}tebak lontong`,
	   },	    
     ]
    },
    {
	title: "Game 6",
	rows: [
	   {
	    title: "Tebak Lagu", 
	    rowId: `${prefix}tebak lagu`,
      },	    
     ]
    },
    {
	title: "Game 7",
	rows: [
	   {
	    title: "Tebak Kalimat", 
	    rowId: `${prefix}tebak kalimat`,
      },	    
     ]
    },
    {
	title: "Game 8",
	rows: [
	   {
	    title: "Suit PvP", 
	    rowId: `${prefix}suitpvp`,
	    description: "",
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Hai kak ${pushname} ${ucapanWaktu}_*\n\n_Berikut Game" Yang Tersedia Di DidinBotz‡_`,
   footer: "DidinBotz‡",
   title: "",
   buttonText: "Buka!",
   sections
   }

  didin.sendMessage(m.chat, listMessage, {quoted:m})


  }
break
case 'sc':{
let sections = [

                {

                title: "THANK TO",

                rows: [

                {title: "Contributor", rowId: `${prefix}tqto`, description: ``},

                ]

                },

                ]

                didin.sendListMsg(m.chat, `*❏ DidinBotz‡*

Bot ini dibuat menggunakan *NodeJS* dengan bantuan *Baileys* sebagai Whatsapp Web API dan dimodifikasi dari *Hisoka Morou ( DikaArdnt )

*❏ SCIRPT BOT*
ORI : https://github.com/DikaArdnt/Hisoka-Morou
RECODE : https://safelink.id/fUSteSe
© DidinBotz‡`, ' ', ' ', `Buka!`, sections, m)
       }
break
case 'sewabot':{
let sections = [

                {

                title: "✧──────[ SEWABOT ]──────✧",

                rows: [

                {title: "OWNER", rowId: `${prefix}owner`, description: ``},
                
                {title: "Official Bot WhatsApp", rowId: `${prefix}groupbot`, description: ``},

                ]

                },

                ]

                didin.sendListMsg(m.chat, `*────── 「 SEWA BOT 」 ──────*
                
𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Group : 5k/15Hari
┣★ミ Premium : 10k/Bulan
┣★ミ Premium : 15k/2bulan

*_•❅〔 NOTE 〕_*
┣➲ Pembayaran : Hanya Tersedia Via Dana.
┣➲ Proses : Transaksi Sepertinya umumnya,chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.
┣➲ Penting : Simpan nomor owner dan join ke dalam group Official di bawah untuk mengetahui update bot 
┗━━━•❅•°•❈`, ' ', ' ', `Lihat!`, sections, m)
       }
break
            case 'grupmenu': {
goup = `┌──⭓ *Group Menu*
│• ${prefix}linkgroup
│• ${prefix}ephemeral [option]
│• ${prefix}setppgc [image]
│• ${prefix}setname [text]
│• ${prefix}setdesc [text]
│• ${prefix}group [option]
│• ${prefix}editinfo [option]
│• ${prefix}add @user
│• ${prefix}kick @user
│• ${prefix}hidetag [text]
│• ${prefix}tagall [text]
│• ${prefix}antilink [on/off]
│• ${prefix}mute [on/off]
│• ${prefix}promote @user
│• ${prefix}demote @user
│• ${prefix}vote [text]
│• ${prefix}devote
│• ${prefix}upvote
│• ${prefix}cekvote
│• ${prefix}hapusvote
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, goup, nyoutube, m)
                }
            break
            case 'soundmenu': {
goup = `┌──⭓ *Sound Menu*
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound55
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, goup, nyoutube, m)
                }
            break
case 'cerpenmenu': {
goup = `┌──⭓ *RANDOM CERPEN*
│• ${prefix}cerpen
│• ${prefix}cerpen-sejarah
│• ${prefix}cerpen-sedih
│• ${prefix}cerpen-sastra
│• ${prefix}cerpen-romantis
│• ${prefix}cerpen-rohani
│• ${prefix}cerpen-rindu
│• ${prefix}cerpen-remaja
│• ${prefix}cerpen-ramadhan
│• ${prefix}cerpen-petualangan
│• ${prefix}cerpen-persahabatan
│• ${prefix}cerpen-perpisahan
│• ${prefix}cerpen-perjuangan
│• ${prefix}cerpen-penyesalan
│• ${prefix}cerpen-pengorbanan
│• ${prefix}cerpen-pengalaman
│• ${prefix}cerpen-pendidikan
│• ${prefix}cerpen-penantian
│• ${prefix}cerpen-patahhati
│• ${prefix}cerpen-olahraga
│• ${prefix}cerpen-nasionalisme
│• ${prefix}cerpen-nasihat
│• ${prefix}cerpen-motivasi
│• ${prefix}cerpen-misteri
│• ${prefix}cerpen-mengharukan
│• ${prefix}cerpen-malaysia
│• ${prefix}cerpen-liburan
│• ${prefix}cerpen-kristen
│• ${prefix}cerpen-korea
│• ${prefix}cerpen-kisahnyata
│• ${prefix}cerpen-keluarga
│• ${prefix}cerpen-kehidupan
│• ${prefix}cerpen-jepang
│• ${prefix}cerpen-inspiratif
│• ${prefix}cerpen-gokil
│• ${prefix}cerpen-galau
│• ${prefix}cerpen-cintasejati
│• ${prefix}cerpen-cintasegitiga
│• ${prefix}cerpen-cintasedih
│• ${prefix}cerpen-cintaromantis
│• ${prefix}cerpen-cintapertama
│• ${prefix}cerpen-cintaislami
│• ${prefix}cerpen-cinta
│• ${prefix}cerpen-budaya
│• ${prefix}cerpen-bahasasunda
│• ${prefix}cerpen-bahasajawa
│• ${prefix}cerpen-bahasainggris
│• ${prefix}cerpen-bahasadaerah
│• ${prefix}cerpen-anak
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, goup, nyoutube, m)
                }
            break
            case 'photomenu': {
pimbon = `┌──⭓ *Photo Oxy*
│• ${prefix}naruto
│• ${prefix}picture-of-love
│• ${prefix}coffee-cup
│• ${prefix}butterfly
│• ${prefix}metallic
│• ${prefix}night-sky
│• ${prefix}under-grass
│• ${prefix}harry-potter
│• ${prefix}sweet-candy
│• ${prefix}carved-wood
│• ${prefix}illuminated-metallic
│• ${prefix}flower-typography
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, pimbon, nyoutube, m)
            }
            break
            case 'downloadmenu': {
dwnloader = `┌──⭓ *Downloader Menu*
│• ${prefix}tiktok [url]
│• ${prefix}wikimedia [url]
│• ${prefix}pinterest
│• ${prefix}ytmp3 [url]
│• ${prefix}ytmp4 [url]
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m)
            }
            break
            case 'searchmenu': {
sarch = `┌──⭓ *Search Menu*
│• ${prefix}play [query]
│• ${prefix}yts [query]
│• ${prefix}google [query]
│• ${prefix}gimage [query]
│• ${prefix}pinterest [query]
│• ${prefix}wallpaper [query]
│• ${prefix}wikimedia [query]
│• ${prefix}ringtone [query]
│• ${prefix}stalk [option] [query]
│• ${prefix}ssweb [ link ]
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, sarch, nyoutube, m)
            }
            break
            case 'randommenu': {
rndom = `┌──⭓ *Random Menu*
│• ${prefix}coffe
│• ${prefix}quotesanime
│• ${prefix}motivasi
│• ${prefix}quotes
│• ${prefix}quotesjawa
│• ${prefix}katagalau
│• ${prefix}dilan
│• ${prefix}katabucin
│• ${prefix}bucin
│• ${prefix}katailham
│• ${prefix}renungan
│• ${prefix}gombalan
│• ${prefix}couple
│• ${prefix}anime
│• ${prefix}waifu
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, rndom, nyoutube, m)
            }
            break
            case 'hostingmenu': {
rndom = `┌──⭓ *Hosting Menu*
│• ${prefix}createcp
│• ${prefix}listcp
│• ${prefix}termintate
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, rndom, nyoutube, m)
            }
            break
            case 'textpro': {
txtpro = `┌──⭓ *Text Pro Menu*
│• ${prefix}blackpink
│• ${prefix}glitch
│• ${prefix}berry
│• ${prefix}pencil
│• ${prefix}3dboxtext
│• ${prefix}neon
│• ${prefix}logobear
│• ${prefix}thunder
│• ${prefix}3dchristmas
│• ${prefix}strawberry
│• ${prefix}magma
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, txtpro, nyoutube, m)
            }
            break
case 'ephotomenu': {
potooxy = `┌──⭓ *Ephoto Menu*
│• ${prefix}neon
│• ${prefix}ffcover
│• ${prefix}galaxy
│• ${prefix}ytcertificate 
│• ${prefix}igcertificate 
│• ${prefix}beach
│• ${prefix}crossfire
│• ${prefix}glass
│• ${prefix}awan
│• ${prefix}flower
│• ${prefix}Musim Semi
│• ${prefix}Kaligrafi
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, potooxy, nyoutube, m)
            }
            break
           case 'funmenu': {
mun = `┌──⭓ *Fun Menu*
│• ${prefix}simih
│• ${prefix}halah
│• ${prefix}hilih
│• ${prefix}huluh
│• ${prefix}heleh
│• ${prefix}holoh
│• ${prefix}jadian
│• ${prefix}jodohku
│• ${prefix}delttt
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, mun, nyoutube, m)
            }
            break
            case 'primbonmenu': {
pimbon = `┌──⭓ *Primbon Menu*
│• ${prefix}nomorhoki
│• ${prefix}artimimpi
│• ${prefix}artinama
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}jadiannikah
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}nasib
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}fengshui
│• ${prefix}haribaik
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}nagahari
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}karakter
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, pimbon, nyoutube, m)
            }
            break
case 'imagemaker': {
pimbon = `┌──⭓ *Image Maker,*
│• ${prefix}wanted
│• ${prefix}trigger
│• ${prefix}resize
│• ${prefix}rainbow
│• ${prefix}pixelate
│• ${prefix}darkness
│• ${prefix}blur
│• ${prefix}beautiful
│• ${prefix}circle
│• ${prefix}invert
│• ${prefix}facepalm
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, pimbon, nyoutube, m)
            }
            break
            case 'convertmenu': {
cnvert = `┌──⭓ *Convert Menu*
│• ${prefix}attp
│• ${prefix}ttp
│• ${prefix}toimage
│• ${prefix}removebg
│• ${prefix}sticker
│• ${prefix}emojimix
│• ${prefix}emojimix2
│• ${prefix}tovideo
│• ${prefix}togif
│• ${prefix}tourl
│• ${prefix}tovn
│• ${prefix}tomp3
│• ${prefix}toaudio
│• ${prefix}ebinary
│• ${prefix}dbinary
│• ${prefix}styletext
│• ${prefix}smeme
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, cnvert, nyoutube, m)
            }
            break
            case 'mainmenu': {
min = `┌──⭓ *Main Menu*
│• ${prefix}ping
│• ${prefix}owner
│• ${prefix}menu / ${prefix}help / ${prefix}?
│• ${prefix}delete
│• ${prefix}infochat
│• ${prefix}quoted
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}listonline
│• ${prefix}tinyurl
│• ${prefix}menfess
│• ${prefix}speedtest
│• ${prefix}request
│• ${prefix}styletext
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
case 'randomimage': {
min = `┌──⭓ *Random Image*
│• ${prefix}darkjokes
│• ${prefix}meme
│• ${prefix}aestatic
│• ${prefix}mountain
│• ${prefix}art
│• ${prefix}boneka
│• ${prefix}cyber
│• ${prefix}doraemon
│• ${prefix}exo
│• ${prefix}wallpapergame
│• ${prefix}islamic
│• ${prefix}kartun
│• ${prefix}katakata
│• ${prefix}kpop
│• ${prefix}mobil
│• ${prefix}motor
│• ${prefix}programming
│• ${prefix}pubg
│• ${prefix}pokemon
│• ${prefix}quotesyt
│• ${prefix}stanic
│• ${prefix}tatasurya
│• ${prefix}technology
│• ${prefix}wallhp
│• ${prefix}wallml
│• ${prefix}wallnime
│• ${prefix}yulibocil
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
            case 'animemenu': {
min = `┌──⭓ *Random Anime*
│• ${prefix}loli
│• ${prefix}husbu
│• ${prefix}boruto
│• ${prefix}asuna
│• ${prefix}luffy
│• ${prefix}anya
│• ${prefix}akiyama
│• ${prefix}ana
│• ${prefix}ayuzawa
│• ${prefix}chiho
│• ${prefix}chitoge
│• ${prefix}cosplay
│• ${prefix}deidara
│• ${prefix}eba
│• ${prefix}emilia
│• ${prefix}erza
│• ${prefix}isuzu
│• ${prefix}itachi
│• ${prefix}itori
│• ${prefix}kaga
│• ${prefix}kagura
│• ${prefix}kakasih
│• ${prefix}kaori
│• ${prefix}kaneki
│• ${prefix}kotori
│• ${prefix}kurumi
│• ${prefix}madara
│• ${prefix}mikasa
│• ${prefix}mikey
│• ${prefix}miku
│• ${prefix}milf
│• ${prefix}minato
│• ${prefix}nezuko
│• ${prefix}sasuke
│• ${prefix}sakura
│• ${prefix}shina
│• ${prefix}shinka
│• ${prefix}shinomiya
│• ${prefix}shizuka
│• ${prefix}shota
│• ${prefix}toukachan
│• ${prefix}tsunade
│• ${prefix}yotsuba
│• ${prefix}yumeko
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
case 'asupanmenu': {
min = `┌──⭓ *Asupan Menu*
│• ${prefix}asupan
│• ${prefix}asupanloli
│• ${prefix}asupankayes
│• ${prefix}asupanghea
│• ${prefix}asupanbocil
│• ${prefix}asupanukhty
│• ${prefix}asupansantuy
│• ${prefix}asupanrika
│• ${prefix}asupannotnot
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
case 'shortmenu': {
min = `┌──⭓ *Short Link*
│• ${prefix}bitly
│• ${prefix}tinyurl
│• ${prefix}cuttly
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
            case 'dbmenu': {
dtbase = `┌──⭓ *Database Menu*
│• ${prefix}setcmd
│• ${prefix}listcmd
│• ${prefix}delcmd
│• ${prefix}lockcmd
│• ${prefix}addmsg
│• ${prefix}listmsg
│• ${prefix}getmsg
│• ${prefix}delmsg
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, dtbase, nyoutube, m)
            }
            break
            case 'anonmenu': {
aonymous = `┌──⭓ *Anonymous Menu*
│• ${prefix}anonymous
│• ${prefix}start
│• ${prefix}next
│• ${prefix}keluar
│• ${prefix}menfess
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, aonymous, nyoutube, m)
            }
            break
            case 'islamimenu': {
islmic = `┌──⭓ *Islamic Menu*
│• ${prefix}iqra
│• ${prefix}hadist
│• ${prefix}alquran
│• ${prefix}ceramah
│• ${prefix}tafsirsurah
│• ${prefix}jadwalsholat
│• ${prefix}asmaulhusna
│• ${prefix}niatsholat 
│• ${prefix}kisahnabi
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, islmic, nyoutube, m)
            }
            break
case 'vcmenu': {
vice = `┌──⭓ *Voice Changer*
│• ${prefix}bass
│• ${prefix}blown
│• ${prefix}deep
│• ${prefix}earrape
│• ${prefix}fast
│• ${prefix}fat
│• ${prefix}nightcore
│• ${prefix}reverse
│• ${prefix}robot
│• ${prefix}slow
│• ${prefix}tupai
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, vice, nyoutube, m)
            }
            break
            case 'ownermenu': {
oner = `┌──⭓ *Owner Menu*
│• ${prefix}react [emoji]
│• ${prefix}chat [option]
│• ${prefix}join [link]
│• ${prefix}leave
│• ${prefix}block @user
│• ${prefix}unblock @user
│• ${prefix}bcgroup [text]
│• ${prefix}bcall [text]
│• ${prefix}setppbot [image]
│• ${prefix}setexif
│• ${prefix}setmenu [option]
│• ${prefix}bitly
│• ${prefix}cuttly
│• ${prefix}tinyurl
└───────⭓`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, oner, nyoutube, m)
            }
            break
            case 'sjsk': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${ucapanWaktu}* kak @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
┌──⭓ *Group Menu*
│• ${prefix}linkgroup
│• ${prefix}ephemeral [option]
│• ${prefix}setppgc [image]
│• ${prefix}setname [text]
│• ${prefix}setdesc [text]
│• ${prefix}group [option]
│• ${prefix}editinfo [option]
│• ${prefix}add @user
│• ${prefix}kick @user
│• ${prefix}hidetag [text]
│• ${prefix}tagall [text]
│• ${prefix}antilink [on/off]
│• ${prefix}mute [on/off]
│• ${prefix}promote @user
│• ${prefix}demote @user
│• ${prefix}vote [text]
│• ${prefix}devote
│• ${prefix}upvote
│• ${prefix}cekvote
│• ${prefix}hapusvote
└───────⭓
┌──⭓ *Webzone Menu*
│• ${prefix}playstore
│• ${prefix}gsmarena
│• ${prefix}jadwalbioskop
│• ${prefix}nowplayingbioskop
│• ${prefix}aminio
│• ${prefix}wattpad
│• ${prefix}webtoons
│• ${prefix}drakor
└───────⭓
┌──⭓ *Downloader Menu*
│• ${prefix}tiktoknowm [url]
│• ${prefix}tiktokwm [url]
│• ${prefix}tiktokmp3 [url]
│• ${prefix}instagram [url]
│• ${prefix}twitter [url]
│• ${prefix}twittermp3 [url]
│• ${prefix}facebook [url]
│• ${prefix}pinterestdl [url]
│• ${prefix}ytmp3 [url]
│• ${prefix}ytmp4 [url]
│• ${prefix}getmusic [query]
│• ${prefix}getvideo [query]
│• ${prefix}umma [url]
│• ${prefix}joox [query]
│• ${prefix}soundcloud [url]
└───────⭓
┌──⭓ *Search Menu*
│• ${prefix}play [query]
│• ${prefix}yts [query]
│• ${prefix}google [query]
│• ${prefix}gimage [query]
│• ${prefix}pinterest [query]
│• ${prefix}wallpaper [query]
│• ${prefix}wikimedia [query]
│• ${prefix}ytsearch [query]
│• ${prefix}ringtone [query]
│• ${prefix}stalk [option] [query]
└───────⭓
┌──⭓ *Random Menu*
│• ${prefix}coffe
│• ${prefix}quotesanime
│• ${prefix}motivasi
│• ${prefix}dilanquote
│• ${prefix}bucinquote
│• ${prefix}katasenja
│• ${prefix}puisi
│• ${prefix}couple
│• ${prefix}anime
│• ${prefix}waifu
└───────⭓
┌──⭓ *Text Pro Menu*
│• ${prefix}3dchristmas
│• ${prefix}3ddeepsea
│• ${prefix}americanflag
│• ${prefix}3dscifi
│• ${prefix}3drainbow
│• ${prefix}3dwaterpipe
│• ${prefix}halloweenskeleton
│• ${prefix}sketch
│• ${prefix}bluecircuit
│• ${prefix}space
│• ${prefix}metallic
│• ${prefix}fiction
│• ${prefix}greenhorror
│• ${prefix}transformer
│• ${prefix}berry
│• ${prefix}thunder
│• ${prefix}magma
│• ${prefix}3dcrackedstone
│• ${prefix}3dneonlight
│• ${prefix}impressiveglitch
│• ${prefix}naturalleaves
│• ${prefix}fireworksparkle
│• ${prefix}matrix
│• ${prefix}dropwater
│• ${prefix}harrypotter
│• ${prefix}foggywindow
│• ${prefix}neondevils
│• ${prefix}christmasholiday
│• ${prefix}3dgradient
│• ${prefix}blackpink
│• ${prefix}gluetext
└───────⭓
┌──⭓ *Photo Oxy Menu*
│• ${prefix}shadow
│• ${prefix}romantic
│• ${prefix}smoke
│• ${prefix}burnpapper
│• ${prefix}naruto
│• ${prefix}lovemsg
│• ${prefix}grassmsg
│• ${prefix}lovetext
│• ${prefix}coffecup
│• ${prefix}butterfly
│• ${prefix}harrypotter
│• ${prefix}retrolol
└───────⭓
┌──⭓ *Ephoto Menu*
│• ${prefix}ffcover
│• ${prefix}crossfire
│• ${prefix}galaxy
│• ${prefix}glass
│• ${prefix}neon
│• ${prefix}beach
│• ${prefix}blackpink
│• ${prefix}igcertificate
│• ${prefix}ytcertificate
└───────⭓
┌──⭓ *Fun Menu*
│• ${prefix}simih
│• ${prefix}halah
│• ${prefix}hilih
│• ${prefix}huluh
│• ${prefix}heleh
│• ${prefix}holoh
│• ${prefix}jadian
│• ${prefix}jodohku
│• ${prefix}delttt
│• ${prefix}tictactoe
│• ${prefix}family100
│• ${prefix}tebak [option]
│• ${prefix}math [mode]
│• ${prefix}suitpvp [@tag]
└───────⭓
┌──⭓ *Primbon Menu*
│• ${prefix}nomorhoki
│• ${prefix}artimimpi
│• ${prefix}artinama
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}jadiannikah
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}nasib
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}fengshui
│• ${prefix}haribaik
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}nagahari
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}karakter
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak
└───────⭓
┌──⭓ *Convert Menu*
│
│• ${prefix}attp
│• ${prefix}ttp
│• ${prefix}toimage
│• ${prefix}removebg
│• ${prefix}sticker
│• ${prefix}emojimix
│• ${prefix}emojimix2
│• ${prefix}tovideo
│• ${prefix}togif
│• ${prefix}tourl
│• ${prefix}tovn
│• ${prefix}tomp3
│• ${prefix}toaudio
│• ${prefix}ebinary
│• ${prefix}dbinary
│• ${prefix}styletext
│• ${prefix}smeme
└───────⭓
┌──⭓ *Main Menu*
│
│• ${prefix}ping
│• ${prefix}owner
│• ${prefix}menu / ${prefix}help / ${prefix}?
│• ${prefix}delete
│• ${prefix}infochat
│• ${prefix}quoted
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}listonline
│• ${prefix}speedtest
└───────⭓
┌──⭓ *Database Menu*
│
│• ${prefix}setcmd
│• ${prefix}listcmd
│• ${prefix}delcmd
│• ${prefix}lockcmd
│• ${prefix}addmsg
│• ${prefix}listmsg
│• ${prefix}getmsg
│• ${prefix}delmsg
└───────⭓
┌──⭓ *Anonymous Menu*
│• ${prefix}anonymous
│• ${prefix}start
│• ${prefix}next
│• ${prefix}keluar
└───────⭓
┌──⭓ *Islamic Menu*
│• ${prefix}iqra
│• ${prefix}hadist
│• ${prefix}alquran
│• ${prefix}juzamma
│• ${prefix}tafsirsurah
└───────⭓
┌──⭓ *Voice Changer*
│• ${prefix}bass
│• ${prefix}blown
│• ${prefix}deep
│• ${prefix}earrape
│• ${prefix}fast
│• ${prefix}fat
│• ${prefix}nightcore
│• ${prefix}reverse
│• ${prefix}robot
│• ${prefix}slow
│• ${prefix}tupai
└───────⭓
┌──⭓ *Owner Menu*
│• ${prefix}react [emoji]
│• ${prefix}chat [option]
│• ${prefix}join [link]
│• ${prefix}leave
│• ${prefix}block @user
│• ${prefix}unblock @user
│• ${prefix}bcgroup [text]
│• ${prefix}bcall [text]
│• ${prefix}setppbot [image]
│• ${prefix}setexif
│• ${prefix}setmenu [option]
└───────⭓
_Donasi Ngab_\n_Jangan Ngarep Free Mulu_`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await didin.sendButtonText(m.chat, buttons, anu, nyoutube, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
didin_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await didin.sendMessage(m.chat, { audio: didin_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    didin.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})