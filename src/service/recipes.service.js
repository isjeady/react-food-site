import { getService } from "./http.service";
import { generateUrl, recipesUrl,recipesComplexSearchUrl } from "./url";

const getPopularService = async (number = 10, tags = "vegetarian,dessert") => {
    const params = [
        { key : "number" , value : number},
        { key : "tags" , value : tags},
    ];

    const url = generateUrl(recipesUrl,params);

    return  await getService(url);
}

const getRecipesComplexSearchService = async (query,number = 10) => {
    const params = [
        { key : "number" , value : number},
        { key : "query" , value : query},
    ];

    const url = generateUrl(recipesComplexSearchUrl,params);

    return  await getService(url);
}

export { getPopularService,getRecipesComplexSearchService }