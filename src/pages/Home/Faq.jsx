import React from "react";
import Questions from "../../components/Question";
const Faq = () => {
  let faqs = [
    {
      question: "What is Metamask?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
    {
      question: "How to mint with Metamask on a mobile phone?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
    {
      question: "How to mint with Metamask on a computer?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
    {
      question: "Buying NFT for the first time?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
    {
      question: "Where does my NFT go after I purchase?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
  ];
  return (
    <>
      <div className="bg-[#1B1716] md:pt-28 md:pb-28 pt-10 pb-8">
        <div className="container mx-auto 2xl:px-0 px-4 xl:max-w-[1200px] w-full">
          <h1 className="text-white md:text-[44px] text-[22px] font-normal eb uppercase">
            Frequently asked questions
          </h1>
          <p className="lg:max-w-[1022px] w-full opacity-70 text-[#C9C8C8] md:text-[23px] text-base font-normal lg:leading-[34.50px] mt-3 mb-6">
            NFTs can be generated through the deployment of smart contracts. NFT
            marketplaces such as OpenSea, x2y2 and Magic Eden make the NFT
            creation process more user-friendly
          </p>
          <div className="w-full space-y-2 md:border-t md:border-white md:border-opacity-10">
            {faqs.map((data) => {
              return (
                <div key={Math.random(1000)}>
                  <Questions
                    question={data.question}
                    answer={data.answer}
                    height={data.height}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
