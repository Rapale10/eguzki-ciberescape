<div align="center">

# 🔐 Eguzki — CiberEscape

**Escape room interactivo de ciberseguridad para jóvenes**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

[![Hackathon](https://img.shields.io/badge/Hackathon-INCIBE%20Oviedo-red?style=for-the-badge)](https://www.incibe.es/)
[![Demo](https://img.shields.io/badge/🕹️%20Jugar%20Online-GitHub%20Pages-222?style=for-the-badge)](https://TU-USUARIO.github.io/eguzki-ciberescape)

</div>

---

## 🎯 ¿Qué es Eguzki?

**Eguzki** es una aplicación web gamificada diseñada para enseñar ciberseguridad de forma accesible, divertida y efectiva a jóvenes.

A través de un **escape room digital** con 5 niveles progresivos, los usuarios aprenden a identificar amenazas reales como phishing, ingeniería social, contraseñas débiles o redes WiFi falsas — las mismas técnicas que usan los ciberdelincuentes hoy en día.

> Desarrollado en el **Hackathon Internacional de Ciberseguridad de INCIBE (Oviedo, 2025)** en colaboración con la Universidad de Salamanca.

---

## 🕹️ Niveles del escape room

| # | Título | Amenaza real | Dificultad | XP |
|---|--------|-------------|------------|-----|
| 1 | La Nota en el Monitor | Contraseñas inseguras | 🟢 Fácil | 100 |
| 2 | El Impostor del DM | Phishing en redes sociales | 🟡 Medio | 250 |
| 3 | La WiFi del Centro Comercial | Redes WiFi falsas (Evil Twin) | 🟡 Medio | 350 |
| 4 | El USB Misterioso | Ataques por USB / Baiting | 🔴 Difícil | 500 |
| 5 | La Llamada del Banco | Vishing e ingeniería social | 🔴 Difícil | 600 |

Cada nivel completado otorga **XP** y desbloquea nuevos rangos, desde *Becario de Distrito* hasta *Protocolo Cero* 👑.

---

## ✨ Funcionalidades

- 🎮 **5 niveles de escape room** con mecánicas distintas en cada uno
- 🏆 **Sistema de XP y rangos** para motivar la progresión
- 🤖 **Asistente de IA integrado** (Gemini API) que da pistas contextuales
- 👤 **Perfil de usuario** con estadísticas, racha y niveles completados
- 🕹️ **Modo Arcade** para repasar conceptos
- 🌐 **Modo Online** para jugar con otros
- 📚 **Sección de Recursos** con material educativo adicional
- 📱 **Diseño responsive** — funciona en móvil y escritorio

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|-----------|-----|
| **React 19** | Framework UI |
| **TypeScript** | Tipado estático |
| **Vite 6** | Bundler y servidor de desarrollo |
| **Lucide React** | Iconos |
| **Google Gemini API** | IA para pistas y feedback |
| **GitHub Pages** | Despliegue web gratuito |

---

## 🚀 Ejecutar en local

### Prerrequisitos
- [Node.js](https://nodejs.org/) v18 o superior
- Una API Key de [Google AI Studio](https://aistudio.google.com/) (gratuita)

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TU-USUARIO/eguzki-ciberescape.git
cd eguzki-ciberescape

# 2. Instala las dependencias
npm install

# 3. Configura tu API Key
# Crea un archivo .env.local en la raíz del proyecto:
echo "GEMINI_API_KEY=tu_api_key_aqui" > .env.local

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

> **Nota:** El juego funciona sin API Key — los niveles usan pistas estáticas como fallback si no se detecta la clave.

---

## 📦 Build para producción

```bash
npm run build      # Genera la carpeta /dist
npm run preview    # Previsualiza el build localmente
```

---

## 🌐 Despliegue en GitHub Pages

Este repositorio está configurado para desplegarse automáticamente en GitHub Pages cada vez que hagas push a `main`. Solo tienes que activarlo una vez:

1. Ve a **Settings** → **Pages** en tu repositorio
2. En *Source*, selecciona **GitHub Actions**
3. ¡Listo! Tu próximo push desplegará el juego automáticamente

La URL será: `https://TU-USUARIO.github.io/eguzki-ciberescape`

---

## 👥 Equipo

Desarrollado durante el **Hackathon Internacional de Ciberseguridad — INCIBE Oviedo 2025**:

- **Raúl Pajares Leis** — Universidad de Salamanca
- *(resto de compañeros de equipo)*

Agradecimientos especiales a **INCIBE**, **Fundación Universidad de Oviedo** y **Universidad de Oviedo** por organizar y patrocinar el evento.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos en el contexto de un hackathon.

---

<div align="center">
  <i>Hecho con ☕ y muchas ganas de hacer la ciberseguridad accesible para todos</i>
</div>
