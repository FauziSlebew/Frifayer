/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	didin: 'https://api-didinbotz.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'a82716863f',
}

// Other
global.owner = ['6287837703726','6287837703726']
global.ownernomer = "6287837703726"
global.premium = ['6287837703726']
global.packname = 'Dibuat Oleh'
global.didinbot = '𝙁𝙖𝙪𝙯𝙞𝘽𝙤𝙩𝙯-𝙈𝙙'
global.author = '𝙁𝙖𝙪𝙯𝙞𝘽𝙤𝙩𝙯-𝙈𝙙'
global.sessionName = 'didinsec'
global.prefa = ['','!','.','#','&']
global.tutorial = 'https://youtu.be/hHQRs_eCoXM'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    verify: 'Daftar Dulu Kk, Cara Daftar nya Ketik .menu',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '[❗] SEDANG DIPROSES',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./DidinMedia/didin.png')
global.didinbc = fs.readFileSync('./DidinMedia/didinbc.png')
global.rules = fs.readFileSync('./DidinMedia/rules.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
