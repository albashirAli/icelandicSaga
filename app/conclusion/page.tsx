import Link from "next/link"
import { FileDown, Code } from "lucide-react"

export default function Conclusion() {
  return (
    <div className="page-transition">
      <section className="text-center py-12">
        <h1>Conclusion & Resources</h1>
        <p className="max-w-3xl mx-auto text-lg text-stone-300">
          Reflecting on the themes and narratives explored in the Icelandic sagas and their relevance to our
          understanding of medieval Norse culture.
        </p>
      </section>

      <section className="page-section">
        <div className="card mb-12">
          <h2>Insights & Reflections</h2>
          <p>
            The Icelandic sagas offer a unique window into a society that balanced on the edge between oral tradition
            and literary culture, between paganism and Christianity, and between individual honor and communal law.
            Through their complex narratives of conflict and resolution, they reveal a society that valued both legal
            procedure and personal honor.
          </p>
          <p>Several key insights emerge from our exploration of these texts:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong className="text-amber-400">Justice as Balance:</strong> The sagas depict justice not as abstract
              principle but as the restoration of social balance. When someone's honor or property is damaged,
              compensation or vengeance restores equilibrium.
            </li>
            <li>
              <strong className="text-amber-400">The Social Nature of Honor:</strong> Honor in saga literature is not
              merely personal virtue but social currency. One's standing in the community depends on maintaining honor
              through appropriate action.
            </li>
            <li>
              <strong className="text-amber-400">Supernatural as Moral Framework:</strong> Supernatural elements in the
              sagas often reinforce moral and social order, suggesting that justice transcends human institutions.
            </li>
            <li>
              <strong className="text-amber-400">Tragedy of Inevitability:</strong> Many sagas present conflict as
              inevitable despite characters' attempts to prevent it, reflecting a worldview that acknowledges the
              limitations of human agency.
            </li>
          </ul>
          <p>
            The question "Why is your axe bloody?" encapsulates the saga world's approach to violence and justice. The
            question implies not that violence is wrong but that it must be acknowledged and justified within social
            norms. The bloody axe is not hidden but declared, making violence part of the social fabric rather than
            outside it.
          </p>
          <p>
            These medieval texts continue to resonate because they explore timeless questions about justice, community,
            and individual responsibility. They remind us that societies have always grappled with balancing personal
            honor and communal peace, formal law and informal justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card flex flex-col">
            <h2 className="flex items-center">
              <FileDown className="mr-2 text-amber-400" size={24} />
              Download The Full Saga!
            </h2>
            <p className="mb-6">
              Download the saga!
            </p>
            <div className="mt-auto">
              <Link
                href="/why-is-your-axe-bloody-research.pdf"
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-amber-700 hover:bg-amber-600 text-stone-100 rounded-md transition-colors"
              >
                <FileDown className="mr-2" size={18} />
                Download PDF (2.4 MB)
              </Link>
              <p className="text-xs text-stone-400 mt-2 text-center">PDF format</p>
            </div>
          </div>

          <div className="card flex flex-col">
            <h2 className="flex items-center">
              <Code className="mr-2 text-amber-400" size={24} />
              Website Source Code
            </h2>
            <p>
              This is where you can find all the files used to build this website. The source code contains all the
              text, images, and design elements you see here.
            </p>
            <p className="mb-6">
              You don't need to know what "GitHub" is - just click the button below if you want to see how this website
              was made. Thanks Loved the Class!
            </p>
            <div className="mt-auto">
              <Link
                href="https://github.com/albashirAli/icelandicSaga"
                target="_blank"
                className="inline-flex items-center justify-center w-full py-3 px-4 border border-amber-500 text-amber-400 hover:bg-amber-500/10 rounded-md transition-colors"
              >
                <Code className="mr-2" size={18} />
                View Website Files
              </Link>
              <p className="text-xs text-stone-400 mt-2 text-center">Hosted on GitHub • Open source</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

