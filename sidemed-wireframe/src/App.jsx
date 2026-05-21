import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  AlertTriangle,
  Mic,
  Upload,
  QrCode,
  FileText,
  HeartPulse,
  Plane,
  GraduationCap,
  Home,
  Apple,
  Mail,
  UserRound,
  Calendar,
  Droplets,
  Pill,
  ClipboardList,
  Activity,
  Languages,
  Share2,
  Smartphone,
  BadgeCheck,
  X,
  Menu,
} from "lucide-react";

const screens = {
  webLanding: "webLanding",
  appLanding: "appLanding",
  signup: "signup",
  onboardingIntro: "onboardingIntro",
  profile: "profile",
  history: "history",
  allergies: "allergies",
  dashboard: "dashboard",
};

const patient = {
  firstName: "Maria",
  lastName: "Oliveira",
  bloodType: "O+",
  birthDate: "12/04/1988",
  nationality: "Brasil",
  allergies: ["Penicilina", "Dipirona", "Frutos do mar"],
  medication: "Losartan 50mg · 1x ao dia",
  condition: "Hipertensão",
};

function AppButton({ children, variant = "primary", className = "", onClick, icon: Icon, type = "button" }) {
  const variants = {
    primary: "bg-[#1A56FF] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700",
    white: "bg-white text-[#1A56FF] shadow-lg shadow-black/10 hover:bg-blue-50",
    ghost: "bg-white/10 text-white border border-white/20 hover:bg-white/15",
    subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
    danger: "bg-orange-50 text-orange-900 border border-orange-200 hover:bg-orange-100",
    dark: "bg-slate-950 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {Icon ? <Icon size={18} /> : null}
      {children}
    </button>
  );
}

function Brand({ dark = false, onClick, compact = false }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 text-left">
      <span className={`grid h-9 w-9 place-items-center rounded-2xl font-black ${dark ? "bg-white text-[#1A56FF]" : "bg-[#1A56FF] text-white"}`}>
        s
      </span>
      {!compact ? <span className={`text-2xl font-black tracking-[-0.04em] ${dark ? "text-white" : "text-slate-950"}`}>sidemed.</span> : null}
    </button>
  );
}

