export type IAxiosRequestConfig = Axios.AxiosXHRConfigBase<any>;
export type IAxiosResponse<T> = Axios.AxiosXHR<T>;
export type FetchResponse<T> = Promise<[error: unknown | null, response: IAxiosResponse<T> | null]>;

// Interfaz base para el adaptador
export interface Request {
    get<T>(url: string, config?: IAxiosRequestConfig): FetchResponse<T>;
    post<T>(url: string, data?: any, config?: IAxiosRequestConfig): FetchResponse<T>;
    put<T>(url: string, data?: any, config?: IAxiosRequestConfig): FetchResponse<T>;
    delete<T>(url: string, config?: IAxiosRequestConfig): FetchResponse<T>;
}


// Implementación usando Axios

export class FetchAdapter implements Request {
    private axiosInstance: Axios.AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({ baseURL });
    }

    async get<T>(url: string, config: IAxiosRequestConfig = {}): FetchResponse<T> {
        try {
            const response: IAxiosResponse<T> = await this.axiosInstance.get(url, config);
            return [null, response];
        } catch (error) {
            return [error, null];
        }
    }

    async post<T>(url: string, data: any = {}, config: IAxiosRequestConfig = {}): FetchResponse<T> {
        try {
            const response: IAxiosResponse<T> = await this.axiosInstance.post(url, data, config);
            return [null, response];
        } catch (error) {
            return [error, null];
        }
    }

    async put<T>(url: string, data: any = {}, config: IAxiosRequestConfig = {}): FetchResponse<T> {
        try {
            const response: IAxiosResponse<T> = await this.axiosInstance.put(url, data, config);
            return [null, response];
        } catch (error) {
            return [error, null];
        }
    }

    async delete<T>(url: string, config: IAxiosRequestConfig = {}): FetchResponse<T> {
        try {
            const response: IAxiosResponse<T> = await this.axiosInstance.delete(url, config);
            return [null, response];
        } catch (error) {
            return [error, null];
        }
    }
}
