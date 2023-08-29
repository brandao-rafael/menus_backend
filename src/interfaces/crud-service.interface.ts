interface CrudServiceInterface<Dto> {
    create(data: any): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, data: any): any;
    remove(id: string): any;
  }
  