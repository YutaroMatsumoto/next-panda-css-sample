import { hstack } from "@/styled-system/patterns";

/**
 * stackパターンのラッパー
 * directionプロパティが固定。
 * flex-direction: row;
 */
export default function HstackPage() {
  return (
    <main>
      <div className={hstack({ gap: "6" })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </main>
  );
}
