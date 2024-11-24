import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from './datas'
/* eslint eqeqeq: 0 */

export default class Api {

    constructor() {
        this.userId = process.env.REACT_APP_USERID
    }

    async getUserActivity() { /////////////////////     Appel données graphique principal

        /////////////////////////////////////////////////////// données fetchées
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/activity`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                return result.data
            }
            catch (error) {
                return error.message
            }
        }
        ////////////////////////////////////////////////////// données mockées
        else {
            return USER_ACTIVITY.find(activity => activity.userId == this.userId)
        }
    }


    async getUserSessions() { /////////////////////     Appel données graphique durée sessions

        /////////////////////////////////////////////////////// données fetchées
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/average-sessions`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                return this.userSessionsFormater(result.data)
            }
            catch (error) {
                return error.message
            }
        }
        ////////////////////////////////////////////////////// données mockées
        else {
            const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId == this.userId)
            return this.userSessionsFormater(userAverageSessions)
        }
    }
    userSessionsFormater(datas) { /////////////////     formatage
        const datas_ = { ...datas };
        datas_.sessions = datas.sessions.map((sessionItem) => {
            switch (sessionItem.day) {
                case 1: sessionItem.day = "L"
                    break
                case 2: sessionItem.day = "M"
                    break
                case 3: sessionItem.day = "M"
                    break
                case 4: sessionItem.day = "J"
                    break
                case 5: sessionItem.day = "V"
                    break
                case 6: sessionItem.day = "S"
                    break
                case 7: sessionItem.day = "D"
                    break
                // no default
            }
            return sessionItem;
        })
        return datas_;
    }


    async getUserPerformance() { //////////////////     Appel données graphique performances par activité

        /////////////////////////////////////////////////////// données fetchées
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/performance`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                return this.userPerformanceFormater(result.data)
            }
            catch (error) {
                return error.message
            }
        }
        ////////////////////////////////////////////////////// données mockées
        else {
            const userDatas = USER_PERFORMANCE.find(element => element.userId == this.userId)
            return this.userPerformanceFormater(userDatas)
        }
    }
    userPerformanceFormater(datas) { //////////////     formatage

        // inversion ordre des perf pour affichage graphique
        const userPerformances = datas.data.reverse()

        // convertit les kind (nombre) en texte
        function getKindValue(kindNumber) {
            for (let value in datas.kind) {
                if (value == kindNumber) {
                    return datas.kind[value]
                }
            }
            return kindNumber;
        }

        const userPerformances_ = userPerformances.map((performance) => {

            const kind = getKindValue(performance.kind);

            // traduit les kind en français
            switch (kind) {
                case "Energie":
                case 'energy': performance.kind = "Energie"
                    break
                case "Cardio":
                case 'cardio': performance.kind = "Cardio"
                    break
                case "Endurance":
                case 'endurance': performance.kind = 'Endurance'
                    break
                case "Force":
                case 'strength': performance.kind = "Force"
                    break
                case "Vitesse":
                case 'speed': performance.kind = "Vitesse"
                    break
                case "Intensité":
                case 'intensity': performance.kind = 'Intensité'
                    break
                default: performance.kind = ""
            }
            return performance;
        })

        return userPerformances_;
    }


    async getUserMainDatas() { ////////////////////     Appel données en-tête + graphique score + vignettes

        /////////////////////////////////////////////////////// données fetchées
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                return this.userMainDatasFormater(result.data)
            }
            catch (error) {
                return error.message
            }
        }
        ////////////////////////////////////////////////////// données mockées
        else {
            const userMainDatas = USER_MAIN_DATA.find(datas => datas.id == this.userId)
            return this.userMainDatasFormater(userMainDatas)
        }
    }
    userMainDatasFormater(datas) { ////////////////     formatage

        // convertit la propriété score en todayScore
        if (datas.score) {
            datas.todayScore = Number(datas.score);
            delete datas.score
        } else {
            datas.todayScore = Number(datas.todayScore);
        }
        return datas
    }
}