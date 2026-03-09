import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Verificar que la API key esté configurada
    if (!process.env.WEB3FORMS_KEY) {
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      )
    }

    // Formato correcto para Web3Forms
    // Los campos personalizados van dentro del mensaje
    const fullMessage = `
DATOS DE CONTACTO:
-------------------
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Servicio de interés: ${service || 'No especificado'}

MENSAJE:
-------------------
${message}
    `.trim()

    const formData = {
      access_key: process.env.WEB3FORMS_KEY,
      name: name,
      email: email,
      message: fullMessage,
      subject: `Nuevo mensaje de contacto - ${name}`
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    // Verificar qué está devolviendo la API
    const responseText = await response.text()
    console.log('Web3Forms response status:', response.status)
    console.log('Web3Forms response:', responseText)

    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Error parsing response:', parseError)
      console.error('Response was:', responseText)
      return NextResponse.json(
        { error: 'Error al comunicarse con el servicio de email' },
        { status: 500 }
      )
    }

    if (result.success) {
      return NextResponse.json(
        { message: 'Mensaje enviado correctamente' },
        { status: 200 }
      )
    } else {
      console.error('Error de Web3Forms:', result)
      return NextResponse.json(
        { error: result.message || 'Error al enviar el mensaje' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Error al procesar el mensaje:', error)
    return NextResponse.json(
      { error: 'Error al procesar el mensaje' },
      { status: 500 }
    )
  }
}
