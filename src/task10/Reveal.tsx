import { Box } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";

// 画面内に入ったら、中身を「ふわっと」表示させるための入れ物コンポーネント。
// <Reveal>...</Reveal> で囲むだけで、その部分にスクロール演出が付きます。
type RevealProps = {
  children: ReactNode; // 演出をかけたい中身
  delay?: number; // 表示を少し遅らせたいときのミリ秒（任意）
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  // 監視したいDOM要素を覚えておくための箱
  const ref = useRef<HTMLDivElement | null>(null);
  // すでに表示済みかどうか（true になったら見える）
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver に対応していない環境ではそのまま表示
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // 要素が画面内に入ったら表示する
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect(); // 一度出たら監視をやめる
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    // 安全策：何らかの理由で監視が効かない環境でも、
    // 一定時間たったら必ず表示する（内容が消えたままにならないように）
    const fallback = window.setTimeout(() => {
      setShown(true);
      observer.disconnect();
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        // 表示前は透明＆少し下げておき、表示後に元の位置へ戻す
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
};

export default Reveal;
