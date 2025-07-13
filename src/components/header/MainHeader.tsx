"use client";
import { ChevronDown, Filter, LoaderCircle, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Triangle } from "../Triangle/Triangle";
import Link from "next/link";
import { NavbarItems } from "./NavbarItems";

const SearchResponse = {
  inPanel: [
    {
      link: "account/info?tab=CompanyInformation",
      category: "Profil",
      title: "Kep",
    },
    {
      link: "account/info?tab=CompanyInformation",
      category: "Profil",
      title: "Kep Adresi",
    },
  ],
  offPanel: [
    {
      link: "https://akademi.trendyol.com/satici-bilgi-merkezi/detay/359",
      description:
        "\nKEP (Kayıtlı Elektronik Posta), yasal olarak geçerli ve teknik olarak güvenli elektronik posta o...",
      title: "KEP Adresi Nasıl Alınır?",
    },
    {
      link: "https://akademi.trendyol.com/satici-bilgi-merkezi/detay/359",
      description:
        "Bu içeriğimizde, yasal olarak geçerli ve güvenli iletişimin anahtarı olan KEP adresini nasıl alab...",
      title: "KEP Adresi Nasıl Alınır?",
    },
    {
      link: "https://akademi.trendyol.com/satici-bilgi-merkezi/detay/371",
      description:
        "Bu içeriğimizde, Trendyol E-Faturam aktivasyon sürecine dair adım adım talimatları bulabilirsiniz...",
      title: "e-Dönüşüm Sovos Aktivasyon Aşamaları",
    },
  ],
};

interface IText {
  text: string;
}

interface ISearchResponse {
  header: string;
  text: IText[];
}

export const MainHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isSearchBoxOpen, setSearchBoxOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [FilteredSearchResponse, setFilteredSearchResponse] = useState<any>([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, Math.random() * 2 * 1000);
  }, [text]);

  return (
    // Bu div, md breakpoint'ının altında gizlenecek
    <div className="hidden md:block w-full bg-header h-[60px]">
      <div className="pl-6 pr-6 flex items-center justify-between h-[100%] space-x-10">
        <div className="flex items-center space-x-10">
          <h2 className="text-gray-100 text-2xl font-mono">Mashoor</h2>

          <div className="flex items-center space-x-6 text-[0.80rem] h-[100%] font-bold">
            {NavbarItems.map((x, key) => (
              <button
                className={`flex items-center space-x-0.5 relative cursor-pointer ${
                  selectedMenu === x.text ? "text-gray-50" : "text-gray-400"
                }`}
                onClick={() => setSelectedMenu(x.text)}
                key={key}
              >
                <h2>{x.text}</h2>
                <ChevronDown className="w-4 h-4" />

                {selectedMenu === x.text && (
                  <div className="bg-white rounded-bl-md rounded-br-md absolute left-[50%] translate-x-[-50%] w-[25vh] top-[40px] z-[100] flex flex-col items-center  text-black">
                    {selectedMenu === x.text && <Triangle />}
                    <div className="w-[100%] h-[100%] relative">
                      {x.subItem.map((y, key) => (
                        <div
                          className="text-[0.89rem] text-gray-600 flex w-[100%] pt-3 pb-3 items-center hover:bg-gray-200 border-b-gray-400 border-b-[1px]"
                          key={key}
                        >
                          <div className="flex items-center pl-4 pr-4 space-x-2">
                            <Link
                              href={y.href || "/"}
                              className="w-[100%] text-start"
                            >
                              {y.text}
                            </Link>
                            {y.isNew && (
                              <h2 className="bg-pink-700 text-white pl-0.5 pr-0.5 rounded-sm text-[0.7rem]">
                                {" "}
                                Yeni{" "}
                              </h2>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center relative">
          {!isSearchBoxOpen ? (
            <div
              className={`bg-gray-100/10 w-10 h-10 text-gray-400 flex items-center justify-center rounded-full self-end cursor-pointer`}
              onClick={() => setSearchBoxOpen(true)}
            >
              <Search />
            </div>
          ) : (
            <div className="relative">
              <input
                type="text"
                placeholder="Size nasıl yardımcı olabiliriz ?"
                className="bg-gray-100/10 focus:outline-none text-gray-300 text-[0.80rem] font-bold pl-4 pt-2 pb-2 rounded-sm w-[350px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              {isLoading ? (
                <LoaderCircle className="right-2 top-[50%] translate-y-[-50%] absolute text-gray-400 animate-spin" />
              ) : (
                <Search className="right-2 top-[50%] translate-y-[-50%] absolute text-gray-400" />
              )}
            </div>
          )}

          {isSearchBoxOpen && (
            <div className="bg-white w-[100%] min-h-[10vh] absolute max-h-[30vh] overflow-hidden overflow-y-scroll top-[50px] rounded-bl-md rounded-br-md z-[100]">
              <Triangle />
              <div
                className="flex flex-col space-y-1.5 pt-2 pl-2 pr-2 text-[0.89rem]"
                key={text}
              ></div>
            </div>
          )}
        </div>
      </div>
      {(selectedMenu !== "" || isSearchBoxOpen) && (
        <div
          className="h-[100vh] top-[90px] bg-black/40 fixed left-0 z-[99] w-[100%]"
          onClick={() =>
            isSearchBoxOpen ? setSearchBoxOpen(false) : setSelectedMenu("")
          }
        >
          {" "}
        </div>
      )}
    </div>
  );
};
