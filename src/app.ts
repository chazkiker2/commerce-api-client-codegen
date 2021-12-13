import { PromotionApi, Configuration } from "./open-api-client";
import axios from "axios";
import env from "./env";

function main() {
    const config = new Configuration({
        basePath: "https://api-staging.fool.com/commerce",
    })

    const commerceAxios = axios.create({
        headers: {
            "x-apikey": env.API_KEY,
        },
    });

    const promotions = new PromotionApi(config, config.basePath, commerceAxios);

    promotions.searchSolrOfferDocuments()
        .then(res => {
            console.log(res.data);
        })
        .catch(console.error);
}

main()
