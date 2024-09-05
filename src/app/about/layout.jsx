import AboutNavigation from "@/components/shared/aboutNvigation";
import MailForm from "@/components/shared/mailForm";

export default function AboutLayout({ children }) {
    return (
        <main className="w-full pt-10 pb-20 px-5 lg:px-10 flex">
            <AboutNavigation/>
            {children}
        </main>
  )}