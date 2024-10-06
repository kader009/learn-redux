import { useGetFoodQuery } from '../redux/api/baseApi';
import { Foods } from '../types/foodTypes';

const FoodData = () => {
  const { data: foodData, isLoading } = useGetFoodQuery([]);
  console.log(foodData?.foods);
  if (isLoading) {
    return <div className="text-center text-green-600">Loading..</div>;
  }

  return (
    <div className="flex justify-center items-center gap-6 flex-wrap text-center">
      {foodData?.foods?.map((food: Foods) => (
        <section key={food._id}>
          <p>{food.foodName}</p>
          <img
            className="rounded-xl w-36 h-20"
            src={food.foodImage}
            alt="food images"
          />
        </section>
      ))}
    </div>
  );
};

export default FoodData;
