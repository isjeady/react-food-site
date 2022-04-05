import { getService } from "./http.service";
import { generateUrl, recipesUrl } from "./url";

const getPopularService = async () => {
    const params = [
        { key : "number" , value : 10},
        { key : "tags" , value : "vegetarian,dessert"},
    ];

    const url = generateUrl(recipesUrl,params);

    return  await getService(url);
}

export { getPopularService }