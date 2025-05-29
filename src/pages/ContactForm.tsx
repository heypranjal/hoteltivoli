import React, { useState } from 'react';

// --- Utility Function for Class Names (cn) ---
// This utility helps in conditionally applying Tailwind CSS classes
// and merging them efficiently.
// Make sure you have 'clsx' and 'tailwind-merge' installed:
// npm install clsx tailwind-merge
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Reusable Button Component (CustomButton) ---
// This component is designed to mimic the styling of your MobileBookingButton
// to maintain theme consistency across your site.
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        // Default button styling from previous versions, now overridden by specific usage
        // bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
        "rounded-full shadow-lg hover:shadow-xl transition-all duration-300", // Keep general button styling
        className // Allows overriding specific styles like background via className prop
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Main ContactForm Component ---

// Define the shape of your form data
interface FormData {
  name: string;
  contactNumber: string;
  mailId: string;
  resume: File | null; // For file uploads
}

// Define the shape of your form errors
interface FormErrors {
  name?: string;
  contactNumber?: string;
  mailId?: string;
  resume?: string;
  general?: string; // For overall form submission errors (e.g., API errors)
}

export default function ContactForm() {
  // State to hold form input values
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactNumber: '',
    mailId: '',
    resume: null,
  });

  // State to hold validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // State to manage submission loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to display submission success/failure messages
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handler for text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the specific field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handler for file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, resume: file }));
    // Clear resume error when a file is selected
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  // Function to validate the form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Check for blank entries
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required.';
    }
    if (!formData.mailId.trim()) {
      newErrors.mailId = 'Email ID is required.';
    }
    if (!formData.resume) {
      newErrors.resume = 'Resume is required.';
    }

    // Email regex validation if mailId is not blank
    if (formData.mailId.trim() && !emailRegex.test(formData.mailId)) {
      newErrors.mailId = 'Please enter a valid email ID.';
    }

    // Update the errors state
    setErrors(newErrors);
    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    setSubmissionMessage(null); // Clear any previous submission messages
    setIsSubmitting(true); // Set submitting state to true

    const isValid = validateForm(); // Validate the form

    if (isValid) {
      // If the form is valid, simulate an API call
      try {
        // In a real application, you would send formData to a backend.
        // For file uploads, you'd typically use FormData. Example:
        /*
        const dataToSend = new FormData();
        dataToSend.append('name', formData.name);
        dataToSend.append('contactNumber', formData.contactNumber);
        dataToSend.append('mailId', formData.mailId);
        if (formData.resume) {
          dataToSend.append('resume', formData.resume);
        }

        const response = await fetch('/api/submit-application', {
          method: 'POST',
          body: dataToSend, // Use FormData for file uploads
          // headers: {
          //   // 'Content-Type': 'application/json', // NOT needed for FormData
          // },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Server error');
        }

        const result = await response.json();
        console.log('Submission success:', result);
        */

        // Simulate network delay for demonstration
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Handle success after simulated API call
        setSubmissionMessage('Application submitted successfully!');
        // Clear the form after successful submission
        setFormData({
          name: '',
          contactNumber: '',
          mailId: '',
          resume: null,
        });
        setErrors({}); // Clear any residual errors
      } catch (error) {
        // Handle submission errors
        console.error('Submission error:', error);
        setSubmissionMessage('Failed to submit application. Please try again.');
        setErrors((prev) => ({ ...prev, general: 'Submission failed. ' + (error as Error).message }));
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    } else {
      // If validation fails, stay on the form and display messages
      setIsSubmitting(false); // Reset submitting state
      setSubmissionMessage('Please correct the errors in the form before submitting.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
      {/* Background overlay (now solid white as per your request) */}
      {/* This div was `bg-white` and then an `img` with `-z-10`.
          Given the form container itself is white, this white overlay might be redundant
          if the intent is a solid white background for the whole form area.
          If you want the background image to show *through* a semi-transparent white overlay,
          change `bg-white` to `bg-white/X` (e.g., `bg-white/80`).
          For now, I'm keeping it as a solid white layer on top of the image to match the request's implication.
      */}
      <div className="absolute inset-0 bg-white"></div>
      <img
        src="https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image1.jpg" // Using one of your hero images as background
        alt="Form Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10" // This image will be behind the white overlay
      />

      {/* Main Form Container */}
      <div className={cn(
        "relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-xl",
        "border border-[#CD9F59]" // Applied golden border color
      )}>
        <h2 className="text-3xl font-serif text-black text-center mb-8 tracking-wide">Apply Now</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input Field */}
          <div>
            <label htmlFor="name" className="block text-black text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
                "border border-[#CD9F59]", // Applied golden border color to inputs
                "text-gray-900 placeholder-gray-500", // Adjusted text and placeholder color for white background
                errors.name && 'border-red-500 focus:ring-red-500' // Error styling
              )}
              placeholder="Your full name"
              aria-invalid={!!errors.name} // ARIA attribute for accessibility
              aria-describedby={errors.name ? "name-error" : undefined} // ARIA attribute for accessibility
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Contact Number Input Field */}
          <div>
            <label htmlFor="contactNumber" className="block text-black text-sm font-medium mb-2">
              Contact Number
            </label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
                "border border-[#CD9F59]", // Applied golden border color to inputs
                "text-gray-900 placeholder-gray-500", // Adjusted text and placeholder color for white background
                errors.contactNumber && 'border-red-500 focus:ring-red-500'
              )}
              placeholder="+1234567890"
              aria-invalid={!!errors.contactNumber}
              aria-describedby={errors.contactNumber ? "contactNumber-error" : undefined}
            />
            {errors.contactNumber && (
              <p id="contactNumber-error" className="mt-1 text-sm text-red-400">
                {errors.contactNumber}
              </p>
            )}
          </div>

          {/* Email ID Input Field */}
          <div>
            <label htmlFor="mailId" className="block text-black text-sm font-medium mb-2">
              Email ID
            </label>
            <input
              type="email" // Use type="email" for email addresses
              id="mailId"
              name="mailId"
              value={formData.mailId}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
                "border border-[#CD9F59]", // Applied golden border color to inputs
                "text-gray-900 placeholder-gray-500", // Adjusted text and placeholder color for white background
                errors.mailId && 'border-red-500 focus:ring-red-500'
              )}
              placeholder="you@example.com"
              aria-invalid={!!errors.mailId}
              aria-describedby={errors.mailId ? "mailId-error" : undefined}
            />
            {errors.mailId && (
              <p id="mailId-error" className="mt-1 text-sm text-red-400">
                {errors.mailId}
              </p>
            )}
          </div>

          {/* Resume Upload Field */}
          <div>
            <label htmlFor="resume" className="block text-black text-sm font-medium mb-2">
              Upload Resume (PDF, DOCX)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx" // Accept only PDF, DOC, DOCX files
              onChange={handleFileChange}
              className={cn(
                "block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",
                "text-gray-700", // Adjusted text color for the file input itself
                errors.resume && 'file:text-red-700' // Error styling for the file input button
              )}
              aria-invalid={!!errors.resume}
              aria-describedby={errors.resume ? "resume-error" : undefined}
            />
            {/* Display selected file name */}
            {formData.resume && (
                <p className="mt-2 text-sm text-gray-700">Selected file: {formData.resume.name}</p>
            )}
            {errors.resume && (
              <p id="resume-error" className="mt-1 text-sm text-red-400">
                {errors.resume}
              </p>
            )}
          </div>

          {/* Submission Message (Success/Failure) */}
          {submissionMessage && (
            <div className={cn(
              "p-3 rounded-md text-sm",
              submissionMessage.includes("successfully") ? "bg-green-500/20 text-green-700" : "bg-red-500/20 text-red-700" // Adjusted success/error text color for lighter background
            )}>
              {submissionMessage}
            </div>
          )}
          {/* General form error message */}
          {errors.general && (
            <p className="mt-1 text-sm text-red-400">{errors.general}</p>
          )}

          {/* Submit Button */}
          <CustomButton
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className="w-full mt-8 bg-[#CD9F59] hover:bg-[#b5894f] transition-colors duration-300" // Applied golden background and darker hover
          >
            <span className="font-serif text-base tracking-wide text-black px-6 py-2 block">
              {isSubmitting ? 'Submitting...' : 'Submit Application'} {/* Dynamic text */}
            </span>
          </CustomButton>
        </form>
      </div>
    </div>
  );
}