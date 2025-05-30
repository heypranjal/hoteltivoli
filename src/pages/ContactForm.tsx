import React, { useState } from 'react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface FormData {
  name: string;
  contactNumber: string;
  mailId: string;
  resume: File | null;
}

interface FormErrors {
  name?: string;
  contactNumber?: string;
  mailId?: string;
  resume?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactNumber: '',
    mailId: '',
    resume: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required.';
    if (!formData.mailId.trim()) {
      newErrors.mailId = 'Email ID is required.';
    } else if (!emailRegex.test(formData.mailId)) {
      newErrors.mailId = 'Enter a valid email ID.';
    }
    if (!formData.resume) newErrors.resume = 'Resume is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionMessage(null);
    setIsSubmitting(true);

    const isValid = validateForm();
    if (!isValid) {
      setSubmissionMessage("Please fix the errors before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmissionMessage("Application submitted successfully!");
      setFormData({ name: '', contactNumber: '', mailId: '', resume: null });
      setErrors({});
    } catch (error) {
      setSubmissionMessage("Failed to submit application. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
      {/* Background Image */}
      <img
        src="https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      />

      {/* Semi-transparent white overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Inline Form Card */}
      <div className="relative z-10 w-full max-w-md p-0 bg-transparent">
        {/* Intro Text */}
        <p className="text-gray-800 text-md mb-4">
          Ready to begin your journey with <span style={{ color: '#CD9F59' }}>Tivoli</span>? Please fill out the application form and upload your resume. We look forward to learning more about you.
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-serif text-black text-center mb-8 tracking-wide">Apply Now</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-black text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md border border-[#CD9F59] text-gray-900 placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-[#CD9F59]",
                errors.name && "border-red-500 focus:ring-red-500"
              )}
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-black text-sm font-medium mb-2">Contact Number</label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+1234567890"
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md border border-[#CD9F59] text-gray-900 placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-[#CD9F59]",
                errors.contactNumber && "border-red-500 focus:ring-red-500"
              )}
            />
            {errors.contactNumber && <p className="mt-1 text-sm text-red-400">{errors.contactNumber}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="mailId" className="block text-black text-sm font-medium mb-2">Email ID</label>
            <input
              id="mailId"
              name="mailId"
              type="email"
              value={formData.mailId}
              onChange={handleChange}
              placeholder="you@example.com"
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md border border-[#CD9F59] text-gray-900 placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-[#CD9F59]",
                errors.mailId && "border-red-500 focus:ring-red-500"
              )}
            />
            {errors.mailId && <p className="mt-1 text-sm text-red-400">{errors.mailId}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-black text-sm font-medium mb-2">Upload Resume</label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={cn(
                "block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0",
                "file:text-sm file:font-semibold file:bg-[#CD9F59] file:text-white hover:file:bg-[#b88e4c]",
                errors.resume && "file:text-red-700"
              )}
            />
            {formData.resume && (
              <p className="mt-2 text-sm text-gray-700">Selected file: {formData.resume.name}</p>
            )}
            {errors.resume && <p className="mt-1 text-sm text-red-400">{errors.resume}</p>}
          </div>

          {/* Submission Message */}
          {submissionMessage && (
            <div className="text-sm text-center text-blue-600 font-medium">{submissionMessage}</div>
          )}

          {/* Submit Button */}
          <CustomButton
            type="submit"
            className="w-full py-2 px-4 bg-[#CD9F59] text-white font-medium hover:bg-[#b88e4c]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </CustomButton>
        </form>
      </div>
    </div>
  );
}
