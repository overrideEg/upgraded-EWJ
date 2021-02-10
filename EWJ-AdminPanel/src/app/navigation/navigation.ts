import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'basicData',
        title    : 'Home Page',
        translate: 'homePage',
        type     : 'item',
        icon     : 'tab_unselected',
        url      : '/apps/dashboards/project'
       
    },  
    // {
    //     id       : 'Applications',
    //     title    : 'Applications',
    //     translate: 'Applications',
    //     type     : 'item',
    //     icon     : 'assessment',
    //     url      : '/apps/scrumboard/boards'
       
    // },
    {
        id       : 'basicData',
        title    : 'Basic Data',
        translate: 'basicData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
            // {
            //     id       : 'users',
            //     title    : 'Users',
            //     translate: 'users',
            //     type     : 'item',
            //     icon     : 'person_outline',
            //     url  : '/generic/User'
        
            // },
            {
                id       : 'Employee',
                title    : 'Employee',
                translate: 'Employee',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/Employee'
        
            },
            {
                id       : 'Location',
                title    : 'Location',
                translate: 'Location',
                type     : 'item',
                icon     : 'Location',
                url  : '/generic/Location'
        
            },
            // {
            //     id       : 'Notification',
            //     title    : 'Notification',
            //     translate: 'Notification',
            //     type     : 'item',
            //     icon     : 'Notification',
            //     url  : '/generic/Notification'
        
            // },
         

        ]
    },
    {
        id       : 'transactions',
        title    : 'transactions',
        translate: 'transactions',
        type     : 'group',
        icon     : 'tab_unselected',
        children:[
            {
                id       : 'specialRequest',
                title    : 'specialRequest',
                translate: 'specialRequest',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/specialRequest'
        
            },
            {
                id       : 'review',
                title    : 'review',
                translate: 'review',
                type     : 'item',
                icon     : 'review',
                url  : '/generic/review'
        
            },
            {
                id       : 'employeeInContactWith',
                title    : 'employeeInContactWith',
                translate: 'employeeInContactWith',
                type     : 'item',
                icon     : 'employeeInContactWith',
                url  : '/generic/employeeInContactWith'
        
            },
           
           
            
        ]
    },
    
    {
        id       : 'survey',
        title    : 'survey',
        translate: 'survey',
        type     : 'group',
        icon     : 'survey',
        children: [
            {
                id       : 'Answer',
                title    : 'Answer',
                translate: 'Answer',
                type     : 'item',
                icon     : 'Answer',
                url  : '/generic/Answer'
        
            },
            
        ]
    },
    {
        id       : 'Course',
        title    : 'Course',
        translate: 'Course',
        type     : 'group',
        icon     : 'Course',
        children: [
            {
                id       : 'Course',
                title    : 'Course',
                translate: 'Course',
                type     : 'item',
                icon     : 'Course',
                url  : '/generic/Course'
        
            },
            {
                id       : 'Exam',
                title    : 'Exam',
                translate: 'Exam',
                type     : 'item',
                icon     : 'Exam',
                url  : '/generic/Exam'
        
            },
            {
                id       : 'Lesson',
                title    : 'Lesson',
                translate: 'Lesson',
                type     : 'item',
                icon     : 'Lesson',
                url  : '/generic/Lesson'
        
            },
            {
                id       : 'CronExpression',
                title    : 'CronExpression',
                translate: 'CronExpression',
                type     : 'item',
                icon     : 'CronExpression',
                url  : '/generic/CronExpression'
        
            },
            {
                id       : 'Survey',
                title    : 'Survey',
                translate: 'Survey',
                type     : 'item',
                icon     : 'Survey',
                url  : '/generic/Survey'
        
            },
             
        
        ]
    },
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
    // {
    //     id       : 'Team',
    //     title    : 'Team',
    //     translate: 'Team',
    //     type     : 'item',
    //     icon     : 'Team',
    //     url  : '/generic/Team'

    // },
   
    // {
    //     id       : 'Website Configuration',
    //     title    : 'Website Configuration',
    //     translate: 'Website Configuration',
    //     type     : 'group',
    //     icon     : 'website',
    //     children: [
    //         {
    //             id       : 'Advertisements',
    //             title    : 'Advertisements',
    //             translate: 'Advertisements',
    //             type     : 'item',
    //             icon     : 'Advertise',
    //             url  : '/generic/Advertise'
        
    //         },
         
    //         {
    //             id       : 'OurService',
    //             title    : 'Services',
    //             translate: 'Services',
    //             type     : 'item',
    //             icon     : 'service',
    //             url  : '/generic/OurService'
        
    //         },
    //         {
    //             id       : 'Page',
    //             title    : 'Page',
    //             translate: 'Page',
    //             type     : 'item',
    //             icon     : 'page',
    //             url  : '/generic/Page'
        
    //         },
    //         {
    //             id       : 'Section',
    //             title    : 'Section',
    //             translate: 'Section',
    //             type     : 'item',
    //             icon     : 'service',
    //             url  : '/generic/Section'
        
    //         },
    //         // {
    //         //     id       : 'Comment',
    //         //     title    : 'Comment',
    //         //     translate: 'Comment',
    //         //     type     : 'item',
    //         //     icon     : 'comment',
    //         //     url  : '/generic/Comment'
        
    //         // },
    //         {
    //             id       : 'Openion',
    //             title    : 'Openion',
    //             translate: 'Openion',
    //             type     : 'item',
    //             icon     : 'Openion',
    //             url  : '/generic/Openion'
        
    //         },
    //     ]
      
    // },
    
   
];
