
import React from "react";
import ContactMeForm from "./components/ContactMeForm";

const page = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <main className="flex-1 bg-white/30 -sm p-6">
        <ContactMeForm />
      </main> 
    </div>
  );
};

export default page;
