import React, { useEffect, useState } from "react";
import {
  OrderHistoryCounterOverlay,
  OrderHistoryCounterWord,
} from "./OrderHistoryCounter.style";
import { LanguageCode, OrderHistoryLocales } from "db/constants";

interface OrderHistoryCounterProps {
  onExpire: () => void;
  resetTimer: boolean;
  selectedLanguage: LanguageCode;
}

const OrderHistoryCounter: React.FC<OrderHistoryCounterProps> = ({ onExpire, resetTimer, selectedLanguage }) => {
  const [count, setCount] = useState(10);
  const orderHistoryLocale = OrderHistoryLocales[selectedLanguage];

  useEffect(() => {
    if (resetTimer) {
      setCount(10);
    }
  }, [resetTimer]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onExpire]);

  return (
    <OrderHistoryCounterOverlay>
      <OrderHistoryCounterWord>{orderHistoryLocale.countDown} {count}...</OrderHistoryCounterWord>
    </OrderHistoryCounterOverlay>
  );
};

export default OrderHistoryCounter;
