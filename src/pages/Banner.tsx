import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <div className="text-blue-500">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen transition-all duration-200 ease-in"
      >
        <SwiperSlide className="flex items-center justify-center bg-red-500 text-white text-2xl h-full">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-2xl h-full">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-green-500 text-white text-2xl h-full">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl h-full">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-purple-500 text-white text-2xl h-full">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-pink-500 text-white text-2xl h-full">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-teal-500 text-white text-2xl h-full">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-indigo-500 text-white text-2xl h-full">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-500 text-white text-2xl h-full">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
