import { HomeRoute } from "./home/home-router";
import { PublicRoute } from "./public/public-router";
import { NoPageRoute } from "./page-not-found/no-page-router";
export var routes = PublicRoute.concat(HomeRoute, NoPageRoute);
//# sourceMappingURL=app-router.js.map