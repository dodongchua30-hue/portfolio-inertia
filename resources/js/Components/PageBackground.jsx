   export default function PageBackground() {
       return (
           <div
               aria-hidden="true"
               className="fixed inset-0 -z-10 bg-cover bg-center"
               style={{
                   backgroundImage:
                       "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.8)), url('/images/bg.jpg')",
               }}
           />
       );
   }