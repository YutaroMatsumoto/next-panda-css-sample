import { circle } from "@/styled-system/patterns";

/**
 * stackパターンのラッパー
 * directionプロパティが固定。
 * flex-direction: row;
 */
export default function CirclePage() {
  return <div className={circle({ size: 12, bg: "red.300" })}></div>;
}
