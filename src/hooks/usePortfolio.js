import { useLanguage } from '../context/LanguageContext'
import { portfolioData, meta, stack } from '../data/portfolio'
import { getYearsExp } from '../utils/experience'

export function usePortfolio() {
  const { lang, setLang } = useLanguage()
  const data = portfolioData[lang]
  const years = getYearsExp()

  const personal = {
    ...data.personal,
    tagline: data.personal.tagline.replace('{years}', years),
    about: data.personal.about.replace('{years}', years),
  }

  const curriculo = {
    ...data.curriculo,
    about: data.curriculo.about.replace('{years}', years),
  }

  return {
    lang,
    setLang,
    meta,
    stack,
    personal,
    projects: data.projects,
    experience: data.experience,
    education: data.education,
    curriculo,
    ui: data.ui,
  }
}
