# 🖥️ DMPlastiControl Desktop - Application Windows Installable

## Installation Rapide

### **Télécharger l'Installeur Windows**

1. Aller sur : https://github.com/donmedi147-design/dmplasticontrol-desktop/releases
2. Télécharger : **DMPlastiControl-Setup.exe**
3. Double-cliquer le fichier
4. Suivre l'assistant installation
5. **Terminé !** Raccourci sur Bureau

---

## 🚀 Premier Lancement

1. Double-cliquer **DMPlastiControl** sur Bureau
2. Configurer serveur : `http://localhost:5000`
3. Se connecter :
   - Email : `admin@dmplasti.com`
   - Mot de passe : `Admin123!Plasti`
4. **Dashboard s'affiche !**

---

## 💻 Compiler Soi-même (Optionnel)

```bash
git clone https://github.com/donmedi147-design/dmplasticontrol-desktop.git
cd dmplasticontrol-desktop

npm install
npm run build-win
```

L'installeur sera dans `dist/DMPlastiControl-Setup.exe`

---

## 🆘 Troubleshooting

**L'installeur ne démarre pas ?**

1. Vérifier antivirus (peut bloquer)
2. Relancer en administrateur
3. Télécharger à nouveau

**L'app ne se connecte pas ?**

1. Vérifier serveur backend est actif : `docker-compose up`
2. Vérifier l'adresse serveur dans l'app
3. Relancer l'app

---

**Support :** donmedi147-design@github.com
