"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "../../i18n/routing";

export function LanguageSwitcher({ className = "" }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale = params.locale || "en";

  const switchLanguage = (newLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className={`flex gap-4 items-center font-medium ${className}`}>
      <button
        onClick={() => switchLanguage("en")}
        disabled={isPending}
        className={`transition-colors ${
          currentLocale === "en"
            ? "text-[#df352c] font-bold"
            : "hover:text-[#df352c]"
        } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}>
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => switchLanguage("ar")}
        disabled={isPending}
        className={`transition-colors ${
          currentLocale === "ar"
            ? "text-[#df352c] font-bold"
            : "hover:text-[#df352c]"
        } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}>
        AR
      </button>
    </div>
  );
}
