import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-8  lg:px-12 my-12 md:px-32">
        <div className="h-96 col-span-12 p-4 text--bace text-center bg-white dark:bg-dark-500 lg:col-span-3  rounded-2xl shadow-custom-light dark:shadow-custom-black">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-black">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
