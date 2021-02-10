/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
// const uri = 'http://server.overrideeg.net:3010/v1';
// const uri = 'https://server.momeru.com/v1';
// const uri = 'http://192.168.43.188:3010/v1';
const uri = 'http://server.overrideeg.net:3019/v1';
// const uri = 'http://192.168.1.17:3010/v1';
export const API_URLS = {
  auth: {
    auth: uri + '/auth/login',
    changePassword: uri + '/Auth/changePassword',
    resetPassword: uri + '/Auth/resetPassword',
    register: uri + '/auth/register',
  },
  File: {
    post: 'https://file.remabackend.com/File/upload',
    postWeb: uri + '/File/Upload/Web',
    UploadMultiple: uri + '/File/UploadMultiple',
    delete: uri + '/File',
  },

  Solution: {
    post: uri + '/Solution',
    get: uri + '/Solution/all',
    getOne: uri + '/Solution/{entityId}',
    put: uri + '/Solution/{entityId}',
    delete: uri + '/Solution/{entityId}',
  },
  Assessment: {
    post: uri + '/Assessment',
    get: uri + '/Assessment/all',
    getOne: uri + '/Assessment/{entityId}',
    put: uri + '/Assessment/{entityId}',
    delete: uri + '/Assessment/{entityId}',
  },

  Category: {
    post: uri + '/Category',
    get: uri + '/Category/all',
    getOne: uri + '/Category/{entityId}',
    put: uri + '/Category/{entityId}',
    delete: uri + '/Category/{entityId}',
  },

  ContactUs: {
    post: uri + '/ContactUs',
    get: uri + '/ContactUs/all',
    getOne: uri + '/ContactUs/{entityId}',
    put: uri + '/ContactUs/{entityId}',
    delete: uri + '/ContactUs/{entityId}',
  },
  Product: {
    post: uri + '/Product',
    get: uri + '/Product/all',
    getOne: uri + '/Product/{entityId}',
    put: uri + '/Product/{entityId}',
    delete: uri + '/Product/{entityId}',
  },
  Resource: {
    post: uri + '/Resource',
    get: uri + '/Resource/all',
    getOne: uri + '/Resource/{entityId}',
    put: uri + '/Resource/{entityId}',
    delete: uri + '/Resource/{entityId}',
  },
  //   ServiceRequest: {
  //       post: uri + "/ServiceRequest/add",
  //   },

  //   website: {
  //       FirstSection: uri + "/FirstSection/website",
  //       SecondSection: uri + "/SecondSection/website",
  //       ProjectCategory: uri + "/ProjectCategory/website",
  //       AboutUs: uri + "/AboutUs/website",
  //       OurValue: uri + "/OurValue/website",
  //       Principle: uri + "/Principle/website",
  //       DealCategory: uri + "/DealCategory/website",
  //       ManagerTalk: uri + "/ManagerTalk/website",
  //       Vision: uri + "/Vision/website",
  //       Mission: uri + "/Mission/website",
  //       Partner: uri + "/Partner/website",
  //   },
  //   Report: {
  //       get: uri + "/Report/web/all",
  //   },
  //   ApplyJob: {
  //       post: uri + "/ApplyJob/web",
  //   },
};
