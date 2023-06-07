import 'dotenv/config';
type Payload = string;
export declare const signAtoken: (username: Payload, role: 'ADMIN' | 'USER') => string;
export {};
