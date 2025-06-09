import moment from 'moment-timezone';
import config from '../../config.cjs';

export default async function GroupParticipants(sock, { id, participants, action }) {
   try {
      const metadata = await sock.groupMetadata(id);

      for (const jid of participants) {
         let profile;

         try {
            profile = await sock.profilePictureUrl(jid, "image");
         } catch {
            profile = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu";
         }

         const userName = jid.split("@")[0];
         const membersCount = metadata.participants.length;

         if (action === "add" && config.WELCOME) {
            const joinTime = moment.tz('Africa/Kolkata').format('HH:mm:ss');
            const joinDate = moment.tz('Africa/Kolkata').format('DD/MM/YYYY');

            await sock.sendMessage(id, {
               text: `╭─〔 *WELCOME INCONNU XD* 〕─╮
│  
│  ✦ ʜᴇʏ @${userName}!
│  ✦ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${metadata.subject}*
│  ✦ ʏᴏᴜ'ʀᴇ ᴏᴜʀ ${membersCount}ᴛʜ ᴍᴇᴍʙᴇʀ
│  ✦ ᴊᴏɪɴᴇᴅ: ${joinTime} | ${joinDate}
│  
╰─────────────────━⊷`,
               contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏᴜʀ ɢʀᴏᴜᴘ`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: profile,
                     sourceUrl: 'https://github.com/INCONNU-BOY/INCONNU-XD-V2'
                  }
               }
            });
         }

         else if (action === "remove" && config.WELCOME) {
            const leaveTime = moment.tz('Africa/Tanzania').format('HH:mm:ss');
            const leaveDate = moment.tz('Africa/Tanzania').format('DD/MM/YYYY');

            await sock.sendMessage(id, {
               text: `╭──〔 *GOODBYE INCONNU XD* 〕─╮
│  
│  ✦ ꜰᴀʀᴇᴡᴇʟʟ @${userName}
│  ✦ ʏᴏᴜ ʟᴇғᴛ *${metadata.subject}*
│  ✦ ɴᴏᴡ ᴡᴇ ᴀʀᴇ ${membersCount} sᴛʀᴏɴɢ
│  ✦ ʟᴇꜰᴛ ᴀᴛ: ${leaveTime} | ${leaveDate}
│  
╰─────────────────━⊷`,
               contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `ɢᴏᴏᴅʙʏᴇ ᴀ ғᴏʟʟᴇɴ sᴏʟᴅɪᴇʀ`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: profile,
                     sourceUrl: 'https://github.com/INCONNU-BOY/INCONNU-XD-V2'
                  }
               }
            });
         }
      }

   } catch (e) {
      console.error("Error in GroupParticipants:", e);
      throw e;
   }
}
