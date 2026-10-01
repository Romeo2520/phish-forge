import Link from "next/link";

export default function AwarenessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-amber-200 p-8 sm:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            Ceci était un test de sécurité
          </h1>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          Vous venez de saisir vos identifiants sur une page de{" "}
          <strong>simulation de phishing</strong> organisée par votre service
          informatique. Rassurez-vous : aucune de vos données réelles n&apos;a
          été compromise. L&apos;objectif est de vous aider à reconnaître ce
          type d&apos;attaque.
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mb-6">
          <h2 className="font-semibold text-slate-800 mb-3">
            Comment reconnaître une tentative de phishing&nbsp;?
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Vérifiez toujours l&apos;adresse exacte du lien avant de cliquer.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Méfiez-vous des messages qui créent un sentiment d&apos;urgence.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Ne saisissez jamais vos identifiants depuis un lien reçu par
              e-mail sans vérification.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              En cas de doute, contactez directement le service informatique.
            </li>
          </ul>
        </div>

        <p className="text-sm text-slate-500">
          Merci de votre participation. Cette sensibilisation contribue à
          renforcer la sécurité de toute l&apos;organisation.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Retour
          </Link>
        </div>
      </div>
    </main>
  );
}
