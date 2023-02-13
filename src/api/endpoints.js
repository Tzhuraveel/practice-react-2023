const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'
const auth = '/auth'

const urls = {
    cars: {
        cars,
        getCarById: (id) => `${cars}/${id}`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    }
}

export {
    baseURL,
    urls
}