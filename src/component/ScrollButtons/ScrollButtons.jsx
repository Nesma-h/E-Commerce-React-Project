import React, { useEffect, useState } from "react";
import { FaCog, FaArrowUp, FaTimes } from "react-icons/fa";

function ScrollButtons() {
  const [showButton, setShowButton] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mainColor, setMainColor] = useState("#0cae8e");

  // تحميل الإعدادات المحفوظة
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   const savedColor = localStorage.getItem("mainColor");
  //   if (savedTheme) setTheme(savedTheme);
  //   if (savedColor) setMainColor(savedColor);
  // }, []);

  // تطبيق الثيم واللون
  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
    localStorage.setItem("mainColor", mainColor);
  }, [theme, mainColor]);

  // إظهار زر الصعود بعد التمرير
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* زر الإعدادات */}
      <div className="relative">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bg-[var(--main-color)] hover:opacity-90 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg transition-all duration-300"
        >
          {showSettings ? <FaTimes size={18} /> : <FaCog size={18} />}
        </button>

        {/* نافذة الإعدادات */}
        {showSettings && (
          <div
            className="absolute bottom-14 right-0 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-200 transition-all duration-300 animate-fade-in-up"
          >
            {/* Color Section */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-700">Color</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Theme Color</span>
                <span
                  className="w-6 h-4 rounded-md border border-gray-300"
                  style={{ backgroundColor: mainColor }}
                ></span>
              </div>
            </div>

            {/* <hr className="border-gray-200 mb-3" /> */}
            {/* color picker */}
            <div className="flex justify-center mb-4">
              <input
                type="color"
                value={mainColor}
                onChange={(e) => setMainColor(e.target.value)}
                className="w-20 h-8 rounded-md cursor-pointer border-none outline-none"
              />
            </div>

            <hr className="border-gray-200 mb-3 dark:border-gray-700" />

            {/* Theme Section */}
            <div className="mb-3">
              <p className="font-medium text-gray-700 mb-2">Dark</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex-1 border rounded-md py-1 ${
                    theme === "dark"
                      ? "bg-[var(--main-color)] text-white border-[var(--main-color)]"
                      : "border-[var(--main-color)] text-[var(--main-color)]"
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className={`flex-1 border rounded-md py-1 ${
                    theme === "light"
                      ? "bg-[var(--main-color)] text-white border-[var(--main-color)]"
                      : "border-[var(--main-color)] text-[var(--main-color)]"
                  }`}
                >
                  Light
                </button>
              </div>
            </div>

            {/* RTL Section (بس منظر – مش شغال فعلياً) */}
            <div>
              <p className="font-medium text-gray-700 mb-2">RTL</p>
              <div className="flex gap-2">
                <button
                  className="flex-1 border rounded-md py-1 bg-[var(--main-color)] text-white"
                >
                  LTR
                </button>
                <button className="flex-1 border rounded-md py-1 border-[var(--main-color)] text-[var(--main-color)]">
                  RTL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* زر الصعود للأعلى */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-[var(--main-color)] hover:opacity-90 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

export default ScrollButtons;
