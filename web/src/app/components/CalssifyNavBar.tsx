"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaAppleAlt,
  FaTshirt,
  FaHome,
  FaBox,
  FaLaptop,
  FaCamera,
} from "react-icons/fa";

const CalssifyNavBar = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const navItems = [
    {
      title: "免費物品",
      links: [
        { name: "食物", icon: <FaAppleAlt /> },
        { name: "物品", icon: <FaBox /> },
      ],
    },
    {
      title: "流行時尚",
      links: [
        { name: "他的時尚", icon: <FaTshirt /> },
        { name: "她的時尚", icon: <FaTshirt /> },
        { name: "美妝保養", icon: <FaTshirt /> },
        { name: "名牌精品", icon: <FaTshirt /> },
      ],
    },
    {
      title: "品味居家",
      links: [
        { name: "家具及居家用品", icon: <FaHome /> },
        { name: "電視及其他電器", icon: <FaHome /> },
        { name: "嬰兒及兒童", icon: <FaHome /> },
        { name: "寵物用品", icon: <FaHome /> },
      ],
    },
    {
      title: "其他好務",
      links: [{ name: "哩哩扣扣", icon: <FaBox /> }],
    },
    {
      title: "3C電子",
      links: [
        { name: "電腦及科技產品", icon: <FaLaptop /> },
        { name: "手機及配件", icon: <FaLaptop /> },
        { name: "耳機及錄音音訊設備", icon: <FaLaptop /> },
      ],
    },
    {
      title: "運動休閒",
      links: [
        { name: "相機攝影", icon: <FaCamera /> },
        { name: "體育器材", icon: <FaCamera /> },
        { name: "電玩遊戲", icon: <FaCamera /> },
        { name: "興趣及遊戲", icon: <FaCamera /> },
      ],
    },
  ];

  return (
    <nav className="bg-blue-600 p-4 rounded-b-lg shadow-lg">
      <ul className="flex justify-around">
        {navItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            className="relative group"
          >
            <Link href="#">
              <div className="text-white text-lg font-semibold hover:text-blue-300 transition-all duration-300">
                {item.title}
              </div>
            </Link>
            {item.links.length > 0 && dropdown === item.title && (
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-blue-700 z-10">
                {item.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="flex items-center p-2 hover:bg-blue-200 rounded-lg transition-all duration-300"
                  >
                    <Link href="#">
                      <div className="flex items-center space-x-2">
                        {link.icon}
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CalssifyNavBar;
