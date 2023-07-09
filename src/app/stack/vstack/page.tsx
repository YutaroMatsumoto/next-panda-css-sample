import { vstack } from "@/styled-system/patterns";

/**
 * stackパターンのラッパー
 * directionプロパティが固定。
 * flex-direction: column;
 */
export default function VstackPage() {
  return (
    <main>
      <div className={vstack({ gap: "6" })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </main>
  );
}
