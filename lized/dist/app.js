// Set the real WhatsApp number, with country and area code, when supplied.
const WHATSAPP_NUMBER = '554588084656';
const LANG_STORAGE = 'lized-lang';
const I18N = {
  pt: {
    'meta.title': 'Lized | Criação de Sites Profissionais que Impulsionam Negócios',
    'meta.description': 'A Lized cria sites modernos e estratégicos para empresas. Mais credibilidade, mais clientes e presença digital que transforma visitas em vendas. Atendimento em Cascavel e região.',
    'meta.keywords': 'Lized, Lized sites, criação de sites, agência de sites, site profissional, site para empresas, Cascavel',
    'meta.ogTitle': 'Lized | Sites que impulsionam negócios',
    'meta.ogDescription': 'A Lized cria sites modernos e estratégicos que geram credibilidade, atraem mais clientes e transformam visitas em vendas.',
    'meta.ogImageAlt': 'Lized — sites profissionais com design moderno',
    'meta.twitterDescription': 'A Lized cria sites modernos e estratégicos para impulsionar o seu negócio.',
    'lang.group': 'Idioma',
    'brand.home': 'Lized — início',
    'nav.main': 'Navegação principal',
    'nav.footer': 'Rodapé',
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.testimonials': 'Depoimentos',
    'nav.faq': 'Dúvidas',
    'nav.request': 'Solicitar um site',
    'nav.openMenu': 'Abrir menu',
    'nav.closeMenu': 'Fechar menu',
    'hero.art': 'Notebook exibindo um site da Lized, com iluminação verde-limão',
    'hero.eyebrow': 'Lized — Sites que impulsionam negócios',
    'hero.title': 'Lized: mais que um site.<br>É o próximo passo<br><em>do seu negócio.</em>',
    'hero.lead': 'Na Lized, criamos sites modernos e estratégicos que geram credibilidade, atraem mais clientes e transformam visitas em vendas.',
    'hero.cta': 'Solicitar um site agora',
    'hero.projects': 'Ver nossos projetos',
    'hero.promise1': 'Design moderno<br>e exclusivo',
    'hero.promise2': 'Foco em resultados<br>para o seu negócio',
    'hero.promise3': 'Suporte próximo<br>e contínuo',
    'benefits.eyebrow': 'Vantagens de ter um site',
    'benefits.title': 'Um site abre <em>novas<br>oportunidades</em> para o seu negócio.',
    'benefits.aside': 'Mais visibilidade, mais confiança e mais clientes.<br>Seu site trabalha 24 horas por você, apresentando<br>seu negócio da melhor forma.',
    'benefits.1.title': 'Mais credibilidade',
    'benefits.1.text': 'Transmite profissionalismo e aumenta a confiança no seu negócio.',
    'benefits.2.title': 'Contato facilitado',
    'benefits.2.text': 'Integração com WhatsApp para gerar mais conversas e vendas.',
    'benefits.3.title': 'Apareça no Google',
    'benefits.3.text': 'Seja encontrado por pessoas que já estão procurando pelo que você oferece.',
    'benefits.4.title': 'Vantagem competitiva',
    'benefits.4.text': 'Destaque-se da concorrência e conquiste mais oportunidades enquanto outros ainda não têm site.',
    'projects.eyebrow': 'Nossos projetos',
    'projects.title': 'Sites que geram<br><em>resultados reais.</em>',
    'projects.aside': 'Conheça alguns dos projetos que desenvolvemos<br>para empresas de diferentes segmentos.',
    'projects.prev': 'Projeto anterior',
    'projects.next': 'Próximo projeto',
    'projects.alt1': 'Prévia de site de tecnologia em verde e preto, com o título Soluções digitais para um futuro mais inteligente.',
    'projects.alt2': 'Prévia de site de beleza em tons claros, com o título Realce sua melhor versão.',
    'projects.alt3': 'Prévia de site fitness em preto e verde, com o título Disciplina gera resultados.',
    'clients.eyebrow': 'Nossos clientes',
    'clients.title': 'Empresas que já deram o <em>próximo passo.</em>',
    'solutions.eyebrow': 'Por que escolher a Lized?',
    'solutions.title': 'Mais que sites, <em>soluções digitais.</em>',
    'solutions.intro': 'Desenvolvemos cada projeto com foco em estratégia, design e resultado, criando sites modernos, rápidos e pensados para transformar visitas em oportunidades reais para o seu negócio.',
    'solutions.link': 'Veja o que podemos criar',
    'solutions.1.title': 'Experiência e compromisso',
    'solutions.1.text': 'Atenção aos detalhes e aos objetivos que tornam sua empresa única.',
    'solutions.2.title': 'Atendimento personalizado',
    'solutions.2.text': 'Entendemos seu negócio antes de desenhar a solução ideal.',
    'solutions.3.title': 'Foco em oportunidades',
    'solutions.3.text': 'Um site pensado para transmitir confiança e facilitar novos contatos.',
    'solutions.photo': 'Profissional trabalhando em um notebook em um ambiente com a identidade visual da Lized',
    'solutions.badgeTitle': 'Design com propósito',
    'solutions.badgeText': 'Cada detalhe representa sua marca.',
    'presence.eyebrow': 'Presença que trabalha por você',
    'presence.title': 'Seu site preparado para <br><em>causar uma ótima impressão.</em>',
    'presence.1.title': 'Sites modernos <br>e responsivos',
    'presence.1.text': 'Seu site se adapta perfeitamente ao celular, tablet e computador.',
    'presence.2.title': 'Carregamento <br>ultra rápido',
    'presence.2.text': 'Mais velocidade, melhor experiência e mais oportunidades de contato.',
    'presence.3.title': 'Estrutura preparada <br>para SEO',
    'presence.3.text': 'Boas práticas para ajudar sua empresa a conquistar mais visibilidade.',
    'presence.4.title': 'Suporte e manutenção',
    'presence.4.text': 'Acompanhamento profissional para manter tudo funcionando corretamente.',
    'process.eyebrow': 'Nosso processo',
    'process.kicker': 'Processo',
    'process.how': 'Como trabalho',
    'process.intro': 'Um processo simples, estratégico e transparente, do planejamento à entrega do seu site.',
    'process.1.title': 'Entender',
    'process.1.sub': 'O briefing',
    'process.1.text': 'Faço um alinhamento rápido para entender seu negócio, seu objetivo, seu público e as referências visuais ideais para o projeto.',
    'process.2.title': 'Planejar',
    'process.2.sub': 'Estratégia',
    'process.2.text': 'Defino a estrutura do site, organização das seções, mensagem principal e os elementos que ajudam a converter visitantes em clientes.',
    'process.3.title': 'Criar',
    'process.3.sub': 'Desenvolvimento',
    'process.3.text': 'Desenvolvo um layout moderno, profissional e responsivo, com foco em credibilidade, clareza e resultado para o seu negócio.',
    'process.4.title': 'Entregar',
    'process.4.sub': 'Publicação',
    'process.4.text': 'Apresento a versão final, realizo os ajustes necessários e entrego o site pronto para uso, com suporte para os próximos passos.',
    'strip.label': 'O que está incluso',
    'strip.eyebrow': 'O que está incluso no seu projeto',
    'strip.1': 'Layout sob medida',
    'strip.2': 'Site responsivo',
    'strip.3': 'WhatsApp integrado',
    'strip.4': 'Entrega em até 72h',
    'strip.5': 'Site hospedado',
    'strip.6': 'Domínio incluso',
    'strip.7': 'Suporte contínuo',
    'strip.8': 'Ajustes iniciais incluso',
    'delivery.photo': 'Profissional trabalhando em um notebook com um site também exibido no celular, em um ambiente iluminado em verde',
    'delivery.eyebrow': 'Entrega rápida',
    'delivery.title': 'Seu site profissional <em>sem complicação</em> e com entrega em até <em class="delivery-time">72h.</em>',
    'delivery.intro': 'Na Lized, você não precisa lidar com vários profissionais para ter seu site no ar. Eu cuido da estrutura, design e desenvolvimento para entregar uma solução moderna, estratégica e pronta para gerar credibilidade e oportunidades para o seu negócio.',
    'delivery.includes': 'O que está incluso na entrega:',
    'delivery.1': 'Demonstração personalizada grátis',
    'delivery.2': 'Entrega em até 72 horas',
    'delivery.3': '50% para iniciar e 50% na entrega',
    'delivery.4': 'Pagamento via Pix ou parcelado',
    'delivery.5': 'Sem mensalidade',
    'delivery.6': 'Hospedagem grátis',
    'delivery.7': 'Site para computador e celular',
    'reviews.eyebrow': 'O que nossos clientes dizem',
    'reviews.title': 'Resultados que<br>geram <em>confiança.</em>',
    'reviews.1': '“O site ficou incrível! Superou nossas expectativas e hoje conseguimos muito mais clientes através dele.”',
    'reviews.2': '“Profissionais de alto nível. Entregaram um site moderno, rápido e que realmente gerou resultados para o nosso negócio.”',
    'reviews.3': '“Atendimento excelente e um trabalho impecável. Nosso site se tornou nossa principal vitrine e as vendas aumentaram muito.”',
    'reviews.stars': '5 estrelas',
    'cta.eyebrow': 'Vamos construir o seu?',
    'cta.title': 'Pronto para ter um site<br>que <em>realmente gera resultados?</em>',
    'cta.text': 'Fale com a nossa equipe e receba um orçamento personalizado<br>para o seu projeto. Sem compromisso.',
    'cta.cta': 'Solicitar um site agora',
    'cta.whatsapp': 'Falar no WhatsApp',
    'footer.tagline': 'Lized — Sites que<br>impulsionam negócios.',
    'footer.instagram': 'Instagram da Lized @lized_oficial',
    'footer.whatsapp': 'WhatsApp da Lized',
    'footer.email': 'E-mail da Lized',
    'dialog.close': 'Fechar',
    'contact.title': 'Seu próximo passo<br>começa <em>aqui.</em>',
    'contact.desc': 'Conte um pouco sobre o seu projeto.',
    'contact.name': 'Seu nome',
    'contact.namePh': 'Como podemos chamar você?',
    'contact.business': 'Seu negócio',
    'contact.businessPh': 'Nome da empresa',
    'contact.need': 'O que você precisa?',
    'contact.needPh': 'Conte sua ideia para o site',
    'contact.prepare': 'Preparar solicitação',
    'contact.whatsappSubmit': 'Continuar no WhatsApp',
    'contact.notePrepare': 'O pedido será preparado para você copiar. Nenhuma informação será enviada automaticamente.',
    'contact.noteWhatsapp': 'Você poderá revisar sua mensagem no WhatsApp antes de enviar.',
    'contact.yours': 'Sua solicitação',
    'contact.copy': 'Copiar solicitação',
    'contact.copied': 'Solicitação copiada!',
    'contact.copyFail': 'Selecione e copie o texto da solicitação.',
    'contact.prepared': 'Solicitação preparada. O canal de contato da Lized ainda será disponibilizado.',
    'faq.eyebrow': 'Dúvidas',
    'faq.title': 'Vamos <em>conversar?</em>',
    'faq.q1': 'Como solicitar um orçamento?',
    'faq.a1': 'Clique em “Solicitar um site” e conte sobre o seu negócio e o projeto que tem em mente.',
    'faq.q2': 'O site funciona no celular?',
    'faq.a2': 'Sim. O layout se adapta a celulares, tablets e computadores.',
    'faq.q3': 'Qual o prazo e o valor do projeto?',
    'faq.a3': 'O prazo e o orçamento dependem das páginas e funcionalidades que o seu negócio precisa. Esses detalhes são definidos na proposta.',
    'faq.cta': 'Solicitar um site',
    'wa.greeting': 'Olá, Lized! Quero um site para o meu negócio.'
  },
  en: {
    'meta.title': 'Lized | Professional Websites That Grow Businesses',
    'meta.description': 'Lized builds modern, strategic websites for businesses. More credibility, more clients, and a digital presence that turns visits into sales. Serving Cascavel and the surrounding region.',
    'meta.keywords': 'Lized, Lized websites, website design, web agency, professional website, business website, Cascavel',
    'meta.ogTitle': 'Lized | Websites that grow businesses',
    'meta.ogDescription': 'Lized creates modern, strategic websites that build credibility, attract more clients, and turn visits into sales.',
    'meta.ogImageAlt': 'Lized — professional websites with modern design',
    'meta.twitterDescription': 'Lized creates modern, strategic websites to grow your business.',
    'lang.group': 'Language',
    'brand.home': 'Lized — home',
    'nav.main': 'Main navigation',
    'nav.footer': 'Footer',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.request': 'Request a site',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'hero.art': 'Laptop showing a Lized website, lit in lime green',
    'hero.eyebrow': 'Lized — Websites that grow businesses',
    'hero.title': 'Lized: more than a website.<br>It\'s the next step<br><em>for your business.</em>',
    'hero.lead': 'At Lized, we create modern, strategic websites that build credibility, attract more clients, and turn visits into sales.',
    'hero.cta': 'Request a website now',
    'hero.projects': 'See our projects',
    'hero.promise1': 'Modern,<br>exclusive design',
    'hero.promise2': 'Focused on results<br>for your business',
    'hero.promise3': 'Close,<br>ongoing support',
    'benefits.eyebrow': 'Why have a website',
    'benefits.title': 'A website opens <em>new<br>opportunities</em> for your business.',
    'benefits.aside': 'More visibility, more trust, and more clients.<br>Your website works around the clock, presenting<br>your business at its best.',
    'benefits.1.title': 'More credibility',
    'benefits.1.text': 'It conveys professionalism and builds trust in your business.',
    'benefits.2.title': 'Easier contact',
    'benefits.2.text': 'WhatsApp integration to start more conversations and sales.',
    'benefits.3.title': 'Show up on Google',
    'benefits.3.text': 'Be found by people already looking for what you offer.',
    'benefits.4.title': 'Competitive edge',
    'benefits.4.text': 'Stand out from competitors and win more opportunities while others still don\'t have a website.',
    'projects.eyebrow': 'Our projects',
    'projects.title': 'Websites that deliver<br><em>real results.</em>',
    'projects.aside': 'A few of the projects we built<br>for businesses in different industries.',
    'projects.prev': 'Previous project',
    'projects.next': 'Next project',
    'projects.alt1': 'Preview of a technology website in green and black, titled Digital solutions for a smarter future.',
    'projects.alt2': 'Preview of a beauty website in light tones, titled Bring out your best self.',
    'projects.alt3': 'Preview of a fitness website in black and green, titled Discipline creates results.',
    'clients.eyebrow': 'Our clients',
    'clients.title': 'Companies that already took the <em>next step.</em>',
    'solutions.eyebrow': 'Why choose Lized?',
    'solutions.title': 'More than websites, <em>digital solutions.</em>',
    'solutions.intro': 'We develop every project with strategy, design, and results in mind, creating modern, fast websites built to turn visits into real opportunities for your business.',
    'solutions.link': 'See what we can create',
    'solutions.1.title': 'Experience and commitment',
    'solutions.1.text': 'Attention to the details and goals that make your company unique.',
    'solutions.2.title': 'Personal service',
    'solutions.2.text': 'We understand your business before designing the right solution.',
    'solutions.3.title': 'Focused on opportunities',
    'solutions.3.text': 'A website designed to build trust and make it easy to get in touch.',
    'solutions.photo': 'A professional working on a laptop in a space with Lized\'s visual identity',
    'solutions.badgeTitle': 'Design with purpose',
    'solutions.badgeText': 'Every detail represents your brand.',
    'presence.eyebrow': 'A presence that works for you',
    'presence.title': 'Your website, ready to <br><em>make a great impression.</em>',
    'presence.1.title': 'Modern, <br>responsive websites',
    'presence.1.text': 'Your site adapts perfectly to phones, tablets, and computers.',
    'presence.2.title': 'Ultra-fast <br>loading',
    'presence.2.text': 'More speed, a better experience, and more chances to connect.',
    'presence.3.title': 'Built for <br>SEO',
    'presence.3.text': 'Best practices that help your business gain more visibility.',
    'presence.4.title': 'Support and maintenance',
    'presence.4.text': 'Professional follow-up to keep everything running properly.',
    'process.eyebrow': 'Our process',
    'process.kicker': 'Process',
    'process.how': 'How I work',
    'process.intro': 'A simple, strategic, and transparent process, from planning through delivery of your website.',
    'process.1.title': 'Understand',
    'process.1.sub': 'The brief',
    'process.1.text': 'I start with a quick alignment to understand your business, your goal, your audience, and the visual references that fit the project.',
    'process.2.title': 'Plan',
    'process.2.sub': 'Strategy',
    'process.2.text': 'I define the site structure, how the sections are organized, the core message, and the elements that help turn visitors into clients.',
    'process.3.title': 'Create',
    'process.3.sub': 'Development',
    'process.3.text': 'I build a modern, professional, responsive layout, focused on credibility, clarity, and results for your business.',
    'process.4.title': 'Deliver',
    'process.4.sub': 'Launch',
    'process.4.text': 'I present the final version, make the needed adjustments, and deliver a site ready to use, with support for the next steps.',
    'strip.label': 'What\'s included',
    'strip.eyebrow': 'What\'s included in your project',
    'strip.1': 'Custom layout',
    'strip.2': 'Responsive site',
    'strip.3': 'WhatsApp built in',
    'strip.4': 'Delivery in up to 72h',
    'strip.5': 'Hosted site',
    'strip.6': 'Domain included',
    'strip.7': 'Ongoing support',
    'strip.8': 'Initial revisions included',
    'delivery.photo': 'A professional working on a laptop, with the website also shown on a phone, in a green-lit space',
    'delivery.eyebrow': 'Fast delivery',
    'delivery.title': 'Your professional website <em>without the hassle</em> and delivered in up to <em class="delivery-time">72h.</em>',
    'delivery.intro': 'At Lized, you don\'t need several professionals to get your website online. I take care of the structure, design, and development to deliver a modern, strategic solution, ready to build credibility and opportunities for your business.',
    'delivery.includes': 'What\'s included in delivery:',
    'delivery.1': 'Free custom demo',
    'delivery.2': 'Delivery in up to 72 hours',
    'delivery.3': '50% to start and 50% on delivery',
    'delivery.4': 'Pay with Pix or in installments',
    'delivery.5': 'No monthly fee',
    'delivery.6': 'Free hosting',
    'delivery.7': 'Website for desktop and mobile',
    'reviews.eyebrow': 'What our clients say',
    'reviews.title': 'Results that<br>build <em>trust.</em>',
    'reviews.1': '“The website turned out amazing! It exceeded our expectations, and today we get many more clients through it.”',
    'reviews.2': '“Top-tier professionals. They delivered a modern, fast website that really generated results for our business.”',
    'reviews.3': '“Excellent service and flawless work. Our website became our main storefront, and sales went up a lot.”',
    'reviews.stars': '5 stars',
    'cta.eyebrow': 'Let\'s build yours?',
    'cta.title': 'Ready for a website<br>that <em>actually drives results?</em>',
    'cta.text': 'Talk to our team and get a custom quote<br>for your project. No obligation.',
    'cta.cta': 'Request a website now',
    'cta.whatsapp': 'Chat on WhatsApp',
    'footer.tagline': 'Lized — Websites that<br>grow businesses.',
    'footer.instagram': 'Lized on Instagram @lized_oficial',
    'footer.whatsapp': 'Lized on WhatsApp',
    'footer.email': 'Lized email',
    'dialog.close': 'Close',
    'contact.title': 'Your next step<br>starts <em>here.</em>',
    'contact.desc': 'Tell us a little about your project.',
    'contact.name': 'Your name',
    'contact.namePh': 'What should we call you?',
    'contact.business': 'Your business',
    'contact.businessPh': 'Company name',
    'contact.need': 'What do you need?',
    'contact.needPh': 'Tell us your idea for the website',
    'contact.prepare': 'Prepare request',
    'contact.whatsappSubmit': 'Continue on WhatsApp',
    'contact.notePrepare': 'The request will be prepared for you to copy. Nothing is sent automatically.',
    'contact.noteWhatsapp': 'You can review your message on WhatsApp before sending.',
    'contact.yours': 'Your request',
    'contact.copy': 'Copy request',
    'contact.copied': 'Request copied!',
    'contact.copyFail': 'Select and copy the request text.',
    'contact.prepared': 'Request prepared. Lized\'s contact channel will be available soon.',
    'faq.eyebrow': 'Questions',
    'faq.title': 'Shall we <em>talk?</em>',
    'faq.q1': 'How do I request a quote?',
    'faq.a1': 'Click “Request a site” and tell us about your business and the project you have in mind.',
    'faq.q2': 'Does the website work on mobile?',
    'faq.a2': 'Yes. The layout adapts to phones, tablets, and computers.',
    'faq.q3': 'What\'s the timeline and the price?',
    'faq.a3': 'The timeline and the quote depend on the pages and features your business needs. Those details are set in the proposal.',
    'faq.cta': 'Request a site',
    'wa.greeting': 'Hi, Lized! I want a website for my business.'
  }
};

