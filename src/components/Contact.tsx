import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaInstagram, FaPaperPlane, 
  FaUser, FaComment, FaRocket, FaCheck, FaCode,
  FaExclamationTriangle
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from '@emailjs/browser';

// --- INTERFACES ---
interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  label: string;
  href: string;
  color: string;
  username: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- CONSTANTS ---
const jadeColor = "#00A878";
const jadeDark = "#007A5A";
const jadeLight = "#4CC9A0";

// --- EMAILJS CONFIG ---
const EMAILJS_SERVICE_ID = "service_tyq8dg9";
const EMAILJS_TEMPLATE_ID = "template_4hpicr4"; 
const EMAILJS_PUBLIC_KEY = "KRKVawoZr6bcyCcWi"; 

// --- CONTACT DATA ---
const contactInfo: ContactInfo[] = [
  {
    icon: SiGmail,
    label: 'Email',
    value: 'danaraga101@gmail.com',
    href: 'mailto:danaraga101@gmail.com',
    color: '#EA4335'
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+62 887-2593-286',
    href: 'https://wa.me/628872593286',
    color: '#25D366'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Lokasi',
    value: 'Bogor, Jawa Barat',
    href: 'https://maps.google.com/?q=Bogor,+Jawa+Barat',
    color: '#4285F4'
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/danaaraga',
    color: '#333',
    username: '@danaaraga'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/danaaraga',
    color: '#0077B5',
    username: 'Dana Raga'
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/danaaraga',
    color: '#E4405F',
    username: '@danaaraga'
  }
];

