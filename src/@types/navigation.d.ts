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
        workerId: number,
        serviceId: number,
      };
      profile: undefined;
    }
  }
}