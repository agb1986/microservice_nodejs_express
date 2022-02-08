interface Pet {
    id: number;
    name: string;
    status?: Status
    photos?: string[];
    category?: ICategory
    tags?: ITags[]
}

interface ICategory {
    id: number;
    name: string;
}

interface ITags {
    id: number;
    name: string;
}

export enum Status {
    AVAILABLE,
    UNAVAILABLE
}

export default Pet;