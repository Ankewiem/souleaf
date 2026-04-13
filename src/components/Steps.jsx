import React from 'react';

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3642 11.8799L-0.703453 11.8799" stroke="#020202" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M9.69148 18.4932L16.3047 11.88L9.69148 5.26675" stroke="#020202" strokeWidth="1.8909" strokeMiterlimit="10" />
  </svg>
)

const steps = [
  {
    text: 'Trả lời Bảng câu hỏi tương tác của chúng tôi một cách cẩn thận.',
  },
  {
    text: 'Phân tích các câu trả lời để nhận diện các xu hướng tâm lý và những vấn đề sức khỏe tinh thần tiềm ẩn.',
  },
  {
    text: 'Nhận Báo cáo chi tiết với những thông tin phân tích mang tính thực tiễn và các đề xuất được cá nhân hóa.',
  },
]

export default function Steps() {
  return (
    <section className="py-8">
      <div className="max-w-[1355px] mx-auto px-6">
        <div className="flex items-center justify-center">
          {/* Left dashed line */}
          <div className="hidden md:block flex-1 max-w-[157px] border-t border-dashed border-[#020202]" />

          {/* Steps Container - Perfect horizontal alignment */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Box */}
                <div className="flex w-[256px] min-h-[126px] px-10 py-7 justify-center items-center rounded-[30px] border-2 border-dashed border-[#020202] bg-[#F5F5F5]">
                  <p className="text-center text-[#020202] text-[15px] font-medium leading-5 tracking-[-0.75px]">
                    {step.text}
                  </p>
                </div>

                {/* Arrow and Connector between steps */}
                {index < steps.length - 1 && (
                  <div className="flex items-center gap-2">
                    {/* Dashed line */}
                    <div className="w-[80px] border-t border-dashed border-[#020202]" />
                    {/* Arrow */}
                    <div className="flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3642 11.8799L-0.703453 11.8799" stroke="#020202" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M9.69148 18.4932L16.3047 11.88L9.69148 5.26675" stroke="#020202" strokeWidth="1.8909" strokeMiterlimit="10" />
                      </svg>
                    </div>
                    {/* Dashed line */}
                    <div className="w-[80px] border-t border-dashed border-[#020202]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Steps */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Mobile step card */}
                <div className="flex w-full max-w-[300px] min-h-[100px] px-8 py-6 justify-center items-center rounded-[30px] border-2 border-dashed border-[#020202] bg-[#F5F5F5]">
                  <p className="text-center text-[#020202] text-[15px] font-medium leading-5 tracking-[-0.75px]">
                    {step.text}
                  </p>
                </div>

                {/* Mobile arrow down */}
                {index < steps.length - 1 && (
                  <div className="text-[#020202]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4L12 20" stroke="#020202" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M6 14L12 20L18 14" stroke="#020202" strokeWidth="1.8909" strokeMiterlimit="10" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right dashed line */}
          <div className="hidden md:block flex-1 max-w-[167px] border-t border-dashed border-[#020202]" />
        </div>
      </div>
    </section>
  )
}
