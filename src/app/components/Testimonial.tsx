import React from "react";

export function Testimonial() {
  return (
    <section className="bg-primaryBlue mt-8">
      <div className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
        <h1 className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
          “Offshore staffing can improve your company's productivity by allowing
          you to
          <span className="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
            {" "}
            focus on your core competencies{" "}
          </span>
          while delegating non-core tasks to offshore teams. This increases
          efficiency and productivity across your business“
        </h1>

        <p className="text-base font-medium text-gray-200">B.I Segun</p>
        <p className="text-xs font-medium text-gray-400">Senor PM</p>
      </div>
    </section>
  );
}
