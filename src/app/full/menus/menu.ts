export interface Menu {
    name: string;
    icon: string;
    submenu: SubMenu[]
}

export interface SubMenu {
    name: string;
    route: string;
    icon: string;
    parent: string;
}

export const menus: Menu[] = [
    {name: 'Service Support', icon: 'list', submenu: [
        {name: 'Recieve Vehicle', route: 'recieve-vehicle', icon: 'fa fa-taxi', parent: 'Service Support'},
        {name: 'Home 12', route: 'test', icon: 'fa fa-address-book-o', parent: 'Service Support'}
    ]},
    {name: 'Second', icon: 'list', submenu: [
        {name: 'Home 21', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'},
        {name: 'Home 22', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'},
        {name: 'Home 23', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'}
    ]},
    {name: 'Third', icon: 'list', submenu: [
        {name: 'Welcome Information', route: 'welcome-info', icon: 'fa fa-address-book-o', parent: 'Second'},
        {name: 'Home 32', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'},
        {name: 'Home 33', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'},
        {name: 'Home 34', route: 'test', icon: 'fa fa-address-book-o', parent: 'Second'}
    ]},
]