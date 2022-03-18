import { HeaderComponent } from "./components/header.component";
import { NavigationComponent } from "./components/navigation.component";
import { CreateComponent } from "./components/create.component";
import { PostsComponent } from "./components/posts.component";
import { FavoriteComponent } from "./components/favorite.component";

new HeaderComponent("header");

const Navigation = new NavigationComponent("navigation");

const Posts = new PostsComponent("posts");
const Create = new CreateComponent("create");
const Favorite = new FavoriteComponent("favorite");

Navigation.registerTabs([
  { name: "create", component: Create },
  { name: "posts", component: Posts },
  { name: "favorite", component: Favorite }
]);
