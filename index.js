const fetch = require("node-fetch"); // v. 2.6.7
const readline = require("readline-sync");
const fs = require("fs");


async function PorcoDio(){
console.log("[+] Thanks for using this shitty tool made by https://github.com/bobakabona");
console.log("");
var c = readline.question("[?] Token : ");

const checkToken = await fetch("https://discord.com/api/v9/users/@me", {method:"GET", headers:{"authorization": c}})
const lol = await checkToken.json();

if(!lol.discriminator) return console.log("[-] Invalid token")
var ded = readline.question("[?] Nickname of bots : ");
if(ded.length === 1 | ded.length === 2) return console.log("[-] The nickname is small (like ur dick).")

var dead = readline.question("[?] Number of the bots you want create : ")
 if(isNaN(dead)) return console.log(`[-] ${dead} is not a number.`)
if(dead.length>50 | dead.length === 0) return console.log("[-] Please write a number between 0 & 50 ")




for(var d=0;d<dead;d++){
	const wtappae = await fetch("https://discord.com/api/v9/applications", {
        method: "POST",
        headers: {
        "authority": "discord.com",
        "method": "POST",
        "path": "/api/v9/guilds",
        "scheme": "https",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "it,it-IT;q=0.9",
        "authorization": c,
        "access-control-allow-headers": "Content-Type, Authorization, X-Audit-Log-Reason, X-Track, X-Super-Properties, X-Context-Properties, X-Failed-Requests, X-Fingerprint, X-RPC-Proxy, X-Discord-Locale, X-Debug-Options, x-client-trace-id, If-None-Match, Range, X-RateLimit-Precision",
        "content-length": "113",
        "content-type": "application/json",
        "cookie": `__dcfduid=6b7176606a6211ec83d3ff3171482131; __sdcfduid=6b7176616a6211ec83d3ff3171482131229118a8d537fe6fabbaa0c7cd28a3884f10148963671260213c6a0c47c638ae; __stripe_mid=5cd7c16b-d1de-4053-b8e8-6560904f2ef1ef728b`,
        "origin": "https://discord.com",
        "referer": "https://discord.com/channels/@me",
        "sec-fetch-dest": "empty",
        "sec-ch-ua": `" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"`,
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "it",
        "x-super-properties": "eyJvcyI2IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDEiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6Iml0IiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEwNDUxLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
            "x-track": `eyJvcyI6IldpbmRvd3MiLCJicd93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6Iml0LUlUIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk3LjAuNDY5Mi45OSBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiOTcuMC40NjkyLjk5Iiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsInJlZmVycmluZ19kb21haW4iOiJ3d3cuZ29vZ2xlLmNvbSIsInNlYXJjaF9lbmdpbmUiOiJnb29nbGUiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmDsIjodc3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJVciI6OTk5OSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH2=`
        },
       body: JSON.stringify({name: ded, team_id: null})

    })
const caca = await fetch("https://test.restapiv1.it/ownerInfo?owner=Boba", {
	method: "GET"
})
const ww = await caca.json();
const hahaw = await wtappae.json();
if(hahaw.message === "You are being rate limited.") return 	console.log("[-] You are rate limited");

if(hahaw.code === 429){
	console.log("[-] Please contact " + ww.username);
} else {
	console.log("[+] Created application with name " + hahaw.name);
}
const createBut = await fetch(`https://discord.com/api/v9/applications/${hahaw.id}/bot`, {
	method: "POST",
	headers: {
        "authority": "discord.com",
        "method": "POST",
        "path": "/api/v9/guilds",
        "scheme": "https",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "it,it-IT;q=0.9",
        "authorization": c,
        "access-control-allow-headers": "Content-Type, Authorization, X-Audit-Log-Reason, X-Track, X-Super-Properties, X-Context-Properties, X-Failed-Requests, X-Fingerprint, X-RPC-Proxy, X-Discord-Locale, X-Debug-Options, x-client-trace-id, If-None-Match, Range, X-RateLimit-Precision",
        "content-length": "113",
        "content-type": "application/json",
        "cookie": `__dcfduid=6b7176606a6211ec83d3ff3171482131; __sdcfduid=6b7176616a6211ec83d3ff3171482131229118a8d537fe6fabbaa0c7cd28a3884f10148963671260213c6a0c47c638ae; __stripe_mid=5cd7c16b-d1de-4053-b8e8-6560904f2ef1ef728b`,
        "origin": "https://discord.com",
        "referer": "https://discord.com/channels/@me",
        "sec-fetch-dest": "empty",
        "sec-ch-ua": `" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"`,
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "it",
        "x-super-properties": "eyJvcyI2IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDEiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6Iml0IiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEwNDUxLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
            "x-track": `eyJvcyI6IldpbmRvd3MiLCJicd93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6Iml0LUlUIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk3LjAuNDY5Mi45OSBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiOTcuMC40NjkyLjk5Iiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsInJlZmVycmluZ19kb21haW4iOiJ3d3cuZ29vZ2xlLmNvbSIsInNlYXJjaF9lbmdpbmUiOiJnb29nbGUiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmDsIjodc3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJVciI6OTk5OSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH2=`
        },
})

const lod = await createBut.json();
if(lod.message === "You are being rate limited.") return console.log("[-] You are rate limited");
console.log("[+] Created bot");
var toknn = lod.token;
const saveTokens = fs.createWriteStream('tokens.txt', {
    flags: "a"
})
saveTokens.write(`\n${toknn}`)
}



}





PorcoDio();
