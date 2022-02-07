interface IPet {
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

enum Status {
    AVAILABLE,
    UNAVAILABLE
}

export default IPet;