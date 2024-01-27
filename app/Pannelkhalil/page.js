// pages/pannel.js
"use client";
import { useState } from "react";

const items = [
  {
    title: "Strong 4k",
    imageUrl:
      "https://medotopten.com/wp-content/uploads/2022/08/WhatsApp-Image-2023-05-06-at-5.44.29-PM.jpeg",
    color: "red",
    link: "https://backup.ipnetwork.tv/login",
    type: "pannel",
  },
  {
    title: "Delta4k ",
    imageUrl:
      "https://iptvsmart.pro/wp-content/uploads/2022/11/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83-%D8%AF%D9%84%D8%AA%D8%A7-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA-Dlta-IPTV-4K.jpg",
    color: "purple",
    link: "https://cms-dlta4k.net/login.php",
    type: "pannel",
  },
  {
    title: "Dream 4k ",
    imageUrl:
      "https://playstore.ma/4019-medium_default/abonnement-dream-4k-12mois.jpg",
    color: "cyan",
    link: "https://d4kpanel.com/pntv/login.php?referrer=edit_user.php?id=10362888",
    type: "pannel",
  },
  {
    title: "Plus IPTV",
    imageUrl: "https://nawrastv.com/wp-content/uploads/2022/07/plus_iptv.png",
    color: "cyan",
    link: "https://my-reseller.net/res/6ui87th/login.php?ref=dEM9dXNlcmFjdGl2ZQ==",
    type: "pannel",
  },
  {
    title: "Pure Iptv",
    imageUrl:
      "https://image.winudf.com/v2/image1/Y29tLnB1cmVpcHR2b25lLnB1cmVpcHR2aXB0dmJveF9pY29uXzE2NzE4MTYxNTlfMDgz/icon.png?w=184&fakeurl=1",
    color: "cyan",
    link: "https://panel.pure-iptv.com/login",
    type: "pannel",
  },
  {
    title: "Shark IPTV",
    imageUrl: "https://sharkiptvpro.net/wp-content/themes/Shark/img/logo.png",
    color: "cyan",
    link: "https://sharkpanel.com/index",
    type: "pannel",
  },
  {
    title: "Could Iptv",
    imageUrl:
      "https://www.medianews4u.com/wp-content/uploads/2020/11/Cloud-TV-.jpg",
    color: "cyan",
    link: "https://my-reseller.net/res/6ui87th/login.php?ref=dEM9dXNlcmFjdGl2ZQ==",
    type: "pannel",
  },
  {
    title: "Magnum IPTV",
    imageUrl:
      "https://iptvgen.com/wp-content/uploads/2018/05/abonnement-magnum-ott-iptv-4k-12-mois.jpg-300x300.png",
    color: "cyan",
    link: "https://goldenott.net/",
    type: "pannel",
  },
  {
    title: "Captine TV",
    imageUrl: "https://m.media-amazon.com/images/I/51YPQbKaHVL.png",
    color: "cyan",
    link: "https://captintv.xyz/Reseller/login?referrer=lines%3Forder%3D0%26dir%3Ddesc",
    type: "pannel",
  },
  {
    title: "Luxe IPTV",
    imageUrl:
      "https://play-lh.googleusercontent.com/pDzzLOQn32RfdhNA9wsMUKIIC6YFD1LFHk_r7n86sjNleyZqNYCXS_rmckKzBkJ04Eg=w540-h302-rw",
    color: "cyan",
    link: "https://luxeiptv.net/login",
    type: "pannel",
  },
  {
    title: "Play Plus",
    imageUrl:
      "https://cdn6.aptoide.com/imgs/6/0/5/6054c9acd55afd4658db3b6ccdd11ad1_fgraphic.jpg",
    color: "cyan",
    link: "https://cms.playplus.top/play/login.php?referrer=edit_user.php?id=593686",
    type: "pannel",
  },
  {
    title: "XiPTV",
    imageUrl:
      "https://xiptvstore.com/wp-content/uploads/2023/10/XIPTV-logo2-300x300.png",
    color: "cyan",
    link: "https://cms.streamcreed.com/e7999aa4f558/",
    type: "pannel",
  },
  {
    title: "DH Plus",
    imageUrl:
      "https://cdn.salla.sa/ODKpd/tdDlrdiahXuP6GyL9UfLmyyIXz5M56gpM0VbU0Ig.jpg",
    color: "cyan",
    link: "https://dh-iptv.com/iptv/login.php",
    type: "pannel",
  },
  {
    title: "TreX IPTV",
    imageUrl:
      "https://playstore.ma/7348-large_default/abonnement-trex-12mois.jpg",
    color: "cyan",
    link: "https://activationpanel.net/login",
    type: "pannel",
  },
  {
    title: "EAGLE IPTV",
    imageUrl:
      "https://yt3.googleusercontent.com/luRH9l8T_nHkybhGvMDmB1WKWfDTUcmsKqd61UcCMASuOlsBfgsE1o0aEWcWVMT1cL301qWw=s900-c-k-c0x00ffffff-no-rj",
    color: "cyan",
    link: "https://eagleiptv.cc/pntv/login.php?referrer=users.php",
    type: "pannel",
  },
  {
    title: "Ibo Player Pro",
    imageUrl:
      "https://images.sftcdn.net/images/t_app-icon-m/p/8e2756d4-94be-4a16-8c42-2c1400771abc/575361715/ibo-player-pro-logo",
    color: "cyan",
    link: "https://cms.iboproapp.com/auth/login",
    type: "activation",
  },
  {
    title: "Ibosol",
    imageUrl: "https://ibosol.com/static/media/new-logo.5d9c3bf5.png",
    color: "cyan",
    link: "https://ibosol.com/#/",
    type: "activation",
  },
  {
    title: "ARC player",
    imageUrl:
      "https://play-lh.googleusercontent.com/zYTOodlHXJOakW3ZhXwes4hrpwhLCej94nAX2JB1307O4KPGY5WTB71ZBkpJ01BIjA",
    color: "cyan",
    link: "https://arcplayer.com/reseller",
    type: "activation",
  },
  {
    title: "Iptv Sold",
    imageUrl:
      "https://iptvsold.com/iptvsold_n/app-assets/img/gallery/iptvsold.png",
    color: "cyan",
    link: "https://iptvsold.com/",
    type: "multi",
  },
  {
    title: "Dragon Sat",
    imageUrl:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-purple-dragon-jaime-enriquez.jpg",
    color: "cyan",
    link: "https://dragon-sat.com/index.php",
    type: "multi",
  },
];

