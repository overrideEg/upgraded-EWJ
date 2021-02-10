import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "basicData",
        title: "Home Page",
        translate: "homePage",
        type: "item",
        icon: "tab_unselected",
        url: "/apps/dashboards/project",
    },

    {
        id: "basicData",
        title: "Basic Data",
        translate: "basicData",
        type: "group",
        icon: "tab_unselected",
        children: [
            {
                id: "users",
                title: "Users",
                translate: "users",
                type: "item",
                icon: "person_outline",
                url: "/generic/User",
            },
            // {
            //     id: "SeoOptions",
            //     title: "SeoOptions",
            //     translate: "SeoOptions",
            //     type: "item",
            //     icon: "Tag",
            //     url: "/generic/SeoOptions",
            // },
        ],
    },
    {
        id: "Solution",
        title: "Solution",
        translate: "Solution",
        type: "item",
        icon: "Solution",
        url: "/generic/Solution",
    },

    {
        id: "Assessment",
        title: "Assessment",
        translate: "Assessment",
        type: "item",
        icon: "Assessment",
        url: "/generic/Assessment",
    },
    {
        id: "Category",
        title: "Category",
        translate: "Category",
        type: "item",
        icon: "Category",
        url: "/generic/Category",
    },
    {
        id: "Product",
        title: "Product",
        translate: "Product",
        type: "item",
        icon: "Product",
        url: "/generic/Product",
    },
    {
        id: "Resource",
        title: "Resource",
        translate: "Resource",
        type: "item",
        icon: "Resource",
        url: "/generic/Resource",
    },

    {
        id: "ContactUs",
        title: "ContactUs",
        translate: "ContactUs",
        type: "item",
        icon: "contact",
        url: "/generic/ContactUs",
    },
    // {
    //     id       : 'Applications',
    //     title    : 'Applications',
    //     translate: 'Applications',
    //     type     : 'item',
    //     icon     : 'assessment',
    //     url      : '/apps/scrumboard/boards'

    // },
    // {
    //     id       : 'Universites',
    //     title    : 'Universites',
    //     translate: 'Universites',
    //     type     : 'group',
    //     icon     : 'Universites',
    //     children: [
    //         {
    //             id       : 'University',
    //             title    : 'University',
    //             translate: 'University',
    //             type     : 'item',
    //             icon     : 'University',
    //             url  : '/generic/University'

    //         },
    //         {
    //             id       : 'UniversityDepartment',
    //             title    : 'University Departments',
    //             translate: 'University Departments',
    //             type     : 'item',
    //             icon     : 'UniversityDepartment',
    //             url  : '/generic/UniversityDepartment'

    //         },
    //         {
    //             id       : 'Rank',
    //             title    : 'University Rank',
    //             translate: 'University Rank',
    //             type     : 'item',
    //             icon     : 'Tag',
    //             url  : '/generic/Rank'

    //         },
    //     ]

    // },
];
