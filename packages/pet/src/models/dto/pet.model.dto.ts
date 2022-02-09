interface Pet {
    _id: number;
    name: string;
    status?: Status
    photos?: string[];
    category?: ICategory
    tags?: ITags[]
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ITags {
    id: number;
    name: string;
}

export enum Status {
    AVAILABLE,
    UNAVAILABLE
}

export default Pet;