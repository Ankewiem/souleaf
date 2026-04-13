import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.3642 11.8799L4.29649 11.8799" stroke="#020202" strokeWidth="1.8909" strokeMiterlimit="10" />
    <path d="M14.6915 18.4932L21.3047 11.88L14.6915 5.26675" stroke="#020202" strokeWidth="1.8909" strokeMiterlimit="10" />
  </svg>
)

export default function CTA() {
  return (
    <section className="py-8">
      <div className="max-w-[1355px] mx-auto px-6">
        <div className="flex flex-col items-center gap-5">

          {/* Label */}
          <p className="text-[#020202] text-[15px] font-medium tracking-[-0.75px] uppercase text-center">
            BẮT ĐẦU NGAY HÔM NAY
          </p>

          {/* Logo row with dashed lines */}
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="flex-1 max-w-[465px] border-t border-dashed border-[#020202]" />
            <div className="flex items-center gap-2">
              <div className="w-[46px] h-[46px] rounded-full bg-[#9FDFB0] flex-shrink-0" />
              <h2 className="text-[#020202] font-medium text-[52px] md:text-[75px] leading-none tracking-[-3.75px]">
                SouLeaf
              </h2>
              <div className="w-[46px] h-[46px] rounded-full bg-[#9FDFB0] flex-shrink-0" />
            </div>
            <div className="flex-1 max-w-[465px] border-t border-dashed border-[#020202]" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/quiz" className="btn-mint flex items-center gap-2">
              Làm bài Đánh giá Trầm cảm
              <ArrowIcon />
            </Link>
            <button className="btn-outline">
              Khám phá
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
