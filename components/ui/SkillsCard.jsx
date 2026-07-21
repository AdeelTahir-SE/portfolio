"use client";
import Image from "next/image";

export default function SkillsCard({ title, description, img }) {
  return (
    <div
      className="group flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300"
      style={{
        background: "rgba(15,10,30,0.6)",
        border: "1px solid rgba(147,51,234,0.2)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(147,51,234,0.55)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(147,51,234,0.3)";
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.background = "rgba(20,10,40,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(147,51,234,0.2)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "rgba(15,10,30,0.6)";
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl mb-3"
        style={{
          background: "rgba(147,51,234,0.12)",
          border: "1px solid rgba(147,51,234,0.2)",
        }}
      >
        <Image
          src={img}
          alt={title}
          width={36}
          height={36}
          className="w-9 h-9 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="text-sm font-semibold mb-1 text-center"
        style={{ color: "#f1f5f9" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-xs text-center leading-relaxed"
        style={{ color: "#64748b" }}
      >
        {description}
      </p>
    </div>
  );
}