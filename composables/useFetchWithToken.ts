import {useTokenStore} from "~/stores/tokenStore";

export default async <T>(url: string, option: object = {}) => {

    return useFetch<T>(url, {
        ...option,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${useTokenStore().getAuthToken}`,
        }
    });
};
