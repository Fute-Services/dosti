// export default function ViewPDF() {
//   const pdfUrl = "/assets/my-document.pdf"; // Path to your PDF

//   return (
//     <div className="w-full h-screen p-4">
//       <h2 className="text-white mb-4">Document Viewer</h2>
//       <iframe
//         src={`${pdfUrl}#toolbar=0&navpanes=0`} // #toolbar=0 hides the download bar
//         className="w-full h-[90%] rounded-xl border border-white/20"
//         title="PDF Viewer"
//       />
//     </div>
//   );
// }

// const [isOpen, setIsOpen] = useState(false);

// return (
//   <>
//     <button onClick={() => setIsOpen(true)}>Open PDF</button>

//     {isOpen && (
//       <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-10">
//         <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
//           <button 
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-10"
//           >
//             Close
//           </button>
//           <iframe src="/my-document.pdf" className="w-full h-full" />
//         </div>
//       </div>
//     )}
//   </>
// );

// LinkedIn Content: The "In-App" Document Experience
// Headline: Stop sending your users away! How to embed PDFs in React 📄

// "User retention is key. Why send your users to a new browser tab just to read a PDF?

// In modern SPAs, we can treat documents like any other component. By using embedded iframes or libraries like react-pdf, you can keep the user inside your 'Glass' interface.

// Pro Tip: Add #toolbar=0 to your PDF source URL to hide the browser's default PDF controls and keep your UI looking clean and professional."

// #ReactJS #UXDesign #WebDevelopment #FrontendTips #ProductDesign