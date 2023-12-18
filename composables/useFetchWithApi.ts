import useErrorMapper from "~/composables/useErrorMapper";
import UseFetchWithToken from "~/composables/useFetchWithToken";

export default async <T>(url: string, option: object = {}) => {
    try {
        const result = await UseFetchWithToken<T>(url, option);
        return result.data
    } catch (error: any) {
        console.error("error", error)
        return useErrorMapper(error.data.data)
    }
};
