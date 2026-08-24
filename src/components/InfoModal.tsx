import React from 'react';
import { X, ExternalLink, Sparkles, Newspaper, Radio, Users } from 'lucide-react';

interface InfoModalProps {
  type: 'content-assets' | 'podcast' | 'article' | 'careers' | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose, onOpenContact }) => {
  if (!type) return null;

  const contentMap = {
    'content-assets': {
      icon: <Sparkles className="w-5 h-5 text-stone-900" />,
      title: '콘텐츠 및 자산 관리',
      subtitle: '디지털 브랜드 에셋 및 멀티채널 배포 시스템',
      description:
        'BlinkUp의 자산 관리 솔루션은 브랜드의 비주얼, 영상, 문서, 캠페인 에셋을 중앙 집중화하여 일관된 브랜드 경험을 유지하도록 지원합니다.',
      highlights: [
        '단일 진실 공급원(SSOT) 기반의 에셋 허브 구축',
        '다채널 실시간 배포 및 버전 관리',
        'AI 기반 자동 태깅 및 검색 최적화'
      ],
      actionText: '에셋 시스템 상담하기',
    },
    podcast: {
      icon: <Radio className="w-5 h-5 text-stone-900" />,
      title: 'BlinkUp & Frog 팟캐스트',
      subtitle: '비즈니스 디자인과 미래 기술의 인사이트',
      description:
        '글로벌 크리에이티브 리더들과 함께하는 혁신 대담 시리즈. 브랜드 진화와 디지털 트랜스포메이션의 최신 트렌드를 들려드립니다.',
      highlights: [
        'EP 42: 생성형 AI가 바꾸는 브랜드 커뮤니케이션의 문법',
        'EP 41: 데이터 기반 디자인과 고객 경험 혁신',
        'EP 40: 스타트업에서 유니콘으로의 스케일업 전략'
      ],
      actionText: '팟캐스트 청취 문의',
    },
    article: {
      icon: <Newspaper className="w-5 h-5 text-stone-900" />,
      title: '인사이트 & 기사',
      subtitle: '산업 동향 및 심층 아티클 리포트',
      description:
        'BlinkUp 리서치 팀이 분석한 시장의 변화와 고객 심리, 그리고 실전 비즈니스 전략 프레임워크를 정기적으로 발행합니다.',
      highlights: [
        '2026 브랜드 트렌드 리포트: 사람 중심의 초개인화',
        '민첩한 조직을 위한 AI One-Team 운영 매뉴얼',
        'ROI를 극대화하는 퍼널 최적화 5원칙'
      ],
      actionText: '리포트 구독 및 문의',
    },
    careers: {
      icon: <Users className="w-5 h-5 text-stone-900" />,
      title: '저희 팀에 합류하세요',
      subtitle: 'BlinkUp & Frog 커리어 채용',
      description:
        '우리는 기술과 디자인, 전략의 경계를 허물며 새로운 가치를 창출하는 혁신가들과 함께합니다. 배려심 넘치는 환경에서 당신의 잠재력을 펼쳐보세요.',
      highlights: [
        'Brand Strategist / 브랜드 전략 컨설턴트',
        'AI & Growth Product Designer',
        'Performance & Data Marketing Lead'
      ],
      actionText: '인재풀 등록 및 지원',
    }
  };

  const item = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200">{item.icon}</div>
          <div>
            <h3 className="text-xl font-black text-stone-900 tracking-tight">{item.title}</h3>
            <p className="text-xs text-stone-500">{item.subtitle}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {item.description}
        </p>

        <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
          <span className="text-xs font-bold text-stone-800 block mb-2 font-mono uppercase tracking-wider">주요 내용</span>
          <ul className="space-y-1.5 text-xs text-stone-600">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-stone-900 font-bold">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="flex-1 py-3 bg-stone-950 text-white text-sm font-bold rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{item.actionText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 bg-stone-100 text-stone-700 text-sm font-bold rounded-xl hover:bg-stone-200 transition-colors cursor-pointer border border-stone-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

