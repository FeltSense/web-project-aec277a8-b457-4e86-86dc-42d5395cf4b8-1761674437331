export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Comprehensive Real Estate Services
      </h2>
      <p className="text-lg text-slate-600">
        From property search to closing, we provide end-to-end solutions backed by local expertise and a proven track record across prime USA markets.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
      {/* Large Feature - Portfolio */}
      <div className="md:col-span-4 md:row-span-2 bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Extensive Property Portfolio
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Access thousands of premium properties across prime USA locations. From luxury condos in Manhattan to sprawling estates in Beverly Hills, our curated portfolio spans residential, commercial, and investment opportunities in the nation's most desirable markets.
            </p>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div>
              <div className="text-3xl font-bold text-slate-900">2,400+</div>
              <div className="text-sm text-slate-600 mt-1">Active Listings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">45</div>
              <div className="text-sm text-slate-600 mt-1">Prime Markets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">$8.2B</div>
              <div className="text-sm text-slate-600 mt-1">Portfolio Value</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tall Feature - Local Expertise */}
      <div className="md:col-span-2 md:row-span-3 bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Expert Local Agents
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our seasoned agents bring deep local market knowledge and years of experience. They understand neighborhood dynamics, pricing trends, and investment potential.
          </p>
          <div className="mt-auto space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <div className="font-semibold text-slate-900">15+ Years Average Experience</div>
                <div className="text-sm text-slate-600">Proven market expertise</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <div className="font-semibold text-slate-900">Local Market Specialists</div>
                <div className="text-sm text-slate-600">Neighborhood insights</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <div className="font-semibold text-slate-900">Dedicated Support</div>
                <div className="text-sm text-slate-600">From search to closing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Feature - Development Projects */}
      <div className="md:col-span-4 md:row-span-1 bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Proven Development Track Record
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Successfully completed over 180 development projects totaling $3.4B in value. Our portfolio includes mixed-use developments, luxury residential towers, and commercial properties across major metropolitan areas.
            </p>
          </div>
          <div className="ml-8 flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">180+</div>
              <div className="text-xs text-slate-600 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">98%</div>
              <div className="text-xs text-slate-600 mt-1">On-Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Tools Feature */}
      <div className="md:col-span-4 md:row-span-1 bg-gradient-to-br from-slate-50 to-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Advanced Property Search Tools
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Powerful filtering and search capabilities to find your perfect property. Filter by location, price, size, amenities, and more with real-time results and interactive maps.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-slate-700">Interactive Maps</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-slate-700">Smart Filters</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-slate-700">Saved Searches</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-slate-700">Price Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}