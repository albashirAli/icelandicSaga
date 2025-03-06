import { Shield, Sword, Ghost, Hammer, Scale } from "lucide-react"

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
              <Scale size={48} />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2>Violence & Feud</h2>
            <p>
            Miller examines the cyclical blood-feud violence in Njáls saga, especially the chain of killings sparked by the women Hallgerðr and Bergþóra. 
            He introduces a “balanced-exchange model” to explain the logic of feud: each killing or injury demands a counter, either through retaliation or compensation. 
            Violence in the saga is thus depicted as part of an attempt to restore balance between opposing sides rather than random brutality. 
            However, Miller notes that this balance often proves illusory - feuds tend to escalate, revealing that “'getting even' usually implies overcoming your 
            enemies rather than achieving a true balance”. In other words, saga violence is shown as self-perpetuating once honor is at stake.
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
              <Sword size={48} />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2>Justice & Law</h2>
            <p>
            Alongside the bloodshed, Njáls saga places heavy emphasis on legal justice and compensation. Miller highlights how the saga's characters use the formal legal system 
            (the Althing assembly, mediators, fines) to settle killings with monetary compensation or settlements. Yet there is a tension: while payment in money can resolve disputes
            on the surface, it may not fully satisfy the injured party's honor. Miller observes that in the feud culture, blood was seen as a more “trustworthy” currency than silver for settling a score. 
            This reflects a cultural belief that true justice for a grave insult or injury might require violence (blood-for-blood) rather than legal bargains. The saga, through Miller's reading, pragmatically 
            showcases both the use of law (to contain conflict) and its limits - eventually, legal resolutions often break down, and feud violence resumes. Notably, Miller's analysis shows Njáls saga itself is 
            critical of simplistic justice: the author demonstrates the contradictions of the feud system, perhaps suggesting that neither law nor blood alone can fully solve the cycle.
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
            Underlying both violence and legal action in the saga is the code of honor. Maintaining one's honor and avenging any insult is a driving 
            force for characters. Miller's “balanced-exchange” feud model is essentially about honor accounting: each side seeks to “get even” to restore honor equilibrium. 
            However, as he notes, the saga's author subtly critiques this—what is supposed to be balance often turns into a quest to outdo the enemy. Thus, honor in the saga 
            can be double-edged: it motivates courageous action and loyalty, but also fuels endless revenge. Miller points out instances where a settlement (paying fines) could 
            satisfy honor if both parties agree, but more often distrust and pride lead characters to prefer lethal payback. The saga therefore presents a complex view of honor: 
            it's an esteemed value that can uphold social order, but an “overly restrictive ideal of masculinity” based on honor can spiral minor slights into destructive bloodshed. 
            Miller's reading underscores how Njáls saga navigates this tension, depicting honor-driven violence with a critical eye.
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
            While primarily realistic, Njáls saga does include omens, prophecies, and paranormal hints (for example, prophetic dreams or the sorcerer Svanr). Miller's text interprets these supernatural elements in a distinctive way.
             He questions the genuineness of Njáll's prophetic powers, suggesting that Njal is less a mystical seer and more a shrewd “script-writer” who understands people and can predict outcomes through common sense. 
             In Miller's view, the saga's author deliberately keeps the supernatural ambiguous. Many seemingly prophetic moments (Njáll's predictions, or Svanr's witchcraft) are given mundane explanations or remain open 
             to doubt. This reflects a saga ethos where magic and fate are present but not overemphasized; human agency and savvy often prevail. Miller emphasizes that Njáls saga treats the paranormal skeptically -
            visions and curses exist, but the narrative often “disenchants” them by showing they could be products of keen intuition or coincidence. This ambiguity allows the saga to appeal to both a belief in fate 
            and a practical understanding of reality. In short, Miller interprets the saga's supernatural aspects as subtle narrative devices rather than firm assertions of magic.
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

