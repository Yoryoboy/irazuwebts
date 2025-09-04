// @ts-expect-error TS2307
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// @ts-expect-error TS2307
import { Resend } from "npm:resend@6.0.2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { ...corsHeaders } });
  }

  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // podés usar el dominio verificado de tu empresa
      to: [email, "jdiaz@irazutechnology.com"], // copia al usuario + empresa
      subject: `Nuevo contacto de ${name}`,
      html: `<p><b>Nombre:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Mensaje:</b> ${message}</p>`,
    });

    if (result.error) {
      return new Response(JSON.stringify(result.error), {
        status: 500,
        headers: { ...corsHeaders },
      });
    }

    return new Response("Correo enviado con éxito", {
      status: 200,
      headers: { ...corsHeaders },
    });
  } catch (err) {
    return new Response(`Error: ${err}`, {
      status: 500,
      headers: { ...corsHeaders },
    });
  }
});
