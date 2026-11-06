CREATE TABLE public.distribuidor_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.distribuidor_leads TO anon;
GRANT ALL ON public.distribuidor_leads TO service_role;

ALTER TABLE public.distribuidor_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar el formulario"
ON public.distribuidor_leads
FOR INSERT
TO anon
WITH CHECK (true);