import React from "react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://www.linkedin.com/in/hugo-eduardo-aguilar-santillan-46987627a/?originalSubdomain=mx"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0A66C2] hover:bg-[#004182] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="LinkedIn"
      >
        {/* Ícono de LinkedIn ajustado */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.49 8.99H4.5V24H.49V8.99zM7.5 8.99h3.83v2.05h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V24h-4v-7.9c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.05-3.03 4.17V24h-4V8.99z"/>
        </svg>
      </a>
    </div>
  );
}

export default FloatingButtons;
