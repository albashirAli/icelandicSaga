import { Shield, Sword, Ghost } from "lucide-react"

export default function Themes() {
  return (
    <div className="page-transition">
      <section className="text-center py-12">
        <h1>Key Themes</h1>
        <p className="max-w-3xl mx-auto text-lg text-stone-300">
          The Icelandic sagas explore complex moral and social themes through their narratives of conflict, honor, and
          supernatural justice. Here we examine three central themes that appear throughout these texts.
        </p>
      </section>

      <section className="page-section space-y-16">
        <div className="card flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-stone-700 flex items-center justify-center text-amber-400">
              <Sword size={48} />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2>Violence & Justice</h2>
            <p>
              In the world of the sagas, violence and justice are intimately connected. Without a strong central
              authority, medieval Icelandic society relied on a complex legal system that often culminated in blood feud
              when formal processes failed. The sagas depict a society where legal proceedings and violent retribution
              exist in a delicate balance.
            </p>
            <p>
              Characters frequently navigate between formal legal channels and personal vengeance, with the narrative
              often suggesting that true justice requires both. The assembly (Thing) serves as a forum for dispute
              resolution, but when legal remedies prove inadequate, characters turn to the axe and sword to restore
              balance and honor.
            </p>
            <div className="mt-4 p-4 bg-stone-700/50 rounded-md border-l-4 border-amber-500">
              <p className="italic text-stone-300 m-0">
                "A man whose weapon is bloody must not hide it, but declare the killing at the first house he comes to."
                <span className="block mt-1 text-sm text-stone-400">— Common legal principle in the sagas</span>
              </p>
            </div>
          </div>
        </div>

        <div className="card flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-stone-700 flex items-center justify-center text-amber-400">
              <Shield size={48} />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2>Honor & Retribution</h2>
            <p>
              Honor (drengskapr) stands as perhaps the most crucial value in saga literature. A person's reputation and
              standing within the community determined their social worth, and insults or slights to one's honor
              demanded response. The concept of "face" was paramount—to lose face meant to lose standing in society.
            </p>
            <p>
              The obligation to seek retribution for wrongs done to oneself or one's kin was not merely personal but
              social. Failure to avenge a relative could lead to ostracism and shame. This created cycles of violence
              that could span generations, with each killing demanding another in response.
            </p>
            <div className="mt-4 p-4 bg-stone-700/50 rounded-md border-l-4 border-amber-500">
              <p className="italic text-stone-300 m-0">
                "I shall remind you of these words when you have no wish to remember them."
                <span className="block mt-1 text-sm text-stone-400">— Njáls saga, a promise of future vengeance</span>
              </p>
            </div>
          </div>
        </div>

        <div className="card flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-stone-700 flex items-center justify-center text-amber-400">
              <Ghost size={48} />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2>Supernatural Influence</h2>
            <p>
              The supernatural in the sagas often serves as a reflection of moral and social order. Ghosts, dreams, and
              prophecies frequently appear as harbingers of justice or indicators of moral transgression. The dead may
              return to haunt those who wronged them or to ensure proper vengeance is taken.
            </p>
            <p>
              Dreams and omens provide characters with foreknowledge of coming conflicts, often serving as a narrative
              device to heighten tension but also suggesting a cosmic order that transcends human society. Supernatural
              elements reinforce the idea that justice exists beyond human institutions, in a moral framework that
              encompasses both the living and the dead.
            </p>
            <div className="mt-4 p-4 bg-stone-700/50 rounded-md border-l-4 border-amber-500">
              <p className="italic text-stone-300 m-0">
                "I dreamt that I was standing outside my house, and I looked up at the gable wall, and on the ridge I
                saw a woman sitting. She was wearing a red dress, and I thought she was singing in a loud voice."
                <span className="block mt-1 text-sm text-stone-400">
                  — Gísla saga, a prophetic dream foretelling death
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

