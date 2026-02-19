// components/HeroSection.tsx
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white rounded-xl p-6 md:p-12 shadow-md max-w-7xl mx-auto mt-10 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-yellow-200">
          Real-Time Market Data
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 transition-transform duration-300 hover:scale-105">
        Live Gold, Silver & IPO GMP Updates
      </h1>
      <p className="text-center text-gray-600 mb-8 transition-all duration-300 hover:text-gray-800">
        Enterprise-grade financial data platform for precious metals and IPO tracking
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Gold */}
        <div className="bg-white border rounded-xl p-4 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-yellow-300">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-gray-500 text-sm">Gold (10g)</span>
            <span className="text-yellow-500 text-lg">🥇</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1 transition-colors duration-300 hover:text-yellow-600">
            ₹68,470
          </div>
          <div className="text-green-500 text-sm font-medium transition-all duration-300 hover:text-green-700">
            +1.2% (₹812)
          </div>
        </div>

        {/* Silver */}
        <div className="bg-white border rounded-xl p-4 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-purple-300">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-gray-500 text-sm">Silver (1kg)</span>
            <span className="text-purple-500 text-lg">🥈</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1 transition-colors duration-300 hover:text-purple-600">
            ₹82,300
          </div>
          <div className="text-green-500 text-sm font-medium transition-all duration-300 hover:text-green-700">
            +0.9% (₹734)
          </div>
        </div>

        {/* Platinum */}
        <div className="bg-white border rounded-xl p-4 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-300">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-gray-500 text-sm">Platinum (10g)</span>
            <span className="text-blue-400 text-lg">💎</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1 transition-colors duration-300 hover:text-blue-500">
            ₹28,450
          </div>
          <div className="text-red-500 text-sm font-medium transition-all duration-300 hover:text-red-700">
            -0.5% (₹142)
          </div>
        </div>

        {/* IPO */}
        <div className="bg-yellow-50 border rounded-xl p-4 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-yellow-400">
          <span className="text-gray-800 text-sm mb-1 transition-colors duration-300 hover:text-yellow-700">
            Top IPO GMP Today
          </span>
          <div className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-yellow-800">
            Venus Pipes
          </div>
          <div className="text-gray-800 mb-1 transition-colors duration-300 hover:text-gray-900">
            GMP: ₹98
          </div>
          <div className="text-green-500 text-sm font-medium transition-all duration-300 hover:text-green-700">
            +30.1% Expected
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
        <Button className="bg-yellow-600 text-white hover:bg-yellow-700 hover:scale-105 transition-transform duration-300">
          Check Live Rates →
        </Button>
        <Button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 hover:scale-105 transition-transform duration-300">
          View IPO GMP
        </Button>
      </div>

      {/* Footer text */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-gray-500 text-sm gap-4 transition-colors duration-300 hover:text-gray-700">
        <span>● Live Updates</span>
        <span>Updated Every 5 Minutes</span>
        <span>Trusted by 50K+ Investors</span>
      </div>
    </section>
  );
}
