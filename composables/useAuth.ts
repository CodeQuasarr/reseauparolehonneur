import useErrorMapper from "~/composables/useErrorMapper";

export async function registerWithEmail(user: any): Promise<FormValidation> {

    try {
        const data = await $fetch<{ hasErrors: false, loggedIn: true }>('/api/auth/register', {
            method: 'POST',
            body:  user
        })

        console.log("data", data)

        // if (data) {
        //     await useRouter().push('/login')
        // }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}
