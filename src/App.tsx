"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicks, setYesClicks] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const yesConfirmations = [
  "Yes",
  "Are you sure?",
  "Sorry I was vacuuming and missed what you said",
  "One more time? I am hard of hearing sorry",
];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With Graham Central Station on top",
      "What about a Gute Leute latte",
      "PLEASE SNOOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to aj's ghost",
      "please baby",
      ":((((",
      "PRETTY PLEASE",
      "RIP",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
              <button
  onClick={() => {
    if (yesClicks < yesConfirmations.length - 1) {
      setYesClicks(prev => prev + 1);
    } else {
      setAccepted(true);
    }
  }}
>
  {yesConfirmations[yesClicks]}
</button>

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
