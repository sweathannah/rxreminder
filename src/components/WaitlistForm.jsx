import { useState } from 'react';
import toast from 'react-hot-toast';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    const formActionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdiAdbg7X5-ViggzA5-EFQ9v6NYl38V9DIu8BDSmImOW6RuIQ/formResponse';
    const entryID = 'entry.1642969239';

    const formData = new FormData();
    formData.append(entryID, email);

    try {
      await fetch(formActionURL, {
        method: 'POST',
        mode: 'no-cors', // still needed to avoid CORS issues
        body: formData,
      });

      // Since we can't detect actual success, we assume it went through
      setTimeout(() => {
        toast.success('You’ve been added to the waitlist!');
      }, 500);

      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-[#E0EEF1] rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-[#015777] w-fit lg:mt-[2rem] mt-[1rem]">
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
        className="bg-transparent lg:px-[2.1875rem] px-[1.39rem] lg:py-[1.2rem] py-[1rem] outline-none text-sm text-gray-700 placeholder:text-gray-500 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#015777] text-white px-5 lg:py-3 py-2 text-sm font-medium rounded-full hover:bg-[#01405b] transition-colors lg:mr-[1rem] disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
      </button>

    </form>
    
  );
}

export default WaitlistForm;
