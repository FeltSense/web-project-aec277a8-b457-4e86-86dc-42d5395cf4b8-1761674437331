export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
  {/* Image Grid Background */}
  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-400"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-400"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-400"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-400"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
    <div className="bg-slate-400"></div>
    <div className="bg-slate-200"></div>
    <div className="bg-slate-300"></div>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-8">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm font-medium text-slate-700">Trusted Real Estate Partner</span>
      </div>

      <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Prime Properties Across America's Most Sought-After Markets
      </h1>

      <p className="text-xl text-slate-600 mb-12 leading-relaxed">
        Horizon Realty Group delivers exceptional residential and commercial real estate opportunities throughout the United States. Our experienced agents provide local market expertise backed by a proven portfolio of successful development projects.
      </p>

      {/* Key Value Props */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
          <div className="text-sm text-slate-600">Properties in Prime Locations</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
          <div className="text-sm text-slate-600">Local Market Experts</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
          <div className="text-sm text-slate-600">Completed Developments</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          Browse Properties
        </button>
        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-colors">
          Connect with an Agent
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 mb-4">Serving clients in major markets nationwide</p>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
          <span>New York</span>
          <span>Los Angeles</span>
          <span>Miami</span>
          <span>Chicago</span>
          <span>Austin</span>
          <span>Seattle</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}