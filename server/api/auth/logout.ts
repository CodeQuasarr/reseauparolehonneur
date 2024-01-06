
export default defineEventHandler(async (event) => {

    deleteCookie(event, 'authToken');
    deleteCookie(event, 'user')
    deleteCookie(event, 'evenement')

    return 'successfully logged out'
})
