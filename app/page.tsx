import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="page-transition">
      <section className="flex flex-col items-center justify-center text-center py-12 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Why is Your Axe Bloody?</h1>
        <div className="w-24 h-1 bg-amber-500 mb-8"></div>
        <p className="text-xl md:text-2xl max-w-3xl text-stone-300 mb-10">
          Exploring justice, honor, and vengeance in medieval Icelandic sagas
        </p>
        <div className="relative w-full max-w-4xl h-64 md:h-96 mb-12">
          <Image
            src="/coldMountains.png"
            alt="Medieval Icelandic landscape with mountains and mist"
            fill
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </div>
      </section>

      <section className="page-section">
        <div className="card">
          <h2>About This Project</h2>
          <p>
          William Ian Miller's “Why is Your Axe Bloody?” is a deep, personal reading of Njáls saga, exploring how this iconic Icelandic saga portrays violence, justice, honor, and the supernatural
          . Miller highlights the saga's realistic and “tough-minded” analysis of blood-feud and law 
          , showing that beneath the vivid storytelling lie pragmatic social insights. Below, we break down the work's key themes, 
          case studies from the saga, and Miller's insights and reflections on how sagas handle violence and honor alongside legal 
          and otherworldly dimensions.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/themes"
              className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-600 text-stone-100 rounded-md transition-colors"
            >
              Explore Key Themes <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3>Key Themes</h3>
          <p>
            Discover the central concepts that drive the narrative and moral framework of the Icelandic sagas, from
            violence and justice to honor and the supernatural.
          </p>
          <Link href="/themes" className="inline-flex items-center">
            Learn more <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
        <div className="card">
          <h3>Case Studies</h3>
          <p>
            Examine specific sagas in detail, including Njáls saga and Grettis saga, to understand how these themes
            manifest in some of the most celebrated works of medieval literature.
          </p>
          <Link href="/case-studies" className="inline-flex items-center">
            Learn more <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

