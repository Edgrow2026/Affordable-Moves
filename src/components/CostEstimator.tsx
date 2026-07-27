import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { MoveEstimate } from '../types';

interface CostEstimatorProps {
  onLockInEstimate: (estimate: MoveEstimate) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onLockInEstimate }) => {
  const [propertyType, setPropertyType] = useState<MoveEstimate['propertyType']>('2-bed-house');
  const [distanceMiles, setDistanceMiles] = useState<number>(35);
  const [floorAccess, setFloorAccess] = useState<MoveEstimate['floorAccess']>('ground');
  const [pickupPostcode, setPickupPostcode] = useState('SW1A 1AA');
  const [deliveryPostcode, setDeliveryPostcode] = useState('BS1 5UA');

  const [services, setServices] = useState({
    packing: false,
    dismantle: true,
    storage: false,
    boxesBundle: false,
  });

  // Calculate live estimate range
  const calculation = useMemo(() => {
    let baseMin = 180;
    let baseMax = 260;
    let crew = 2;
    let hours = 3;

    switch (propertyType) {
      case '1-bed-flat':
        baseMin = 180;
        baseMax = 250;
        crew = 2;
        hours = 3;
        break;
      case '2-bed-house':
        baseMin = 290;
        baseMax = 390;
        crew = 2;
        hours = 4;
        break;
      case '3-bed-house':
        baseMin = 420;
        baseMax = 580;
        crew = 3;
        hours = 6;
        break;
      case '4-plus-house':
        baseMin = 650;
        baseMax = 890;
        crew = 4;
        hours = 8;
        break;
      case 'office':
        baseMin = 480;
        baseMax = 720;
        crew = 3;
        hours = 5;
        break;
      case 'single-item':
        baseMin = 65;
        baseMax = 110;
        crew = 1;
        hours = 2;
        break;
    }

    // Distance charge: £1.50 per mile over 10 miles
    if (distanceMiles > 10) {
      const extraMiles = distanceMiles - 10;
      baseMin += extraMiles * 1.3;
      baseMax += extraMiles * 1.7;
    }

    // Floor access multiplier
    if (floorAccess === 'stairs-1-2') {
      baseMin += 35;
      baseMax += 55;
    } else if (floorAccess === 'stairs-3-plus') {
      baseMin += 70;
      baseMax += 110;
    }

    // Addons
    if (services.packing) {
      baseMin += 130;
      baseMax += 180;
    }
    if (services.dismantle) {
      baseMin += 50;
      baseMax += 70;
    }
    if (services.storage) {
      baseMin += 80; // First week storage estimate
      baseMax += 120;
    }
    if (services.boxesBundle) {
      baseMin += 45;
      baseMax += 55;
    }

    return {
      min: Math.round(baseMin),
      max: Math.round(baseMax),
      crewSize: crew,
      hours,
    };
  }, [propertyType, distanceMiles, floorAccess, services]);

  const handleLockIn = () => {
    onLockInEstimate({
      propertyType,
      pickupPostcode,
      deliveryPostcode,
      distanceMiles,
      floorAccess,
      services,
      estimatedMin: calculation.min,
      estimatedMax: calculation.max,
      crewSize: calculation.crewSize,
      estimatedHours: calculation.hours,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Transparent UK Removal Costs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Interactive Moving Cost Estimator
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Get an instant, realistic budget range for your upcoming move in under 30 seconds. No obligation, no hidden surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E6DAC4] space-y-6">
            <div>
              <label className="block text-xs font-bold text-[#475841] uppercase tracking-wider mb-2">
                1. Select Property Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: '1-bed-flat', label: '1 Bed Flat' },
                  { id: '2-bed-house', label: '2 Bed House' },
                  { id: '3-bed-house', label: '3 Bed House' },
                  { id: '4-plus-house', label: '4+ Bed Detached' },
                  { id: 'office', label: 'Office Space' },
                  { id: 'single-item', label: 'Single Item / Van' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as MoveEstimate['propertyType'])}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold font-poppins border transition-all text-center ${
                      propertyType === item.id
                        ? 'bg-[#5F7355] text-white border-[#5F7355] shadow-sm'
                        : 'bg-[#FAF8F4] text-[#2F2F2F] border-[#E6DAC4] hover:border-[#8C9B80]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Postcodes & Distance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#475841] uppercase tracking-wider mb-1">
                  Pickup Postcode
                </label>
                <input
                  type="text"
                  value={pickupPostcode}
                  onChange={(e) => setPickupPostcode(e.target.value.toUpperCase())}
                  className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80] focus:border-[#5F7355]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#475841] uppercase tracking-wider mb-1">
                  Delivery Postcode
                </label>
                <input
                  type="text"
                  value={deliveryPostcode}
                  onChange={(e) => setDeliveryPostcode(e.target.value.toUpperCase())}
                  className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80] focus:border-[#5F7355]"
                />
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-[#475841] uppercase tracking-wider">
                  2. Estimated Distance between Postcodes
                </label>
                <span className="text-sm font-bold text-[#5F7355]">{distanceMiles} Miles</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={distanceMiles}
                onChange={(e) => setDistanceMiles(Number(e.target.value))}
                className="w-full accent-[#5F7355] h-2 bg-[#E6DAC4] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#666666] mt-1">
                <span>Local (5 mi)</span>
                <span>Inter-City (100 mi)</span>
                <span>Long Distance (300+ mi)</span>
              </div>
            </div>

            {/* Floor Access */}
            <div>
              <label className="block text-xs font-bold text-[#475841] uppercase tracking-wider mb-2">
                3. Access & Stairs
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ground', label: 'Ground Floor' },
                  { id: 'lift', label: 'Lift Available' },
                  { id: 'stairs-1-2', label: '1-2 Flights Stairs' },
                  { id: 'stairs-3-plus', label: '3+ Flights Stairs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFloorAccess(item.id as MoveEstimate['floorAccess'])}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                      floorAccess === item.id
                        ? 'bg-[#E6DAC4] text-[#475841] border-[#B29A70] font-semibold'
                        : 'bg-[#FAF8F4] text-[#2F2F2F] border-[#E6DAC4] hover:border-[#8C9B80]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-on Services Checkboxes */}
            <div>
              <label className="block text-xs font-bold text-[#475841] uppercase tracking-wider mb-2">
                4. Optional Add-on Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'packing', label: 'Full Fragile Packing Service', desc: '+ Glassware & China protection' },
                  { id: 'dismantle', label: 'Furniture Dismantle & Reassembly', desc: '+ Beds, wardrobes, tables' },
                  { id: 'storage', label: 'Include Secure Storage', desc: '+ Climate-controlled holding' },
                  { id: 'boxesBundle', label: 'Recyclable Box Bundle Delivery', desc: '+ 25 heavy duty eco cartons' },
                ].map((addon) => {
                  const isChecked = services[addon.id as keyof typeof services];
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-start space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked ? 'bg-[#E6DAC4]/30 border-[#5F7355]' : 'bg-[#FAF8F4] border-[#E6DAC4]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) =>
                          setServices({ ...services, [addon.id]: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded text-[#5F7355] focus:ring-[#8C9B80]"
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#475841] block">{addon.label}</span>
                        <span className="text-[10px] text-[#666666] block">{addon.desc}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-5 space-y-4 sticky top-28">
            <div className="bg-[#475841] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-[#CDBA96] space-y-6">
              <div className="flex items-center justify-between border-b border-[#5F7355] pb-4">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-[#CDBA96]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CDBA96]">
                    Calculated Budget Guide
                  </span>
                </div>
                <span className="text-[10px] bg-[#5F7355] text-white px-2.5 py-1 rounded-full font-medium">
                  BAR Standard Rates
                </span>
              </div>

              <div>
                <span className="text-xs text-[#E6DAC4] block">Estimated Total Investment</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                    £{calculation.min} - £{calculation.max}
                  </span>
                  <span className="text-xs text-[#CDBA96] font-medium">+ VAT</span>
                </div>
                <p className="text-[11px] text-[#E6DAC4] mt-1">
                  Includes fuel, transit insurance, protective blankets & floor runners.
                </p>
              </div>

              {/* Resource Allocation Breakdown */}
              <div className="bg-[#5F7355]/40 rounded-xl p-4 border border-[#8C9B80]/40 space-y-2 text-xs">
                <div className="flex justify-between text-[#E6DAC4]">
                  <span>Recommended Crew:</span>
                  <span className="font-semibold text-white">{calculation.crewSize}-Man Professional Team</span>
                </div>
                <div className="flex justify-between text-[#E6DAC4]">
                  <span>Vehicle Required:</span>
                  <span className="font-semibold text-white">
                    {calculation.crewSize > 3 ? '2x Luton Vans (Tail-Lift)' : 'Luton Van (3.5t Tail-Lift)'}
                  </span>
                </div>
                <div className="flex justify-between text-[#E6DAC4]">
                  <span>Est. Move Duration:</span>
                  <span className="font-semibold text-white">~{calculation.hours} Hours</span>
                </div>
                <div className="flex justify-between text-[#E6DAC4]">
                  <span>Goods Cover Included:</span>
                  <span className="font-semibold text-[#CDBA96]">Up to £50,000</span>
                </div>
              </div>

              <button
                onClick={handleLockIn}
                className="relative overflow-hidden w-full py-4 px-6 bg-[#5F7355] hover:bg-[#3C4B37] text-white font-bold font-poppins rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5 text-[#CDBA96]" />
                <span className="whitespace-nowrap">Lock In Estimate & Get Official Quote</span>
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#CDBA96]/20 to-transparent -skew-x-12 animate-shine" />
              </button>

              <div className="flex items-center space-x-2 text-[11px] text-[#E6DAC4]">
                <ShieldCheck className="w-4 h-4 text-[#CDBA96] shrink-0" />
                <span>Price Match Guarantee against any written BAR accredited removal quote.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
