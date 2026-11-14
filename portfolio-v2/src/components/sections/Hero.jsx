import { MapPin } from 'lucide-react'

import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-6 py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          {profile.role}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Olá, eu sou {profile.name}.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Desenvolvo interfaces para a web com foco em JavaScript, React,
          experiência do usuário e qualidade de código.
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
          <MapPin aria-hidden="true" className="size-4" />
          <span>{profile.location}</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

          <Button asChild variant="outline">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero