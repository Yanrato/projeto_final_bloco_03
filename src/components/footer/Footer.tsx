import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"
import { XLogoIcon } from "@phosphor-icons/react/dist/ssr"

function Footer() {
    return (
        <main className="bg-brand-600 h-full text-white grid md:flex md:justify-between py-5">
            <div className="px-6 text-xs md:text-base">
                <h2 className="font-bold">
                    © 2026 Farmácia Vida Leve.
                </h2>
                <p> Esta empresa e todas as informações são fictícias e criadas exclusivamente para fins educacionais.</p>
            </div>

            <div className="flex md:px-10 gap-3 justify-center py-3">
                <FacebookLogoIcon size={30} weight="fill" className="hover:animate-bounce"/>
                <InstagramLogoIcon size={30} weight="fill" className="hover:animate-bounce"/>
                <XLogoIcon size={30} weight="fill" className="hover:animate-bounce"/>
                <LinkedinLogoIcon size={30} weight="fill" className="hover:animate-bounce"/>
                <YoutubeLogoIcon size={30} weight="fill" className="hover:animate-bounce"/>
            </div>
        </main>

    )
}

export default Footer