function DeviceShell({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[390px] rounded-[2.6rem] bg-slate-950 p-2 shadow-2xl shadow-slate-950/30 ${className}`}>
      <div className="overflow-hidden rounded-[2.1rem] bg-white">
        <div className="relative h-[22px] bg-white">
          <div className="absolute left-1/2 top-2 h-4 w-28 -translate-x-1/2 rounded-full bg-slate-950" />
        </div>
        {children}
      </div>
    </div>
  );
}

function AppPrototypeShell({ screen, go, children }) {
  const titles = {
    appLanding: "Sidemed",
    signup: "Cadastro",
    onboardingIntro: "Onboarding",
    profile: "Perfil básico",
    history: "Histórico médico",
    allergies: "Alergias",
    dashboard: "Dashboard",
  };

  const backMap = {
    appLanding: screens.webLanding,
    signup: screens.appLanding,
    onboardingIntro: screens.signup,
    profile: screens.onboardingIntro,
    history: screens.profile,
    allergies: screens.history,
    dashboard: null,
  };

  const showChrome = screen !== screens.appLanding;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-5 text-white md:grid md:place-items-center md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="hidden md:block">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white/75">
            <Smartphone size={16} /> Protótipo navegável dentro do app
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl">
            Toda a experiência mobile acontece dentro do celular.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">
            A landing institucional continua fora do app. A partir do CTA, o fluxo entra no aplicativo e toda navegação passa a acontecer dentro do placeholder mobile.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AppButton variant="white" onClick={() => go(screens.webLanding)} icon={ArrowLeft}>Voltar para landing web</AppButton>
            <AppButton variant="ghost" onClick={() => go(screens.appLanding)} icon={Smartphone}>Reiniciar app</AppButton>
          </div>
        </div>

        <DeviceShell>
          {showChrome ? (
            <div className="flex h-14 items-center justify-between border-b border-slate-100 bg-white px-4 text-slate-950">
              {backMap[screen] ? (
                <button onClick={() => go(backMap[screen])} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700">
                  <ArrowLeft size={19} />
                </button>
              ) : (
                <Brand compact onClick={() => go(screens.appLanding)} />
              )}
              <div className="text-center">
                <p className="text-sm font-black tracking-tight">{titles[screen]}</p>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Health Passport</p>
              </div>
              <button className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700">
                <Menu size={18} />
              </button>
            </div>
          ) : null}

          <div className="h-[720px] overflow-y-auto bg-slate-50 text-slate-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </DeviceShell>
      </div>
    </div>
  );
}

function PhonePreview({ onStart }) {
  return (
    <DeviceShell>
      <div className="h-[610px] overflow-hidden bg-white p-4 text-slate-950">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1A56FF]">Passaporte 82%</span>
          <span className="text-sm font-bold text-slate-600">PT → EN</span>
        </div>

        <div className="mt-4 rounded-3xl bg-[#1A56FF] p-5 text-white">
          <p className="text-xs text-white/70">Paciente</p>
          <h3 className="mt-1 text-xl font-black tracking-tight">{patient.firstName} {patient.lastName}</h3>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 p-3">
            <span className="text-sm text-white/75">Tipo sanguíneo</span>
            <strong>{patient.bloodType}</strong>
          </div>
        </div>

        <div className="mt-3 rounded-3xl border border-red-200 bg-red-50 p-4 text-red-900">
          <div className="flex items-center gap-2 font-black">
            <AlertTriangle size={18} /> Alergias
          </div>
          <p className="mt-2 text-sm">{patient.allergies.join(", ")}</p>
        </div>

        <button onClick={onStart} className="mt-3 flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:bg-slate-50">
          <div>
            <p className="font-black text-slate-950">Compartilhar</p>
            <p className="text-sm text-slate-500">QR Code ou link seguro</p>
          </div>
          <QrCode className="text-[#1A56FF]" size={42} />
        </button>
      </div>
    </DeviceShell>
  );
}

function WebLanding({ go }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="overflow-hidden rounded-b-[2.5rem] bg-[#1A56FF] text-white md:rounded-b-[4rem]">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-5 md:px-8 md:pb-20">
          <header className="flex items-center justify-between">
            <Brand dark onClick={() => go(screens.webLanding)} />
            <nav className="hidden items-center gap-6 text-sm font-semibold text-white/80 md:flex">
              <a href="#como-funciona" className="hover:text-white">Como funciona</a>
              <a href="#para-quem" className="hover:text-white">Para quem é</a>
              <a href="#seguranca" className="hover:text-white">Segurança</a>
            </nav>
          </header>

          <div className="grid gap-9 pt-12 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-bold text-white/90">
                <Globe2 size={16} /> Health Passport Global
              </div>

              <h1 className="max-w-3xl text-[3rem] font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
                Seu histórico de saúde. Sempre com você. Em qualquer lugar do mundo.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                Organize seus exames, traduza e compartilhe seu histórico médico em segundos — em qualquer idioma.
              </p>

              <div className="mt-8 grid gap-3 sm:flex">
                <AppButton variant="white" onClick={() => go(screens.appLanding)}>Criar meu Passaporte de Saúde</AppButton>
                <a href="#como-funciona" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15">
                  Ver como funciona
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white/75">
                <LockKeyhole size={16} /> Seus dados são privados. Você controla tudo.
              </p>
            </div>

            <PhonePreview onStart={() => go(screens.appLanding)} />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <section className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-950/5 md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
            Toda vez que você cruza uma fronteira, seu histórico médico fica para trás.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Em uma emergência fora do país, explicar alergias, medicamentos, exames e histórico médico em outro idioma pode ser difícil, lento e arriscado.
          </p>
        </section>

        <section id="como-funciona" className="py-12 md:py-16">
          <SectionTitle title="Como funciona" subtitle="Três passos simples para deixar suas informações médicas prontas para qualquer atendimento." />
          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard icon={HeartPulse} number="1" title="Cadastre sua história" text="Inclua alergias, medicamentos, doenças, vacinas e dados básicos de emergência." />
            <InfoCard icon={Globe2} number="2" title="Traduza automaticamente" text="Seu passaporte fica disponível em português, inglês e espanhol." />
            <InfoCard icon={QrCode} number="3" title="Compartilhe em segundos" text="Gere um QR Code ou link seguro para qualquer médico acessar." />
          </div>
        </section>

        <section id="para-quem" className="py-4 md:py-10">
          <SectionTitle title="Para quem é" subtitle="A Sidemed nasce para pessoas que não podem depender da memória em uma emergência." />
          <div className="grid gap-4 md:grid-cols-3">
            <PersonaCard icon={Plane} title="Turistas" text="Para emergências médicas durante viagens de férias ou trabalho." />
            <PersonaCard icon={GraduationCap} title="Intercambistas" text="Para quem vai passar meses fora e precisa falar com médicos locais." />
            <PersonaCard icon={Home} title="Expatriados" text="Para quem vive fora e quer manter seu histórico sempre acessível." />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <SectionTitle title="O que tem no Health Passport" subtitle="As informações críticas em uma estrutura simples, acessível e compartilhável." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              "Histórico médico",
              "Alergias",
              "Medicamentos",
              "Vacinas",
              "Tipo sanguíneo",
              "Contatos de emergência",
              "Exames e documentos",
              "QR Code seguro",
            ].map((item) => (
              <div key={item} className="flex min-h-24 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-sm font-black shadow-sm">
                {item}
                <ChevronRight size={18} className="text-[#1A56FF]" />
              </div>
            ))}
          </div>
        </section>

        <section id="seguranca" className="py-4 md:py-10">
          <SectionTitle title="Segurança e privacidade" subtitle="Confiança não é detalhe. É parte central da experiência." />
          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard icon={LockKeyhole} title="Criptografia" text="Proteção dos dados sensíveis de saúde." />
            <InfoCard icon={ShieldCheck} title="LGPD e GDPR" text="Privacidade e consentimento desde o primeiro uso." />
            <InfoCard icon={Check} title="Acesso temporário" text="Você escolhe o que compartilhar e por quanto tempo." />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">Comece agora. É gratuito.</h2>
          <p className="mt-4 max-w-2xl text-white/65">Leva menos de 5 minutos para configurar seu passaporte de saúde.</p>
          <div className="mt-6">
            <AppButton variant="white" onClick={() => go(screens.appLanding)}>Criar meu passaporte</AppButton>
          </div>
        </section>
      </main>
    </div>
  );
}

function AppLandingContent({ go }) {
  return (
    <div className="min-h-[720px] bg-[#1A56FF] p-6 text-white">
      <div className="flex items-center justify-between">
        <Brand dark onClick={() => go(screens.webLanding)} />
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">MVP</span>
      </div>

      <div className="mt-16">
        <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-white/15">
          <HeartPulse size={32} />
        </div>
        <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.07em]">
          Seu histórico de saúde. Sempre com você.
        </h1>
        <p className="mt-5 text-base leading-7 text-white/80">
          Organize, traduza e compartilhe seu passaporte médico em minutos.
        </p>
      </div>

      <div className="mt-12 rounded-3xl bg-white/10 p-4">
        <div className="flex items-center gap-3">
          <LockKeyhole size={18} />
          <p className="text-sm font-semibold text-white/85">Seus dados são privados. Você controla tudo.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-3">
        <AppButton variant="white" onClick={() => go(screens.signup)}>Começar agora</AppButton>
        <AppButton variant="ghost" onClick={() => go(screens.signup)}>Já tenho conta — Entrar</AppButton>
      </div>
    </div>
  );
}

function SignupContent({ go }) {
  const [mode, setMode] = useState("social");

  return (
    <AppPageContent title="Crie sua conta sem fricção" subtitle="Nenhum dado médico é pedido antes da autenticação.">
      <div className="mt-6 grid gap-3">
        <AppButton variant="outline" onClick={() => go(screens.onboardingIntro)} icon={Globe2}>Continuar com Google</AppButton>
        <AppButton variant="outline" onClick={() => go(screens.onboardingIntro)} icon={Apple}>Continuar com Apple</AppButton>
        <AppButton variant={mode === "email" ? "primary" : "subtle"} onClick={() => setMode("email")} icon={Mail}>Entrar com e-mail</AppButton>
      </div>

      {mode === "email" ? (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 overflow-hidden">
          <label className="text-sm font-bold text-slate-700">
            E-mail
            <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" placeholder="voce@email.com" />
          </label>
          <AppButton className="mt-3 w-full" onClick={() => go(screens.onboardingIntro)}>Enviar link de acesso</AppButton>
        </motion.div>
      ) : null}

      <div className="mt-6 rounded-3xl bg-slate-50 p-4">
        <p className="flex gap-2 text-sm font-semibold leading-6 text-slate-600"><LockKeyhole className="mt-1 shrink-0" size={16} /> Seus dados são privados e criptografados. Nunca compartilhamos sem sua autorização.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["LGPD", "GDPR", "Criptografia"].map((item) => (
            <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-[#1A56FF]">{item}</span>
          ))}
        </div>
      </div>
    </AppPageContent>
  );
}

function OnboardingIntroContent({ go }) {
  const steps = [
    { icon: UserRound, title: "Perfil básico", text: "Nome, nascimento, nacionalidade e tipo sanguíneo." },
    { icon: ClipboardList, title: "Histórico médico", text: "Condições, medicamentos, cirurgias e observações." },
    { icon: AlertTriangle, title: "Alergias", text: "Informações que aparecem em destaque para médicos." },
  ];

  return (
    <AppPageContent title="Vamos montar seu passaporte em 3 passos" subtitle="Você pode sair e voltar. O app salva o progresso automaticamente.">
      <div className="mt-6 grid gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#1A56FF]">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-xs font-black text-[#1A56FF]">Passo {index + 1}</p>
                <h3 className="font-black tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
        <p className="flex gap-2 text-sm font-semibold leading-6"><BadgeCheck className="mt-1 shrink-0" size={16} /> Meta do setup: menos de 5 minutos, com o mínimo de fricção possível.</p>
      </div>

      <StickyAction>
        <AppButton className="w-full" onClick={() => go(screens.profile)}>Começar perfil básico</AppButton>
      </StickyAction>
    </AppPageContent>
  );
}

function AppPageContent({ children, title, subtitle }) {
  return (
    <div className="min-h-[720px] bg-slate-50 p-5 pb-28">
      <h1 className="text-3xl font-black leading-tight tracking-[-0.055em] text-slate-950">{title}</h1>
      {subtitle ? <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p> : null}
      {children}
    </div>
  );
}

function StepHeader({ step, progress }) {
  return (
    <div className="my-6">
      <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
        <span>{step}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-[#1A56FF]" />
      </div>
    </div>
  );
}

function ProfileContent({ go }) {
  return (
    <AppPageContent title="Vamos criar seu passaporte de saúde" subtitle="Estes são os dados que qualquer médico precisaria saber imediatamente.">
      <StepHeader step="Passo 1 de 3" progress={33} />

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Foto do paciente
          <div className="flex min-h-28 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-slate-500">
            <Upload size={20} />
            <span className="ml-2">Toque para enviar uma foto</span>
          </div>
        </label>
        <Field label="Nome" placeholder="Maria" required icon={UserRound} />
        <Field label="Sobrenome" placeholder="Oliveira" required />
        <Field label="Tipo sanguíneo" options={["Não sei", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} icon={Droplets} highlight />
        <Field label="Sexo" options={["Selecione", "Feminino", "Masculino", "Outro", "Prefiro não informar"]} />
        <Field label="Data de nascimento" type="date" required icon={Calendar} />
        <Field label="Nacionalidade" placeholder="Brasil" required icon={Globe2} />
        <Field label="Número do passaporte" placeholder="Opcional — recomendado para viagens" />
        <Field label="Altura em cm" placeholder="Opcional" type="number" />
        <Field label="Peso em kg" placeholder="Opcional" type="number" />
      </div>

      <p className="mt-4 text-xs text-slate-500">Você pode preencher os campos opcionais depois.</p>
      <StickyAction>
        <AppButton className="w-full" onClick={() => go(screens.history)}>Continuar para histórico médico</AppButton>
      </StickyAction>
    </AppPageContent>
  );
}

function Field({ label, placeholder, type = "text", required = false, options, icon: Icon, highlight = false }) {
  return (
    <label className={`grid gap-2 rounded-3xl text-sm font-bold text-slate-700 ${highlight ? "border border-blue-100 bg-blue-50/50 p-3" : ""}`}>
      <span className="flex items-center gap-2">
        {Icon ? <Icon size={16} className="text-[#1A56FF]" /> : null}
        {label} {required ? <span className="text-[#1A56FF]">*</span> : null}
      </span>
      {options ? (
        <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100">
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" />
      )}
    </label>
  );
}

function HistoryContent({ go }) {
  return (
    <AppPageContent title="Conte sua história médica" subtitle="Perguntas guiadas reduzem ansiedade e ajudam a criar um passaporte mais completo.">
      <StepHeader step="Passo 2 de 3" progress={66} />

      <div className="mt-6 grid gap-4">
        <QuestionCard title="Você tem alguma doença crônica ou autoimune diagnosticada?" icon={Activity}>
          <ToggleChips />
          <VoiceInput placeholder="Ex: diabetes, hipertensão, asma" />
        </QuestionCard>

        <QuestionCard title="Você faz uso de algum medicamento de forma contínua?" icon={Pill}>
          <ToggleChips initial="Sim" />
          <div className="grid gap-3">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" placeholder="Nome do medicamento" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" placeholder="Dose — ex: 50mg" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" placeholder="Via — ex: oral" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100" placeholder="Frequência — ex: 1x ao dia" />
          </div>
          <AppButton variant="subtle" className="w-full">+ Adicionar medicamento</AppButton>
        </QuestionCard>

        <QuestionCard title="Você já teve alguma cirurgia ou internação importante?" icon={ClipboardList}>
          <ToggleChips />
          <VoiceInput placeholder="Tipo / motivo + ano aproximado" />
        </QuestionCard>

        <QuestionCard title="Existe histórico familiar relevante?" icon={HeartPulse}>
          <ToggleChips />
          <VoiceInput placeholder="Ex: câncer, doenças cardíacas, diabetes" />
        </QuestionCard>

        <QuestionCard title="Hábitos de saúde" icon={Activity}>
          <ChipGroup label="Tabagismo" values={["Nunca fumou", "Fuma", "Fumava"]} />
          <ChipGroup label="Álcool" values={["Não consome", "Social", "Regular"]} />
          <ChipGroup label="Exercício físico" values={["Sedentário", "Leve", "Moderado", "Intenso"]} />
        </QuestionCard>

        <QuestionCard title="Há algo mais que um médico deveria saber em uma emergência?" icon={Mic}>
          <VoiceInput textarea placeholder="Ex: condição rara, dispositivo implantado, observações importantes..." />
          <p className="text-xs font-semibold text-slate-500">Salvamento automático ativo · máximo 500 caracteres</p>
        </QuestionCard>
      </div>

      <StickyAction>
        <AppButton className="w-full" onClick={() => go(screens.allergies)}>Salvar e continuar para alergias</AppButton>
      </StickyAction>
    </AppPageContent>
  );
}

function AllergiesContent({ go }) {
  const [hasNoAllergies, setHasNoAllergies] = useState(false);

  return (
    <AppPageContent title="Alergias" subtitle="Dados que salvam vidas e precisam aparecer primeiro em emergências.">
      <StepHeader step="Passo 3 de 3" progress={100} />

      <div className="mt-4 rounded-3xl border border-orange-200 bg-orange-50 p-4 text-orange-950">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 shrink-0" size={22} />
          <p className="text-sm leading-6 font-semibold">Esta informação é exibida em destaque para qualquer médico que acessar seu passaporte.</p>
        </div>
      </div>

      <div className={`mt-6 grid gap-4 ${hasNoAllergies ? "opacity-40" : ""}`}>
        <QuestionCard title="Alergias a medicamentos" icon={Pill}>
          <VoiceInput placeholder="Digite para buscar — ex: penicilina" />
          <TagList items={["Penicilina", "Dipirona"]} />
        </QuestionCard>

        <QuestionCard title="Alergias alimentares" icon={AlertTriangle}>
          <VoiceInput placeholder="Ex: amendoim, leite, glúten, frutos do mar" />
          <TagList items={["Frutos do mar"]} />
        </QuestionCard>

        <QuestionCard title="Outras alergias" icon={ClipboardList}>
          <VoiceInput placeholder="Ex: látex, picadas de inseto, poeira" />
        </QuestionCard>

        <QuestionCard title="Você já teve alguma reação grave?" icon={AlertTriangle}>
          <ToggleChips values={["Não", "Sim"]} />
          <VoiceInput textarea placeholder="Descreva a reação mais grave, se houver" />
        </QuestionCard>
      </div>

      <div className="mt-4">
        <AppButton variant={hasNoAllergies ? "primary" : "subtle"} className="w-full" onClick={() => setHasNoAllergies(!hasNoAllergies)}>
          {hasNoAllergies ? "Marcado: não tenho alergias conhecidas" : "Não tenho alergias conhecidas"}
        </AppButton>
      </div>

      <StickyAction>
        <AppButton className="w-full" onClick={() => go(screens.dashboard)}>Salvar e ir para dashboard</AppButton>
      </StickyAction>
    </AppPageContent>
  );
}

function DashboardContent({ go }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [lang, setLang] = useState("PT");

  return (
    <div className="min-h-[720px] bg-slate-50 p-5 pb-28">
      <section className="rounded-[2rem] bg-[#1A56FF] p-5 text-white shadow-xl shadow-blue-500/20">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">Passaporte ativo</span>
        <h1 className="mt-5 text-3xl font-black leading-tight tracking-[-0.055em]">Olá, {patient.firstName}. Seu passaporte está 82% completo.</h1>
        <p className="mt-3 text-sm leading-6 text-white/75">Complete campos críticos para deixar suas informações prontas para qualquer emergência.</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[82%] rounded-full bg-white" />
        </div>
      </section>

      <section className="mt-5 grid gap-4">
        <SummaryCard title="Identificação" text={`${patient.firstName} ${patient.lastName} · ${patient.bloodType} · ${patient.birthDate}`} onEdit={() => go(screens.profile)} icon={UserRound} />
        <SummaryCard warning title="Alergias" text={patient.allergies.join(", ")} onEdit={() => go(screens.allergies)} />
        <SummaryCard title="Histórico médico" text={`${patient.condition} · ${patient.medication}`} onEdit={() => go(screens.history)} icon={ClipboardList} />
        <SummaryCard title="Exames e documentos" text="2 documentos enviados · 1 traduzido para EN" icon={FileText} action="+ Adicionar" />
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-[#1A56FF]"><Languages size={20} /></div>
            <div>
              <h3 className="font-black tracking-tight text-slate-950">Idioma atual</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">Alterne como o passaporte será visualizado.</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["PT", "EN", "ES"].map((item) => (
              <button key={item} onClick={() => setLang(item)} className={`rounded-full border px-4 py-2 text-sm font-black ${lang === item ? "border-[#1A56FF] bg-blue-50 text-[#1A56FF]" : "border-slate-200 bg-white text-slate-700"}`}>{item}</button>
            ))}
          </div>
        </article>
      </section>

      <StickyAction>
        <div className="grid gap-3">
          <AppButton className="w-full" onClick={() => setShareOpen(true)} icon={QrCode}>Compartilhar com médico</AppButton>
          <AppButton variant="subtle" className="w-full" icon={FileText}>Baixar PDF de Emergência</AppButton>
        </div>
      </StickyAction>

      <AnimatePresence>
        {shareOpen ? <ShareModal onClose={() => setShareOpen(false)} /> : null}
      </AnimatePresence>
    </div>
  );
}

function ShareModal({ onClose }) {
  const [scope, setScope] = useState({ exams: false, history: true, allergies: true, identity: true });

  function toggle(key) {
    setScope((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-end bg-slate-950/50 p-0"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        className="w-full max-w-[390px] rounded-t-[2rem] bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">Compartilhar com médico</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">QR Code ou link seguro com acesso temporário.</p>
          </div>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-sm font-black"><X size={18} /></button>
        </div>

        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
          <QrCode className="mx-auto text-[#1A56FF]" size={96} />
          <p className="mt-3 text-sm font-bold text-slate-700">QR Code gerado</p>
          <p className="text-xs text-slate-500">Validade: 24 horas · Idioma: Inglês</p>
        </div>

        <div className="mt-4 rounded-3xl border border-slate-200 p-4">
          <p className="mb-3 text-sm font-black text-slate-950">O que será compartilhado</p>
          <div className="grid gap-2">
            <ShareToggle checked={scope.identity} label="Identificação" onClick={() => toggle("identity")} />
            <ShareToggle checked={scope.allergies} label="Alergias" onClick={() => toggle("allergies")} />
            <ShareToggle checked={scope.history} label="Histórico médico" onClick={() => toggle("history")} />
            <ShareToggle checked={scope.exams} label="Exames e documentos" onClick={() => toggle("exams")} />
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <AppButton className="w-full" icon={Share2}>Copiar link seguro</AppButton>
          <AppButton variant="subtle" className="w-full" onClick={onClose}>Fechar</AppButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ShareToggle({ label, checked, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className={`grid h-6 w-6 place-items-center rounded-full ${checked ? "bg-[#1A56FF] text-white" : "bg-slate-200 text-slate-400"}`}>
        {checked ? <Check size={14} /> : null}
      </span>
    </button>
  );
}

function ToggleChips({ values = ["Não", "Sim", "Pular"], initial = "Não" }) {
  const [selected, setSelected] = useState(initial);
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <button
          key={value}
          onClick={() => setSelected(value)}
          className={`rounded-full border px-4 py-2 text-sm font-black transition ${selected === value ? "border-[#1A56FF] bg-blue-50 text-[#1A56FF]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

function ChipGroup({ label, values }) {
  return (
    <div>
      <p className="mb-2 text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <ToggleChips values={values} initial={values[0]} />
    </div>
  );
}

function VoiceInput({ placeholder, textarea = false }) {
  const [recording, setRecording] = useState(false);
  const className = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#1A56FF] focus:ring-4 focus:ring-blue-100";

  return (
    <div>
      <div className="flex gap-2">
        {textarea ? (
          <textarea className={`${className} min-h-28 resize-none`} placeholder={placeholder} />
        ) : (
          <input className={className} placeholder={placeholder} />
        )}
        <button
          onClick={() => setRecording(!recording)}
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition ${recording ? "border-[#1A56FF] bg-blue-50 text-[#1A56FF]" : "border-slate-200 bg-slate-50 text-slate-600"}`}
        >
          <Mic size={20} />
        </button>
      </div>
      {recording ? <p className="mt-2 text-xs font-semibold text-[#1A56FF]">Simulação: ouvindo... toque novamente para confirmar.</p> : null}
    </div>
  );
}

function QuestionCard({ title, children, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#1A56FF]">
            <Icon size={20} />
          </div>
        ) : null}
        <h3 className="text-base font-black tracking-tight text-slate-950">{title}</h3>
      </div>
      <div className="mt-4 grid gap-4">{children}</div>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full bg-orange-50 px-3 py-2 text-xs font-black text-orange-900 ring-1 ring-orange-200">
          {item} ×
        </span>
      ))}
    </div>
  );
}

function SummaryCard({ title, text, onEdit, icon: Icon, warning = false, action }) {
  return (
    <article className={`rounded-3xl border p-5 shadow-sm ${warning ? "border-red-200 bg-red-50" : "border-slate-200 bg-white"}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-2xl ${warning ? "bg-red-100 text-red-700" : "bg-blue-50 text-[#1A56FF]"}`}>
            {warning ? <AlertTriangle size={20} /> : Icon ? <Icon size={20} /> : <Stethoscope size={20} />}
          </div>
          <h3 className="font-black tracking-tight text-slate-950">{title}</h3>
        </div>
        {onEdit ? <button onClick={onEdit} className="text-sm font-black text-[#1A56FF]">Editar</button> : null}
        {action ? <button className="text-sm font-black text-[#1A56FF]">{action}</button> : null}
      </div>
      <p className={`mt-4 text-sm leading-6 ${warning ? "text-red-900" : "text-slate-600"}`}>{text}</p>
    </article>
  );
}

function StickyAction({ children }) {
  return (
    <div className="sticky bottom-0 -mx-5 -mb-28 mt-6 bg-gradient-to-t from-slate-50 via-slate-50 to-slate-50/0 p-5">
      {children}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6 max-w-3xl">
      <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, number }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#1A56FF]">
        {number ? <span className="font-black">{number}</span> : <Icon size={22} />}
      </div>
      <h3 className="text-lg font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function PersonaCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#1A56FF]">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export default function SidemedWireframe() {
  const [screen, setScreen] = useState(screens.webLanding);

  function go(nextScreen) {
    setScreen(nextScreen);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const appScreens = [screens.appLanding, screens.signup, screens.onboardingIntro, screens.profile, screens.history, screens.allergies, screens.dashboard];
  const isAppScreen = appScreens.includes(screen);

  if (isAppScreen) {
    return (
      <AppPrototypeShell screen={screen} go={go}>
        {screen === screens.appLanding && <AppLandingContent go={go} />}
        {screen === screens.signup && <SignupContent go={go} />}
        {screen === screens.onboardingIntro && <OnboardingIntroContent go={go} />}
        {screen === screens.profile && <ProfileContent go={go} />}
        {screen === screens.history && <HistoryContent go={go} />}
        {screen === screens.allergies && <AllergiesContent go={go} />}
        {screen === screens.dashboard && <DashboardContent go={go} />}
      </AppPrototypeShell>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          <WebLanding go={go} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
