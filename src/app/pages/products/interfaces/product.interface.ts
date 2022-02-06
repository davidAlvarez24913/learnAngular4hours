// un interface declara una serie de metodos y propiedades que deben ser implementadas por una o mas clases
// Las interfaces vienen a suplir la imposibilidad de herencia multiple

export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;

}