import { HeaderComponent } from "./components/header.component";
import { NavigationComponent } from "./components/navigation.component";
import { CreateComponent } from "./components/create.component";
import { PostsComponent } from "./components/posts.component";
import { FavoriteComponent } from "./components/favorite.component";
import { LoaderComponent } from "./components/loader.component";

new HeaderComponent("header");

const Navigation = new NavigationComponent("navigation");
const loader = new LoaderComponent("loader");

const Posts = new PostsComponent("posts", { loader });
const Create = new CreateComponent("create");
const Favorite = new FavoriteComponent("favorite", { loader });

Navigation.registerTabs([
  { name: "create", component: Create },
  { name: "posts", component: Posts },
  { name: "favorite", component: Favorite }
]);
