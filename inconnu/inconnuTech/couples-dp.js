import fetch from 'node-fetch';

const couplepp = async (m, Matrix) => {
    const text = m.body.toLowerCase();
    const prefix = "."; // Change this if your prefix is different
    const cmd = text.startsWith(prefix) ? text.slice(prefix.length).split(" ")[0].toLowerCase() : '';

    const validCommands = ['couplepp', 'couple', 'cpp'];
    if (!validCommands.includes(cmd)) return;

    await m.React('💑');
    await Matrix.sendMessage(m.from, { text: "*💑 Fetching couple profile pictures...*" }, { quoted: m });

    try {
        const res = await fetch("https://apis.davidcyriltech.my.id/couplepp");
        const data = await res.json();

        if (!data.success) {
            await Matrix.sendMessage(m.from, { text: "❌ Failed to fetch couple profile pictures. Try again later." }, { quoted: m });
            return;
        }

        const malePp = data.male;
        const femalePp = data.female;

        if (malePp) {
            await Matrix.sendMessage(m.from, {
                image: { url: malePp },
                caption: "👨 Male Couple Profile Picture"
            }, { quoted: m });
        }

        if (femalePp) {
            await Matrix.sendMessage(m.from, {
                image: { url: femalePp },
                caption: "👩 Female Couple Profile Picture"
            }, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        await Matrix.sendMessage(m.from, { text: "❌ An error occurred while fetching the couple profile pictures." }, { quoted: m });
    }

    await m.React("✅");
};

export default couplepp;
                                 
