// Edite aqui: número (DDI + DDD + número, só dígitos) e mensagem inicial
export const WHATSAPP_NUMBER = "5511960473833";
export const WHATSAPP_MESSAGE = "Oi! Vi o site da Forge Tech e quero um orçamento.";

const text = encodeURIComponent(WHATSAPP_MESSAGE);

// Celular: abre o app do WhatsApp
export const MOBILE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
// Computador: vai direto para o WhatsApp Web, sem a tela branca de "Continuar"
export const DESKTOP_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`;
