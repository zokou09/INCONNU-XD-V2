import config from '../../config.cjs';

const tagall = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['hidetag'];
    if (!validCommands.includes(cmd)) return;
    if (!m.isGroup) return m.reply("*📛 This command can only be used in groups.*");

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;

    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    if (!botAdmin) return m.reply("*📛 The bot must be an admin to use this command.*");
    if (!senderAdmin) return m.reply("*📛 You must be an admin to use this command.*");

    const messageToSend = m.quoted?.text || text;
    if (!messageToSend) return m.reply("*❎ Reply to a message or type some text after the command.*");

    const signature = "\n\n_🔊 BY INCONNU XD V2_";

    await gss.sendMessage(m.from, {
      text: `乂 *ATTENTION EVERYONE* 乂\n\n${messageToSend}${signature}`,
      mentions: participants.map(p => p.id)
    }, { quoted: m });

  } catch (error) {
    console.error('Hidetag Error:', error);
    await m.reply('❌ An error occurred while processing the command.');
  }
};

export default tagall;
