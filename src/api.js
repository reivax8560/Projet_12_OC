import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './datas'

export default class Api {
    constructor() {
        this.userId = process.env.REACT_APP_USERID
    }

    async getUserActivity() { /////////////////////////////// DailyActivity
        // console.log("coucou")
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            const request = await fetch(`http://localhost:3000/user/${this.userId}/activity`)
            const response = await request.json()
            // console.log(datas)
            return response.data
        } else {
            return USER_ACTIVITY.find(activity => activity.userId == this.userId)
        }
    }

    async getUserSessions() { /////////////////////////////// SessionsDuration
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            const request = await fetch(`http://localhost:3000/user/${this.userId}/average-sessions`)
            const response = await request.json()
            // console.log(datas)
            return response.data
        } else {
            return USER_AVERAGE_SESSIONS.find(sessions => sessions.userId == this.userId)
        }
    }


    async getUserPerformance() { /////////////////////////////// PerformanceByActivity
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            const request = await fetch(`http://localhost:3000/user/${this.userId}/performance`)
            const response = await request.json()
            // console.log(datas)
            return response.data
        } else {
            return USER_PERFORMANCE.find(perf => perf.userId == this.userId)
        }
    }

    async getUserMainDatas() { /////////////////////////////// Score + infos user
        if (process.env.REACT_APP_ENVIRONNEMENT === "PROD") {
            const request = await fetch(`http://localhost:3000/user/${this.userId}`)
            const response = await request.json()
            // console.log(datas)
            return response.data
        } else {
            return USER_MAIN_DATA.find(datas => datas.id == this.userId)
        }
    }
}