// --- SECTION HEADER ---
const SectionHeader = () => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
      Mari Berkolaborasi
    </h2>
    <motion.div
      className="relative mx-auto h-1 bg-gray-100 rounded-full overflow-hidden"
      style={{ width: '120px' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div 
        className="absolute top-0 left-0 h-full rounded-full w-20"
        style={{ backgroundColor: jadeColor }}
        animate={{
          x: [-120, 120, -120],
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
      />
    </motion.div>
    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Saya terbuka untuk diskusi mengenai peluang PKL, kolaborasi project, atau sekadar berbagi ide tentang teknologi
    </motion.p>
  </motion.div>
);

// --- CONTACT INFO CARD ---
const ContactInfoCard = ({ info, index }: { info: ContactInfo; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.a
      ref={ref}
      href={info.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      }}
    >
      <motion.div
        className="p-3 rounded-lg flex-shrink-0"
        style={{ backgroundColor: `${info.color}10` }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <info.icon size={24} style={{ color: info.color }} />
      </motion.div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 group-hover:text-gray-900">
          {info.label}
        </h4>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 mt-1">
          {info.value}
        </p>
      </div>
      <motion.div
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
        style={{ color: info.color }}
      >
        <FaRocket size={16} />
      </motion.div>
    </motion.a>
  );
};

// --- SOCIAL LINK CARD ---
const SocialLinkCard = ({ social, index }: { social: SocialLink; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -3,
        boxShadow: `0 8px 16px ${social.color}10`,
      }}
    >
      <motion.div
        className="p-3 rounded-full"
        style={{ backgroundColor: `${social.color}10` }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <social.icon size={18} style={{ color: social.color }} />
      </motion.div>
      <div>
        <h4 className="font-medium text-gray-800 text-sm">{social.label}</h4>
        <p className="text-xs text-gray-500">{social.username}</p>
      </div>
    </motion.a>
  );
};

// --- CONTACT FORM ---
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFocus = (field: string) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // EmailJS parameter maps exactly to template variables
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Dana Raga"
    };
    
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email berhasil dikirim!', result.text);
      setIsSubmitted(true);
      
      // Reset form setelah berhasil
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Gagal mengirim email:', error);
      setSubmitError('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi langsung melalui email.');
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={contentRef}
      className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="p-2.5 rounded-xl"
          style={{ backgroundColor: `${jadeColor}15` }}
        >
          <FaPaperPlane size={18} style={{ color: jadeColor }} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Kirim Pesan</h3>
      </div>

      {isSubmitted ? (
        <motion.div
          className="text-center py-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: `${jadeColor}15` }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FaCheck size={24} style={{ color: jadeColor }} />
          </motion.div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Terima Kasih!</h4>
          <p className="text-gray-600">Pesan Anda telah terkirim.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitError && (
            <motion.div 
              className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
              <p className="text-sm">{submitError}</p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <label 
                className={`block text-sm font-medium mb-2 transition-colors ${
                  activeField === 'name' ? 'text-emerald-600' : 'text-gray-700'
                }`}
                htmlFor="name"
              >
                <FaUser className="inline mr-2" size={14} />
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-800"
                placeholder="Masukkan nama Anda"
              />
              {activeField === 'name' && (
                <motion.div 
                  className="absolute right-3 top-[2.65rem]" 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FaUser size={14} style={{ color: jadeColor }} />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <label 
                className={`block text-sm font-medium mb-2 transition-colors ${
                  activeField === 'email' ? 'text-emerald-600' : 'text-gray-700'
                }`}
                htmlFor="email"
              >
                <FaEnvelope className="inline mr-2" size={14} />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-800"
                placeholder="nama@email.com"
              />
              {activeField === 'email' && (
                <motion.div 
                  className="absolute right-3 top-[2.65rem]" 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FaEnvelope size={14} style={{ color: jadeColor }} />
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <label 
              className={`block text-sm font-medium mb-2 transition-colors ${
                activeField === 'subject' ? 'text-emerald-600' : 'text-gray-700'
              }`}
              htmlFor="subject"
            >
              <FaComment className="inline mr-2" size={14} />
              Subjek
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus('subject')}
              onBlur={handleBlur}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-800"
              placeholder="Topik yang ingin dibahas"
            />
            {activeField === 'subject' && (
              <motion.div 
                className="absolute right-3 top-[2.65rem]" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <FaComment size={14} style={{ color: jadeColor }} />
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <label 
              className={`block text-sm font-medium mb-2 transition-colors ${
                activeField === 'message' ? 'text-emerald-600' : 'text-gray-700'
              }`}
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-gray-800"
              placeholder="Tulis pesan Anda di sini..."
              style={{ color: '#1F2937' }}
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden relative"
            style={{ backgroundColor: jadeColor }}
            whileHover={{ 
              backgroundColor: jadeDark,
              boxShadow: '0 4px 12px rgba(0, 168, 120, 0.25)',
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>Mengirim...</span>
              </>
            ) : (
              <>
                <FaPaperPlane size={16} />
                <span>Kirim Pesan</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 3, opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ borderRadius: "100%", left: "50%", top: "50%", originX: "50%", originY: "50%" }}
                />
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-[#f9fbfa] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${jadeDark} 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${jadeColor}08, transparent 70%)` }}
          animate={{ 
            scale: [1, 1.1, 1], 
            transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } 
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${jadeLight}08, transparent 70%)` }}
          animate={{ 
            scale: [1, 1.1, 1], 
            transition: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 } 
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <div className="space-y-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-3">
                <FaEnvelope style={{ color: jadeColor }} />
                Informasi Kontak
                <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={info.label} info={info} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-3">
                <FaRocket style={{ color: jadeColor }} />
                Social Media
                <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <SocialLinkCard key={social.label} social={social} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="p-6 rounded-xl border border-green-200 bg-green-50 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="font-semibold text-green-800">Available for PKL</h4>
                </div>
                <p className="text-green-700 text-sm">
                  Saat ini terbuka untuk kesempatan Praktik Kerja Lapangan periode 5-6 bulan
                </p>
                
                <div className="flex items-center gap-2 mt-4 text-xs text-green-600 font-medium">
                  <FaCode size={12} />
                  <span>Dimulai Juli 2025</span>
                </div>
              </div>
              
              <motion.div 
                className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full opacity-10 bg-green-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -right-4 -bottom-4 w-10 h-10 rounded-full opacity-20 bg-green-500"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;