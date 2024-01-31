import { Catalog } from "../pages/Catalog";
import { Menu } from "../pages/Menu";
import { News } from "../pages/News";

export const routes = [
    { path: "/menu", element: <Menu /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/news", element: <News /> },
];

export const links = [
    { path: "/menu", name: "Menu" },
    { path: "/catalog", name: "Ready solutions" },
    { path: "/news", name: "News" },
];
