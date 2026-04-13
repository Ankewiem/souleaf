import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const DiagonalArrowIcon = () => (
  <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M26.3831 10.6683L13.2361 22.0299" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10" />
    <path d="M27.1524 19.3556V10.0032L16.3302 10.0032" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10" />
  </svg>
)

const testimonials = [
  {
    name: 'Mai Anh, 18',
    quote: '"SouLeaf \u0111\u00e3 gi\u00fap t\u00f4i nh\u1eadn ra nh\u1eefng d\u1ea5u hi\u1ec7u m\u00e0 b\u1ea5y l\u00e2u nay t\u00f4i v\u1eabn ph\u1eef l\u1edd. Nh\u1eefng ph\u00e2n t\u00edch th\u1ef1c s\u1ef1 m\u1edf mang t\u1ea7m m\u1eaft v\u00e0 khuy\u1ebfn kh\u00edch t\u00f4i t\u00ecm ki\u1ebfm s\u1ef1 tr\u1ee3 gi\u00fap chuy\u00ean nghi\u1ec7p. R\u1ea5t \u0111\u00e1ng \u0111\u1ec3 th\u1eed!"',
    bg: image1,
  },
  {
    name: 'Hoàng Nam, 27',
    quote: '"Quy tr\u00ecnh l\u00e0m b\u00e0i r\u1ea5t \u0111\u01a1n gi\u1ea3n v\u00e0 mang l\u1ea1i c\u1ea3m gi\u00e1c \u0111\u01b0\u1ee3c th\u1ea5u hi\u1ec3u. T\u00f4i \u0111\u00e1nh gi\u00e1 cao t\u00ednh b\u1ea3o m\u1eadt c\u0169ng nh\u01b0 s\u1ef1 r\u00f5 r\u00e0ng trong c\u00e1c k\u1ebft qu\u1ea3 ph\u1ea3n h\u1ed3i."',
    bg: image2,
  },
  {
    name: 'Thu Hà, 25',
    quote: '"Website gi\u00fap t\u00f4i d\u1ec5 d\u00e0ng hi\u1ec3u \u0111\u01b0\u1ee3c nh\u1eefng v\u1ea5n \u0111\u1ec1 t\u00e2m l\u00fd m\u00ecnh \u0111ang tr\u1ea3i qua. Ph\u1ea3n h\u1ed3i c\u00e1 nh\u00e2n h\u00f3a v\u00f4 c\u00f9ng h\u1eefu \u00edch, v\u00e0 c\u00e1c t\u00e0i nguy\u00ean \u0111\u01b0\u1ee3c g\u1ee3i \u00fd \u0111\u00e3 cho t\u00f4i m\u1ed9t h\u01b0\u1edbng \u0111i r\u00f5 r\u00e0ng."',
    bg: image3,
  },
  {
    name: 'Minh Tu\u1ea5n, 32',
    quote: '"L\u00e0 m\u1ed9t ng\u01b0\u1eddi kh\u00e1 ho\u00e0i nghi v\u1ec1 c\u00e1c c\u00f4ng c\u1ee5 tr\u1ef1c tuy\u1ebfn, t\u00f4i th\u1ef1c s\u1ef1 b\u1ea5t ng\u1edd tr\u01b0\u1edbc \u0111\u1ed9 ch\u00ednh x\u00e1c v\u00e0 s\u00e2u s\u1eafc c\u1ee7a b\u00e0i ph\u00e2n t\u00edch. N\u00f3 gi\u1ed1ng nh\u01b0 m\u1ed9t c\u00fa h\u00edch nh\u1eb9 nh\u00e0ng gi\u00fap t\u00f4i \u0111i \u0111\u00fang h\u01b0\u1edbng."',
    bg: image4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-4">
      <div className="max-w-[1355px] mx-auto px-6">
        <div className="flex items-stretch gap-6 overflow-x-auto pb-2 md:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[280px] md:w-[320px] rounded-[30px] overflow-hidden"
              style={{ minHeight: '433px' }}
            >
              {/* Background image */}
              <img
                src={t.bg}
                alt={`Testimonial from ${t.name}`}
                className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
              />

              {/* Decorative dots top-right */}
              <div className="absolute top-[45px] right-[45px] w-5 h-5 rounded-full bg-[#FCFCFC]" />
              <div className="absolute top-[73px] right-[45px] w-5 h-5 rounded-full bg-[#FCFCFC]" />
              <div className="absolute top-[45px] right-[73px] w-5 h-5 rounded-full bg-[#FCFCFC]" />

              {/* Quote card at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="relative rounded-[30px] p-4"
                  style={{ background: 'rgba(2, 2, 2, 0.15)', backdropFilter: 'blur(17.5px)' }}
                >
                  <div className="absolute top-2 right-3">
                    <DiagonalArrowIcon />
                  </div>
                  <p className="text-[#FCFCFC] text-[15px] font-medium leading-normal tracking-[-0.75px] mb-1">
                    {t.name}
                  </p>
                  <p className="text-[#FCFCFC] text-[13px] md:text-[15px] font-light leading-normal tracking-[-0.75px] pr-8">
                    {t.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
