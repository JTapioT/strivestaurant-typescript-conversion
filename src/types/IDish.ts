import DishComment from "./IDishComment";

interface Dish {
  id: number,
  name: string,
  image: string,
  category: string,
  label: string,
  price: string,
  description: string,
  comments: DishComment[]
}

export default Dish;