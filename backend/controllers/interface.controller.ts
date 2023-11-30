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

export interface IUpdateUserInfo{
    email?:string;
    name?:string;
}

export interface IUpdatePassword{
    oldPassword?:string;
    newPassword?:string;
}

export interface IUpdateAvatar{
    avatar:string
}

export interface IAddQuestionData{
    question:string;
    courseId:string;
    contentId:string;
}

export interface IComment extends Document{
    user?: object,
    question?: string,
    questionReplies?: IComment[],
}

export interface IAddAnswerData{
    answer:string,
    courseId:string,
    contentId:string,
    questionId:string
}

export interface ICreateOrder{
    courseId:string;
    payment_info:object
}