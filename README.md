# Présentation

SportSee est une application dédiée au coaching sportif. 
Ce projet ne présente que la page "profil de l’utilisateur" de l'application, qui va permettre de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.


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

## Changement d'utilisateur

dans le fichier .env le profil utilisateur choisi est déterminé par la variable REACT_APP_USERID.
il est possible d'utiliser uniquement 2 ID utilisateur : 12 ou 18 

## Changement de la source des données

si REACT_APP_ENVIRONNEMENT=PROD, l'API ira fetcher la BDD, pour toute autre valeur elle utilisera un fichier de données mockées.


# Documentation


