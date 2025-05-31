import React from 'react';
import { Car, Download, Search, ScanLine, Wallet, Clock2 as Clock24, BarChart as ChartBar, Notebook as Robot, CreditCard, MessageSquare, Facebook, Twitter, Instagram, ChevronDown } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    city: "Lima",
    comment: "Encontrar cochera es súper fácil ahora. ¡La detección de placa es genial!"
  },
  {
    name: "Ana García",
    city: "Miraflores",
    comment: "Como propietaria, me encanta lo simple que es gestionar mi cochera."
  },
  {
    name: "Miguel Torres",
    city: "San Isidro",
    comment: "Pago rápido y seguro. La app funciona perfectamente."
  }
];

const faqs = [
  {
    question: "¿Cómo funciona el reconocimiento de placa?",
    answer: "Nuestra tecnología escanea automáticamente tu placa al llegar a la cochera, permitiendo un ingreso sin contacto."
  },
  {
    question: "¿Cuánto cuesta usar la app?",
    answer: "La descarga y registro son gratuitos. Solo pagas por el tiempo de uso de la cochera."
  },
  {
    question: "¿Qué tipos de vehículos se aceptan?",
    answer: "Aceptamos todos los vehículos particulares: autos, camionetas, motos y más."
  },
  {
    question: "¿Puedo pagar desde la app?",
    answer: "Sí, puedes pagar con tarjeta de crédito/débito o mediante otros métodos digitales."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/cocherago-removebg-preview.png" alt="CocheraGo Logo" className="h-12" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">Cómo funciona</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Beneficios</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Registrar cochera
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Encuentra tu cochera en segundos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conéctate con cocheras privadas seguras cerca de ti.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition">
                  <Download size={20} />
                  <span>App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition">
                  <Download size={20} />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition duration-500">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/sorteos-48def.appspot.com/o/imagenes%2Fcochera2.jpg?alt=media&token=2e92d7dd-619c-4d89-95a1-4a63d7fa89d5"
                  alt="App Preview"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Descarga la app</h3>
              <p className="text-gray-600">
                Disponible para iOS y Android. ¡Gratis!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Encuentra tu cochera</h3>
              <p className="text-gray-600">
                Busca por ubicación, precio o disponibilidad
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ScanLine className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Ingresa automáticamente</h3>
              <p className="text-gray-600">
                La detección de placa hace todo por ti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Beneficios</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Car className="w-6 h-6 mr-2 text-blue-600" />
                Para conductores
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Clock24 className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Disponible 24/7</span>
                </li>
                <li className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Pagos sin efectivo</span>
                </li>
                <li className="flex items-center">
                  <ScanLine className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Ingreso automático</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <ChartBar className="w-6 h-6 mr-2 text-blue-600" />
                Para propietarios
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Ganancias automáticas</span>
                </li>
                <li className="flex items-center">
                  <Robot className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Gestión inteligente</span>
                </li>
                <li className="flex items-center">
                  <ChartBar className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Reportes detallados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Tecnología de punta</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <ScanLine className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detección de placa</h3>
              <p className="text-gray-600">Reconocimiento automático al llegar</p>
            </div>
            <div className="text-center p-6">
              <Robot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Recomendadora</h3>
              <p className="text-gray-600">Sugerencias personalizadas</p>
            </div>
            <div className="text-center p-6">
              <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pagos automáticos</h3>
              <p className="text-gray-600">Sin efectivo, 100% digital</p>
            </div>
            <div className="text-center p-6">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tickets por WhatsApp</h3>
              <p className="text-gray-600">Comprobantes instantáneos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen nuestros usuarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Tienes una cochera vacía?
          </h2>
          <p className="text-xl text-white mb-8">
            ¡Empieza a ganar dinero hoy!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Registrarme como propietario
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/cocherago-removebg-preview.png" alt="CocheraGo Logo" className="h-12 mb-4" />
              <p className="text-gray-400">
                Conectando conductores con cocheras privadas de manera inteligente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Políticas de privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">contacto@cocherago.pe</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CocheraGo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;