"use client";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WeChat QR modal */}
      {wechatOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-64 border border-gray-100 animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-bold text-[#0F2744] text-sm">WeChat</div>
              <div className="text-xs text-gray-500">Add us on WeChat</div>
            </div>
            <button onClick={() => setWechatOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors"><X className="w-4 h-4" /></button>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-36">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-xs text-gray-500">WeChat ID:</div>
              <div className="font-bold text-[#0F2744] text-sm">lgt2202</div>
            </div>
          </div>
        </div>
      )}

      {/* WeChat */}
      <button onClick={() => setWechatOpen(!wechatOpen)} title="WeChat"
        className="w-12 h-12 rounded-full bg-[#07c160] hover:bg-[#06ad56] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.898-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 2.498c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm3.965 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" /></svg>
      </button>

      {/* WhatsApp */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-40" />
        <a href="https://wa.me/8613572821237?text=Hello%20INKO%20Custom%20Labels%2C%20I%27m%20interested%20in%20your%20label%20products.%20Could%20you%20please%20send%20me%20a%20quote%3F"
          target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
