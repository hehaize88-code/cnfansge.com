import type { ArticleContent } from "./article-data";

export const articleEs: Record<string, ArticleContent> = {
  "litbuy-spreadsheet-guide": {
    title: "Cómo usar una hoja de cálculo LitBuy sin perder el anuncio original",
    deck: "Un método completo para mantener unidos el hallazgo, la página fuente, la imagen, el precio, la variante y la identidad del producto.",
    readTime: "13 min de lectura",
    sections: [
      { heading: "La ruta forma parte del producto", paragraphs: [
        "Una fila solo resulta útil cuando conserva un camino fiable hacia el anuncio que describe. El nombre por sí solo es una evidencia débil: puede abreviarse, traducirse, repetirse o cambiar. Una categoría genérica tampoco basta porque obliga al lector a buscar de nuevo. Trata la URL final, el ID fuente, la imagen y el nombre neutral como un único paquete de identidad. Si uno de esos elementos apunta a otro artículo, la fila todavía no está lista para publicarse.",
        "En litbuys.store la imagen abre un detalle local y la acción conduce al registro emparejado del catálogo principal. El detalle repite ID, importe CNY, referencia USD y fecha de revisión. Esos campos no garantizan inventario permanente, pero muestran qué se comparó. Si el vendedor modifica la ficha, es posible localizar el dato caducado en vez de enviar en silencio a un producto parecido. Preservar la identidad vale más que conservar un clic mediante una redirección genérica."
      ]},
      { heading: "Registra la identidad antes que el diseño", paragraphs: [
        "Empieza en la página fuente, no en el aspecto de la tarjeta. Guarda una URL limpia, sin parámetros de seguimiento innecesarios, y registra el ID en su propio campo. Escribe un nombre neutral basado en lo visible, como sudadera, camiseta o bolso compacto. No inventes modelo, material ni promesas de calidad que la ficha no confirme. Un nombre corto y comprobable ayuda más a usuarios y buscadores que un título decorativo cargado de atributos sin respaldo.",
        "Asocia después la imagen exacta de ese registro. Dos sudaderas negras o dos zapatillas blancas no son intercambiables: pueden tener vendedor, opciones, precio e ID distintos. Compara silueta, fondo, color, gráficos y accesorios. Si la ficha reúne varias opciones, deja claro si la imagen representa una sola. El ID visible permite auditar duplicados y volver a encontrar el producto cuando LitBuy o el catálogo cambian el formato de sus URL."
      ]},
      { heading: "Usa las imágenes como evidencia", paragraphs: [
        "Abre la imagen y el destino a tamaño suficiente. Comprueba el mismo recorte, fondo, combinación de color, paneles, estampado y piezas incluidas. Una fotografía simplemente parecida no es una coincidencia. Cuando existen variantes, aclara qué opción muestra la tarjeta y si el precio corresponde a ella. La imagen funciona como marcador de identidad; no promete existencias ni que todas las opciones visibles estén disponibles por el mismo importe.",
        "Mantén las imágenes a un tamaño web útil y utiliza texto alternativo descriptivo, pero evita filtros fuertes, fondos sustituidos o recortes que oculten detalles de verificación. Si la imagen falla, el nombre, ID y destino deben seguir siendo comprensibles. Y una imagen guardada no debe hacer parecer activa una ruta muerta. Disponibilidad, variantes, notas del vendedor y precio final siempre se vuelven a comprobar en la página en vivo."
      ]},
      { heading: "Separa precio orientativo y precio final", paragraphs: [
        "El precio de una hoja es una captura temporal. Registra primero el valor CNY mostrado por la fuente. Una segunda moneda ayuda a comparar, pero debe identificarse como conversión orientativa y mostrar su base. Tipo de cambio, talla, color, paquete, entrega doméstica y cambios del vendedor pueden alterar el total. La cifra USD de litbuys.store no es una cotización de pago ni una estimación del coste completo puesto en destino.",
        "Revisa también el selector de opciones. Un precio inicial bajo puede pertenecer a un accesorio, un depósito o la variante más barata, no a la configuración fotografiada. Si la información aparece solo tras interactuar, redacta con cautela y pide verificar la ficha activa. LitBuy usa un proceso de agente: la compra del producto y el transporte internacional son etapas separadas. Por eso el precio de una fila nunca debe presentarse como coste final del paquete."
      ]},
      { heading: "Detecta registros rotos o antiguos", paragraphs: [
        "Ninguna hoja permanece correcta por sí sola. Los vendedores retiran artículos, cambian imágenes, modifican opciones y migran sistemas. Añade una fecha visible y revisa con mayor frecuencia las filas con tráfico. No basta con que una página cargue: una pantalla de error suave puede devolver una respuesta normal. Confirma que siguen presentes la imagen esperada, la identidad, el ID y la zona de precio. Una comprobación real examina el contenido, no solo el estado técnico.",
        "Cuando falle una ruta, no la envíes silenciosamente a una categoría. Marca el artículo como no disponible, conserva el ID para auditoría o sustitúyelo después de verificar desde cero una coincidencia nueva. Si existen varios dominios o parámetros para la misma ficha, elige una versión canónica limpia. Este mantenimiento reduce duplicados y evita que una misma tarjeta lleve a destinos distintos o irrelevantes."
      ]},
      { heading: "Pasa del directorio al catálogo activo", paragraphs: [
        "Usa la hoja para filtrar por categoría, tipo de artículo y presupuesto de referencia, no para cerrar una compra. Abre el detalle local y verifica imagen, ID, base del precio y fecha. Después continúa al catálogo principal y revisa opciones actuales, medidas, notas del vendedor, existencias y total. Si falta un dato, busca mediante ID o descripción neutral en lugar de confiar en una captura antigua o un título recortado.",
        "Mantén pocos destinos externos. Un directorio se vuelve difícil de auditar cuando botones iguales conducen a plataformas diferentes, enlaces acortados o saltos innecesarios. Aquí las acciones de producto, categoría y búsqueda permanecen en un catálogo principal. La responsabilidad queda clara: litbuys.store organiza y explica; el catálogo enlazado controla la información viva y los pasos posteriores."
      ]},
      { heading: "Repite siete comprobaciones", paragraphs: [
        "Sigue siempre este orden: abre la fuente; guarda URL e ID; utiliza un nombre neutral; empareja la imagen exacta; registra precio y opciones; añade fecha; y prueba la ruta de imagen y la acción externa en escritorio y móvil. El orden establece identidad antes que presentación. Si una fila falla en cualquier punto, no se publica hasta resolver la diferencia. Este método es más lento que copiar automáticamente, pero evita errores que debilitan todo el directorio.",
        "Recorre finalmente la experiencia como lector: buscar, abrir categoría, elegir tarjeta, revisar detalle, visitar destino y volver. El idioma debe mantenerse en la misma página y las tarjetas móviles no deben provocar desplazamiento horizontal. El SEO útil no nace de repetir “LitBuy spreadsheet” en páginas delgadas. Nace de registros indexables, rutas internas estables, fechas honestas y destinos que cumplen la promesa visible de cada tarjeta."
      ]}
    ]
  },
  "litbuy-qc-photo-checklist": {
    title: "Fotos QC de LitBuy: qué puede demostrar una imagen de almacén",
    deck: "Una secuencia completa para revisar calzado, ropa, bolsos y accesorios sin confundir evidencia visible con una garantía.",
    readTime: "13 min de lectura",
    sections: [
      { heading: "Define lo que el QC puede probar", paragraphs: [
        "Una foto QC registra un artículo, un ángulo, una iluminación y un momento. Puede mostrar forma general, construcción visible, marcas, relaciones de color, suciedad, roturas y estado del embalaje. También puede confirmar la etiqueta de talla u opción fotografiada. No demuestra durabilidad, composición exacta, estructura oculta, comodidad, olor ni funcionamiento futuro. Empieza separando observaciones visibles de interpretaciones que la imagen no puede sostener.",
        "Ese límite coincide con los términos de reembolso de LitBuy, que describen el QC básico como verificación de cantidad, apariencia visible y defectos externos evidentes. No es un laboratorio ni un certificado de autenticidad. Escribe “la costura izquierda parece más alta en la vista frontal”, no “mala calidad”. Indica foto, ubicación y evidencia adicional necesaria. Así puedes solicitar una toma precisa en vez de una opinión vaga."
      ]},
      { heading: "Empieza por silueta y simetría", paragraphs: [
        "Mira frente, lado y parte trasera completos antes de ampliar logotipos o costuras. Las proporciones revelan errores que un detalle atractivo puede ocultar: zapatos con forma diferente, cuello desigual, paneles torcidos, bolsillos desplazados o un bolso que no queda recto. Compara izquierda y derecha usando centro, borde, suela, dobladillo o unión del asa. La perspectiva puede engañar; busca la misma diferencia en más de un ángulo.",
        "En calzado revisa punta, talón, paneles, unión de la suela y simetría del par. En ropa observa hombros, mangas, bajo, tapeta y posición del estampado. En bolsos compara asas, solapa, ribetes y base. Los accesorios necesitan a menudo anverso y reverso porque el cierre queda oculto. Resuelve primero estructura e identidad; una asimetría grande suele importar más que un hilo aislado."
      ]},
      { heading: "Lee la construcción en orden fijo", paragraphs: [
        "Utiliza la misma ruta: silueta, paneles, costuras, bordes, cierres, herrajes, superficie y etiquetas. La repetición evita que el ángulo principal distraiga de problemas prácticos. Sigue costuras largas de principio a fin y busca cambios repentinos, fruncidos o puntos omitidos. Comprueba bordes pegados, pintura visible y, cuando las fotos lo permitan, cremalleras, botones y hebillas tanto abiertos como cerrados.",
        "No conviertas la compresión digital en un defecto. Las imágenes pueden estar redimensionadas, enfocadas o tomadas con móvil; una línea borrosa no prueba una costura rota. Si la zona cambia tu decisión, pide una foto cercana y bien iluminada con ubicación y acción exactas: costura interior izquierda, cremallera cerrada o borde lateral de la suela. Las solicitudes precisas crean evidencia; preguntar si todo está bien produce opinión."
      ]},
      { heading: "Las medidas superan a las letras", paragraphs: [
        "Una etiqueta confirma la talla pegada al artículo, no su ajuste real. Los estándares varían entre vendedores, patrones y categorías. Compara dimensiones con una prenda propia usada de la misma forma. En tops revisa pecho, hombro, largo y manga. En pantalones, cintura plana, tiro, entrepierna y abertura. En bolsos, ancho, alto, fondo y caída del asa. En calzado, la longitud interior es más útil que una talla aislada.",
        "Una buena foto de medida muestra la cinta completa, el cero y el final sobre el artículo razonablemente plano. Un primer plano de una cifra carece de contexto. Considera elasticidad, grosor y diferencias de método. Si la fuente incluye tabla, compárala con la medición y acepta una tolerancia razonable. Cuando el ajuste decide la compra, una medida clara aporta más que varias fotos decorativas sin escala."
      ]},
      { heading: "Trata color y etiquetas con prudencia", paragraphs: [
        "Los LED del almacén, el balance automático, el contraste y cada pantalla cambian el color. Compara varios ángulos y referencias neutras como papel blanco, suelo gris o cinta métrica. Si el tono es decisivo, solicita luz más neutra, sabiendo que seguirá habiendo variación. Una foto demuestra mejor que dos paneles difieren entre sí que un nombre comercial exacto del color.",
        "Las etiquetas ayudan con talla, código, identificación y cuidado, pero no autentican procedencia ni material. Comprueba coherencia entre pedido, etiqueta colgante y etiqueta cosida. Cuando la ficha sea ambigua, no conviertas una fotografía del texto en certeza absoluta. Registra lo que se ve y limita la conclusión a la evidencia compartida por imágenes y datos del pedido."
      ]},
      { heading: "Comprueba el embalaje antes del envío", paragraphs: [
        "El embalaje afecta tanto al estado como al volumen facturable. Busca cajas aplastadas, herrajes expuestos, humedad, superficies sin protección y piezas sueltas. Decide si una caja minorista protege o solo ocupa espacio. Retirarla puede reducir dimensiones, pero también quitar estructura a zapatos, sombreros o accesorios frágiles. Pide refuerzo o separación solo cuando resuelva un riesgo visible, no como instrucción universal.",
        "Antes de presentar el paquete, confirma cantidad y opciones con ID y detalle distintivo. Los pedidos agrupados facilitan confundir colores o tallas parecidos. Una nota final identifica fuente, variante y rasgo visual. Comunica problemas mientras el artículo sigue accesible en el almacén. Después de entrar en transporte internacional, nuevas imágenes, devoluciones al vendedor y otras soluciones suelen ser más limitadas."
      ]},
      { heading: "Toma una decisión proporcional", paragraphs: [
        "Clasifica cada hallazgo como discrepancia confirmada, imperfección visible o pregunta abierta. Una talla equivocada es discrepancia. Un hilo o marca pequeña es visible, pero su importancia depende de ubicación y expectativas. Una sombra borrosa es una pregunta que requiere mejor imagen. La clasificación evita responder igual a todo y mantiene la atención en identidad, ajuste, función y seguridad de transporte.",
        "Documenta foto, lugar y siguiente paso. Acepta si la evidencia cumple tus criterios; solicita una vista específica si la incertidumbre es material; o pausa el paquete si identidad o condición principal son incorrectas. Ninguna lista elimina el juicio ni promete rendimiento futuro. El objetivo es convertir una revisión rápida en una decisión repetible antes de la fase internacional más costosa y menos reversible."
      ]}
    ]
  },
  "litbuy-shipping-weight-guide": {
    title: "Coste de envío LitBuy: peso real, volumétrico y facturable",
    deck: "Comprende los pesos, el primer tramo, el embalaje, el rehearsal y las reglas de cada ruta antes de convertir un cálculo en presupuesto.",
    readTime: "14 min de lectura",
    sections: [
      { heading: "Tres pesos, una factura", paragraphs: [
        "Las estimaciones confunden cuando “peso” nombra cálculos distintos. El peso real es el resultado del paquete terminado en báscula. El volumétrico transforma el espacio ocupado en una cifra mediante largo por ancho por alto dividido entre el divisor de la ruta. El peso facturable es el valor que la línea usa después de comparar, aplicar reglas y redondear. Puede ser el mayor entre real y volumétrico, pero siempre hay que leer la condición concreta.",
        "Por eso dos paquetes con los mismos productos pueden recibir precios diferentes. Uno compacto depende de la báscula; otro ligero en una caja grande depende del volumen. Las mismas dimensiones producen valores distintos si cambian divisor, unidades o convención. Nunca copies un divisor genérico como dato final. Consulta la línea elegida y confirma si las medidas corresponden al paquete antes o después del ajuste de embalaje."
      ]},
      { heading: "Calcula sin falsa precisión", paragraphs: [
        "Usa las dimensiones exteriores ya embaladas en la unidad solicitada. Multiplica, divide por el divisor actual, compara con el peso real y aplica el incremento de facturación. Un resultado de 2,01 kg puede cobrarse como 2,1, 2,5 o 3 kg según el servicio. Un calculador con muchos decimales sigue siendo inexacto si sus entradas describen el producto sin caja y no el paquete final.",
        "Los pesos de la ficha sirven para planificar, no para cerrar una factura. Pueden excluir protección, cartón, embalaje del vendedor y cambios de consolidación. Trabaja con rangos de peso y tamaño durante la compra. Así sabrás si el paquete es denso, voluminoso o está cerca de un umbral donde la medición rehearsal podría cambiar la ruta más conveniente."
      ]},
      { heading: "El embalaje modifica los dos lados", paragraphs: [
        "Quitar una caja puede reducir volumen, pero el embalaje más ligero no siempre es el mejor. Calzado, sombreros, vidrio, bolsos estructurados y herrajes expuestos pueden necesitar soporte. La ropa blanda se pliega con más fuerza, aunque puede arrugarse y la compresión no siempre reduce las medidas tanto como se espera. Evalúa la función protectora de cada capa antes de pedir su retirada.",
        "Consolidar elimina cajas repetidas y quizá cargos base, pero una forma irregular puede aumentar el lado más largo o activar sobredimensión. Pregunta si dividir cambia líneas disponibles, mínimos o seguro. La meta no es siempre una sola caja ni la caja más pequeña: es una forma que proteja los artículos y cumpla las reglas de tamaño y facturación de la ruta."
      ]},
      { heading: "Lee la ruta, no el precio titular", paragraphs: [
        "Un precio por kilo rara vez muestra todo. Puede haber primer tramo, incrementos, mínimo facturable, longitud máxima, límites de contorno, categorías restringidas o recargos de destino. Algunas líneas calculan volumen en todos los paquetes; otras aplican reglas especiales. Los plazos son estimaciones y pueden cambiar con aduanas, capacidad, clima, festivos o distribución local.",
        "Compara rutas con los mismos datos: destino, peso embalado, dimensiones, cálculo facturable, servicios incluidos y recargos visibles. Si una usa medidas estimadas y otra datos rehearsal, no es una comparación controlada. Separa transporte del coste completo: entrega doméstica, inspección opcional, embalaje, seguro, conversión de pago, impuestos y aranceles pueden quedar fuera de la línea de peso."
      ]},
      { heading: "Usa rehearsal en el momento adecuado", paragraphs: [
        "La medición previa aporta más cuando el paquete es voluminoso, está cerca de un límite o puede cambiar entre peso real y volumétrico. Sustituye suposiciones por un bulto medido y permite comprobar si retirar una caja grande o separar un artículo rígido abre otras líneas. En un paquete pequeño y denso, lejos de cualquier umbral, el beneficio es menor, aunque los datos embalados siguen siendo superiores a las estimaciones.",
        "No trates rehearsal como promesa de que el transportista medirá exactamente igual. Manipulación final, redondeo y verificación pueden crear diferencias. Conserva margen y, si la medición supera lo previsto, reconsidera protección, división o ruta antes de presentar. Es la última etapa práctica para modificar la configuración sin intentar recuperar un paquete ya en tránsito."
      ]},
      { heading: "Puntos específicos de LitBuy", paragraphs: [
        "El estimador de LitBuy explica que la unidad de primer peso es el mínimo cobrado por una línea. Un paquete por debajo se factura como la unidad completa y el peso posterior avanza por incrementos. Por eso perder unos gramos no cambia el precio si el bulto permanece en la misma banda. Anota primer tramo, continuación, dimensiones máximas y restricciones antes de retirar protección por una reducción que quizá no tenga efecto.",
        "La política de envío de LitBuy indica normalmente uno a tres días laborables de procesamiento de almacén, excluyendo fines de semana y festivos. Es tiempo antes del despacho, no promesa de entrega internacional. Tránsito, aduanas, clima y reparto son etapas separadas. Los reembolsos dependen de fallo confirmado o de que un paquete devuelto se reciba e inspeccione, no únicamente de superar una fecha estimada."
      ]},
      { heading: "Construye el presupuesto completo", paragraphs: [
        "Separa producto, movimiento doméstico, servicios opcionales, transporte internacional, margen de riesgo y cargos en destino. Las cifras USD de una hoja son referencias; cambio y proveedor de pago alteran el importe. Impuestos y aranceles dependen de país, mercancía, ruta y declaración, así que no deben inventarse como porcentaje universal. Consulta la regla aplicable cuando ese coste sea importante.",
        "Marca cada cifra como conocida, cotizada o supuesta: peso embalado conocido, dimensiones estimadas, divisor de la página actual, zona remota desconocida. Un margen cubre medición, redondeo y recargos publicados. Antes de presentar confirma destino, contenido, restricciones, medidas, peso facturable, protección y declaración. La cifra importante no es el menor peso visible, sino el paquete facturado bajo la línea que realmente usarás."
      ]}
    ]
  }
};
