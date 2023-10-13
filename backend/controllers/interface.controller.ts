export interface IRegistrationBody {
    name: string;
    email: string;
    password: string;
    avatar?: string;
}

export interface IActivationToken{
    token:string;
    activationCode:string;
}

export interface IActivationRequest{
    activation_token:string;
    activation_code:string;
}

export interface ILoginRequest{
    email:string;
    password:string;
}

export interface IMail{
    email:string;
    name:string;
}