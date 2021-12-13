import { PromotionApiAxiosParamCreator } from "../open-api-client";
import axios from "axios";
function main() {
    PromotionApiAxiosParamCreator().searchSolrOfferDocuments()
        .then(params => {
        axios.request(params).then(res => {
            console.log(res.data);
        })
            .catch(err => {
            console.error(err);
        });
    });
}
main();
//# sourceMappingURL=app.js.map
