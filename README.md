# Présentation

SportSee est une application dédiée au coaching sportif. 
Ce projet ne présente que la page "profil de l’utilisateur" de l'application, qui va permettre de visualiser les statistiques des performances sportives réalisées.


# Technologies utilisées

Ce projet a été créé avec CRA [Create-React-App]
Environnement d'exécution : [Node.js] v20.14.0
Gestionnaire de paquets : [npm] 10.7.0

## Dépendances

Librairie graphiques : [recharts]


# Commandes

## Back End

Lancer le back : 

### `npm run dev`

stoper le back : 

### `ctrl + c`


## Front End

Lancer le front : 

### `npm start`

stoper le front : 

### `ctrl + c`

Port de sortie [http://localhost:3000]



# Utilisation de l'application

les différents modes d'utilisation de l'application sont configurables depuis le fichier .env

## Changement d'utilisateur

Pour changer de profil utilisateur, il faut modifier la valeur de la variable REACT_APP_USERID.
il est possible d'utiliser deux ID utilisateur : 12 ou 18 

## Changement de la source des données

Pour changer de méthode de récupération des données (requête API ou données mockées), il faut modifier la valeur de la variable REACT_APP_ENVIRONNEMENT.
il est possible d'utiliser deux environnement : 
- PROD : requête API
- DEV : récupération des données mockées

