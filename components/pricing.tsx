// "use client";

// import { useState } from "react";
// import { CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import UserDetailsModal from "@/components/payment/UserDetailsModal";

// export default function TicketStylePricing() {
//   const [open, setOpen] = useState(false);
//   const [amount, setAmount] = useState(0);

//   const passes = [
//     {
//       title: "1-Day Pass",
//       price: "₹699 + GST",
//       amount: 699,
//       features: [
//         "Full-day entry to Expo Zone",
//         "Zumba • HIIT • Yoga • CrossFit",
//         "Fitness Challenges",
//         "Nutrition Zone",
//         "Workshops",
//         "Goodie Bag",
//         "Certificate",
//       ],
//     },
//     {
//       title: "Buddy Pass (5 People)",
//       price: "₹4,999 + GST",
//       amount: 4999,
//       features: [
//         "All 1-Day Pass Benefits",
//         "VIP Entry",
//         "Premium Arena",
//         "Celebrity Trainers",
//         "Premium Kit",
//         "Free InBody Test",
//         "Event Photos",
//       ],
//     },
//   ];

//   return (
//     <>
//       <section className="bg-[#0f172a] text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//           {passes.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg"
//             >
//               <h3 className="text-2xl font-bold">{p.title}</h3>
//               <p className="text-4xl font-extrabold mt-4">{p.price}</p>

//               <ul className="space-y-2 my-6">
//                 {p.features.map((f, idx) => (
//                   <li key={idx} className="flex gap-2 text-sm">
//                     <CheckCircle className="w-4 h-4 text-[#EA4A3E]" />
//                     {f}
//                   </li>
//                 ))}
//               </ul>

//               <Button
//                 onClick={() => {
//                   setAmount(p.amount);
//                   setOpen(true);
//                 }}
//                 className="w-full bg-[#EA4A3E] text-white py-3 rounded-lg"
//               >
//                 Get Now
//               </Button>
//             </div>
//           ))}
//         </div>
//       </section>

//       <UserDetailsModal
//         open={open}
//         amount={amount}
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDetailsModal from "@/components/payment/UserDetailsModal";

export default function TicketStylePricing() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const passes = [
    { title: "1-Day Pass", amount: 1, price: "₹699 + GST", features: [] },
    { title: "Buddy Pass", amount: 4999, price: "₹4,999 + GST", features: [] },
  ];

  return (
    <>
      <section className="bg-[#0f172a] text-white mt-40 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {passes.map((p, i) => (
            <div key={i} className="bg-white text-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-4xl font-extrabold mt-4">{p.price}</p>

              <Button
                onClick={() => {
                  setAmount(p.amount);
                  setOpen(true);
                }}
                className="w-full bg-[#EA4A3E] mt-6"
              >
                Get Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      <UserDetailsModal
        open={open}
        amount={amount}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
