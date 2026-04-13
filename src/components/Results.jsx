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
        <div className="bg-white rounded-[40px] px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 md:justify-center overflow-hidden relative">
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
              <div className="flex flex-col gap-2">
                <p className="text-[#247D3C] font-semibold text-[16px] md:text-[18px]">
                  {result.cgpa >= 7.5 ? '[Trang thái Tót - Ôn dinh]' :
                   result.cgpa >= 6.0 ? '[Trang thái Trung bình - Cân luu ý]' :
                   '[Trang thái Cánh báo - Do áp luc/stress]'}
                </p>
                <p className="text-[#020202] font-light text-[15px] md:text-[17px] max-w-[380px] leading-snug">
                  {result.cgpa >= 7.5 ? 
                   `Vói phong dô hiên tai, ban ang huông tói mûc tiêu ${result.cgpa}. Moi thuç dang rât thuân lý, cû duÛ trình nhîp dô nay nhe!` :
                   result.cgpa >= 6.0 ? 
                   `Dû báo diêm sô cua ban dang o mûc ${result.cgpa}. Kêt qua nay khá ôn nhÛng, ngu bôt chút áp lÛc và tâp trung hÕn, mình tin con sô nay sê con bût phá hÕn nÛa dây.` :
                   `ChÛ sô tâm trang dang keo kêt qua dû kiên xuông con ${result.cgpa}. DÛng quá lo lâng vê con sô, ngu chÛng mình xÛ lý dûc áp lÛc lÛc nay, diêm sô sê tÛ khác quay trô lai ngÛng cao thôi.`}
                </p>
              </div>
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
                dau hiêu tram cam
              </h2>
              <p className="text-gray-800 font-medium text-[15px] md:text-[18px] leading-snug">
                {result.depression_risk >= 0.5
                  ? 'Mình nhin thây ban ang phai doi mat voi nhung cam xúc khá nang nê. Hãy nhó râng viêc cam thây không ôn cung là môt diêu binh thuông, và ban không nhât thiêt phai tu minh vuot qua hêt. Mình luôn o dây lang nghe ban. Hãy thû dành 5 phút hit thô sâu nhé, moi chuyen tôp dêp rôi sê dên vói ban mà thôi. Ngu ban muôn tâm su thì hãy viêt ra trên này nhé. Mong râng diêu này sê giúp ban cam thây tô hõn.'
                  : 'Mình rât vui khi thây các chî sô tâm trang cua ban ang o ngÛng an toàn. Hãy tiêp tûc dành thôi gian cham soc bân thân và duy trì nhung thu quen tích câp này nhé!'}
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
                {result.suicide_risk >= 0.5
                  ? 'Ban oi, mình thûc suy lo khi thây ban ang có nhung suy nghî dau lòng này. Ban không cô don dâu, luôn có nhung nguôn sãn sãng lang nghe và giúp dô ban ngay lúc này. Hãy thû trò chuyên vói môt nguôn ban tin tuông, hoâc liên hê vói các chuyên gia tâm lý nhé. Ban là môt su tôn tai quy giá, dúng rôi bôi chính minh nhé!'
                  : 'Cám ôn ban dã chia sê thât lòng vói mình. Giû cho tâm trí an toàn là uu tiên sô môt, mình sê luôn dông hành dê cùng ban duy trì trang thái tích câp này.'}
              </p>
              {result.suicide_risk >= 0.5 && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-red-800 font-bold text-lg mb-3">ð DUÔNG DÂY NÓNG HÔ TRÔ TÂM LÝ KÍP THÔI:</p>
                  <ul className="text-red-700 font-medium text-sm space-y-1">
                    <li>- Duông dây nóng Ngày Mai: 096 306 1414</li>
                    <li>- Viên Sûc khûe Tâm thân QG: 024 3576 5344</li>
                    <li>- Cáp cuu Trâm cam (TP.HCM): 1900 1267 hoâc 115</li>
                    <li>- Hello Doctor: 1900 1246</li>
                  </ul>
                </div>
              )}
            </div>
            <RiskCircle label="tý lê rûi ro" value={suicidePct} />
          </div>
        </div>

        {/* ── Card 4: Group Classification ──────────────────────────── */}
        <div className="bg-white rounded-[40px] px-10 py-10 md:px-16 md:py-14 flex flex-col md:flex-row gap-10 overflow-visible relative">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-[#247D3C] font-semibold text-[36px] md:text-[48px] tracking-tight">
              Phân loại nhóm
            </h2>
            <div className="border-t border-[rgba(0,0,0,0.15)]" />

            <div className="flex flex-col gap-4 pr-48">
              <p className="text-[#020202] font-semibold text-[20px] md:text-[26px]">
                {result.cluster_name}
              </p>
              
              <div className="flex flex-col gap-3">
                <p className="text-[#247D3C] font-semibold text-[16px] md:text-[18px]">
                  Thông diêp:
                </p>
                <p className="text-[#020202] font-medium text-[15px] md:text-[17px] leading-snug">
                  {result.cluster_name === 'Chiên binh kiêt suc' ? 
                   'Ban là môt nguôn câu toàn và có thành tích xuât sác, nhung ban ang tra giá bâng sûc khûe tinh thân. Dúng dê thành công di kèm vói su kiêt suc nhé.' :
                   result.cluster_name === 'Cân binh lý tuông' ? 
                   'Ban dã tìm duoc "diêm ngôt" giûa viêc hoc và cuôc sông. Dây là nhóm có sûc khûe tâm thân ôn dinh nhât trong công dông.' :
                   result.cluster_name === 'Gánh nang buâu vây' ? 
                   'AI nhin thây ban ang phai doi mat vói quá nhiêu áp lïc tû nhiêu phía cùng lúc. Ban không cô don, có 20% sinh viên trong hê thông cung ang o trang thái giông ban.' :
                   'Su chán nãn kéo dài có thê là tín hiêu cho thây ban ang di chêh khôi dâm mê cua mình.'}
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <p className="text-[#247D3C] font-semibold text-[16px] md:text-[18px]">
                  Lôi khuyên:
                </p>
                <p className="text-[#020202] font-medium text-[15px] md:text-[17px] leading-snug">
                  {result.cluster_name === 'Chiên binh kiêt suc' ? 
                   'Hoc cách nói "Không" vói nhung viêc chua cân thiêt không phai là bôi cuôc, mà là cách dê ban tâp trung cho nhung diêu quan trong nhât. Dêm nay, hãy uu tiên cho môt giâc ngu trôn vên thay vì cô thêm vài giô. Ban xûng dâng dûc dâng nghi ngoi.' :
                   result.cluster_name === 'Cân binh lý tuông' ? 
                   'Duy trì dûc su cân binh này là môt ky nang tuyêt vôi. Dúng quên râng phong dô ôn dinh quan trong hôn su bût phá nhât thiôi. Ngu ban dã làm chu dûc duoc thôi gian, hãy thû mô lòng chia sê kinh nghiêm hoâc truyên nang luông tích câp này cho ban bè xung quanh nhé. Su kêt nôi sê giúp niêm vui hoc tap cua ban nhân dôi.' :
                   result.cluster_name === 'Gánh nang buâu vây' ? 
                   'Nhung gi ban ang trôi qua thûc sây rât nang nê. Dúng cô gông gánh môt minh ngu moi thuç vuôt qua khà nang chûu dung. Tìm kiêm su giúp dô là môt hành dông dûm cam, không phai yêu dâu. Chúng mình luôn o dây dê kêt nôi ban vói nhung nguôn lïc hõ trô tôt nhât.' :
                   'Ngu viêc hoc chi còn là áp lïc mà không có niêm vui, hãy dúng lai môt chút dê lâng nghe bân thân. Có thê ban chua tìm dúng phuong pháp hoâc môi truyên phù hûp. Dúng êp minh di tiêp môt con dôi không thuôc vê ban, hãy thû kham phá nhung co hôi mõi dê tìm lai su hùng khôi.'}
                </p>
              </div>
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
