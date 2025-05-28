// src/Context/authContext.js
import React, { createContext, useState } from 'react';

// ✅ تعريف الكونتكست
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ حالة تسجيل الدخول، نستخدم useState لتخزين إذا كان المستخدم مسجل دخول أو لا
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" // استرجاع الحالة من localStorage
  );

  // ✅ دالة تسجيل الدخول
  const login = () => {
    setIsLoggedIn(true); // تغيير الحالة إلى مسجل دخول
    localStorage.setItem("isLoggedIn", "true"); // حفظ الحالة في localStorage
  };

  // ✅ دالة تسجيل الخروج
  const logout = () => {
    setIsLoggedIn(false); // تغيير الحالة إلى غير مسجل دخول
    localStorage.setItem("isLoggedIn", "false"); // حفظ الحالة في localStorage
  };

  return (
    // ✅ توفير الـ Context للمكونات الداخلية
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
