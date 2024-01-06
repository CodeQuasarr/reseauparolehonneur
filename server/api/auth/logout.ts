
export default defineEventHandler(async (event) => {

    deleteCookie(event, 'authToken');
    deleteCookie(event, 'user')

    return 'successfully logged out'
})
