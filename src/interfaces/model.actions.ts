interface ModelActions {
    create: (payload: any) => Promise<any>;
    findMany: () => Promise<any[]>;
    findUnique: (query: any) => Promise<any | null>;
    update: (data: any) => Promise<any>;
    delete: (query: any) => Promise<any>;
  }
  