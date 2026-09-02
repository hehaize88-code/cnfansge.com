import { englishArticles, type Article, type ArticleSlug } from "./seo-articles";
import { applyArticleDepth } from "./article-depth";
import { spanishDepth } from "./article-depth-es";

const withSources = (slug: ArticleSlug, article: Omit<Article, "sources">): Article => ({
  ...applyArticleDepth(article, spanishDepth[slug]),
  sources: englishArticles[slug].sources,
});

export const spanishArticles: Record<ArticleSlug, Article> = {
  "oopbuy-spreadsheet-guide": withSources("oopbuy-spreadsheet-guide", {
    eyebrow: "Guía de hoja OOPBuy",
    title: "Cómo usar una hoja OOPBuy como lista de comprobación, no como promesa",
    description: "Un método completo desde la ficha y la oferta activa hasta el QC del almacén y la planificación realista del paquete.",
    read: "12 min de lectura",
    updated: "1 de septiembre de 2026",
    sections: [
      { heading: "Qué puede hacer una hoja OOPBuy y qué no", paragraphs: [
        "Una hoja es ante todo un índice de investigación: ordena rutas de producto, identificadores, precios de referencia y pesos publicados. No demuestra existencias, materiales, calidad, autenticidad ni un envío barato.",
        "La compra contiene decisiones separadas: elegir la oferta, esperar la entrada en almacén, revisar el QC, decidir si devolver o enviar y comparar después una ruta internacional con datos medidos.",
        "Trabaja por categorías. Calzado, sudaderas, electrónica y accesorios tienen riesgos distintos de talla, embalaje y control. Tres candidatos comparables sirven más que treinta pestañas sin ordenar."
      ]},
      { heading: "Abrir siempre la ruta activa antes de comparar precios", paragraphs: [
        "Las páginas de vendedor cambian. El precio de una hoja puede corresponder a la variante más barata o a una promoción antigua. Comprueba canal, ID, color, talla, versión y descripción vigente.",
        "No compares solo conversiones a USD. Conserva el importe CNY y la fecha. Las fuentes revisadas el 1 de septiembre de 2026 se contradicen: el acuerdo vincula un 8 % al coste de envío, Service & Fees no anuncia otros cargos fuera de las categorías indicadas y Google Play dice que no hay comisión de servicio. No apliques un porcentaje fijo; confirma acuerdo, checkout y soporte por escrito.",
        "Una fila útil incluye ID, categoría, opción exacta, precio, envío nacional visible, fuente del peso, fecha y advertencia de riesgo. Así se puede mantener y auditar."
      ]},
      { heading: "Crear un rango de coste total antes de comprar", paragraphs: [
        "Al precio pueden sumarse transporte nacional, comisión del agente, conversión del pago, servicios de almacén, devolución, flete internacional, seguro y posibles cargos en destino. No todos aparecen en cada pedido.",
        "Calcula un escenario bajo y otro alto. El alto contempla mayor peso medido, embalaje rígido, cobro por volumen o una ruta menos favorable.",
        "Marca cada dato como confirmado o estimado. Precio activo, peso del vendedor, peso del almacén y cotización preliminar tienen distinta fiabilidad y no deben mezclarse."
      ]},
      { heading: "Usar el QC del almacén como decisión real", paragraphs: [
        "Tras la entrada, confirma primero identidad: color, talla, cantidad y rasgos principales. Después revisa forma, simetría, costuras, bordes, cierres, estampados y daños visibles.",
        "Las fotos muestran diferencias exteriores, pero no demuestran durabilidad, composición exacta, funcionamiento interno de electrónica ni autenticidad. Pide la vista decisiva si falta.",
        "La guía de devoluciones publicada indica cinco días desde la entrada para solicitudes ordinarias. Registra la fecha de almacén y el límite junto al artículo."
      ]},
      { heading: "Aprovechar almacenamiento y consolidación con criterio", paragraphs: [
        "La documentación oficial de OOPBuy anuncia 90 días de almacenamiento gratuito. Ese margen sirve para reunir artículos compatibles y terminar el QC, no para posponer la revisión.",
        "Un paquete mayor no siempre es más barato. Peso, dimensiones, mezcla de productos y límites de ruta pueden hacer preferible dividirlo, sobre todo con artículos voluminosos o restringidos.",
        "Sustituye los pesos del vendedor por medidas del almacén cuando existan y asigna un estado a cada producto: devolver, falta evidencia o aprobado para el paquete."
      ]},
      { heading: "Un flujo OOPBuy repetible", paragraphs: [
        "Elige categoría, compara tres ofertas, abre rutas activas, confirma la opción, calcula un rango, revisa el QC a tiempo y contrasta rutas actuales con las medidas finales.",
        "La hoja más fiable no es la más grande. Fecha sus comprobaciones, elimina rutas caducadas y separa con claridad datos del vendedor, estimaciones y hechos de almacén.",
        "Saldo, comisiones, políticas y líneas de envío deben verificarse en directo cuando toca decidir. La hoja facilita esa verificación, pero nunca la sustituye."
      ]},
    ],
  }),
  "oopbuy-qc-checklist": withSources("oopbuy-qc-checklist", {
    eyebrow: "Fotos QC de OOPBuy",
    title: "Fotos QC de OOPBuy: lista repetible para revisar el almacén",
    description: "Cómo comprobar identidad, calidad visible, medidas y pruebas ausentes en el orden correcto.",
    read: "12 min de lectura",
    updated: "1 de septiembre de 2026",
    sections: [
      { heading: "Qué pretende mostrar el QC de OOPBuy", paragraphs: [
        "OOPBuy describe inspección y fotos QC después de la entrada en almacén. Es un punto de control para confirmar que llegó un artículo visible parecido a la variante elegida.",
        "QC no significa certificación. Una imagen no prueba autenticidad, composición de fibras, impermeabilidad, batería, piezas internas ni durabilidad a largo plazo.",
        "Guarda antes el anuncio, opción exacta, tabla de tallas, color esperado y medidas importantes. Así compararás con datos y no con memoria."
      ]},
      { heading: "Paso uno: confirmar identidad antes que calidad", paragraphs: [
        "Compara cantidad, color, talla, etiqueta, versión y rasgos principales. En pares, comprueba que ambos coincidan; los accesorios descritos deberían aparecer.",
        "Mantén pedido y galería QC lado a lado. Si hay variantes parecidas, anota previamente la diferencia decisiva y conserva la referencia del pedido.",
        "Si una bolsa o embalaje oculta el producto, no deduzcas lo invisible. Usa la opción vigente de foto adicional o soporte cuando la decisión dependa de ello."
      ]},
      { heading: "Paso dos: de la forma general al detalle", paragraphs: [
        "En calzado revisa primero el par, punteras, talones, simetría y bordes de la suela. En ropa, proporciones, mangas, bajo, cuello y costuras torcidas.",
        "Después observa costuras, cantos, cierres, impresiones, hilos sueltos, manchas, arañazos y piezas faltantes. Valora varias vistas juntas.",
        "Escribe notas neutrales: el talón parece desigual en la vista trasera o falta foto con regla. Una observación precisa ayuda más al soporte que perfecto o inútil."
      ]},
      { heading: "Paso tres: medir ajuste y compatibilidad", paragraphs: [
        "Una etiqueta no demuestra el ajuste. Compara pecho, largo, hombro, manga, cintura o plantilla con una prenda o calzado propio que ya te quede bien.",
        "En electrónica comprueba modelo, enchufe, conectores, dimensiones, accesorios y daños visibles. Las fotos no prueban el funcionamiento interno; valora el riesgo restante.",
        "Define mínimos y tolerancias antes de abrir la galería. Si falta la medida decisiva, pide evidencia en vez de adaptar tus expectativas."
      ]},
      { heading: "Tratar los cinco días como plazo de trabajo", paragraphs: [
        "OOPBuy publica cinco días desde la entrada para devoluciones o cambios ordinarios. Política del vendedor, responsabilidad, envío nacional y servicio pueden afectar resultado y coste.",
        "Revisa avisos con rapidez y presenta una solicitud clara con referencia, variante elegida, diferencia concreta y foto correspondiente.",
        "Distingue un error del vendedor de un cambio de opinión. La información publicada advierte que las solicitudes atribuibles al cliente pueden añadir transporte y servicio."
      ]},
      { heading: "Documentar devolver, esperar o enviar", paragraphs: [
        "Cierra cada revisión con un estado: devolver, esperar evidencia o aprobado para planificar paquete. Así ningún artículo sin revisar entra por error en la consolidación.",
        "Guarda el resultado QC junto a la ruta y el peso de almacén. Esto permite justificar después si una recomendación se conserva, marca o elimina.",
        "El objetivo no es fabricar certeza. Explica qué se ve, qué falta y qué riesgo queda en comprador, vendedor, plataforma o transportista."
      ]},
      { heading: "Preguntas QC por categoría", paragraphs: [
        "Para calzado, guarda preguntas sobre simetría, suela, talón, puntera, talla y plantilla. Para ropa, color, etiqueta, medidas, impresión, costuras y manchas.",
        "Para bolsos revisa dimensiones, cierre, herrajes, asas y accesorios. En electrónica separa apariencia y función y considera solo las pruebas realmente ofrecidas.",
        "No publiques fotos QC de otros sin permiso. Un ejemplo nítido y anotado convence; un collage borroso o sin contexto reduce la confianza.",
        "Guarda la lista de preguntas junto al anuncio antes de comprar. Repetir los mismos criterios acelera el QC y permite comparar productos con una base común."
      ]},
    ],
  }),
  "oopbuy-shipping-planning": withSources("oopbuy-shipping-planning", {
    eyebrow: "Coste de envío OOPBuy",
    title: "Envío OOPBuy: peso, volumen, embalaje y riesgo de ruta",
    description: "Cómo estimar el transporte antes y después del almacén y entender correctamente cada cotización.",
    read: "13 min de lectura",
    updated: "1 de septiembre de 2026",
    sections: [
      { heading: "Por qué el precio del producto predice mal el envío", paragraphs: [
        "El flete depende de destino, ruta, peso, dimensiones, tipo de producto y embalaje. Un artículo ligero pero voluminoso o una caja de zapatos pueden resultar caros.",
        "Planifica antes de comprar: registra peso del vendedor, dimensiones embaladas probables y tipo de envase. Marca cajas rígidas, plumíferos, electrónica y objetos frágiles.",
        "Trabaja con un rango. El escenario alto contempla más peso, protección, cobro volumétrico y líneas menos favorables."
      ]},
      { heading: "Peso real, dimensional y facturable", paragraphs: [
        "Según la línea puede cobrarse peso real, cálculo por volumen o el mayor de ambos. Consulta el estimador OOPBuy y la descripción activa de la ruta.",
        "El peso del vendedor sirve para filtrar, el de almacén para afinar y las medidas del paquete para decidir. Etiqueta cada etapa.",
        "Quitar la caja puede ahorrar volumen, pero reduce protección o presentación. Decide según artículo, valor y riesgo, no como regla automática."
      ]},
      { heading: "El embalaje cambia precio y riesgo", paragraphs: [
        "OOPBuy recomienda bolsas de vacío para productos blandos voluminosos como plumíferos o peluches. Pueden reducir volumen, pero no convienen a artículos deformables.",
        "Protectores de esquina, barreras de humedad, cartones reforzados y protección de calzado deben resolver un riesgo concreto. También añaden material y peso.",
        "Termina el QC antes de elegir embalaje. No tiene sentido proteger y enviar un producto que habrías devuelto al ver una discrepancia."
      ]},
      { heading: "Consolidar pensando en la ruta", paragraphs: [
        "La guía permite seleccionar productos almacenados y enviarlos como paquete; los 90 días gratuitos dan margen. Aun así, cada consolidación necesita un plan.",
        "Compara al menos un paquete completo y una división. Un artículo voluminoso o restringido puede reducir las líneas disponibles para todo el conjunto.",
        "Mantén reserva por tipo de cambio, medición y cambios de ruta. Si solo funciona el cálculo optimista, la compra no es realmente asequible."
      ]},
      { heading: "Separar aduanas, restricciones y seguro", paragraphs: [
        "OOPBuy publica categorías prohibidas y restringidas. Que un vendedor entregue al almacén no significa que el producto pueda viajar internacionalmente.",
        "Nadie garantiza el resultado aduanero. Peso, volumen, valor y cantidad de unidades idénticas influyen en el riesgo; el destinatario debe cumplir las normas locales.",
        "La compensación depende de cada línea según OOPBuy. Lee cobertura, pruebas exigidas y exclusiones antes de elegir."
      ]},
      { heading: "Una mejor hoja de cálculo de envío", paragraphs: [
        "Por artículo registra precio, peso del vendedor, peso del almacén, contribución embalada, riesgo de embalaje y restricción. Por paquete, destino, medidas, regla, precio y fecha.",
        "Recalcula tres veces: antes de comprar, después de la entrada y justo antes de pagar. Cada ronda reemplaza hipótesis con evidencia mejor.",
        "No busques una línea siempre más barata. Busca la ruta activa adecuada para destino, paquete, mezcla, plazo y tolerancia al riesgo."
      ]},
      { heading: "Tres escenarios que revelan malas estimaciones", paragraphs: [
        "Un calzado barato con caja rígida puede encarecerse por volumen. Compara conservar caja, protección alternativa y retirada tras valorar daños.",
        "Varios plumíferos pesan poco pero ocupan mucho. Calcula medidas comprimidas y normales y verifica si el vacío sirve al material y a la línea.",
        "Un paquete mixto con un artículo sensible puede perder rutas. Cotiza la división y guarda destino, fecha, moneda, impuestos, seguro y cupón incluidos.",
        "Ejecuta cada escenario para el país real en el estimador vigente y vuelve a calcular después del embalaje final, porque pequeños cambios de medidas pueden alterar el tramo facturable."
      ]},
    ],
  }),
  "oopbuy-fees-total-cost": withSources("oopbuy-fees-total-cost", {
    eyebrow: "Comisiones OOPBuy",
    title: "Comisiones OOPBuy: calcula el coste total antes de comprar",
    description: "Separa precio, declaraciones públicas contradictorias sobre comisiones, envío nacional, devolución, pago y transporte internacional.",
    read: "12 min de lectura",
    updated: "1 de septiembre de 2026",
    sections: [
      { heading: "Empezar por el conflicto entre las fuentes de comisiones", paragraphs: [
        "Los materiales públicos de OOPBuy revisados el 1 de septiembre de 2026 no ofrecen una regla única. El acuerdo describe un 8 % del coste de envío, Service & Fees no anuncia otros cargos fuera de las categorías indicadas y la descripción actual de Google Play afirma que no hay comisión de servicio. No es correcto convertir esto en un 8 % del precio del producto.",
        "Sepárala del proveedor de pago, entrega del vendedor, servicios de almacén y flete internacional. Un único porcentaje para todo el pedido induce a error.",
        "Anota precio CNY, opción exacta e importe del checkout. Las diferencias pueden venir de envío nacional, servicio, cambio o variante."
      ]},
      { heading: "El envío nacional pertenece a la fase de producto", paragraphs: [
        "Muchos vendedores cobran aparte la entrega al almacén OOPBuy. No es el envío internacional y varía entre anuncios.",
        "Compara vendedores con producto, transporte nacional y comisión actual. El menor precio anunciado no siempre produce el menor coste de almacén.",
        "Guarda el transporte nacional como línea propia para no confundirlo después con el paquete internacional."
      ]},
      { heading: "Pago y tipo de cambio cambian el coste efectivo", paragraphs: [
        "La nota de PayPal de OOPBuy habla de conversión a USD y ajustes de cambio. La tarjeta también puede cobrar divisa o transacción internacional.",
        "Compara el saldo acreditado con el importe realmente cargado. No mezcles CNY, saldo USD y cambio bancario sin etiquetas.",
        "No declares un método de pago universalmente mejor. Disponibilidad y comisiones dependen de país, cuenta y proveedor vigente."
      ]},
      { heading: "Devoluciones y cambios pueden añadir costes", paragraphs: [
        "OOPBuy publica que una devolución atribuible al cliente puede incluir envío al vendedor, retorno y 5 CNY de servicio; un cambio puede sumar un segundo envío y 5 CNY.",
        "También publica cinco días desde la entrada para solicitudes ordinarias. Un QC lento puede reducir opciones y empeorar el coste.",
        "Reserva una pequeña cantidad para QC y revisa antes del transporte internacional. Devolver desde el país de destino puede ser poco práctico."
      ]},
      { heading: "El flete internacional es un pago separado", paragraphs: [
        "La guía oficial separa compra de mercancía y envío del paquete. El estimador requiere destino y datos, por lo que el mismo producto produce opciones distintas.",
        "Peso, medidas, embalaje, consolidación, restricciones, seguro y línea modifican la cotización. Los cupones temporales no deben convertirse en precio permanente.",
        "Trata impuestos y aduanas por separado salvo indicación expresa de la línea. Ninguna guía seria promete envío siempre libre de impuestos o incautación."
      ]},
      { heading: "Una fórmula completa de coste OOPBuy", paragraphs: [
        "Suma producto, transporte nacional, comisión actual, conversión, servicios opcionales, devoluciones activadas, flete, seguro y posibles cargos de destino.",
        "Separa confirmado y estimado. Checkout y almacén tienen más fuerza que el cálculo previo o una aduana posible. Sustituye estimaciones sin duplicarlas.",
        "Compara coste por artículo útil. Un QC fallido, un cambio o mucho volumen pueden destruir el ahorro aparente."
      ]},
      { heading: "Comparar dos pedidos OOPBuy de forma justa", paragraphs: [
        "Usa la misma moneda y el mismo límite: coste en almacén, coste de paquete o coste entregado. No compares un precio de artículo con un total final.",
        "Separa costes fijos y variables. Reparte el flete común por peso, volumen o valor y declara el método para que la comparación sea reproducible.",
        "Fecha cotizaciones y cupones, registra reembolsos como ajustes y marca confianza. Las declaraciones contradictorias sobre comisiones, los 5 CNY y las rutas actuales son referencias fechadas, no garantías eternas.",
        "Conserva capturas del checkout y de la cotización final para explicar cualquier diferencia posterior sin depender de memoria.",
        "Actualiza la hoja cuando cambien políticas o líneas: una comparación antigua puede seguir siendo útil como historial, pero no como precio vigente.",
        "Cierra la comparación con el coste por artículo realmente utilizable e indica si impuestos, seguro o descuentos ya estaban incluidos."
      ]},
    ],
  }),
  "is-oopbuy-legit-review": withSources("is-oopbuy-legit-review", {
    eyebrow: "Análisis OOPBuy 2026",
    title: "¿Es fiable OOPBuy? Flujo, quejas y pruebas revisadas en 2026",
    description: "Distingue funciones verificables, la advertencia actual de Trustpilot y experiencias de usuarios no verificadas.",
    read: "14 min de lectura",
    updated: "1 de septiembre de 2026",
    sections: [
      { heading: "Qué debería significar fiable en un análisis de OOPBuy", paragraphs: [
        "La pregunta reúne varias: si funciona el agente, si almacena productos, si ofrece QC, si envía paquetes y cómo resuelve problemas.",
        "Guías y acuerdos oficiales demuestran un flujo descrito, pero no la autenticidad de cada producto, todas las entregas ni soporte siempre excelente.",
        "Usa fuentes oficiales para reglas, cuenta activa para precios e informes independientes para patrones. Cada historia sigue siendo una experiencia seleccionada y no verificada."
      ]},
      { heading: "Qué ofrece el flujo oficial de OOPBuy", paragraphs: [
        "La guía describe enlace, compra, entrada, QC, almacenamiento y paquete. La página de protección anuncia inspección y 90 días gratuitos.",
        "Las devoluciones ordinarias deben pedirse dentro de cinco días desde la entrada; las fuentes actuales sobre comisiones se contradicen y deben verificarse en el acuerdo, checkout y soporte escrito.",
        "También hay límites: productos restringidos, ausencia de garantía aduanera y compensación según línea. Un análisis justo incluye ventajas y límites."
      ]},
      { heading: "Trustpilot muestra ahora una advertencia relevante", paragraphs: [
        "El 1 de septiembre de 2026, Trustpilot mostraba 906 reseñas pero sin nota global disponible por incumplimiento de directrices, y decía haber retirado reseñas falsas.",
        "La distribución visible era 75 % de cinco estrellas y 17 % de una. Los positivos mencionaban entrega y soporte; los negativos, costes, retrasos y QC.",
        "Son testimonios, no pruebas de cada pedido. Ni una antigua nota de cuatro estrellas ni una acusación individual de estafa resumen bien el servicio."
      ]},
      { heading: "Qué añaden las experiencias de Reddit y qué no", paragraphs: [
        "Un relato detallado de 2024 habló de uso fácil, QC irregular, soporte web lento, corrección de flete y entrega en 24 días, pero intención de repetir.",
        "Hilos posteriores mencionan esperas largas, respuestas lentas y transporte caro; otros usuarios cuentan resultados más rápidos.",
        "Estas publicaciones generan preguntas, no estadísticas. Fecha, destino, línea, código de referido y datos ausentes cambian su valor."
      ]},
      { heading: "Reducir riesgos en la práctica", paragraphs: [
        "Comprueba oferta activa, opción, talla, precio y envío nacional. Guarda ID y evidencia del vendedor; una hoja no garantiza calidad futura.",
        "Revisa QC pronto y con método. Evalúa identidad, estado visible y medidas dentro de los cinco días publicados y pide pruebas ausentes.",
        "Estima flete antes, recalcula con peso de almacén y paga solo con medidas finales. Incluye margen, restricciones y condiciones de compensación."
      ]},
      { heading: "Conclusión: evidencia en vez de atajos de reputación", paragraphs: [
        "OOPBuy documenta compra asistida, almacén, QC, paquete y posventa. Eso respalda la existencia de un servicio real, no todas sus afirmaciones.",
        "La advertencia de Trustpilot y la retirada de reseñas falsas impiden una recomendación simple por estrellas. Empieza pequeño, conserva poco saldo y guarda cotizaciones.",
        "La respuesta honesta es condicional: el flujo existe, pero el resultado depende del vendedor, artículo recibido, QC, ruta y solución de incidencias."
      ]},
      { heading: "Cómo pondera este análisis pruebas contradictorias", paragraphs: [
        "Los documentos oficiales pesan más para comisiones, plazos y normas, pero menos para promoción propia. Una pantalla activa supera a una guía antigua.",
        "Las reseñas se agrupan por temas, no se convierten en una nueva nota. Referidos, incentivos, cuentas borradas y falta de pedido reducen confianza.",
        "Una compra de prueba aporta datos de esa cuenta. Documenta compra, almacén, QC, cotización, envío, entrega y soporte, y actualiza el análisis cuando cambien las reglas.",
        "Al publicar la experiencia, declara destino, ruta, fecha y posibles incentivos para que el lector la interprete sin convertirla en una tasa general de éxito."
      ]},
    ],
  }),
  "oopbuy-order-status-interface-guide": withSources("oopbuy-order-status-interface-guide", {
    eyebrow: "Estado del pedido OOPBuy",
    title: "Cómo leer los estados de pedido de OOPBuy: guía verificada de la interfaz",
    description: "Interpreta cada estado como una cadena de pruebas fechada, identifica el objeto y la etapa responsable y escala con un registro completo.",
    read: "13 min de lectura",
    updated: "3 de septiembre de 2026",
    published: "2026-09-03",
    sections: [
      { heading: "Empezar por el objeto, no por la palabra de estado", paragraphs: [
        "Un estado de OOPBuy solo sirve si está unido al objeto correcto. El pedido de compra, el paquete nacional del vendedor, el artículo de almacén, el paquete internacional y el reembolso pueden tener estados distintos a la vez. Antes de interpretar la etiqueta, guarda número de pedido, ID, variante elegida y página donde aparece. Así no confundirás un evento del transportista con la entrada de almacén.",
        "OOPBuy publica una descripción específica de estados de compra y una Guía para principiantes del flujo completo. Úsalas como mapa y confirma después el texto de la cuenta activa. Las etiquetas pueden traducirse, abreviarse o cambiar. Si una palabra de la cuenta no figura en la explicación pública, cópiala exactamente y no la sustituyas por otra de una captura antigua.",
        "Crea una fila por cambio: objeto, estado mostrado, primera vez visto, última revisión, pantalla fuente, seguimiento relacionado, importe si procede y siguiente acción. La fila conserva mejor el contexto que una captura aislada. El estado prueba lo que mostraba la interfaz, no la causa oculta ni una fecha garantizada de finalización."
      ]},
      { heading: "Leer la compra como una cadena de responsabilidad", paragraphs: [
        "La primera cadena va desde envío y pago del pedido hasta compra por el agente, aceptación y despacho del vendedor. Separa un problema de pago de un retraso de compra. Un registro bancario puede mostrar movimiento de dinero mientras la orden aún requiere revisión; Purchased no demuestra por sí solo que el vendedor haya enviado la variante. Conserva transacción y estado por separado.",
        "Cuando aparece Purchased, normalmente el vendedor controla el siguiente movimiento físico. La guía actual de posventa usa ese estado para indicar el botón After-sale en la página Order. Eso no concede el mismo remedio a todos los pedidos: siguen importando reglas del vendedor, producto y control que muestre la cuenta. Guarda la acción visible junto con la etiqueta.",
        "Ante un retraso pregunta qué etapa no generó su siguiente prueba. Sin confirmación de compra, investiga el pedido. Con compra pero sin referencia nacional, investiga el despacho del vendedor. Con entrega nacional pero sin artículo de almacén, investiga recepción y registro. Esta formulación estrecha resulta más útil que una queja general."
      ]},
      { heading: "No llamar almacenamiento a una entrega nacional", paragraphs: [
        "El seguimiento del vendedor y el estado de almacén proceden de sistemas diferentes. Un transportista nacional puede marcar entrega antes de que el personal asocie el paquete, cuente, inspeccione y publique el artículo. Registra seguimiento, entrega y estado de almacén en líneas separadas. El intervalo entre ambos no demuestra automáticamente una pérdida.",
        "La Guía para principiantes dice que la inspección y las fotos llegan tras la recepción. Inspection Information incluye cantidad, color, talla, otras especificaciones y daños visibles. Es un control de almacén, no una prueba de calidad oculta, material o funcionamiento. Lee el estado almacenado junto con la evidencia visible y no como un certificado.",
        "Si la identidad es dudosa, conserva variante pedida, datos de despacho, cantidad recibida, etiqueta y fotos. No cambies el campo original para que coincida con lo recibido. Mantén esperado y observado uno al lado del otro, sobre todo si después pedirás prueba extra, devolución, cambio o aprobación para paquete."
      ]},
      { heading: "Separar almacenamiento y reloj de posventa", paragraphs: [
        "Stored o Stocked in confirma la etapa de almacén y activa una tarea urgente. La información actual de devoluciones calcula cinco días o 120 horas desde la hora completa siguiente a Stocked in; un aviso más nuevo usa Stored in Warehouse. Como el texto puede variar, guarda la etiqueta activa y su marca temporal antes de calcular el plazo.",
        "Presentar a tiempo no garantiza aprobación. Elegibilidad del vendedor y producto, responsabilidad, transporte nacional y servicios siguen siendo factores distintos. Registra por separado fecha límite y prueba de elegibilidad. Si llegó mal o dañado, adjunta opción y fotos; si cambiaste de preferencia, no lo describas como culpa del vendedor.",
        "El almacenamiento usa otro reloj. OOPBuy publica un período normal de 90 días desde Received o Stored. Sirve para consolidar, pero no amplía la decisión ordinaria de devolución. Coloca ambas fechas en el expediente para no confundir sigue almacenado con sigue siendo fácil devolverlo."
      ]},
      { heading: "Usar una tabla de estado y evidencia para cada pedido", paragraphs: [
        "Crea cinco columnas: objeto, estado exacto, prueba disponible, prueba ausente y siguiente responsable. Al pagar puede existir la transacción y faltar la compra. Tras despacho puede existir seguimiento nacional y faltar la entrada. En almacén existe el artículo y el siguiente paso pertenece al comprador: QC y decisión de posventa.",
        "Añade confianza: confirmado cuando cuenta y referencia coinciden; provisional cuando solo hay una pantalla o seguimiento sin enlace; contradictorio cuando dos páginas difieren. Conserva conflicto, horas y URLs sin elegir la etiqueta que parezca más avanzada.",
        "La tabla evita duplicar solicitudes. Si ya hay ticket o referencia de posventa, añade la nueva prueba a la misma cronología salvo que la interfaz diga otra cosa. Anota última respuesta, pregunta pendiente y fecha de revisión. Mensajes repetidos sin datos nuevos pueden ocultar el problema original."
      ]},
      { heading: "Escalar desde el último evento verificado", paragraphs: [
        "Antes de contactar soporte identifica el último evento demostrado y el siguiente ausente: pago a tal hora, falta confirmación de compra; o seguimiento entregado, falta entrada de almacén. Incluye referencia, opción, seguimiento o pago y capturas con fecha. No atribuyas una pérdida al vendedor, almacén o transportista sin prueba.",
        "Usa la vía correspondiente al objeto actual. La guía oficial dirige los pedidos Purchased a After-sale en Order; otros estados pueden mostrar botones distintos o atención al cliente. Sigue la interfaz activa y guarda confirmación, motivo, archivos y cualquier plazo que aparezca.",
        "Fija la próxima revisión según la respuesta o instrucción publicada, no según un nivel de servicio inventado. Si no existe plazo, anota cuándo comprobarás de nuevo sin presentar el silencio como fracaso. Cuando cambie el estado, añade el evento y reevalúa quién controla el paso."
      ]},
      { heading: "Ejemplo: un pedido, tres estados simultáneos", paragraphs: [
        "Imagina dos camisas de un anuncio y un bolso de otro. Las camisas muestran Purchased, su paquete del vendedor tiene seguimiento nacional y el bolso ya figura Stored. No hay contradicción: pedidos de compra, paquete nacional y artículo de almacén están en puntos distintos. Una sola etiqueta global no puede describir el conjunto.",
        "Para las camisas guarda talla, cantidad, hora de compra y seguimiento. Para el bolso guarda entrada, opción esperada, cantidad y QC. Puedes revisar ya el plazo de devolución del bolso mientras sigues el despacho de las camisas. Un estado general haul pending ocultaría la decisión urgente.",
        "No se trata de un cliente o pedido real. Ilustra el método: dividir por objeto, conservar horas y asignar la siguiente acción a quien controla la etapa. Funciona aunque cambien los nombres porque depende de transiciones demostradas y no de memorizar una barra de progreso."
      ]},
      { heading: "Lista final para estados de pedido", paragraphs: [
        "Confirma página, pedido, ID y opción antes de interpretar. Copia la etiqueta exacta, primera aparición y última revisión. Relaciona pago, seguimiento, almacén, posventa y reembolso solo si la cuenta muestra ese vínculo. Marca como desconocido lo ausente y como contradictorio lo que no coincide.",
        "Antes de actuar identifica etapa responsable y siguiente evento faltante. Revisa el almacén pronto, calcula el plazo de devolución desde el estado activo y sepáralo del almacenamiento. Usa el botón actual y conserva solicitud y respuesta en el mismo expediente.",
        "Una guía verificada no promete cuándo vendedor, almacén o transportista completarán el siguiente paso. Explica dónde está el pedido, qué evidencia lo respalda y qué dato falta. Esa es la diferencia entre leer un estado y adivinar a partir de él."
      ]},
    ],
  }),
};
