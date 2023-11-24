import {H3Event} from "h3";

export  async function sendZodErrorResponse(event: H3Event, errorData: any) {
    const errors = new Map<string, { message: string }>()
    JSON.parse(errorData).forEach((zodError: any) => {
        errors.set(zodError.path[0], { 'message': zodError.message })
    })
    const parsedErrors = JSON.stringify(Object.fromEntries(errors))
    return sendError(event, createError({ statusCode: 422, statusMessage: 'Invalid Data Provided', data: parsedErrors }))
}

export  async function sendDefaultErrorResponse(event: H3Event, errorType: string, statusCode: number, error: any) {
    const errors = new Map<string, { message: string }>()
    errors.set(errorType, { 'message': error })
    const parsedErrors = JSON.stringify(Object.fromEntries(errors))
    return sendError(event, createError({ statusCode: statusCode, statusMessage: 'Invalid Data Provided', data: parsedErrors }))
}
