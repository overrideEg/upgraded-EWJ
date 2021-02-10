import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { Validators } from '@angular/forms';
import { EntityData } from '@override/utils/interfaces/entityData';
import { UtilsService } from '@override/utils/utils.service';
import { DatePipe } from '@angular/common';
import { UserType } from './user-type.enum';
import { OverrideService } from '../@override/utils/override.service';
import { API_URLS } from '../assets/constants/API_URLS';

export class AllEntities {
    constructor(
        private utils: UtilsService,
        private override: OverrideService,
        private datePipe: DatePipe,
        private translate: TranslateService,
    ) { }
    public entities: EntityData[] = [
        // {
        //     name: {
        //         single: 'User',
        //         plural: 'Users',
        //     },
        //     apiSelector: 'User',
        //     route: '/generic/User',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 // field: 'id',
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name',
        //                 headerName: this.translate.instant('name'),
        //             },
        //             {
        //                 field: 'email',
        //                 headerName: this.translate.instant('email'),
        //             },
        //             // {
        //             //     field: 'password',
        //             //     headerName: this.translate.instant('password'),
        //             // },
        //             {
        //                 field: 'mobile',
        //                 headerName: this.translate.instant('mobile'),
        //             },
        //             {
        //                 field: 'userType',
        //                 headerName: this.translate.instant('userType'),
        //             },
        //             {
        //                 field: 'isActive',
        //                 headerName: this.translate.instant('isActive'),
        //             },
        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.text,
        //                 name: 'name',
        //                 label: this.translate.instant('name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 3

        //             },
        //             {
        //                 type: FieldType.email,
        //                 name: 'email',
        //                 label: this.translate.instant('Email'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.email],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 3,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'mobile',
        //                 label: this.translate.instant('phoneNumber'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.pattern(this.utils.phoneNumberRegExp)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 3,

        //             },
        //             {
        //                 type: FieldType.dropdown,
        //                 name: 'userType',
        //                 label: this.translate.instant('userType'),
        //                 multiple: false,
        //                 required: false,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 3,

        //                 options: [
        //                     {
        //                         value: 'user',
        //                         label: this.translate.instant('user')
        //                     },
        //                     {
        //                         value: 'admin',
        //                         label: this.translate.instant('admin')
        //                     },
        //                     {
        //                         value: 'employee',
        //                         label: this.translate.instant('employee')
        //                     },
        //                     {
        //                         value: 'broker',
        //                         label: this.translate.instant('broker')
        //                     }
        //                 ]
        //             },
        //             {
        //                 type: FieldType.checkbox,
        //                 name: 'isActive',
        //                 label: this.translate.instant('isActive'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.number,
        //                 name: 'capability',
        //                 label: this.translate.instant('Applications Capapility'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //             },
        //         ],
        //         cols: 12,
        //         localizedAllFields: true
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        {
            name: {
                single: 'Employee',
                plural: 'Employeee',
            },
            apiSelector: 'Employee',
            route: '/generic/Employee',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name' ,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'email' ,
                        headerName: this.translate.instant('email'),
                    },
                    {
                        field: 'gender' ,
                        headerName: this.translate.instant('gender'),
                    },
                    {
                        field: 'jobTitle' ,
                        headerName: this.translate.instant('jobTitle'),
                    },
                    {
                        field: 'mobile' ,
                        headerName: this.translate.instant('mobile'),
                    },
                    {
                        field: 'userType' ,
                        headerName: this.translate.instant('userType'),
                    },
                    {
                        field: 'birthDate' ,
                        headerName: this.translate.instant('birthDate'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.email,
                        name: 'email',
                        label: this.translate.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.text,
                        name: 'password',
                        label: this.translate.instant('password'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.dropdown,
                        name: 'gender',
                        label: this.translate.instant('gender'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options: [
                            {
                                value: 'male',
                                label: this.translate.instant('male')
                            },
                            {
                                value: 'female',
                                label: this.translate.instant('female')
                            }
                        ]

                    },
                    {
                        type: FieldType.text,
                        name: 'jobTitle',
                        label: this.translate.instant('jobTitle'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.text,
                        name: 'mobile',
                        label: this.translate.instant('mobile'),
                        required: true,
                        validators: [Validators.required, Validators.pattern(this.utils.phoneNumberRegExp)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                 
                    {
                        type: FieldType.date,
                        name: 'birthDate',
                        label: this.translate.instant('birthDate'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    
                    {
                        type: FieldType.entity,
                        name: 'location',
                        label: this.translate.instant('location'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Location',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name' , headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.dropdown,
                        name: 'userType',
                        label: this.translate.instant('userType'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options: [
                            {
                                value: 'systemAdmin',
                                label: this.translate.instant('systemAdmin')
                            },
                            {
                                value: 'companyOwner',
                                label: this.translate.instant('companyOwner')
                            },
                            {
                                value: 'companyAdmin',
                                label: this.translate.instant('companyAdmin')
                            },
                            {
                                value: 'user',
                                label: this.translate.instant('user')
                            }
                        ]

                    },
                    {
                        type: FieldType.checkbox,
                        name: 'isActive',
                        label: this.translate.instant('isActive'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Location',
                plural: 'Locations',
            },
            apiSelector: 'Location',
            route: '/generic/Location',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name' ,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'phoneNumber' ,
                        headerName: this.translate.instant('phoneNumber'),
                    },
                    {
                        field: 'type' ,
                        headerName: this.translate.instant('type'),
                    },
                    {
                        field: 'affectOnParentPercent' ,
                        headerName: this.translate.instant('affectOnParentPercent'),
                    },

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this.translate.instant('type'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options: [
                            {
                                value: 'facility',
                                label: this.translate.instant('facility')
                            },
                            {
                                value: 'team',
                                label: this.translate.instant('team')
                            },
                            {
                                value: 'area',
                                label: this.translate.instant('area')
                            },
                            {
                                value: 'subArea',
                                label: this.translate.instant('subArea')
                            }
                        ]

                    },
                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6, 
                    },
                    {
                        type: FieldType.text,
                        name: 'phoneNumber',
                        label: this.translate.instant('phoneNumber'),
                        required: true,
                        validators: [Validators.required, Validators.pattern(this.utils.phoneNumberRegExp)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                  
                    {
                        type: FieldType.number,
                        name: 'affectOnParentPercent',
                        label: this.translate.instant('affectOnParentPercent'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        min:0,
                        max:100

                    },
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
     
        {
            name: {
                single: 'Notification',
                plural: 'Notifications',
            },
            apiSelector: 'Notification',
            route: '/generic/Notification',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'title' ,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body' ,
                        headerName: this.translate.instant('body'),
                    },
                    {
                        field: 'recipient.username' ,
                        headerName: this.translate.instant('recipient'),
                    },
                    {
                        field: 'locationReceiver.locationType' ,
                        headerName: this.translate.instant('locationReceiver'),
                    },

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.text,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                  
                    {
                        type: FieldType.text,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 6,

                    },
                    {
                        type: FieldType.entity,
                        name: 'recipient',
                        label: this.translate.instant('recipient'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'username',
                            fromSelector: 'Employee',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'username' , headerName: this.translate.instant('username'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'locationReceiver',
                        label: this.translate.instant('locationReceiver'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'locationType',
                            fromSelector: 'Location',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'locationType' , headerName: this.translate.instant('locationType'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.text,
                        name: 'phoneNumber',
                        label: this.translate.instant('phoneNumber'),
                        required: true,
                        validators: [Validators.required, Validators.pattern(this.utils.phoneNumberRegExp)],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'specialRequest',
                plural: 'specialRequests',
            },
            apiSelector: 'specialRequest',
            route: '/generic/specialRequest',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                  
                    {
                        field: 'message' ,
                        headerName: this.translate.instant('message'),
                    },
                    {
                        field: 'sender.name' ,
                        headerName: this.translate.instant('sender'),
                    },
                   

                ]

            },
            form: {
                fields: [
                   
                   
                  
                    {
                        type: FieldType.text,
                        name: 'message',
                        label: this.translate.instant('message'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 6,

                    },
                    {
                        type: FieldType.entity,
                        name: 'sender',
                        label: this.translate.instant('sender'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Employee',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name' , headerName: this.translate.instant('username'), checkboxSelection: false },
                            ]
                        },
                    },
                  
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'review',
                plural: 'reviews',
            },
            apiSelector: 'review',
            route: '/generic/review',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'review' ,
                        headerName: this.translate.instant('review'),
                    },
                    {
                        field: 'critical' ,
                        headerName: this.translate.instant('critical'),
                    },
                    {
                        field: 'employee.username' ,
                        headerName: this.translate.instant('employee'),
                    },
                    {
                        field: 'location.locationType' ,
                        headerName: this.translate.instant('location'),
                    },
                   

                ]

            },
            form: {
                fields: [
                   
                  
                  
                  
                    {
                        type: FieldType.checkbox,
                        name: 'critical',
                        label: this.translate.instant('critical'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                  
                  
                    {
                        type: FieldType.number,
                        name: 'review',
                        label: this.translate.instant('review'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.entity,
                        name: 'employee',
                        label: this.translate.instant('employee'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Employee',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name' , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                    {
                        type: FieldType.entity,
                        name: 'location',
                        label: this.translate.instant('location'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'locationType',
                            fromSelector: 'Location',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name' , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                  
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'employeeInContactWith',
                plural: 'employeeInContactWiths',
            },
            apiSelector: 'employeeInContactWith',
            route: '/generic/employeeInContactWith',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'employee.name' ,
                        headerName: this.translate.instant('employee Name'),
                    },
     

                ]

            },
            form: {
                fields: [
                   
                  
                  
                  
                    {
                        type: FieldType.entity,
                        name: 'employee',
                        label: this.translate.instant('employee'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        multiple:true,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Employee',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name' , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                  
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Answer',
                plural: 'Answers',
            },
            apiSelector: 'Answer',
            route: '/generic/Answer',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'text.'+this.utils.currentLang ,
                        headerName: this.translate.instant('text'),
                    },
                    {
                        field: 'weight' ,
                        headerName: this.translate.instant('weight'),
                    },
                 

                ]

            },
            form: {
                fields: [
                   
                  
                  
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'text',
                        label: this.translate.instant('text'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },
                  
                  
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.number,
                        name: 'weight',
                        label: this.translate.instant('weight'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                  
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Course',
                plural: 'Courses',
            },
            apiSelector: 'Course',
            route: '/generic/Course',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name.'+this.utils.currentLang ,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'description.'+this.utils.currentLang ,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'successPercent' ,
                        headerName: this.translate.instant('successPercent'),
                    },
                    {
                        field: 'attendancePercent' ,
                        headerName: this.translate.instant('attendancePercent'),
                    },
                    {
                        field: 'examPercent' ,
                        headerName: this.translate.instant('examPercent'),
                    },
                 

                ]

            },
            form: {
                fields: [
                   
                  
                  
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'description',
                        label: this.translate.instant('description'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                  
                  
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.url,
                        name: 'url',
                        label: this.translate.instant('url'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.number,
                        name: 'successPercent',
                        label: this.translate.instant('successPercent'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.number,
                        name: 'attendancePercent',
                        label: this.translate.instant('attendancePercent'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.number,
                        name: 'examPercent',
                        label: this.translate.instant('examPercent'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                  
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Exam',
                plural: 'Exams',
            },
            apiSelector: 'Exam',
            route: '/generic/Exam',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'course.description.'+this.utils.currentLang ,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'successPercentage' ,
                        headerName: this.translate.instant('successPercentage'),
                    },
                   
                 

                ]

            },
            form: {
                fields: [
                   
                  
                  
                  
                    {
                        type: FieldType.entity,
                        name: 'course',
                        label: this.translate.instant('course'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'description',
                            fromSelector: 'Course',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'description.'+this.override.currentLang , headerName: this.translate.instant('description'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                   
                    {
                        type: FieldType.number,
                        name: 'successPercentage',
                        label: this.translate.instant('successPercentage'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Lesson',
                plural: 'Lessons',
            },
            apiSelector: 'Lesson',
            route: '/generic/Lesson',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'course.description.'+this.utils.currentLang ,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'type' ,
                        headerName: this.translate.instant('type'),
                    },
                   
                 

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this.translate.instant('type'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options:[
                            {
                                value: 'tutorial',
                                label: this.translate.instant('tutorial')
                            },
                            {
                                value: 'video',
                                label: this.translate.instant('video')
                            }
                        ]

                    },
                  
                    {
                        type: FieldType.entity,
                        name: 'course',
                        label: this.translate.instant('course'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'description',
                            fromSelector: 'Course',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'description.'+this.override.currentLang , headerName: this.translate.instant('description'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'description',
                        label: this.translate.instant('description'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 12,

                    },
                    {
                        type: FieldType.file,
                        name: 'pdfUrl',
                        label: this.translate.instant('pdfUrl'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false, 
                        cols: 6,

                    },
                    {
                        type: FieldType.url,
                        name: 'videoUrl',
                        label: this.translate.instant('videoUrl'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false, 
                        cols: 6,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'tutorialText',
                        label: this.translate.instant('tutorialText'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false, 
                        multiline:true,
                        cols: 12,

                    },
                    
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'CronExpression',
                plural: 'CronExpressions',
            },
            apiSelector: 'CronExpression',
            route: '/generic/CronExpression',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name.'+this.utils.currentLang ,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'seconds' ,
                        headerName: this.translate.instant('seconds'),
                    },
                    {
                        field: 'minutes' ,
                        headerName: this.translate.instant('minutes'),
                    },
                    {
                        field: 'hours' ,
                        headerName: this.translate.instant('hours'),
                    },
                    {
                        field: 'dayOfMonth' ,
                        headerName: this.translate.instant('dayOfMonth'),
                    },
                    {
                        field: 'month' ,
                        headerName: this.translate.instant('month'),
                    },
                    {
                        field: 'dayOfWeek' ,
                        headerName: this.translate.instant('dayOfWeek'),
                    },
                   
                 

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                       

                    },
                 
                    {
                        type: FieldType.number,
                        name: 'seconds',
                        label: this.translate.instant('seconds'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                    {
                        type: FieldType.number,
                        name: 'minutes',
                        label: this.translate.instant('minutes'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                    {
                        type: FieldType.number,
                        name: 'hours',
                        label: this.translate.instant('hours'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                    {
                        type: FieldType.number,
                        name: 'dayOfMonth',
                        label: this.translate.instant('dayOfMonth'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                    {
                        type: FieldType.number,
                        name: 'month',
                        label: this.translate.instant('month'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                    {
                        type: FieldType.number,
                        name: 'dayOfWeek',
                        label: this.translate.instant('dayOfWeek'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 4,

                    },
                   
                    
             
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Survey',
                plural: 'Surveys',
            },
            apiSelector: 'Survey',
            route: '/generic/Survey',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name.'+this.utils.currentLang ,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'description.'+this.utils.currentLang ,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'type' ,
                        headerName: this.translate.instant('type'),
                    },
                    {
                        field: 'affectPercent' ,
                        headerName: this.translate.instant('affectPercent'),
                    },
                    {
                        field: 'cronExpression.name.'+this.override.currentLang ,
                        headerName: this.translate.instant('cronExpression'),
                    },
                 
                   
                 

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                       

                    },
                 
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'description',
                        label: this.translate.instant('description'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                       

                    },
                 
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this.translate.instant('type'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options:[
                            {label:"facilityAssessment", value:"facilityAssessment"},
                            {label:"healthDefinition", value:"healthDefinition"},
                            {label:"morale", value:"morale"},
                            {label:"risk", value:"risk"},
                        ]
                    },
                    {
                        type: FieldType.number,
                        name: 'affectPercent',
                        label: this.translate.instant('affectPercent'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 6,

                    },
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 6,

                    },
                   
                    
                    {
                        type: FieldType.entity,
                        name: 'cronExpression',
                        label: this.translate.instant('cronExpression'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'CronExpression',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name.'+this.override.currentLang , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Question',
                plural: 'Questions',
            },
            apiSelector: 'Question',
            route: '/generic/Question',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'text.'+this.utils.currentLang ,
                        headerName: this.translate.instant('text'),
                    },
                   
                   
                 

                ]

            },
            form: {
                fields: [
                   
                  
                    {
                        type: FieldType.textLocalized,
                        name: 'text',
                        label: this.translate.instant('text'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                       

                    },
                  
                    {
                        type: FieldType.entity,
                        name: 'survey',
                        label: this.translate.instant('survey'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Survey',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name.'+this.override.currentLang , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'exam',
                        label: this.translate.instant('exam'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Exam',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name.'+this.override.currentLang , headerName: this.translate.instant('name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'dependOnAnswer',
                        label: this.translate.instant('dependOnAnswer'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                        selectOptions: {
                            optionName: 'text',
                            fromSelector: 'Answer',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'text.'+this.override.currentLang , headerName: this.translate.instant('text'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                   

                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.company],
                view: [UserType.admin]
            }
        },
        // {
        //     name: {
        //         single: 'City',
        //         plural: 'Cities',
        //     },
        //     apiSelector: 'City',
        //     route: '/generic/City',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },
        //             {
        //                 field: 'country.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('country'),
        //             },

        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },

        //             {
        //                 type: FieldType.entity,
        //                 name: 'country',
        //                 label: this.translate.instant('country'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'Country',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Degree',
        //         plural: 'Degrees',
        //     },
        //     apiSelector: 'Degree',
        //     route: '/generic/Degree',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },



        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Department',
        //         plural: 'Departments',
        //     },
        //     apiSelector: 'Department',
        //     route: '/generic/Department',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },

        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('Background Image'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,


        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'University',
        //         plural: 'Universities',
        //     },
        //     apiSelector: 'University',
        //     route: '/generic/University',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },
        //             {
        //                 field: 'city',
        //                 headerName: this.translate.instant('city'),
        //                 cellRenderer: (param) => {
        //                     return param?.value?.name[this.utils.currentLang];
        //                 }

        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('University Name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'foundationDate',
        //                 label: this.translate.instant('Date Of Foundation'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 3,
        //             },

        //             {
        //                 type: FieldType.entity,
        //                 name: 'city',
        //                 label: this.translate.instant('Where University Located'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 3,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'City',

        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },
        //             {
        //                 type: FieldType.number,
        //                 name: 'originalFees',
        //                 label: this.translate.instant('Original Fees'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.min(0)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 3,

        //             },

        //             {
        //                 type: FieldType.number,
        //                 name: 'feesAfterDiscount',
        //                 label: this.translate.instant('Fees After Discount'),
        //                 required: false,
        //                 validators: [Validators.min(0)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 3,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'officialWebsite',
        //                 label: this.translate.instant('officialWebsite'),
        //                 required: false,
        //                 validators: [Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.group,
        //                 name: 'statistics',
        //                 label: this.translate.instant('statistics'),
        //                 required: false,
        //                 // validators: [ Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 children: [
        //                     {
        //                         type: FieldType.number,
        //                         name: 'localRank',
        //                         label: this.translate.instant('Local Rank'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 3,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'globalRank',
        //                         label: this.translate.instant('Global Rank'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 3,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'noOfStudents',
        //                         label: this.translate.instant('Number Of Students'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 3,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'noOfDepartments',
        //                         label: this.translate.instant('Number Of Departments'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 3,

        //                     }


        //                 ]
        //             },
        //             {
        //                 type: FieldType.file,
        //                 name: 'logo',
        //                 label: this.translate.instant('Logo'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiple: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('University Main Image'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiple: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.editorLocalized,
        //                 name: 'overview',
        //                 label: this.translate.instant('Overview About University'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.editorLocalized,
        //                 name: 'recognitions',
        //                 label: this.translate.instant('Who Recognize University'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.array,
        //                 name: 'departments',
        //                 cols: 12,

        //                 arrayView: 'table',
        //                 arrayAddRow: true,
        //                 required: true,
        //                 disabled: false,

        //                 label: this.translate.instant('University Departments'),
        //                 readonly: false,
        //                 initialValue: [],
        //                 children: [
        //                     {
        //                         type: FieldType.entity,
        //                         name: 'degree',
        //                         label: this.translate.instant('degree'),
        //                         required: true,
        //                         validators: [Validators.required],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 6,

        //                         selectOptions: {
        //                             optionName: 'name',
        //                             fromSelector: 'Degree',
        //                             columns: [
        //                                 {
        //                                     headerName: '#',
        //                                     valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                                 },
        //                                 { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                             ]
        //                         },
        //                     },
        //                     {
        //                         type: FieldType.entity,
        //                         name: 'department',
        //                         label: this.translate.instant('department'),
        //                         required: true,
        //                         validators: [Validators.required],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 6,

        //                         selectOptions: {
        //                             optionName: 'name',
        //                             fromSelector: 'Department',
        //                             columns: [
        //                                 {
        //                                     headerName: '#',
        //                                     valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                                 },
        //                                 { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                             ]
        //                         },
        //                     },


        //                     {
        //                         type: FieldType.entity,
        //                         name: 'language',
        //                         label: this.translate.instant('language'),
        //                         required: true,
        //                         validators: [Validators.required],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 6,

        //                         selectOptions: {
        //                             optionName: 'name',
        //                             fromSelector: 'Language',
        //                             columns: [
        //                                 {
        //                                     headerName: '#',
        //                                     valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                                 },
        //                                 { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                             ]
        //                         },
        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'numberOfYears',
        //                         label: this.translate.instant('numberOfYears'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'originalFees',
        //                         label: this.translate.instant('originalFees'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'feesAfterDiscount',
        //                         label: this.translate.instant('feesAfterDiscount'),
        //                         required: false,
        //                         validators: [Validators.min(0)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },

        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'program',
        //                         label: this.translate.instant('program'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 12,

        //                     },


        //                 ],
        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.group,
        //                 name: 'seo',
        //                 label: this.translate.instant('SEO'),
        //                 required: false,
        //                 // validators: [ Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 children: [
        //                     {
        //                         type: FieldType.text,
        //                         name: 'pageTitle',
        //                         label: this.translate.instant('Page Title'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.chips,
        //                         name: 'keyWords',
        //                         label: this.translate.instant('Keywords'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'metaDescription',
        //                         label: this.translate.instant('meta Description'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogTtile',
        //                         label: this.translate.instant('Open Graph Title (og:title)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogImage',
        //                         label: this.translate.instant('Open Graph Image URL (og:image)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogType',
        //                         label: this.translate.instant('Open Graph Type (og:typt)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogDescription',
        //                         label: this.translate.instant('Open Graph Description (og:description)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                 ]
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Language',
        //         plural: 'Languages',
        //     },
        //     apiSelector: 'Language',
        //     route: '/generic/Language',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },



        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },

        // {
        //     name: {
        //         single: 'University Department',
        //         plural: 'Universities Departments',
        //     },
        //     apiSelector: 'UniversityDepartment',
        //     route: '/generic/UniversityDepartment',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,

        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'university.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('University'),
        //             },
        //             {
        //                 field: 'program.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('program'),
        //             },
        //             {
        //                 field: 'numberOfYears',
        //                 headerName: this.translate.instant('numberOfYears'),
        //             },
        //             {
        //                 field: 'originalFees',
        //                 headerName: this.translate.instant('originalFees'),
        //             },
        //             {
        //                 field: 'language.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('language'),
        //             },

        //             {
        //                 field: 'department.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('department'),
        //             },
        //             {
        //                 field: 'degree.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('degree'),
        //             },

        //             {
        //                 headerName: this.translate.instant('Send To Student'),
        //                 cellRenderer: 'sendOffer'
        //             },
        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'program',
        //                 label: this.translate.instant('program'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },

        //             {
        //                 type: FieldType.entity,
        //                 name: 'language',
        //                 label: this.translate.instant('language'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'Language',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },
        //             {
        //                 type: FieldType.number,
        //                 name: 'numberOfYears',
        //                 label: this.translate.instant('numberOfYears'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.min(0)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.number,
        //                 name: 'originalFees',
        //                 label: this.translate.instant('originalFees'),
        //                 required: false,
        //                 validators: [Validators.min(0)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.number,
        //                 name: 'feesAfterDiscount',
        //                 label: this.translate.instant('feesAfterDiscount'),
        //                 required: false,
        //                 validators: [Validators.min(0)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.entity,
        //                 name: 'university',
        //                 label: this.translate.instant('university'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'University',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },
        //             {
        //                 type: FieldType.entity,
        //                 name: 'department',
        //                 label: this.translate.instant('department'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'Department',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },
        //             {
        //                 type: FieldType.entity,
        //                 name: 'degree',
        //                 label: this.translate.instant('degree'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'Degree',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },

        // {
        //     name: {
        //         single: 'Category',
        //         plural: 'Categories',
        //     },
        //     apiSelector: 'Category',
        //     route: '/generic/Category',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 100,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('category Name'),
        //             },



        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('Category Name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },





        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },

        // {
        //     name: {
        //         single: 'Article',
        //         plural: 'Articles',
        //     },
        //     apiSelector: 'Article',
        //     route: '/generic/Article',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     draft: true,
        //     draftView: true,
        //     draftViewURL: 'https://edu-promise.com/articles/view/{slug}/{entityId}',
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 100,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'lang',
        //                 headerName: this.translate.instant('language'),

        //             },
        //             {
        //                 field: 'published',
        //                 headerName: this.translate.instant('Published'),
        //                 // cellRenderer: (node) => {
        //                 //     console.log('par',node);
                            
        //                 //     let val
        //                 //     node.value === true ? val = this.translate.instant('Yes') : val = this.translate.instant('No');
        //                 //     return val ;
        //                 // }
        //             },
        //             {
        //                 field: 'title',
        //                 headerName: this.translate.instant('Title'),
        //             },


        //             {
        //                 field: 'author',
        //                 headerName: this.translate.instant('author'),
        //             }, {
        //                 field: 'category.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('Category'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.dropdown,
        //                 name: 'lang',
        //                 label: this.translate.instant('Language'),
        //                 multiple: false,
        //                 required: false,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 options: [
        //                     {
        //                         value: 'ar',
        //                         label: this.translate.instant('Arabic')
        //                     },
        //                     {
        //                         value: 'en',
        //                         label: this.translate.instant('English')
        //                     }
        //                 ]
        //             },
        //             {
        //                 type: FieldType.entity,
        //                 name: 'category',
        //                 label: this.translate.instant('category'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'Category',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'title',
        //                 label: this.translate.instant('title'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.autoComplete,
        //                 name: 'slug',
        //                 label: this.translate.instant('Slug'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //                 selectOptions: {
        //                     autoCompleteURL: API_URLS.Article.check
        //                 }
        //             },


        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('Image'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'imageAlt',
        //                 label: this.translate.instant('Image Alt'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 4,

        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'author',
        //                 label: this.translate.instant('author'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 8,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.editor,
        //                 name: 'body',
        //                 label: this.translate.instant('Article'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.group,
        //                 name: 'seo',
        //                 label: this.translate.instant('SEO'),
        //                 required: false,
        //                 // validators: [ Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 children: [
        //                     {
        //                         type: FieldType.text,
        //                         name: 'pageTitle',
        //                         label: this.translate.instant('Page Title'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.chips,
        //                         name: 'keyWords',
        //                         label: this.translate.instant('Keywords'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'metaDescription',
        //                         label: this.translate.instant('meta Description'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogTtile',
        //                         label: this.translate.instant('Open Graph Title (og:title)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogImage',
        //                         label: this.translate.instant('Open Graph Image URL (og:image)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogType',
        //                         label: this.translate.instant('Open Graph Type (og:typt)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogDescription',
        //                         label: this.translate.instant('Open Graph Description (og:description)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                 ]
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'University Article',
        //         plural: 'University Articles',
        //     },
        //     apiSelector: 'UniversityArticle',
        //     route: '/generic/UniversityArticle',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     draft: true,
        //     draftView: true,
        //     draftViewURL: 'https://edu-promise.com/articles/university/{slug}/{entityId}',
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 100,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'university.name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('University'),
        //             },
        //             {
        //                 field: 'lang',
        //                 headerName: this.translate.instant('language'),

        //             },
        //             {
        //                 field: 'title',
        //                 headerName: this.translate.instant('Title'),
        //             },

        //             {
        //                 field: 'author',
        //                 headerName: this.translate.instant('author'),
        //             },
        //             {
        //                 field: 'published',
        //                 headerName: this.translate.instant('Published'),
        //                 // cellRenderer: (node) => {
        //                 //     console.log('par',node);
                            
        //                 //     let val
        //                 //     node.value === true ? val = this.translate.instant('Yes') : val = this.translate.instant('No');
        //                 //     return val ;
        //                 // }
        //             },

        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.dropdown,
        //                 name: 'lang',
        //                 label: this.translate.instant('Language'),
        //                 multiple: false,
        //                 required: false,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 options: [
        //                     {
        //                         value: 'ar',
        //                         label: this.translate.instant('Arabic')
        //                     },
        //                     {
        //                         value: 'en',
        //                         label: this.translate.instant('English')
        //                     }
        //                 ]
        //             },
        //             {
        //                 type: FieldType.entity,
        //                 name: 'university',
        //                 label: this.translate.instant('university'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'University',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'title',
        //                 label: this.translate.instant('title'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.autoComplete,
        //                 name: 'slug',
        //                 label: this.translate.instant('Slug'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,
        //                 selectOptions: {
        //                     autoCompleteURL: API_URLS.Article.check
        //                 }
        //             },


        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('Image'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'imageAlt',
        //                 label: this.translate.instant('Image Alt'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 4,

        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'author',
        //                 label: this.translate.instant('author'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 8,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.editor,
        //                 name: 'body',
        //                 label: this.translate.instant('Article'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.group,
        //                 name: 'seo',
        //                 label: this.translate.instant('SEO'),
        //                 required: false,
        //                 // validators: [ Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 children: [
        //                     {
        //                         type: FieldType.text,
        //                         name: 'pageTitle',
        //                         label: this.translate.instant('Page Title'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.chips,
        //                         name: 'keyWords',
        //                         label: this.translate.instant('Keywords'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'metaDescription',
        //                         label: this.translate.instant('meta Description'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogTtile',
        //                         label: this.translate.instant('Open Graph Title (og:title)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogImage',
        //                         label: this.translate.instant('Open Graph Image URL (og:image)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogType',
        //                         label: this.translate.instant('Open Graph Type (og:typt)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogDescription',
        //                         label: this.translate.instant('Open Graph Description (og:description)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                 ]
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Team',
        //         plural: 'Teams',
        //     },
        //     apiSelector: 'Team',
        //     route: '/generic/Team',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('name'),
        //             },
        //             {
        //                 field: 'jobTitle.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('jobTitle'),
        //             },



        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'name',
        //                 label: this.translate.instant('Name'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'jobTitle',
        //                 label: this.translate.instant('Job Title'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('image'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },





        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Advertisement',
        //         plural: 'Advertisements',
        //     },
        //     apiSelector: 'Advertise',
        //     route: '/generic/Advertise',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'name',
        //                 headerName: this.translate.instant('name'),
        //             }
        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.text,
        //                 name: 'name',
        //                 label: this.translate.instant('Name'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },

        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('image'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //             },
        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Service',
        //         plural: 'Services',
        //     },
        //     apiSelector: 'OurService',
        //     route: '/generic/OurService',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'title.' + this.utils.currentLang,
        //                 headerName: this.translate.instant('Title'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'title',
        //                 label: this.translate.instant('Title'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'body',
        //                 label: this.translate.instant('Body'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },

        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('image'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //             },

        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Page',
        //         plural: 'Pages',
        //     },
        //     apiSelector: 'Page',
        //     route: '/generic/Page',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'title_' + this.utils.currentLang,
        //                 headerName: this.translate.instant('Title'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.text,
        //                 name: 'title_en',
        //                 label: this.translate.instant('Title In English'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'title_ar',
        //                 label: this.translate.instant('Title In Arabic'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             {
        //                 type: FieldType.group,
        //                 name: 'seo',
        //                 label: this.translate.instant('SEO'),
        //                 required: false,
        //                 // validators: [ Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 children: [
        //                     {
        //                         type: FieldType.text,
        //                         name: 'pageTitle',
        //                         label: this.translate.instant('Page Title'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.chips,
        //                         name: 'keyWords',
        //                         label: this.translate.instant('Keywords'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'metaDescription',
        //                         label: this.translate.instant('meta Description'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogTtile',
        //                         label: this.translate.instant('Open Graph Title (og:title)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogImage',
        //                         label: this.translate.instant('Open Graph Image URL (og:image)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogType',
        //                         label: this.translate.instant('Open Graph Type (og:typt)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 4,

        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'ogDescription',
        //                         label: this.translate.instant('Open Graph Description (og:description)'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,

        //                     },
        //                 ]
        //             },




        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Section',
        //         plural: 'Sections',
        //     },
        //     apiSelector: 'Section',
        //     route: '/generic/Section',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'page.title_' + this.override.currentLang,
        //                 headerName: this.translate.instant('Page'),
        //             },
        //             {
        //                 field: 'title_' + this.override.currentLang,
        //                 headerName: this.translate.instant('Title'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.entity,
        //                 name: 'page',
        //                 label: this.translate.instant('Page'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //                 selectOptions: {
        //                     options: ['title_' + this.utils.currentLang],
        //                     fromSelector: 'Page',

        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'title_' + this.utils.currentLang, headerName: this.translate.instant('Title'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'title_en',
        //                 label: this.translate.instant('Title In English'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'title_ar',
        //                 label: this.translate.instant('Title In Arabic'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.editor,
        //                 name: 'body_en',
        //                 label: this.translate.instant('Body In English'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.editor,
        //                 name: 'body_ar',
        //                 label: this.translate.instant('Body In Arabic'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             // {
        //             //     type: FieldType.group,
        //             //     name: 'seo',
        //             //     label: this.translate.instant('SEO'),
        //             //     required: false,
        //             //     // validators: [ Validators.minLength(3)],
        //             //     disabled: false,
        //             //     readonly: false,
        //             //     multiline: false,
        //             //     cols: 12,
        //             //     children: [
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'pageTitle',
        //             //             label: this.translate.instant('Page Title'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 6,

        //             //         },
        //             //         {
        //             //             type: FieldType.chips,
        //             //             name: 'keyWords',
        //             //             label: this.translate.instant('Keywords'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 6,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'metaDescription',
        //             //             label: this.translate.instant('meta Description'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: true,
        //             //             cols: 12,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogTtile',
        //             //             label: this.translate.instant('Open Graph Title (og:title)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogImage',
        //             //             label: this.translate.instant('Open Graph Image URL (og:image)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogType',
        //             //             label: this.translate.instant('Open Graph Type (og:typt)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogDescription',
        //             //             label: this.translate.instant('Open Graph Description (og:description)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: true,
        //             //             cols: 12,

        //             //         },
        //             //     ]
        //             // },


        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'Rank',
        //         plural: 'Ranks',
        //     },
        //     apiSelector: 'Rank',
        //     route: '/generic/Rank',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'university',
        //                 headerName: this.translate.instant('University'),
        //                 cellRenderer: (node) => {
        //                     return node?.value?.name[this.utils.currentLang]
        //                 }
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.entity,
        //                 name: 'university',
        //                 label: this.translate.instant('university'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //                 selectOptions: {
        //                     optionName: 'name',
        //                     fromSelector: 'University',
        //                     columns: [
        //                         {
        //                             headerName: '#',
        //                             valueGetter: "node.rowIndex + 1", checkboxSelection: true
        //                         },
        //                         { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
        //                     ]
        //                 },
        //             },


        //             {
        //                 type: FieldType.array,
        //                 name: 'lines',
        //                 cols: 12,

        //                 arrayView: 'accordion',
        //                 arrayAddRow: true,
        //                 required: true,
        //                 disabled: false,

        //                 label: this.translate.instant('University Rank Details'),
        //                 readonly: false,
        //                 initialValue: [],
        //                 children: [
        //                     {
        //                         type: FieldType.number,
        //                         name: 'value',
        //                         label: this.translate.instant('Value'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },
        //                     {
        //                         type: FieldType.number,
        //                         name: 'cols',
        //                         label: this.translate.instant('Width In Screen'),
        //                         details: this.translate.instant('Screen is 12 column devide it if you want'),
        //                         required: false,
        //                         validators: [],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,

        //                     },



        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'text',
        //                         label: this.translate.instant('Text'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 6,

        //                     },


        //                 ],
        //             },



        //         ],
        //         cols: 6,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
        // {
        //     name: {
        //         single: 'SEO Option',
        //         plural: 'SEO Options',
        //     },
        //     apiSelector: 'SeoOptions',
        //     route: '/generic/SeoOptions',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 headerName: '#',
        //                 valueGetter: "node.rowIndex + 1"
        //             },
        //             {
        //                 field: 'page',
        //                 headerName: this.translate.instant('Page'),

        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [

        //             {
        //                 type: FieldType.dropdown,
        //                 name: 'page',
        //                 label: this.translate.instant('Page'),
        //                 multiple: false,
        //                 required: false,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //                 options: [
        //                     {
        //                         value: 'homePage',
        //                         label: this.translate.instant('Home Page')
        //                     },
        //                     {
        //                         value: 'allUniversites',
        //                         label: this.translate.instant('All Universites')
        //                     },
        //                     {
        //                         value: 'allArticles',
        //                         label: this.translate.instant('All Articles')
        //                     },
        //                     {
        //                         value: 'aboutUs',
        //                         label: this.translate.instant('About Us')
        //                     },
        //                     {
        //                         value: 'contactUs',
        //                         label: this.translate.instant('Contact Us')
        //                     },
        //                     {
        //                         value: 'studyInTurkey',
        //                         label: this.translate.instant('Study In Turkey')
        //                     },
        //                 ]
        //             },

        //             {
        //                 type: FieldType.text,
        //                 name: 'pageTitle',
        //                 label: this.translate.instant('Page Title'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.chips,
        //                 name: 'keyWords',
        //                 label: this.translate.instant('Keywords'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'metaDescription',
        //                 label: this.translate.instant('meta Description'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'ogTtile',
        //                 label: this.translate.instant('Open Graph Title (og:title)'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 4,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'ogImage',
        //                 label: this.translate.instant('Open Graph Image URL (og:image)'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 4,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'ogType',
        //                 label: this.translate.instant('Open Graph Type (og:typt)'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 4,

        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'ogDescription',
        //                 label: this.translate.instant('Open Graph Description (og:description)'),
        //                 required: false,
        //                 validators: [],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,

        //             },


        //         ],
        //         cols: 6,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
     
        // {
        //     name: {
        //         single: 'Openion',
        //         plural: 'Openions',
        //     },
        //     apiSelector: 'Openion',
        //     route: '/generic/Openion',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //     {
        //         checkboxSelection: true,
        //         headerCheckboxSelection: true,
        //         headerName: '#',
        //         valueGetter: "node.rowIndex + 1"
        //     },
        //             {
        //                 field: 'name',
        //                 headerName: this.translate.instant('Page'),
        //             },
        //             {
        //                 field: 'text',
        //                 headerName: this.translate.instant('text'),
        //             },


        //         ]

        //     },
        //     form: {
        //         fields: [
                   
        //             {
        //                 type: FieldType.text,
        //                 name: 'name',
        //                 label: this.translate.instant('Name'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.file,
        //                 name: 'image',
        //                 label: this.translate.instant('Image'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 6,

        //             },
        //             {
        //                 type: FieldType.editor,
        //                 name: 'text',
        //                 label: this.translate.instant('Text'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,

        //             },
                    
        //             {
        //                 type: FieldType.divider,
        //                 cols: 12
        //             },
        //             // {
        //             //     type: FieldType.group,
        //             //     name: 'seo',
        //             //     label: this.translate.instant('SEO'),
        //             //     required: false,
        //             //     // validators: [ Validators.minLength(3)],
        //             //     disabled: false,
        //             //     readonly: false,
        //             //     multiline: false,
        //             //     cols: 12,
        //             //     children: [
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'pageTitle',
        //             //             label: this.translate.instant('Page Title'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 6,

        //             //         },
        //             //         {
        //             //             type: FieldType.chips,
        //             //             name: 'keyWords',
        //             //             label: this.translate.instant('Keywords'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 6,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'metaDescription',
        //             //             label: this.translate.instant('meta Description'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: true,
        //             //             cols: 12,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogTtile',
        //             //             label: this.translate.instant('Open Graph Title (og:title)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogImage',
        //             //             label: this.translate.instant('Open Graph Image URL (og:image)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogType',
        //             //             label: this.translate.instant('Open Graph Type (og:typt)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: false,
        //             //             cols: 4,

        //             //         },
        //             //         {
        //             //             type: FieldType.text,
        //             //             name: 'ogDescription',
        //             //             label: this.translate.instant('Open Graph Description (og:description)'),
        //             //             required: false,
        //             //             validators: [],
        //             //             disabled: false,
        //             //             readonly: false,
        //             //             multiline: true,
        //             //             cols: 12,

        //             //         },
        //             //     ]
        //             // },


        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
        //     permissions: {
        //         add: [UserType.admin],
        //         edit: [UserType.company],
        //         view: [UserType.admin]
        //     }
        // },
    ];
}
