<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=8A2BE2&center=true&vCenter=true&width=1000&height=200&lines=INCONNU-XD+V2;VERSION+2025;BY+INCONNU+BOY+TECH" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://files.catbox.moe/e1k73u.jpg" width="800"/>
</p>
---

## ⭐ Fork the Repository

Click the button below to fork the repository and get your own copy:

[![FORK REPO](https://img.shields.io/badge/FORK%20REPO-Click%20Here-007ACC?style=for-the-badge&logo=github)](https://github.com/INCONNU-BOY/INCONNU-XD-V2/fork)

---

## ⚙️ Get Your PORTAL QR OR PAIR 

[![PORTAL QR OR PAIR ](https://img.shields.io/badge/GET%20SESSION_ID-Generate%20Now-4CAF50?style=for-the-badge&logo=whatsapp)](https://inconnu-boy-tech-bot.onrender.com/)

---
## ⚙️ PAIR CODE

[![PORTAL QR OR PAIR ](https://img.shields.io/badge/GET%20SESSION_ID-Generate%20Now-4CAF50?style=for-the-badge&logo=whatsapp)](https://inconnu-boy-tech-bot.onrender.com/pair)

---
## ⌛ WHATSAPP CHANNEL SUPPORT 

[![INCONNU BOY TECH](https://img.shields.io/badge/JOIN%20MY-WHATSAPP%20CHANNEL-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029Vb6T8td5K3zQZbsKEU1R)
---

## 🚀 Quick Deployment Options

### Heroku

[![HEROKU](https://img.shields.io/badge/DEPLOY%20ON-HEROKU-7952B3?style=for-the-badge&logo=heroku)](https://deployments-web-joel-xmd-bot.vercel.app/)

---

### Replit

[![REPLIT](https://img.shields.io/badge/DEPLOY%20ON-REPLIT-F26207?style=for-the-badge&logo=replit)](https://deployments-web-joel-xmd-bot.vercel.app/)

---

### Railway

[![RAILWAY](https://img.shields.io/badge/DEPLOY%20ON-RAILWAY-0B0D0D?style=for-the-badge&logo=railway)](https://deployments-web-joel-xmd-bot.vercel.app/)

---

### Koyeb 

[![KOYEB](<a href="https://app.koyeb.com/services/deploy?type=git&repository=INCONNU-BOY/INCONNU-XD-V1&ports=3000">
    <img src="https://img.shields.io/badge/Deploy-Koyeb-FF009D?style=for-the-badge&logo=koyeb&logoColor=white" />
  </a>
</p>


---

### Glitch

[![GLITCH](https://img.shields.io/badge/DEPLOY%20ON-GLITCH-AA00FF?style=for-the-badge&logo=glitch)](https://deployments-web-joel-xmd-bot.vercel.app/)

---

### CodeSpace

[![CODESPACE](https://img.shields.io/badge/DEPLOY%20ON-CODESPACE-2B7489?style=for-the-badge&logo=github)](https://deployments-web-joel-xmd-bot.vercel.app/)

---
### 📦 Download the Bot File

<p align="center">
  <a href="https://github.com/INCONNU-BOY/INCONNU-XD-V2/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download%20Bot-file-FF009D?style=for-the-badge&logo=github&logoColor=white" alt="Download Bot File" />
  </a>
</p>
---
DEPLOY ON WORKFLOW ⚡

```

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

## ❤️ Credits
[![GitHub - INCONNU-BOY](https://img.shields.io/badge/GitHub-INCONNU--BOY-181717?style=for-the-badge&logo=github)](https://github.com/INCONNU-BOY)

---

![MADE BY INCONNU BOY](https://img.shields.io/badge/MADE%20BY-INCONNU%20BOY-blueviolet?style=for-the-badge&logo=markdown)
