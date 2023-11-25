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
        serviceId: number
      };
      servicesList: undefined,
      order: {
        userId : number,
        workerId: number,
        serviceId: number,
      };
      orderfinish: undefined;
      profile: undefined;
    }
  }
}