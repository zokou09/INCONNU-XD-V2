import axios from 'axios';

const cmd = ['pair', 'code', 'pairing'];

const commands = async (sock, m, args) => {
  const number = args[0];

  if (!number || !number.match(/^\d{10,15}$/)) {
    return m.reply("❌ Please provide a valid phone number with country code.\n\nExample: *.pair 554488138425*");
  }

  const url = `https://inconnu-boy-tech-bot.onrender.com/pair?number=${encodeURIComponent(number)}`;

  try {
    const res = await axios.get(url);
    const data = res.data;

    if (!data || !data.code) {
      return m.reply("❌ Failed to generate pairing code. Please try again later.");
    }

    const code = data.code;

    await sock.sendMessage(m.chat, {
      text: `> *WHATSAPP PAIRING CODE GENERATED*\n\n📞 Number: ${number}\n🔐 Code: \`\`\`${code}\`\`\`\n\nBY INCONNU XD V2`,
      footer: "INCONNU XD SYSTEM",
      headerType: 1
    }, { quoted: m });

  } catch (e) {
    console.error("Error in .pair command:", e);
    return m.reply("❌ An unexpected error occurred. Please try again later.");
  }
};

export { cmd, commands };
