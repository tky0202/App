import type { Metadata } from "next";
import Map from '../../../components/Map';

export const metadata: Metadata = {
  title: "電車スポット - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "管理人がiPhoneで撮影した電車をGoogle Mapにアップロードしています。良ければお出かけの参考にしてください。",
};

export default function Page() {
  return (
    <>
      <Map />
    </>
  );
}