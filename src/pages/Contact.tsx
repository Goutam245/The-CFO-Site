import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Calendar, Check, ArrowRight } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(50),
  lastName: z.string().trim().min(1, "Required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Required").max(100),
  industry: z.string().min(1, "Select industry"),
  revenue: z.string().min(1, "Select revenue"),
  source: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
});

const services = ["Fractional CFO", "Controllership", "Power BI Reporting", "KPI Tracking", "Time Tracking", "Cloud Migration"];
const industries = ["SaaS / Tech", "E-Commerce", "Construction", "Healthcare", "Professional Services", "Manufacturing", "Other"];
const revenues = ["Under $500K", "$500K – $2M", "$2M – $10M", "$10M – $50M", "$50M+"];
const sources = ["Google Search", "Referral", "LinkedIn", "Podcast / Article", "Other"];

const faqs = [
  { q: "Is the assessment really free?", a: "Yes — 30 minutes, no obligation, no credit card. We use it to understand your business and decide together if we're a fit." },
  { q: "How quickly can you start?", a: "Most engagements begin within 5–7 business days of contract signature." },
  { q: "Do you work with US companies?", a: "Yes — about 60% of our client base is US-based, with the rest in Canada and select European markets." },
  { q: "What's your minimum contract?", a: "Month-to-month with a 30-day notice period. Annual plans save 15%." },
  { q: "What if I'm not ready yet?", a: "That's fine. Download our CFO Readiness Checklist and we'll check in when the time is right." },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", industry: "", revenue: "", source: "", message: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const toggleService = (s: string) =>
    setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About"
        subtitle="Your Financial Future"
        body="30-minute free assessment. No sales pressure — just an honest conversation about your finances and what would move the needle."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-5 lg:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-ink-200 p-8 lg:p-10 shadow-[0_30px_80px_rgba(6,95,70,0.08)]"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center">
                  <Check className="w-8 h-8 text-brand-deep" />
                </div>
                <h3 className="mt-6 font-display font-bold text-ink-900 text-[28px]">Thank you!</h3>
                <p className="mt-3 text-ink-700 text-[16px]">We'll be in touch within 4 business hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 className="font-display font-bold text-ink-900 text-[26px]">Book Your Free Assessment</h3>
                <p className="mt-2 text-ink-500 text-[14px]">30 minutes. No obligation. Just clarity.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">First name *</label>
                    <input value={form.firstName} onChange={update("firstName")} className="mt-1.5 w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900" />
                    {errors.firstName && <p className="text-red-600 text-[12px] mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">Last name *</label>
                    <input value={form.lastName} onChange={update("lastName")} className="mt-1.5 w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900" />
                    {errors.lastName && <p className="text-red-600 text-[12px] mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">Business email *</label>
                    <input type="email" value={form.email} onChange={update("email")} className="mt-1.5 w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900" />
                    {errors.email && <p className="text-red-600 text-[12px] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">Phone</label>
                    <input value={form.phone} onChange={update("phone")} className="mt-1.5 w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900" />
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">Company *</label>
                    <input value={form.company} onChange={update("company")} className="mt-1.5 w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900" />
                    {errors.company && <p className="text-red-600 text-[12px] mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink-900">Industry *</label>
                    <select value={form.industry} onChange={update("industry")} className="mt-1.5 w-full h-11 px-3 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900 bg-white">
                      <option value="">Select…</option>
                      {industries.map((i) => <option key={i}>{i}</option>)}
                    </select>
                    {errors.industry && <p className="text-red-600 text-[12px] mt-1">{errors.industry}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[13px] font-semibold text-ink-900">Monthly revenue *</label>
                    <select value={form.revenue} onChange={update("revenue")} className="mt-1.5 w-full h-11 px-3 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900 bg-white">
                      <option value="">Select…</option>
                      {revenues.map((i) => <option key={i}>{i}</option>)}
                    </select>
                    {errors.revenue && <p className="text-red-600 text-[12px] mt-1">{errors.revenue}</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[13px] font-semibold text-ink-900 mb-2">Services interested in</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {services.map((s) => {
                      const checked = selected.includes(s);
                      return (
                        <label key={s} className={`flex items-center gap-2 p-3 rounded-[10px] border cursor-pointer transition-colors ${checked ? "border-brand-bright bg-brand-light/40" : "border-ink-200"}`}>
                          <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${checked ? "bg-brand-deep border-brand-deep" : "border-ink-200"}`}>
                            {checked && <Check className="w-3 h-3 text-white" />}
                          </span>
                          <input type="checkbox" checked={checked} onChange={() => toggleService(s)} className="sr-only" />
                          <span className="text-[14px] text-ink-700">{s}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-[13px] font-semibold text-ink-900">How did you hear about us?</label>
                  <select value={form.source} onChange={update("source")} className="mt-1.5 w-full h-11 px-3 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900 bg-white">
                    <option value="">Select…</option>
                    {sources.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="text-[13px] font-semibold text-ink-900">Message</label>
                  <textarea value={form.message} onChange={update("message")} rows={4} className="mt-1.5 w-full px-4 py-3 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900 resize-none" />
                </div>

                <button type="submit" className="btn-shimmer mt-7 w-full h-12 rounded-[10px] font-bold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] inline-flex items-center justify-center gap-2">
                  Book My Free Assessment <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="bg-surface-dark rounded-2xl p-7 text-white">
              <h3 className="font-display font-bold text-[20px]">Get in Touch</h3>
              <ul className="mt-5 space-y-4 text-[15px]" style={{ color: "#CBD5E1" }}>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-bright" /> hello@thecfo.site</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-bright" /> 1-800-CFO-SITE</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-bright" /> Response within 4 business hours</li>
              </ul>
            </div>
            <div className="bg-white border border-ink-200 rounded-2xl p-7">
              <h3 className="font-display font-bold text-ink-900 text-[18px]">Office Hours</h3>
              <p className="mt-3 text-ink-700 text-[14px]">Mon–Fri: 9am–6pm EST</p>
              <p className="mt-2 text-ink-500 text-[13px] leading-[1.7]">
                Our team spans multiple time zones to serve clients across North America.
              </p>
            </div>
            <div className="bg-gradient-green rounded-2xl p-7 text-white">
              <p className="text-white/80 text-[13px] uppercase font-bold tracking-wider">Or book directly</p>
              <h3 className="mt-2 font-display font-bold text-[20px]">Schedule a 30-Min Call</h3>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-semibold bg-white text-brand-deep"
              >
                <Calendar className="w-4 h-4" /> Open Calendar
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[900px] mx-auto px-5 lg:px-10 mt-20">
          <h3 className="font-display font-bold text-ink-900 text-[28px] text-center">Quick Questions</h3>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-ink-200 rounded-xl">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4">
                  <span className="font-semibold text-ink-900 text-[15px]">{f.q}</span>
                  <span className={`text-brand-deep text-[22px] leading-none transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-ink-700 text-[14px] leading-[1.7]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
