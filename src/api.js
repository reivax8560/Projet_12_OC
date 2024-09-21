import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './datas'

export default class Api {
    constructor() {
        this.userId = process.env.REACT_APP_USERID
    }

    async getUserActivity() { /////////////////////////////// DailyActivity

        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            try {
                const response = await fetch(`http://localhost:3000/user/${this.userId}/activity`) // 'activity'
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
            const response = await fetch(`http://localhost:3000/user/${this.userId}/average-sessions`)
            const result = await response.json()
            return this.userSessionsFormater(result.data)
        }
        else {
            const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId == this.userId)
            return this.userSessionsFormater(userAverageSessions)
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
            const response = await fetch(`http://localhost:3000/user/${this.userId}/performance`)
            const result = await response.json()
            return this.userPerformanceFormater(result.data)
        }
        else {
            const userPerformance = USER_PERFORMANCE.find(perf => perf.userId == this.userId)
            return this.userPerformanceFormater(userPerformance)
        }
    }
    userPerformanceFormater(datas) {
        const reversedDatas = datas.data.reverse()  // inversion des données pour affichage dans le bon ordre

        function getKindValue(key) {
            for (let property in datas.kind) {
                if (property == key) {
                    return datas.kind[property]
                }
            }
        }

        reversedDatas.map((dataElement) => {
            dataElement.kind = getKindValue(dataElement.kind)
        })

        reversedDatas.map((dataElement) => {
            switch (dataElement.kind) {
                case 'energy': dataElement.kind = "Energie"
                    break
                case 'cardio': dataElement.kind = "Cardio"
                    break
                case 'endurance': dataElement.kind = 'Endurance'
                    break
                case 'strength': dataElement.kind = "Force"
                    break
                case 'speed': dataElement.kind = "Vitesse"
                    break
                case 'intensity': dataElement.kind = 'Intensité'
                    break
                default: dataElement.kind = ""
            }
        })
        return reversedDatas
    }

    async getUserMainDatas() { /////////////////////////////// Score + infos user
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            const response = await fetch(`http://localhost:3000/user/${this.userId}`)
            const result = await response.json()
            return this.userMainDatasFormater(result.data)
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
