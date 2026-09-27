export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data: ContactResponse;
}