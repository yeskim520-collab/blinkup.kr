import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-900 text-white mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
              대화 요청이 접수되었습니다
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              작성해주신 내용을 바탕으로 BlinkUp 전담 파트너가 24시간 이내에 연락드리겠습니다.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
              >
                확인
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1 pr-6">
              <span className="text-[11px] font-bold text-stone-400 font-mono uppercase tracking-widest">
                BlinkUp Consultation
              </span>
              <h3 className="text-2xl font-black tracking-tight text-stone-900">
                대화를 시작하세요
              </h3>
              <p className="text-sm text-stone-600">
                귀사의 비즈니스 혁신과 가치 창출을 위한 맞춤 상담을 신청하세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  성함 / 담당자명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  이메일 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  회사명 / 브랜드명
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="주식회사 블링크업"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  문의 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="진행 중인 프로젝트나 고민 중인 영역에 대해 자유롭게 적어주세요."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent resize-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-stone-950 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <span>문의 제출하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

