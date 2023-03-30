export interface User {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
  _id?: string;
}

interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

export interface IncomingContactMessages {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  _id?: string;
  read: boolean;
  responded: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface BlogObject {
  author: string;
  resource: string;
  date: string;
  header: string;
  content: string;
  img: any;
  _id: string;
  user: string;
  published: Boolean;
}
