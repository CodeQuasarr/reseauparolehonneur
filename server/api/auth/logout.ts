
export default defineEventHandler(async (event) => {

    deleteCookie(event, 'user')
    deleteCookie(event, 'authToken')

    return 'successfully logged out'
})
