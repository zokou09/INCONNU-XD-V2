
import config from '../../config.cjs';

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🪆');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    let profilePictureUrl = 'https://files.catbox.moe/959dyk.jpg'; // Default image URL
    try {
      const pp = await sock.profilePictureUrl(m.sender, 'image');
      if (pp) {
        profilePictureUrl = pp;
      }
    } catch (error) {
      console.error("Failed to fetch profile picture:", error);
      // Use the default image if fetching fails
    }

    const menuText = `
    ╭──────────────────⭓
│  ⚡ 𝙄𝙉𝘾𝙊𝙉𝙉𝙐-𝙓𝘿-𝙑2 ⚡
│ Version: 2.0.0
│ Dev: INCONNU BOY TECH
╰──────────────────⭓
 ────────────────────
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙄𝙉𝘾𝙊𝙉𝙉𝙐-𝙓𝘿-𝙑2
────────────────────

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗠𝗘𝗡𝗨 』
│ ⬡ menu
│ ⬡ alive
│ ⬡ owner
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗢𝗪𝗡𝗘𝗥 』
│ ⬡ join
│ ⬡ leave
│ ⬡ autobio
│ ⬡ block
│ ⬡ unblock
│ ⬡ autolikestatus
│ ⬡ antidelete on
│ ⬡ anticall
│ ⬡ settings
│ ⬡ setname
│ ⬡ vv
│ ⬡ cal
│ ⬡ delete
│ ⬡ inconnu add
│ ⬡ inconnu del
│ ⬡ inconnu list
│ ⬡ vv2
│ ⬡ setprefix
│ ⬡ Profile
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗔𝗜 』
│ ⬡ ai
│ ⬡ bug
│ ⬡ report
│ ⬡ chatbot
│ ⬡ gpt
│ ⬡ inconnu-ai
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗖𝗩𝗧𝗥 』
│ ⬡ attp
│ ⬡ gimage
│ ⬡ play
│ ⬡ video
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗦𝗘𝗔𝗥𝗖𝗛 』
│ ⬡ google
│ ⬡ mediafire
│ ⬡ facebook
│ ⬡ instagram
│ ⬡ tiktok
│ ⬡ lyrics
│ ⬡ imdb
│ ⬡ image
│ ⬡ playstore
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗙𝗨𝗡 』
│ ⬡ getpp
│ ⬡ url
│ ⬡ movie
│ ⬡ flirt
│ ⬡ givetext
│ ⬡ roast
│ ⬡ anime
│ ⬡ profile
│ ⬡ ebinary
│ ⬡ fetch
│ ⬡ qc
│ ⬡ score
│ ⬡ toqr
│ ⬡ ebinary
│ ⬡ tempmail
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗚𝗥𝗢𝗨𝗣𝗦 』
│ ⬡ kickall
│ ⬡ remove
│ ⬡ tagall
│ ⬡ hidetag
│ ⬡ close
│ ⬡ open
│ ⬡ vcf
│ ⬡ linkgc
│ ⬡ antilink
│ ⬡ antitag
│ ⬡ setname
│ ⬡ promote
│ ⬡ demote
│ ⬡ antidelete
│ ⬡ groupinfo
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗛𝗘𝗡𝗧𝗔𝗜 』
│ ⬡ hneko
│ ⬡ trap
│ ⬡ hwaifu
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗔𝗨𝗗𝗜𝗢-𝗘𝗙𝗙𝗘𝗖𝗧𝗦 』
│ ⬡ earrape
│ ⬡ deep
│ ⬡ blown
│ ⬡ bass
│ ⬡ nightcore
│ ⬡ fat
│ ⬡ fast
│ ⬡ robot
│ ⬡ tupai
│ ⬡ smooth
│ ⬡ slow
│ ⬡ reverse
╰──────────────────⭓

⭓──────────────────⭓『 𝗜𝗡𝗖𝗢𝗡𝗡𝗨-𝗫𝗗 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 』
│ ⬡ bonk
│ ⬡ bully
│ ⬡ yeet
│ ⬡ slap
│ ⬡ nom
│ ⬡ poke
│ ⬡ awoo
│ ⬡ wave
│ ⬡ smile
│ ⬡ dance
│ ⬡ smug
│ ⬡ blush
│ ⬡ cringe
│ ⬡ sad
│ ⬡ happy
│ ⬡ shinobu
│ ⬡ cuddle
│ ⬡ glomp
│ ⬡ handhold
│ ⬡ highfive
│ ⬡ yeet
│ ⬡ kick
│ ⬡ kill
│ ⬡ kiss
│ ⬡ cry
│ ⬡ bite
│ ⬡ lick
│ ⬡ pat
│ ⬡ hug
╰──────────────────⭓

───────────────────⭓
⚡ 𝙄𝙉𝘾𝙊𝙉𝙉𝙐 𝘽𝙊𝙔 𝙏𝙀𝘾𝙃 ⚡
───────────────────⭓
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "INCONNU-XD-V2",
          newsletterJid: "120363397722863547@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default menu;
