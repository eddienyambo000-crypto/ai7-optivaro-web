# Ai7 OPTIVARO — Brand Guidelines

## Identity
- **Agency Name:** Ai7 OPTIVARO
- **Tagline:** Automate Everything. Dominate Anything.
- **Founder:** BIKORIMANA DEOGRATIUS
- **Location:** Kigali, Kibagabaga, Rwanda
- **Founded:** 2026

## Color Palette

### Primary
| Name | Hex | Usage |
|---|---|---|
| Electric Blue | `#0057FF` | Primary buttons, links, highlights |
| Cyan Spark | `#00D4FF` | Glows, accents, hover states |

### Backgrounds
| Name | Hex | Usage |
|---|---|---|
| Void Black | `#040812` | Main background |
| Deep Navy | `#070F1E` | Section backgrounds, cards |
| Dark Surface | `#0A1628` | Elevated cards, nav |

### Text
| Name | Hex | Usage |
|---|---|---|
| Pure White | `#FFFFFF` | Primary headings |
| Off White | `#E8EDF5` | Body text |
| Steel Grey | `#8A9BB5` | Muted text, captions |
| Ice Glass | `rgba(0,87,255,0.12)` | Borders, glass cards |

### Semantic
| Name | Hex | Usage |
|---|---|---|
| Success Green | `#00D97E` | Status indicators (Active) |
| Warning Amber | `#F59E0B` | Caution states |

## CSS Variables (use these)
```css
--primary: #0057FF;
--cyan: #00D4FF;
--bg: #040812;
--bg-secondary: #070F1E;
--bg-surface: #0A1628;
--text: #FFFFFF;
--text-body: #E8EDF5;
--text-muted: #8A9BB5;
--border: rgba(0, 87, 255, 0.12);
--glow: rgba(0, 212, 255, 0.15);
```

## Typography
- **Headings:** Space Grotesk (Google Fonts) — weight 700, letter-spacing -0.03em
- **Body:** Inter (Google Fonts) — weight 400/500, line-height 1.7
- **Mono/Tags:** JetBrains Mono — for code, labels, process numbers

### Scale
- H1: `clamp(2.5rem, 6vw, 5rem)` — tight tracking
- H2: `clamp(1.8rem, 4vw, 3rem)`
- H3: `1.5rem`
- Body: `1rem / 1.125rem`
- Small: `0.875rem`

## Logo
- Text logo: "Ai7 OPTIVARO" — "Ai7" in Electric Blue, "OPTIVARO" in white
- Real logo: coming soon (placed in `brand_assets/logo.png` when ready)
- Minimum clear space: equal to height of "7" character on all sides

## Shadow System
```css
/* Card shadow */
box-shadow: 0 0 0 1px rgba(0,87,255,0.1), 0 4px 24px rgba(0,0,0,0.4), 0 0 40px rgba(0,87,255,0.05);

/* Glow effect */
box-shadow: 0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,87,255,0.1);

/* Button shadow */
box-shadow: 0 4px 20px rgba(0,87,255,0.4);
```

## Animation Principles
- Only animate `transform` and `opacity`
- Never `transition-all`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like)
- Stagger delays: 0.1s between elements
- Background: Three.js dotted surface particle animation

## Voice & Tone
- Calm authority — not loud, not desperate
- Direct and precise — every sentence earns its place
- Premium — the copy should feel like it came from a firm that knows its worth
- No exclamation marks in body copy
- Short sentences. Confident statements.

## Key Contacts (placeholder — update before launch)
- Email: hello@ai7optivaro.com
- WhatsApp: [to be added]
- Booking: [Calendly link to be added]
- Location: Kigali, Kibagabaga, Rwanda
