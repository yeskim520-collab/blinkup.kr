'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service_type: 'enterprise', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({ name: '', email: '', company: '', service_type: 'enterprise', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input
        placeholder="이름"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="이메일"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="회사명 (선택)"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <select
        value={form.service_type}
        onChange={(e) => setForm({ ...form, service_type: e.target.value })}
      >
        <option value="enterprise">기업 AX 컨설팅</option>
        <option value="startup">AI 창업 파트너</option>
        <option value="etc">기타 문의</option>
      </select>
      <textarea
        placeholder="문의 내용"
        rows={5}
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? '전송 중...' : '문의 보내기 →'}
      </button>
      {status === 'success' && <p className="form-status success">문의가 접수되었습니다. 빠르게 연락드리겠습니다.</p>}
      {status === 'error' && <p className="form-status error">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>}
    </form>
  );
}