const PannelPage = () => {




  // Render the content for authenticated users
  const [activeTab, setActiveTab] = useState("pannel");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-200/50 p-5">
        <div className="font-mono font-bold text-lg">Pannel List:</div>

        <a
          onClick={() => {
            // Handle logout logic here
            // You may want to clear authentication tokens, etc.
            console.log("Logout button clicked");
          }}
          href="http://localhost:3000/auth"
          className="bg-red-500/80 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Logout
        </a>
      </div>
      <div>
        <div className="flex justify-center space-x-4 p-5 bg-black/90">
          <button
            onClick={() => handleTabChange("pannel")}
            className={`py-2 px-4 ${
              activeTab === "pannel"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-md focus:outline-none focus:ring focus:border-indigo-300`}
          >
            Pannel
          </button>
          <button
            onClick={() => handleTabChange("activation")}
            className={`py-2 px-4 ${
              activeTab === "activation"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-md focus:outline-none focus:ring focus:border-indigo-300`}
          >
            Activation
          </button>
          <button
            onClick={() => handleTabChange("multi")}
            className={`py-2 px-4 ${
              activeTab === "multi"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-md focus:outline-none focus:ring focus:border-indigo-300`}
          >
            Multi Pannel
          </button>
        </div>

        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          {items
            .filter((item) =>
              activeTab === "pannel"
                ? item.type === "pannel"
                : activeTab === "activation"
                ? item.type === "activation"
                : item.type === "multi"
            )
            .map((item, index) => (
              <li key={index} className="relative flex flex-col items-start">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-[300px] xl:w-full"
                />
                <div>
                  <h3
                    className={`mb-1 text-slate-900 font-semibold  text-${item.color}-500`}
                  >
                    <span className="mb-1 block text-sm leading-6">
                      {item.title}
                    </span>
                  </h3>
                  <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                    {/* Description goes here if needed */}
                  </div>
                  <a
                    className={`group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-indigo-600 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6`}
                    href={item.link}
                  >
                    Access to pannel
                    <span className="sr-only">{`, ${item.title}`}</span>
                    <svg
                      className={`overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400`}
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PannelPage;
