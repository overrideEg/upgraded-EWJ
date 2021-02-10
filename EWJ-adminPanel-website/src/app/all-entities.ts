import { TranslateService } from "@ngx-translate/core";
import { FieldType } from "@override/utils/interfaces/FieldType.enum";
import { Validators } from "@angular/forms";
import { EntityData } from "@override/utils/interfaces/entityData";
import { UtilsService } from "@override/utils/utils.service";
import { DatePipe } from "@angular/common";
import { UserType } from "./user-type.enum";
import { OverrideService } from "../@override/utils/override.service";
import { API_URLS } from "../assets/constants/API_URLS";

export class AllEntities {
    constructor(
        private utils: UtilsService,
        private override: OverrideService,
        private datePipe: DatePipe,
        private translate: TranslateService
    ) {}
    public entities: EntityData[] = [
        {
            name: {
                single: "User",
                plural: "Users",
            },
            apiSelector: "User",
            route: "/generic/User",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        // field: 'id',
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "name",
                        headerName: this.translate.instant("name"),
                    },
                    {
                        field: "email",
                        headerName: this.translate.instant("email"),
                    },
                    // {
                    //     field: 'password',
                    //     headerName: this.translate.instant('password'),
                    // },
                    {
                        field: "mobile",
                        headerName: this.translate.instant("mobile"),
                    },
                    {
                        field: "userType",
                        headerName: this.translate.instant("userType"),
                    },
                    {
                        field: "isActive",
                        headerName: this.translate.instant("isActive"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.text,
                        name: "name",
                        label: this.translate.instant("name"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                    },
                    {
                        type: FieldType.email,
                        name: "email",
                        label: this.translate.instant("Email"),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                    },
                    {
                        type: FieldType.text,
                        name: "mobile",
                        label: this.translate.instant("phoneNumber"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.pattern(this.utils.phoneNumberRegExp),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                    },
                    {
                        type: FieldType.password,
                        name: "password",
                        label: this.translate.instant("password"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                    },
                    {
                        type: FieldType.dropdown,
                        name: "gender",
                        label: this.translate.instant("gender"),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,

                        options: [
                            {
                                value: "male",
                                label: this.translate.instant("male"),
                            },
                            {
                                value: "female",
                                label: this.translate.instant("female"),
                            },
                        ],
                    },
                    {
                        type: FieldType.dropdown,
                        name: "userType",
                        label: this.translate.instant("userType"),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,

                        options: [
                            {
                                value: "user",
                                label: this.translate.instant("user"),
                            },
                            {
                                value: "admin",
                                label: this.translate.instant("admin"),
                            },
                            {
                                value: "employee",
                                label: this.translate.instant("employee"),
                            },
                        ],
                    },
                    {
                        type: FieldType.checkbox,
                        name: "isActive",
                        label: this.translate.instant("isActive"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "Solution",
                plural: "Solutions",
            },
            apiSelector: "Solution",
            route: "/generic/Solution",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "title." + this.utils.currentLang,
                        headerName: this.translate.instant("title"),
                    },
                    {
                        field: "description." + this.utils.currentLang,
                        headerName: this.translate.instant("description"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: "title",
                        label: this.translate.instant("title"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                    },
                    {
                        type: FieldType.textLocalized,
                        name: "description",
                        label: this.translate.instant("description"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },
                    {
                        type: FieldType.textLocalized,
                        name: "body",
                        label: this.translate.instant("body"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },
                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.group,
                        name: "SEO",
                        label: this.translate.instant("SEO"),
                        required: false,
                        // validators: [ Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        children: [
                            {
                                type: FieldType.text,
                                name: "pageTitle",
                                label: this.translate.instant("Page Title"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.chips,
                                name: "keyWords",
                                label: this.translate.instant("Keywords"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.text,
                                name: "metaDescription",
                                label: this.translate.instant(
                                    "meta Description"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                            {
                                type: FieldType.text,
                                name: "ogTtile",
                                label: this.translate.instant(
                                    "Open Graph Title (og:title)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogImage",
                                label: this.translate.instant(
                                    "Open Graph Image URL (og:image)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogType",
                                label: this.translate.instant(
                                    "Open Graph Type (og:typt)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogDescription",
                                label: this.translate.instant(
                                    "Open Graph Description (og:description)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                        ],
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "Assessment",
                plural: "Assessments",
            },
            apiSelector: "Assessment",
            route: "/generic/Assessment",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "title." + this.utils.currentLang,
                        headerName: this.translate.instant("title"),
                    },
                    {
                        field: "description." + this.utils.currentLang,
                        headerName: this.translate.instant("description"),
                    },
                    {
                        field: "author",
                        headerName: this.translate.instant("author"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: "title",
                        label: this.translate.instant("title"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "description",
                        label: this.translate.instant("description"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "body",
                        label: this.translate.instant("body"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },
                    {
                        type: FieldType.date,
                        name: "valueDate",
                        label: this.translate.instant("valueDate"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.text,
                        name: "author",
                        label: this.translate.instant("author"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.group,
                        name: "SEO",
                        label: this.translate.instant("SEO"),
                        required: false,
                        // validators: [ Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        children: [
                            {
                                type: FieldType.text,
                                name: "pageTitle",
                                label: this.translate.instant("Page Title"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.chips,
                                name: "keyWords",
                                label: this.translate.instant("Keywords"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.text,
                                name: "metaDescription",
                                label: this.translate.instant(
                                    "meta Description"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                            {
                                type: FieldType.text,
                                name: "ogTtile",
                                label: this.translate.instant(
                                    "Open Graph Title (og:title)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogImage",
                                label: this.translate.instant(
                                    "Open Graph Image URL (og:image)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogType",
                                label: this.translate.instant(
                                    "Open Graph Type (og:typt)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogDescription",
                                label: this.translate.instant(
                                    "Open Graph Description (og:description)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                        ],
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "Resource",
                plural: "Resources",
            },
            apiSelector: "Resource",
            route: "/generic/Resource",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "title." + this.override.currentLang,
                        headerName: this.translate.instant("title"),
                    },
                    {
                        field: "description." + this.override.currentLang,
                        headerName: this.translate.instant("description"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: "title",
                        label: this.translate.instant("title"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "description",
                        label: this.translate.instant("description"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "body",
                        label: this.translate.instant("body"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },
                    {
                        type: FieldType.date,
                        name: "valueDate",
                        label: this.translate.instant("valueDate"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },

                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.group,
                        name: "SEO",
                        label: this.translate.instant("SEO"),
                        required: false,
                        // validators: [ Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        children: [
                            {
                                type: FieldType.text,
                                name: "pageTitle",
                                label: this.translate.instant("Page Title"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.chips,
                                name: "keyWords",
                                label: this.translate.instant("Keywords"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.text,
                                name: "metaDescription",
                                label: this.translate.instant(
                                    "meta Description"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                            {
                                type: FieldType.text,
                                name: "ogTtile",
                                label: this.translate.instant(
                                    "Open Graph Title (og:title)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogImage",
                                label: this.translate.instant(
                                    "Open Graph Image URL (og:image)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogType",
                                label: this.translate.instant(
                                    "Open Graph Type (og:typt)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogDescription",
                                label: this.translate.instant(
                                    "Open Graph Description (og:description)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                        ],
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "Category",
                plural: "Categories",
            },
            apiSelector: "Category",
            route: "/generic/Category",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "title." + this.utils.currentLang,
                        headerName: this.translate.instant("title"),
                    },
                    {
                        field: "description." + this.utils.currentLang,
                        headerName: this.translate.instant("description"),
                    },
                    {
                        field: "valueDate",
                        headerName: this.translate.instant("valueDate"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: "title",
                        label: this.translate.instant("title"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "description",
                        label: this.translate.instant("description"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },

                    {
                        type: FieldType.date,
                        name: "valueDate",
                        label: this.translate.instant("valueDate"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.entity,
                        name: "children",
                        label: this.translate.instant("Category"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                        selectOptions: {
                            optionName: "title",
                            fromSelector: "Category",
                            columns: [
                                {
                                    headerName: "#",
                                    valueGetter: "node.rowIndex + 1",
                                    checkboxSelection: true,
                                },
                                {
                                    field: "title." + this.utils.currentLang,
                                    headerName: this.translate.instant("title"),
                                    checkboxSelection: false,
                                },
                            ],
                        },
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "Product",
                plural: "Products",
            },
            apiSelector: "Product",
            route: "/generic/Product",
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "title." + this.utils.currentLang,
                        headerName: this.translate.instant("title"),
                    },
                    {
                        field: "description." + this.utils.currentLang,
                        headerName: this.translate.instant("description"),
                    },
                ],
            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: "title",
                        label: this.translate.instant("title"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                    },

                    {
                        type: FieldType.textLocalized,
                        name: "description",
                        label: this.translate.instant("description"),
                        required: true,
                        validators: [
                            Validators.required,
                            Validators.minLength(3),
                        ],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                    },
                    {
                        type: FieldType.file,
                        name: "image",
                        label: this.translate.instant("image"),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                    },

                    {
                        type: FieldType.group,
                        name: "SEO",
                        label: this.translate.instant("SEO"),
                        required: false,
                        // validators: [ Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        children: [
                            {
                                type: FieldType.text,
                                name: "pageTitle",
                                label: this.translate.instant("Page Title"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.chips,
                                name: "keyWords",
                                label: this.translate.instant("Keywords"),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,
                            },
                            {
                                type: FieldType.text,
                                name: "metaDescription",
                                label: this.translate.instant(
                                    "meta Description"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                            {
                                type: FieldType.text,
                                name: "ogTtile",
                                label: this.translate.instant(
                                    "Open Graph Title (og:title)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogImage",
                                label: this.translate.instant(
                                    "Open Graph Image URL (og:image)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogType",
                                label: this.translate.instant(
                                    "Open Graph Type (og:typt)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,
                            },
                            {
                                type: FieldType.text,
                                name: "ogDescription",
                                label: this.translate.instant(
                                    "Open Graph Description (og:description)"
                                ),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                            },
                        ],
                    },
                ],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
        {
            name: {
                single: "ContactUs",
                plural: "ContactUs",
            },
            apiSelector: "ContactUs",
            route: "/generic/ContactUs",
            add: false,
            edit: false,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: "#",
                        valueGetter: "node.rowIndex + 1",
                    },
                    {
                        field: "name",
                        headerName: this.translate.instant("name"),
                    },
                    {
                        field: "email",
                        headerName: this.translate.instant("email"),
                    },
                    {
                        field: "phone",
                        headerName: this.translate.instant("phone"),
                    },
                    {
                        field: "admin",
                        headerName: this.translate.instant("admin"),
                    },
                    {
                        field: "jobTitle",
                        headerName: this.translate.instant("jobTitle"),
                    },
                    {
                        field: "country",
                        headerName: this.translate.instant("country"),
                    },
                    {
                        field: "industry",
                        headerName: this.translate.instant("industry"),
                    },
                ],
            },
            form: {
                fields: [],
                cols: 12,
                localizedAllFields: true,
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin],
            },
        },
    ];
}
