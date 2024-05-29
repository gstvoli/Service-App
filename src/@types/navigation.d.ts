export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signin: undefined;
      login: undefined;
      register: undefined;
      signinstart: undefined;
      signinterms: undefined;
      signincard: undefined;
      signinfinish: undefined;
      main: { 
        userId: number
      };
      service: { 
        serviceId: number,
        userId: number
      };
      serviceslist: {
        serviceId: number
      },
      order: {
        userId : number,
        workerId: number,
        serviceId: number,
      };
      orderdetails : {
        orderId : number;
      }
      orderlist: undefined;
      orderfinish: undefined;
      profile: undefined;
    }
  }
}