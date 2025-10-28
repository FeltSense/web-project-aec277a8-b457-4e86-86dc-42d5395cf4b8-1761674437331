export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Clients Across the Region
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Hear from homeowners and investors who've experienced our commitment to excellence
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            MR
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-slate-900">Michael Rodriguez</h3>
            <p className="text-sm text-gray-600">First-Time Homebuyer</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "The team at Horizon made buying my first home stress-free. They walked me through every step, answered all my questions at 10pm, and negotiated $15K off the asking price. I couldn't have asked for better guidance."
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            SC
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-slate-900">Sarah Chen</h3>
            <p className="text-sm text-gray-600">Investment Property Owner</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "I've purchased three rental properties through Horizon. Their market analysis is spot-on, and they identified emerging neighborhoods before prices jumped. My portfolio has grown 40% in value over two years."
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            JT
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-slate-900">James Thompson</h3>
            <p className="text-sm text-gray-600">Relocating Executive</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Moving from out of state was daunting, but Horizon's team provided virtual tours, neighborhood insights, and handled everything remotely. We closed in 21 days and found the perfect home near top-rated schools."
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            LP
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-slate-900">Linda Patel</h3>
            <p className="text-sm text-gray-600">Downsizing Homeowner</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "After 30 years in our family home, selling was emotional. Horizon handled the staging, marketing, and negotiations with such care. We received multiple offers and sold for 8% above asking within a week."
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            DK
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-slate-900">David Kim</h3>
            <p className="text-sm text-gray-600">Commercial Property Buyer</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Horizon's commercial division helped me acquire a mixed-use property in a prime location. Their due diligence uncovered zoning opportunities that increased the property's potential value by 25%. True professionals."
        </p>
      </div>
    </div>

    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-8 text-gray-600">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">500+</div>
          <div className="text-sm">Happy Clients</div>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">4.9/5</div>
          <div className="text-sm">Average Rating</div>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">98%</div>
          <div className="text-sm">Would Recommend</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}