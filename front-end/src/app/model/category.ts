export class Category {

  id: number;
  name: string;
  data_create: Date;
  data_update:Date;
  logo:string;


  constructor(id: number, name: string, data_create: Date, data_update: Date, logo: string) {
    this.id = id;
    this.name = name;
    this.data_create = data_create;
    this.data_update = data_update;
    this.logo = logo;
  }
}
