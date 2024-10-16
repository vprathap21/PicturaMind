import { Github,  } from "lucide-react"
export const Footer = () => {
    return (
        <footer className="container mx-auto p-4 text-center  text-blue-400">
        <div className="flex items-center gap-2 justify-center">
          Made with ❤️ by{"  "}
          <a
            href="https://github.com/vprathap21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prathap
            
          </a>
          <a
              href="https://github.com/vprathap21/PicturaMind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <Github className="h-6 w-6" />
          </a>
          <meta property="twitter:image" content="Twitter link preview image URL"></meta>
          
          </div>
      </footer>
    );
}