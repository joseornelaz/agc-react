export interface LoginCredentials {
  email: string
  password: string
}

export interface User {
  id: number;
  name: string;
  email: string;
  token?: string;
}

export interface AuthResponse {
  status: string;
  message: string;
  data: User;
}