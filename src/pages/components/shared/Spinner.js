import React from 'react';
import ReactLoading from 'react-loading';

const AdminDashboard = ({ className, type, label, size }) => (
  <div className={`flex gap-3 text-[14px] font-bold text-[#2B3674] ${className}`}>
    <ReactLoading type={type} color='#6B5E5B' width={size} height={size} />
    {label}
  </div>
);

export default AdminDashboard;
