/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
// const uri = 'http://localhost:3050/v1';
// const uri = 'https://edupromise.remabackend.com/v1';
const uri = "http://server.overrideeg.net:3019/v1";

export const API_URLS = {
    auth: {
        auth: uri + "/auth/login",
        changePassword: uri + "/Auth/changePassword",
        resetPassword: uri + "/Auth/resetPassword",
        register: uri + "/register",
    },
    File: {
        upload: "https://file.remabackend.com/File/upload?project=EWJ",
        UploadMultiple:
            "https://file.remabackend.com/File/uploadMultiple?project=EWJ",
        delete: uri + "/File",
    },
    appsettings: {
        post: uri + "/appsettings",
        get: uri + "/appsettings",
        put: uri + "/appsettings/{entityId}",
        delete: uri + "/appsettings/{entityId}",
    },

    User: {
        post: uri + "/User",
        get: uri + "/User/all",
        getOne: uri + "/User/{entityId}",
        put: uri + "/User/{entityId}",
        delete: uri + "/User/{entityId}",
        upload: uri + "/User/upload",
    },

    Solution: {
        post: uri + "/Solution",
        get: uri + "/Solution/all",
        getOne: uri + "/Solution/{entityId}",
        put: uri + "/Solution/{entityId}",
        delete: uri + "/Solution/{entityId}",
        upload: uri + "/Solution/upload",
    },
    Assessment: {
        post: uri + "/Assessment",
        get: uri + "/Assessment/all",
        getOne: uri + "/Assessment/{entityId}",
        put: uri + "/Assessment/{entityId}",
        delete: uri + "/Assessment/{entityId}",
        upload: uri + "/Assessment/upload",
    },
    Category: {
        post: uri + "/Category",
        get: uri + "/Category/all",
        getOne: uri + "/Category/{entityId}",
        put: uri + "/Category/{entityId}",
        delete: uri + "/Category/{entityId}",
        upload: uri + "/Category/upload",
    },
    Product: {
        post: uri + "/Product",
        get: uri + "/Product/all",
        getOne: uri + "/Product/{entityId}",
        put: uri + "/Product/{entityId}",
        delete: uri + "/Product/{entityId}",
        upload: uri + "/Product/upload",
    },

    Language: {
        post: uri + "/Language",
        get: uri + "/Language/all",
        getOne: uri + "/Language/{entityId}",
        put: uri + "/Language/{entityId}",
        delete: uri + "/Language/{entityId}",
    },
    Department: {
        post: uri + "/Department",
        get: uri + "/Department/all",
        getOne: uri + "/Department/{entityId}",
        put: uri + "/Department/{entityId}",
        delete: uri + "/Department/{entityId}",
    },
    ContactUs: {
        post: uri + "/ContactUs",
        get: uri + "/ContactUs/all",
        getOne: uri + "/ContactUs/{entityId}",
        put: uri + "/ContactUs/{entityId}",
        delete: uri + "/ContactUs/{entityId}",
    },
    Resource: {
        post: uri + "/Resource",
        get: uri + "/Resource/all",
        getOne: uri + "/Resource/{entityId}",
        put: uri + "/Resource/{entityId}",
        delete: uri + "/Resource/{entityId}",
    },

    SeoOptions: {
        post: uri + "/SeoOptions",
        get: uri + "/SeoOptions/all",
        getOne: uri + "/SeoOptions/{entityId}",
        put: uri + "/SeoOptions/{entityId}",
        delete: uri + "/SeoOptions/{entityId}",
    },

    Application: {
        transfer: uri + "/Application/transfer",
    },
    CRM: {
        post: uri + "/CRM/Label",
        get: uri + "/CRM/Label/all",
        getOne: uri + "/CRM/Label/{entityId}",
        put: uri + "/CRM/Label/{entityId}",
        delete: uri + "/CRM/Label/{entityId}",
    },
};
