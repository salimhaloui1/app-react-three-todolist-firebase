# 📝 To-Do List avancée avec React et Firebase

Cette application est une To-Do List avancée construite avec **React**, **Tailwind CSS**, **Framer Motion** et **Firebase Firestore**.

![Image](https://github.com/user-attachments/assets/efaf8662-34b9-4af4-9a2f-64b08dd3378c)
---

## ⚙️ Fonctionnalités

- ✅ Ajouter une tâche avec :
  - Titre
  - Description
  - Date et heure (obligatoirement future)
  - État (terminée ou en cours)
- ✏️ Modifier uniquement l’état des tâches **en cours**
- 🗑️ Supprimer une tâche (avec animation)
- 📂 Séparation des tâches en deux colonnes :
  - **Tâches en cours**
  - **Tâches terminées**
- 🌗 Support du thème :
  - Sombre / Système
- ☁️ Données stockées dans **Firebase Firestore**
- 🎨 Interface moderne et responsive avec **Tailwind CSS** et **Font Awesome**
- 💥 Animations fluides à la suppression avec **Framer Motion**

---

## 🛠️ Technologies utilisées

| Outil            | Rôle                              |
|------------------|-----------------------------------|
| React            | Framework Frontend principal      |
| Tailwind CSS     | Stylisation rapide et responsive  |
| Firebase         | Backend (Firestore)               |
| Framer Motion    | Animations                        |
| Font Awesome     | Icônes                            |
| Vite             | Bundler ultra rapide              |

---

# Pour démarrer cette application en local , Voici les instructions à faire :

✅ 1. Télécharger ou cloner le projet

Si tu as un fichier .zip :</br>
Décompresse-le dans un dossier de ton choix.

Si tu as un lien GitHub :</br>
git clone https://github.com/salimhaloui1/app-two-react-todolist.git </br>
cd nom-du-projet

✅ 2. Installer les dépendances

Avant tout, tu dois t'assurer d'avoir Node.js installé. Tu peux le vérifier avec :

node -v</br>
npm -v

Si ce n’est pas installé, télécharge-le ici : https://nodejs.org/

Ensuite, dans le dossier du projet :

npm install

Cette commande lit le fichier package.json et installe toutes les dépendances nécessaires dans le dossier node_modules.

✅ 3. Lancer l’application en développement

Toujours dans le dossier du projet :

npm run dev

ou parfois :

npm start

Ça dépend de ce qui est configuré dans le fichier package.json. Si dev ne fonctionne pas, regarde ce fichier pour voir la bonne commande.

✅ 4. Accéder à l’application

Une fois lancée, tu verras quelque chose comme :

VITE v5.0.0  ready in 300 ms

➜  Local:   http://localhost:5173/

Ouvre ce lien dans ton navigateur.

✅ 5. Résolution des erreurs courantes

Si tu as une erreur comme :

Error: Cannot find module</br>
→ Une dépendance manquante ? Refaire npm install.

vite: command not found </br>
→ Peut-être qu’il faut installer Vite globalement :

npm install -g vite </br>
Erreur liée à node-sass ou autre </br>
→ Parfois, il faut supprimer node_modules et refaire l'installation :

rm -rf node_modules</br>
npm install

# Pour changer les parametres de la base de donnée : 

merci de chager ces iformations par celle que tu as dan ta base donnée firebas :

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_AUTH_DOMAIN",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_BUCKET",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID",
};


✅ En résumé rapide :

# 1. Aller dans le dossier
cd nom-du-projet

# 2. Installer les dépendances
npm install

# 3. Lancer le projet
npm run dev     # ou npm start


