export interface LoginPayload {
  username: string;
  password: string;
}

export interface UserResponse {
  access_token: string;
  access_expires: number;
}

export interface UserProfileResponse {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}
