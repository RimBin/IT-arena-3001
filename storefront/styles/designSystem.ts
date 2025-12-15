export const designSystem = {
  brand: {
    name: "IT Arena",
    description: "Neumorfinis, šviesus tech stilius su moderniais gradientais ir stiklo tekstūromis",
  },
  colors: {
    base: {
      background: "#e8ecf4", // Neumorfinis fonas
      surface: "#f4f7ff",
      surfaceMuted: "#f0f4fc",
      surfaceSoft: "#dde3ef",
      textPrimary: "#0f172a",
      textSecondary: "#475569",
      textMuted: "#64748b",
    },
    accents: {
      primary: "#7c3aed",
      primaryLight: "#a855f7",
      primaryDark: "#5b21b6",
      secondary: "#6366f1",
      secondaryLight: "#a5b4fc",
      highlight: "#ec4899",
      success: "#10b981",
      warning: "#f59e0b",
      danger: "#ef4444",
    },
    neutrals: {
      white: "#ffffff",
      slate50: "#f8fafc",
      slate100: "#f1f5f9",
      slate200: "#e2e8f0",
      slate300: "#cbd5f5",
    },
    gradients: {
      hero: "linear-gradient(135deg, #f0f4fc 0%, #e8ecf4 60%, #dde3ef 100%)",
      accent: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6366f1 100%)",
      glass: "linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%)",
      stats: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 55%, #ec4899 100%)",
      info: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
    },
  },
  typography: {
    fontFamily: "'Clash Display', 'Manrope', 'Inter', sans-serif",
    headings: {
      h1: {
        size: "clamp(40px, 6vw, 72px)",
        weight: 700,
        tracking: "-0.04em",
      },
      h2: {
        size: "clamp(32px, 4vw, 52px)",
        weight: 700,
        tracking: "-0.02em",
      },
      h3: {
        size: "clamp(26px, 3vw, 40px)",
        weight: 600,
        tracking: "-0.01em",
      },
    },
    body: {
      large: {
        size: "18px",
        lineHeight: 1.7,
      },
      base: {
        size: "16px",
        lineHeight: 1.65,
      },
      small: {
        size: "14px",
        lineHeight: 1.6,
      },
    },
    decorative: {
      badge: {
        letterSpacing: "0.08em",
        weight: 600,
      },
      button: {
        letterSpacing: "0.02em",
        weight: 600,
      },
    },
  },
  spacing: {
    section: {
      vertical: "clamp(64px, 10vw, 120px)",
      horizontal: "clamp(16px, 4vw, 64px)",
    },
    card: {
      padding: "clamp(20px, 3vw, 32px)",
      gap: "clamp(16px, 2.5vw, 24px)",
    },
    layout: {
      maxWidth: "1440px",
      gridGap: "32px",
    },
  },
  shadows: {
    neumorphic: {
      raised: "8px 8px 16px #c5cad5, -8px -8px 16px #ffffff",
      medium: "10px 10px 20px #c5cad5, -10px -10px 20px #ffffff",
      inset: "inset 8px 8px 16px #c5cad5, inset -8px -8px 16px #ffffff",
    },
    glass: {
      surface: "0 24px 40px rgba(15, 23, 42, 0.18)",
      hover: "0 20px 30px rgba(79, 70, 229, 0.22)",
    },
    float: {
      small: "0 12px 24px rgba(15, 23, 42, 0.12)",
      large: "0 32px 64px rgba(15, 23, 42, 0.18)",
    },
  },
  radii: {
    base: "24px",
    card: "32px",
    badge: "9999px",
    input: "18px",
    button: "20px",
  },
  borders: {
    subtle: "1px solid rgba(255, 255, 255, 0.6)",
    glass: "1px solid rgba(255, 255, 255, 0.25)",
    strong: "1px solid rgba(99, 102, 241, 0.7)",
  },
  blur: {
    glass: "24px",
    overlay: "60px",
    floating: "32px",
  },
  animations: {
    float: "float 6s ease-in-out infinite",
    gradient: "gradient-shift 8s ease infinite",
    glow: "pulse-glow 4s ease-in-out infinite",
    hoverLift: "translateY(-8px)",
  },
  components: {
    badge: {
      padding: "6px 14px",
      style: "inset 6px 6px 12px #c5cad5, inset -6px -6px 12px #ffffff",
    },
    ctaButton: {
      padding: "16px 28px",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
      shadow: "0 24px 40px rgba(124, 58, 237, 0.35)",
    },
    card: {
      background: "#e8ecf4",
      shadow: "10px 10px 20px #c5cad5, -10px -10px 20px #ffffff",
      hoverShadow: "12px 12px 24px #c5cad5, -12px -12px 24px #ffffff",
    },
    glassPanel: {
      background: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      blur: "24px",
    },
  },
} as const;

export type DesignSystem = typeof designSystem;
