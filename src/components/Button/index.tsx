"use client";
import { styled } from "@/styled-system/jsx";

export const Button = () => {
  return (
    <styled.button onClick={() => console.log("click")} bg="blue.500">
      サンプルボタン
    </styled.button>
  );
};
