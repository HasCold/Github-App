type Value = {
    value: string;
}

export interface Profile {
    photos: Value[];
    // [key: string] : string ;
    displayName: string;
    username: string;
    profileUrl: string;
}