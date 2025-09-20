// types/formTypes.ts

export type Gender = 'male' | 'female' | 'other';

export interface FormData {
  name: string;
  email: string;
  gender: Gender;
  message: string;
}
