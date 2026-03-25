export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Sanitize the phone number (keep only digits)
    const mobilePhone = data.mobile_phone?.replace(/\D/g, "");

    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "landing-page-armangni-indica",
        name: data.name,
        email: data.email,
        mobile_phone: mobilePhone,
        cf_nome_do_indicado: data.nome_do_indicado,
        cf_telefone_do_indicado: data.telefone_do_indicado,
        cf_email_do_indicado: data.email_do_indicado,
        cf_cidade_do_indicado: data.cidade_do_indicado,
        cf_cpf_do_indicador: data.cpf_do_indicador,
        nome_do_indicado: data.nome_do_indicado,
        telefone_do_indicado: data.telefone_do_indicado,
        email_do_indicado: data.email_do_indicado,
        cidade_do_indicado: data.cidade_do_indicado,
        cpf_do_indicador: data.cpf_do_indicador,
      },
    };

    const rdToken = process.env.RD_STATION_TOKEN;

    if (!rdToken) {
      console.error("RD_STATION_TOKEN não encontrado nas variáveis de ambiente");
      return new Response(JSON.stringify({ error: "Token RD Station não configurado" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const rdResponse = await fetch(`https://api.rd.services/platform/conversions?api_key=${rdToken}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!rdResponse.ok) {
      const errorData = await rdResponse.json();
      console.error("Erro ao enviar para RD Station:", errorData);
      return new Response(JSON.stringify({ error: "Erro ao enviar dados para RD Station", details: errorData }), {
        status: rdResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const rdData = await rdResponse.json().catch(() => ({})); // Algumas chamadas bem-sucedidas podem não retornar JSON

    return new Response(JSON.stringify({ success: true, message: "Conversão registrada com sucesso em RD Station" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro interno do servidor:", error);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
