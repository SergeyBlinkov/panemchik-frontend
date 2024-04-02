import axios, { AxiosRequestConfig } from 'axios';
import { AuthResponse } from '../types/AuthResponseTypes';

export const API_URL = 'http://localhost:5000/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config): AxiosRequestConfig => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalConfig = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalConfig._isRetry = true;
            try {
                const response = await axios.get<AuthResponse>(
                    `${API_URL}/user/refresh`,
                    { withCredentials: true },
                );
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originalConfig);
            } catch (e) {
                throw e;
            }
        }
    },
);

export default $api;
