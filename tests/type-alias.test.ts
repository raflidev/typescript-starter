import { Category, Product } from "../src/type-alias"

describe("Type Alias", function() {
  it("should support in typescript", function(){
    
    const category: Category = {
      id: "01",
      name: "Smartphone"
    }

    const product: Product = {
      id: "01",
      name: "Samsung S23",
      price: 9400000,
      category: category
    }

    console.info(category)
    console.info(product)
  })
})