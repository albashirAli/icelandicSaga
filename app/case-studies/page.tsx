import Image from "next/image"

export default function CaseStudies() {
  return (
    <div className="page-transition">
      <section className="text-center py-12">
        <h1>Case Studies</h1>
        <p className="max-w-3xl mx-auto text-lg text-stone-300">
          Examining specific sagas provides insight into how themes of justice, honor, and vengeance manifest in
          medieval Icelandic literature. Here we explore two of the most significant sagas.
        </p>
      </section>

      <section className="page-section space-y-16">
        <div className="card">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h2>Njáls saga</h2>
              <h3 className="text-amber-400 mt-0">Legal Disputes and Vengeance</h3>
              <p>
                Often considered the greatest of the Icelandic sagas, Njáls saga (also known as Brennu-Njáls saga or
                "The Story of Burnt Njál") presents a complex narrative of legal disputes, vengeance, and the
                consequences of honor-based conflict. Written in the late 13th century, it chronicles events from the
                late 10th to early 11th centuries.
              </p>
              <p>
                The saga centers on the lawyer Njál Þorgeirsson, his friend Gunnar Hámundarson, and their families.
                Despite Njál's legal wisdom and Gunnar's martial prowess, both men fall victim to cycles of vengeance
                that they cannot escape. The saga demonstrates how even the most prudent characters become entangled in
                blood feuds when honor is at stake.
              </p>
              <p>Key themes in Njáls saga include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The tension between legal process and violent retribution</li>
                <li>The role of women in inciting vengeance through verbal goading</li>
                <li>The inevitability of fate despite human attempts to prevent violence</li>
                <li>The transition from paganism to Christianity in Iceland</li>
              </ul>
              <p>
                The climax of the saga—the burning of Njál and his family in their home—represents one of the most
                powerful scenes in medieval literature, illustrating how violence can escalate beyond all proportion
                when honor and vengeance drive human actions.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative w-full h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Illustration depicting a scene from Njáls saga"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="relative w-full h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Illustration depicting Grettir the Strong"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 order-1 lg:order-2">
              <h2>Grettis saga</h2>
              <h3 className="text-amber-400 mt-0">Heroism, Exile, and Conflict</h3>
              <p>
                Grettis saga follows the life of Grettir Ásmundarson, a powerful but troubled hero who spends much of
                his life as an outlaw. Composed in the early 14th century, the saga explores the tension between
                individual strength and societal norms, as well as the psychological toll of isolation.
              </p>
              <p>
                Grettir embodies both heroic virtues and tragic flaws. His exceptional strength allows him to defeat
                monsters and supernatural beings that threaten the community, yet his pride and quick temper lead to his
                outlawry and eventual downfall. As an outlaw, he exists on the margins of society, highlighting the
                importance of community in medieval Icelandic culture.
              </p>
              <p>Key themes in Grettis saga include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The ambiguous nature of heroism and strength</li>
                <li>The psychological effects of isolation and outlawry</li>
                <li>The role of supernatural beings as manifestations of social disorder</li>
                <li>The conflict between individual agency and fate</li>
              </ul>
              <p>
                Grettir's battles with the undead draugr Glámr and the mound-dwelling Kárr the Old represent some of the
                most vivid supernatural encounters in saga literature. These confrontations establish Grettir as a
                liminal figure who operates between the natural and supernatural worlds, much as he exists between
                society and wilderness as an outlaw.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

