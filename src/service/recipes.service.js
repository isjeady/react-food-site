import { getService } from "./http.service";
import { generateUrl, recipesUrl,recipesInformationUrl,recipesComplexSearchUrl } from "./url";

const getRecipesInformationService = async (id) => {
    const params = [];

    const url = generateUrl(recipesInformationUrl(id),params);

    return  await getService(url);
}

const getPopularService = async (number = 10, tags = "vegetarian,dessert") => {
    const params = [
        { key : "number" , value : number},
        { key : "tags" , value : tags},
    ];

    const url = generateUrl(recipesUrl,params);

    return  await getService(url);
}

const getRecipesComplexSearchService = async (cuisine = "",number = 10,query = "") => {
    const params = [
        { key : "number" , value : number},
        { key : "cuisine" , value : cuisine},
        { key : "query" , value : query},
    ];

    const url = generateUrl(recipesComplexSearchUrl,params);

    return  await getService(url);
}

export { getPopularService,getRecipesComplexSearchService,getRecipesInformationService }