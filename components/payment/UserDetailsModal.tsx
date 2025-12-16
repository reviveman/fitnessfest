// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// type Props = {
//   open: boolean;
//   onClose: () => void;
//   amount: number;
// };

// export default function UserDetailsModal({ open, onClose, amount }: Props) {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [loading, setLoading] = useState(false);

//   if (!open) return null;

//   const handleSubmit = async () => {
//     if (!name || mobile.length !== 10) {
//       alert("Enter valid name and mobile number");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/phonepe/pay", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           amount,
//           mobileNumber: mobile,
//           meta: {
//             name,
//             type: "ticket",
//           },
//         }),
//       });

//       const data = await res.json();

//       const redirectUrl =
//         data?.data?.instrumentResponse?.redirectInfo?.url;

//       if (redirectUrl) {
//         window.location.href = redirectUrl;
//       } else {
//         alert("Payment initiation failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">
//           Enter Your Details
//         </h2>

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-2"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             maxLength={10}
//             className="w-full border rounded-lg px-4 py-2"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//         </div>

//         <div className="flex gap-3 mt-6">
//           <Button
//             onClick={onClose}
//             variant="outline"
//             className="w-1/2"
//           >
//             Cancel
//           </Button>

//           <Button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-1/2 bg-[#EA4A3E] text-white"
//           >
//             {loading ? "Processing..." : `Pay ₹${amount}`}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UserDetailsModal({ open, onClose, amount }: any) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

 const handleSubmit = async () => {
  if (!name || mobile.length !== 10) {
    alert("Enter valid name and mobile number");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/phonepe/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        mobileNumber: mobile,
        meta: { name, type: "ticket" },
      }),
    });

    const data = await res.json();
    console.log("PhonePe response:", data);

    // ✅ SUPPORT BOTH PHONEPE RESPONSE FORMATS
    const redirectUrl =
      data?.data?.redirectUrl ||
      data?.data?.instrumentResponse?.redirectInfo?.url;

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error("No redirect URL from PhonePe:", data);
      alert("Payment initiation failed");
    }
  } catch (err) {
    console.error("Payment error:", err);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />

        <Button onClick={handleSubmit}>
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </Button>
      </div>
    </div>
  );
}
