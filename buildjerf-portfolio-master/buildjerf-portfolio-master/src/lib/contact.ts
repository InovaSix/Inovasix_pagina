export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'inovasistemainovacao@gmail.com'

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511975696233'

export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Inovasix e gostaria de conversar com um especialista sobre as soluções disponíveis.'

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

type SendResult = { ok: true } | { ok: false; error: string }

export async function sendContactEmail(payload: ContactPayload): Promise<SendResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  if (!accessKey) {
    return { ok: false, error: 'Envio de e-mail não configurado. Use o WhatsApp.' }
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        to: CONTACT_EMAIL,
        from_name: payload.name,
        from_email: payload.email,
        subject: payload.subject || `Contato via site - ${payload.name}`,
        message: payload.message,
        botcheck: false,
      }),
    })

    const data = await response.json().catch(() => null)

    if (response.ok && data?.success) {
      return { ok: true }
    }

    return { ok: false, error: data?.message ?? 'Não foi possível enviar o e-mail.' }
  } catch {
    return { ok: false, error: 'Erro de conexão. Tente novamente ou use o WhatsApp.' }
  }
}
