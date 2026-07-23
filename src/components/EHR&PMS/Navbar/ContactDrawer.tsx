import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Drawer } from "@mui/material";
import { H3 } from "../../../styles/Typography";
import emailjs from "@emailjs/browser";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

const INTEREST_OPTIONS = [
  "Product Enquiry",
  "Partnership",
  "Technical Support",
  "Healthcare Solutions",
  "Careers",
  "Other",
];

const ContactDrawer = ({ open, onClose }: ContactDrawerProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: [] as string[],
    message: "",
    industry: "Unified Healthcare",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [interestOpen, setInterestOpen] = useState(false);
  const interestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (interestRef.current && !interestRef.current.contains(e.target as Node)) {
        setInterestOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (option: string) => {
    setFormData(prev => ({
      ...prev,
      interest: prev.interest.includes(option)
        ? prev.interest.filter(i => i !== option)
        : [...prev.interest, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest.join(", "),
      message: formData.message,
      industry: formData.industry,
    };

    try {
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

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: [],
          message: "",
          industry: "Unified Healthcare",
        });
      }, 3000);

    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("idle");
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ zIndex: 10005 }}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 480, md: 560 },
          backgroundColor: "#FFFFFF",
          p: { xs: 3, sm: 4, md: 5 },
        },
      }}
    >
      <div className="relative h-full flex flex-col">

        {/* Close Button with animation */}
        <button
          onClick={onClose}
          className="absolute right-0 top-0 p-2 rounded-full transition-all duration-300 hover:bg-[#00AA72] hover:text-white hover:rotate-90"
        >
          <X size={22} />
        </button>

        <H3 className="text-[#00AA72] mb-6">
          Let’s Connect With Us
        </H3>

        {/* SUCCESS MESSAGE (inside drawer) */}
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center flex-grow text-center gap-4">
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-[#00AA72]">
              Submitted Successfully!
            </h2>
            <p className="text-gray-600 max-w-sm">
              Thank you for connecting with us.
              Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="input"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="input"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="input"
            />

            {/* Dropdown Multi Select */}
<div ref={interestRef} className="relative">
  <label className="text-md font-semibold text-[#00AA72] ml-1 mb-2 block">
    What services are you interested in?
  </label>

  <button
    type="button"
    onClick={() => setInterestOpen(!interestOpen)}
    className={`chip-input ${interestOpen ? "chip-active" : ""}`}
  >
    <div className="flex flex-wrap gap-2 items-center">
      {formData.interest.length === 0 && (
        <span className="placeholder">Select services</span>
      )}

      {formData.interest.map(item => (
        <span key={item} className="chip">
          {item}
          <span
            onClick={(e) => {
              e.stopPropagation();
              toggleInterest(item);
            }}
            className="chip-x"
          >
            ×
          </span>
        </span>
      ))}
    </div>

    {/* Arrow */}
    <svg
      className={`arrow ${interestOpen ? "rotate" : ""}`}
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>

  {interestOpen && (
    <div className="dropdown-panel">
      {INTEREST_OPTIONS.map(option => {
        const active = formData.interest.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggleInterest(option)}
            className={`dropdown-item ${active ? "active" : ""}`}
          >
            <span className={`dot ${active ? "dot-active" : ""}`} />
            {option}
          </button>
        );
      })}
    </div>
  )}
</div>

            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your requirements"
              value={formData.message}
              onChange={handleInputChange}
              className="textarea"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="submit-btn font-quicksand cursor-pointer"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>

          </form>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .input {
          padding:16px 22px;
          border-radius:9999px;
          border:2px solid #d1d5db;
          outline:none;
        }
        .input:focus { border-color:#00AA72; }

        .textarea {
          padding:16px 22px;
          border-radius:24px;
          border:2px solid #d1d5db;
          outline:none;
          resize:none;
        }
        .textarea:focus { border-color:#00AA72; }

        .chip-input {
  width:100%;
  min-height:56px;
  padding:12px 18px;
  border-radius:18px;
  border:1.5px solid rgba(22,109,72,.35);
  background:rgba(255,255,255,.9);
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition:all .3s ease;
  cursor:pointer;
}

.chip-input:hover {
  border-color:#00AA72;
  box-shadow:0 12px 25px rgba(22,109,72,.15);
}

.chip-active {
  border-color:#00AA72;
  box-shadow:0 8px 20px rgba(0,130,128,.2);
}

.placeholder {
  color:#9ca3af;
  font-size:14px;
}

.arrow {
  width:20px;
  height:20px;
  fill:none;
  stroke:#00AA72;
  stroke-width:2.5;
  transition:transform .3s ease;
}

.rotate {
  transform:rotate(180deg);
}

.dropdown-panel {
  position:absolute;
  z-index:50;
  width:100%;
  margin-top:10px;
  background:white;
  border-radius:20px;
  padding:16px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  box-shadow:0 25px 60px rgba(0,0,0,.15);
  animation:fadeIn .2s ease;
}

.dropdown-item {
  padding:14px 16px;
  border-radius:14px;
  border:1px solid rgba(22,109,72,.3);
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:600;
  transition:all .25s ease;
  background:white;
}

.dropdown-item:hover {
  transform:translateY(-2px);
  box-shadow:0 10px 20px rgba(0,0,0,.08);
  border-color:#00AA72;
}

.active {
  background:#00AA72;
  color:white;
  border-color:#00AA72;
}

.dot {
  width:16px;
  height:16px;
  border-radius:50%;
  border:2px solid #00AA72;
  transition:.2s;
}

.dot-active {
  background:white;
  border-color:white;
}

.chip {
  background:#00AA72;
  color:white;
  padding:6px 12px;
  border-radius:999px;
  display:flex;
  align-items:center;
  gap:6px;
  font-size:13px;
  animation:fadeIn .2s ease;
}

.chip-x {
  cursor:pointer;
  font-weight:700;
  opacity:.7;
  transition:.2s;
}

.chip-x:hover {
  opacity:1;
}

@keyframes fadeIn {
  from { opacity:0; transform:translateY(-4px); }
  to { opacity:1; transform:translateY(0); }
}
        .active {
          background:#00AA72;
          color:white;
        }

        .submit-btn {
          background:#00AA72;
          color:white;
          padding:14px;
          border-radius:14px;
          font-weight:700;
          transition:0.3s;
        }

        .submit-btn:hover {
          background:#125a3a;
        }
      `}</style>
    </Drawer>
  );
};

export default ContactDrawer;