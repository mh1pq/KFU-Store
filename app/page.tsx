import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-6 text-center">

      <h1 className="text-5xl font-bold text-blue-800 mb-6 drop-shadow-sm">
        متجر طلاب جامعة الملك فيصل
      </h1>

      <p className="text-gray-700 text-xl max-w-2xl leading-relaxed mb-10">
        منصة آمنة وسهلة لبيع وشراء المنتجات الجديدة والمستعملة بين طلاب جامعة الملك فيصل.
        تواصل مباشرة مع الطلاب داخل الجامعة، وابدأ البيع والشراء بكل سهولة.
      </p>

      <div className="flex gap-6">
        <a
          href="/auth/signup"
          className="bg-blue-700 text-white px-8 py-3 rounded-xl text-xl shadow-md hover:bg-blue-800 transition"
        >
          تسجيل جديد
        </a>

        <a
          href="/auth/login"
          className="bg-white text-blue-700 border border-blue-700 px-8 py-3 rounded-xl text-xl shadow-md hover:bg-blue-50 transition"
        >
          تسجيل دخول
        </a>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        مشروع طلابي — جامعة الملك فيصل
      </footer>
    </main>
  )
}
