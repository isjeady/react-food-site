import { getService } from "./http.service";
import { generateUrl, recipesCompleSearchUrl, recipesInformationUrl, recipesUrl } from "./url";

const getRecipesInformationService = async (id) => {
    console.log(recipesInformationUrl(id))
    const url = generateUrl(recipesInformationUrl(id))
    return await getService(url);
}

const getPopularService = async (n = 10, tags = 'vegeterian,dessert') => {
    const params = [
        { key : 'number' , value : n },
        { key : 'tags' , value : tags },
    ];

    const url = generateUrl(recipesUrl,params);
    return await getService(url);
}

const getRecipesComplexSearchService = async (n = 10, cuisine = "",query = "") => {
    const params = [
        { key : 'number' , value : n},
        { key : 'cuisine', value : cuisine},
        { key : 'query', value : query}
    ];

    const url = generateUrl(recipesCompleSearchUrl,params);
    return await getService(url);
}

export { 
    getPopularService,
    getRecipesComplexSearchService,
    getRecipesInformationService 
};