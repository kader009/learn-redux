import { useGetFoodQuery } from '../redux/api/baseApi';

const FoodData = () => {
  const { data: foodData } = useGetFoodQuery([]);
  console.log(foodData?.foods);
  interface Foods {
    _id: string;
    description: string;
    foodName: string;
    foodOrigin: string;
    foodImage: string;
    foodCategory: string;
    price: number;
    quantity: number;
  }
  return (
    <div>{foodData?.foods?.map((food: Foods) => <p key={food._id}>{food.foodName}</p>)}</div>
  );
};

export default FoodData;
