import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './datas'

export default class Api {
    constructor() {
        this.userId = process.env.REACT_APP_USERID
    }

    async getUserActivity() { /////////////////////////////// DailyActivity

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
        else {
            return USER_ACTIVITY.find(activity => activity.userId == this.userId)
        }
    }

    async getUserSessions() { /////////////////////////////// SessionsDuration
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/average-sessions`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                console.log(result.data)
                return this.userSessionsFormater(result.data)
            }
            catch (error) {
                return error.message
            }
        }
        else {
            const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId == this.userId)
            console.log(userAverageSessions)
            return this.userSessionsFormater(userAverageSessions)
            // return userAverageSessions
        }
    }
    userSessionsFormater(datas) {
        datas.sessions.map((sessionItem) => {
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
                default: sessionItem.day = "?"
            }
        })
        return datas
    }


    async getUserPerformance() { /////////////////////////////// PerformanceByActivity
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/performance`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                // console.log(result.data)
                return this.userPerformanceFormater(result.data)
            }
            catch (error) {
                return error.message
            }
        }
        else {
            const userDatas = USER_PERFORMANCE.find(element => element.userId == this.userId)
            // console.log(userDatas)
            return this.userPerformanceFormater(userDatas)
        }
    }
    userPerformanceFormater(datas) {
        // inversion de l'ordre des perf pour affichage graphique dans le bon ordre
        const userPerformances = datas.data.reverse()

        // transforme les types de performance en texte (initialement en nombre)
        userPerformances.map((performance) => {
            performance.kind = getKindValue(performance.kind)
        })

        function getKindValue(kindNumber) {
            for (let value in datas.kind) {
                if (value == kindNumber) {
                    return datas.kind[value]
                }
            }
        }

        userPerformances.map((performance) => {
            switch (performance.kind) {
                case 'energy': performance.kind = "Energie"
                    break
                case 'cardio': performance.kind = "Cardio"
                    break
                case 'endurance': performance.kind = 'Endurance'
                    break
                case 'strength': performance.kind = "Force"
                    break
                case 'speed': performance.kind = "Vitesse"
                    break
                case 'intensity': performance.kind = 'Intensité'
                    break
                default: performance.kind = ""
            }
        })
        // console.log(userPerformances)
        return userPerformances
    }

    async getUserMainDatas() { /////////////////////////////// Score + infos user
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}`)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
                }
                const result = await response.json()
                return this.userMainDatasFormater(result.data)
                // return [this.userMainDatasFormater(result.data)]
            }
            catch (error) {
                // console.log(typeof (error.message))
                return error.message
            }
        }
        else {
            const userMainDatas = USER_MAIN_DATA.find(datas => datas.id == this.userId)
            return this.userMainDatasFormater(userMainDatas)
        }
    }
    userMainDatasFormater(datas) {
        if (datas.score) {
            datas.todayScore = datas.score
            delete datas.score
        }
        return datas
    }
}
