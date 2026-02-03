"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really? Think again anta!",
      "Dayavittu? 🥺",
      "Dayavittu please?",
      "With chocolates anta?",
      "What if I bring you flowers anta?",
      "Come on, Niharika! Beda heenge maadbedu!",
      "You're breaking my heart 💔",
      "Aadre... aadre... 🥺",
      "I promise to make you smile maadteeni!",
      "Dayavittu say yes!",
      "Beda kelkollo haange maadbedu!",
      "DAYAVITTU! 🙏",
      "My heart can't take this innu!",
      "Last chance idu... 😢",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-pink-600">
            YAAAY! 💕 Thank you, Niharika! You just made my day! 🌹✨
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl font-bold text-red-600">
            Niharika, will you be my Valentine? 💝
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
