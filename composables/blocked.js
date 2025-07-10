import { supabase } from '@/lib/supabase'

/**
 * Vérifie si l'IP courante est bloquée et redirige si besoin
 * @returns {Promise<void>}
 */
export async function checkIfBlocked() {
    // Essaye d'utiliser le cache pour éviter trop de fetch
    let userIp = sessionStorage.getItem('user_ip')
    if (!userIp) {
        try {
            const res = await fetch('https://ipwho.is/')
            const data = await res.json()
            if (!data.success) return // Impossible de récupérer l'IP, on laisse passer
            userIp = data.ip
            sessionStorage.setItem('user_ip', userIp)
        } catch {
            return // On laisse passer si erreur API
        }
    }

    // Cherche dans la table session
    const { data, error } = await supabase
        .from('session')
        .select('is_blocked')
        .eq('ip', userIp)
        .limit(1)
        .maybeSingle()

    if (error) return

    if (data && data.is_blocked) {
        window.location.href = 'https://www.leolist.cc/fr/personals/female-escorts/greater-montreal'
    }
}
