// components/CookieConsent.tsx
'use client'


import { useState, useEffect } from 'react'
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Samma stub som GTM-snutten sätter, om bannern hinner före
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // Consent Mode kräver arguments-objektet, inte en array
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

interface CookiePreferences {
  necessary: boolean
  statistics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = 'industrinat-cookie-consent'
const SHOW_DELAY_MS = 2500 // 2.5 sekunder fördröjning

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Alltid true, kan inte stängas av
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Kolla om consent redan finns
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      // Ladda sparade preferenser och aktivera scripts
      const parsed = JSON.parse(savedConsent)
      activateScripts(parsed)
      return
    }

    // Visa banner efter fördröjning
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, SHOW_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])
const activateScripts = (prefs: CookiePreferences) => {
    if (typeof window === 'undefined') return
    
    // Uppdatera GTM Consent Mode v2
    const marketing = prefs.marketing ? 'granted' : 'denied'
    ;(window.gtag ?? gtag)('consent', 'update', {
      functionality_storage: 'granted',
      security_storage: 'granted',
      analytics_storage: prefs.statistics ? 'granted' : 'denied',
      ad_storage: marketing,
      ad_user_data: marketing,
      ad_personalization: marketing,
    })
    
    console.log('🍪 Consent uppdaterat:', prefs)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs))
    localStorage.setItem(COOKIE_CONSENT_KEY + '-date', new Date().toISOString())
    activateScripts(prefs)
    setIsVisible(false)
  }

  const acceptAll = () => {
    const allAccepted = { necessary: true, statistics: true, marketing: true }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
  }

  const acceptSelected = () => {
    saveConsent(preferences)
  }

  const rejectAll = () => {
    const onlyNecessary = { necessary: true, statistics: false, marketing: false }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
              <Cookie className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 text-lg">
                Vi använder cookies 🍪
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Vi använder cookies för att förbättra din upplevelse och analysera trafiken på vår webbplats. 
                Du kan välja vilka cookies du godkänner.
              </p>
            </div>
          </div>

          {/* Detaljer (expanderbar) */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 mt-3 font-medium"
          >
            {showDetails ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Dölj detaljer
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Visa detaljer
              </>
            )}
          </button>

          {showDetails && (
            <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
              {/* Nödvändiga */}
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 text-sm">Nödvändiga</p>
                  <p className="text-xs text-slate-500">Krävs för att webbplatsen ska fungera</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-5 h-5 text-teal-600 rounded cursor-not-allowed"
                />
              </label>

              {/* Statistik */}
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <div>
                  <p className="font-medium text-slate-900 text-sm">Statistik</p>
                  <p className="text-xs text-slate-500">Hjälper oss förstå hur besökare använder sidan</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.statistics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, statistics: e.target.checked }))}
                  className="w-5 h-5 text-teal-600 rounded cursor-pointer"
                />
              </label>

              {/* Marknadsföring */}
              <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <div>
                  <p className="font-medium text-slate-900 text-sm">Marknadsföring</p>
                  <p className="text-xs text-slate-500">Används för riktad annonsering</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="w-5 h-5 text-teal-600 rounded cursor-pointer"
                />
              </label>
            </div>
          )}
        </div>

        {/* Knappar */}
        <div className="p-4 md:px-6 md:pb-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
          <button
            onClick={rejectAll}
            className="flex-1 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors"
          >
            Endast nödvändiga
          </button>
          {showDetails && (
            <button
              onClick={acceptSelected}
              className="flex-1 px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition-colors"
            >
              Spara val
            </button>
          )}
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Acceptera alla
          </button>
        </div>
      </div>
    </div>
  )
}