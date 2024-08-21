import { fahkwang500 } from "@/components/ui/fonts";

const Title = (): JSX.Element => {
  return (
    <div className="container">
      <h1
        className={`${fahkwang500.className} text-center text-[2rem] leading-loose text-yellow`}
      >
        CÁC HẠNG PHÒNG
      </h1>
      <p className="mx-auto text-center leading-5 lg:w-1/2 xl:w-3/4">
        Khách sạn chúng tôi tự hào mang đến sự đa dạng với một loạt các phòng,
        từ tiện nghi cho đến sang trọng, với mức giá khác nhau. Dù là du khách
        nào, chúng tôi luôn đáp ứng và đồng hành cùng khách hàng để mang đến
        trải nghiệm lưu trú tốt nhất.
      </p>
    </div>
  );
};

export default Title;
