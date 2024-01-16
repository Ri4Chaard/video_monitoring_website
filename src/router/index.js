import { Catalog } from "../pages/Catalog";
import { Menu } from "../pages/Menu";

export const routes = [
    { path: "/menu", element: <Menu /> },
    { path: "/catalog", element: <Catalog /> },
];

export const links = [
    { path: "/menu", name: "Menu" },
    { path: "/catalog", name: "Ready solutions" },
];
