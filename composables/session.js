import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { supabase } from '@/lib/supabase'

let interval = null
let ipMemo = null // On garde l'IP en mémoire

function getDevice() {
    const ua = navigator.userAgent
    if (/iphone|ipad|ipod/i.test(ua)) return 'iphone'
    if (/android/i.test(ua)) return 'android'
    if (/windows/i.test(ua)) return 'windows'
    if (/macintosh/i.test(ua)) return 'mac'
    return 'desktop'
}

function getBrowser() {
    const ua = navigator.userAgent
    if (/chrome/i.test(ua)) return 'chrome'
    if (/safari/i.test(ua)) return 'safari'
    if (/firefox/i.test(ua)) return 'firefox'
    if (/edg/i.test(ua)) return 'edge'
    return 'autre'
}

async function getIPInfo() {
    try {
        const res = await fetch('https://ipwho.is/')
        const data = await res.json()
        if (!data.success) return null
        return {
            ip: data.ip,
            city: data.city,
            country: data.country
        }
    } catch (e) {
        return null
    }
}

export function useSession() {
    const route = useRoute()

    // Met à jour la session comme "active"
    async function activateSession(ip, city, country) {
        const device = getDevice()
        const browser = getBrowser()
        const location = city && country ? `${city}, ${country}` : null
        const page = route.name ? String(route.name) : route.path
        const userAgent = navigator.userAgent

        // Cherche s'il existe déjà une session pour cette IP
        const { data: sessions } = await supabase
            .from('session')
            .select('*')
            .eq('ip', ip)
            .limit(1)

        if (sessions && sessions.length > 0) {
            // Met à jour la session existante
            await supabase
                .from('session')
                .update({
                    last_seen_at: new Date().toISOString(),
                    page,
                    active: true,
                    location,
                    device,
                    browser
                })
                .eq('ip', ip)
        } else {
            // Crée une nouvelle session
            await supabase
                .from('session')
                .insert([{
                    ip,
                    location,
                    user_agent: userAgent,
                    page,
                    active: true,
                    last_seen_at: new Date().toISOString(),
                    device,
                    browser
                }])
        }
    }

    // Met la session sur "inactive"
    async function deactivateSession() {
        if (!ipMemo) return
        await supabase
            .from('session')
            .update({ active: false })
            .eq('ip', ipMemo)
    }

    // Keep alive
    async function updateLastSeen() {
        if (!ipMemo) return
        await supabase
            .from('session')
            .update({ last_seen_at: new Date().toISOString(), active: true })
            .eq('ip', ipMemo)
    }

    onMounted(async () => {
        const ipInfo = await getIPInfo()
        if (!ipInfo) return
        ipMemo = ipInfo.ip

        await activateSession(ipMemo, ipInfo.city, ipInfo.country)

        // Keep alive (30 sec)
        interval = setInterval(updateLastSeen, 2000)
        // Fermeture onglet/navigateur
        window.addEventListener('beforeunload', deactivateSession)
    })

    // Navigation interne SPA
    onBeforeRouteLeave(async () => {
        await deactivateSession()
    })

    onBeforeUnmount(() => {
        if (interval) clearInterval(interval)
        window.removeEventListener('beforeunload', deactivateSession)
    })
}
