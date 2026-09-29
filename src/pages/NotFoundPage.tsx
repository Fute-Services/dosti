import { Link } from "react-router-dom";
import GlassWrapper from "../components/GlassWrapper";
import FullPageLayout from "../components/FullPageLayout";

interface NotFoundPageProps {
  title?: string;
  message?: string;
  buttonText?: string;
  redirectTo?: string;
}

const BG_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=70";

export default function NotFoundPage({
  title = "404",
  message = "Oops! The page you're looking for doesn't exist.",
  buttonText = "GO HOME",
  redirectTo = "/",
}: NotFoundPageProps) {
  return (
    <FullPageLayout background={BG_IMAGE}>
      <GlassWrapper className="w-full h-screen p-10 text-center flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          {title}
        </h1>

        <p className="text-xl text-gray-900 mb-6">
          {message}
        </p>

        <Link to={redirectTo}>
          <button
            className="
              px-6 py-3
              bg-white/30
              border border-white/40
              rounded-2xl
              text-gray-900
              font-semibold
              hover:bg-white/50
              hover:scale-105
              transition-all duration-300
            "
          >
            {buttonText}
          </button>
        </Link>
      </GlassWrapper>
    </FullPageLayout>
  );
}
