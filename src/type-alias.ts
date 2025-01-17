export type Category = {
  id: string,
  name: string
}

export type Product = {
  id: string,
  name: string,
  price: number,
  category: Category
}