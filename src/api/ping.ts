import {request} from "@/util/request.ts";

export function ping() {
    return request<string>('/api/ping', {
        method: 'POST',
    })
}