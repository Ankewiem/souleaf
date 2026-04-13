const LeafBullet = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M23.7266 1.24031C22.6803 1.252 21.5903 1.54918 20.5878 2.09187C19.7907 2.52343 19.0539 3.12637 18.4453 3.87312C18.3692 3.79487 18.2842 3.72437 18.2128 3.6425C15.2371 0.225495 10.3716 0.943871 8.16594 3.72656C7.79656 4.03156 7.56056 4.49331 7.56056 5.00968C7.56056 5.92793 8.30431 6.67187 9.22263 6.67187C10.1408 6.67187 10.8867 5.92793 10.8867 5.00975C10.8867 4.38256 10.5381 3.83787 10.0253 3.55475C12.0128 2.11581 15.2068 1.96975 17.3319 4.41018C17.4707 4.56931 17.6151 4.72093 17.7656 4.86718C17.0606 6.11656 16.694 7.65343 16.8964 9.41593C16.1301 8.37281 14.9116 7.6655 13.4531 7.69718C12.6849 7.71406 11.8506 7.93512 10.9804 8.41993C7.20575 10.5223 8.65075 14.8893 1.39444 14.9003C4.34525 16.7113 7.34106 17.5059 9.95306 17.5156C9.04163 21.9737 12.0341 27.6552 19.1289 30.7656C15.6693 24.7486 20.2687 22.7326 21.9355 19.1366C25.7109 19.7341 28.5131 15.3921 30.3339 22.4804C32.0639 12.8535 24.9016 8.70612 20.4258 9.23431C19.5244 9.34075 18.7911 9.73225 18.242 10.3027C17.7641 8.39831 18.0061 6.82925 18.6522 5.59956C20.3591 6.84493 22.4906 7.448 24.2967 7.44143C25.4524 7.43706 26.4965 7.19743 27.2264 6.58206C27.9564 5.96643 28.2296 4.90143 27.8124 3.79487C27.2854 2.39718 26.0889 1.5675 24.7518 1.32412C24.4176 1.26325 24.0752 1.23618 23.7264 1.24012L23.7266 1.24031Z" fill="#276436"/>
  </svg>
)

const targetAudience = [
  'Những người đang trải qua các triệu chứng như mệt mỏi, buồn bã hoặc thiếu động lực.',
  'Những ai mong muốn thấu hiểu rõ hơn về sức khỏe tinh thần.',
  'Bất kỳ ai muốn có một bước khởi đầu dễ dàng.',
  'Người chăm sóc và người thân muốn hỗ trợ những ai đang gặp khó khăn về sức khỏe tinh thần.',
]

const whyFeatures = [
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/551e3b648ce4074809fb5d8326e7d9ad1f470635?width=250',
    title: 'Truy cập dễ dàng',
    desc: 'Làm bài kiểm tra mọi lúc, mọi nơi, trên mọi thiết bị.',
    size: 125,
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/688638ef9938eeab0cdd212c266394a91460e2da?width=240',
    title: 'Ưu tiên bảo mật',
    desc: 'Dữ liệu của bạn luôn được bảo mật tuyệt đối.',
    size: 120,
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/24a632c8d917af92d7ace815b217a39af0d2044f?width=300',
    title: 'Độ chính xác từ AI',
    desc: 'Các thuật toán tiên tiến đảm bảo việc phân tích được chính xác.',
    size: 150,
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/66fc5879ab39f414ee1a7c38fe82f9fc4097e521?width=300',
    title: 'Hỗ trợ không phán xét',
    desc: 'Thấu hiểu sức khỏe tinh thần một cách khách quan.',
    size: 150,
  },
]

export default function About() {
  return (
    <section id="about" className="py-8">
      <div className="max-w-[1357px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6">

          {/* Left: Who is it for */}
          <div className="flex w-full lg:w-[369px] flex-shrink-0 rounded-[30px] border border-[rgba(2,2,2,0.5)] p-8 md:p-11">
            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-[#020202] font-medium text-[38px] md:text-[42px] uppercase tracking-[-2.1px] leading-none">
                DÀNH CHO AI?
              </h2>
              <div className="flex flex-col gap-5">
                {targetAudience.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <LeafBullet />
                    <p className="text-[#020202] text-[15px] font-light tracking-[-0.75px] leading-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Why SouLeaf */}
          <div
            className="flex-1 rounded-[30px] p-6 md:p-[22px]"
            style={{ background: 'rgba(197, 255, 175, 0.42)', backdropFilter: 'blur(210px)' }}
          >
            <div className="flex flex-col gap-3 h-full">
              <h2 className="text-[#020202] font-medium text-[36px] md:text-[48px] uppercase tracking-[-2.4px] text-center leading-none py-2">
                TẠI SAO LÀ SOULEAF?
              </h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-2">
                {whyFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 w-[140px] md:w-[161px]">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      width={feature.size}
                      height={feature.size}
                      className="object-contain"
                    />
                    <div className="flex flex-col items-center gap-2 text-center">
                      <h3 className="text-[#020202] font-medium text-[18px] md:text-[20px] tracking-[-1px] leading-normal">
                        {feature.title}
                      </h3>
                      <p className="text-[#020202] font-light text-[14px] md:text-[15px] tracking-[-0.75px] leading-normal">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
