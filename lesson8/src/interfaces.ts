export interface BreedAttributes {
    name: string;
    description: string;
    life: {
        max: number;
        min: number;
    };
    male_weight: {
        max: number;
        min: number;
    };
    female_weight: {
        max: number;
        min: number;
    };
    hypoallergenic: boolean;
}

export interface BreedRelationships {
    group: {
        data: {
            id: string;
            type: string;
        };
    };
}

export interface Breed {
    id: string;
    type: string;
    attributes: BreedAttributes;
    relationships: BreedRelationships;
}

export interface Results {
    data: Breed[];
    links: {
        self: string;
        current: string;
        next: string;
        last: string;
    };
}
export interface Links {
    self: string;
    current: string;
    next: string;
    last: string;
}


export async function getJson(): Promise<Results> {
    await fetch("https://dogapi.dog/api/v2/breeds");
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    const json = await response.json() as Results;
    return json;
};

(async () => {
    const data1 = await getJson();
    console.log(data1.data[1].attributes.name);
    console.log(data1.data[1].attributes.life.max);
})();
