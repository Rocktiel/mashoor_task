"use client";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  MessageSquareText,
  Store,
  Search,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarItems } from "./NavbarItems";
export const ToolbarHeader = () => {
  const [isUserMobileMenu, setUserMobileMenuOpen] = useState(false);
  const [isMobileMenu, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleUserMobileMenu = () => {
    setUserMobileMenuOpen(!isUserMobileMenu);
    setSearchActive(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenu);
    setSearchActive(false);
  };

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
    setUserMobileMenuOpen(false);
    setMobileMenuOpen(false);
  };
  const handleSubMenuToggle = (menuText: string) => {
    setOpenSubMenu(openSubMenu === menuText ? null : menuText);
  };
  return (
    <div className="w-full h-[60px] bg-toolbar text-gray-300 md:h-[30px] border-b-gray-600 border-b-[0.3px]">
      <div className="hidden md:flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4 text-[0.80rem] text-gray-400">
          <Link href={"#"}> Satıcı Paneli </Link>
          <Link href={"#"}> Satıcı Bilgi Merkezi </Link>
          <Link href={"#"}> Mashoor Akademi </Link>
          <Link href={"#"}>Entegrasyon Dökümanı</Link>
        </div>

        <div className="flex items-center space-x-6 text-[0.80rem] text-gray-400 font-bold">
          <button className="flex items-center space-x-1 cursor-pointer">
            <div className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-[-1px] right-[-1px] w-2 h-2 rounded-full bg-pink-700"></span>
            </div>
            <span>Duyurularım</span>
          </button>
          <button className="flex items-center space-x-2 cursor-pointer">
            <CalendarDays className="w-4 h-4" /> <span>Takvim</span>
          </button>
          <button className="flex items-center space-x-2 cursor-pointer">
            <MessageSquareText className="w-4 h-4" /> <span>Destek</span>
          </button>
          <button className="flex items-center space-x-2 cursor-pointer">
            <Store className="w-4 h-4" /> <span>Mağazaya Git</span>
          </button>
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleUserMobileMenu}
          >
            <CircleUserRound className="w-4 h-4" /> <span>Büşra moda </span>{" "}
            <ChevronDown />
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between h-full px-4">
        {!isSearchActive && (
          <h2 className="text-gray-100 text-2xl font-mono">Mashoor</h2>
        )}

        {isSearchActive ? (
          <div className="flex flex-1 items-center space-x-2">
            <input
              type="text"
              placeholder="Size nasıl yardımcı olabiliriz?"
              className="flex-1 bg-gray-100/10 focus:outline-none text-gray-300 text-sm font-medium pl-4 pt-2 pb-2 rounded-sm"
            />
            <button
              onClick={() => setSearchActive(false)}
              className="text-gray-400 font-medium text-sm"
            >
              Vazgeç
            </button>
          </div>
        ) : (
          // Normal mobil ikonlar
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-gray-400">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-gray-400">
              <Bell className="w-5 h-5" />
              <span className="absolute top-[-2px] right-[-2px] w-4 h-4 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                26
              </span>
            </button>
            <button onClick={toggleUserMobileMenu} className="text-gray-400">
              <CircleUserRound className="w-5 h-5" />
            </button>
            <button onClick={toggleMobileMenu} className="text-gray-400">
              {isUserMobileMenu || isMobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        )}
      </div>

      {isUserMobileMenu && (
        <div
          className="absolute  inset-0 bg-black/20 z-50 "
          onClick={toggleUserMobileMenu}
        >
          <div
            className="fixed  right-0 top-15 md:top-8 md:rounded-lg md:right-5 h-full w-full md:w-65 md:h-85 md:text-xs md:font-medium  bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 pb-4 ">
              <div className="flex items-center mb-2">
                <img
                  src="/trendyol-seeklogo.svg"
                  alt="Trendyol Logo"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-800">BÜŞRA MODA HOUSE</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    (1097831){" "}
                  </div>
                  <span className=" text-amber-500 text-xs flex items-center">
                    <span className="mr-1">&#9654;</span>
                    <button className="cursor-pointer underline">
                      Satıcı Puanı Nedir?
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <nav>
              <ul>
                <li className="py-3  border-gray-200 hover:bg-gray-300 rounded-lg px-3 active:bg-gray-200 ">
                  <Link
                    href="#"
                    className="flex justify-between items-center text-gray-700 "
                  >
                    Hesap Bilgileri{" "}
                  </Link>
                </li>
                <li className="py-3  border-gray-200 hover:bg-gray-300 rounded-lg px-3  active:bg-gray-200">
                  <Link
                    href="#"
                    className="flex justify-between items-center text-gray-700 "
                  >
                    Kullanıcı Yönetimi{" "}
                  </Link>
                </li>
                <li className="py-3  border-gray-200 hover:bg-gray-300 rounded-lg px-3  active:bg-gray-200">
                  <Link
                    href="#"
                    className="flex justify-between items-center text-gray-700 "
                  >
                    Ticari Şartlar{" "}
                  </Link>
                </li>
                <li className="py-3  border-gray-200 hover:bg-gray-300 rounded-lg px-3  active:bg-gray-200">
                  <Link
                    href="#"
                    className="flex justify-between items-center text-gray-700 "
                  >
                    Platform Kuralları{" "}
                  </Link>
                </li>

                <li className="py-3 hover:bg-gray-300 rounded-lg px-3">
                  <Link
                    href="#"
                    className="flex justify-between items-center text-gray-700 hover:text-orange-700"
                  >
                    Çıkış Yap
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {isMobileMenu && (
        <div
          className="absolute  inset-0 bg-black/20 z-50 md:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed  right-0 top-15  h-full w-full  bg-white shadow-lg px-4 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="overflow-y-auto scrollbar-hide h-[calc(100vh-200px)]">
              <ul>
                {NavbarItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => handleSubMenuToggle(item.text)}
                      className="w-full flex justify-between items-center py-3 text-gray-700 hover:text-orange-500 font-medium"
                    >
                      {item.text}
                      {openSubMenu === item.text ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {openSubMenu === item.text && item.subItem && (
                      <ul className="pl-4 py-2 bg-gray-50">
                        {item.subItem.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href || "#"}
                              className="flex items-center py-2 text-gray-600 hover:text-orange-500 text-sm"
                            >
                              {subItem.text}
                              {subItem.isNew && (
                                <span className="bg-pink-700 text-white text-[0.7rem] px-1 py-0.5 ml-2 rounded-sm">
                                  Yeni
                                </span>
                              )}
                            </Link>

                            {subItem.subItem && (
                              <ul className="pl-4">
                                {subItem.subItem.map(
                                  (subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      <Link
                                        href={subSubItem.href || "#"}
                                        className="flex items-center py-2 text-gray-600 hover:text-orange-500 text-xs"
                                      >
                                        {subSubItem.text}
                                        {subSubItem.isNew && (
                                          <span className="bg-pink-700 text-white text-[0.7rem] px-1 py-0.5 ml-2 rounded-sm">
                                            Yeni
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Alt Butonlar */}
            <div className="absolute bottom-24 left-4 right-4 flex space-x-2">
              <button className="flex-1 bg-purple-600 text-white py-2 rounded-md font-semibold">
                Trendyol Akademi
              </button>
              <button className="flex-1 bg-gray-700 text-white py-2 rounded-md font-semibold">
                Destek
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
