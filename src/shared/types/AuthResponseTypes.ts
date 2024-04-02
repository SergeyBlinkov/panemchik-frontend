import { UserType } from './UserType';

export interface AuthResponse {
    accessToken: string;
    refreshToken?: string;
    user: UserType;
}