import { Collection, Core, Index, Instance, Model, ObjectID, Property } from "iridium";
import Pet, { ICategory, ITags, Status } from "../dto/pet.model.dto";

@Index({name: 1})
@Collection('pet')
export class PetSchema extends Instance<Pet, PetSchema> implements Pet {
    
    @ObjectID
    public _id!: number;
    
    @Property(String, true)
    public name!: string;
    
    @Property(Status, true)
    public status?: Status;
    
    @Property(Array, true)
    public photos?: string[];
    
    @Property(Object, true)
    public category?: ICategory;
    
    @Property(Array, true)
    public tags?: ITags[];
}

class PetDatabase extends Core {
    public Pets = new Model<Pet, PetSchema>(this, PetSchema);
}

export const mongoDatabase = new PetDatabase({
    host: 'mongo',
    // host: 'localhost', //TODO: Add profile for debugging
    port: 27017,
    database: 'test'
});