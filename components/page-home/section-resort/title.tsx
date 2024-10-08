import { fahkwang500 } from "@/components/ui/fonts";

const Title = (): JSX.Element => {
  return (
    <div className="container text-white">
      <h1
        className={`${fahkwang500.className} text-center text-[2rem] text-yellow`}
      >
        K62 RESORT
      </h1>
      <h1
        className={`${fahkwang500.className} text-center text-[1rem] leading-loose`}
      >
        SẮP RA MẮT
      </h1>
      <p className="mx-auto text-center leading-5 lg:w-1/2 xl:w-3/4">
        Khách sạn chúng tôi cung cấp dịch vụ tổ chức sự kiện chuyên nghiệp với
        không gian sang trọng và cơ sở vật chất hiện đại. Đội ngũ nhân viên tận
        tâm cam kết mang đến trải nghiệm hoàn hảo cho mọi hội nghị, tiệc cưới
        hay buổi họp mặt.
      </p>
    </div>
  );
};

export default Title;
