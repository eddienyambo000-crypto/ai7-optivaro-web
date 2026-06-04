-- ================================================================
-- AI7 OPTIVARO — Supabase Schema
-- Run this in the Supabase SQL Editor of your NEW ai7-optivaro project.
-- Powers: /team page, homepage testimonials, photo library, lead capture.
-- Blog table is a stub for Phase 2 (structure only, not yet wired to UI).
-- ================================================================

-- ── Team members (read by /team page + homepage team teaser) ──
create table if not exists team_members (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  role        text not null,
  bio_line    text,
  photo_url   text,
  since       date,
  sort_order  int  not null default 0,
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ── Testimonials (homepage proof + /testimonials page) ──
create table if not exists testimonials (
  id            uuid primary key default gen_random_uuid(),
  client_name   text not null,
  business      text,
  role          text,
  quote         text not null,
  photo_url     text,
  result_metric text,                       -- e.g. "70%+ admin time cut"
  industry      text,
  featured      boolean not null default false,   -- pin to homepage proof slot
  approved      boolean not null default false,   -- must be true to show publicly
  created_at    timestamptz not null default now()
);

-- ── Site photos (managed gallery / reusable image library) ──
create table if not exists site_photos (
  id          uuid primary key default gen_random_uuid(),
  label       text,
  image_url   text not null,
  category    text,
  sort_order  int  not null default 0,
  created_at  timestamptz not null default now()
);

-- ── Blog posts (STUB — Phase 2, structure only) ──
create table if not exists blog_posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text unique not null,
  excerpt     text,
  body        text,
  cover_url   text,
  published   boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ── Inquiries (lead capture — saved FIRST, before n8n auto-response) ──
create table if not exists inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  business    text,
  email       text,
  phone       text,
  goals       text[] default '{}',
  message     text,
  source      text default 'homepage',
  handled     boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ── Row Level Security ──────────────────────────────────────────
alter table team_members enable row level security;
alter table testimonials enable row level security;
alter table site_photos  enable row level security;
alter table blog_posts   enable row level security;
alter table inquiries    enable row level security;

-- Public can READ only what's meant to be public
create policy "Public read active team"      on team_members for select using (active = true);
create policy "Public read approved reviews" on testimonials for select using (approved = true);
create policy "Public read photos"           on site_photos  for select using (true);
create policy "Public read published posts"  on blog_posts   for select using (published = true);

-- Public can SUBMIT a lead (insert only — never read others' leads)
create policy "Public insert inquiries"      on inquiries    for insert with check (true);

-- NOTE: The admin panel (admin.html) uses the SERVICE-ROLE key, which
-- bypasses RLS, so it can read/write everything (including unapproved
-- reviews and all inquiries). Keep that key behind the admin password.

-- ── Seed: StepIn (the one real, current flagship client) ─────────
insert into testimonials (client_name, business, role, quote, result_metric, industry, featured, approved) values
(
  'Jean de Dieu Habaguhirwa',
  'StepIn Knowledge Business Coaching',
  'Founder',
  'Before Ai7 Optivaro, I was the whole sales team. Someone messages me about my programs — I reply 3 hours later. They are gone. I forget to follow up after a call. Another client lost. They built me a system that answers every lead in 60 seconds, qualifies them, and books them straight onto my calendar. I did not get more hours. I got a system that works for me 24/7. That is the difference.',
  '70%+ admin time cut',
  'Coaching & Education',
  true,
  true
);

-- ── Seed: founder (you can edit/add the rest from the admin panel) ──
insert into team_members (name, role, bio_line, sort_order, active) values
('Eddie Nyambo', 'Founder & AI Automation Engineer', 'Builds and delivers every automation system at Ai7 Optivaro.', 0, true);
