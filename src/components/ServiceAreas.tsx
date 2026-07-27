import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, CheckCircle2, Building, Navigation, ArrowRight } from 'lucide-react';
import { COVERAGE_AREAS_DATA } from '../data/content';

interface ServiceAreasProps {
  onOpenQuoteWithLocation: (postcode: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenQuoteWithLocation }) => {
  const [searchPostcode, setSearchPostcode] = useState('');
  const [searchResult, setSearchResult] = useState<{ found: boolean; region?: string; message?: string } | null>(null);
  const [activeRegionIndex, setActiveRegionIndex] = useState(0);

  const handlePostcodeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchPostcode.trim().toUpperCase();
    if (!clean) return;

    // Check if valid UK format or prefix matches any of our coverage areas
    const prefix = clean.split(' ')[0];
    const matchedRegion = COVERAGE_AREAS_DATA.find((area) =>
      area.postcodes.some((p) => p.includes(prefix) || prefix.startsWith(p.split('-')[0]))
    ) || COVERAGE_AREAS_DATA[0];

    setSearchResult({
      found: true,
      region: matchedRegion.region,
      message: `Great news! Postcode "${clean}" is fully covered by our ${matchedRegion.region} depot team.`,
    });
  };

  return (
    <section id="coverage" className="py-20 bg-white border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Nationwide UK Removals Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Where We Operate Across the UK
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            With regional hubs in London, Manchester, Birmingham, Bristol, Leeds, and Edinburgh, our fleet provides nationwide house and office removals daily.
          </p>
        </div>

        {/* Interactive Postcode Availability Checker */}
        <div className="bg-[#E6DAC4]/40 rounded-2xl p-6 sm:p-8 border border-[#E6DAC4] mb-12 max-w-3xl mx-auto shadow-sm">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold font-poppins text-[#475841]">Check Instant Service in Your Area</h3>
            <p className="text-xs text-[#666666]">Enter any UK postcode (e.g. SW1A 1AA, M1 1AE, BS1 5UA, B1 1BB)</p>
          </div>

          <form onSubmit={handlePostcodeSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8C9B80]" />
              <input
                type="text"
                required
                placeholder="Enter UK Postcode..."
                value={searchPostcode}
                onChange={(e) => setSearchPostcode(e.target.value.toUpperCase())}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm font-semibold uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins text-sm rounded-xl transition-colors shadow-md whitespace-nowrap"
            >
              Check Availability
            </button>
          </form>

          {searchResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-[#475841] text-white rounded-xl border border-[#CDBA96] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#CDBA96] shrink-0" />
                <span>{searchResult.message}</span>
              </div>
              <button
                onClick={() => onOpenQuoteWithLocation(searchPostcode)}
                className="px-4 py-2 bg-[#CDBA96] hover:bg-[#B29A70] text-[#2F2F2F] font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                Book Quote for {searchPostcode}
              </button>
            </motion.div>
          )}
        </div>

        {/* Region Selector Tabs + Interactive Map Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Region Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#475841] mb-2">Regional Hubs</h3>
            {COVERAGE_AREAS_DATA.map((area, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRegionIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeRegionIndex === idx
                    ? 'bg-[#5F7355] text-white border-[#5F7355] shadow-md'
                    : 'bg-[#FAF8F4] text-[#2F2F2F] border-[#E6DAC4] hover:border-[#8C9B80]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      activeRegionIndex === idx ? 'bg-[#475841] text-[#CDBA96]' : 'bg-[#E6DAC4] text-[#5F7355]'
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-poppins">{area.region}</h4>
                    <span className={`text-[11px] block ${activeRegionIndex === idx ? 'text-[#E6DAC4]' : 'text-[#666666]'}`}>
                      {area.cities.slice(0, 3).join(', ')}...
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeRegionIndex === idx ? 'text-[#CDBA96]' : 'text-[#8C9B80]'}`} />
              </button>
            ))}
          </div>

          {/* Map & Selected Region Detail Card */}
          <div className="lg:col-span-7 bg-[#E6DAC4]/30 rounded-2xl p-6 sm:p-8 border border-[#E6DAC4] space-y-6 relative overflow-hidden">
            {/* Visual UK Map Graphic Container */}
            <div className="bg-[#FAF8F4] rounded-xl p-6 border border-[#E6DAC4] relative min-h-[220px] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-[#E6DAC4] pb-3">
                <div className="flex items-center space-x-2 text-[#475841]">
                  <Navigation className="w-5 h-5 text-[#5F7355]" />
                  <span className="font-bold text-sm font-poppins">
                    {COVERAGE_AREAS_DATA[activeRegionIndex].region} Operational Hub
                  </span>
                </div>
                <span className="text-[10px] bg-[#CDBA96] text-[#2F2F2F] px-2.5 py-0.5 rounded-full font-bold">
                  Active Dispatch
                </span>
              </div>

              {/* Hub Address */}
              <div className="py-4 space-y-2">
                <div className="flex items-start space-x-2 text-xs text-[#2F2F2F]">
                  <Building className="w-4 h-4 text-[#5F7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#475841] block">Regional Depot Address:</span>
                    <span className="text-[#666666]">{COVERAGE_AREAS_DATA[activeRegionIndex].hubAddress}</span>
                  </div>
                </div>
              </div>

              {/* Major Cities Covered */}
              <div>
                <span className="text-xs font-bold text-[#475841] block mb-2">Key Cities Covered Daily:</span>
                <div className="flex flex-wrap gap-2">
                  {COVERAGE_AREAS_DATA[activeRegionIndex].cities.map((city, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 bg-white border border-[#E6DAC4] rounded-lg text-xs font-medium text-[#2F2F2F] flex items-center space-x-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#5F7355]" />
                      <span>{city}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#666666]">Daily slots available across all postcodes in this region</span>
              <button
                onClick={() => onOpenQuoteWithLocation(COVERAGE_AREAS_DATA[activeRegionIndex].region)}
                className="px-6 py-3 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins text-xs rounded-xl shadow-md transition-colors"
              >
                Book Removal in {COVERAGE_AREAS_DATA[activeRegionIndex].region}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
