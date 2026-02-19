'use client';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, AlertCircle, Loader2, Search } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export default function FormSection() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', projectType: '', details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Fetch Countries on Mount
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2');
        const data = await response.json();
        const formatted = data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            code: c.cca2,
            name: c.name.common,
            flag: c.flags.svg,
            dialCode: c.idd.root + (c.idd.suffixes?.[0] || '')
          }))
          .sort((a: Country, b: Country) => a.dialCode.localeCompare(b.dialCode));

        setCountries(formatted);
        setFiltered(formatted);
        setSelected(formatted.find((c: Country) => c.code === 'IN') || formatted[0]);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // Filter countries when searching
  useEffect(() => {
    const results = countries.filter(c => 
      c.dialCode.includes(searchTerm)
    );
    setFiltered(results);
  }, [searchTerm, countries]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const clickOut = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, countryCode: selected?.dialCode }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', projectType: '', details: '' });
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
    setIsSubmitting(false);
  };

  return (
    <section className="relative bg-black py-20 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Let’s Build <br /> Something <span className="text-[#FF6B00]">Great</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md">Global expertise, local delivery. Fill out the form to get started.</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <InputGroup label="Name" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} placeholder="John Doe" />
               <InputGroup label="Email" value={formData.email} type="email" onChange={(v) => setFormData({...formData, email: v})} placeholder="john@example.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Custom Flag Dropdown */}
              <div className="flex flex-col gap-1.5" ref={dropdownRef}>
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="flex gap-2">
                  <div className="relative w-28 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-3 flex items-center justify-between hover:border-white/20 transition-all text-white"
                    >
                      {loading ? <Loader2 size={14} className="animate-spin opacity-20" /> : (
                        <>
                          <img src={selected?.flag} className="w-5 h-3.5 object-cover rounded-sm" alt="" />
                          <span className="text-xs">{selected?.dialCode}</span>
                          <ChevronDown size={12} className={`text-white/20 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-28 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                          <div className="p-2 border-b border-white/5 bg-white/5">
                            <div className="relative">
                              {/* <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/20" /> */}
                              {/* <input 
                                autoFocus placeholder="Search code..." 
                                className="w-full bg-black/40 rounded-lg py-2 pl-8 pr-3 text-xs text-white outline-none"
                                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                              /> */}
                            </div>
                          </div>
                          <div className="max-h-56 overflow-y-auto overflow-x-hidden">
                            {filtered.length > 0 ? filtered.map(c => (
                              <button
                                key={c.code} type="button"
                                onClick={() => { setSelected(c); setIsOpen(false); setSearchTerm(""); }}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FF6B00]/10 transition-colors group"
                              >
                                <img src={c.flag} className="w-5 h-3.5 object-cover rounded-sm" alt="" />
                                <span className="ml-auto text-white/20 text-[10px] group-hover:text-white/40">{c.dialCode}</span>
                              </button>
                            )) : (
                              <div className="p-4 text-center text-white/20 text-xs">No results found</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <input 
                    required type="tel"
                    className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white outline-none focus:border-[#FF6B00]/50 transition-all"
                    placeholder="00000 00000"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <InputGroup label="Company" value={formData.company} onChange={(v) => setFormData({...formData, company: v})} placeholder="Business Inc." />
            </div>

            {/* Added Project Type Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Project Type</label>
              <div className="relative">
                <select 
                  required
                  name="projectType"
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white appearance-none focus:border-[#FF6B00]/50 outline-none cursor-pointer"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option className="bg-neutral-900" value="" disabled>Select a service...</option>
                  <option className="bg-neutral-900" value="Mobile App Development">Mobile App Development</option>
                  <option className="bg-neutral-900" value="Web Development">Web Development</option>
                  <option className="bg-neutral-900" value="UI/UX Design">UI/UX Design</option>
                  <option className="bg-neutral-900" value="Digital Marketing">Digital Marketing</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Project Details</label>
              <textarea 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none h-28 resize-none focus:border-[#FF6B00]/50"
                placeholder="Tell us about your goals..."
                value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})}
              />
            </div>

            <button 
              type="submit" disabled={isSubmitting}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="animate-spin mx-auto" size={18} /> : 'Submit Project Request'}
            </button>

            <AnimatePresence>
              {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center text-xs">✓ Message sent!</motion.p>}
              {status === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center text-xs">✕ Failed to send.</motion.p>}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

// Helper Input Component
interface InputGroupProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

function InputGroup({ label, value, onChange, placeholder, type = "text" }: InputGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">{label}</label>
      <input 
        required type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FF6B00]/50 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}