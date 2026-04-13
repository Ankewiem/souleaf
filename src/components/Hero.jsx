import { Link } from 'react-router-dom';
import heroWomanImg from '../assets/hero-woman.png'; 
import heroMeditationImg from '../assets/hero-meditation.jpg';

const ArrowIcon = ({ color = '#020202', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.3642 11.8799L4.29652 11.8799" stroke={color} strokeWidth="1.8909" strokeMiterlimit="10" />
    <path d="M14.6915 18.4931L21.3047 11.8799L14.6915 5.26669" stroke={color} strokeWidth="1.8909" strokeMiterlimit="10" />
  </svg>
)

const DiagonalArrowIcon = ({ color = '#247D3C', size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8002 10.6683L11.4386 22.0299" stroke={color} strokeWidth="1.8909" strokeMiterlimit="10" />
    <path d="M23.465 19.3557V10.0032L14.1125 10.0032" stroke={color} strokeWidth="1.8909" strokeMiterlimit="10" />
  </svg>
)

const DiagonalArrowLarge = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.0002 17.8693L19.0642 36.8052" stroke="#020202" strokeWidth="3.1515" strokeMiterlimit="10" />
    <path d="M39.1085 32.3484V16.7609L23.5211 16.7609" stroke="#020202" strokeWidth="3.1515" strokeMiterlimit="10" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative pt-[75px] overflow-hidden">
      {/* Hero Card with background image */}
      <div
        className="relative mx-auto max-w-[1355px] rounded-[50px] overflow-hidden min-h-[555px]"
        style={{
          backgroundImage: `url(${heroWomanImg})`,
          backgroundSize: '80% auto',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-start justify-between px-8 md:px-16 py-12 md:py-16 gap-10">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col gap-0 max-w-[420px]">
            {/* Subtitle */}
            <p className="text-[#020202] text-[15px] font-light italic tracking-[-0.75px] mb-3">
              Nâng cao và Hỗ trợ Sức khỏe Tinh thần
            </p>

            {/* Main Heading */}
            <h1 className="uppercase font-medium tracking-[-2.4px] text-[40px] md:text-[48px] leading-tight text-[#020202] mb-1">
              BÀI KIỂM TRA
            </h1>
            <h1 className="uppercase font-medium tracking-[-3.2px] text-[54px] md:text-[64px] leading-tight text-[#247D3C] mb-6">
              TRẦM CẢM
            </h1>

            {/* Divider */}
            <div className="w-[337px] h-[2px] bg-[#D9D9D9] mb-6" />

            {/* Description */}
            <p className="text-[#020202] text-[15px] font-light leading-[24px] tracking-[-0.75px] max-w-[399px] mb-10">
              SouLeaf tận dụng công nghệ AI tiên tiến để cung cấp những thông tin phân tích được cá nhân hóa về sức khỏe tinh thần. Mục tiêu của chúng tôi là giúp mọi người nhận biết các dấu hiệu trầm cảm và chủ động thực hiện các bước để cải thiện đời sống tinh thần.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/quiz" className="btn-primary">
                Kiểm tra
                <ArrowIcon />
              </Link>
              <button className="btn-outline">
                Khám phá
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right floating widgets - visible on large screens */}
      <div className="hidden lg:flex flex-col gap-7 absolute right-[50px] xl:right-[100px] top-[134px] items-end z-10">
        {/* "Nhận Hỗ Trợ" circular widget */}
        <div className="flex items-center gap-2">
          <p className="w-[117px] text-[#020202] text-[15px] font-light leading-5 tracking-[-0.75px]">
            Ứng dụng AI giúp mọi người thấu hiểu sức khỏe tinh thần của bản thân tốt hơn.
          </p>
          <div className="relative w-[127px] h-[123px]">
            <svg width="116" height="116" viewBox="0 0 116 116" fill="none" className="absolute left-0 top-[7px]">
              <path d="M116 58C116 69.4713 112.598 80.685 106.225 90.2231C99.8521 99.7611 90.7938 107.195 80.1956 111.585C69.5975 115.975 57.9357 117.123 46.6848 114.886C35.4339 112.648 25.0993 107.124 16.9878 99.0122C8.87636 90.9007 3.3524 80.5661 1.11445 69.3152C-1.12349 58.0643 0.025104 46.4025 4.41499 35.8044C8.80487 25.2062 16.2389 16.1479 25.7769 9.77476C35.315 3.40164 46.5287 0 58 0" stroke="#020202" strokeWidth="2" />
            </svg>
            <div className="absolute left-[30px] top-[37px]">
              <DiagonalArrowLarge />
            </div>
            <div className="absolute left-[68px] top-0 text-[#020202] font-medium text-[20px] leading-5 tracking-[-1px] w-[59px]">
              Nhận<br />Hỗ Trợ
            </div>
          </div>
        </div>

        {/* App preview card */}
        <div className="relative w-[253px] h-[329px] rounded-[30px] overflow-hidden shadow-lg">
          {/* Background image */}
          <img 
            src={heroMeditationImg} 
            alt="Meditation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Decorative dots */}
          <div className="absolute bottom-[32px] left-[45px] w-5 h-5 rounded-full bg-[#FCFCFC] translate-x-[-50%]" />
          <div className="absolute bottom-[60px] left-[45px] w-5 h-5 rounded-full bg-[#FCFCFC] translate-x-[-50%]" />
          <div className="absolute bottom-[32px] left-[73px] w-5 h-5 rounded-full bg-[#FCFCFC] translate-x-[-50%]" />

          {/* Inner card */}
          <div
            className="absolute top-5 left-5 w-[213px] rounded-[30px] p-4"
            style={{ background: 'rgba(2,2,2,0.05)', backdropFilter: 'blur(17.5px)' }}
          >
            <div className="relative">
              <div className="absolute right-0 top-0">
                <DiagonalArrowIcon color="#247D3C" size={34} />
              </div>
              <p className="mt-7 text-[#247D3C] text-[15px] font-medium leading-5 tracking-[-0.75px] w-[162px]">
                Đồng hành cùng sức khỏe tinh thần của bạn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
