// src/app/works/page.tsx
import LayoutClientWrapper from "../LayoutClientWrapper";
import { HeroSlider } from "../../components/HeroSlider";

export default function WorksPage() {
  return (
    <LayoutClientWrapper>
      <main className="ml-24 pt-24">
        <h1>Halaman Works</h1>
        <p>Di sini akan ditampilkan daftar proyek atau hasil karya perusahaan.</p>
        {/* Anda bisa tambahkan komponen lain di sini, misalnya galeri foto atau portofolio */}
      </main>
    </LayoutClientWrapper>
  );
}