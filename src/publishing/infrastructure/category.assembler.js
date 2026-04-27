import {Category} from "../domain/model/category.entity.js";

export class CategoryAssembler   {
    static async toEntityFromResource(resource) {

        return new Category({...resource});
    }

    static ToEntitiesFromResource(response) {
        if (response.status !== 200) {
            console.error(`${response.statusText} - ${response.statusText}`);

        }
        let resource = response.data instanceof Array ? response.data : response.data[`categories`];
        return resource.map(resource => this.toEntityFromResource(resource));

    }

}