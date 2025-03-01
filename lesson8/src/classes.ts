
import { Breed } from './interfaces';

export class BreedSummary {
    private _id: string;
    private _name: string;
    private _maleWeight: string;
    private _femaleWeight: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get maleWeight(): string {
        return this._maleWeight;
    }

    public set maleWeight(value: string) {
        this._maleWeight = value;
    }

    public get femaleWeight(): string {
        return this._femaleWeight;
    }

    public set femaleWeight(value: string) {
        this._femaleWeight = value;
    }

    public constructor(breed: Breed) {
        this._id = breed.id;
        this._name = breed.attributes.name;
        this._maleWeight = `${breed.attributes.male_weight.min} - ${breed.attributes.male_weight.max} kg`;
        this._femaleWeight = `${breed.attributes.female_weight.min} - ${breed.attributes.female_weight.max} kg`;
    }
}
