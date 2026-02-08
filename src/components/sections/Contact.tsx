'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import NotificationModal from '@/components/ui/NotificationModal';

const Contact = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof typeof formData]: value,
    }));
  };

  // Mock submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate network delay
    setTimeout(() => {
      // Conditional Logic: Fail if message is empty OR contains "error"
      const shouldFail =
        !formData.message.trim() ||
        formData.message.toLowerCase().includes('error');

      setStatus(shouldFail ? 'error' : 'success');

      // Scroll to top to show Home section as background
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setIsModalOpen(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (status === 'success') {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' }); // Reset form on success
    }
  };

  return (
    <section
      id='contact'
      className='w-full bg-[#F9FAFB] pt-[40px] lg:pt-[120px] pb-5 lg:pb-[50px] flex flex-col items-center'
    >
      <div className='max-w-[1440px] w-full px-6 lg:px-[120px] flex flex-col lg:flex-row gap-16 lg:gap-[98px] relative mb-[50px]'>
        {/* Left Column: Text & Gallery */}
        <div className='lg:w-[540px] flex flex-col justify-start'>
          <h2 className='text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12] leading-[1.1] mb-6'>
            Let's <span className='text-[#0A0D12]'>Work Together</span>
          </h2>
          <p className='text-[#0A0D12] font-montserrat text-[14px] md:text-[16px] mb-[40px] max-w-[480px] leading-relaxed'>
            Have a project in mind or just want to say hi? Drop me a message —
            I'd love to hear from you.
          </p>

          <div className='flex gap-[20px] w-full max-w-[466px] h-[142px] overflow-x-auto no-scrollbar'>
            <div className='w-[142px] h-[142px] rounded-[16px] overflow-hidden shadow-md bg-gray-200 shrink-0'>
              <Image
                src='/assets/Portfolio-Image1.png'
                alt='Project 1'
                width={142}
                height={142}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='w-[142px] h-[142px] rounded-[16px] overflow-hidden shadow-md bg-gray-200 shrink-0'>
              <Image
                src='/assets/Portfolio-Image2.png'
                alt='Project 2'
                width={142}
                height={142}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='w-[142px] h-[142px] rounded-[16px] overflow-hidden shadow-md bg-gray-200 shrink-0'>
              <Image
                src='/assets/Portfolio-Image3.png'
                alt='Project 3'
                width={142}
                height={142}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className='lg:w-[612px] shrink-0 relative mt-20 lg:mt-0'>
          {/* Peeking Illustration */}
          <div className='absolute top-[-120px] left-1/2 -translate-x-1/2 z-10'>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src='/assets/contact.png'
                alt="Let's Talk"
                width={180}
                height={180}
                className='object-contain'
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-full bg-white rounded-[32px] p-8 md:p-10 shadow-xl relative z-0'
          >
            <form className='space-y-5' onSubmit={handleSubmit}>
              <div className='space-y-2'>
                <label className='text-[14px] font-bold font-montserrat text-[#0A0D12]'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  required
                  className='w-full text-[16px] text-[#535862] h-[52px] px-6 rounded-xl bg-white border border-[#D5D7DA] focus:outline-none focus:border-[#B76080] focus:ring-1 focus:ring-[#B76080] transition-colors font-montserrat'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-[14px] font-bold font-montserrat text-[#0A0D12]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                  className='w-full text-[16px] text-[#535862] h-[52px] px-6 rounded-xl bg-white border border-[#D5D7DA] focus:outline-none focus:border-[#B76080] focus:ring-1 focus:ring-[#B76080] transition-colors font-montserrat'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-[14px] font-bold font-montserrat text-[#0A0D12]'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Enter your message'
                  className='w-full text-[16px] text-[#535862] h-[140px] p-4 rounded-xl bg-white border border-[#D5D7DA] focus:outline-none focus:border-[#B76080] focus:ring-1 focus:ring-[#B76080] transition-colors resize-none font-montserrat'
                />
              </div>

              <Button
                type='submit'
                size='lg'
                disabled={status === 'loading'}
                className='w-full h-[56px] bg-[#B76080] hover:bg-[#A53860] text-white font-bold rounded-full text-[16px] transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {status === 'loading' ? 'Sending...' : "Let's Talk"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <NotificationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        status={status === 'success' ? 'success' : 'error'}
      />
    </section>
  );
};

export default Contact;
