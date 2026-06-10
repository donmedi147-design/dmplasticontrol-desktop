# 🖥️ DMPlastiControl Desktop - Application Installable

**Application profesionnelle pour Windows, Mac et Linux**

## 📦 Installation Rapide

### **OPTION 1 : Télécharger et Installer (Le Plus Simple)**

1. **Aller sur** : https://github.com/donmedi147-design/dmplasticontrol-desktop/releases
2. **Télécharger** le fichier selon votre système :
   - 🖥️ **Windows** : `DMPlastiControl-Setup.exe` (53 MB)
   - 🍎 **Mac** : `DMPlastiControl.dmg` (65 MB)
   - 🐧 **Linux** : `dmplasticontrol.AppImage` (58 MB)

3. **Double-cliquer** pour installer
4. **Suivre** l'assistant d'installation
5. **Lancer** depuis le menu Démarrage ou Bureau

---

### **OPTION 2 : Compiler depuis le Code (Avancé)**

```bash
# Cloner le projet
git clone https://github.com/donmedi147-design/dmplasticontrol-desktop.git
cd dmplasticontrol-desktop

# Installer les dépendances
npm install

# Lancer l'app en développement
npm start

# Créer l'installeur pour votre système
npm run build
```

---

## ⚙️ Configuration Initiale

### Lors du premier lancement

1. **Adresse serveur** : `http://localhost:5000` (si local) ou votre serveur
2. **Email** : `admin@dmplasti.com`
3. **Mot de passe** : `Admin123!Plasti`
4. **Profil** : Sélectionner votre poste (Responsable Mix pour vous)
5. **Valider** : Bouton "Connexion"

---

## 🎯 Fonctionnalités Desktop

✅ **Même interface que le WEB** mais en application standalone  
✅ **Pas de navigateur requis**  
✅ **Notifications système** (Windows/Mac/Linux)  
✅ **Synchronisation temps réel** avec serveur  
✅ **Fonctionne même hors ligne** (avec cache)  
✅ **Mise à jour automatique** des versions  
✅ **Contrôle d'accès** par profil utilisateur  

---

## 📊 Tableau de Bord Principal

### **Dashboard Responsable Mix (VOTRE PROFIL)**

**En temps réel :**
- 🌡️ Température séchage EN DIRECT
- 💧 Humidité initiale/finale
- ⏱️ Durée opération
- 📦 Stocks matieres (alertes)
- 📈 Graphique rendement
- ⚠️ Problèmes identifiés
- 💡 Solutions proposées
- 📄 Rapports mix exportables

---

## 🔧 Menu Principal

### **Modules Disponibles**

📊 **Dashboards**
- Responsable Mix (VOTRE DASHBOARD)
- Opérateurs Machines
- Qualité
- GDS (Stocks)
- HSE (Sécurité)
- Production (Analytics)
- Hiérarchie (Direction)

🏭 **Production**
- Saisir production machines
- Historique production
- Qualité produits
- Rendement machines

🧪 **Mix & Matieres**
- Opérations séchage
- Compositions mix
- Gestion stocks
- Mouvements matieres
- Alertes stock

♻️ **Dechets**
- Tracking dechets
- Recyclage vers blanc
- Rapports environnement
- Coûts dechets

⚠️ **Alarmes**
- Alarmes machines
- Pannes
- Incidents HSE
- Actions correctives

📄 **Rapports**
- Rapports journaliers (auto)
- Rapports hebdomadaires
- Export PDF/Excel
- Graphiques avancés

⚙️ **Paramètres**
- Gestion utilisateurs
- Configurer machines
- Paramètres système
- Sauvegarde/Restauration

---

## ⌨️ Raccourcis Clavier

| Raccourci | Action |
|-----------|--------|
| `Ctrl+D` ou `Cmd+D` | Dashboard |
| `Ctrl+P` ou `Cmd+P` | Production |
| `Ctrl+M` ou `Cmd+M` | Mix & Matieres |
| `Ctrl+R` ou `Cmd+R` | Rafraîchir |
| `Ctrl+,` ou `Cmd+,` | Paramètres |
| `Ctrl+Q` ou `Cmd+Q` | Quitter |

---

## 🔒 Sécurité & Synchronisation

✅ **Authentification JWT** sécurisée  
✅ **Cache local** pour utilisation hors ligne  
✅ **Synchronisation auto** quand connexion retrouvée  
✅ **Chiffrage** des données sensibles  
✅ **Logout auto** après 30min inactivité  
✅ **Audit complet** de chaque action  

---

## 🔔 Notifications

L'app vous notifie de :

🔴 **Critiques**
- Panne machine détectée
- Incident HSE grave
- Stock critique atteint

🟠 **Avertissements**
- Qualité dégradée
- Anomalie température séchage
- Stock faible (à renouveler)

🟢 **Infos**
- Opération mix terminée
- Rapport généré
- Production cible atteinte

---

## 💻 Configuration Système Requise

### **Windows**
- Windows 10 ou 11
- 4 GB RAM minimum
- 500 MB espace disque
- Connexion Internet (ou local)

### **Mac**
- macOS 10.13+
- 4 GB RAM minimum
- 500 MB espace disque
- Connexion Internet

### **Linux**
- Ubuntu 18.04+, Debian 10+
- 4 GB RAM minimum
- 500 MB espace disque
- Connexion Internet

---

## 🆘 Troubleshooting

### **L'app ne se connecte pas au serveur**

1. Vérifier l'adresse serveur dans Paramètres
2. Vérifier connexion Internet
3. Vérifier serveur backend est actif (`docker-compose up`)

### **Performance lente**

1. Fermer autres applications
2. Redémarrer l'app
3. Vider le cache : Paramètres > Avancé > Vider cache

### **Données non à jour**

1. Cliquer "Rafraîchir" (Ctrl+R)
2. Vérifier connexion serveur
3. Relancer l'app

---

## 📞 Support

📧 **Email** : donmedi147-design@github.com  
🐛 **Issues** : https://github.com/donmedi147-design/dmplasticontrol-desktop/issues  
📖 **Docs** : Voir `/docs` du projet  

---

**Version** : 1.0.0  
**Mise à jour auto** : Activée  
**Créé pour vous** : Juin 2026 🚀
