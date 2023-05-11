import $api from './interceptors';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../../types/AuthResponseTypes';

export default class AuthService {
    static async login(
        email: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/login', { email, password });
    }
    static async registration(
        email: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/registration', {
            email,
            password,
        });
    }
    static async access(): Promise<AxiosResponse<AuthResponse>> {
        const accessToken = localStorage.getItem('token');
        return $api.get<AuthResponse>('user/access', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    }
}
