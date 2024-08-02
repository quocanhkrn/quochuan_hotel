import { fahkwang400 } from "@/components/ui/fonts";

const Text = () => {
  return (
    <div className="container px-[10%] pt-28 text-center sm:pt-36 md:px-[5%] lg:text-left">
      <h1
        className={`${fahkwang400.className} mb-5 text-[2.5rem] text-yellow md:text-[3rem] lg:w-5/6 lg:text-[5rem] xl:w-2/3 2xl:w-1/2`}
      >
        Nơi khởi đầu của những hành trình tuyệt vời.
      </h1>
      <p className="leading-7 text-white  md:w-full md:text-xl xl:w-3/4">
        Tọa lạc ngay trung tâm thị trấn sôi động, Khách sạn Quốc Huấn mang đến
        cho du khách một không gian nghỉ dưỡng ấm cúng và tiện nghi. Nơi đây sở
        hữu những căn phòng nhỏ xinh, được bài trí tinh tế với tầm nhìn hướng ra
        khung cảnh thiên nhiên hùng vĩ của vùng cao nguyên.
      </p>
    </div>
  );
};

export default Text;
