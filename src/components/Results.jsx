import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import mascotImg from '../assets/mascot.png';
import winkImg from '../assets/wink.png';
import buonImg from '../assets/buon.png';
import khocImg from '../assets/khoc.png';

// ─── helpers ──────────────────────────────────────────────────────────────────

/** burnout_index comes back as 0-1 from the model */
const pct = (v) => (v * 100).toFixed(1);
/** burnout displayed as x.x (already on 0-100 scale) */
const burnoutDisplay = (v) => v.toFixed(1);

// ─── sub-components ───────────────────────────────────────────────────────────

function ScoreCircle({ value, max, large = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full bg-green-100 flex-shrink-0
        ${large ? 'w-[200px] h-[200px] md:w-[240px] md:h-[240px]' : 'w-[160px] h-[160px] md:w-[200px] md:h-[200px]'}`}
    >
      <span className={`font-extrabold text-green-800 leading-none ${large ? 'text-[56px] md:text-[72px]' : 'text-[48px] md:text-[64px]'}`}>
        {value}
      </span>
      <span className="text-green-600 font-semibold text-xl">/ {max}</span>
    </div>
  );
}

function RiskCircle({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-full border-[4px] border-[#247D3C] bg-[#EBFBEA] w-[200px] h-[200px] md:w-[240px] md:h-[240px] flex-shrink-0">
      <span className="text-[#247D3C] font-extrabold text-[13px] uppercase tracking-wide mb-1">{label}</span>
      <span className="text-[#247D3C] font-extrabold text-[52px] md:text-[64px] leading-none">{value}%</span>
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Results() {
  const { state } = useLocation();
  const result = state?.predictionResult;
  
  // Define risk threshold logic
  const isHighRisk = result?.depression_risk >= 0.5;
  
  // Group advice mapping object
  const groupAdviceMap = {
    'Chiến binh kiệt sức': 'Hệ thống ghi nhận cường độ làm việc và áp lực ép của bạn. Bạn đang vắt kiệt bản thân. Hãy ưu tiên ngủ ngay!',
    'Cân bằng lý tưởng': 'Bạn tìm thấy điểm ngọt giữa việc học và sống. Hãy duy trì thói quen hiện tại.',
    'Gánh nặng bủa vây': 'Áp lực học tập và tài chính của bạn đang rất lớn. Dù cố gắng giữ nếp sống, nhưng bạn cần người san sẻ. Hãy kết nối với các quỹ hỗ trợ sinh viên ngay.',
    'Mất định hướng': 'Áp lực của bạn không cao, nhưng bạn lại thiếu ngủ và chán nản. Hãy bước ra ngoài, tham gia ngoại khóa để tìm lại động lực sống.'
  };

  // If navigated directly without data
  if (!result) {
    return (
      <div className="min-h-screen bg-[#EBFBEA] flex flex-col items-center justify-center gap-6 pt-[75px] px-4">
        <p className="text-[#247D3C] text-xl font-medium text-center">
          Bạn chưa có kết quả đánh giá. Hãy hoàn thành bảng câu hỏi trước nhé!
        </p>
        <Link
          to="/quiz"
          className="bg-[#247D3C] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Làm khảo sát ngay
        </Link>
      </div>
    );
  }

  const burnoutValue = burnoutDisplay(result.burnout_index);
  const cgpaValue = parseFloat(result.cgpa).toFixed(1);
  const depressionPct = pct(result.depression_risk);
  const suicidePct = pct(result.suicide_risk);
  const hasDepression = result.depression_risk >= 0.2;
  const hasSuicideRisk = result.suicide_risk >= 0.2;

  return (
    <div className="min-h-screen bg-[#EBFBEA] pt-[75px]">
      {/* ── Page Header ───────────────────────────────────────────────── */}
      <div className="max-w-[810px] mx-auto px-4 pt-12 pb-10 text-center flex flex-col gap-5">
        <h1 className="text-[36px] md:text-[48px] font-medium tracking-[-2.4px] text-[#020202]">
          Kết quả đánh giá trầm cảm
        </h1>
        <p className="text-[16px] md:text-[20px] font-light text-[#020202] leading-snug">
          Cảm ơn bạn đã trung thực chia sẻ.
          <br />
          Dưới đây là những đánh giá để giúp bạn chăm sóc tinh thần tốt hơn.
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 pb-16 flex flex-col gap-6">

        {/* ── Card 1: Burnout Index ─────────────────────────────────── */}
        <div className="bg-white rounded-[40px] px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between overflow-hidden relative">
          <div className="flex flex-col gap-6 z-10">
            <h2 className="text-green-800 font-extrabold text-[28px] md:text-[36px] tracking-wide uppercase">
              Chỉ số cạn kiệt
            </h2>
            <p className="text-[#020202] font-medium text-[18px] md:text-[22px]">
              Mức độ cạn kiệt hiện tại
            </p>
            <ScoreCircle value={burnoutValue} max="100" large />
          </div>

          <img
            src={isHighRisk ? buonImg : winkImg}
            alt="mascot"
            className="w-[200px] md:w-[260px] object-contain flex-shrink-0 md:absolute md:right-14 md:top-1/2 md:-translate-y-1/2"
          />
        </div>

        {/* ── Card 2: CGPA ──────────────────────────────────────────── */}
        <div className="bg-white rounded-[40px] px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden relative">
          <img
            src={isHighRisk ? khocImg : mascotImg}
            alt="mascot"
            className="w-[180px] md:w-[220px] object-contain flex-shrink-0"
          />

          <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#247D3C] font-bold text-[22px] md:text-[28px]">
                Predicted Academic Performance (CGPA)
              </h2>
              <p className="text-[#020202] font-light text-[15px] md:text-[17px] max-w-[380px] leading-snug">
                Dựa trên mức độ áp lực và trầm cảm hiện tại của bạn, AI ước tính điểm trung bình (CGPA) mà bạn có thể đạt được.
              </p>
            </div>
            <ScoreCircle value={cgpaValue} max="10" large />
          </div>
        </div>

        {/* ── Card 3: Depression + Self-harm ────────────────────────── */}
        <div className="bg-white rounded-[40px] overflow-hidden">

          {/* Depression section */}
          <div className="px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between relative">
            <div className="flex flex-col gap-5 max-w-[580px] z-10">
              <h2 className="text-green-800 font-semibold text-[32px] md:text-[44px] leading-tight">
                Bạn{' '}
                <span className="text-green-900 font-bold">
                  {result.depression_risk >= 0.5 ? 'CÓ' : 'KHÔNG CÓ'}
                </span>{' '}
                dấu hiệu trầm cảm
              </h2>
              <p className="text-gray-800 font-medium text-[15px] md:text-[18px] leading-snug">
                {hasDepression
                  ? 'Mình nhận thấy bạn đang phải đối mặt với những cảm xúc khá nặng nề. Hãy nhớ rằng việc cảm thấy không ổn cũng là một điều bình thường, và bạn không nhất thiết phải tự mình vượt qua tất cả. Mình luôn ở đây lắng nghe bạn.\nHãy thử dành 5 phút hít thở sâu nhé, mọi chuyện tốt đẹp rồi sẽ đến với bạn mà thôi\nNếu bạn muốn tâm sự thì hãy viết ra trên này nhé. Mong rằng điều này sẽ giúp bạn cảm thấy tốt hơn'
                  : 'Bạn đang có trạng thái tinh thần ổn định. Hãy tiếp tục duy trì lối sống lành mạnh và không ngại chia sẻ khi cần nhé!'}
              </p>
            </div>
            <RiskCircle label="tỷ lệ rủi ro" value={depressionPct} />
          </div>

          {/* Divider */}
          <div className="mx-10 md:mx-16 border-t border-[rgba(0,0,0,0.1)]" />

          {/* Self-harm section */}
          <div className="px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between relative">
            <div className="flex flex-col gap-5 max-w-[580px] z-10">
              <h2 className="text-green-800 font-semibold text-[32px] md:text-[44px] leading-tight">
                Bạn{' '}
                <span className="text-green-900 font-bold">
                  {result.suicide_risk >= 0.5 ? 'CÓ' : 'KHÔNG CÓ'}
                </span>{' '}
                nguy cơ tự hại
              </h2>
              <p className="text-gray-800 font-medium text-[15px] md:text-[18px] leading-snug">
                {hasSuicideRisk
                  ? 'Cảm ơn bạn đã chia sẻ thật lòng với mình. Giữ cho tâm trí an toàn là ưu tiên số một, mình sẽ luôn đồng hành để cùng bạn duy trì trạng thái tích cực này'
                  : 'Bạn đang trong trạng thái an toàn. Hãy tiếp tục chăm sóc bản thân và liên hệ với chúng tôi nếu bạn cần hỗ trợ nhé!'}
              </p>
            </div>
            <RiskCircle label="tỷ lệ rủi ro" value={suicidePct} />
          </div>
        </div>

        {/* ── Card 4: Group Classification ──────────────────────────── */}
        <div className="bg-white rounded-[40px] px-10 py-10 md:px-16 md:py-14 flex flex-col md:flex-row gap-10 overflow-visible relative">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-[#247D3C] font-semibold text-[36px] md:text-[48px] tracking-tight">
              Phân loại nhóm
            </h2>
            <div className="border-t border-[rgba(0,0,0,0.15)]" />

            <div className="flex flex-col gap-3 pr-32">
              <p className="text-[#020202] font-semibold text-[20px] md:text-[26px]">
                {result.cluster_name}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[#020202] text-[15px] md:text-[18px] leading-snug">
                {Array.isArray(result.cluster_advice)
                  ? result.cluster_advice.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))
                  : result.cluster_advice
                      .split('\n')
                      .filter(Boolean)
                      .map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          </div>

          <img
            src={isHighRisk ? buonImg : winkImg}
            alt="mascot"
            className="w-[200px] md:w-[280px] object-contain self-end flex-shrink-0 md:absolute md:right-4 -top-12"
          />
        </div>

        {/* ── Retake CTA ────────────────────────────────────────────── */}
        <div className="flex justify-center pt-4">
          <Link
            to="/quiz"
            className="bg-[#247D3C] text-white px-10 py-3 rounded-full font-semibold text-[16px] hover:opacity-90 transition-opacity"
          >
            Làm lại khảo sát
          </Link>
        </div>
      </div>
    </div>
  );
}
