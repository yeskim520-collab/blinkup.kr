import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Send } from 'lucide-react';
import { PageType } from '../types';

interface ContactPageProps {
  onNavigate?: (page: PageType, param?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [serviceType, setServiceType] = useState('01-discovery');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-10 pb-16 lg:py-20 animate-fade-in">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Desktop 2-column layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
          {/* Left Column: Header & Direct Channels */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="text-[13px] font-bold tracking-tight text-black uppercase">
                Get in Touch
              </span>
              <h1 className="text-[34px] sm:text-[42px] md:text-[48px] font-normal tracking-[-0.025em] text-black leading-[1.25] font-serif-display">
                대화를 시작하세요
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.75] text-black font-normal tracking-[-0.015em]">
                BlinkUp과 함께 브랜드의 가능성을 발견하고 실질적인 성공 결과를 만들어가세요.
              </p>
            </div>

            {/* Office & Direct Contact Details */}
            <div className="p-6 lg:p-8 border border-black space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-black block">
                Direct Channels
              </span>

              <div className="space-y-3 text-[14px] sm:text-[15px] text-black">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <span>contact@blinkup.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-black shrink-0" />
                  <span>상담 시간: 월 - 금 09:30 ~ 18:30 (KST)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>Seoul, Republic of Korea · Global Network with Frog</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="mt-10 lg:mt-0 lg:col-span-7 xl:col-span-7">
            {isSubmitted ? (
              <div className="p-8 sm:p-12 border border-black text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h2 className="text-[22px] sm:text-[24px] font-black text-black tracking-tight">
                  문의가 성공적으로 접수되었습니다
                </h2>
                <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-sm mx-auto">
                  작성해주신 내용을 바탕으로 BlinkUp 전담 파트너가 24시간 이내에 기재해주신 이메일로 연락드리겠습니다.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="py-3.5 px-6 border border-black text-black font-black text-xs hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    새로운 문의 작성하기
                  </button>
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate('home')}
                      className="py-3.5 px-6 bg-black text-white font-black text-xs hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      홈으로 돌아가기
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-6 sm:p-8 border border-black space-y-5">
                  <div>
                    <label className="block text-xs font-black text-black mb-1.5 uppercase">
                      성함 / 담당자명 <span className="text-black font-bold">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3.5 border border-black text-sm text-black focus:outline-none focus:ring-1 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1.5 uppercase">
                      이메일 주소 <span className="text-black font-bold">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@company.com"
                      className="w-full px-4 py-3.5 border border-black text-sm text-black focus:outline-none focus:ring-1 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1.5 uppercase">
                      회사명 / 브랜드명
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="주식회사 블링크업"
                      className="w-full px-4 py-3.5 border border-black text-sm text-black focus:outline-none focus:ring-1 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1.5 uppercase">
                      관심 분야 / 서비스 영역
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3.5 border border-black text-sm text-black focus:outline-none focus:ring-1 focus:ring-black bg-white cursor-pointer"
                    >
                      <option value="01-discovery">01. 발견 (시장 리서치 & 인사이트)</option>
                      <option value="02-branding">02. 드러냄 (브랜드 전략 & 아이덴티티)</option>
                      <option value="03-product">03. 제작 (AI One-Team 제품 & 디자인 시스템)</option>
                      <option value="04-growth">04. 연결 (마케팅 전략 & 실시간 액티베이션)</option>
                      <option value="05-partnership">05. 실현 (장기 파트너십 & 확장)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1.5 uppercase">
                      문의 내용 <span className="text-black font-bold">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="진행 중인 프로젝트나 고민 중인 영역에 대해 자유롭게 작성해주세요."
                      className="w-full px-4 py-3.5 border border-black text-sm text-black focus:outline-none focus:ring-1 focus:ring-black resize-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-black text-[15px] hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <span>문의 제출하기</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