let currentLang = 'pt';
function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.pt[key] || '';
}
function setMeta(selector, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
}
function detectLanguage() {
  try {
    const query = new URLSearchParams(location.search).get('lang');
    if (query === 'en' || query === 'pt') return query;
    const saved = localStorage.getItem(LANG_STORAGE);
    if (saved === 'en' || saved === 'pt') return saved;
  } catch {}
  return 'pt';
}
function contactMessage(data) {
  const name = data.get('name');
  const business = data.get('business');
  const message = data.get('message');
  if (currentLang === 'en') return `Hi, Lized! My name is ${name}.\nMy business: ${business}.\nI want a website: ${message}`;
  return `Olá, Lized! Meu nome é ${name}.\nMeu negócio: ${business}.\nQuero um site: ${message}`;
}
function syncMenuLabel() {
  const menu = document.querySelector('.menu-toggle');
  const open = document.querySelector('.header nav').classList.contains('open');
  menu.setAttribute('aria-label', open ? t('nav.closeMenu') : t('nav.openMenu'));
}
function applyLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'pt';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    if (!value) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)));
  document.querySelectorAll('[data-i18n-alt]').forEach(el => el.setAttribute('alt', t(el.dataset.i18nAlt)));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)));
  document.title = t('meta.title');
  setMeta('meta[name="description"]', t('meta.description'));
  setMeta('meta[name="keywords"]', t('meta.keywords'));
  setMeta('meta[property="og:title"]', t('meta.ogTitle'));
  setMeta('meta[property="og:description"]', t('meta.ogDescription'));
  setMeta('meta[property="og:image:alt"]', t('meta.ogImageAlt'));
  setMeta('meta[property="og:locale"]', currentLang === 'en' ? 'en_US' : 'pt_BR');
  setMeta('meta[name="twitter:title"]', t('meta.ogTitle'));
  setMeta('meta[name="twitter:description"]', t('meta.twitterDescription'));
  document.querySelectorAll('[data-wa-greeting]').forEach(el => {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('wa.greeting'))}`;
  });
  document.querySelectorAll('[data-set-lang]').forEach(button => {
    const active = button.dataset.setLang === currentLang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const submitLabel = document.querySelector('#contact-form button[type="submit"] [data-i18n]');
  if (submitLabel) submitLabel.textContent = WHATSAPP_NUMBER ? t('contact.whatsappSubmit') : t('contact.prepare');
  const note = document.querySelector('.form-note');
  if (note) note.textContent = WHATSAPP_NUMBER ? t('contact.noteWhatsapp') : t('contact.notePrepare');
  syncMenuLabel();
  try { localStorage.setItem(LANG_STORAGE, currentLang); } catch {}
  try {
    const url = new URL(location.href);
    if (currentLang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    if (url.href !== location.href) history.replaceState(null, '', url);
  } catch {}
}
document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.setLang)));

const contactDialog = document.querySelector('#contact-dialog');
function openDialog(dialog) { document.querySelectorAll('dialog[open]').forEach(d => d.close()); dialog.showModal(); }
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => openDialog(contactDialog)));
document.querySelectorAll('[data-faq]').forEach(button => button.addEventListener('click', () => openDialog(document.querySelector('#faq-dialog'))));
document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelector('.close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); } }); });
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const open = document.querySelector('.header nav').classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); syncMenuLabel(); });
document.querySelectorAll('.header nav a').forEach(link => link.addEventListener('click', () => { document.querySelector('.header nav').classList.remove('open'); menu.setAttribute('aria-expanded','false'); syncMenuLabel(); }));
document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>{ const grid=document.querySelector('.project-grid'); if(window.innerWidth<=760){grid.scrollBy({left:Number(button.dataset.slide)*grid.clientWidth*.88,behavior:'smooth'});}else{if(Number(button.dataset.slide)>0)grid.append(grid.firstElementChild);else grid.prepend(grid.lastElementChild);} }));
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault(); const data=new FormData(event.currentTarget); const text=contactMessage(data); if(WHATSAPP_NUMBER){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');}else{document.querySelector('#request-text').value=text;document.querySelector('#contact-result').hidden=false;document.querySelector('#copy-status').textContent=t('contact.prepared');document.querySelector('#contact-result').scrollIntoView({block:'nearest',behavior:'smooth'});} });
document.querySelector('#copy-request').addEventListener('click',async()=>{const field=document.querySelector('#request-text');try{await navigator.clipboard.writeText(field.value);document.querySelector('#copy-status').textContent=t('contact.copied');}catch{field.focus();field.select();document.querySelector('#copy-status').textContent=t('contact.copyFail');}});
applyLanguage(detectLanguage());
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.header nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionItems=[...document.querySelectorAll('.reveal, .reveal-media')];
if(!reduceMotion){
  const pending=new Set();
  let queued=false;
  const flush=()=>{
    queued=false;
    const groups=new Map();
    pending.forEach(el=>{
      const group=el.closest('[data-stagger]');
      if(!group){el.classList.add('is-visible');return;}
      const list=groups.get(group)||[];
      list.push(el);
      groups.set(group,list);
    });
    pending.clear();
    groups.forEach(list=>{
      list.sort((a,b)=>a===b?0:(a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1));
      list.forEach((el,index)=>{
        const delay=Math.min(index,10)*60;
        el.style.transitionDelay=`${delay}ms`;
        el.style.setProperty('--reveal-delay',`${delay}ms`);
        el.classList.add('is-visible');
      });
    });
  };
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      pending.add(entry.target);
      revealObserver.unobserve(entry.target);
      if(!queued){queued=true;requestAnimationFrame(flush);}
    });
  },{threshold:.14,rootMargin:'0px 0px -6% 0px'});
  motionItems.forEach(el=>revealObserver.observe(el));
}else{
  motionItems.forEach(el=>el.classList.add('is-visible'));
}

