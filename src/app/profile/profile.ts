
export interface ProfileLinks{
    source: string;
    value: string;
}

export interface ProfileWork{
    place: string;
    from: Date;
    to: Date | undefined;
}

export interface Portfolio{
    source: string;
    date: Date | undefined;
}

export interface ProfileName{
    firstName : string;
    secondName: string;
    fathersName : string;
}

export interface Profile{
    id: number;
    login:string;
    password: string;
    name: ProfileName;
    imageSource: string;
    phone: string;
    email: string;
    locale: string;
    portfolio: Portfolio[];
    links: ProfileLinks[];
    works: ProfileWork[];
    competances: string[];
    subscribersId: number[];
    subscriptionsId: number[];
}

export interface RegistrationModel{
    id: number;
    login:string;
    password: string;
    name: ProfileName;
    imageSource: string;
    phone: string;
    email: string;
    locale: string;   
    competances: string[];
}

