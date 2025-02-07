export function request<RSP>(url: string, config: RequestInit = {}): Promise<RSP> {
    return new Promise<RSP>((resolve, reject) => {
        fetch(url, config).then(res => {
            if (res.status !== 200) {
                reject(new RequestError(RequestErrorType.API, "网络请求错误"))
                return
            }
            return res.json()
        }).then((data: BaseResponse<RSP>) => {
            if (data.code !== 0) {
                reject(new RequestError(RequestErrorType.API, data.message))
                return
            }
            resolve(data.data!!)
        }).catch(err => {
            reject(new RequestError(RequestErrorType.NETWORK, err.message))
        })
    })
}

export type BaseResponse<T> = {
    code: number;
    data: T
    message: string;
}

export enum RequestErrorType {
    NETWORK,
    API
}

export class RequestError extends Error {
    readonly type: RequestErrorType
    readonly message: string

    constructor(type: RequestErrorType, message: string) {
        super(message)
        this.type = type
        this.message = message
    }
}