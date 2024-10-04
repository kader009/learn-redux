import { useGetFoodQuery } from '../redux/api/baseApi';
import { Foods } from '../types/foodTypes';

const FoodData = () => {
  const { data: foodData } = useGetFoodQuery([]);
  console.log(foodData?.foods);

  return (
    <div>
      {foodData?.foods?.map((food: Foods) => (
        <p key={food._id}>{food.foodName}</p>
      ))}
    </div>
  );
};

export default FoodData;
