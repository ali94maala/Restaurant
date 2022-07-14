export class Order {

  id: number ;
  name: string;
  description: string;
  data_create: Date;
  data_update: Date;
  image: string;
  price: number;

  constructor(id: number, name: string, description: string, data_create: Date, data_update: Date, image: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.data_create = data_create;
    this.data_update = data_update;
    this.image = image;
    this.price = price;
  }



}
