import { useState } from "react";
import { Modal, Slide, Backdrop } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { H2, H3, H4, P } from "../../../styles/Typography";
import emailjs from "@emailjs/browser";
 
interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}
 
const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
 
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
 
  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const newErrors: Record<string, string> = {};
 
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!/^\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number required";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";
    if (!formData.agree)
      newErrors.agree = "You must agree to continue";
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  /* ---------------- SUBMIT ---------------- */
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setErrors({});

  if (!validate()) return;

  setStatus("loading");

  const templateParams = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  message: formData.message,
  industry: "Cloud FinOps AI", // 🔥 default industry
};

  try {
    // Send both emails in parallel
    await Promise.all([
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
    ]);

    // ✅ Show success UI (NO design change)
    setStatus("success");

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });

    // Go back to form after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      setErrors({});
    }, 3000);

  } catch (error) {
    console.error("Email failed:", error);

    // Optional: you can show error state if needed
    setStatus("idle");
  }
};
 
  /* ---------------- INPUT CHANGE ---------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this specific field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
 
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 400,
          sx: { backgroundColor: "rgba(0,0,0,0.6)" },
        },
      }}
      sx={{ zIndex: 10002 }}
    >
      <Slide direction="down" in={open} timeout={400}>
        <div className="fixed inset-0 flex items-center justify-center px-4 font-quadran">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
 
            {/* CLOSE BUTTON */}
            <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-indigo-600 hover:text-white transition-colors duration-300 z-[101]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </motion.button>
 
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] h-full">
 
              {/* LEFT — FORM CONTAINER */}
              {/* Added min-h-[600px] to prevent height collapse when showing success message */}
              <div className="p-6 sm:p-10 overflow-y-auto min-h-[600px] relative bg-white">
 
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    /* ---------- SUCCESS ---------- */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="h-full flex flex-col items-center justify-center text-center absolute inset-0 p-6 sm:p-10 bg-white"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-4xl"
                      >
                        🎉
                      </motion.div>
                      <H2 className="mb-2 text-gray-900">
                        Submitted Successfully
                      </H2>
                      <P className="text-gray-500 max-w-md">
                        Thank you for reaching out. Our team will contact you
                        within 24 hours with next steps.
                      </P>
                    </motion.div>
                  ) : (
                    /* ---------- FORM ---------- */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <div>
                        <H3 className="mb-2 text-gray-900">Contact Us</H3>
                        <P className="text-gray-700">We'd love to hear from you.</P>
                      </div>
 
                      {/* Summary Error Banner */}
                      <AnimatePresence>
                        {Object.keys(errors).length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-red-50 text-red-400 px-4 py-3 rounded-lg text-sm font-medium font-quadran flex items-center gap-2"
                          >
                            <span>⚠</span> Please fix the highlighted fields below.
                          </motion.div>
                        )}
                      </AnimatePresence>
 
                      {/* Inputs with Dynamic Border Colors */}
                      <div className="space-y-4">
                        <input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border font-quadran bg-gray-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.name ? "border-red-400 ring-1 ring-red-400" : "border-gray-200 focus:border-black"
                          }`}
                        />
 
                        <input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border font-quadran   bg-gray-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.email ? "border-red-400 ring-1 ring-red-400" : "border-gray-200 focus:border-black"
                          }`}
                        />
 
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border font-quadran   bg-gray-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.phone ? "border-red-400 ring-1 ring-red-400" : "border-gray-200 focus:border-black"
                          }`}
                        />
 
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-md border font-quadran   bg-gray-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.message ? "border-red-400 ring-1 ring-red-400" : "border-gray-200 focus:border-black"
                          }`}
                        />
                      </div>
 
                      {/* Checkbox */}
                      <motion.label
                       
                        className="flex items-center gap-2 text-sm text-gray-600 font-quadran  "
                      >
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                         
                        />
                        I agree to the Terms & Privacy Policy
                      </motion.label>
 
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        className={`
                          w-full py-3 rounded-full font-regular text-white font-quadran
                          transition-colors duration-300 cursor-pointer
                          ${
                            status === "loading"
                              ? "bg-green-600 cursor-wait"
                              : "bg-[#009565] hover:bg-[#056735]"
                          }
                          disabled:opacity-80
                        `}
                        whileTap={{ scale: 0.97 }}
                      >
                        {status === "loading" ? "Submitting…" : "Submit"}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
 
              {/* RIGHT — INFO PANEL */}
              <div
                className="hidden md:flex flex-col justify-center px-12 text-white relative overflow-hidden"
                style={{
                  backgroundImage: "url('/bg_image.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
 
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 space-y-6"
                >
                  {/* INCREASED TEXT SIZE: text-5xl instead of text-4xl */}
                  <H3 className="">
                    What Happens Next
                  </H3>
 
                  <div className="space-y-6 pt-4 font-quadran">
                    {[
                      "We review your cloud setup",
                      "Schedule a 60-minute walkthrough",
                      "Get savings and optimization roadmap",
                      "Decide if CloudDIET fits",
                      "Reach out",
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4 items-center">
                        {/* INCREASED SIZE: w-10 h-10 text-lg instead of w-8 h-8 text-sm */}
                        <div className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center font-quadran font-bold shrink-0">
                          {`0${i + 1}`}
                        </div>
                        {/* INCREASED TEXT SIZE: text-xl instead of text-lg */}
                        <H4 className=" text-white/90 ">{text}</H4>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
 
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};
 
export default ContactModal;